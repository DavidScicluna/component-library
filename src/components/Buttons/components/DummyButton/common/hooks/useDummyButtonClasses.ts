import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';

import {
	__DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_DUMMY_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__,
	__DEFAULT_DUMMY_BUTTON_SIZE__,
	__DEFAULT_DUMMY_BUTTON_VARIANT__
} from '../constants';
import type { DummyButtonElement, DummyButtonProps } from '../types';

import useDummyButtonResponsiveValues from './useDummyButtonResponsiveValues';
import useDummyButtonSizeConfig from './useDummyButtonSizeConfig';

type UseDummyButtonClassesProps<Element extends DummyButtonElement> = Pick<
	DummyButtonProps<Element>,
	'isAnimated' | 'isCompact' | 'isFullWidth' | 'isRound' | 'size' | 'variant'
>;
type UseDummyButtonClassesReturn = ClassName;

const useDummyButtonClasses = <Element extends DummyButtonElement>(
	props: UseDummyButtonClassesProps<Element>
): UseDummyButtonClassesReturn => {
	const {
		isCompact: isCompactProp = __DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
		isFullWidth: isFullWidthProp = __DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
		isRound: isRoundProp = __DEFAULT_DUMMY_BUTTON_IS_ROUND__,
		size: sizeProp = __DEFAULT_DUMMY_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_BUTTON_VARIANT__
	} = props;

	const { isCompact, isFullWidth, isRound, size, variant } = useDummyButtonResponsiveValues<Element>({
		isCompact: isCompactProp,
		isFullWidth: isFullWidthProp,
		isRound: isRoundProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useDummyButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const widthClassName = useGetClass((classes) => classes.sizing.width[isFullWidth ? 'full' : 'auto']);

	return classNames(widthClassName, {
		[classes.typography.align.center]: variant !== 'unstyled',
		[classes.typography.font_size[config.fontSize]]: variant !== 'unstyled',
		[classes.typography.font_weight.semibold]: variant !== 'unstyled',
		[classes.typography.letter_spacing.normal]: variant !== 'unstyled',
		[classes.typography.line_height[__DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__]]: variant !== 'unstyled',
		[classes.typography.transform.uppercase]: variant !== 'unstyled',
		[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
		[classes.typography.whiteSpace.nowrap]: variant !== 'unstyled'
	});
};

export default useDummyButtonClasses;
