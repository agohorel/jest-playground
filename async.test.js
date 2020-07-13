describe('testing async functions', () => {
  test('fake API response should be 200 OK', async () => {
    const res = await fakeAsyncAPICall(true, 1500);
    expect(res).toBe('200 OK');
  });
});

async function fakeAsyncAPICall(success, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        return resolve('200 OK');
      } else {
        reject({ message: 'Error!' });
      }
    }, timeout);
  });
}
