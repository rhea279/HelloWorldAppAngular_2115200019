import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule] 
})
export class AppComponent {
  userName = ''; 

  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank'); 
  }
}
