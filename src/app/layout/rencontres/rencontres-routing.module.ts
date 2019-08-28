import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RencontresComponent } from './rencontres.component';

const routes: Routes = [
    {
        path: '',
        component: RencontresComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RencontresRoutingModule { }
