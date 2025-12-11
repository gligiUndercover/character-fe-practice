import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-level-up',
  imports: [],
  templateUrl: './level-up.html',
  styleUrl: './level-up.css',
})
export class LevelUp {
  @Output() closedLevelUp = new EventEmitter();

  onCloseLevelUp() {
    this.closedLevelUp.emit();
  }
}
