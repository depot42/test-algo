import { diffArray } from ".";

it("Return an array", function () {
  expect(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toBe("object");
});

it('[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4]', function () {
  expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);
});

it('["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"]', function () {
  expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual(["pink wool"]);
});

it('["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool", "diorite"]', function () {
  expect(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual([ 'pink wool', 'diorite' ]);
});

it('[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"]', function () {
  expect(diffArray([1, "calf", 3, "piglet"], [7, "filly"])).toEqual([1, "calf", 3, "piglet", 7, "filly"]);
});