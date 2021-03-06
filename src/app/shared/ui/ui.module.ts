import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModules } from '../mdb/mdb.module';

import { GlobalHeaderComponent } from './global-header/global-header.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModules.forRoot()
  ],
  declarations: [
    GlobalHeaderComponent,
    GlobalFooterComponent,
    ContactFormComponent
  ],
  exports: [
    GlobalHeaderComponent,
    GlobalFooterComponent,
    ContactFormComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class UIModule { }
