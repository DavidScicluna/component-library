import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import classNames from 'classnames';
import { compact, merge } from 'lodash-es';
import { useDimensionsRef, useFocus, useMergeRefs } from 'rooks';
import { useUpdateEffect } from 'usehooks-ts';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX } from '@common/constants';
import { useBoolean, useDebounce } from '@common/hooks';
import type {
	PolymorphicDefaultElement,
	PolymorphicElement,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent
} from '@common/types';

import { Box } from '@components/Box';
import { Icon } from '@components/DataDisplay';
import { useFormsClasses, useFormsIconSize, useFormsSizeConfig, useFormsStyles } from '@components/Forms/common/hooks';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import type { GridItemRef } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	DEFAULT_SEARCH_INPUT_AS,
	DEFAULT_SEARCH_INPUT_ID,
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
	DEFAULT_SEARCH_INPUT_TYPE,
	DEFAULT_SEARCH_INPUT_VARIANT
} from './common/constants';
import { useSearchInputResponsiveValues } from './common/hooks';
import { KEYS_SEARCH_INPUT_CLASS } from './common/keys';
import type { SearchInputElement, SearchInputProps, SearchInputRef } from './common/types';

const SearchInput = forwardRef(function SearchInput<Element extends SearchInputElement>(
	props: SearchInputProps<Element>,
	ref: SearchInputRef<Element>
): JSX.Element {
	const searchInputRef = useRef<PolymorphicElement<Element>>(null);
	const refs = useMergeRefs(ref, searchInputRef.current as SearchInputRef<Element>);

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		color: DEFAULT_FORM_CONTROL_COLOR,
		colorMode: DEFAULT_FORM_CONTROL_COLORMODE,
		id: DEFAULT_FORM_CONTROL_ID = DEFAULT_SEARCH_INPUT_ID,
		hasFormControl,
		isDisabled: DEFAULT_FORM_CONTROL_IS_DISABLED = DEFAULT_SEARCH_INPUT_IS_DISABLED,
		isError: DEFAULT_FORM_CONTROL_IS_ERROR = DEFAULT_SEARCH_INPUT_IS_ERROR,
		isFocused: DEFAULT_FORM_CONTROL_IS_FOCUSED = DEFAULT_SEARCH_INPUT_IS_FOCUSED,
		isReadOnly: DEFAULT_FORM_CONTROL_IS_READONLY = DEFAULT_SEARCH_INPUT_IS_READONLY,
		isRequired: DEFAULT_FORM_CONTROL_IS_REQUIRED = DEFAULT_SEARCH_INPUT_IS_REQUIRED,
		isSuccess: DEFAULT_FORM_CONTROL_IS_SUCCESS = DEFAULT_SEARCH_INPUT_IS_SUCCESS,
		isWarning: DEFAULT_FORM_CONTROL_IS_WARNING = DEFAULT_SEARCH_INPUT_IS_WARNING,
		size: DEFAULT_FORM_CONTROL_SIZE = DEFAULT_SEARCH_INPUT_SIZE
	} = useFormControlContext();

	const {
		as = DEFAULT_SEARCH_INPUT_AS,
		id = DEFAULT_FORM_CONTROL_ID,
		className = DEFAULT_CLASSNAME,
		renderClear,
		renderSubmit,
		renderLeft,
		renderRight,
		color = DEFAULT_FORM_CONTROL_COLOR,
		colorMode = DEFAULT_FORM_CONTROL_COLORMODE,
		placeholder,
		isCompact: isCompactProp = DEFAULT_SEARCH_INPUT_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_FORM_CONTROL_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_SEARCH_INPUT_IS_FULLWIDTH,
		isError: isErrorProp = DEFAULT_FORM_CONTROL_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_FORM_CONTROL_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_SEARCH_INPUT_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_FORM_CONTROL_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_FORM_CONTROL_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_FORM_CONTROL_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_FORM_CONTROL_IS_WARNING,
		type = DEFAULT_SEARCH_INPUT_TYPE,
		initialQuery: initialQueryProp = DEFAULT_SEARCH_INPUT_INITIAL_QUERY,
		onClear,
		onFilter,
		onSubmit,
		onClick,
		onFocus,
		onBlur,
		size: sizeProp = DEFAULT_FORM_CONTROL_SIZE,
		variant: variantProp = DEFAULT_SEARCH_INPUT_VARIANT,
		sx = DEFAULT_POLYMORPHIC_SX,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const {
		isCompact,
		isDisabled,
		isFullWidth,
		isError,
		isFocused: focused,
		isOutlined,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		initialQuery,
		size,
		variant
	} = useSearchInputResponsiveValues<Element>({
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
	});

	const isFocused = useMemo<boolean>(() => focused || isFocusedHook, [focused, isFocusedHook]);

	const config = useFormsSizeConfig({ isCompact, size, variant });
	const iconSize = useFormsIconSize({ isCompact, size, variant });

	const classes = useFormsClasses({
		color,
		colorMode,
		isCompact,
		isDisabled,
		isError,
		isOutlined,
		isReadOnly,
		isSuccess,
		isWarning,
		size,
		variant
	});
	const styles = useFormsStyles({
		element: 'input',
		color,
		colorMode,
		isDisabled,
		isError,
		isFocused,
		isReadOnly,
		isSuccess,
		isWarning,
		variant
	});

	const [query, setQuery] = useState(initialQuery);
	const debouncedQuery = useDebounce(query, 'slow');

	const handleClear = (): void => {
		setQuery('');

		if (onClear) {
			onClear();
		}
	};

	const handleFilter = (): void => {
		if (!!debouncedQuery && onFilter && !onSubmit) {
			onFilter(debouncedQuery);
		}
	};

	const handleSubmit = (): void => {
		if (!!debouncedQuery && !onFilter && onSubmit) {
			onSubmit(debouncedQuery);
		}
	};

	const handleQuery = (query: string): void => {
		if (query) {
			setQuery(query);
		} else {
			handleClear();
		}
	};

	const handleClick = (event: PolymorphicMouseEvent): void => {
		setIsFocusedHook.on();

		if (searchInputRef && searchInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(searchInputRef.current as any).focus();
		}

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	const handleFocus = (event: PolymorphicFocusEvent): void => {
		setIsFocusedHook.on();

		if (searchInputRef && searchInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(searchInputRef.current as any).focus();
		}

		if (onFocus) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onFocus(event as any);
		}
	};

	const handleBlur = (event: PolymorphicFocusEvent): void => {
		setIsFocusedHook.off();

		if (searchInputRef && searchInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(searchInputRef.current as any).blur();
		}

		if (onBlur) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onBlur(event as any);
		}
	};

	const { focusProps } = useFocus({ onFocus: handleFocus, onBlur: handleBlur });

	useUpdateEffect(() => handleFilter(), [debouncedQuery]);

	useUpdateEffect(() => handleQuery(initialQuery), [initialQuery]);

	useEffect(() => {
		if (isFocused && searchInputRef && searchInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(searchInputRef.current as any).focus();
		}
	}, [isFocused]);

	return (
		<Grid
			{...focusProps}
			className={classNames(KEYS_SEARCH_INPUT_CLASS, classes.container, { [className]: !!className })}
			w={hasFormControl || isFullWidth ? '100%' : undefined}
			h={hasFormControl ? '100%' : undefined}
			templateColumns={compact(['1fr', renderSubmit && onSubmit ? 'auto' : null]).join(' ')}
			templateRows={1}
			onClick={handleClick}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
			sx={merge(styles, sx)}
		>
			<GridItem>
				<Grid
					w='100%'
					h='100%'
					templateColumns={['auto', '1fr', 'auto'].join(' ')}
					templateRows={1}
					onClick={handleClick}
					alignItems='stretch'
					alignContent='stretch'
					justifyItems='stretch'
					justifyContent='stretch'
					spacing={config.spacing}
					px={config.padding.x}
					py={config.padding.y}
				>
					<GridItem alignSelf='center' justifySelf='center'>
						<Icon
							w={iconSize.w}
							h={iconSize.h}
							color={color}
							colorMode={colorMode}
							icon='search'
							category='filled'
							size={iconSize.size}
							variant='unstyled'
						/>
						{renderLeft ? renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight }) : null}
					</GridItem>

					<GridItem ref={childrenRef as GridItemRef<PolymorphicDefaultElement>}>
						<Box
							{...rest}
							as={as}
							ref={refs}
							className={classNames(classes.element)}
							aria-disabled={isDisabled ? 'true' : 'false'}
							aria-describedby={getFormDescriptionID(id)}
							aria-invalid={isError ? 'true' : 'false'}
							aria-labelledby={getFormLabelID(id)}
							aria-placeholder={placeholder}
							aria-readonly={isReadOnly ? 'true' : 'false'}
							aria-required={isRequired ? 'true' : 'false'}
							aria-selected={isFocused ? 'true' : 'false'}
							w='100%'
							h='100%'
							placeholder={placeholder}
							onFocus={handleFocus}
							onBlur={handleBlur}
							type={type}
						/>
					</GridItem>

					<GridItem alignSelf='center' justifySelf='center'>
						{renderRight ? renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight }) : null}
						{renderClear && onClear && !(isDisabled || isReadOnly) && query.length > 0
							? renderClear({
									color: undefined,
									colorMode,
									isCompact: true,
									onClick: handleClear,
									size: 'xs',
									variant: 'icon'
								})
							: null}
					</GridItem>
				</Grid>
			</GridItem>

			{renderSubmit && onSubmit ? (
				<GridItem>
					{renderSubmit({
						color,
						colorMode,
						isCompact: true,
						isDisabled: isDisabled || isReadOnly || query.length === 0,
						isRound: true,
						onClick: handleSubmit,
						size: 'xs',
						variant: 'contained'
					})}
				</GridItem>
			) : null}
		</Grid>
	);
});

// SearchInput.displayName = 'SearchInput';

export default SearchInput;
