import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './service/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  check: any
  constructor(private route: Router, private service: DataService) {
  }
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let check: any = localStorage.getItem('admin')
    if (!check) {

      this.route.navigate([''])
      return false;
    } else {
      alert('Hi admin <3 !!')
      return true
    }
  }

}
