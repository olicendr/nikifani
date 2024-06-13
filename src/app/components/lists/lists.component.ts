import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CityInterface } from '../../interfaces/city.interface';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  @Input()
  data!: CityInterface[];

  @Output() onFavorite = new EventEmitter<CityInterface>();
}
