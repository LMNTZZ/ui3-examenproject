import {Injectable} from "@angular/core";

import {DUMMYFACTORY} from "./mock";

@Injectable()
export class DummyDataService {
  getDummyData() {
    return DUMMYFACTORY;
  }
}
