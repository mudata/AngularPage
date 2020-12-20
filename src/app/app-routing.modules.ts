import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ItemAddComponent } from './item_controls/item-add/item-add.component';
import { ItemListComponent } from './item_controls/item-list/item-list.component';
import { ItemDetailComponent } from './item_controls/item-detail/item-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './item_controls/item-edit/edit.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-gaurd.service';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent,
    children: [
  { path: 'home', component: HomeComponent },
  { path: 'AngularPage', component: HomeComponent },
  { path: 'add', component: ItemAddComponent , canActivate:[AuthGuard],},
  { path: 'edit/:id', component: EditComponent , canActivate:[AuthGuard],},
  { path: 'list', component: ItemListComponent ,},
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login',component: LoginComponent },
  { path: 'register',component: RegisterComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'profile' , component: ProfileComponent , canActivate:[AuthGuard],},

]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

