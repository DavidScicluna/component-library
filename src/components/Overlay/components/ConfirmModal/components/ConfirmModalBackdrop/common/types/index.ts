import type { ElementType } from 'react';

import type { BackdropOverlayProps, BackdropOverlayRef } from '@components/Overlay';

export type ConfirmModalBackdropProps<Element extends ElementType> = BackdropOverlayProps<Element>;

export type ConfirmModalBackdropRef<Element extends ElementType> = BackdropOverlayRef<Element>;
