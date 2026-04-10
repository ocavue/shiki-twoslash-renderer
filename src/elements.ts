import { defineCustomElement, registerCustomElement } from '@aria-ui/core'
import {
  setupTooltipPopup,
  setupTooltipPositioner,
  setupTooltipRoot,
  setupTooltipTrigger,
  TooltipPopupPropsDeclaration,
  TooltipPositionerPropsDeclaration,
  TooltipRootPropsDeclaration,
  TooltipTriggerPropsDeclaration,
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

class TwoslashRootElement extends defineCustomElement(setupTooltipRoot, {
  ...TooltipRootPropsDeclaration,
}) {}

class TwoslashTriggerElement extends defineCustomElement(setupTooltipTrigger, {
  ...TooltipTriggerPropsDeclaration,
  openDelay: {
    ...TooltipTriggerPropsDeclaration.openDelay,
    default: 100,
  },
}) {}

class TwoslashPopupElement extends defineCustomElement(setupTooltipPopup, {
  ...TooltipPopupPropsDeclaration,
}) {}

export function register(): void {
  registerCustomElement('twoslash-positioner', TwoslashPositionerElement)
  registerCustomElement('twoslash-popup', TwoslashPopupElement)
  registerCustomElement('twoslash-root', TwoslashRootElement)
  registerCustomElement('twoslash-trigger', TwoslashTriggerElement)
}
