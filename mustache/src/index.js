import parseTemplateToTokens from './parseTemplateToTokens';
import renderTemplate from "./renderTemplate";

/**
 * 入口函数
 * 用于将模板编译成tokens
 * 将数据渲染成模板字符串
 */
window.kyleslie = {
    render(templateStr, data) {
        let tokens = parseTemplateToTokens(templateStr);
        let domStr = renderTemplate(tokens,data);
        return domStr;
        
    }
}