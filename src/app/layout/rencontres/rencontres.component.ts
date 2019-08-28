import {Rencontre} from '../../../model/model.rencontre';
import { Component, OnInit } from '@angular/core';
import { RencontresServiceService } from 'src/app/shared/services/rencontres-service.service';
import { EquipeService } from 'src/app/shared/services/equipe.service';
import { StadeService } from 'src/app/shared/services/stade.service';
import { EvenementserviceService } from 'src/app/shared/services/evenementservice.service';
import { MatTableDataSource } from '@angular/material';
import { NgForm } from '@angular/forms';

export interface PeriodicElement { }
let ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-rencontres',
  templateUrl: './rencontres.component.html',
  styleUrls: ['./rencontres.component.scss']
})
export class RencontresComponent implements OnInit {
  displayedColumns = ['Evenement', 'Heure', 'Domicile',  'Exterieur', 'Stade', 'edit', 'delete'];
  dataSources: any;
  element: Rencontre = new Rencontre();
  dataEvenements: any;
  dataEquipes: any;
  dataStades: any;

  constructor(private rencontreService: RencontresServiceService,
     private equipeService: EquipeService,
    private stadeService: StadeService, private evenementS: EvenementserviceService) { }

  ngOnInit() {
    this.loadRencontres();
    this.loadEquipes();
    this.loadStades();
    this.loadEvenement();
  }

  loadEvenement() {
    this.evenementS.loadEvenement()
    .subscribe(data => {
        this.dataEvenements = data;
        console.log(this.dataEvenements);
    });
  }

  loadEquipes() {
    this.equipeService.getEquipe()
    .subscribe(data => {
      this.dataEquipes = data;
      console.log(this.dataEquipes);
    });
  }

  loadStades() {
    this.stadeService.getStade()
    .subscribe(data => {
      this.dataStades = data;
      console.log(this.dataStades);
    });
  }

  loadRencontres() {
    this.rencontreService.loadRencontres()
    .subscribe(data => {
      ELEMENT_DATA = data;
      this.dataSources = new MatTableDataSource(ELEMENT_DATA);
      console.log(ELEMENT_DATA);
    });
  }

  saveRencontre(form: NgForm) {
    this.rencontreService.saveRencontre(form)
    .subscribe(resp => {
      console.log('recontre ajoutée !!!');
      this.loadRencontres();
    });
  }

  modifier(element: Rencontre) {
    this.element = element;
  }

  deleteRencontre(element: Rencontre) {
    this.rencontreService.deleteRencontre(element.id)
    .subscribe(resp => {
      console.log('rencontre supprimée !!!');
    });

  }


}
