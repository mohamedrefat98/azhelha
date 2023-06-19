import { Component, OnInit } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

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
