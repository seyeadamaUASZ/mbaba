import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { OdcavRoutingModule } from './odcav-routing.module';
import { OdcavComponent } from './odcav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule,
     MatAutocompleteModule,
     MatSlideToggleModule,
     MatInputModule,
     MatCheckboxModule,
     MatRadioModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatSelectModule,
    MatTableModule,
    MatSliderModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSliderModule,
        CommonModule,
        MatButtonModule,
        OdcavRoutingModule,
        Ng2Charts,
        MatCardModule,
        MatGridListModule,
        FormsModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [OdcavComponent]
})
export class OdcavModule {}
