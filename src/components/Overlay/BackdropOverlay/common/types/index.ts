import { ElementType } from 'react';

import { CommonThemeProps } from '@common/types/theme';

import { BoxProps, BoxRef } from '@components/Layout/Box/common/types';

export type BackdropOverlayProps<Element extends ElementType> = BoxProps<Element> & CommonThemeProps;

export type BackdropOverlayRef<Element extends ElementType> = BoxRef<Element>;
