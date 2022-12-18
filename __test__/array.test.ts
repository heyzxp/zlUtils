import { describe, it, expect } from "vitest";
import { removeArrayRepeat, arrayToObject } from "../src/array";

describe("数组方法测试", () => {
  it("removeArrayRepeat 数组去重", () => {
    expect(removeArrayRepeat([])).toEqual([]);
    expect(removeArrayRepeat(["", 1, 2, 2, ""])).toEqual(["", 1, 2]);
    expect(removeArrayRepeat(["1", 1, 2, 2, ""])).toEqual(["1", 1, 2, ""]);
    expect(
      removeArrayRepeat([null, null, undefined, undefined, { a: 1 }])
    ).toEqual([null, undefined, { a: 1 }]);
  });

  it("arrayToObject 数组转对象", () => {
    expect(arrayToObject([{ id: 1, name: "zs" }], "id")).toEqual({
      1: { id: 1, name: "zs" },
    });

    expect(arrayToObject([{ id: 1, name: "zs" }], "id", "name")).toEqual({
      1: "zs",
    });

    expect(arrayToObject([{ id: 1, name: "zs" }], "")).toEqual({});
  });
});
