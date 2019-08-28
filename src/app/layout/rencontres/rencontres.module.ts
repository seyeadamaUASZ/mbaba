import { MatFormFieldModule,
             MatSelectModule,
             MatOptionModule,
             MatTableModule,
             MatInputModule,
             MatIconModule,
             MatButtonModule,
             MatPaginatorModule,
             MatAutocompleteModule,
        // tslint:disable-next-line:import-spacing
            MatCardModule }
        from '@angular/material';
import { RencontresRoutingModule } from './rencontres-routing.module';
import { NgModule } from '@angular/core';
import { RencontresComponent } from './rencontres.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatAutocompleteModule,
        MatCardModule,
        MatTableModule,
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatPaginatorModule,
        FormsModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false }),
        RencontresRoutingModule
    ],
    declarations: [RencontresComponent]
})

export class RencontresModule {}
