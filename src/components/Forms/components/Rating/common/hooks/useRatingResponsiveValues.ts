import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import {
	DEFAULT_RATING_COUNT,
	DEFAULT_RATING_DIRECTION,
	DEFAULT_RATING_HIGHLIGHT_MODE,
	DEFAULT_RATING_ICONS,
	DEFAULT_RATING_IS_DISABLED,
	DEFAULT_RATING_IS_ERROR,
	DEFAULT_RATING_IS_READONLY,
	DEFAULT_RATING_IS_REQUIRED,
	DEFAULT_RATING_IS_SUCCESS,
	DEFAULT_RATING_IS_WARNING,
	DEFAULT_RATING_SIZE
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
		count: countProp = DEFAULT_RATING_COUNT,
		direction: directionProp = DEFAULT_RATING_DIRECTION,
		highlightMode: highlightModeProp = DEFAULT_RATING_HIGHLIGHT_MODE,
		icons: iconsProp = DEFAULT_RATING_ICONS,
		isDisabled: isDisabledProp = DEFAULT_RATING_IS_DISABLED,
		isError: isErrorProp = DEFAULT_RATING_IS_ERROR,
		isReadOnly: isReadOnlyProp = DEFAULT_RATING_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_RATING_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_RATING_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_RATING_IS_WARNING,
		size: sizeProp = DEFAULT_RATING_SIZE
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
