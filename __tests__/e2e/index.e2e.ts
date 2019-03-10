import { Selector } from 'testcafe';

const baseUrl = 'http://localhost:3000/';

fixture('<About />').page(baseUrl);

test('My first test', async t => {
  await t.expect(Selector('.hello-world').innerText).eql('Hello World!');
});
