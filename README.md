# shiki-twoslash-renderer

A lightweight web component renderer that enhances TypeScript code blocks with interactive hover tooltips, type information, and error diagnostics.

Powered by [Shiki](https://shiki.style/) syntax highlighting and [TwoSlash](https://twoslash.netlify.app/) type analysis.

**[Online Demo](https://shiki-twoslash-renderer.vercel.app/)**

## Installation

```bash
npm install shiki-twoslash-renderer @shikijs/twoslash shiki
```

## Usage

```ts
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
```

You need to register the custom elements and import the styles in your browser-side code:

```ts
import 'shiki-twoslash-renderer/style.css'
import { register } from 'shiki-twoslash-renderer/elements'

register()
```

## License

MIT
