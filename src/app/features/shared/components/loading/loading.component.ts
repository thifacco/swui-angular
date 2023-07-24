import { Component, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() spinning: boolean = false;
  
  spinnerMode: ProgressSpinnerMode = 'indeterminate';
  spinnerValue = 50;
}
