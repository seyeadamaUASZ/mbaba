import { Component, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { Zone } from 'src/model/model.zone';
import { OdcavService } from 'src/app/shared/services/odcav.service';
import { MatTableDataSource } from '@angular/material';
import { NgForm } from '@angular/forms';


export interface PeriodicElement { }
let  ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
  zone: Array<any>;
  od: any = {};
  displayedColumns = ['id', 'nom', 'odcav', 'edit', 'delete'];
  dataSources: any;
  dataZone: any;
  element: Zone = new Zone();
  dataOdcav: any;
  constructor(private zoneService: ZoneService, private odcavService: OdcavService) { }

  ngOnInit() {
    this.refresh();
    this.loadOdcav();
  }

  refresh() {
    this.zoneService.getZone()
    .subscribe(resp => {
       ELEMENT_DATA = resp;
      this.dataSources = new MatTableDataSource(ELEMENT_DATA);
       console.log(ELEMENT_DATA);
    });
  }

  loadOdcav() {
    this.odcavService.getAllOdcav()
    .subscribe(resp => {
       this.dataOdcav = resp;
    }, err => {
      console.log(err);
    });
  }

  saveZone(form: NgForm) {
    this.zoneService.saveZone(form)
    .subscribe(resp => {
      this.refresh();
      console.log('zone ajoutée!!!');
    });
  }

  modifier(element: Zone) {
    this.element = element;
    console.log(element);
  }

  deleteZone(zone: Zone) {
    this.zoneService.deleteZone(zone.id)
    .subscribe(resp => {
      this.refresh();
      console.log('zone deleteds');
    });
  }

}
