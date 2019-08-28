
import { RouterModule, Routes } from '@angular/router';
import { EvenementComponent } from './evenement.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
 {
     path: '',
     component: EvenementComponent
}
];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
})
export class EvenementRoutingModule {}
