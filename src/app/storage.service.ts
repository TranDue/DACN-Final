import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { ImageService } from './image.service';
import { COLLECTION } from 'src/app/shared/const';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  postCarosel: BehaviorSubject<any>;
  homeConfig: BehaviorSubject<any>;;
  postTable: BehaviorSubject<any>;
  staticConfig: BehaviorSubject<any>;
  contactConfig: BehaviorSubject<any>;
  postCaroselm;
  homeConfigm;
  constructor(private imageService: ImageService, private dataService: DataService) {
    this.postCarosel = new BehaviorSubject<any>([]);
    this.homeConfig = new BehaviorSubject<any>({});
    this.postTable = new BehaviorSubject<any>([]);
    this.staticConfig = new BehaviorSubject<any>(null);
    this.contactConfig = new BehaviorSubject<any>(null);
    this.updateDataFromFirebase();
  }

  updateDataFromFirebase(): void {
    this.dataService.getDateBaseId('HomeConfig', 'home-config').subscribe((data) => {
      const homeConfig: any = data.payload.data()
      this.homeConfig.next(homeConfig);
    })

    this.dataService.getDatas('posts').subscribe((data) => {
      const dataPayload = data.slice(0, 50).map((data) => data.payload.doc.data());
      this.postCarosel.next(this.convertDataToGroupThree(dataPayload));
    });

    this.dataService.getDateBaseId(COLLECTION.statistic, 'config').subscribe((data) => {
      const staticConfig: any = data.payload.data()
      this.staticConfig.next(staticConfig);
    });

    this.dataService.getDateBaseId(COLLECTION.contact, 'config').subscribe((data) => {
      const contactConfig: any = data.payload.data()
      this.contactConfig.next(contactConfig);
    });
  }
  convertDataToGroupThree(data) {
    let i = 0;
    return data.reduce((result, data, index) => {
      if (index % 3 === 0 && index !== 0) {
        i++;
        if (result[i]) {
          result[i].push(data);
          return result;
        } else {
          result[i] = [];
          result[i].push(data);
          return result;
        }
      }
      if (result[i] && index !== 0) {
        result[i].push(data);
        return result;
      } else {
        result[i] = [];
        result[i].push(data);
        return result;
      }

    }, [])
  }

  convertListDataFromFireBase(data) {
    return data.map((item) => {
      return { id: item.payload.doc.id, ...item?.payload?.doc?.data() };
    })
  }

}
