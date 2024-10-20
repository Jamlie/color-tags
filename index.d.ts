import { ChalkInstance } from "chalk";

type ChalkKeys = {
    red: ChalkInstance;
    green: ChalkInstance;
    blue: ChalkInstance;
    yellow: ChalkInstance;
    black: ChalkInstance;
    cyan: ChalkInstance;
    gray: ChalkInstance;
    grey: ChalkInstance;
    magenta: ChalkInstance;
    white: ChalkInstance;

    blackBright: ChalkInstance;
    redBright: ChalkInstance;
    greenBright: ChalkInstance;
    yellowBright: ChalkInstance;
    blueBright: ChalkInstance;
    magentaBright: ChalkInstance;
    cyanBright: ChalkInstance;
    whiteBright: ChalkInstance;

    bgBlack: ChalkInstance;
    bgRed: ChalkInstance;
    bgGreen: ChalkInstance;
    bgYellow: ChalkInstance;
    bgBlue: ChalkInstance;
    bgMagenta: ChalkInstance;
    bgCyan: ChalkInstance;
    bgWhite: ChalkInstance;

    bgGray: ChalkInstance;
    bgGrey: ChalkInstance;
    bgBlackBright: ChalkInstance;
    bgRedBright: ChalkInstance;
    bgGreenBright: ChalkInstance;
    bgYellowBright: ChalkInstance;
    bgBlueBright: ChalkInstance;
    bgMagentaBright: ChalkInstance;
    bgCyanBright: ChalkInstance;
    bgWhiteBright: ChalkInstance;

    reset: ChalkInstance;
    bold: ChalkInstance;
    dim: ChalkInstance;
    italic: ChalkInstance;
    underline: ChalkInstance;
    overline: ChalkInstance;
    inverse: ChalkInstance;
    hidden: ChalkInstance;
    strikethrough: ChalkInstance;
    visible: ChalkInstance;
};

export function colorize(text: string): string;
