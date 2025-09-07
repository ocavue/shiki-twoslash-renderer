import { createRenderer } from 'shiki-twoslash-renderer'
import { transformerTwoslash } from '@shikijs/twoslash'

const renderer = createRenderer({
  // Custom options
})

transformerTwoslash({
  renderer
})