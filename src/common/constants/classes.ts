import type {
	BorderStyleClass,
	OutlineOffsetClass,
	OutlineStyleClass,
	OutlineWidthClass,
	TextDecorationStyleClass,
	TextDecorationThicknessClass,
	TextUnderlineOffsetClass,
	ThemeBorderWidth,
	ThemeDelay,
	ThemeDuration,
	ThemeEase,
	ThemeFontSize,
	ThemeRadius,
	ThemeSpacing
} from '@common/types';

export const DEFAULT_CLASS_PREFIX = 'ds-cl';

export const DEFAULT_BORDER_WIDTH: ThemeBorderWidth = 2;
export const DEFAULT_BORDER_STYLE: BorderStyleClass = 'solid';

export const DEFAULT_DELAY: ThemeDelay = 'normal';
export const DEFAULT_DURATION: ThemeDuration = 'normal';
export const DEFAULT_EASING: ThemeEase = 'ease-in-out';

export const DEFAULT_OUTLINE_WIDTH: OutlineWidthClass = 2;
export const DEFAULT_OUTLINE_STYLE: OutlineStyleClass = 'dashed';
export const DEFAULT_OUTLINE_OFFSET: OutlineOffsetClass = 4;

export const DEFAULT_TEXT_DECORATION_WIDTH: TextDecorationThicknessClass = 2;
export const DEFAULT_TEXT_DECORATION_STYLE: TextDecorationStyleClass = 'dotted';
export const DEFAULT_TEXT_DECORATION_OFFSET: TextUnderlineOffsetClass = 2;

export const DEFAULT_FONT_SIZE: ThemeFontSize = 'md';

export const DEFAULT_SPACING: ThemeSpacing = 2;

export const DEFAULT_RADIUS: ThemeRadius = 'base';
