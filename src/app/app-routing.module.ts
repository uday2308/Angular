import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PnfComponent } from './components/pnf/pnf.component';

const routes: Routes = [{ path: "home", component: HomeComponent }, { path: "contact", component: ContactComponent },
{ path: "sign-in", component: SignInComponent }, { path: "", pathMatch: "full", redirectTo: "/home" }, { path: "**", component: PnfComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
