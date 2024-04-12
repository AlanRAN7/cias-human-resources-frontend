import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceSwitchService {
  private idSource = new BehaviorSubject<number>(0);
  currentId = this.idSource.asObservable();

  constructor() { }

  $modal = new EventEmitter<any>();
  $modalDetalles= new EventEmitter<any>();

  changeId(id: number){
    this.idSource.next(id);
  }
}
