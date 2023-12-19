import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('heroSection') heroSection!: ElementRef<HTMLElement>;
  @ViewChild('heroAbout') heroAbout!: ElementRef<HTMLElement>;
  @ViewChild('heroAppointment') heroAppointment!: ElementRef<HTMLElement>;
  @ViewChild('heroHeroContact') heroHeroContact!: ElementRef<HTMLElement>;

  scrollToHero(swit: string): void {
    if(swit === '1'){
      if (this.heroSection) {
        this.heroSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if(swit === '2'){
      if (this.heroAbout) {
        this.heroAbout.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if(swit === '3'){
      if (this.heroAppointment) {
        this.heroAppointment.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if(swit === '4'){
      if (this.heroHeroContact) {
        this.heroHeroContact.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  currentDate: Date = new Date();

  constructor(
    private http: HttpClient,
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router,
  ) {}
  activeSlideIndex: number = 0;
  ngOnInit() {
    this.hide_selectHeader();
  }

  hide_selectHeader() {
    const selectHeader = this.el.nativeElement.querySelector('#header');
    const selectTopbar = this.el.nativeElement.querySelector('#topbar');

    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          this.renderer.addClass(selectHeader, 'header-scrolled');
          if (selectTopbar) {
            this.renderer.addClass(selectTopbar, 'topbar-scrolled');
          }
        } else {
          this.renderer.removeClass(selectHeader, 'header-scrolled');
          if (selectTopbar) {
            this.renderer.removeClass(selectTopbar, 'topbar-scrolled');
          }
        }
      }

      window.addEventListener('load', headerScrolled);
      window.addEventListener('scroll', headerScrolled);
    }
  }



  goToadmin() {
    this.router
    .navigateByUrl("/", { skipLocationChange: true })
    .then(() => {
        this.router.navigate(["/app-admin-page-uat"]);
    });
  }


}
