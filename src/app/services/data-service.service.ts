import {Injectable} from '@angular/core';

import {Tile} from '../models/tile.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getAllTiles(): Tile[] {
    return [
      {
        title: 'Staffs, Clefs and Ledger Lines',
        id: 1,
        color: '#2196F3'
      },
      {
        title: 'Simple and Compound Meter',
        id: 2,
        color: '#009688'
      },
      {
        title: 'Measures and Time Signature',
        id: 3,
        color: '#FF9800'
      },
      {
        title: 'An Introduction to Major Scales',
        id: 4,
        color: '#FF5722'
      },
      {
        title: 'Dots and Ties',
        id: 5,
        color: '#FFC107'
      },
      {
        title: 'Odd Meter',
        id: 6,
        color: '#01579B'
      },
      {
        title: 'Steps and Accidentals',
        id: 7,
        color: '#8BC34A'
      },
      {
        title: 'The Major Scale',
        id: 8,
        color: '#00BCD4'
      },
      {
        title: 'The Minor Scales',
        id: 9,
        color: '#B388FF'
      },
      {
        title: 'Introduction to Major Chords',
        id: 10,
        color: '#0D47A1'
      },
      {
        title: 'An Introduction to Minor Chords',
        id: 11,
        color: '#7C4DFF'
      },
      {
        title: 'Scale Degrees',
        id: 12,
        color: '#E53935'
      },
    ];
  }
}

