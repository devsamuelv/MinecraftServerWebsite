import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  offline: boolean = false;
  online: boolean = true;
  mantainace: boolean = false;

  constructor() { }
}
