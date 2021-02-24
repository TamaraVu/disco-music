import { Component, OnInit } from '@angular/core';
import {Instrument} from '../models/instrument.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  instruments: Instrument[] = [
    {
      image: 'http://www.hspshop.it/WebRoot/StoreIT7/Shops/167668/5ADF/5A0B/81BF/93C5/9185/0A0A/B010/7845/cg101_classical_guitar.jpg',
      text: 'Stringed Instruments',
      name: 'Classic Guitar',
      bottom: '0/5 lessons'
    },
    {
      image: 'https://hobgoblin.com/community/app/uploads/2018/10/mandolin.jpg',
      text: 'Stringed Instruments',
      name: 'Mandolin',
      bottom : '0/12 lessons'
    },
    {
      image: 'https://i0.wp.com/www.musiccollection.ca/wp-content/uploads/2014/08/scherlroth-r101eh.jpg?fit=400%2C400&ssl=1',
      text: 'Stringed Instruments',
      name: 'Violin',
      bottom: '0/14 lessons'
    },
    {
      image: 'https://santamonicaconservatory.com/wp-content/uploads/2015/06/Cello-lessons-90404-Santa-Monica.jpg',
      text: 'Stringed Instruments',
      name: 'Cello',
      bottom: '0/9 lessons'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
