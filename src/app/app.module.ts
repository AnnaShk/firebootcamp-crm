import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyTableComponent } from './company/company-table/company-table.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyTableComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
