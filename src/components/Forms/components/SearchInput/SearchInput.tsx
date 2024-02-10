import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import { compact, merge } from 'lodash-es';
import { useDimensionsRef, useFocus, useMergeRefs } from 'rooks';
import { useUpdateEffect } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { useBoolean, useDebounce } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElement } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';
import { Icon } from '@components/DataDisplay';
import { useFormsClasses, useFormsIconSize, useFormsSizeConfig, useFormsStyles } from '@components/Forms/common/hooks';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import type { GridItemRef } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	__DEFAULT_SEARCH_INPUT_AS__,
	__DEFAULT_SEARCH_INPUT_ID__,
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
	__DEFAULT_SEARCH_INPUT_TYPE__,
	__DEFAULT_SEARCH_INPUT_VARIANT__
} from './common/constants';
import { useSearchInputResponsiveValues } from './common/hooks';
import { __KEYS_SEARCH_INPUT_CLASS__ } from './common/keys';
import type {
	SearchInputElement,
	SearchInputFocusEvent,
	SearchInputMouseEvent,
	SearchInputProps,
	SearchInputRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const SearchInput = forwardRef(function SearchInput<Element extends SearchInputElement>(
	props: SearchInputProps<Element>,
	ref: SearchInputRef<Element>
): JSX.Element {
	const searchInputRef = useRef<PolymorphicElement<Element>>();
	const refs = useMergeRefs(ref, searchInputRef);

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		color: __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode: __DEFAULT_FORM_CONTROL_COLORMODE__,
		id: __DEFAULT_FORM_CONTROL_ID__ = __DEFAULT_SEARCH_INPUT_ID__,
		hasFormControl,
		isDisabled: __DEFAULT_FORM_CONTROL_IS_DISABLED__ = __DEFAULT_SEARCH_INPUT_IS_DISABLED__,
		isError: __DEFAULT_FORM_CONTROL_IS_ERROR__ = __DEFAULT_SEARCH_INPUT_IS_ERROR__,
		isFocused: __DEFAULT_FORM_CONTROL_IS_FOCUSED__ = __DEFAULT_SEARCH_INPUT_IS_FOCUSED__,
		isReadOnly: __DEFAULT_FORM_CONTROL_IS_READONLY__ = __DEFAULT_SEARCH_INPUT_IS_READONLY__,
		isRequired: __DEFAULT_FORM_CONTROL_IS_REQUIRED__ = __DEFAULT_SEARCH_INPUT_IS_REQUIRED__,
		isSuccess: __DEFAULT_FORM_CONTROL_IS_SUCCESS__ = __DEFAULT_SEARCH_INPUT_IS_SUCCESS__,
		isWarning: __DEFAULT_FORM_CONTROL_IS_WARNING__ = __DEFAULT_SEARCH_INPUT_IS_WARNING__,
		size: __DEFAULT_FORM_CONTROL_SIZE__ = __DEFAULT_SEARCH_INPUT_SIZE__
	} = useFormControlContext();

	const {
		as = __DEFAULT_SEARCH_INPUT_AS__,
		id = __DEFAULT_FORM_CONTROL_ID__,
		className = __DEFAULT_CLASSNAME__,
		w,
		h,
		renderClear,
		renderSubmit,
		renderLeft,
		renderRight,
		color = __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode = __DEFAULT_FORM_CONTROL_COLORMODE__,
		placeholder,
		isCompact: isCompactProp = __DEFAULT_SEARCH_INPUT_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_SEARCH_INPUT_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		type = __DEFAULT_SEARCH_INPUT_TYPE__,
		initialQuery: initialQueryProp = __DEFAULT_SEARCH_INPUT_INITIAL_QUERY__,
		onClear,
		onFilter,
		onSubmit,
		onClick,
		onFocus,
		onBlur,
		size: sizeProp = __DEFAULT_FORM_CONTROL_SIZE__,
		variant: variantProp = __DEFAULT_SEARCH_INPUT_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const {
		isCompact,
		isDisabled,
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

	const handleClick = (event: SearchInputMouseEvent<Element>): void => {
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

	const handleFocus = (event: SearchInputFocusEvent<Element>): void => {
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

	const handleBlur = (event: SearchInputFocusEvent<Element>): void => {
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
			className={classNames(__KEYS_SEARCH_INPUT_CLASS__, classes.container, { [className]: !!className })}
			w={hasFormControl ? '100%' : w}
			h={hasFormControl ? '100%' : h}
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
							{...(rest as BoxProps<Element>)}
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
