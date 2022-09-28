# 函数方法

## noop()

noop () 一个空的方法，始终返回 undefined，可用于初始化值

```
                [11, 22, 33].map(mmqUtils.noop) // [undefined, undefined, undefined]
```

## throttle()

throttle (callback, wait) 节流函数；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则至少每隔 n 秒毫秒调用一次该函数

```
                function scrollEvent (evnt) {
                  console.log('至少每隔wait秒毫秒之内只会调用一次')
                }

                // 在计时结束之前执行
                document.body.addEventListener('scroll', mmqUtils.throttle(scrollEvent, 100))
```

## debounce ()

debounce (callback, wait) 函数去抖；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则将重新计算执行时间

```
                function resizeEvent (evnt) {
                  console.log('如果wait毫秒内重复调用则会重新计时，在函数最后一次调用wait毫秒之后才会执行回调')
                }

                // 在计时结束之后执行
                document.addEventListener('resize', mmqUtils.debounce(resizeEvent, 100))
```
