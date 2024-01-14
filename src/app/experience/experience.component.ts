import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dataUserProps } from '../constants/app.types';
import { dataUser } from '../constants/app.constants';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  dataUser: dataUserProps = dataUser;
}
