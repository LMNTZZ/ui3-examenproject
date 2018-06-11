import { Hall } from "../hall/hall.model"

export class Factory {
  public name: string;
  public halls: Hall[];

  constructor(name: string, halls: Hall[]) {
    this.name = name;
    this.halls = halls;
  }
}
