import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeStructuredObjectComponent } from './tree-structured-object/tree-structured-object.component';
import { DynamicDropdownsComponent } from './dynamic-dropdowns/dynamic-dropdowns.component';
import { MatSelectModule } from '@angular/material';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TreeStructuredObjectComponent,
    DynamicDropdownsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTreeModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
