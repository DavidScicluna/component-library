import type { ElementType } from 'react';

import classes from '@common/classes';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';

import { __DEFAULT_RATING_IS_DISABLED__, __DEFAULT_RATING_IS_READONLY__ } from '../constants';
import type { RatingProps } from '../types';

import { useRatingResponsiveValues } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseRatingClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	RatingProps<Element>,
	'isDisabled' | 'isReadOnly'
>;
type UseRatingClassesReturn = ClassName;

const useRatingClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseRatingClassesProps<Element>
): UseRatingClassesReturn => {
	const {
		isDisabled: isDisabledProp = __DEFAULT_RATING_IS_DISABLED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_RATING_IS_READONLY__
	} = props;

	const { isDisabled, isReadOnly } = useRatingResponsiveValues<Element>({
		isDisabled: isDisabledProp,
		isReadOnly: isReadOnlyProp
	});

	return classNames(
		classes.interactivity.user_select.none,
		classes.interactivity.will_change.auto,
		classes.interactivity.cursor[isDisabled || isReadOnly ? 'default' : 'pointer'],
		classes.interactivity.pointer_events[isDisabled || isReadOnly ? 'none' : 'auto'],
		classes.effects.opacity[isDisabled || isReadOnly ? 50 : 100]
	);
};

export default useRatingClasses;
