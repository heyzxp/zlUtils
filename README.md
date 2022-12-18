# @zhilin/utils

##### 本项目是公司内部共用方法库，在开发时尽量全面思考可能遇到的场景。修改已上线代码时需注意兼容问题。



## 开始

node版本： v14+

```
cnpm i / npm i
```

## 目录介绍

```
-- __test__ 测试文件
	-- array.test.ts
	-- object.test.ts
-- coverage 测试覆盖率报告
-- dist 打包文件
-- src
	-- index.ts 入口文件
	-- array.ts 数组相关方法
	-- object.ts 对象相关方法
	-- fn.ts 其它

```



## 注释介绍

1、第一行函数介绍，也可写上用途场景

2、@since 版本号：主版本号 . 次版本号 . 补丁版本号

​		主版本号：重大变更，做了不兼容修改

​        次版本号：小版本更新，向下兼容

​        补丁版本号：bug 修复，向下兼容

3、 @param { 数据类型 } 参数

4、 @returns  { 数据类型 } 返回值

5、 @example 使用示例

```js
/**
 * 数组对象 转对象
 * 遇到频繁在数组中查找某条数据的场景，可用此方法将数组转化为对象，以某一个key的值作为键，方便取值并且提高代码性能。
 * @since 0.1.0
 *
 * @param {Array[Object]} arr 目标数组
 * @param {String} keyField 对象key取值
 * @param {String} valField value取值 不传默认取当前项
 * @returns {Object}
 * @example
 * arrayToObject([{id:1, name:'zs', age:16}], 'id', 'name') => { 1: 'zs' }
 * arrayToObject([{id:1, name:'zs', age:16}], 'id') => { 1: { id:1, name:'zs', age:16 } }
 */
export function arrayToObject<T>(
  arr: Array<{ [key: string]: T }>,
  keyField: string,
  valField?: string
): object {
  if (!keyField) {
    return {};
  }
  if (!arr.length) {
    return {};
  }
  return arr.reduce(
    (acc: { [key: string]: T }, cur: { [key: string]: any }) => {
      acc[cur[keyField]] = valField ? cur[valField] : cur;
      return acc;
    },
    {}
  );
}

```



## 测试

每个方法都要在对应文件内写单元测试，测试情况尽可能多的覆盖各个场景

测试使用文档：[Vitest](https://cn.vitest.dev/)

```
npm run test          // 持续监听文件变化进行测试
npm run test:once     // 仅测试一次

npm run coverage      // 生成测试覆盖率报告
```
