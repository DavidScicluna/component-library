import { ElementType } from 'react';

import type { CommonThemeProps } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type BackdropOverlayProps<Element extends ElementType> = BoxProps<Element> & CommonThemeProps;

export type BackdropOverlayRef<Element extends ElementType> = BoxRef<Element>;
