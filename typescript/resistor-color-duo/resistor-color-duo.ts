export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    if (colors.length < 2) throw `At least two colors need to be present`
    this.colors = colors.slice(0,2);
  }
  value = (): number => {
    const colorVals = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    return Number(this.colors.map(color => colorVals.indexOf(color)).join(""))
  };
}
