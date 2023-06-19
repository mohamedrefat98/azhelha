import { Component, OnInit } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  currentLang:string | null = 'ar'
  constructor(private langservice:LangService) { }

  ngOnInit(): void {

    this.langservice.lang.subscribe(lang=> {
      if(lang === ''){
        if (window.localStorage.getItem('ezLang')){
          this.currentLang = window.localStorage.getItem('ezLang')
        }
      }else this.currentLang = lang;
    })
  }
}
