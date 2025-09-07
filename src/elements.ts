import { defineCustomElement, registerCustomElement } from '@aria-ui/core'
import {
  tooltipContentEvents,
  tooltipContentProps,
  TooltipRootElement,
  TooltipTriggerElement,
  useTooltipContent,
  type TooltipContentEvents,
  type TooltipContentProps,
} from '@aria-ui/tooltip/elements'

class TwoslashContentElement extends defineCustomElement<
  TooltipContentProps,
  TooltipContentEvents
>({
  props: {
    ...tooltipContentProps,
    placement: { default: 'bottom' },
    rootBoundary: { default: 'document' },
  },
  events: tooltipContentEvents,
  setup: useTooltipContent,
}) {}

export function register() {
  registerCustomElement('twoslash-content', TwoslashContentElement)
  registerCustomElement('twoslash-root', TooltipRootElement)
  registerCustomElement('twoslash-trigger', TooltipTriggerElement)
}
