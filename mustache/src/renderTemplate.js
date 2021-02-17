import lookup from './lookup';
import parseArray from './parseArray';
/**
 * 
 * @param {待转化的tokens} tokens 
 * @param {该tokens对应的数据对象} data 
 */
export default function renderTemplate(tokens, data) {
    let templateStr = '';
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (token[0] == 'text') {
            templateStr += token[1];
        } else if (token[0] == 'name') {
            templateStr += lookup(data, token[1]);
        } else if (token[0] == '#') {
            templateStr += parseArray(token,data);
        }
    };
    return templateStr;
}