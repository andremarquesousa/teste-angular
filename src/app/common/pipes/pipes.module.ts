import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DatePipe } from './date.pipe';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DatePipe
    ],
    exports: [
        DatePipe
    ],
    providers: [CurrencyPipe]
})
export class PipesModule { }
