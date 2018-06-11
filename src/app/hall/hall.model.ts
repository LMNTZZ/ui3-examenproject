import { Machine } from "../machine/machine.model"

export class Hall {
  public id: number;
  public name: string;
  public area: string;
  public height: number;
  public width: number;
  public numberOfMachines: number;
  public machines: Machine[]

  constructor(id: number,
              name: string,
              area: string,
              height: number,
              width: number,
              numberOfMachines: number,
              machines: Machine[]) {
    this.id = id;
    this.name = name;
    this.area =  area;
    this.height = height;
    this.width = width;
    this.numberOfMachines = numberOfMachines;
    this.machines = machines;
  }
}
