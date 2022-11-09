import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { DishService } from './services/dish.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
// Decorator @NgModule: Modifies the use of JS classes
// This decorator module is essentially AppModule
// Within NgModule contains meta-data for defining AppModule
@NgModule({

  // Declaration props declares the view classes (or Components) that belong to this module
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent 
  ],

  // This are the imports needed for this module (AppModule)
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],

  providers: [
    DishService,
  ], // Providers specifies the services this module needs

  bootstrap: [AppComponent] // To boostrap this Angular app, we need to bootstrap AppComponent
})

export class AppModule { }

// 'declarations' key: They can be components, pipes or directives