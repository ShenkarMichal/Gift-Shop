import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/gifts-area/list/list.component';
import { AddComponent } from './components/gifts-area/add/add.component';

const routes: Routes = [
  {path: "gifts", component:ListComponent },
  {path: "new", component: AddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
