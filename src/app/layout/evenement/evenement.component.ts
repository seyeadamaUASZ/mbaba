import { EvenementserviceService } from './../../shared/services/evenementservice.service';
import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/model/model.evenement';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement { }
let ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
  displayedColumns = ['id', 'date', 'nom Evenement', 'edit', 'delete'];
  dataSources: any;
  dataEvenements: any;
  element: Evenement = new Evenement();

  constructor(private evenementService: EvenementserviceService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
     this.evenementService.loadEvenement()
     .subscribe(data => {
       ELEMENT_DATA = data;
       this.dataSources = new MatTableDataSource(ELEMENT_DATA);
       console.log(ELEMENT_DATA);
     });
  }

  saveEvenement(form: NgForm) {
    this.evenementService.saveEvenement(form)
    .subscribe(resp => {
      console.log('evenement ajoutee !!!');
      this.refresh();
    });
  }

  modifier(element: Evenement) {
    this.element = element;
  }

  deleteEvenement(evenement: Evenement) {
    this.evenementService.deleteEvenement(evenement.id)
    .subscribe(resp => {
       console.log('evenement supprimé !!');
       this.refresh();
    });
  }
}
