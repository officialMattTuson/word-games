import { Component } from '@angular/core';
import { Tile } from 'src/app/models/tile.model';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss'],
})
export class ConnectionsComponent {
  tiles: Tile[] = [
    { option: 'Balloon', group: 1, category: 'Getting from A to B' },
    { option: 'Car', group: 1, category: 'Getting from A to B' },
    { option: 'Boat', group: 1, category: 'Getting from A to B' },
    { option: 'Train', group: 1, category: 'Getting from A to B' },
    { option: 'Mouse', group: 2, category: 'Household pets' },
    { option: 'Rabbit', group: 2, category: 'Household pets' },
    { option: 'Cat', group: 2, category: 'Household pets' },
    { option: 'Dog', group: 2, category: 'Household pets' },
    { option: 'Sun', group: 3, category: 'In the sky' },
    { option: 'Moon', group: 3, category: 'In the sky' },
    { option: 'Star', group: 3, category: 'In the sky' },
    { option: 'Cloud', group: 3, category: 'In the sky' },
    { option: 'Laptop', group: 4, category: 'Household items' },
    { option: 'Phone', group: 4, category: 'Household items' },
    { option: 'Book', group: 4, category: 'Household items' },
    { option: 'Pen', group: 4, category: 'Household items' },
  ];

  selectedTiles: Tile[] = [];

  constructor() {
    this.scrambleTiles(this.tiles);
  }
  
  scrambleTiles(array: Tile[]): Tile[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleSelectedTile(option: string): void {
    const selectedTile = this.tiles.find((tile) => tile.option === option);
    if (!selectedTile) {
      return;
    }
    if (this.selectedTiles.includes(selectedTile)) {
      this.selectedTiles = this.selectedTiles.filter(
        (tile) => tile.option !== option
      );
      return;
    }
    if (this.selectedTiles.length > 3) {
      return;
    }
    this.selectedTiles.push(selectedTile);
  }

  getSelectedTile(tile: Tile): boolean {
    return this.selectedTiles.includes(tile);
  }

  handleHelpRequest() {}

  handleShuffleRequest() {
    this.scrambleTiles(this.tiles);
  }

  handleResetRequest() {
    this.selectedTiles = [];
  }

  handleSubmission() {
    if (this.selectedTiles.length !== 4) {
      console.log('Select 4 tiles to submit');
      return;
    }

    const groupNumber = this.selectedTiles[0].group;

    const isSuccessfulSubmission = this.selectedTiles.every(
      (tile) => tile.group === groupNumber
    );

    if (isSuccessfulSubmission) {
      console.log('Sweet!');
    } else {
      console.log('That is incorrect');
    }
  }
}
