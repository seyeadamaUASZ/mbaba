import { Component, OnInit } from '@angular/core';
import { OdcavService } from 'src/app/shared/services/odcav.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Odcav } from 'src/model/model.odcav';

export interface PeriodicElement {}
let ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-odcav',
  templateUrl: './odcav.component.html',
  styleUrls: ['./odcav.component.scss']
})

export class OdcavComponent implements OnInit {
   odcav: Array<any>;
   od: any = {};
  displayedColumns = ['id', 'nom', 'edit', 'delete'];
  dataSources: any;
  dataodcav: any;
  element: Odcav = new Odcav() ;
  constructor(private odcavService: OdcavService, private route: ActivatedRoute,
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
    this.odcavService.save(form).subscribe(result => {
      this.refresh();
    }, error => console.error(error));
  }


 modifier(element: Odcav) {
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

   deleteOdcav(odcav: Odcav) {
     this.odcavService.delete(odcav.id)
     .subscribe(resp => {
       console.log(odcav);
       this.refresh();
     });
   }

   async refresh() {
      await this.odcavService.getAllOdcav().subscribe(data => {
       ELEMENT_DATA = data;
       this.dataSources = new MatTableDataSource(ELEMENT_DATA);
      });
 }
}

