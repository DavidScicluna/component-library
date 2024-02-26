import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName, PolymorphicElementType } from '@common/types';

import { DEFAULT_RATING_IS_DISABLED, DEFAULT_RATING_IS_READONLY } from '../constants';
import type { RatingProps } from '../types';

import { useRatingResponsiveValues } from '.';

type UseRatingClassesProps<Element extends PolymorphicElementType> = Pick<
	RatingProps<Element>,
	'isDisabled' | 'isReadOnly'
>;
type UseRatingClassesReturn = ClassName;

const useRatingClasses = <Element extends PolymorphicElementType>(
	props: UseRatingClassesProps<Element>
): UseRatingClassesReturn => {
	const {
		isDisabled: isDisabledProp = DEFAULT_RATING_IS_DISABLED,
		isReadOnly: isReadOnlyProp = DEFAULT_RATING_IS_READONLY
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
