# JS高频操作与作用域详解

## 原生js获取HTML DOM元素的八种方法

* 通过name属性获取(getElementsByName)带有指定名称的对象的集合NodeList。参数是是获取元素的name属性。  
* 通过类名（getElementsByClassName ）返回文档中所有指定类名的元素集合.  
* 通过标签名（getElementsByTagName）  
* 获取html的方法（document.documentElement）  
* 获取body的方法（document.body）  
* 通过ID获取（getElementById）  
* 通过选择器获取一个元素（querySelector） 只获取到第一个元素  
* 通过选择器获取一组元素（querySelectorAll）  

## JS添加事件的三种方式

* 直接在html标签上添加

```js
<div onclick="代码段或者是函数">div</div>
```

* 使用JS的DOM的方法添加 dom零级事件会覆盖

```js
document.querySelector('.btn').onclick = function () {alert('点击事件')};
```

* 用addEventListener或attachEvent添加 dom二级事件不会覆盖，依次执行

```js
document.getElementById('div').addEventListener('click', function () {alert('Dear_Mr')}, false);//默认事件在冒泡阶段执行
document.getElementById('div').attachEvent('onclick', function () {alert('Dear_Mr')});
```

## 事件冒泡

```js
<form id="form1">
        　　　<div id="divOne" onclick="alert('我是最外层');">
        　　　　<div id="divTwo" onclick="alert('我是中间层！')">
        　　　　　　　　<a id="hr_three" href="http://www.baidu.com" onclick="alert('我是最里层！')">点击我</a>
        　　　　　　</div>
        　　　　</div>
        　　</form>
```

阻止事件冒泡：

```js
 let btn = document.querySelector('#hr_three');
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
    })
```

## 详解作用域

**通常来说，一段程序代码中所用到的名字不总是有效和可用的，而限定这个名字的可用性的代码范围就是这个名字的作用域.**

```js
var num1=10;
var num2=20;

function fn(num,num1){
    num=100;
    num1=50;
    num2=40;
    console.log(num);
    console.log(num1);
    console.log(num2);
}
fn(num1,num2);
console.log(num1);
console.log(num2);
console.log(num);
在ES6之前，JavaScript没有块级作用域(一对花括号{}即为一个块级作用域)，只有全局作用域和函数作用域。一般使用var。由于var本身有显著的缺陷，在for和if中使用会出现问题。
//if
if(true){
    var x=1;
    console.log(x);//1
}
console.log(x);//1

//for
var btn=document.querySelector('button');
for(var i=0;i<btn.length;i++){
    btn[i].onclick=function(){
        console.log(i);
    }
}

ES5之前因为if和for都没有块级作用域的概念，所以在很多时候，我们都必须借助function的作用域来解决应用外部变量的问题。  
//解决if作用域
if(true){
    (function(){
        var x=1;
        console.log(x);
    })()
}
console.log(x);
//解决for作用域
    var btn = document.querySelectorAll('button');
    for (var i = 0; i < btn.length; i++) {
        (function (i) {
            btn[i].onclick = function () {
                console.log(i);
            }
        })(i)
    }

在ES6中出现了let和const,if和for作用域的问题就迎刃而解了。
//解决if作用域
if(true){
   let x=1;
   console.log(x);
}
console.log(x);

//解决for作用域
var btn = document.querySelectorAll('button');
    for (let i = 0; i < btn.length; i++) {
            btn[i].onclick = function () {
                console.log(i);
            }
    }

const指向的普通数据值不能更改：
 const name='Gaokun';
  name='zhangsan';
  console.log(name);

const指向的对象不能修改，但是可以改变内部的属性。（堆内存地址值不能修改）。
 const name = {
        name: 'gaoKun'
    };
    name = {
        name: 'zhangsan'
    };
    console.log(name);

const name = {
        name: 'gaoKun'
    };
    name.name='张三'
    console.log(name);


//变量提升与函数提升
变量提升，即将变量声明提升到它所在作用域的最开始的部分.
函数提升，只有函数声明才存在函数提升。
console.log(global); // undefined
var global = 'global';
console.log(global); // global
fn();
function fn () {
　　console.log(a); // undefined
　　var a = 'aaa';
　　console.log(a); // aaa
}
//函数提升
console.log(f1); // function f1() {}
console.log(f2); // undefined  
function f1() {}
var f2 = function() {}


//综合
function Foo(){
    getName=function () {
        console.log(1);
    }
    return this;
}
Foo.getName=function(){
    console.log(2);
}
Foo.prototype.getName=function(){
    console.log(3);
}
var getName=function(){
    console.log(4);
}
function getName() {
    console.log(5);
}
Foo.getName();//2
getName();//4
Foo().getName();//1
getName();//1
new Foo.getName();//2
new Foo().getName();//3  
new new Foo().getName();//3
```
