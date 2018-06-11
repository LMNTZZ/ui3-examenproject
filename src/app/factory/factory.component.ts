import { Component, OnInit } from '@angular/core';

import {Factory} from "./factory.model";
import {DummyDataService} from "../dummy-data.service";
import {FactoryDataService} from "../factory-data-service";

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {
  factoryDetails: Factory;
  showList = true;

  constructor(private dummyDataService: DummyDataService,
              private factoryDataService: FactoryDataService,
  ) {

  }

  ngOnInit() {
    // this.factoryDetails = this.dummyDataService.getDummyData();
    this.factoryDataService.getFactoryData()
      .subscribe(
        data => this.factoryDetails = data,
        error => console.log('Server error')
      );
  }

  onToggleView() {
    this.showList = !this.showList;
  }
}
