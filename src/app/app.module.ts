import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { CreateComponent } from './Components/create/create.component';
import { EditComponent } from './Components/edit/edit.component';
import { HeaderComponent } from './Components/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './Components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateComponent,
    EditComponent,
    HeaderComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
