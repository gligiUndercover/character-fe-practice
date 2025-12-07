import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
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
  @Output() detailsClosed = new EventEmitter(); 

  characterSheetClicked: boolean = false;
  characterInventoryClicked: boolean = false;

  onClose() {
    this.detailsClosed.emit();
  }

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
