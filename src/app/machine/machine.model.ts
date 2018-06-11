import { Action } from "./action.model"

export class Machine {
  public machineId: string;
  public category: string;
  public name: string;
  public description: string;
  public lastAction: Action;
  public nextAction: Action;

  constructor(machineId: string,
              category: string,
              name: string,
              description: string,
              lastAction: Action,
              nextAction: Action) {
    this.machineId = machineId;
    this.category = category;
    this.name = name;
    this.description = description;
    this.lastAction = lastAction;
    this.nextAction = nextAction;
  }

}
