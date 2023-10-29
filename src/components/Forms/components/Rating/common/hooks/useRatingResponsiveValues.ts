import type { ElementType } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import {
	__DEFAULT_RATING_COUNT__,
	__DEFAULT_RATING_DIRECTION__,
	__DEFAULT_RATING_HIGHLIGHT_MODE__,
	__DEFAULT_RATING_IS_DISABLED__,
	__DEFAULT_RATING_IS_ERROR__,
	__DEFAULT_RATING_IS_READONLY__,
	__DEFAULT_RATING_IS_REQUIRED__,
	__DEFAULT_RATING_IS_SUCCESS__,
	__DEFAULT_RATING_IS_WARNING__,
	__DEFAULT_RATING_SIZE__
} from '../constants';
import type { RatingDirection, RatingHighlightMode, RatingProps, RatingSize } from '../types';

type UseRatingResponsiveValuesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	RatingProps<Element>,
	| 'count'
	| 'direction'
	| 'highlightMode'
	| 'isDisabled'
	| 'isError'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
>;

const useRatingResponsiveValues = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseRatingResponsiveValuesProps<Element>
) => {
	const {
		count: countProp = __DEFAULT_RATING_COUNT__,
		direction: directionProp = __DEFAULT_RATING_DIRECTION__,
		highlightMode: highlightModeProp = __DEFAULT_RATING_HIGHLIGHT_MODE__,
		isDisabled: isDisabledProp = __DEFAULT_RATING_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_RATING_IS_ERROR__,
		isReadOnly: isReadOnlyProp = __DEFAULT_RATING_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_RATING_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_RATING_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_RATING_IS_WARNING__,
		size: sizeProp = __DEFAULT_RATING_SIZE__
	} = props;

	const count = useGetResponsiveValue<number>(countProp);
	const direction = useGetResponsiveValue<RatingDirection>(directionProp);

	const highlightMode = useGetResponsiveValue<RatingHighlightMode>(highlightModeProp);

	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isError = useGetResponsiveValue<boolean>(isErrorProp);
	const isReadOnly = useGetResponsiveValue<boolean>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<boolean>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<boolean>(isSuccessProp);
	const isWarning = useGetResponsiveValue<boolean>(isWarningProp);

	const size = useGetResponsiveValue<RatingSize>(sizeProp);

	return {
		count,
		direction,
		highlightMode,
		isDisabled,
		isError,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		size
	};
};

export default useRatingResponsiveValues;
