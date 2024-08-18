import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnalyticsService } from './shared/analytics.service';

@Component({
  standalone: true,
  imports:[WelcomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[AnalyticsService] - not recommended 4 DI
})
export class AppComponent {}
