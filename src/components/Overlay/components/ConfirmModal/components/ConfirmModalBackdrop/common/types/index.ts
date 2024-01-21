import type { PolymorphicElementType } from '@common/types';

import type { BackdropOverlayProps, BackdropOverlayRef } from '@components/Overlay';

export type ConfirmModalBackdropProps<Element extends PolymorphicElementType> = BackdropOverlayProps<Element>;

export type ConfirmModalBackdropRef<Element extends PolymorphicElementType> = BackdropOverlayRef<Element>;
