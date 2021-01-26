import { CrudService } from './../../../../services/crud.service';
import { StorageService } from 'src/app/storage.service';
import { HEADER_POSTS } from './../../../../shared/const';
import { ImageService } from 'src/app/image.service';
import { DataService } from './../../../../data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/firebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
interface Booklist {
  title: string,
  id: number,
  tenSach: string,
  noidung: string,
  theloai: string,
  ngayxuatban: string,
  manhasanxuat: number,
  tacgia: string,
  Sotrang: number,
  gia: number,
  anhSach: string,
}
@Component({
  selector: 'app-sanpham-config',
  templateUrl: './sanpham-config.component.html',
  styleUrls: ['./sanpham-config.component.css']
})
export class SanphamConfigComponent implements OnInit {
  backgroundImagePath: string;
  index: number;
  @Input() postInfo: any;
  title: string;
  posts: any;
  books: Booklist[] = [];
  @Input() data;
  @Input() template: any = null;
  @Input() pageSize: any = 10;
  @Output() onRowClicked = new EventEmitter<number>();
  validateForm!: FormGroup;
  selectedFile: File;
  dataTable;
  header = HEADER_POSTS;
  Modal: any;
  constructor(private HttpClient: HttpClient,
    private imageService: ImageService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private fb: FormBuilder,
    private cartService: CartService,
    private firebaseS: FirebaseService,
    private crudservice: CartService
    // private modal: NzModalService,
    // private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.dataService.getDatas('list-sach').subscribe((data) => {
      this.dataTable = this.storageService.convertListDataFromFireBase(data);
    });
    this.validateForm = this.fb.group({
      tenSach: [null, [Validators.required]],
      noidung: [null, [Validators.required]],
      theloai: [null, [Validators.required]],
      ngayxuatban: [null, [Validators.required]],
      manhasanxuat: [null, [Validators.required]],
      tacgia: [null, [Validators.required]],
      Sotrang: [null, [Validators.required]],
      gia: ['VND'],
      background: [null, [Validators.required]],
    });

    if (this.data) {
      this.validateForm = this.fb.group({
        tenSach: [this.data.tenSach, [Validators.required]],
        noidung: [this.data.noidung, [Validators.required]],
        theloai: [this.data.theloai, [Validators.required]],
        ngayxuatban: [this.data.ngayxuatban, [Validators.required]],
        manhasanxuat: [this.data.nhacc, [Validators.required]],
        tacgia: [this.data.tacgia, [Validators.required]],
        Sotrang: [this.data.Sotrang, [Validators.required]],
        gia: [this.data.gia, Validators.required],
        background: [null],

      })
    }
    this.firebaseS.getDatas('list-sach').subscribe((data) => {
      console.log(data);
      this.books = this.firebaseS.convertListDataFromFireBase(data);
      console.log(this.books)
    })
  }
  onRowClicked1(rowInfo) {
    this.Modal.create({
      nzTitle: 'Chi Tiết Sản Phẩm',
      nzContent: SanphamConfigComponent,
      nzWidth: '60%',
      nzComponentParams: {
        postInfo: rowInfo
      },
      nzCloseIcon: null,
      nzAutofocus: null
    });
  }
  addData(books): void {
    this.cartService.addDatas(books);
  }
  addPosts(): void {
    this.Modal.create({
      nzTitle: 'Thêm sản phẩm',
      nzContent: SanphamConfigComponent,
      nzWidth: '60%',
      nzCloseIcon: null,
      nzAutofocus: null
    });
  }
  editPosts(event: Event, dataInfo) {
    event.stopPropagation();
    this.Modal.create({
      nzTitle: 'Chỉnh sửa đơn hàng',
      nzContent: SanphamConfigComponent,
      nzWidth: '60%',
      nzCancelDisabled: true,
      nzComponentParams: {
        data: dataInfo
      },
      nzCloseIcon: null,
      nzAutofocus: null
    });
  }
  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      this.uploadFile(this.getUrlImage.bind(this));
    }
  }
  uploadFile(fn): void {
    this.imageService.updateImage(this.selectedFile, fn);
  }
  getUrlImage(): void {
    if (this.selectedFile) {
      this.imageService.getUrlImg(this.selectedFile.name).subscribe((url) => {
        this.validateForm.value.background = url;
        if (this.data) {
          this.updateData();
        } else {
          this.saveData();
        }
      }, err => {
        window.alert('Lỗi');
      });
      return
    }
    if (this.data) {
      this.updateData();
    }
  }
  saveData(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {

      if (this.selectedFile) {
        this.uploadFile(this.selectedFile);
      } else {
        this.updateData();
      }

    }
    this.validateForm.value.dateCreate = new Date();
    this.dataService.addData('list-sach', this.validateForm.value).then(() => {
      window.alert('Thêm sản phẩm thành công!')
      this.validateForm.reset();
    }).catch((data) => {
      window.alert('Thêm sản phẩm lỗi!' + data.toString());
    });


  }

  updateData(): void {
    if (!this.validateForm.value.background) {
      this.validateForm.value.background = this.data.background;
    }
    this.dataService.updateDataBaseId('posts', this.data.id, this.validateForm.value).then(() => {
      window.alert('Cập  thành công!')
    }).catch((data) => {
      window.alert('Cập viết lỗi!' + data.toString());
    });
  }
  onChangeFile(e): void {
    if (e) {
      this.selectedFile = e.target.files[0];
    }
  }
  handleOnRowClicked(data) {
    this.onRowClicked.emit(data);
  }

  trackByIndex(_: number, data: SanphamConfigComponent): number {
    return data.index;
  }
  confirmDelete(data) {
    this.dataService.deleteData('posts', data?.id).then((data) => {
      window.alert('Xóa thành công');
    }).catch((data) => {
      window.alert('Xóa thất bại ' + data.toString())
    });
  }
  deletePost(event, data) {
    event.stopPropagation();
  }
}
