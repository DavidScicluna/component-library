import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName, WidthClass } from '@common/types';

import {
	__DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_DUMMY_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__,
	__DEFAULT_DUMMY_BUTTON_SIZE__,
	__DEFAULT_DUMMY_BUTTON_VARIANT__
} from '../constants';
import type { DummyButtonProps } from '../types';

import useDummyButtonResponsiveValues from './useDummyButtonResponsiveValues';
import useDummyButtonSizeConfig from './useDummyButtonSizeConfig';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseDummyButtonClassesProps = Pick<
	DummyButtonProps,
	'isAnimated' | 'isCompact' | 'isFullWidth' | 'isRound' | 'size' | 'variant'
>;
type UseDummyButtonClassesReturn = ClassName;

const useDummyButtonClasses = (props: UseDummyButtonClassesProps): UseDummyButtonClassesReturn => {
	const {
		isCompact: isCompactProp = __DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
		isFullWidth: isFullWidthProp = __DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
		isRound: isRoundProp = __DEFAULT_DUMMY_BUTTON_IS_ROUND__,
		size: sizeProp = __DEFAULT_DUMMY_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_BUTTON_VARIANT__
	} = props;

	const { isCompact, isFullWidth, isRound, size, variant } = useDummyButtonResponsiveValues({
		isCompact: isCompactProp,
		isFullWidth: isFullWidthProp,
		isRound: isRoundProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useDummyButtonSizeConfig({ isCompact, isRound, size, variant });

	const widthClassName = useGetClass<WidthClass>(isFullWidth ? 'full' : 'auto', ['sizing', 'width']);

	return classNames(widthClassName, {
		[classes.typography.align.center]: variant !== 'unstyled',
		[classes.typography.font_size[config.fontSize]]: variant !== 'unstyled',
		[classes.typography.font_weight.semibold]: variant !== 'unstyled',
		[classes.typography.letter_spacing.normal]: variant !== 'unstyled',
		[classes.typography.line_height[__DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__]]: variant !== 'unstyled',
		[classes.typography.transform.uppercase]: variant !== 'unstyled',
		[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
		[classes.typography.whitespace.nowrap]: variant !== 'unstyled'
	});
};

export default useDummyButtonClasses;
