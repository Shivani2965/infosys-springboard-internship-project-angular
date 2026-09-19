import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly userKey = 'wanderly_user';
  private readonly loginKey = 'wanderly_logged_in';

  private loggedInSubject = new BehaviorSubject<boolean>(
    this.isLoggedIn()
  );

  loggedIn$ = this.loggedInSubject.asObservable();

  login(email: string, password: string): boolean {

    const storedUser = localStorage.getItem(this.userKey);

    if (!storedUser) {
      return false;
    }

    const user = JSON.parse(storedUser);

    if (
      user.email === email &&
      user.password === password
    ) {

      localStorage.setItem(
        this.loginKey,
        'true'
      );

      this.loggedInSubject.next(true);

      return true;
    }

    return false;
  }

  register(
    name: string,
    email: string,
    password: string
  ): void {

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem(
      this.userKey,
      JSON.stringify(user)
    );

    localStorage.setItem(
      this.loginKey,
      'true'
    );

    this.loggedInSubject.next(true);
  }

  isLoggedIn(): boolean {

    return localStorage.getItem(
      this.loginKey
    ) === 'true';
  }

  getUser(): any {

    const user =
      localStorage.getItem(this.userKey);

    return user
      ? JSON.parse(user)
      : null;
  }

  logout(): void {

    localStorage.removeItem(
      this.loginKey
    );

    this.loggedInSubject.next(false);
  }
}