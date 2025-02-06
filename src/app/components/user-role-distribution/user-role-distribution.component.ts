import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

interface IContact {
  role: string;
  name?: string;
  email: string;
}

@Component({
  selector: 'app-user-role-distribution',
  imports: [MaterialModule],
  templateUrl: './user-role-distribution.component.html',
  styleUrl: './user-role-distribution.component.scss'
})
export class UserRoleDistributionComponent {
  contacts: IContact[] = [
    {
      role: "Data Stewardship Governance Committee (DSGC)",
      email: "dsgc@altawfiq.sa"
    },
    {
      role: "Data Management Committee (DMC)",
      name: "Khalid Al-Qahtani",
      email: "dmc@altawfiq.sa"
    },
    {
      role: "DG Manager / DG Analyst",
      name: "Rania Al-Jasser",
      email: "rania.aljasser@altawfiq.sa"
    },
    {
      role: "Metadata Analyst",
      name: "Nour Al-Fayez",
      email: "nour.alfayez@altawfiq.sa"
    },
    {
      role: "Business Data Executive",
      name: "Ahmed Al-Mutairi",
      email: "ahmed.almutairi@altawfiq.sa"
    },
    {
      role: "Business Data Steward",
      name: "Fatimah Al-Dossary",
      email: "fatimah.aldossary@altawfiq.sa"
    },
    {
      role: "IT Data Steward",
      name: "Saad Al-Otaibi",
      email: "saad.alotaibi@altawfiq.sa"
    }
  ];
}
