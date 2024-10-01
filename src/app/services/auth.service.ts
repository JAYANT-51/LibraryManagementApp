import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userId: number | null = null; 

  constructor() {
    const storedUserId = localStorage.getItem('userId');
    this.userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }


  setUserId(userId: number): void {
    this.userId = userId; 
    localStorage.setItem('userId', this.userId.toString()); 
  }

  
  getUserId(): number | null {
    return this.userId; 
  }

  
  hasUser(): boolean {
    return this.userId !== null; 
  }


  clearUserId(): void {
    this.userId = null;
    localStorage.removeItem('userId'); 
  }
}
