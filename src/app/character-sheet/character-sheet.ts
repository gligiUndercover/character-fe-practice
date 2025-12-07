import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-sheet',
  imports: [],
  templateUrl: './character-sheet.html',
  styleUrl: './character-sheet.css',
})
export class CharacterSheet 
{
  @Input() hero!: any;
  tooltipText: string = '';

  tooltipVisible = false;
  tooltipItem: any = null;
  tooltipX = 0;
  tooltipY = 0;

  showTooltip(event: MouseEvent, stat: string) {
   if (!stat) return;

   this.tooltipVisible = true;
   this.tooltipItem = stat;
   this.tooltipX = event.clientX + 10;
   this.tooltipY = event.clientY + 10;

   if (stat === 'strength') {
    this.tooltipText = 'Increases physical damage';
   } 
   else if (stat === 'agility') {
    this.tooltipText = 'Improves dodge and speed';
   }
   else if (stat === 'intelligence') {
    this.tooltipText = 'Boosts spell power';
   }
  }

  hideTooltip() {
   this.tooltipVisible = false;
   this.tooltipItem = null;
  }
}
