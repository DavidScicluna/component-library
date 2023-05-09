import { SyntheticEvent } from 'react';

import { ColorMode, ImageProps as CUIImageProps } from '@chakra-ui/react';

import { Nullable, Undefinable } from '../../../../../common/types';
import {
	BoxBackground,
	BoxColor,
	BoxFilter,
	BoxGradient,
	BoxGrid,
	BoxOther,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';

export type ImageEvent = SyntheticEvent<HTMLImageElement, Event>;

export type ImageSrcMode = 'boring' | 'thumbnail' | 'full';
export type ImageSrc = Partial<Record<ImageSrcMode, Undefinable<string>>>;

type Omitted =
	// CUI Box Props
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxGrid
	| BoxBackground
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Image Props
	| 'as'
	| 'alt'
	| 'align'
	| 'crossOrigin'
	| 'fallback'
	| 'fallbackSrc'
	| 'fallbackStrategy'
	| 'htmlHeight'
	| 'htmlWidth'
	| 'ignoreFallback'
	| 'loading'
	| 'onError'
	| 'onLoad'
	| 'sizes'
	| 'src'
	| 'srcSet';

export type ImageProps = Omit<CUIImageProps, Omitted> & {
	alt: string;
	colorMode?: ColorMode;
	onError?: (event: ImageEvent, mode: ImageSrcMode) => void;
	onLoad?: (event: ImageEvent, mode: ImageSrcMode) => void;
	src: ImageSrc;
};

export type ImageRef = Nullable<HTMLDivElement>;
