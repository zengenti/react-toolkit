import isClient from './isClient';

test('isClient true', () => {
  expect(isClient()).toBe(true);
});

test('isClient false', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete global.window;
  expect(isClient()).toBe(false);
});
