/**
 * 扫描器类 
 * 用于扫描初始模板字符串，易于将数据进行分类，生成tokens
 */
export default class Scanner {
    constructor(templateStr) {
        this.templateStr = templateStr;
        this.pos = 0;
        this.tail = templateStr;
    };
    eof() {
        return this.pos >= this.templateStr.length;
    }
    scan(stopTag){
        while(this.tail.indexOf(stopTag)==0){
            this.pos+=2;
            this.tail=this.templateStr.substring(this.pos);
        };
        return;
    }

    scanUntil(stopTag){
        const pos_backend = this.pos;
        while(this.tail.indexOf(stopTag)!=0&&!this.eof()){
            this.pos++;
            this.tail = this.templateStr.substring(this.pos);
        };
        return this.templateStr.substring(pos_backend,this.pos);
    }
}