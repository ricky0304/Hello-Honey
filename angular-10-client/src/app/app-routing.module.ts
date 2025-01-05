import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloHoney } from './components/hello-honey/hello-honey.component';

const routes: Routes = [
  { path: '', redirectTo: 'honey', pathMatch: 'full' },
  { path: 'honey', component: HelloHoney }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
