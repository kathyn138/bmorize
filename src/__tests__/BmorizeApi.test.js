import BmorizeApi from "../BmorizeApi";

it("can format raw card data", async function () {
  let testData = [
    { code: "foo", image: "image.png", extraKey: "bar" },
    { code: "foo2", image: "image.png", extraKey: "bar2" },
    { code: "foo3", image: "image.png", extraKey: "bar3" },
    { code: "foo4", image: "image.png", extraKey: "bar4" },
    { code: "foo5", image: "image.png", extraKey: "bar5" },
    { code: "foo6", image: "image.png", extraKey: "bar6" },
  ];
  let reformattedData = await BmorizeApi.formatCardData(testData, 6);
  expect(Object.keys(reformattedData).length).toEqual(2);
  expect(reformattedData[0]).toHaveLength(6);
  expect(reformattedData[0][0].extraKey).toBe(undefined);
});
