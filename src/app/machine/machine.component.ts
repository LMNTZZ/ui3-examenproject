import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

import {Machine} from "./machine.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit, OnDestroy {
  @Input() machine: Machine;
  machineDetails : Machine;
  paramsSubscription : Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.machine.machineId = params['id'];
        }
      );
  }

  showDetails(machine: Machine) {
    if ( this.machineDetails == null ) { this.machineDetails = machine; }
    else { this.machineDetails = null; }
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
