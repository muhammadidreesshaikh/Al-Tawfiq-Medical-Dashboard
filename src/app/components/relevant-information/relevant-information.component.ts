import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

interface IInformation {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-relevant-information',
  imports: [ MaterialModule, TablerIconsModule ],
  templateUrl: './relevant-information.component.html',
  styleUrl: './relevant-information.component.scss'
})
export class RelevantInformationComponent {
  informations: IInformation[] = [
    {
      name: 'Rulestream Academy',
      url: '#',
      icon: 'certificate'
    },
    {
      name: 'NDMO Framework',
      url: '#',
      icon: 'stack-backward'
    },
    {
      name: 'Internal Policies',
      url: '#',
      icon: 'lock-access'
    }
  ]
}
