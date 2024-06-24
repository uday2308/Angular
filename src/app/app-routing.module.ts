import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { FeedComponent } from './components/feed/feed.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sign-in', component: SignInComponent },
  { path:'feed', component: FeedComponent},
  { path: '', pathMatch: 'full', redirectTo: '/sign-in' },
  { path: '**', component: PnfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
