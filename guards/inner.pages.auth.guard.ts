import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class InnerAuthGuard implements CanActivate {
    constructor(
        private router: Router,
    ) { }

    canActivate(): Promise<boolean> {
        return new Promise(( resolve, reject ) => {
            let userId = localStorage.getItem('user_id');
            if(userId)
            {
                if(localStorage.getItem('role') =='admin')
                {
                    this.router.navigate( ['/admin/companies'] );
                }
                else  if(localStorage.getItem('role') =='superadmin')
                {
                    this.router.navigate( ['/admin/adminmenu'] );
                }
                else if(localStorage.getItem('role') =='guest')
                {
                    this.router.navigate( ['/entrypages/guestdashboard', userId] );
                }
                else if(localStorage.getItem('role') =='user')
                {
                    this.router.navigate( ['/entrypages/dashboard', userId] );
                }
                else if(localStorage.getItem('role') =='agent')
                {
                    this.router.navigate( ['/entrypages/agentdashboard', userId] );
                }
                
                return resolve( false );
            }
            else
            {
                return resolve( true );
            }
        });
    }
}
