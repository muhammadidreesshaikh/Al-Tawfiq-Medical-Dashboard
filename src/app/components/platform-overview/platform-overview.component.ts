import { Component} from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-platform-overview',
  imports: [NgApexchartsModule, MaterialModule, TablerIconsModule],
  templateUrl: './platform-overview.component.html',
  styleUrl: './platform-overview.component.scss'
})
export class PlatformOverviewComponent {
  cardsData: any = [
    {
      id: 1,
      icon: 'user-plus',
      title: '45/200',
      description: 'Active Users'
    },
    {
      id: 2,
      icon: 'clipboard-text',
      title: '45',
      description: 'Pending Approvals (35 CDEs + 10 Rules)'
    },
    {
      id: 3,
      icon: 'settings',
      title: '75',
      description: 'Rules (50 Live, 25 In Progress)'
    },
    {
      id: 4,
      icon: 'list-details',
      title: '98%',
      description: 'Compliance Across 3 Frameworks'
    },
    {
      id: 5,
      icon: 'checklist',
      title: 'Operational',
      description: 'All Services Running'
    }
  ]
}
