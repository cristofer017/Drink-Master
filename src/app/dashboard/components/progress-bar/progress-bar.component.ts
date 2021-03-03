import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
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
  @Output() complete = new EventEmitter();
  // @ViewChild("progress", { static: true }) progress;

  // constructor(private renderer: Renderer2) {}

  ngOnChanges(): void {
    // this.setWidth(`${this.value}%`);
    if (this.value == 100) this.emitComplete();
  }

  // setWidth = (width: string) => this.renderer.setStyle(this.progress.nativeElement, "width", width);

  emitComplete = () => setTimeout(() => this.complete.emit(true), 300) // Wait animation
}
