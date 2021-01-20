import { StorageService } from 'src/app/storage.service';
import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { ImageService } from 'src/app/image.service';
@Component({
  selector: 'app-home-config',
  templateUrl: './home-config.component.html',
  styleUrls: ['./home-config.component.css']
})
export class HomeConfigComponent implements OnInit {
  validateForm!: FormGroup;
  selectedFile: File;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  fileInfos: Observable<any>;
  homeConfig = null;
  constructor(private fb: FormBuilder, private image: ImageService,
    private dataService: DataService,
    private storage: StorageService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      background: [null, [Validators.required]],
    });
    this.storage.homeConfig.subscribe((data) => {
      this.homeConfig = data;
      if (this.homeConfig) {
        this.validateForm = this.fb.group({
          background: [null, [Validators.required]],
        });
      }
    });

  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {

      if (this.selectedFile) {
        this.uploadFile(this.selectedFile, this.getUrlImage.bind(this));
      } else {
        this.updateData();
      }

    }
  }
  onChangeFile(e): void {
    if (e) {
      this.selectedFile = e.target.files[0];
    }
  }
  submitImage(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {

      if (this.selectedFile) {
        this.uploadFile(this.selectedFile, this.getUrlImage.bind(this));
      } else {
        this.updateData();
      }

    }
  }
  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }
  uploadFile(file, callback): void {
    if (this.selectedFile) {
      this.image.updateImage(file, callback);
    }
  }
  updateData(): void {
    if (!this.selectedFile) {
      this.validateForm.value.background = this.homeConfig.background;
    }
    this.dataService.updateHomeConfigData('HomeConfig', this.validateForm.value).then(() => {
      window.alert('Lưu thay đổi thành công');
    }).catch((data) => {
      window.alert('Thất Bại');
    });
  }
  getUrlImage(): void {
    if (this.selectedFile) {
      this.image.getUrlImg(this.selectedFile.name).subscribe((url) => {
        this.validateForm.value.background = url;

        this.updateData();
      }, err => {
        window.alert('Lỗi');
      });
      return
    }
  }
}
