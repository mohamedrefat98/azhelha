import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor() { }

  langSubject = new BehaviorSubject<string>('');
  lang = this.langSubject.asObservable();

}
