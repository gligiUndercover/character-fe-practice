import { Component, Input, OnChanges } from '@angular/core';
import { CharacterSheet } from '../character-sheet/character-sheet';
import { NgIf } from '@angular/common';
import { Inventory } from "../inventory/inventory";

@Component({
  selector: 'app-hero-main',
  imports: [CharacterSheet, NgIf, Inventory],
  templateUrl: './hero-main.html',
  styleUrl: './hero-main.css',
})
export class HeroMain implements OnChanges {
  @Input() hero!: any;
  characterSheetClicked: boolean = false;
  characterInventoryClicked: boolean = false;

  onCharacterSheetClicked() {
    this.characterSheetClicked = true;
    this.characterInventoryClicked = false;
  }

  onCharacterInventoryClicked() {
    this.characterInventoryClicked = true;
    this.characterSheetClicked = false;
  }

  ngOnChanges() {
  this.characterSheetClicked = false;
  this.characterInventoryClicked = false;
}

}
