import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { SharedModule } from './shared/shared.module';
import { DetailsComponent } from './welcome/details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [AppComponent,
  ],
  imports: [BrowserModule, 
    WelcomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
