import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName } from '@common/types';

import { DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE, DEFAULT_DUMMY_ICON_BUTTON_VARIANT } from '../constants';
import type { DummyIconButtonElement, DummyIconButtonProps } from '../types';

import useDummyIconButtonResponsiveValues from './useDummyIconButtonResponsiveValues';

type UseDummyIconButtonClassesProps<Element extends DummyIconButtonElement> = Pick<
	DummyIconButtonProps<Element>,
	'variant'
>;
type UseDummyIconButtonClassesReturn = ClassName;

const useDummyIconButtonClasses = <Element extends DummyIconButtonElement>(
	props: UseDummyIconButtonClassesProps<Element>
): UseDummyIconButtonClassesReturn => {
	const { variant: variantProp = DEFAULT_DUMMY_ICON_BUTTON_VARIANT } = props;

	const { variant } = useDummyIconButtonResponsiveValues<Element>({ variant: variantProp });

	return classNames({
		[classes.typography.align.center]: variant !== 'unstyled',
		[classes.typography.letter_spacing.normal]: variant !== 'unstyled',
		[classes.typography.line_height[DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE]]: variant !== 'unstyled',
		[classes.typography.transform.uppercase]: variant !== 'unstyled',
		[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
		[classes.typography.whiteSpace.nowrap]: variant !== 'unstyled'
	});
};

export default useDummyIconButtonClasses;
