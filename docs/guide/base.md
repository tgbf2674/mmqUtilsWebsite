# 基本方法

## isNaN()

isNaN (val) 判断是否非数值，如果 value 是一个 NaN，那么返回 true，否则返回 false

```
mmqUtils.isNaN('NAN') //false
mmqUtils.isNaN(/\d/) //false
mmqUtils.isNaN(NaN)) //true
```

## isFinite()

isFinite (val) 判断是否为有限数值

```
mmqUtils.isFinite('num') // false
mmqUtils.isFinite(-2) //true
mmqUtils.isFinite(88) //true
mmqUtils.isFinite(2e64) //true
```

## isUndefined()

isUndefined (val) 判断 Undefined

```
mmqUtils.isUndefined() // true
mmqUtils.isUndefined('undefined') //false
mmqUtils.isUndefined(undefined) //true
mmqUtils.isUndefined(2e64) //false
```

## isArray()

isArray (val) 判断是否数组

```
mmqUtils.isArray(null) // false
mmqUtils.isArray({}) // false
mmqUtils.isArray([1,2,3]) // true
                
```
