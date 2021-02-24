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
  title: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.tiles = this.dataService.getAllTiles();
  }

  search(){
    if (this.title === '') {
      this.ngOnInit();
    }else{
      this.tiles = this.tiles.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
  }

}
