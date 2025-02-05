import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
// import { AppSalesOverviewComponent } from 'src/app/components/sales-overview/sales-overview.component';
// import { AppYearlyBreakupComponent } from 'src/app/components/yearly-breakup/yearly-breakup.component';
// import { AppMonthlyEarningsComponent } from 'src/app/components/monthly-earnings/monthly-earnings.component';
import { AppRecentTransactionsComponent } from 'src/app/components/recent-transactions/recent-transactions.component';
import { AppProductPerformanceComponent } from 'src/app/components/product-performance/product-performance.component';
// import { AppBlogCardsComponent } from 'src/app/components/blog-card/blog-card.component';
import { FeatureComponent } from 'src/app/components/feature/feature.component';


@Component({
  selector: 'app-starter',
  imports: [
    MaterialModule,
    // AppSalesOverviewComponent,
    // AppYearlyBreakupComponent,
    // AppMonthlyEarningsComponent,
    AppRecentTransactionsComponent,
    AppProductPerformanceComponent,
    // AppBlogCardsComponent,
    FeatureComponent
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