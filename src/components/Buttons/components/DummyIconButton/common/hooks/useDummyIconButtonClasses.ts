import classes from '@common/classes';
import type { ClassName } from '@common/types';

import { __DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__ } from '../constants';
import type { DummyIconButtonElement, DummyIconButtonProps } from '../types';

import useDummyIconButtonResponsiveValues from './useDummyIconButtonResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseDummyIconButtonClassesProps<Element extends DummyIconButtonElement> = Pick<
	DummyIconButtonProps<Element>,
	'variant'
>;
type UseDummyIconButtonClassesReturn = ClassName;

const useDummyIconButtonClasses = <Element extends DummyIconButtonElement>(
	props: UseDummyIconButtonClassesProps<Element>
): UseDummyIconButtonClassesReturn => {
	const { variant: variantProp = __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__ } = props;

	const { variant } = useDummyIconButtonResponsiveValues<Element>({ variant: variantProp });

	return classNames({
		[classes.typography.align.center]: variant !== 'unstyled',
		[classes.typography.letter_spacing.normal]: variant !== 'unstyled',
		[classes.typography.line_height[__DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__]]: variant !== 'unstyled',
		[classes.typography.transform.uppercase]: variant !== 'unstyled',
		[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
		[classes.typography.whiteSpace.nowrap]: variant !== 'unstyled'
	});
};

export default useDummyIconButtonClasses;
