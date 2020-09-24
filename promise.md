# Promise与异步函数  

## 异步编程  

### 异步的概念  

**异步是与同步相对的概念。在我们学习的传统单线程中程序的运行是同步的（同步不意味着所有步骤同时运行，而是指步骤在一个控制流序列中按顺序执行）。而异步的概念则是不保证同步的概念，也就是说，一个异步过程的执行将不再与原有的序列有顺序关系。**

**简单来理解就是：同步按你的代码顺序执行，异步不按照代码顺序执行，异步的执行效果更高：**

**以上是关于异步的概念的解释，接下来我们通俗地解释一下异步：异步就是从主线程发射一个子线程来完成任务。**  

### 什么时候使用异步编程

**在前端编程中（甚至后端有时也是这样），我们在处理一些简短、快速的操作时，例如计算 1 + 1 的结果，往往在主线程中就可以完成。主线程作为一个线程，不能够同时接受多方面的请求。所以，当一个事件没有结束时，界面将无法处理其他请求。**
**现在有一个按钮，如果我们设置它的 onclick 事件为一个死循环，那么当这个按钮按下，整个网页将失去响应。**

**为了避免这种情况的发生，我们常常用子线程来完成一些可能消耗时间足够长以至于被用户察觉的事情，比如读取一个大文件或者发出一个网络请求。因为子线程独立于主线程，所以即使出现阻塞也不会影响主线程的运行。但是子线程有一个局限：一旦发射了以后就会与主线程失去同步，我们无法确定它的结束，如果结束之后需要处理一些事情，比如处理来自服务器的信息，我们是无法将它合并到主线程中去的。**

**为了解决这个问题，JavaScript 中的异步操作函数往往通过回调函数来实现异步任务的结果处理。**

### 回调函数

**回调函数就是一个函数，它是在我们启动一个异步任务的时候就告诉它：等你完成了这个任务之后要干什么。这样一来主线程几乎不用关心异步任务的状态了，他自己会善始善终。**

```js
setTimeout(function () {
    document.getElementById("demo").innerHTML="RUNOOB!";
}, 3000);
```

**这段程序中的 setTimeout 就是一个消耗时间较长（3 秒）的过程，它的第一个参数是个回调函数，第二个参数是毫秒数，这个函数执行之后会产生一个子线程，子线程会等待 3 秒，然后执行回调函数 "print"，在命令行输出 "Time out"。**

**当然，JavaScript 语法十分友好，我们不必单独定义一个函数 print ，我们常常将上面的程序写成：**

```js
setTimeout(function () {
    document.getElementById("demo").innerHTML="kylesie";
}, 3000);
```

**注意：既然 setTimeout 会在子线程中等待 3 秒，在 setTimeout 函数执行之后主线程并没有停止，所以：**

```js
setTimeout(function () {
    console.log("1");
}, 1000);
console.log("2");
```

**这段程序的执行结果是：**

```java
1
2
```

### 异步ajax

**除了 setTimeout 函数以外，异步回调广泛应用于 AJAX 编程。
XMLHttpRequest 常常用于请求来自远程服务器上的 XML 或 JSON 数据。一个标准的 XMLHttpRequest 对象往往包含多个回调。**

## promise

promise是ES6中提供的类，目的是为了更加优雅的书写复杂的异步任务。  

### 新建Promise

```js
new Promise(){
    function(resolve,reject){
         //异步操作
    }
}
```

仅仅通过新建Promise对象好像并不能看出如何更加优雅的书写复杂的异步任务。如果我们多次调用异步函数则可以看出promise比es5提供的异步解决方案书写起来更加的优雅与易于维护。

例如，如果我想分三次输出字符串，第一次间隔 1 秒，第二次间隔 4 秒，第三次间隔 3 秒,然后2秒，5秒.以下是两种实现方式的对比：  

```js
setTimeout(function () {//定时回调函数实现
    console.log("First");
    setTimeout(function () {
        console.log("Second");
        setTimeout(function () {
            console.log("Third");
            setTimeout(function(){
                console.log("Fourth")；
                setTimeout(function(){
                    console.log("Fifth")
                },5000);
            },2000);
        }, 3000);
    }, 4000);
}, 1000);
```

```js
new Promise(function (resolve, reject) {//使用promise来处理异步任务
    setTimeout(function () {
        console.log("First");
        resolve();
    }, 1000);
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Second");
            resolve();
        }, 4000);
    });
}).then(function () {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            console.log("Third");
            resolve();
        }, 4000);
    })
}).then(function(){
    return new Promise(function(resolve,reject){
        setTimeout(function () {
        console.log("Fourth");
        resolve();
    }, 3000);
    })
}).then(function(){
    return new Promise(resolve,reject){
        setTimeout(function () {
        console.log("Fourth");
        resolve();
    }, 3000);
    }
});
```

两者最为不同的可以看出是嵌套编码方式和顺序编码方式。如果嵌套的次数过多，则代码冗杂，维护起来也非常不方便。反之顺序编码方式看起来更加优雅简洁，维护起来也更为的轻松方便。

### Promise的使用

Promise 构造函数只有一个参数，是一个函数，这个函数在构造之后会直接被异步运行，所以我们称之为起始函数。起始函数包含两个参数 resolve 和 reject。

当 Promise 被构造时，起始函数会被异步执行：

```js
new Promise(function (resolve, reject) {
    console.log("Run");
});
```

这段程序会直接输出Run。  

resolve与reject都是函数，其中调用resolve代表一切正擦，调用reject代表出现异常时调用：  

```js
new Promise(function (resolve, reject) {
    var a = 0;
    var b = 1;
    if (b == 0) reject("Diveide zero");
    else resolve(a / b);
}).then(function (value) {
    console.log("a / b = " + value);
}).catch(function (err) {
    console.log(err);
}).finally(function () {
    console.log("End");
});
```

```js
a / b = 0
End
```

Promise 类有 `.then().catch()` 和 `.finally()` 三个方法，这三个方法的参数都是一个函数，.then() 可以将参数中的函数添加到当前 Promise 的正常执行序列，.catch() 则是设定 Promise 的异常处理序列，.finally() 是在 Promise 执行的最后一定会执行的序列。 .then() 传入的函数会按顺序依次执行，有任何异常都会直接跳到 catch 序列：  

```js
new Promise(function (resolve, reject) {
    console.log(1111);
    resolve(2222);
}).then(function (value) {
    console.log(value);
    return 3333;
}).then(function (value) {
    console.log(value);
    throw "An error";
}).catch(function (err) {
    console.log(err);
});
```

执行结果：  

```js
1111
2222
3333
An error
```

``resolve()`` 中可以放置一个参数用于向下一个 then 传递一个值，then 中的函数也可以返回一个值传递给 then。但是，如果 then 中返回的是一个 Promise 对象，那么下一个 then 将相当于对这个返回的 Promise 进行操作，这一点从刚才的计时器的例子中可以看出来。

``reject()`` 参数中一般会传递一个异常给之后的 catch 函数用于处理异常。

### Promise函数

上述的‘计时器’程序看上去很长，可以将其核心部分写成一个Promise函数：  

```js
function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}
```

然后即可直接使用函数。

```js
print(1000, "First").then(function () {
    return print(4000, "Second");
}).then(function () {
    print(3000, "Third");
});
```

这样返回值为一个promise对象的函数称作为Promise函数，它常常用于开发基于异步操作的库。  

### 常见的问题

**Q: then、catch 和 finally 序列能否顺序颠倒？**

A: 可以，效果完全一样。但不建议这样做，最好按 then-catch-finally 的顺序编写程序。

**Q: 除了 then 块以外，其它两种块能否多次使用？**

A: 可以，finally 与 then 一样会按顺序执行，但是 catch 块只会执行第一个，除非 catch 块里有异常。所以最好只安排一个 catch 和 finally 块。

**Q: then 块如何中断？**

A: then 块默认会向下顺序执行，return 是不能中断的，可以通过 throw 来跳转至 catch 实现中断。

**Q: 什么时候适合用 Promise 而不是传统回调函数？**

A: 当需要多次顺序执行异步操作的时候，例如，如果想通过异步方法先后检测用户名和密码，需要先异步检测用户名，然后再异步检测密码的情况下就很适合 Promise。

**Q: Promise 是一种将异步转换为同步的方法吗？**

A: 完全不是。Promise 只不过是一种更良好的编程风格。

**Q: 什么时候我们需要再写一个 then 而不是在当前的 then 接着编程？**

A: 当你又需要调用一个异步任务的时候。

## 异步函数

异步函数（async function）是 ECMAScript 2017 (ECMA-262) 标准的规范，几乎被所有浏览器所支持。  
在promise中我们编写过一个 Promise 函数:

```js
function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}
```

然后用不同的时间间隔输出了三行文本：  

```js
print(1000, "First").then(function () {
    return print(4000, "Second");
}).then(function () {
    print(3000, "Third");
});
```

我们可以将这段代码变得更好看：  

```js
async function asyncFunc() {
    await print(1000, "First");
    await print(4000, "Second");
    await print(3000, "Third");
}
asyncFunc();
```

哈！这岂不是将异步操作变得像同步操作一样容易了吗！

这次的回答是肯定的，异步函数 async function 中可以使用 await 指令，await 指令后必须跟着一个 Promise，异步函数会在这个 Promise 运行中暂停，直到其运行结束再继续运行。

异步函数实际上原理与 Promise 原生 API 的机制是一模一样的，只不过更便于程序员阅读。

处理异常的机制将用 try-catch 块实现：  

```js
async function asyncFunc() {
    try {
        await new Promise(function (resolve, reject) {
            throw "Some error"; // 或者 reject("Some error")
        });
    } catch (err) {
        console.log(err);
        // 会输出 Some error
    }
}
asyncFunc();
```

如果 Promise 有一个正常的返回值，await 语句也会返回它：  

```js
async function asyncFunc() {
    let value = await new Promise(
        function (resolve, reject) {
            resolve("Return value");
        }
    );
    console.log(value);
}
asyncFunc();
```

程序会输出:

```Return value```
