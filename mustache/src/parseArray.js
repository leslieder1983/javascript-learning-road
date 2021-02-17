/**
 * 处理数组，结合renderTemplate实现递归
 * 注意参数接受的是token,而不是tokens,
 * 
 * 这个函数调用的次数由data决定：类比于x-repeat v-for
 */
import lookup from './lookup';
import renderTemplate from './renderTemplate';
 export default  function parseArray(token,data){
let value = lookup(data,token[1]);
let resultStr = '';
for(let i=0; i<value.length;i++){
    resultStr += renderTemplate(token[2],{
        '.':value[i],
        ...value[i]
    });
}

return resultStr;
 }