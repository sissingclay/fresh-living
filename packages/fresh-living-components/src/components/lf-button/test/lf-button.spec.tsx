import { newSpecPage } from '@stencil/core/testing';
import { LfButton } from '../lf-button';

describe('lf-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LfButton],
      html: `<lf-button></lf-button>`,
    });
    expect(page.root).toEqualHtml(`
      <lf-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lf-button>
    `);
  });
});
