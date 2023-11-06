import classes from '@common/classes';
import { useGetResponsiveValue } from '@common/hooks';
import type { ClassName } from '@common/types';

import { __DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_ICON_BUTTON_VARIANT__ } from '../constants';
import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonVariant } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseIconButtonClassesProps<Element extends IconButtonElement = IconButtonDefaultElement> = Pick<
	IconButtonProps<Element>,
	'variant'
>;
type UseIconButtonClassesReturn = ClassName;

const useIconButtonClasses = <Element extends IconButtonElement = IconButtonDefaultElement>(
	props: UseIconButtonClassesProps<Element>
): UseIconButtonClassesReturn => {
	const { variant: v = __DEFAULT_ICON_BUTTON_VARIANT__ } = props;

	const variant = useGetResponsiveValue<IconButtonVariant>(v);

	return classNames({
		[classes.typography.align.center]: variant !== 'unstyled',
		[classes.typography.letter_spacing.normal]: variant !== 'unstyled',
		[classes.typography.line_height[__DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE__]]: variant !== 'unstyled',
		[classes.typography.transform.uppercase]: variant !== 'unstyled',
		[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
		[classes.typography.whitespace.nowrap]: variant !== 'unstyled'
	});
};

export default useIconButtonClasses;
