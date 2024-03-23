import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName } from '@common/types';

import { DEFAULT_RATING_IS_DISABLED, DEFAULT_RATING_IS_READONLY } from '../constants';
import type { RatingUniqueProps } from '../types';

import { useRatingResponsiveValues } from '.';

type UseRatingClassesProps = Pick<RatingUniqueProps, 'isDisabled' | 'isReadOnly'>;
type UseRatingClassesReturn = ClassName;

const useRatingClasses = (props: UseRatingClassesProps): UseRatingClassesReturn => {
	const {
		isDisabled: isDisabledProp = DEFAULT_RATING_IS_DISABLED,
		isReadOnly: isReadOnlyProp = DEFAULT_RATING_IS_READONLY
	} = props;

	const { isDisabled, isReadOnly } = useRatingResponsiveValues({
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
