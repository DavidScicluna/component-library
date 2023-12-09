import type { ReactElement } from 'react';
import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import { compact, merge } from 'lodash-es';
import { useFocus, useMergeRefs } from 'rooks';
import { useElementSize, useUpdateEffect } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { useBoolean, useDebounce, useGetResponsiveValue } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { Box } from '@components/Box';
import { Icon } from '@components/DataDisplay';
import { useFormsClasses, useFormsIconSize, useFormsSizeConfig, useFormsStyles } from '@components/Forms/common/hooks';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
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
import { __KEYS_SEARCH_INPUT_CLASS__ } from './common/keys';
import type {
	SearchInputDefaultElement,
	SearchInputElement,
	SearchInputFocusEvent,
	SearchInputMouseEvent,
	SearchInputProps,
	SearchInputRef,
	SearchInputSize,
	SearchInputVariant
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const SearchInput: PolymorphicComponentWithRef = forwardRef(function SearchInput<
	Element extends SearchInputElement = SearchInputDefaultElement
>(props: SearchInputProps<Element>, ref: SearchInputRef<Element>): ReactElement {
	const searchinputRef = useRef<SearchInputRef<Element>>();
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const refs = useMergeRefs(ref, searchinputRef);

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
		isCompact: comp = __DEFAULT_SEARCH_INPUT_IS_COMPACT__,
		isDisabled: disabled = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: error = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: focused = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isOutlined: outlined = __DEFAULT_SEARCH_INPUT_IS_OUTLINED__,
		isReadOnly: readOnly = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: required = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: success = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: warning = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		type = __DEFAULT_SEARCH_INPUT_TYPE__,
		initialQuery = __DEFAULT_SEARCH_INPUT_INITIAL_QUERY__,
		onClear,
		onFilter,
		onSubmit,
		onClick,
		onFocus,
		onBlur,
		size: s = __DEFAULT_FORM_CONTROL_SIZE__,
		variant: v = __DEFAULT_SEARCH_INPUT_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const isCompact = useGetResponsiveValue<boolean>(comp);
	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isError = useGetResponsiveValue<boolean>(error);
	const isFocusedProp = useGetResponsiveValue<boolean>(focused);
	const isOutlined = useGetResponsiveValue<boolean>(outlined);
	const isReadOnly = useGetResponsiveValue<boolean>(readOnly);
	const isRequired = useGetResponsiveValue<boolean>(required);
	const isSuccess = useGetResponsiveValue<boolean>(success);
	const isWarning = useGetResponsiveValue<boolean>(warning);

	const size = useGetResponsiveValue<SearchInputSize>(s);
	const variant = useGetResponsiveValue<SearchInputVariant>(v);

	const isFocused = useMemo<boolean>(() => isFocusedProp || isFocusedHook, [isFocusedProp, isFocusedHook]);

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

		if (searchinputRef && searchinputRef.current) {
			searchinputRef.current.focus();
		}

		if (onClick) {
			onClick(event);
		}
	};

	const handleFocus = (event: SearchInputFocusEvent<Element>): void => {
		setIsFocusedHook.on();

		if (searchinputRef && searchinputRef.current) {
			searchinputRef.current.focus();
		}

		if (onFocus) {
			onFocus(event);
		}
	};

	const handleBlur = (event: SearchInputFocusEvent<Element>): void => {
		setIsFocusedHook.off();

		if (searchinputRef && searchinputRef.current) {
			searchinputRef.current.blur();
		}

		if (onBlur) {
			onBlur(event);
		}
	};

	const { focusProps } = useFocus({ onFocus: handleFocus, onBlur: handleBlur });

	useUpdateEffect(() => handleFilter(), [debouncedQuery]);

	useUpdateEffect(() => handleQuery(initialQuery), [initialQuery]);

	useEffect(() => {
		if (isFocused && searchinputRef && searchinputRef.current) {
			searchinputRef.current.focus();
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

					<GridItem ref={childrenRef}>
						<Box<Element>
							{...rest}
							ref={refs}
							className={classNames(classes.element)}
							as='input'
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

SearchInput.displayName = 'SearchInput';

export default <Element extends SearchInputElement = SearchInputDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <SearchInput<Element> {...props} />;
