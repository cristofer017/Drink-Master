import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnChanges {

  @Input() value;
  @Input() name;
  @ViewChild('progress', { static: true }) progress;

  constructor(private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.setWidth(`${this.value}%`);
  }

  setWidth = (width: string) => this.renderer.setStyle(this.progress.nativeElement, 'width', width);
}
