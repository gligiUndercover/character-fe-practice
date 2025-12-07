import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inventory',
  imports: [],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory {
 @Input() inventory!: any[];
 slots: any[] = new Array(8);

 tooltipVisible = false;
 tooltipItem: any = null;
 tooltipX = 0;
 tooltipY = 0;

 showTooltip(event: MouseEvent, item: any) {
  if (!item) return;

  this.tooltipVisible = true;
  this.tooltipItem = item;
  this.tooltipX = event.clientX + 10;
  this.tooltipY = event.clientY + 10;
 }

 hideTooltip() {
  console.log('hiding tooltip', this.tooltipVisible);
  this.tooltipVisible = false;
  this.tooltipItem = null;
 }

 ngOnInit() {
  this.inventory.forEach((item, index) => {
    if (item) { 
      this.slots[index] = item;
    }
  })
 }
 getItemIcon(index: number): string {
    return `assets/images/items/${this.inventory[index]?.icon}`;
  }
}
