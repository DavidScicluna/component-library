import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_SEARCH_INPUT_INITIAL_QUERY,
	DEFAULT_SEARCH_INPUT_IS_COMPACT,
	DEFAULT_SEARCH_INPUT_IS_DISABLED,
	DEFAULT_SEARCH_INPUT_IS_ERROR,
	DEFAULT_SEARCH_INPUT_IS_FOCUSED,
	DEFAULT_SEARCH_INPUT_IS_FULLWIDTH,
	DEFAULT_SEARCH_INPUT_IS_OUTLINED,
	DEFAULT_SEARCH_INPUT_IS_READONLY,
	DEFAULT_SEARCH_INPUT_IS_REQUIRED,
	DEFAULT_SEARCH_INPUT_IS_SUCCESS,
	DEFAULT_SEARCH_INPUT_IS_WARNING,
	DEFAULT_SEARCH_INPUT_SIZE,
	DEFAULT_SEARCH_INPUT_VARIANT
} from '../constants';
import type { SearchInputElement, SearchInputProps, SearchInputSize, SearchInputVariant } from '../types';

type PickedSearchInputProps =
	| 'isCompact'
	| 'isDisabled'
	| 'isFullWidth'
	| 'isError'
	| 'isFocused'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'initialQuery'
	| 'size'
	| 'variant';
type UseSearchInputResponsiveValuesProps<Element extends SearchInputElement> = Partial<
	Pick<SearchInputProps<Element>, PickedSearchInputProps>
>;

const useSearchInputResponsiveValues = <Element extends SearchInputElement>(
	props: UseSearchInputResponsiveValuesProps<Element>
) => {
	const {
		isCompact: isCompactProp = DEFAULT_SEARCH_INPUT_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_SEARCH_INPUT_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_SEARCH_INPUT_IS_FULLWIDTH,
		isError: isErrorProp = DEFAULT_SEARCH_INPUT_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_SEARCH_INPUT_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_SEARCH_INPUT_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_SEARCH_INPUT_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_SEARCH_INPUT_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_SEARCH_INPUT_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_SEARCH_INPUT_IS_WARNING,
		initialQuery: initialQueryProp = DEFAULT_SEARCH_INPUT_INITIAL_QUERY,
		size: sizeProp = DEFAULT_SEARCH_INPUT_SIZE,
		variant: variantProp = DEFAULT_SEARCH_INPUT_VARIANT
	} = props;

	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<boolean>(isFullWidthProp);
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
