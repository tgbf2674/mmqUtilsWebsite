# 数组方法

## arrayEach()

arrayEach (obj, iterate [, context]) 数组迭代器

```
                mmqUtils.arrayEach([11, 22, 33], (item, key) => {
                  // 数组迭代器，只能用于遍历(数组或伪数组)，性能高于 each
                })
```

## lastArrayEach()

lastArrayEach (obj, iterate [, context]) 数组迭代器，从最后开始迭代

```
                mmqUtils.lastArrayEach([11, 22, 33], (item, key) => {
                  // 数组迭代器，只能用于遍历(数组或伪数组)，性能高于 lastEach
                })
```

## arrayIndexOf()

arrayIndexOf (obj, val) 返回数组第一个索引值，比 indexOf 快

```
                mmqUtils.arrayIndexOf([11, 22, 33, 22], 55) // -1
                mmqUtils.arrayIndexOf([11, 22, 33, 22], 22) // 1
```

## lastIndexOf()

lastIndexOf (obj, val) 从最后开始的索引值,返回对象第一个索引值

```
                mmqUtils.lastIndexOf([11, 22, 33, 22], 55) // -1
                mmqUtils.lastIndexOf([11, 22, 33, 22], 22) // 3
```

## includeArrays()

includeArrays (array1, array2) 判断数组是否包含另一数组

```
                mmqUtils.includeArrays([11, 22, 33], []) // true
                mmqUtils.includeArrays([11, 22, 33], [11]) // true
                mmqUtils.includeArrays([11, 22, 33], [22, 33]) // true
                mmqUtils.includeArrays([11, 22, 33], [22, 44]) // false
```


## remove()

remove (obj, iterate) 移除对象属性

```
                let list1 = [11, 22, 33, 44]
                mmqUtils.remove(list1, 2) // list1 = [11, 22, 44]
                let list2 = [11, 22, 33, 44]
                mmqUtils.remove(list2, item => item === 22) // list2 = [11, 33, 44]
```

## shuffle()

shuffle (array) 将一个数组随机打乱，返回一个新的数组

```
                mmqUtils.shuffle([11, 22, 33, 44, 55]) // [22, 33, 55, 11, 44]
```

## sample()

sample (array, number) 从一个数组中随机返回几个元素

```
                mmqUtils.sample([11, 22, 33, 44, 55], 3) // [22, 33, 55]
```

## iterate()

sum (obj, iterate) 求和函数，将数值相加

```
                mmqUtils.sum([22, 66, 88]) // 176
                mmqUtils.sum([{value: 11}, {value: 22}, {value: 66}], 'value') // 99
                mmqUtils.sum({val1: 21, val2: 34, val3: 47}) // 102
```


## toArray()

toArray (array) 将对象或者伪数组转为新数组

```
                mmqUtils.toArray({name: 'test1', age: 25}) // ['test1', 25]
                mmqUtils.toArray(arguments) // [...]
                mmqUtils.toArray(document.querySelectorAll('div')) // [...]
```

## uniq()

uniq (array) 数组去重

```
                mmqUtils.uniq([11, 22, 33, 33, 22, 55]) // [11, 22, 33, 55]
```

## flat()

flat (array) 数组去重

```
                mmqUtils.flat([[1, 2, 3], [4, 5, 6], [7, 8]])  // [1, 2, 3, 4, 5, 6, 7, 8]
```

## toArrayTree()

toArrayTree (array, options) 一个高性能的树结构转换函数，将一个带层级的数据列表转成树结构

|  属性   | 描述  |  默认值   |
|  ----  | ---- |  ---- |
| strict  | 是否严格模式，会去掉父子关联不存在数据，当子节点为空时将没有 children 属性 |  false   |
| key  | 节点键值 |  id   |
| parentKey  | 父节点键值 |  parentId   |
| children  | 节点属性 |  children   |
| mapChildren  | 子节点映射属性 |     |
| data  | 数据存放属性 |  null   |

```
    const list1 = [
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 3, name: '333' },
      { id: 4, parentId: 2, name: '444' }
    ]
    expect(
      mmqUtils.toArrayTree(list1)
    ).toEqual([
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ])
    const list4 = [
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 3, name: '333' },
      { id: 4, parentId: 2, name: '444' },
      { id: 5, parentId: 22, name: '555' }
    ]
    expect(
      mmqUtils.toArrayTree(list4, { strict: true, parentKey: 'parentId', key: 'id', children: 'children', data: 'data' })
    ).toEqual([
      {
        data: { id: 1, name: '111' },
        id: 1,
        children: [
          {
            data: { id: 2, parentId: 1, name: '222' },
            id: 2,
            parentId: 1,
            children: [
              {
                data: { id: 4, parentId: 2, name: '444' },
                id: 4,
                parentId: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        data: { id: 3, name: '333' },
        id: 3,
        children: []
      }
    ])
```

## toTreeArray()

toTreeArray (array, options) 将一个树结构转成数组列表

|  属性   | 描述  |  默认值   |
|  ----  | ---- |  ---- |
| children  | 节点属性 |  children   |
| data  | 数据存放属性 |  null   |
| clear  | 同时移除子节点属性 |  false   |

```
      const list1 = [
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ]
    expect(
      mmqUtils.toTreeArray(list1)
    ).toEqual([
      list1[0],
      list1[0].children[0],
      list1[0].children[0].children[0],
      list1[1]
    ])
    const list2 = [
      {
        data: { id: 1, name: '111' },
        id: 1,
        children: [
          {
            data: { id: 2, parentId: 1, name: '222' },
            id: 2,
            parentId: 1,
            children: [
              {
                data: { id: 4, parentId: 2, name: '444' },
                id: 4,
                parentId: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        data: { id: 3, name: '333' },
        id: 3,
        children: []
      },
      {
        data: { id: 5, parentId: 22, name: '555' },
        id: 5,
        parentId: 22,
        children: []
      }
    ]
    expect(
      mmqUtils.toTreeArray(list2, { data: 'data' })
    ).toEqual([
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 4, parentId: 2, name: '444' },
      { id: 3, name: '333' },
      { id: 5, parentId: 22, name: '555' }
    ])
    const list3 = [
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ]
    expect(
      mmqUtils.toTreeArray(list3, { clear: true })
    ).toEqual([
      {
        id: 1,
        name: '111'
      },
      {
        id: 2,
        parentId: 1,
        name: '222'
      },
      {
        id: 4,
        parentId: 2,
        name: '444'
      },
      {
        id: 3,
        name: '333'
      }
    ])
```

## eachTree()

eachTree (obj, iterate, [options]) 从树结构中遍历数据

|  属性   | 描述  |  默认值   |
|  ----  | ---- |  ---- |
| children  | 节点属性 |  children   |

```
    let rest: any[] = []
    mmqUtils.eachTree(null, (item: any) => {
      rest.push(item)
    })
    expect(rest).toEqual([])
    rest = []
    mmqUtils.eachTree([{ a: 11 }, { a: 22 }], (item: any) => {
      rest.push(item)
    })
    expect(rest).toEqual([{ a: 11 }, { a: 22 }])
    rest = []
    mmqUtils.eachTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], (item: any) => {
      rest.push(item)
    })
    expect(rest).toEqual([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
    rest = []
    mmqUtils.eachTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], (item: any) => {
      rest.push(item)
    }, { children: 'childs' })
    expect(rest).toEqual([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
```

## filterTree()

filterTree (obj, iterate, [options]) 从树结构中根据回调过滤数据

|  属性   | 描述  |  默认值   |
|  ----  | ---- |  ---- |
| children  | 节点属性 |  children   |

```
    expect(
      mmqUtils.filterTree(null, (item: any) => {
        return item.a === 33
      })
    ).toEqual([])
    expect(
      mmqUtils.filterTree([{ a: 11 }, { a: 22 }], (item: any) => {
        return item.a === 33
      })
    ).toEqual([])
    expect(
      mmqUtils.filterTree([{ a: 11 }, { a: 22 }], (item: any) => {
        return item.a === 11
      })
    ).toEqual([{ a: 11 }])
    expect(
      mmqUtils.filterTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], (item: any) => {
        return item.a >= 22
      })
    ).toEqual([{ a: 22, children: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
    expect(
      mmqUtils.filterTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], (item: any) => {
        return item.a >= 22
      }, { children: 'childs' })
    ).toEqual([{ a: 22, childs: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
```

## searchTree()

searchTree (obj, iterate, [options]) 从树结构中根据回调查找数据

|  属性   | 描述  |  默认值   |
|  ----  | ---- |  ---- |
| children  | 节点属性 |  children   |
| mapChildren  | 将子节点映射到指定的属性 |     |

```
    expect(
      mmqUtils.searchTree(null, (item: any) => item.a === 33)
    ).toEqual([])
    expect(
      mmqUtils.searchTree([{ a: 11 }, { a: 22 }], (item: any) => item.a === 33)
    ).toEqual([])
    expect(
      mmqUtils.searchTree([{ a: 11 }, { a: 22 }], (item: any) => item.a === 11)
    ).toEqual([{ a: 11, children: [] }])
    expect(
      mmqUtils.searchTree([{ id: 1 }, { id: 2, children: [{ id: 0 }] }, { id: 3, children: [{ id: 30 }] }], (item: any) => item.id > 1)
    ).toEqual([{ id: 2, children: [{ id: 0, children: [] }] }, { id: 3, children: [{ id: 30, children: [] }] }])
    expect(
      mmqUtils.searchTree([{ id: 1 }, { id: 2, childs: [{ id: 0 }] }, { id: 3, childs: [{ id: 30 }] }], (item: any) => item.id >= 2, { children: 'childs' })
    ).toEqual([{ id: 2, childs: [{ id: 0, childs: [] }] }, { id: 3, childs: [{ id: 30, childs: [] }] }])
```


## mapTree()

mapTree (obj, iterate[, options]) 从树结构中指定方法后的返回值组成的新数组

|  属性   | 描述  |  默认值   |
|  ----  | ---- |  ---- |
| children  | 节点属性 |  children   |
| mapChildren  | 将子节点映射到指定的属性 |     |

```
    expect(
      mmqUtils.mapTree(null, (item: any) => {
        return item.a * 2
      })
    ).toEqual([])
    expect(
      mmqUtils.mapTree([{ a: 11 }, { a: 22 }], (item: any) => {
        return item.a * 2
      })
    ).toEqual([22, 44])
    expect(
      mmqUtils.mapTree([{ a: 11 }, { a: 22 }], (item: any) => {
        return { a: item.a * 2 }
      })
    ).toEqual([{ a: 22 }, { a: 44 }])
    expect(
      mmqUtils.mapTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], (item: any) => {
        return { a: item.a * 2 }
      })
    ).toEqual([{ a: 22 }, { a: 44, children: [{ a: 444 }, { a: 446 }] }])
    expect(
      mmqUtils.mapTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], (item: any) => {
        return { a: item.a * 2 }
      }, { children: 'childs' })
    ).toEqual([{ a: 22 }, { a: 44, childs: [{ a: 444 }, { a: 446 }] }])
    expect(
      mmqUtils.mapTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], (item: any) => {
        return { a: item.a * 2 }
      }, { children: 'childs', mapChildren: 'childs2' })
    ).toEqual([{ a: 22 }, { a: 44, childs2: [{ a: 444 }, { a: 446 }] }])
```

