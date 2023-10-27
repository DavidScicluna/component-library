import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetResponsiveValue } from '@common/hooks';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';

import { __DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__ } from '../constants';
import type { DummyIconButtonProps, DummyIconButtonVariant } from '../types';

type UseDummyIconButtonClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	DummyIconButtonProps<Element>,
	'variant'
>;
type UseDummyIconButtonClassesReturn = ClassName;

const useDummyIconButtonClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseDummyIconButtonClassesProps<Element>
): UseDummyIconButtonClassesReturn => {
	const { variant: v = __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__ } = props;

	const variant = useGetResponsiveValue<DummyIconButtonVariant>(v);

	return classNames({
		[classes.typography.align.center]: variant !== 'unstyled',
		[classes.typography.letter_spacing.normal]: variant !== 'unstyled',
		[classes.typography.line_height[__DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__]]: variant !== 'unstyled',
		[classes.typography.transform.uppercase]: variant !== 'unstyled',
		[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
		[classes.typography.whitespace.nowrap]: variant !== 'unstyled'
	});
};

export default useDummyIconButtonClasses;
