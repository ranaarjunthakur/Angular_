import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
    ) { }

    canActivate(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let role = JSON.parse(localStorage.getItem('role'))

            if (role == 'Institution') {
                this.router.navigate(['../home/institution']);
               
            }
            else if (role == 'Branch') {
                this.router.navigate(['../home/branchlist'])
        
            } else {
                this.router.navigate(['../home/welcome'])
                return resolve(false);
            }
        });
    }
}
