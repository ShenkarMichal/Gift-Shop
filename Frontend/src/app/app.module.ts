import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MainComponent } from './components/layout-area/main/main.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ListComponent } from './components/gifts-area/list/list.component';
import { AddComponent } from './components/gifts-area/add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/gifts-area/card/card.component'

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    PageNotFoundComponent,
    ListComponent,
    AddComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
