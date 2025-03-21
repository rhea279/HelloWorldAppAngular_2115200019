import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-world-app';

  // Function to open BridgeLabz URL in a new tab
  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank');
  }
}
