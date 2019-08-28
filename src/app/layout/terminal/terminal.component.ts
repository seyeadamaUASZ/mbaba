import { Component, OnInit } from '@angular/core';
import { TerminalServiceService } from 'src/app/shared/services/terminal-service.service';
import { Terminal } from 'src/model/model.terminal';
import { MatTableDataSource } from '@angular/material';
import { NgForm } from '@angular/forms';


export interface PeriodicElement { }
let  ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  displayedColumns = ['id', 'nom', 'edit', 'delete'];
  dataSources: any;
  dataTerminals: any;
  element: Terminal = new Terminal();
  constructor(private terminalService: TerminalServiceService) { }

  ngOnInit() {
    this.loadTerminal();
  }

  loadTerminal() {
     this.terminalService.loadTerminal()
     .subscribe(data => {
       ELEMENT_DATA = data;
       this.dataSources = new MatTableDataSource(ELEMENT_DATA);
       console.log(ELEMENT_DATA);

     });
  }

  saveTerminal(form: NgForm) {
    this.terminalService.saveTerminal(form)
    .subscribe(resp => {
      console.log('terminal ajouté !!!');
      this.loadTerminal();
    });
  }

  modifier(element: Terminal) {
    this.element = element;
  }
  deleteTerminal(terminal: Terminal) {
    this.terminalService.deleteTerminal(terminal.id)
    .subscribe(resp => {
      console.log('terminal supprimé !!!');
      this.loadTerminal();
    });
  }

}
