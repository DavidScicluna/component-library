import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import {
	__DEFAULT_RATING_COUNT__,
	__DEFAULT_RATING_DIRECTION__,
	__DEFAULT_RATING_HIGHLIGHT_MODE__,
	__DEFAULT_RATING_ICONS__,
	__DEFAULT_RATING_IS_DISABLED__,
	__DEFAULT_RATING_IS_ERROR__,
	__DEFAULT_RATING_IS_READONLY__,
	__DEFAULT_RATING_IS_REQUIRED__,
	__DEFAULT_RATING_IS_SUCCESS__,
	__DEFAULT_RATING_IS_WARNING__,
	__DEFAULT_RATING_SIZE__
} from '../constants';
import type { RatingDirection, RatingHighlightMode, RatingIcons, RatingProps, RatingSize } from '../types';

type PickedRatingProps =
	| 'count'
	| 'direction'
	| 'highlightMode'
	| 'icons'
	| 'isDisabled'
	| 'isError'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size';
type UseRatingResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<RatingProps<Element>, PickedRatingProps>
>;

const useRatingResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseRatingResponsiveValuesProps<Element>
) => {
	const {
		count: countProp = __DEFAULT_RATING_COUNT__,
		direction: directionProp = __DEFAULT_RATING_DIRECTION__,
		highlightMode: highlightModeProp = __DEFAULT_RATING_HIGHLIGHT_MODE__,
		icons: iconsProp = __DEFAULT_RATING_ICONS__,
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
	const icons = useGetResponsiveValue<RatingIcons>(iconsProp);

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
		icons,
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
