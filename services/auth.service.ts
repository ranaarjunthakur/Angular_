import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  private authenticationStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isAuthenticated$: Observable<boolean> = this.authenticationStatus.asObservable();

  setAuthenticationStatus(newState) {
    this.authenticationStatus.next(newState);
  }

}