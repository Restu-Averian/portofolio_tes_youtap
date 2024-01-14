import { Component } from '@angular/core';
import { dataUserProps } from '../constants/app.types';
import { dataUser } from '../constants/app.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
})
export class CertificatesComponent {
  dataUser: dataUserProps = dataUser;
}
