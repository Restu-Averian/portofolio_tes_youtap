import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dataUserProps } from '../constants/app.types';
import { dataUser } from '../constants/app.constants';

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css',
})
export class PortofolioComponent {
  dataUser: dataUserProps = dataUser;

  openProject(path: string | null) {
    if (path) {
      window.open(path, '_blank');
    }
  }
}
