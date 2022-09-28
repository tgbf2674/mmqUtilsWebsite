# 字符串方法

## toValueString()

toValueString (obj) 转字符串

```
                mmqUtils.toValueString(0) // '0'
                mmqUtils.toValueString(1e-5) // '0.00001'
                mmqUtils.toValueString(null) // ''
                mmqUtils.toValueString(undefined) // ''
```

## trim()

trim (str) 去除字符串左右两边的空格

```
                mmqUtils.trim(' abc ') // 'abc'

```

## trimLeft()

trimLeft (str) 去除字符串左边的空格

```
                mmqUtils.trimLeft(' abc ') // 'abc '

```

## trimRight()

trimRight (str) 去除字符串右边的空格

```
                mmqUtils.trimRight(' abc ') // ' abc'

```

## repeat()

repeat (str, count) 将字符串重复 n 次

```
                mmqUtils.repeat('a', 5) // 'aaaaa'
                mmqUtils.repeat('ab', 3) // 'ababab'
```

## padStart()

padStart (str, targetLength, padString) 用指定字符从前面开始补全字符串


```
                mmqUtils.padStart('a', 5, 'b') // 'bbbba'
```

## padEnd()

padEnd (str, targetLength [, padString]) 用指定字符从后面开始补全字符串


```
                mmqUtils.padEnd('a', 5, 'b') // 'abbbb'
```

## startsWith()

startsWith (str, val [, startIndex]) 判断字符串是否在源字符串的头部

```
                mmqUtils.startsWith('abc', 'b') // false
```

## endsWith()

endsWith (str, val [, startIndex]) 判断字符串是否在源字符串的尾部

```
                mmqUtils.endsWith('abc', 5, 'a') // false
```
