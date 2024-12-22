import { Routes } from '@angular/router';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CompraComponent } from './components/compra/compra.component';

export const routes: Routes = [
    {path: 'pessoas', component: PessoaComponent},
    {path: 'compras', component: CompraComponent}
];

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)],
  }).catch((err) => console.error(err));