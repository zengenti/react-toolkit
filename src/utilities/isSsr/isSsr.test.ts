import isSsr from "./index";

test('isSsr true', () => {
  expect(isSsr()).toBe(true);
});

test('isSsr false', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete global.window;
  expect(isSsr()).toBe(false);
});
