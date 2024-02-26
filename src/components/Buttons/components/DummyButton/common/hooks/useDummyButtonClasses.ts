import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';

import {
	DEFAULT_DUMMY_BUTTON_IS_COMPACT,
	DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH,
	DEFAULT_DUMMY_BUTTON_IS_ROUND,
	DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE,
	DEFAULT_DUMMY_BUTTON_SIZE,
	DEFAULT_DUMMY_BUTTON_VARIANT
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
		isCompact: isCompactProp = DEFAULT_DUMMY_BUTTON_IS_COMPACT,
		isFullWidth: isFullWidthProp = DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH,
		isRound: isRoundProp = DEFAULT_DUMMY_BUTTON_IS_ROUND,
		size: sizeProp = DEFAULT_DUMMY_BUTTON_SIZE,
		variant: variantProp = DEFAULT_DUMMY_BUTTON_VARIANT
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
		[classes.typography.line_height[DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE]]: variant !== 'unstyled',
		[classes.typography.transform.uppercase]: variant !== 'unstyled',
		[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
		[classes.typography.whiteSpace.nowrap]: variant !== 'unstyled'
	});
};

export default useDummyButtonClasses;
