import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { E404Component } from './pages/e404/e404.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacityComponent } from './pages/privacity/privacity.component';

const routes: Routes = [

  // Rota para a página inicial
  // OBS: DEVE SER SEMPRE A PRIMEIRA ROTA
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Página inicial
  {
    path: 'home',
    component: HomeComponent,
    data: { title: '' }
  },

  // Página de contatos
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: 'Faça Contato' }
  },

  // Página sobre
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Sobre...' }
  },

  // Página de políticas de privacidade
  {
    path: 'privacity',
    component: PrivacityComponent,
    data: { title: 'Privacidade' }
  },

  // Página de "Rota inexistente"
  ///// OBS: DEVE SER SEMPRE A ÚLTIMA ROTA
  {
    path: '**',
    component: E404Component,
    data: { title: 'Erro 404' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
