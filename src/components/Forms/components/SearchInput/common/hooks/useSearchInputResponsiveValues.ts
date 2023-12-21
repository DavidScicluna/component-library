import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_SEARCH_INPUT_INITIAL_QUERY__,
	__DEFAULT_SEARCH_INPUT_IS_COMPACT__,
	__DEFAULT_SEARCH_INPUT_IS_DISABLED__,
	__DEFAULT_SEARCH_INPUT_IS_ERROR__,
	__DEFAULT_SEARCH_INPUT_IS_FOCUSED__,
	__DEFAULT_SEARCH_INPUT_IS_OUTLINED__,
	__DEFAULT_SEARCH_INPUT_IS_READONLY__,
	__DEFAULT_SEARCH_INPUT_IS_REQUIRED__,
	__DEFAULT_SEARCH_INPUT_IS_SUCCESS__,
	__DEFAULT_SEARCH_INPUT_IS_WARNING__,
	__DEFAULT_SEARCH_INPUT_SIZE__,
	__DEFAULT_SEARCH_INPUT_VARIANT__
} from '../constants';
import type { SearchInputProps, SearchInputSize, SearchInputVariant } from '../types';

type UseSearchInputResponsiveValuesProps = Partial<
	Pick<
		SearchInputProps,
		| 'isCompact'
		| 'isDisabled'
		| 'isError'
		| 'isFocused'
		| 'isOutlined'
		| 'isReadOnly'
		| 'isRequired'
		| 'isSuccess'
		| 'isWarning'
		| 'initialQuery'
		| 'size'
		| 'variant'
	>
>;

const useSearchInputResponsiveValues = (props: UseSearchInputResponsiveValuesProps) => {
	const {
		isCompact: isCompactProp = __DEFAULT_SEARCH_INPUT_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_SEARCH_INPUT_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_SEARCH_INPUT_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_SEARCH_INPUT_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_SEARCH_INPUT_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_SEARCH_INPUT_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_SEARCH_INPUT_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_SEARCH_INPUT_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_SEARCH_INPUT_IS_WARNING__,
		initialQuery: initialQueryProp = __DEFAULT_SEARCH_INPUT_INITIAL_QUERY__,
		size: sizeProp = __DEFAULT_SEARCH_INPUT_SIZE__,
		variant: variantProp = __DEFAULT_SEARCH_INPUT_VARIANT__
	} = props;

	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isError = useGetResponsiveValue<boolean>(isErrorProp);
	const isFocused = useGetResponsiveValue<boolean>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<boolean>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<boolean>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<boolean>(isSuccessProp);
	const isWarning = useGetResponsiveValue<boolean>(isWarningProp);

	const initialQuery = useGetResponsiveValue<string>(initialQueryProp);

	const size = useGetResponsiveValue<SearchInputSize>(sizeProp);
	const variant = useGetResponsiveValue<SearchInputVariant>(variantProp);

	return {
		isCompact,
		isDisabled,
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
