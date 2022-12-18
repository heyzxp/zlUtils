/**
 * 数组去重
 * @since 0.1.0
 *
 * @param {Array} arr 目标数组
 * @returns {Array} 去重后的数组
 * @example
 * removeArrayRepeat([1,1,2,3]) => [1,2,3]
 */
export function removeArrayRepeat(arr: Array<any>): Array<any> {
  return Array.from(new Set(arr))
}

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
  valField?: string,
): object {
  if (!keyField)
    return {}

  if (!arr.length)
    return {}

  return arr.reduce(
    (acc: { [key: string]: T }, cur: { [key: string]: any }) => {
      acc[cur[keyField]] = valField ? cur[valField] : cur
      return acc
    },
    {},
  )
}
