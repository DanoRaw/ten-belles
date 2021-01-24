import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { FoodComponent } from './food/food.component';
import { HoursOfOperationComponent } from './hours-of-operation/hours-of-operation.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';



const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'cocktails', component: CocktailsComponent},
  {path: 'food', component: FoodComponent},
  {path: 'hours-of-operation', component: HoursOfOperationComponent},
  {path: 'location', component: LocationComponent},
  {path: 'contactUs', component: ContactUsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    CocktailsComponent,
    FoodComponent,
    HoursOfOperationComponent,
    FooterComponent,
    LocationComponent,
    ContactUsComponent,
    HomePageComponent,
    NavigationBarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
