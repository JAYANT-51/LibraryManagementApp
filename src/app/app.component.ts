import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule for router-outlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Add RouterModule to the imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library Management System';
}
