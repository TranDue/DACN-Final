import { StorageService } from 'src/app/storage.service';
import { COLLECTION } from './../shared/const';
import { DataService } from './../data.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  backgroundImagePath: string;
  homeConfig: any;
	listComment: any;
  statisConfig;
	contact;
  constructor(private renderer: Renderer2, private imageService: ImageService, private dataService: DataService, private storageService: StorageService) { }
  ngOnInit(): void {
    let input_group_focus = document.getElementsByClassName('form-control');
		let input_group = document.getElementsByClassName('input-group');
		for (let i = 0; i < input_group.length; i++) {
			input_group[i].children[0].addEventListener('focus', function () {
				input_group[i].classList.add('input-group-focus');
			});
			input_group[i].children[0].addEventListener('blur', function () {
				input_group[i].classList.remove('input-group-focus');
			});
		}

		this.imageService.getUrlImg('background').subscribe((url) => {
			this.backgroundImagePath = url;
		});

		this.storageService.homeConfig.subscribe((homeConf) => {
			this.homeConfig = homeConf;
		});

		this.dataService.getDatas(COLLECTION.comments).subscribe((data) => {
			this.listComment = this.storageService.convertListDataFromFireBase(data);
		})

		this.storageService.staticConfig.subscribe((config) => {
			this.statisConfig = config;
		});

		this.storageService.contactConfig.subscribe((data) => {
			this.contact = data;
		})
	}
}
