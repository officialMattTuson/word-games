export interface Tile {
  option: string;
  group: number;
  category: string;
  isSelected: boolean;
  isCorrect: boolean;
  index?: number;
}

export const tiles: Tile[] = [
  { option: 'Balloon', group: 1, category: 'Getting from A to B', isSelected: false, isCorrect: false},
  { option: 'Car', group: 1, category: 'Getting from A to B' , isSelected: false, isCorrect: false},
  { option: 'Boat', group: 1, category: 'Getting from A to B' , isSelected: false, isCorrect: false},
  { option: 'Train', group: 1, category: 'Getting from A to B' , isSelected: false, isCorrect: false},
  { option: 'Mouse', group: 2, category: 'Household pets' , isSelected: false, isCorrect: false},
  { option: 'Rabbit', group: 2, category: 'Household pets' , isSelected: false, isCorrect: false},
  { option: 'Cat', group: 2, category: 'Household pets' , isSelected: false, isCorrect: false},
  { option: 'Dog', group: 2, category: 'Household pets' , isSelected: false, isCorrect: false},
  { option: 'Sun', group: 3, category: 'In the sky' , isSelected: false, isCorrect: false},
  { option: 'Moon', group: 3, category: 'In the sky' , isSelected: false, isCorrect: false},
  { option: 'Star', group: 3, category: 'In the sky' , isSelected: false, isCorrect: false},
  { option: 'Cloud', group: 3, category: 'In the sky' , isSelected: false, isCorrect: false},
  { option: 'Laptop', group: 4, category: 'Household items' , isSelected: false, isCorrect: false},
  { option: 'Phone', group: 4, category: 'Household items' , isSelected: false, isCorrect: false},
  { option: 'Book', group: 4, category: 'Household items' , isSelected: false, isCorrect: false},
  { option: 'Pen', group: 4, category: 'Household items' , isSelected: false, isCorrect: false},
];