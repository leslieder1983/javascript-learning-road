/**
 * 将所有tokens折叠，#开头/结尾的项全部折叠进外层token里
 * @param {所有待折叠的tokens} tokens 
 */
export default function nestTokens(tokens) {
    let nestTokens = [];
    let collector = nestTokens;
    let sections = [];

    let token;

    for (let i = 0, length = tokens.length; i < length; i++) {
        token = tokens[i];
        switch (token[0]) {
            case '#':
                collector.push(token);
                sections.push(token);
                collector = token[2] = [];
                break;
            case '/':
                sections.pop();
                collector = sections.length > 0 ? sections[length - 1][2] : nestTokens;
                break;
            default:
                collector.push(token);
                break;

        }
    }

  return nestTokens;
}