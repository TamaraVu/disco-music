import {Component, OnInit} from '@angular/core';

import {Tile} from '../models/tile.model';
import {DataService} from '../services/data-service.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  tiles: Tile[];

  constructor(private readonly dataService: DataService) {
  }

  ngOnInit(): void {
    this.tiles = this.dataService.getAllTiles();
  }

}
