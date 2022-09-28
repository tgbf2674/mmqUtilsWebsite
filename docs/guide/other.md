# 其他方法

## serialize()

serialize (query) 序列化查询参数

```
                mmqUtils.serialize({id: 123, name: 'test1'}) // id=123&name=test1
```

## unserialize()

unserialize (str) 反转序列化查询参数

```
                mmqUtils.unserialize('id=123&name=test1') // {id: '123', name: 'test1'}
```

