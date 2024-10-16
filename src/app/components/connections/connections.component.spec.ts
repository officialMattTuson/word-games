import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsComponent } from './connections.component';
import { TileComponent } from 'src/app/molecules/tile/tile.component';

describe('ConnectionsComponent', () => {
  let component: ConnectionsComponent;
  let fixture: ComponentFixture<ConnectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionsComponent, TileComponent],
    });
    fixture = TestBed.createComponent(ConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('buttons', () => {
    it('should display 4 buttons', () => {
      // Arrange
      const buttons = fixture.nativeElement.querySelectorAll('.action-btn');

      // Assert
      expect(buttons.length).toBe(4);
    });

    it('should initially load with 2 disabled buttons', () => {
      // Arrange
      const buttons = fixture.nativeElement.querySelectorAll('.disabled');

      // Assert
      expect(buttons.length).toBe(2);
    });

    it('"Deselect" button should be disabled if no tiles are selected', () => {
      // Arrange
      component.selectedTiles = [];
      const button = fixture.nativeElement.querySelector('.disabled');

      // Assert
      expect(button.textContent).toContain('Deselect');
    });

    it('"Submit" button should be disabled if there are less than 4 tiles selected', () => {
      // Arrange
      component.selectedTiles = [
        {
          group: 1,
          option: 'Tile 1',
          category: 'Category 1',
        },
        {
          group: 1,
          option: 'Tile 1',
          category: 'Category 1',
        },
      ];

      // Act
      fixture.detectChanges();
      const button = fixture.nativeElement.querySelector('.disabled');

      // Assert
      expect(button.textContent).toContain('Submit');
    });

    it('"Submit" button should be the only disabled button if there are 1,2 or 3 tiles selected', () => {
      // Arrange
      component.selectedTiles = [
        {
          group: 1,
          option: 'Tile 1',
          category: 'Category 1',
        },
        {
          group: 1,
          option: 'Tile 1',
          category: 'Category 1',
        },
      ];

      // Act
      fixture.detectChanges();
      const buttons = fixture.nativeElement.querySelectorAll('.disabled');

      // Assert
      expect(buttons.length).toBe(1);
      expect(buttons[0].textContent).toContain('Submit');
    });
  });
});
