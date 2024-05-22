import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { ShortenPipe } from '../pipes/shorten.pipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [ShortenPipe],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe | null = null;
}
