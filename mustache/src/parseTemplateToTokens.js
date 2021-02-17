import Scanner from './scanner';
import nestTokens from './nestTokens';
/**
 * 将模板字符串转化为tokens     
 * @param {待转化的模板字符串} templateStr 
 */
export default function parseTemplateToTokens(templateStr) {

    let tokens = [];
    let words;
    let scanner = new Scanner(templateStr);
    
    while (!scanner.eof()) {
        words = scanner.scanUntil('{{');
        if(words!='')
        tokens.push(['text', words]);
        scanner.scan('{{');
        words = scanner.scanUntil('}}');
        if(words!=''){
            if(words[0] == '#'){
              tokens.push(['#',words.substring(1)])
            }
            else if(words[0] =='/'){
               tokens.push(['/',words.substring(1)]) 
            }
            else
            tokens.push(['name', words]);
        }
       
        scanner.scan('}}');
    }

    return nestTokens(tokens);
}