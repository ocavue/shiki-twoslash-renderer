import { transformerTwoslash } from '@shikijs/twoslash'
import { formatHTML } from 'diffable-html-snapshot'
import { codeToHtml } from 'shiki'
import { describe, expect, it } from 'vitest'

import { createRenderer } from './renderer'

const source = `
let foo = 1
//   ^?
`.trim()

describe('shiki-twoslash-renderer', () => {
  it('should render', async () => {
    const html = await codeToHtml(source, {
      lang: 'ts',
      theme: 'vitesse-dark',
      transformers: [
        transformerTwoslash({
          renderer: createRenderer(),
        }),
      ],
    })

    expect(formatHTML(html)).toMatchInlineSnapshot(`
      "
      <pre
        class="shiki vitesse-dark twoslash lsp"
        style="background-color:#121212;color:#dbd7caee"
        tabindex="0"
      >
        <code>
          <span class="line">
            <span style="color:#CB7676">
              let
            </span>
            <span style="color:#BD976A">
              <twoslash-root class="twoslash-hover twoslash-query-persisted">
                <twoslash-trigger>
                  foo
                </twoslash-trigger>
                <twoslash-positioner>
                  <twoslash-popup class="twoslash-popup-container">
                    <div class="twoslash-popup-arrow">
                    </div>
                    <code class="twoslash-popup-code">
                      <span style="color:#CB7676">
                        let
                      </span>
                      <span style="color:#BD976A">
                        foo
                      </span>
                      <span style="color:#666666">
                        :
                      </span>
                      <span style="color:#5DA994">
                        number
                      </span>
                    </code>
                  </twoslash-popup>
                </twoslash-positioner>
              </twoslash-root>
            </span>
            <span style="color:#666666">
              =
            </span>
            <span style="color:#4C9A91">
              1
            </span>
          </span>
          <span class="line">
          </span>
        </code>
      </pre>
      "
    `)
  })
})
