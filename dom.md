# dom

文档对象模型，是w3c组织推荐的处理可拓展标记语言(HTML或XML)的标准编程接口。

## dom节点继承层次

p元素：HTMLParagraphElement=>HTMLElement=>Element=>Node=>EventTarget=>Function=>object;
文本：Text=>CharacterData=>Node=>EventTarget=>Function=>Object;

块元素可以包含内联元素与块元素，
内联元素只能包含内联元素。
块级元素不能放在``<p>``标签里
有几个块级元素只能包含内联元素，不能再包含块级元素这几个特殊的标签是：<h1`h6>,<p></p>,<dt>
li内可以包含div标签。

innerHtml创建多个元素效率更高(不要拼接字符串，采取数组形式拼接)，结构稍微复杂。
createElement()创建多个元素效率稍微低一点，但是结构更清晰。
节点：
父节点：parentNode
子节点：children
兄:previousElementSiblings,nextElementSiblings
addEventListener(type,listener,[usecapture])//第三个参数是true则代表在捕获阶段调用程序，false则代表在事件冒泡阶段调用程序
事件对象：
e.target：触发事件的元素对象
clientX,clientY//相对于网页可视化窗口的x,y
pageX,pageY//相对于文档页面的x,y
screenX,screenY//相对于电脑屏幕的x,y
e.stopPropagation //阻止事件冒泡
e.preventDefault//阻止事件默认功能
事件委托(事件代理)
**事件委托的原理**
不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点。
