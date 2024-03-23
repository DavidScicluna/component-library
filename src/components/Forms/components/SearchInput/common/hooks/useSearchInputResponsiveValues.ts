import { useGetResponsiveValue } from '@common/hooks';

import type { SearchInputNonResponsiveValueProps, SearchInputResponsiveValueProps } from '../types';

type UseSearchInputResponsiveValuesProps = Partial<SearchInputResponsiveValueProps>;
type UseSearchInputResponsiveValuesReturn = SearchInputNonResponsiveValueProps;

const useSearchInputResponsiveValues = (
	props: UseSearchInputResponsiveValuesProps
): UseSearchInputResponsiveValuesReturn => {
	const {
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFullWidth: isFullWidthProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
		isOutlined: isOutlinedProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		initialQuery: initialQueryProp,
		size: sizeProp,
		variant: variantProp
	} = props;

	const isCompact = useGetResponsiveValue<SearchInputNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<SearchInputNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<SearchInputNonResponsiveValueProps['isFullWidth']>(isFullWidthProp);
	const isError = useGetResponsiveValue<SearchInputNonResponsiveValueProps['isError']>(isErrorProp);
	const isFocused = useGetResponsiveValue<SearchInputNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<SearchInputNonResponsiveValueProps['isOutlined']>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<SearchInputNonResponsiveValueProps['isReadOnly']>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<SearchInputNonResponsiveValueProps['isRequired']>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<SearchInputNonResponsiveValueProps['isSuccess']>(isSuccessProp);
	const isWarning = useGetResponsiveValue<SearchInputNonResponsiveValueProps['isWarning']>(isWarningProp);

	const initialQuery = useGetResponsiveValue<SearchInputNonResponsiveValueProps['initialQuery']>(initialQueryProp);

	const size = useGetResponsiveValue<SearchInputNonResponsiveValueProps['size']>(sizeProp);
	const variant = useGetResponsiveValue<SearchInputNonResponsiveValueProps['variant']>(variantProp);

	return {
		isCompact,
		isDisabled,
		isFullWidth,
		isError,
		isFocused,
		isOutlined,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		initialQuery,
		size,
		variant
	};
};

export default useSearchInputResponsiveValues;
