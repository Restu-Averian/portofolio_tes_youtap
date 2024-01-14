import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { dataUser } from '../constants/app.constants';
import { dataUserProps } from '../constants/app.types';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CanvasJSAngularChartsModule, CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent {
  dataUser: dataUserProps = dataUser;
}
