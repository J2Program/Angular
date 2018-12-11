import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PlansComponent } from './home/plans/plans.component';
import { SignupComponent } from './signup/signup.component';
import { FeasibilityComponent } from './feasibility/feasibility.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Globals } from './globals';
import { PlandetailsComponent } from './plandetails/plandetails.component';
import { DetailsplanComponent } from './plandetails/detailsplan/detailsplan.component';
import { RegistrationComponent } from './registration/registration.component';
import { PreviewComponent } from './preview/preview.component';
import { PaymentComponent } from './payment/payment.component';
import { NavbuttonComponent } from './components/navbutton/navbutton.component';

const routes: Routes = [
  {
    path: '',
    component: PlansComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'feasibility',
    component: FeasibilityComponent
  },
  {
    path: 'plandetails',
    component: PlandetailsComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'preview',
    component: PreviewComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PlansComponent,
    SignupComponent,
    FeasibilityComponent,
    NotFoundComponent,
    PlandetailsComponent,
    DetailsplanComponent,
    RegistrationComponent,
    PreviewComponent,
    PaymentComponent,
    NavbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    )],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
