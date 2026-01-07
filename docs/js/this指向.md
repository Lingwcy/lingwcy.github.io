# this 指向

**一句话阐述**：this 的指向，是在调用函数时根据执行上下文所动态确定的，具体根据动态绑定、全局环境、箭头函数等机制细分判断。

## this 动态绑定
this的动态绑定指 this 的值是在函数被调用时才确定。通过对象调用时，this 指向**最后**调用它的对象叫隐式绑定，同时，通过通过 call()、apply() 或 bind() 强制指定 this，这叫动态绑定。


``` javascript
// 1. Function.prototype.call()
/**
 *  这个函数几乎与 apply() 相同，只是函数的参数以列表的形式逐个传递给 call()，
 *  而在 apply() 中它们被组合在一个对象中，通常是一个数组——例如，func.call(this, "eat", "bananas") 与 func.apply(this, ["eat", "bananas"])。
 */
console.log(xiaoming.displayName.call(lilei)) //lilei

// 2. Function.prototype.apply()
console.log(xiaoming.displayName.call(lihua)) //lihua

/**
 * 如果省略第一个 thisArg 参数，则默认为 undefined。
 * 在非严格模式下，this 值将被替换为 globalThis（类似于全局对象）。
 * 
 * 为什么 this不指向 xiaoming？
    call()的调用方式完全覆盖了原始的调用上下文。xiaoming.displayName只是获取函数，但 .call()决定了函数如何被调用。
    由于 call()没有传递 thisArg，所以 this不会指向 xiaoming，而是回退到默认绑定（全局对象）
 */
console.log(xiaoming.displayName.call()) 

// 3. 使用 Function.prototype.bind()，创建一个新的函数，无论函数如何被调用，其 this 的值都不会改变
const lileiThisForever = xiaoming.displayName.bind(lilei)
console.log(lileiThisForever())

```

## 箭头函数中的this
箭头函数中的 this, 根据外层上下文来决定。

``` javascript
const pet ={
    name:"peter",
    displayName(){
        //箭头函数 保留上下文this
        return ()=>{
            return this.name;
        }
    }
}
console.log(pet.displayName()()) //peter

```


## 全局环境中的 this
- 函数独立调用时，非严格模式下 this 指向 window; 在严格模式 "use strict" 为 undefiend。

- 在全局作用域内，无论严格或非严格模式 this 总是指向 window 或 global。



## 例题


``` javascript
const o1 = {
    text: 'o1',
    fn: function() {
        return this.text
    }
}
const o2 = {
    text: 'o2',
    fn: function() {
        return o1.fn()
    }
}
const o3 = {
    text: 'o3',
    fn: function() {
        var fn = o1.fn
        return fn()
    }
}
console.log(o1.fn())
console.log(o2.fn())
console.log(o3.fn())

```

答案是：o1、o1、undefined

**分析**
- 第一个 console 最简单，o1 没有问题。难点在第二个和第三个上面，关键还是看调用 this 的那个函数。
-  第二个 console 的 o2.fn()，最终还是调用 o1.fn()，因此答案仍然是 o1。
-  最后一个，在进行 var fn = o1.fn 赋值之后，是“裸奔”调用，因此这里的 this 指向 window，答案当然是 undefined。

如果我们需要让console.log(o2.fn())输出o2,不能使用 bind/call/apply。

``` javascript
const o1 = {
    text: 'o1',
    fn: function() {
        return this.text
    }
}
const o2 = {
    text: 'o2',
    fn: o1.fn  //const tmp = o2.fn   // 这一步仅仅是“取引用”，并没有调用
}
console.log(o2.fn()) //tmp()   调用点：裸函数调用

```
还是应用那个重要的结论：this 指向**最后**调用它的对象，在 fn 执行时，挂到 o2 对象上即可，我们提前进行了赋值操作。