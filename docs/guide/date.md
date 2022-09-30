# 日期方法

## now()

now () 返回当前时间戳

```
                mmqUtils.now() // Date.now() 获取当前时间戳 1514096716800
```

## timestamp()

timestamp (date[, format]) 将日期转为时间戳

```
                mmqUtils.timestamp() // mmqUtils.now() = Date.now() 获取当前时间戳 1514096716800
                mmqUtils.timestamp(new Date()) // 1514096716800
                mmqUtils.timestamp('2018-12-01') // 1543593600000
                mmqUtils.timestamp('2017/12/20 10:10:30.459', 'yyyy/MM/dd HH:mm:ss.SSS') // 1513735830459
```

## toStringDate()

toStringDate (str, format) 任意格式字符串转为日期

|  属性   | 描述  |
|  ----  | ---- |
| yyyy  | 年份 |
| MM  | 月份 |
| dd  | 日 |
| HH  | 小时 |
| mm  | 分钟 |
| ss  | 秒 |
| SSS  | 毫秒 |
| Z  | 时区 |


```
                mmqUtils.toStringDate('12/20/2017')
                // 如果解析错误则返回 new Date('Invalid Date')
                mmqUtils.toStringDate('2017-12-20')
                // new Date(2017, 11, 20)
                mmqUtils.toStringDate('2017-12-20 10:10:30')
                // new Date(2017, 11, 20, 10, 10, 30)
                mmqUtils.toStringDate('2017-12-20 10:10:30.568')
                // new Date(2017, 11, 20, 10, 10, 30, 568)
                mmqUtils.toStringDate('2017-12-20 10:10:30.2514766')
                // new Date(2017, 11, 20, 10, 10, 30, 251)
                mmqUtils.toStringDate('2017-12-20T10:10:30.738+0800')
                // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
                mmqUtils.toStringDate('2017-12-20T10:10:30.738+01:00')
                // Wed Dec 20 2017 17:10:30 GMT+0800 (中国标准时间)
                mmqUtils.toStringDate('2017-12-20T10:10:30.738Z')
                // Wed Dec 20 2017 18:10:30 GMT+0800 (中国标准时间)
                mmqUtils.toStringDate('12/20/2017', 'MM/dd/yyyy')
                // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.toStringDate('20171220101030', 'yyyyMMddHHmmss')
                // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
                mmqUtils.toStringDate('2017/12/20 10:10:30', 'yyyy/MM/dd HH:mm:ss')
                // Wed Dec 20 2017 10:10:00 GMT+0800 (中国标准时间)
                mmqUtils.toStringDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS')
                // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
```

## toDateString()

toDateString (date [, format, options]) 日期格式化为任意格式字符串

|  属性   | 描述  | 备注  | 值的范围  |
|  ----  | ---- |  ----  | ---- |
| yyyy  | 年份 | 自动截取后两位  |  |
| yyyy  | 年份 |   |  |
| M  | 月份 |   | 1~12  |
| MM  | 月份 | 自动补0  | 01~12 |
| d  | 日 |   | 1~12 |
| dd  | 日 | 自动补0  | 01~12 |
| H  | 小时 |   | 1~12 |
| HH  | 小时 | 自动补0  | 01~12 |
| m  | 分钟 |   |  0~23 |
| mm  | 分钟 | 自动补0 | 00~23 |
| s  | 秒 |   | 0~59 |
| ss  | 秒 |  自动补0 | 00~59 |
| S  | 毫秒 |   | 0~999 |
| SSS  | 毫秒 |  自动补0 | 000~999 |
| a  | am/pm，小写 |   | am/pm |
| A  | AM/PM，大写 |   | AM/PM |
| D  | 年份的第几天 |   | 1~366 |
| DDD  | 年份的第几天 |  自动补0 | 001~366 |
| e | 星期几 |   | 0~6 |
| E | 星期几 |  自动补0 | 1~7 |
| q | 季度 |   | 1~4 |
| Z  | 时区 |   | [+-]HH:mm |
| ZZ  | 时区 |   | [+-]HH:mm |

```
                mmqUtils.toStringDate('12/20/2017')
                // 如果解析错误则返回 new Date('Invalid Date')
                mmqUtils.toStringDate('2017-12-20')
                // new Date(2017, 11, 20)
                mmqUtils.toStringDate('2017-12-20 10:10:30')
                // new Date(2017, 11, 20, 10, 10, 30)
                mmqUtils.toStringDate('2017-12-20 10:10:30.568')
                // new Date(2017, 11, 20, 10, 10, 30, 568)
                mmqUtils.toStringDate('2017-12-20 10:10:30.2514766')
                // new Date(2017, 11, 20, 10, 10, 30, 251)
                mmqUtils.toStringDate('2017-12-20T10:10:30.738+0800')
                // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
                mmqUtils.toStringDate('2017-12-20T10:10:30.738+01:00')
                // Wed Dec 20 2017 17:10:30 GMT+0800 (中国标准时间)
                mmqUtils.toStringDate('2017-12-20T10:10:30.738Z')
                // Wed Dec 20 2017 18:10:30 GMT+0800 (中国标准时间)
                mmqUtils.toStringDate('12/20/2017', 'MM/dd/yyyy')
                // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.toStringDate('20171220101030', 'yyyyMMddHHmmss')
                // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
                mmqUtils.toStringDate('2017/12/20 10:10:30', 'yyyy/MM/dd HH:mm:ss')
                // Wed Dec 20 2017 10:10:00 GMT+0800 (中国标准时间)
                mmqUtils.toStringDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS')
                // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
```


## getWhatYear()

getWhatYear (date, offsetYear [, offsetMonth]) 返回前几年或后几年的日期,可以指定年的最初时间(first)、年的最后时间(last)、年的月份(0~11)，默认当前

```
                mmqUtils.getWhatYear(new Date(), -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatYear(1513735830000, -1) // Tue Dec 20 2016 10:10:30 GMT+0800 (中国标准时间)
                mmqUtils.getWhatYear('2017-12-20', -1) // Tue Dec 20 2016 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatYear('2017-12-20', 1) // Thu Dec 20 2018 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatYear('2017-12-20', 0, 'first') // Sun Jan 01 2017 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatYear('2017-12-20', 0, 'last') // Sun Dec 31 2017 23:59:59 GMT+0800 (中国标准时间)
```

## getWhatMonth()

getWhatMonth (date, offsetMonth [, offsetDay]) 返回前几月或后几月的日期,可以指定月初(first)、月末(last)、天数，默认当前

```
                mmqUtils.getWhatMonth(new Date(), -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatMonth(1513735830000, -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatMonth('2017-12-20', -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatMonth('2017-12-20', 1) // Sat Jan 20 2018 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatMonth('2017-12-20', -1, 'first') // Wed Nov 01 2017 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatMonth('2017-12-20', 1, 'last') // Wed Jan 31 2018 23:59:59 GMT+0800 (中国标准时间)
```

## getWhatDay()

getWhatDay (date, offsetDay [, offsetMode]) 返回前几天或后几天的日期,可以指定当天最初时间(first)、当天的最后时间(last)

```
                mmqUtils.getWhatDay(new Date(), -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatDay(1513735830000, -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatDay('2017-12-20', -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatDay('2017-12-20', 1) // Tue Dec 21 2017 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatDay('2017-12-20', 0, 'first') // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
                mmqUtils.getWhatDay('2017-12-20', 0, 'last') // Wed Dec 20 2017 23:59:59 GMT+0800 (中国标准时间)
```

## getDayOfYear()

getDayOfYear (date [, offsetYear]) 返回某个年份的天数,可以指定前几个年或后几个年，默认当前

```
                mmqUtils.getDayOfYear(new Date()) // 365
                mmqUtils.getDayOfYear(1513735830000) // 365
                mmqUtils.getDayOfYear('2017-12-20') // 365
                mmqUtils.getDayOfYear('2019-12-20', 1) // 366
                mmqUtils.getDayOfYear('2020-12-20') // 366
```

## getYearDay()

getYearDay (date) 返回某个年份的第几天

```
                mmqUtils.getYearDay(new Date()) // 149
                mmqUtils.getYearDay('2017-01-20') // 20
                mmqUtils.getYearDay('2018-05-20') // 140
```

