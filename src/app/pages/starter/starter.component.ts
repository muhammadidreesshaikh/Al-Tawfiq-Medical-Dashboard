import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AppProductPerformanceComponent } from 'src/app/components/product-performance/product-performance.component';
import { FeatureComponent } from 'src/app/components/feature/feature.component';
import { PlatformOverviewComponent } from "../../components/platform-overview/platform-overview.component";
import { RecentActivitiesComponent } from "../../components/recent-activities/recent-activities.component";
import { UserRoleDistributionComponent } from "../../components/user-role-distribution/user-role-distribution.component";
import { RelevantInformationComponent } from "../../components/relevant-information/relevant-information.component";


@Component({
  selector: 'app-starter',
  imports: [
    MaterialModule,
    AppProductPerformanceComponent,
    FeatureComponent,
    PlatformOverviewComponent,
    RecentActivitiesComponent,
    UserRoleDistributionComponent,
    RelevantInformationComponent
],
  templateUrl: './starter.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent {
  cardsData: any = [
    {
      id: 1,
      icon: 'layout-grid-add',
      title: 'CDEs Overview',
      description: 'View and Manage Critical Data Elements'
    },
    {
      id: 2,
      icon: 'checklist',
      title: 'Data Quality Rules',
      description: 'Manage and monitor data quality rules'
    },
    {
      id: 3,
      icon: 'app-window',
      title: 'CDEs Monitoring',
      description: 'Track CDE implementation and usage'
    },
    {
      id: 4,
      icon: 'file-invoice',
      title: 'Reports',
      description: 'Access and generate reports'
    }
  ]
}