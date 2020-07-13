const users = ['user_0'];

const setup = () => {
  console.log('setting up...');
  const index = users.length;
  users.push(`user_${index}`);
  console.log(users);
};

const teardown = () => {
  console.log('tearing down...');
  users = [];
};

describe('new account creation checks', () => {
  beforeEach(() => setup());

  for (let i = 0; i < users.length; i++) {
    runTest(users[i]);
  }

  afterAll(() => teardown());
});

function runTest(username) {
  const account = username;

  test('valid username', () => {
    expect(username).toBeTruthy();
  });

  test(`new ${username} account created`, () => {
    expect(account).toEqual(username);
  });
}
