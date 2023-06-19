import { Component, HostListener, OnInit } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 200) {
      document.getElementById('main-navbar')?.classList.add('bg-white','shadow-sm')
    }else{
      document.getElementById('main-navbar')?.classList.remove('shadow-sm','bg-white')
    }
  }

  changeLang(){
    if(window.localStorage.getItem('ezLang')===null || window.localStorage.getItem('ezLang')==='ar'){
      this.langservice.langSubject.next('en');
      window.localStorage.setItem('ezLang','en')
    }else if(window.localStorage.getItem('ezLang')==='en'){
      this.langservice.langSubject.next('ar');
      window.localStorage.setItem('ezLang','ar')
      console.log('in en');
    }
  }
}
