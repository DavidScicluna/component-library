import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BackdropOverlayProps, BackdropOverlayRef } from '@components/Overlay';

export type ModalBackdropProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	BackdropOverlayProps<Element>;

export type ModalBackdropRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	BackdropOverlayRef<Element>;
