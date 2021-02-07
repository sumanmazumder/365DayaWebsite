import { Component } from '@angular/core';
import { environment } from '../environments/environment.development';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dayswebsite';
  hostUrl = environment.hostURL;
  // console.log(this.hostUrl);
}
