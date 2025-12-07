import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroList } from './hero-list/hero-list';
import { HeroMain } from './hero-main/hero-main';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroList, HeroMain, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hero');
  selectedHero?: any;
  closeDetails = false;

  onSelectHero(hero: any) {
    this.selectedHero = hero;
    this.closeDetails = false;
    // console.log("Emitted and received info for hero with id" + hero.id);
  }

  onCloseDetails() {
    this.closeDetails = true;
  }
}
