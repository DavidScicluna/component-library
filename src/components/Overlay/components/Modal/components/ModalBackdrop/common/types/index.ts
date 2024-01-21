import type { PolymorphicElementType } from '@common/types';

import type { BackdropOverlayProps, BackdropOverlayRef } from '@components/Overlay';

export type ModalBackdropProps<Element extends PolymorphicElementType> = BackdropOverlayProps<Element>;

export type ModalBackdropRef<Element extends PolymorphicElementType> = BackdropOverlayRef<Element>;
