import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

import { AuthService } from "../services/auth.service";

@Injectable()
export class CanLoadGuard implements CanLoad {

  constructor(private readonly authService: AuthService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated$.pipe(take(1));
  }
}
