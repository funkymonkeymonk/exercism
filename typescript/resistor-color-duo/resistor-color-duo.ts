export class ResistorColor {
    constructor(private colors: string[]) {
        if (colors.length < 2) throw `At least two colors need to be present`
    }

    value = (): number => {
        const colorVals: { [color: string]: number; } = {
            'black': 0,
            'brown': 1,
            'red': 2,
            'orange': 3,
            'yellow': 4,
            'green': 5,
            'blue': 6,
            'violet': 7,
            'grey': 8,
            'white': 9
        };

        const [tensColor, onesColor] = this.colors
        return colorVals[tensColor] * 10 + colorVals[onesColor]
    };
}
