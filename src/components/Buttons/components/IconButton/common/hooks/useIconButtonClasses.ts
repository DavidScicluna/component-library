import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName } from '@common/types';

import { __DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_ICON_BUTTON_VARIANT__ } from '../constants';
import type { IconButtonElement, IconButtonProps } from '../types';

import useIconButtonResponsiveValues from './useIconButtonResponsiveValues';

type UseIconButtonClassesProps<Element extends IconButtonElement> = Pick<IconButtonProps<Element>, 'variant'>;
type UseIconButtonClassesReturn = ClassName;

const useIconButtonClasses = <Element extends IconButtonElement>(
	props: UseIconButtonClassesProps<Element>
): UseIconButtonClassesReturn => {
	const { variant: variantProp = __DEFAULT_ICON_BUTTON_VARIANT__ } = props;

	const { variant } = useIconButtonResponsiveValues<Element>({ variant: variantProp });

	return classNames({
		[classes.typography.align.center]: variant !== 'unstyled',
		[classes.typography.letter_spacing.normal]: variant !== 'unstyled',
		[classes.typography.line_height[__DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE__]]: variant !== 'unstyled',
		[classes.typography.transform.uppercase]: variant !== 'unstyled',
		[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
		[classes.typography.whiteSpace.nowrap]: variant !== 'unstyled'
	});
};

export default useIconButtonClasses;
