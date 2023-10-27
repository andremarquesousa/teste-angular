import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdbComponent } from './cdb/cdb.component';

const routes: Routes = [
    {
        path: 'cdb',
        component: CdbComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InvestmentsRoutingModule { }
