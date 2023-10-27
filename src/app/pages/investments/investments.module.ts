import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { CdbComponent } from './cdb/cdb.component';

@NgModule({
    imports: [
        InvestmentsRoutingModule,
        SharedModule
    ],
    declarations: [CdbComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class InvestmentModule { }
