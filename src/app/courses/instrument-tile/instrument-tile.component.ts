import {Component, Input, OnInit} from '@angular/core';
import {Instrument} from '../../models/instrument.model';

@Component({
  selector: 'app-instrument-tile',
  templateUrl: './instrument-tile.component.html',
  styleUrls: ['./instrument-tile.component.css']
})
export class InstrumentTileComponent implements OnInit {
  @Input() instrument: Instrument;

  constructor() {
  }

  ngOnInit(): void {
  }

}
