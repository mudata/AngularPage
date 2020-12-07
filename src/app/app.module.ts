import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { CKEditorModule } from 'ckeditor4-angular';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.modules';
import {  MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatRadioModule, MatIconModule, MatTableModule, MatGridListModule, MatListModule, MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ToastrModule } from 'ngx-toastr';
import { ContactComponent } from './contact/contact.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ItemService } from './services/item.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AuthService} from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/authInterceptor.service';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ProfileComponent } from './profile/profile.component';
import {MatSelectModule} from '@angular/material/select';
import { EditComponent } from './edit/edit.component';
import { AlertModule } from './_alert';
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ItemAddComponent,
    ItemListComponent,
    ItemDetailComponent,
    ContactComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ProfileComponent,
    EditComponent,
  ],
  imports: [
    MatListModule,
    MatGridListModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    // ToastrModule.forRoot(),
    MatBadgeModule,
    CKEditorModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatButtonModule, 
    MatCardModule, 
    MatToolbarModule, 
    ReactiveFormsModule,
    AlertModule
  ],
  providers: [
    ItemService,
    AuthService, 
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
      }
  ],
  bootstrap: [
    // HeaderComponent,
    AppComponent,
    // FooterComponent
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
