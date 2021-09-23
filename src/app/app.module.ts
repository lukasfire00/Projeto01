import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importa componenets (pagina) do app
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacityComponent } from './pages/privacity/privacity.component';
import { E404Component } from './pages/e404/e404.component';
//importa biblioteca do firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
//importa a biblioetca do app
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    AboutComponent,
    PrivacityComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    AngularFireModule.initializeApp(environment.firebase)
    AngularFireAuthModule
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
