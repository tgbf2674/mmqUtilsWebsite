# 数字方法

## random()

random (min, max) 获取一个指定范围内随机数

```
                mmqUtils.random() // 0 ~ 9
                mmqUtils.random(3, 6) // 3 ~ 6
                mmqUtils.random(0, 5) // 0 ~ 5
                mmqUtils.random(10, 100) // 10 ~ 100
```

## min()

min (array) 获取最小值

```
                mmqUtils.random([11,33,22,2,44]) // 2
                mmqUtils.random([22, null, 77, 11]) // 11
```

## max()

max (array) 获取最大值

```
                mmqUtils.random([11,33,22,2,44]) // 44
                mmqUtils.random([22, null, 77, 11]) // 77
```

## round()

round (num, digits) 将数值四舍五入

```
                mmqUtils.round(123.455, 2) // 123.46
                mmqUtils.round(123.452, 2) // 123.45
```

## toNumberString()

toNumberString (num) 数值转字符串，科学计数转字符串

```
                mmqUtils.toNumberString(1e-14) // '0.00000000000001'
                mmqUtils.toNumberString(1e+22) // '10000000000000000000000'
```

## toNumber()

toNumber (num) 转数值

```
                mmqUtils.toNumber(123) // 123
                mmqUtils.toNumber('12.3') // 12.3
                mmqUtils.toNumber('abc') // 0
```

## toInteger()

toInteger (num) 转整数

```
                mmqUtils.toInteger(123) // 123
                mmqUtils.toInteger('12.3') // 12
                mmqUtils.toInteger('abc') // 0
```

## add()

add (num1, num2) 加法运算

```
                mmqUtils.add(10, 20) // 30
                mmqUtils.add(3.84, 4.78) // 8.62
                mmqUtils.add(0.4598, 5.024666) // 5.484466
```

## subtract()

subtract (num1, num2) 减法运算

```
                mmqUtils.subtract(20, 10) // 10
                mmqUtils.subtract(6.66, 3.9) // 2.76
                mmqUtils.subtract(5.024664, 0.453) // 4.571664
```

## multiply()

multiply (num1, num2) 乘法运算

```
                mmqUtils.multiply(20, 10) // 200
                mmqUtils.multiply(6.66, 3.7) // 24.642
                mmqUtils.multiply(5.024664, 0.453) // 2.276172792
```

## divide()

divide (num1, num2) 除法运算

```
                mmqUtils.divide(20, 10) // 2
                mmqUtils.divide(2.997, 0.9) // 3.33
                mmqUtils.divide(182.967, 25.77) // 7.1
```

## commafy()
commafy(num, degits=0)数字千位符分割，保留degits位小数

```
                mmqUtils.commafy(12345) // 12,345
                mmqUtils.commafy(1e11) // 100,000,000,000
                mmqUtils.commafy(-0.0001, 4) // -0.0001
```
