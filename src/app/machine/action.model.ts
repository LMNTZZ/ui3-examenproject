export class Action {
  public date: Date;
  public type: string;
  public description: string;

  constructor(date: Date, type: string, description: string) {
    this.date = date;
    this.type = type;
    this.description = description;
  }
}
