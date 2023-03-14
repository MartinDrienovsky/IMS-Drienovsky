import {Component, OnInit, ViewChild, QueryList, ElementRef} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
 /* Typescript logic behind navigation menu */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showMenu = false;
  private activeSiteSection = 1;
  /* Toggling navbar function */
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
  /* Router Constructor */
  constructor(
    private router: Router
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.SiteURLActiveCheck(event);
      }
    });
  }
/* Scrolling to exact web section */
  toElement(num): void {
    document.getElementById(num).scrollIntoView({behavior: 'smooth'});
    this.showMenu = false;
  }
/* Differentiate what was clicked in navigation menu. If it is not equal "-1" activeSiteSection will be change to new paramater considered by which section what clicked */
  private SiteURLActiveCheck(event: NavigationEnd): void {
    if (event.url.indexOf('#1') !== -1) {
      this.activeSiteSection = 1;
    } else if (event.url.indexOf('#2') !== -1) {
      this.activeSiteSection = 2;
    } else if (event.url.indexOf('#3') !== -1) {
      this.activeSiteSection = 3;
    } else if (event.url.indexOf('#4') !== -1) {
      this.activeSiteSection = 4;
    } else if (event.url.indexOf('#5') !== -1) {
      this.activeSiteSection = 5;
    } else if (event.url.indexOf('#6') !== -1) {
      this.activeSiteSection = 6;
    } else if (event.url.indexOf('#7') !== -1) {
      this.activeSiteSection = 7  ;
    } else {
      this.activeSiteSection = 1;
    }
  }
  /* Focus method */
  focusMethod = function getFocus() {          
    document.getElementById("nav-toggle").focus();
  }
  /* Active section function */
  isSectionActive(section: number): boolean {
    return section === this.activeSiteSection;
  }
}