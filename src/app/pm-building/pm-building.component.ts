import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pm-building',
  templateUrl: './pm-building.component.html',
  styleUrls: ['./pm-building.component.scss']
})
export class PmBuildingComponent implements OnInit {
  svg: string = '../../assets/bio-building.svg';

  constructor() { }

  ngOnInit() { }
  
}
