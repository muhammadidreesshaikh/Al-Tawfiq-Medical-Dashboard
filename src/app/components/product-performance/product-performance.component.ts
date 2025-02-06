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
  button: string;
  status: string;
}

const ELEMENT_DATA: performanceData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/s6.jpg',
    pname: 'Review Patient Demographics CDE Updates',
    category: 'Pending review from Data Governance team - Critical updates for EMR integration',
    button: 'Review Now',
    status: 'High Priority',
  },
  {
    id: 2,
    imagePath: 'assets/images/products/s9.jpg',
    pname: 'Laboratory Results Schema Validation',
    category: 'New data quality rules need approval - Affects 3 departments',
    button: 'Validate Schema',
    status: 'Pending Review',
  },
  {
    id: 3,
    imagePath: 'assets/images/products/s7.jpg',
    pname: 'Medication Data Standards Update',
    category: 'Pharmacy department requested urgent review of medication coding standards',
    button: 'Review Standards',
    status: 'Escalated',
  },
  {
    id: 4,
    imagePath: 'assets/images/products/s4.jpg',
    pname: 'Radiology Reporting Templates',
    category: 'Standardization of reporting templates across imaging modalities',
    button: 'View Progress',
    status: 'In Progress',
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
  displayedColumns: string[] = ['product', 'status', 'button'];
  dataSource = ELEMENT_DATA;

  months: month[] = [
    { value: 'mar', viewValue: 'March 2025' },
    { value: 'apr', viewValue: 'April 2025' },
    { value: 'june', viewValue: 'June 2025' },
  ];
}
