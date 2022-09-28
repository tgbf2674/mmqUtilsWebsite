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

