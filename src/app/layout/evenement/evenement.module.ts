import { FormsModule } from '@angular/forms';
import { EvenementRoutingModule } from './evenement-routing.module';
import { NgModule } from '@angular/core';
import { EvenementComponent } from './evenement.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatDatepickerModule, MatInputModule, MatIconModule, MatButtonModule, MatPaginatorModule, MatAutocompleteModule, MatTableModule } from '@angular/material';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    CommonModule,
    MatAutocompleteModule,
    MatOptionModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    EvenementRoutingModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ],
  declarations: [EvenementComponent]
})

export class EvenementModule {

}
