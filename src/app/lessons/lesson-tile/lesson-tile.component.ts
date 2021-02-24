import {Component, Input} from '@angular/core';

import {Tile} from 'src/app/models/tile.model';

@Component({
  selector: 'app-lesson-tile',
  templateUrl: './lesson-tile.component.html',
  styleUrls: ['./lesson-tile.component.css']
})
export class LessonTileComponent {
  @Input() tile: Tile;

}
