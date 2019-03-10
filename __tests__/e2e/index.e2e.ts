import { Selector } from 'testcafe'; // first import testcafe selectors

const baseUrl = 'http://localhost:3000/';

fixture('<About />').page(baseUrl);

//then create a test and place your code there
test('My first test', async t => {
  await t.expect(Selector('.hello-world').innerText).eql('Hello World!');
});
