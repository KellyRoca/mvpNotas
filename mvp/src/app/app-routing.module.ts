import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentCardComponent } from './components/student-card/student-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'estudiante',
    component: StudentCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
