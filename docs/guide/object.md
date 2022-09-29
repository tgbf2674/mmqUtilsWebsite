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


## clone()

clone (obj, deep) 浅拷贝/深拷贝，和 assign 的区别是支持对象的递归克隆

```
                 const v1 = {a: 11, b: {b1: 22}}
                 const v2 = mmqUtils.clone(v1, false)
                 const v3 = mmqUtils.clone(v1, true)
                 expect(v2).toEqual({a: 11, b: {b1: 22}})
                 expect(v1.a === v2.a).toEqual(true)
                 expect(v1 === v3).toEqual(false)
                 const a = {
                 name: 'ddds',
                 age: 23,
                 hobbies: { sports: '篮球', tv: '雍正王朝' },
                 works: ['2020', '2021'],
                 map: new Map([['haha', 111], ['xixi', 222]]),
                 set: new Set([1, 2, 3]),
                 func: (name: any, age: any) => `${name}今年${age}岁啦！！！`,
                 sym: Symbol(123),
                 reg: new RegExp(/haha/g),
                 }
                 const b = mmqUtils.clone(a, true)
                 expect(a.func === b.func).toEqual(false)
```

## clone()

objectEach (obj, iterate [, context]) 对象迭代器

```
                 const rest: any[] = []
                 mmqUtils.objectEach({ a: 11, b: 22, c: 33, d: 44 }, (item: any, key: number, obj: any) => {
                 rest.push([item, key])
                 })
                 expect(
                 rest
                 ).toEqual([[11, 'a'], [22, 'b'], [33, 'c'], [44, 'd']])
```
