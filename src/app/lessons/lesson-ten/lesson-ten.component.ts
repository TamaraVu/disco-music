import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Tile} from '../../models/tile.model';
import {DataService} from '../../services/data-service.service';

@Component({
  selector: 'app-lesson-ten',
  templateUrl: './lesson-ten.component.html',
  styleUrls: ['./lesson-ten.component.css']
})
export class LessonTenComponent implements OnInit {

  lessonData: Tile;
  id: number;


  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.lessonData = this.dataService.getTile(this.id);
      }
    );
  }

}
