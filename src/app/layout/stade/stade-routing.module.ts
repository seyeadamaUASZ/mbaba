import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StadeComponent } from './stade.component';


const routes: Routes = [
    {
        path: '',
        component: StadeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StadeRoutingModule { }
