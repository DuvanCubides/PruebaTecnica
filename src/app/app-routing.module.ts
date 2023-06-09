import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './Components/create/create.component';
import { EditComponent } from './Components/edit/edit.component';
import { MainComponent } from './Components/main/main.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {path: '', pathMatch:'full',redirectTo:'Main'},
  {path: 'Create', component: CreateComponent},
  {path: 'Edit/:id', component: EditComponent},
  {path: 'User/:id', component: UsersComponent},
  {path: 'Main', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
