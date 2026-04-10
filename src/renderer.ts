import type { RendererRichOptions, TwoslashRenderer } from '@shikijs/twoslash'
import { rendererRich } from '@shikijs/twoslash'
import type { Element, Text } from 'hast'

export interface RendererOptions extends Omit<RendererRichOptions, 'hast'> {}

export function createRenderer(
  options: RendererOptions = {},
): TwoslashRenderer {
  return rendererRich({
    ...options,
    hast: {
      hoverToken: { tagName: 'twoslash-root' },
      hoverPopup: { tagName: 'twoslash-popup' },
      hoverCompose: compose,

      queryToken: { tagName: 'twoslash-root' },
      queryPopup: { tagName: 'twoslash-popup' },
      queryCompose: compose,

      errorToken: { tagName: 'twoslash-root', children: (
        ...args 
      ) => {
        console.log("args",args)
        return args[0]
      } },
      errorPopup: { tagName: 'twoslash-popup' },
      errorCompose: compose,
    },
  })
}

function compose(parts: { token: Element | Text; popup: Element }): Element[] {
  return [
    {
      type: 'element',
      tagName: 'twoslash-trigger',
      properties: {},
      children: [parts.token],
    },
    {
      type: 'element',
      tagName: 'twoslash-positioner',
      properties: {},
      children: [parts.popup],
    },
  ]
}
