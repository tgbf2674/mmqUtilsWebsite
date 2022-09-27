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


## isFloat ()

isFloat (val) 判断是否小数

```
                mmqUtils.isFloat(null) // false
                mmqUtils.isFloat(0) // false
                mmqUtils.isFloat(3) // false
                mmqUtils.isFloat(3.3) // true
                
```

## isInteger ()

isInteger (val) 判断是否整数

```
                mmqUtils.isInteger(null) // false
                mmqUtils.isInteger(3.3) // false
                mmqUtils.isInteger(3) // true
                mmqUtils.isInteger(0) // true
                
```

## isFunction ()

isFunction (val) 判断是否方法

```
                mmqUtils.isFunction({}) // false
                mmqUtils.isFunction(function(){}) // true
                
```

## isBoolean ()

isBoolean (val) 判断是否 Boolean 对象

```
                mmqUtils.isBoolean('false') // false
                mmqUtils.isBoolean(true) // true
                
```

## isString ()

isString (val) 判断是否 String 对象

```
                mmqUtils.isString(1) // false
                mmqUtils.isString(true) // false
                mmqUtils.isString('') // true
                mmqUtils.isString('abc') // true
                
```

## isNumber ()

isNumber (val) 判断是否 Number 对象

```
                mmqUtils.isNumber(null) // false
                mmqUtils.isNumber('1') // false
                mmqUtils.isNumber(1) // true
                
```

## isRegExp ()

isRegExp (val) 判断是否 RegExp 对象

```
                mmqUtils.isRegExp(null) // false
                mmqUtils.isRegExp('a') // false
                mmqUtils.isRegExp(new RegExp('a')) // true
                mmqUtils.isRegExp(/\d/) // true
                
```

## isObject ()

isObject (val) 判断是否 Object 对象

```
                mmqUtils.isObject(null) // true
                mmqUtils.isObject([]) // true
                mmqUtils.isObject({}) // true
                mmqUtils.isObject(123) // false
                
```

## isRealObject ()

isRealObject (val) 判断是否是一个对象

```
                mmqUtils.isRealObject(null) // false
                mmqUtils.isRealObject([]) // false
                mmqUtils.isRealObject(123) // false
                mmqUtils.isRealObject({}) // true
                
```

## isDate ()

isDate (val) 判断是否 Date 对象，如果是无效日期 Invalid Date 也返回 true

```
                mmqUtils.isDate('2017-12-20') // false
                mmqUtils.isDate(1514096716800) // false
                mmqUtils.isDate(new Date('abc')) // Invalid Date => true
                mmqUtils.isDate(new Date()) // true
                
```

## isValidDate  ()

isValidDate (val) 和 isDate 的区别是同时判断类型与有效日期，如果为无效日期 Invalid Date 则返回 false

```
                mmqUtils.isValidDate('2017-12-20') // false
                mmqUtils.isValidDate(1514096716800) // false
                mmqUtils.isValidDate(new Date('abc')) // Invalid Date => false
                mmqUtils.isValidDate(new Date()) // true
                
```

## isError  ()

isError (val) 判断是否 Error 对象

```
                mmqUtils.isError(null) // false
                mmqUtils.isError({}) // false
                mmqUtils.isError(new TypeError('error')) // true
                mmqUtils.isError(new Error('error')) // true
                
```

## isTypeError  ()

isTypeError (val) 判断是否 TypeError 对象

```
                mmqUtils.isTypeError(null) // false
                mmqUtils.isTypeError({}) // false
                mmqUtils.isTypeError(new Error('error')) // false
                mmqUtils.isTypeError(new TypeError('error')) // true
                
```

## isEmpty  ()

isEmpty (val) 判断是否为空对象

```
                mmqUtils.isEmpty([11, 22]) // false
                mmqUtils.isEmpty({a:null}) // false
                mmqUtils.isEmpty(null) // true
                mmqUtils.isEmpty({}) // true
                mmqUtils.isEmpty([]) // true
                
```

## isNull  ()

isNull (val) 判断是否为 Null

```
                mmqUtils.isNull(0) // false
                mmqUtils.isNull('') // false
                mmqUtils.isNull(null) // true
                
```

## isSymbol  ()

isSymbol (val) 判断是否 Symbol 对象

```
                mmqUtils.isSymbol('a') // false
                mmqUtils.isSymbol(Symbol('a')) // true
                
```


## isElement  ()

isElement (val) 判断是否 Element 对象

```
                mmqUtils.isElement({}) // false
                mmqUtils.isElement(document.createElement('div')) // true
                
```

## isDocument  ()

isDocument (val) 判断是否 Document 对象

```
                mmqUtils.isDocument({}) // false
                mmqUtils.isDocument(document.createElement('div')) // false
                mmqUtils.isDocument(document) // true
                
```

## isWindow  ()

isWindow (val) 判断是否 Window 对象

```
                mmqUtils.isWindow({}) // false
                mmqUtils.isWindow(document) // false
                mmqUtils.isWindow(window) // true
                
```

## isFormData  ()

isFormData (val) 判断是否 FormData 对象

```
                mmqUtils.isFormData({}) // false
                mmqUtils.isFormData(new FormData()) // true
                
```

## isMap  ()

isMap (val) 判断是否 Map 对象

```
                mmqUtils.isMap({}) // false
                mmqUtils.isMap(new Map()) // true
                
```

## isWeakMap  ()

isWeakMap (val) 判断是否 WeakMap 对象

```
                mmqUtils.isWeakMap({}) // false
                mmqUtils.isWeakMap(new WeakMap()) // true
                
```

## isSet  ()

isSet (val) 判断是否 Set 对象

```
                mmqUtils.isSet({}) // false
                mmqUtils.isSet(new Set()) // true
                
```

## isWeakSet  ()

isWeakSet (val) 判断是否 WeakSet 对象

```
                mmqUtils.isWeakSet({}) // false
                mmqUtils.isWeakSet(new WeakSet()) // true
                
```

## isLeapYear   ()

isLeapYear (date) 判断是否闰年

```
                mmqUtils.isLeapYear(1606752000000)  // true
                mmqUtils.isLeapYear('2018-12-01') // false
                mmqUtils.isLeapYear('2020-12-01') // true
                mmqUtils.isLeapYear(new Date('2020/12/01')) // true
                
```

## getType   ()

getType (obj) 获取对象类型

```
                mmqUtils.getType() // 'undefined'
                mmqUtils.getType(null) // 'null'
                mmqUtils.getType('') // 'string'
                mmqUtils.getType(/\d/) // 'regexp'
                mmqUtils.getType(1) // 'number'
                mmqUtils.getType([]) // 'array'
                mmqUtils.getType({}) // 'object'
                mmqUtils.getType(new Error()) // 'error'
                mmqUtils.getType(function(){}) // 'function'
                
```

## getSize   ()

getSize (obj) 返回对象的长度

```
                mmqUtils.getSize('123') // 3
                mmqUtils.getSize([1, 3]) // 2
                mmqUtils.getSize({a: 2, b: 5}) // 2
                
```

## stringToJSON   ()

stringToJSON (str) 字符串转 JSON

```
                mmqUtils.stringToJSON('{"a":1}') // {a: 1}
                mmqUtils.stringToJSON('[11,22]') // [11, 22]
                
```

## JSONtoString   ()

JSONtoString (obj) JSON 转字符串

```
                mmqUtils.JSONtoString({a: 1}) // '{"a":1}'
                mmqUtils.JSONtoString([11, 22]) // '[11,22]'
                
```

## keys   ()

keys (obj) 获取对象所有属性

```
                mmqUtils.keys({a: 11}) // ['a']
                
```

## values   ()

values (obj) 获取对象所有值

```
                mmqUtils.values({a: 11}) // [11]
                
```

## entries   ()

entries (obj) 获取对象所有属性、值

```
                mmqUtils.entries({a: 11}) // [['a', 11]]
                mmqUtils.entries([11, 22]) // [['0', 11], ['1', 22]]
                
```

## first   ()

first (obj) 获取对象第一个值

```
                mmqUtils.first({a: 11, b : 22}) // 11
                mmqUtils.first([11, 22]) // 11
                
```

## last   ()

last (obj) 获取对象最后一个值

```
                mmqUtils.last({a: 11, b: 22}) // 22
                mmqUtils.last([11, 22]) // 22
                
```
