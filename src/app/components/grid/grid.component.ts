import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CityInterface } from '../../interfaces/city.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  @Input()
  data!: CityInterface[];

  @Output() public onFavorite = new EventEmitter<CityInterface>();
}
