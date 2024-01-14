import { Component } from '@angular/core';
import { dataUserProps } from '../constants/app.types';
import { dataUser } from '../constants/app.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  dataUser: dataUserProps = dataUser;
}
