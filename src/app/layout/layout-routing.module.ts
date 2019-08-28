import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'components',
                loadChildren:
                    './material-components/material-components.module#MaterialComponentsModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule'
            },
            {
                path: 'grid',
                loadChildren: './grid/grid.module#GridModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'blank-page',
                loadChildren: './blank-page/blank-page.module#BlankPageModule'
            },
            {
                path: 'odcav',
                loadChildren: './odcav/odcav.module#OdcavModule'
            },
            {
                path: 'zone',
                loadChildren: './zone/zone.module#ZoneModule'
            },
            {
                path: 'equipe',
                loadChildren: './equipe/equipe.module#EquipeModule'
            },
            {
                path: 'stade',
                loadChildren: './stade/stade.module#StadeModule'
            },
            {
                path  : 'evenement',
                loadChildren: './evenement/evenement.module#EvenementModule'
            },
            {
                path: 'rencontres',
                loadChildren: './rencontres/rencontres.module#RencontresModule'
            },
            {
                path: 'terminal',
                loadChildren: './terminal/terminal.module#TerminalModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
