import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { BackdropOverlayProps, BackdropOverlayRef } from '@components/Overlay';

export type ConfirmModalBackdropProps<Element extends ElementType = PolymorphicDefaultElement> =
	BackdropOverlayProps<Element>;

export type ConfirmModalBackdropRef<Element extends ElementType = PolymorphicDefaultElement> =
	BackdropOverlayRef<Element>;
