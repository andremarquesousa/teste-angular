import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { PipesModule } from './common/pipes/pipes.module';

export const options: Partial<IConfig> = {
  validation: true,
};

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    RouterModule,
  ],
  providers: [
    provideNgxMask(),
  ],
  declarations: [
  ]
})
export class SharedModule { }
