import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userId: number | null = null; // To store the user ID

  constructor() {
    // Optionally, you can set the userId from localStorage if it's stored
    const storedUserId = localStorage.getItem('userId');
    this.userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  // Method to set the user ID (call this when a user is selected or determined)
  setUserId(userId: number): void {
    this.userId = userId; // Set user ID in service
    localStorage.setItem('userId', this.userId.toString()); // Store user ID in local storage
  }

  // Method to retrieve the user ID of the currently selected user
  getUserId(): number | null {
    return this.userId; // Return user ID (or null if not set)
  }

  // Method to check if a user ID is set
  hasUser(): boolean {
    return this.userId !== null; // Return true if user ID is available
  }

  // Optionally, you can add a method to clear the user ID
  clearUserId(): void {
    this.userId = null; // Clear the user ID in service
    localStorage.removeItem('userId'); // Remove user ID from local storage
  }
}
