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
  errorMessage: string = '';
  validateUserName() {
    const regex = /^[A-Z][a-zA-Z]{2,}$/; // Starts with uppercase & min 3 letters
    if (!this.userName.match(regex)) {
      this.errorMessage = "Invalid Name! Start with a capital letter & min 3 characters.";
    } else {
      this.errorMessage = ''; // Clear error if valid
    }
  }
  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank'); 
  }
}
