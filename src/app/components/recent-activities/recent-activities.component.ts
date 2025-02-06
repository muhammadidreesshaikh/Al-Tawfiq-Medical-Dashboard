import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

interface IUpdates {
  name: string;
  timeAgo: string;
  description: string;
  action: string;
}

@Component({
  selector: 'app-recent-activities',
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './recent-activities.component.html',
  styleUrl: './recent-activities.component.scss'
})
export class RecentActivitiesComponent {
  updates: IUpdates[] = [
    {
      name: "Mohammed Al-Salem",
      timeAgo: "Just now",
      description: "Approved clinical terminology updates for Cardiology",
      action: "Check"
    },
    {
      name: "Fatimah Al-Dossary",
      timeAgo: "5 mins ago",
      description: "Modified Patient Demographics CDE structure",
      action: "Edit"
    },
    {
      name: "Saad Al-Otaibi",
      timeAgo: "15 mins ago",
      description: "Updated data access permissions for Emergency Department",
      action: "Edit"
    },
    {
      name: "Nour Al-Fayez",
      timeAgo: "30 mins ago",
      description: "Created new validation rules for Lab Results",
      action: "Plus"
    },
    {
      name: "Ahmed Al-Mutairi",
      timeAgo: "1 hour ago",
      description: "Generated quarterly data quality report",
      action: "Report"
    },
    {
      name: "Khalid Al-Qahtani",
      timeAgo: "2 hours ago",
      description: "Added new data stewards to Pediatrics department",
      action: "Plus"
    },
    {
      name: "Layla Al-Rashid",
      timeAgo: "3 hours ago",
      description: "Updated security protocols for patient data access",
      action: "Edit"
    },
    {
      name: "Omar Al-Harbi",
      timeAgo: "4 hours ago",
      description: "Modified emergency contact information schema",
      action: "Edit"
    },
    {
      name: "Sara Al-Malik",
      timeAgo: "5 hours ago",
      description: "Approved updates to medication administration records",
      action: "Plus"
    },
    {
      name: "Hassan Al-Qahtani",
      timeAgo: "6 hours ago",
      description: "Generated monthly data quality metrics report",
      action: "Report"
    },
    {
      name: "Amal Al-Zahrani",
      timeAgo: "7 hours ago",
      description: "Updated radiology reporting templates",
      action: "Edit"
    }
  ];
}
