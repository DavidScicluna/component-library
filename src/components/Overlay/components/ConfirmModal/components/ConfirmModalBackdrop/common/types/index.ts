import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BackdropOverlayProps, BackdropOverlayRef } from '@components/Overlay';

export type ConfirmModalBackdropProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	BackdropOverlayProps<Element>;

export type ConfirmModalBackdropRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	BackdropOverlayRef<Element>;
