import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { PipesModule } from './common/pipes/pipes.module';
import { SimulatorComponent } from './common/components/simulator/simulator.component';
import { NgxCurrencyDirective } from 'ngx-currency';
import { NgSelectModule } from '@ng-select/ng-select';
import { DefaultModalComponent } from './common/components/modal/default-modal.component';
@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxMaskPipe,
    NgxCurrencyDirective,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    RouterModule,
    NgxMaskPipe,
    NgSelectModule,
    NgxCurrencyDirective,
    SimulatorComponent,
    DefaultModalComponent
  ],
  providers: [
    provideNgxMask()
  ],
  declarations: [
    SimulatorComponent,
    DefaultModalComponent
  ]
})
export class SharedModule { }
