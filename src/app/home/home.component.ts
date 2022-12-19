import { Component, OnInit } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  city = '';
  searchResults: Location[] = [];
  housingList: Location[] = [
    {
      id: 1,
      name: 'Location One',
      desccription: 'Safe place',
      city: 'Chicago'
    },
    {
      id: 2,
      name: 'Location Two',
      desccription: 'Safe place',
      city: 'Torando'
    },
    {
      id: 1,
      name: 'Location Three',
      desccription: 'Safe place',
      city: 'Benington'
    },
    {
      id: 1,
      name: 'Location Four',
      desccription: 'Safe place',
      city: 'Aukshire'
    }
  ];

  ngOnInit(): void {
  }

  searchHousing() {
    if (this.city !== '') {
      this.searchResults = this.housingList
                          .filter(location => 
                            location.city.toLowerCase() === 
                            this.city.toLocaleLowerCase());
      this.searchResults;
    }
  }

}
