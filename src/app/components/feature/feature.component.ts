import { Component, input } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';


@Component({
  selector: 'app-feature',
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  data: any = input(null);
}
