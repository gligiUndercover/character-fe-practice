import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CharacterSheet } from '../character-sheet/character-sheet';
import { NgIf } from '@angular/common';
import { Inventory } from "../inventory/inventory";
import { Stats, type Hero } from '../models/hero.model';
import { LevelUp } from "./level-up/level-up";

@Component({
  selector: 'app-hero-main',
  imports: [CharacterSheet, NgIf, Inventory, LevelUp],
  templateUrl: './hero-main.html',
  styleUrl: './hero-main.css',
})
export class HeroMain implements OnChanges {
  @Input() hero!: Hero;
  @Output() detailsClosed = new EventEmitter(); 

  characterSheetClicked: boolean = false;
  characterInventoryClicked: boolean = false;
  levelUpClicked: boolean = false;

  onClose() {
    this.detailsClosed.emit();
  }

  onCharacterSheetClicked() {
    this.characterSheetClicked = true;
    this.characterInventoryClicked = false;
    this.levelUpClicked = false;
  }

  onCharacterInventoryClicked() {
    this.characterInventoryClicked = true;
    this.characterSheetClicked = false;
    this.levelUpClicked = false;
  }

  onLevelUpClicked() {
    this.levelUpClicked = true;
    this.characterSheetClicked = false;
    this.characterInventoryClicked = false;
  }   

  onCloseLevelUp() {
    this.levelUpClicked = false;
  }

  onAddStats(event: {characterId: string, stats: Stats}) {
    //get the array
  }

  ngOnChanges() {
  this.characterSheetClicked = false;
  this.characterInventoryClicked = false;
  this.levelUpClicked = false;
  }

}
