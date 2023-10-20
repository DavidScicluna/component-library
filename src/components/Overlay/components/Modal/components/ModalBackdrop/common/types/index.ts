import type { ElementType } from 'react';

import type { BackdropOverlayProps, BackdropOverlayRef } from '@components/Overlay';

export type ModalBackdropProps<Element extends ElementType> = BackdropOverlayProps<Element>;

export type ModalBackdropRef<Element extends ElementType> = BackdropOverlayRef<Element>;
