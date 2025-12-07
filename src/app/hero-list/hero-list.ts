import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  imports: [],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {

  @Output() heroSelected = new EventEmitter();
  onClick(hero: any) {
    this.heroSelected.emit(hero);
    console.log("Emitting this badboy with id" + hero.id);
  }

  characters = [
  {
    id: "1",
    name: "Arthas",
    class: "Paladin",
    avatar: "assets/images/characters/arthas.png",
    stats: {
      strength: 18,
      agility: 12,
      intelligence: 14
    },
    inventory: [
      { id: "1", name: "Frostmourne", type: "weapon", icon: "fmourne.png" },
      { id: "2", name: "Healing potion", type: "consumable", icon: "hpot.png"}
    ]
  },
  {
    id: "2",
    name: "Thrall",
    class: "Shaman",
    avatar: './assets/images/characters/thrall.png',
    stats: {
      strength: 14,
      agility: 14,
      intelligence: 18
    },
    inventory: [
      { id: "1", name: "Doomhammer", type: "weapon", icon: "dh-w.jpg" },
      { id: "2", name: "Healing potion", type: "consumable", icon: "hpot.png"},
      { id: "3", name: "Healing potion", type: "consumable", icon: "hpot.png"},
      { id: "4", name: "Mana potion", type: "consumable", icon: "manapot.png"}
    ]
  },
  {
    id: "3",
    name: "Jaina Proudmoore",
    class: "Wizard",
    avatar: "assets/images/characters/jaina.jpg",
    stats: {
      strength: 10,
      agility: 14,
      intelligence: 22
    },
    inventory: [
      { id: "1", name: "Staff", type: "weapon", icon: "jainastaff.png"},
      { id: "2", name: "Mana potion", type: "consumable", icon: "manapot.png"}
    ]
  }
]

}
