import { NgModule } from '@angular/core';
import { TerminalComponent } from './terminal.component';
import { TerminalRoutingModule } from './terminal-routing.module';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
   imports: [
     MatCardModule,
     MatFormFieldModule,
     MatInputModule,
     FormsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatAutocompleteModule,
     TerminalRoutingModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
   ],
   declarations: [TerminalComponent]
})

export class TerminalModule {

}
