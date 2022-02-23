import { html } from 'lit';
import { fixture, expect } from '../index.js';
import '../demo/my-element.js';

describe('my-element', () => {
  it('renders correctly', async () => {
    const element = await fixture(html` <my-element message="hello world!"></my-element> `);
    // @ts-ignore
    await element.updateComplete;

    expect(element).shadowDom.to.equal(`
      <h1>My Element</h1>
      <p>hello world!</p>
    `);
  });
});
