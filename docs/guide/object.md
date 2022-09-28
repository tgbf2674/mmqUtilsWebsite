# 对象方法

## clear()

clear (obj[, defs, assigns]) 清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)

```
                let a = [11, 22, 33, 33]
                mmqUtils.clear(a) // []
                mmqUtils.clear(a, undefined) // [undefined, undefined, undefined, undefined]
                mmqUtils.clear(a, null) // [null, null, null, null]
                let b = {b1: 11, b2: 22}
                mmqUtils.clear(b) // {}
                mmqUtils.clear(b, undefined) // {b1: undefined, b2: undefined}
                mmqUtils.clear(b, null) // {b1: null, b2: null}
```
