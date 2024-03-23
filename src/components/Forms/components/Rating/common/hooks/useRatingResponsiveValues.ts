import { useGetResponsiveValue } from '@common/hooks';

import type { RatingNonResponsiveValueProps, RatingResponsiveValueProps } from '../types';

type UseRatingResponsiveValuesProps = Partial<RatingResponsiveValueProps>;
type UseRatingResponsiveValuesReturn = RatingNonResponsiveValueProps;

const useRatingResponsiveValues = (props: UseRatingResponsiveValuesProps): UseRatingResponsiveValuesReturn => {
	const {
		count: countProp,
		direction: directionProp,
		highlightMode: highlightModeProp,
		icons: iconsProp,
		isDisabled: isDisabledProp,
		isError: isErrorProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		size: sizeProp
	} = props;

	const count = useGetResponsiveValue<RatingNonResponsiveValueProps['count']>(countProp);
	const direction = useGetResponsiveValue<RatingNonResponsiveValueProps['direction']>(directionProp);
	const highlightMode = useGetResponsiveValue<RatingNonResponsiveValueProps['highlightMode']>(highlightModeProp);
	const icons = useGetResponsiveValue<RatingNonResponsiveValueProps['icons']>(iconsProp);

	const isDisabled = useGetResponsiveValue<RatingNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isError = useGetResponsiveValue<RatingNonResponsiveValueProps['isError']>(isErrorProp);
	const isReadOnly = useGetResponsiveValue<RatingNonResponsiveValueProps['isReadOnly']>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<RatingNonResponsiveValueProps['isRequired']>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<RatingNonResponsiveValueProps['isSuccess']>(isSuccessProp);
	const isWarning = useGetResponsiveValue<RatingNonResponsiveValueProps['isWarning']>(isWarningProp);

	const size = useGetResponsiveValue<RatingNonResponsiveValueProps['size']>(sizeProp);

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
