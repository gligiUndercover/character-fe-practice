import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-sheet',
  imports: [],
  templateUrl: './character-sheet.html',
  styleUrl: './character-sheet.css',
})
export class CharacterSheet {
  @Input() hero!: any;
}
