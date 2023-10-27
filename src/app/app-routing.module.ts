import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
        {
          path: '',
          runGuardsAndResolvers: 'always',
          loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        },
        {
          path: 'investimentos',
          runGuardsAndResolvers: 'always',
          loadChildren: () => import('./pages/investments/investments.module').then(m => m.InvestmentModule),
        },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
