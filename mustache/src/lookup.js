/**
 * lookup函数:
功能是可以在data0bj对象中，寻找用连续点符号的keyName属性比如，data0bj是
{
    a: {
        b: {
            c: 100
        }
    }

}
那么lookup(data0bj, 'a.b.c‘)结果就是100
 */
export default function lookup(dataObj, keyName) {
    if (keyName.indexOf('.') <=0) {
        return dataObj[keyName];
    } else {
        let obj = dataObj;
        let keys = keyName.split('.');
        keys.forEach(element => {
            obj = obj[element];
        });
        return obj;
    }
}