import { Component, Input, OnChanges } from '@angular/core';
import { CharacterSheet } from '../character-sheet/character-sheet';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero-main',
  imports: [CharacterSheet, NgIf],
  templateUrl: './hero-main.html',
  styleUrl: './hero-main.css',
})
export class HeroMain implements OnChanges {
  @Input() hero!: any;
  characterSheetClicked: boolean = false;

  onCharacterSheetClicked() {
    this.characterSheetClicked = true;
  }

  ngOnChanges() {
  this.characterSheetClicked = false;
}

}
