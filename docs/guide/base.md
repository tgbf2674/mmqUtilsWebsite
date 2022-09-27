# 基本方法

## isNaN()

isNaN (val) 判断是否非数值，如果 value 是一个 NaN，那么返回 true，否则返回 false

```
expect(mmqUtils.isNaN('NAN')).toEqual(false)
expect(mmqUtils.isNaN(/\d/)).toEqual(false)
expect(mmqUtils.isNaN(NaN)).toEqual(true)
```
