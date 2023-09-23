import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import { useIconButtonClasses } from '@components/Buttons';
import { useBadgeContext } from '@components/DataDisplay/components/Badge/common/hooks';

import type {
	BadgeCloseIconButtonDefaultElement,
	BadgeCloseIconButtonElement,
	BadgeCloseIconButtonProps
} from '../types';

type UseBadgeCloseIconButtonClassesProps<
	Element extends BadgeCloseIconButtonElement = BadgeCloseIconButtonDefaultElement
> = Pick<BadgeCloseIconButtonProps<Element>, 'color' | 'colorMode'>;
type UseBadgeCloseIconButtonClassesReturn = ClassName;

const useBadgeCloseIconButtonClasses = <
	Element extends BadgeCloseIconButtonElement = BadgeCloseIconButtonDefaultElement
>(
	props: UseBadgeCloseIconButtonClassesProps<Element>
): UseBadgeCloseIconButtonClassesReturn => {
	const { colorMode: __DEFAULT_BADGE_COLORMODE__ } = useAppTheme();

	const {
		color: __DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLOR__ = __DEFAULT_COLOR__,
		colorMode: __DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLORMODE__ = __DEFAULT_BADGE_COLORMODE__,
		variant
	} = useBadgeContext();

	const {
		color = __DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLOR__,
		colorMode = __DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLORMODE__
	} = props;

	const iconButtonClasses = useIconButtonClasses({ variant: 'icon' });

	const containedDefaultStyles = useMemo<ClassName>(() => {
		const colorHue = getColorHue({ colorMode, type: 'background' });

		return classNames(classes.typography.text_color.gray[colorHue]);
	}, [colorMode]);

	const lightDefaultStyles = useMemo<ClassName>(() => {
		const colorHue = getColorHue({ colorMode, type: 'dark' });

		return classNames(classes.typography.text_color[color][colorHue]);
	}, [color, colorMode]);

	const darkDefaultStyles = useMemo<ClassName>(() => {
		const colorHue = getColorHue({ colorMode, type: 'light' });

		return classNames(classes.typography.text_color[color][colorHue]);
	}, [color, colorMode]);

	const outlinedDefaultStyles = useMemo<ClassName>(() => {
		const colorHue = getColorHue({ colorMode, type: 'color' });

		return classNames(classes.typography.text_color[color][colorHue]);
	}, [color, colorMode]);

	const monochromeDefaultStyles = useMemo<ClassName>(() => {
		const colorHue = getColorHue({ colorMode, type: 'text.primary' });

		return classNames(classes.typography.text_color.gray[colorHue]);
	}, [colorMode]);

	const textDefaultStyles = useMemo<ClassName>(() => {
		const colorHue = getColorHue({ colorMode, type: 'color' });

		return classNames(classes.typography.text_color[color][colorHue]);
	}, [color, colorMode]);

	return classNames(iconButtonClasses, {
		[containedDefaultStyles]: variant === 'contained',
		[lightDefaultStyles]: variant === 'light',
		[darkDefaultStyles]: variant === 'dark',
		[outlinedDefaultStyles]: variant === 'outlined',
		[monochromeDefaultStyles]: variant === 'monochrome',
		[textDefaultStyles]: variant === 'text'
	});
};

export default useBadgeCloseIconButtonClasses;
