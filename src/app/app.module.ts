import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IncidentComponent } from './incident/incident.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'incident', component: IncidentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncidentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
                      appRoutes, { enableTracing: true }
                         )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
