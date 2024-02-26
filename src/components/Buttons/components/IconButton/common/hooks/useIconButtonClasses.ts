import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName } from '@common/types';

import { DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE, DEFAULT_ICON_BUTTON_VARIANT } from '../constants';
import type { IconButtonElement, IconButtonProps } from '../types';

import useIconButtonResponsiveValues from './useIconButtonResponsiveValues';

type UseIconButtonClassesProps<Element extends IconButtonElement> = Pick<IconButtonProps<Element>, 'variant'>;
type UseIconButtonClassesReturn = ClassName;

const useIconButtonClasses = <Element extends IconButtonElement>(
	props: UseIconButtonClassesProps<Element>
): UseIconButtonClassesReturn => {
	const { variant: variantProp = DEFAULT_ICON_BUTTON_VARIANT } = props;

	const { variant } = useIconButtonResponsiveValues<Element>({ variant: variantProp });

	return classNames({
		[classes.typography.align.center]: variant !== 'unstyled',
		[classes.typography.letter_spacing.normal]: variant !== 'unstyled',
		[classes.typography.line_height[DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE]]: variant !== 'unstyled',
		[classes.typography.transform.uppercase]: variant !== 'unstyled',
		[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
		[classes.typography.whiteSpace.nowrap]: variant !== 'unstyled'
	});
};

export default useIconButtonClasses;
