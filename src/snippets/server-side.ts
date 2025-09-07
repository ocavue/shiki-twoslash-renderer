import { transformerTwoslash } from '@shikijs/twoslash'
import { codeToHtml } from 'shiki'
import { createRenderer } from 'shiki-twoslash-renderer'

const html = await codeToHtml(`console.log()`, {
  lang: 'ts',
  theme: 'vitesse-dark',
  transformers: [
    transformerTwoslash({
      renderer: createRenderer(),
    }),
  ],
})