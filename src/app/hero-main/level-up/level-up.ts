import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero, Stats } from '../../models/hero.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-level-up',
  imports: [FormsModule],
  templateUrl: './level-up.html',
  styleUrl: './level-up.css',
})
export class LevelUp {
  @Input({required: true}) hero!: Hero;
  @Output() closedLevelUp = new EventEmitter();
  @Output() addStats = new EventEmitter<{id: string, stats: Stats}>();

  enteredStrength: number = 0;
  enteredAgility: number = 0;
  enteredIntelligence: number = 0;

  onCloseLevelUp() {
    this.closedLevelUp.emit();
  }

  onSubmit() {
    console.log("Hero is: " + this.hero.name)
    this.addStats.emit({
      id: this.hero.id,
      stats: {
       strength: this.enteredStrength,
       agility: this.enteredAgility,
       intelligence: this.enteredIntelligence
      }
    });

    this.onCloseLevelUp();
  }  
}
