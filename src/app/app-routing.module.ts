import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Essay1Component} from './essay-1/essay-1.component';

const routes: Routes = [
    { path: 'essay_1', component: Essay1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
