import classes from '@common/classes';
import type { ClassName } from '@common/types';

import {
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_LINE_HEIGHT_SIZE__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
} from '../constants';
import type { ButtonProps } from '../types';

import useButtonResponsiveValues from './useButtonResponsiveValues';
import useButtonSizeConfig from './useButtonSizeConfig';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseButtonClassesProps = Pick<ButtonProps, 'isCompact' | 'isFullWidth' | 'isRound' | 'size' | 'variant'>;
type UseButtonClassesReturn = ClassName;

const useButtonClasses = (props: UseButtonClassesProps): UseButtonClassesReturn => {
	const {
		isCompact: isCompactProp = __DEFAULT_BUTTON_IS_COMPACT__,
		isFullWidth: isFullWidthProp = __DEFAULT_BUTTON_IS_FULLWIDTH__,
		isRound: isRoundProp = __DEFAULT_BUTTON_IS_ROUND__,
		size = __DEFAULT_BUTTON_SIZE__,
		variant = __DEFAULT_BUTTON_VARIANT__
	} = props;

	const { isCompact, isFullWidth, isRound } = useButtonResponsiveValues({
		isCompact: isCompactProp,
		isFullWidth: isFullWidthProp,
		isRound: isRoundProp
	});

	const config = useButtonSizeConfig({ isCompact, isRound, size, variant });

	return classNames(classes.sizing.width[isFullWidth ? 'full' : 'auto'], {
		[classes.typography.align.center]: variant !== 'unstyled',
		[classes.typography.font_size[config.fontSize]]: variant !== 'unstyled',
		[classes.typography.font_weight.semibold]: variant !== 'unstyled',
		[classes.typography.letter_spacing.normal]: variant !== 'unstyled',
		[classes.typography.line_height[__DEFAULT_BUTTON_LINE_HEIGHT_SIZE__]]: variant !== 'unstyled',
		[classes.typography.transform.uppercase]: variant !== 'unstyled',
		[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
		[classes.typography.whitespace.nowrap]: variant !== 'unstyled'
	});
};

export default useButtonClasses;
