import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { dataTabs, dataUser } from './constants/app.constants';
import { dataUserProps, tabsProps } from './constants/app.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPath: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = this.router.url;
      }
    });
  }

  title = 'Portofolio_Youtap_Test';
  dataUser: dataUserProps = dataUser;
  dataTabs: tabsProps[] = dataTabs;

  onOpenTab(path: string | null) {
    this.router.navigate([`/${path}`]);
  }
}
