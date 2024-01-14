import { Routes } from '@angular/router';
import { CertificatesComponent } from './certificates/certificates.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

export const routes: Routes = [
  { path: 'certificate', component: CertificatesComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'portofolio', component: PortofolioComponent },
];
