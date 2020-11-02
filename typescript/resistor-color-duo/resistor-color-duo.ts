export class ResistorColor {
    private colors: string[];

    constructor(colors: string[]) {
        if (colors.length < 2) throw `At least two colors need to be present`
        this.colors = colors.slice(0, 2);
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

        const reducer = (acc:number , currVal:string, curIndex:number) => acc + colorVals[currVal] * 10 ** curIndex;
        return this.colors.reverse().reduce(reducer ,0);
    };
}
