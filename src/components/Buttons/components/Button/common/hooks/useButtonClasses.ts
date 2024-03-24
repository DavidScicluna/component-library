import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName } from '@common/types';

import {
	DEFAULT_BUTTON_IS_COMPACT,
	DEFAULT_BUTTON_IS_FULLWIDTH,
	DEFAULT_BUTTON_IS_ROUND,
	DEFAULT_BUTTON_LINE_HEIGHT_SIZE,
	DEFAULT_BUTTON_SIZE,
	DEFAULT_BUTTON_VARIANT
} from '../constants';
import type { ButtonUniqueProps } from '../types';

import useButtonResponsiveValues from './useButtonResponsiveValues';
import useButtonSizeConfig from './useButtonSizeConfig';

type UseButtonClassesProps = Pick<ButtonUniqueProps, 'isCompact' | 'isFullWidth' | 'isRound' | 'size' | 'variant'>;
type UseButtonClassesReturn = ClassName;

const useButtonClasses = (props: UseButtonClassesProps): UseButtonClassesReturn => {
	const {
		isCompact: isCompactProp = DEFAULT_BUTTON_IS_COMPACT,
		isFullWidth: isFullWidthProp = DEFAULT_BUTTON_IS_FULLWIDTH,
		isRound: isRoundProp = DEFAULT_BUTTON_IS_ROUND,
		size = DEFAULT_BUTTON_SIZE,
		variant = DEFAULT_BUTTON_VARIANT
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
		[classes.typography.line_height[DEFAULT_BUTTON_LINE_HEIGHT_SIZE]]: variant !== 'unstyled',
		[classes.typography.transform.uppercase]: variant !== 'unstyled',
		[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
		[classes.typography.whiteSpace.nowrap]: variant !== 'unstyled'
	});
};

export default useButtonClasses;
