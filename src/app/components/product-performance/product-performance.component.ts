import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

export interface performanceData {
  id: number;
  imagePath: string;
  pname: string;
  category: string;
  sales: string;
  status: string;
}

const ELEMENT_DATA: performanceData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/s6.jpg',
    pname: 'Review Patient Demographics CDE Updates',
    category: 'Pending review from Data Governance team - Critical updates for EMR integration',
    sales: 'Review Now',
    status: 'High Priority',
  },
  {
    id: 2,
    imagePath: 'assets/images/products/s9.jpg',
    pname: 'Laboratory Results Schema Validation',
    category: 'New data quality rules need approval - Affects 3 departments',
    sales: 'Review Now ',
    status: 'Pending Review',
  },
  {
    id: 3,
    imagePath: 'assets/images/products/s7.jpg',
    pname: 'Red Velvate Dress',
    category: 'Womens Fashion',
    sales: 'Review Now',
    status: 'high',
  },
  {
    id: 4,
    imagePath: 'assets/images/products/s4.jpg',
    pname: 'Headphone Boat',
    category: 'Electronics',
    sales: 'Review Now',
    status: 'critical',
  },
];

interface month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-performance',
  imports: [
    NgApexchartsModule,
    MaterialModule,
    TablerIconsModule,
    CommonModule,
  ],
  templateUrl: './product-performance.component.html',
})
export class AppProductPerformanceComponent {
  displayedColumns: string[] = ['product', 'status', 'sales'];
  dataSource = ELEMENT_DATA;

  months: month[] = [
    { value: 'mar', viewValue: 'March 2025' },
    { value: 'apr', viewValue: 'April 2025' },
    { value: 'june', viewValue: 'June 2025' },
  ];
}
