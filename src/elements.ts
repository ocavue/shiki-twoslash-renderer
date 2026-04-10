import { defineCustomElement, registerCustomElement } from '@aria-ui/core'
import {
  setupTooltipPositioner,
  TooltipPopupElement,
  TooltipPositionerPropsDeclaration,
  TooltipRootElement,
  TooltipTriggerElement,
} from '@aria-ui/elements/tooltip'


class TwoslashPositionerElement extends defineCustomElement(
  setupTooltipPositioner,
  {
    ...TooltipPositionerPropsDeclaration,
    placement: {
      ...TooltipPositionerPropsDeclaration.placement,
      default: 'bottom',
    },
    rootBoundary: {
      ...TooltipPositionerPropsDeclaration.rootBoundary,
      default: 'document',
    },
  },
) {}

export function register() {
  registerCustomElement('twoslash-positioner', TwoslashPositionerElement)
  registerCustomElement('twoslash-popup', TooltipPopupElement)
  registerCustomElement('twoslash-root', TooltipRootElement)
  registerCustomElement('twoslash-trigger', TooltipTriggerElement)
}
