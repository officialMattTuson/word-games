import { Component } from '@angular/core';
import { Tile, tiles } from 'src/app/models/tile.model';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss'],
})
export class ConnectionsComponent {
  tiles = tiles;
  selectedTiles: Tile[] = [];
  animateCells = false;

  constructor() {
    this.scrambleTiles();
  }

  scrambleTiles() {
    for (let i = this.tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.tiles[i], this.tiles[j]] = [this.tiles[j], this.tiles[i]];
    }
    this.tiles.forEach((tile, index) => {
      tile.index = index;
    });
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
      selectedTile.isSelected = false;
      return;
    }
    if (this.selectedTiles.length > 3) {
      return;
    }
    selectedTile.isSelected = true;
    this.selectedTiles.push(selectedTile);
  }

  handleHelpRequest() {}

  handleShuffleRequest() {
    this.scrambleTiles();
  }

  handleResetRequest() {
    this.selectedTiles = [];
    this.tiles.forEach((tile) => {
      tile.isSelected = false;
    });
  }

  handleSubmission() {
    this.animateCells = true;
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
      this.moveSelectedTilesToTop();
    } else {

      console.log('That is incorrect');
    }
    setTimeout(() => {
      this.animateCells = false;
    }, 500);
  }

  moveSelectedTilesToTop(): void {
    const correctTiles = this.tiles.filter((tile) => tile.isCorrect);
    const selectedTiles = this.tiles.filter((tile) => tile.isSelected);
    const remainingTiles = this.tiles.filter(
      (tile) => !tile.isSelected && !tile.isCorrect
    );
    this.selectedTiles.forEach((tile) => {
      tile.isSelected = false;
      tile.isCorrect = true;
    });
    this.selectedTiles = [];
    this.tiles = [...correctTiles, ...selectedTiles, ...remainingTiles];
  }
}
