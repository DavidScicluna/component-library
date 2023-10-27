import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { BackdropOverlayProps, BackdropOverlayRef } from '@components/Overlay';

export type ModalBackdropProps<Element extends ElementType = PolymorphicDefaultElement> = BackdropOverlayProps<Element>;

export type ModalBackdropRef<Element extends ElementType = PolymorphicDefaultElement> = BackdropOverlayRef<Element>;
