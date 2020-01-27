import { Injectable } from '@angular/core';
import {Medico} from '../model-medico/medico';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MedicoService} from './medico.service';

@Injectable({
  providedIn: 'root'
})
export class MedicoResolve implements Resolve<Medico> {
  constructor(private medicoService: MedicoService) {}

  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<Medico> | Medico {
    const id = route.paramMap.get('id');
    if (id) {
      return this.medicoService.consultar(id);
    }
    return new Medico();

  }
}
