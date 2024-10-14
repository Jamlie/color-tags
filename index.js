import chalk from "chalk";
function parseText(text) {
    const tags = {
        red: chalk.red,
        green: chalk.green,
        blue: chalk.blue,
        yellow: chalk.yellow,
        black: chalk.black,
        cyan: chalk.cyan,
        gray: chalk.gray,
        grey: chalk.grey,
        magenta: chalk.magenta,
        white: chalk.white,
        blackBright: chalk.blackBright,
        redBright: chalk.redBright,
        greenBright: chalk.greenBright,
        yellowBright: chalk.yellowBright,
        blueBright: chalk.blueBright,
        magentaBright: chalk.magentaBright,
        cyanBright: chalk.cyanBright,
        whiteBright: chalk.whiteBright,
        bgBlack: chalk.bgBlack,
        bgRed: chalk.bgRed,
        bgGreen: chalk.bgGreen,
        bgYellow: chalk.bgYellow,
        bgBlue: chalk.bgBlue,
        bgMagenta: chalk.bgMagenta,
        bgCyan: chalk.bgCyan,
        bgWhite: chalk.bgWhite,
        bgGray: chalk.bgBlackBright,
        bgGrey: chalk.bgBlackBright,
        bgBlackBright: chalk.bgBlackBright,
        bgRedBright: chalk.bgRedBright,
        bgGreenBright: chalk.bgGreenBright,
        bgYellowBright: chalk.bgYellowBright,
        bgBlueBright: chalk.bgBlueBright,
        bgMagentaBright: chalk.bgMagentaBright,
        bgCyanBright: chalk.bgCyanBright,
        bgWhiteBright: chalk.bgWhiteBright,
        reset: chalk.reset,
        bold: chalk.bold,
        dim: chalk.dim,
        italic: chalk.italic,
        underline: chalk.underline,
        overline: chalk.overline,
        inverse: chalk.inverse,
        hidden: chalk.hidden,
        strikethrough: chalk.strikethrough,
        visible: chalk.visible,
    };
    function recursiveParse(text) {
        return text.replace(/<(\w+)>(.*?)<\/\1>/g, (_match, tag, content) => {
            const style = tags[tag];
            const parsedContent = recursiveParse(content);
            return style ? style(parsedContent) : parsedContent;
        });
    }
    return recursiveParse(text);
}
export function colorize(text) {
    return parseText(text);
}
//# sourceMappingURL=index.js.map