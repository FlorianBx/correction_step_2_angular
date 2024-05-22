export interface Recipe {
  id: number;
  name: string;
  description: string;
  imagePath?: string;
  ingredients: string[];
  isVegetarian: boolean;
}
