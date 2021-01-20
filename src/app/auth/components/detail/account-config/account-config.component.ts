import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {CrudService} from 'src/app/services/crud.service';

@Component({
  selector: 'app-account-config',
  templateUrl: './account-config.component.html',
  styleUrls: ['./account-config.component.css']
})
export class AccountConfigComponent implements OnInit {
  employee: any;
  employeeName:string;
  employeeAge:number;
  employeeAddress:string;
  employeeSdt:string;
  employeePassword:string;
  message:string;
  constructor(public crudservice:CrudService) { }

  ngOnInit(): void {
    this.crudservice.get_Allemployee().subscribe(data => {

      this.employee = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          age: e.payload.doc.data()['age'],
          address: e.payload.doc.data()['address'],
          password: e.payload.doc.data()['password'],
          sdt: e.payload.doc.data()['sdt']
        };
      })
      console.log(this.employee);

    });
  }
    // this.crudservice.get_Allemployee().subscribe(data => {

    //   this.account = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       isedit: false,
    //       name: e.payload.doc.data()['name'],
    //       password: e.payload.doc.data()['password'],
    //       gmail: e.payload.doc.data()['gmail'],
    //       sdt: e.payload.doc.data()['sdt'],
    //       addr: e.payload.doc.data()['address'],
    //     };
    //   })
    //   console.log(this.account);

    // });
    // this.getAccount().subscribe((data) =>{
    //   this.accs = data;
    // })
  // CreateRecord()
  // {
  //   let Record = {};
  //   Record['name'] = this.name;
  //   Record['password'] = this.password;
  //   Record['gmail'] = this.gmail;
  //   Record['sdt'] = this.sdt;
  //   Record['address'] = this.addr;


  //   this.crudservice.create_Newemployee(Record).then(res => {

  //       this.name = "";
  //       this.password = "";
  //       this.gmail="";
  //       this.sdt = undefined;
  //       this.addr ="";
  //       console.log(res);
  //       this.message = "Employee data save Done";
  //   }).catch(error => {
  //     console.log(error);
  //   });

  // }

  // EditRecord(Record)
  // {
  //   Record.isedit = true;
  //   Record.editname = Record.name;
  //   Record.editpassword = Record.password;
  //   Record.editgmail = Record.gmail;
  //   Record.editsdt = Record.sdt;
  //   Record.editaddress = Record.address;

  // }
  // Updatarecord(recorddata)
  // {
  //   let record = {};
  //   record['name'] = recorddata.editname;
  //   record['password'] = recorddata.editpassword;
  //   record['gmail'] = recorddata.editgmail;
  //   record['sdt'] = recorddata.editsdt;
  //   record['address'] = recorddata.editaddress;
  //   this.crudservice.update_employee(recorddata.id, record);
  //   recorddata.isedit = false;
  // }

  // Deleteemployee(record_id)
  // {
  //   this.crudservice.delete_employee(record_id);
  // }
  CreateRecord()
  {
    let Record = {};
    Record['name'] = this.employeeName;
    Record['age'] = this.employeeAge;
    Record['address'] = this.employeeAddress;
    Record['password'] = this.employeePassword;
    Record['sdt'] = this.employeeSdt;

    this.crudservice.create_Newemployee(Record).then(res => {

        this.employeeName = "";
        this.employeeAge = undefined;
        this.employeeAddress ="";
        this.employeePassword ="";
        this.employeeSdt ="";
        console.log(res);
        window.alert(" Bạn đã lưu thành công");
    }).catch(error => {
      console.log(error);
    });

  }

  EditRecord(Record)
  {
    Record.isedit = true;
    Record.editname = Record.name;
    Record.editage = Record.age;
    Record.editaddress = Record.address;
    Record.editpassword = Record.password;
    Record.editsdt = Record.sdt;
  }

  Updatarecord(recorddata)
  {
    let record = {};
    record['name'] = recorddata.editname;
    record['age'] = recorddata.editage;
    record['address'] = recorddata.editaddress;
    record['password'] = recorddata.editpassword;
    record['sdt'] = recorddata.editsdt;
    this.crudservice.update_employee(recorddata.id, record);
    recorddata.isedit = false;
  }

  Deleteemployee(record_id)
  {
    this.crudservice.delete_employee(record_id);
  }
}
