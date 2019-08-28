import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { StadeService } from 'src/app/shared/services/stade.service';
import { Stade } from 'src/model/model.stade';

export interface PeriodicElement { }
let ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-stade',
  templateUrl: './stade.component.html',
  styleUrls: ['./stade.component.scss']
})

export class StadeComponent implements OnInit {
  stade: Array<any>;
  od: any = {};
  displayedColumns = ['id', 'nom', 'lieu', 'edit', 'delete'];
  dataSources: any;
  datastade: any;
  element: Stade = new Stade();
  constructor(private stadeService: StadeService, private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
    this.refresh();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSources.filter = filterValue;
  }

  save(form: NgForm) {
    this.stadeService.saveStade(form).subscribe(result => {
      this.refresh();
    }, error => console.error(error));
  }


  modifier(element: Stade) {
    this.element = element;
    console.log(this.element.id);
  }

  /*async update() {
    if (this.element.id !== undefined) {
      await this.odcavService.update(this.element);
      console.log('updated !!! ' + this.element.id);
    } else {
      await this.odcavService.save(this.element)
      .subscribe(resp => {
        console.log('odcav ajouté !!!');
      });
    }
    this.element = new Odcav();
  }*/

  deleteOdcav(stade: Stade) {
    this.stadeService.deleteStade(stade.id)
      .subscribe(resp => {
        console.log(stade);
        this.refresh();
      });
  }

  async refresh() {
    await this.stadeService.getStade().subscribe(data => {
      ELEMENT_DATA = data;
      this.dataSources = new MatTableDataSource(ELEMENT_DATA);
    });
  }
}

