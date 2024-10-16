import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent {
  @Input() option: string = '';
  @Input() isHighlighted = false;

  @Output() isSelected = new EventEmitter<string>();

  selectTile() {
    this.isSelected.emit(this.option);
  }
}
