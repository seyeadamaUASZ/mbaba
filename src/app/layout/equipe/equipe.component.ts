import { Component, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { MatTableDataSource } from '@angular/material';
import { NgForm } from '@angular/forms';
import { EquipeService } from 'src/app/shared/services/equipe.service';
import { Equipe} from 'src/model/model.equipe';


export interface PeriodicElement { }
let ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  equipe: Array<any>;
  od: any = {};
  displayedColumns = ['id', 'nom', 'zone', 'edit', 'delete'];
  dataSources: any;
  dataZone: any;
  element: Equipe = new Equipe();
  constructor(private equipeService: EquipeService, private zoneService: ZoneService) { }

  ngOnInit() {
    this.refresh();
    this.loadZone();
  }

  refresh() {
    this.equipeService.getEquipe()
      .subscribe(resp => {
        ELEMENT_DATA = resp;
        this.dataSources = new MatTableDataSource(ELEMENT_DATA);
        console.log(ELEMENT_DATA);
      });
  }

  loadZone() {
    this.zoneService.getZone()
      .subscribe(resp => {
        this.dataZone = resp;
      }, err => {
        console.log(err);
      });
  }

  saveEquipe(form: NgForm) {
    this.equipeService.saveEquipe(form)
      .subscribe(resp => {
        this.refresh();
        console.log('equipe ajoutée!!!');
      });
  }

  modifier(element: Equipe) {
    this.element = element;
    console.log(element);
  }

  deleteEquipe(equipe: Equipe) {
    this.equipeService.deleteEquipe(equipe.id)
      .subscribe(resp => {
        this.refresh();
        console.log('equipe deleteds');
      });
  }

}
