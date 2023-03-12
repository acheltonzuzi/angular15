import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ReactiveComponent } from './formularios/reactive/reactive.component';

@Injectable({
  providedIn: 'root'
})
export class GuardaGuard implements CanLoad,CanDeactivate<ReactiveComponent> {
  canDeactivate(component: ReactiveComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(component.Formulario?.invalid){
      return confirm("tens a certeza que desejas sair?");
    }
    return true;
  }
  user={admin:true,logged:false}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.user.admin;
  }
  
}
