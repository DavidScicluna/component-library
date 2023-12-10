import type { ElementType, ReactElement } from 'react';
import { forwardRef, useState } from 'react';

import { range } from 'lodash-es';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Icon } from '@components/DataDisplay';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	__DEFAULT_RATING_COUNT__,
	__DEFAULT_RATING_DIRECTION__,
	__DEFAULT_RATING_HIGHLIGHT_MODE__,
	__DEFAULT_RATING_ICONS__,
	__DEFAULT_RATING_ID__,
	__DEFAULT_RATING_IS_DISABLED__,
	__DEFAULT_RATING_IS_ERROR__,
	__DEFAULT_RATING_IS_READONLY__,
	__DEFAULT_RATING_IS_REQUIRED__,
	__DEFAULT_RATING_IS_SUCCESS__,
	__DEFAULT_RATING_IS_WARNING__,
	__DEFAULT_RATING_SIZE__
} from './common/constants';
import { useRatingClasses, useRatingIconSize, useRatingResponsiveValues } from './common/hooks';
import { __KEYS_RATING_CLASS__ } from './common/keys';
import type { RatingProps, RatingRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Rating: PolymorphicComponentWithRef = forwardRef(function Rating<
	Element extends ElementType = PolymorphicDefaultElement
>(props: RatingProps<Element>, ref: RatingRef<Element>): ReactElement {
	const {
		color: __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode: __DEFAULT_FORM_CONTROL_COLORMODE__,
		id: __DEFAULT_FORM_CONTROL_ID__ = __DEFAULT_RATING_ID__,
		hasFormControl,
		isDisabled: __DEFAULT_FORM_CONTROL_IS_DISABLED__ = __DEFAULT_RATING_IS_DISABLED__,
		isError: __DEFAULT_FORM_CONTROL_IS_ERROR__ = __DEFAULT_RATING_IS_ERROR__,
		isReadOnly: __DEFAULT_FORM_CONTROL_IS_READONLY__ = __DEFAULT_RATING_IS_READONLY__,
		isRequired: __DEFAULT_FORM_CONTROL_IS_REQUIRED__ = __DEFAULT_RATING_IS_REQUIRED__,
		isSuccess: __DEFAULT_FORM_CONTROL_IS_SUCCESS__ = __DEFAULT_RATING_IS_SUCCESS__,
		isWarning: __DEFAULT_FORM_CONTROL_IS_WARNING__ = __DEFAULT_RATING_IS_WARNING__,
		size: __DEFAULT_FORM_CONTROL_SIZE__ = __DEFAULT_RATING_SIZE__
	} = useFormControlContext();

	const {
		id = __DEFAULT_FORM_CONTROL_ID__,
		className = __DEFAULT_CLASSNAME__,
		w,
		h,
		color = __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode = __DEFAULT_FORM_CONTROL_COLORMODE__,
		count: countProp = __DEFAULT_RATING_COUNT__,
		direction: directionProp = __DEFAULT_RATING_DIRECTION__,
		highlightMode: highlightModeProp = __DEFAULT_RATING_HIGHLIGHT_MODE__,
		icons: iconsProp = __DEFAULT_RATING_ICONS__,
		isDisabled: isDisabledProp = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isReadOnly: isReadOnlyProp = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		onChange,
		onHover,
		size: sizeProp = __DEFAULT_FORM_CONTROL_SIZE__,
		value,
		...rest
	} = props;

	const [hoveringCounts, setHoveringCounts] = useState<Array<number>>([]);

	const {
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
	} = useRatingResponsiveValues({
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
	});

	const classes = useRatingClasses({ isDisabled, isReadOnly });
	const iconSize = useRatingIconSize({ size });

	const handleCountMouseClick = (count: number): void => {
		if (onChange) {
			onChange(count);
		}
	};

	const handleCountMouseEnter = (count: number): void => {
		setHoveringCounts((counts) => [...counts, count]);

		if (onHover) {
			onHover(count, true);
		}
	};

	const handleCountMouseLeave = (count: number): void => {
		setHoveringCounts((counts) => counts.filter((c) => c !== count));

		if (onHover) {
			onHover(count, false);
		}
	};

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_RATING_CLASS__, classes, { [className]: !!className })}
			aria-disabled={isDisabled ? 'true' : 'false'}
			aria-describedby={getFormDescriptionID(id)}
			aria-invalid={isError ? 'true' : 'false'}
			aria-labelledby={getFormLabelID(id)}
			aria-readonly={isReadOnly ? 'true' : 'false'}
			aria-required={isRequired ? 'true' : 'false'}
			w={hasFormControl ? '100%' : w}
			h={hasFormControl ? '100%' : h}
			templateColumns={
				direction === 'horizontal'
					? range(count)
							.map(() => '1fr')
							.join(' ')
					: 1
			}
			templateRows={
				direction === 'vertical'
					? range(count)
							.map(() => '1fr')
							.join(' ')
					: 1
			}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			{range(count).map((count) => {
				const isActive = value ? count <= value : false;
				const isHovering =
					highlightMode === 'trailing'
						? hoveringCounts.some((c) => count <= c)
						: hoveringCounts.includes(count);
				return (
					<GridItem
						key={count}
						alignSelf='center'
						justifySelf='center'
						onClick={() => handleCountMouseClick(count)}
						onMouseEnter={() => handleCountMouseEnter(count)}
						onMouseLeave={() => handleCountMouseLeave(count)}
					>
						<Icon
							w={iconSize.w}
							h={iconSize.h}
							color={
								isError
									? 'red'
									: isSuccess
									  ? 'green'
									  : isWarning
									    ? 'yellow'
									    : isActive || isHovering
									      ? color
									      : undefined
							}
							colorMode={colorMode}
							icon={isActive ? icons.active : isHovering ? icons.hover : icons.default}
							category='filled'
							size={iconSize.size}
							variant='transparent'
						/>
					</GridItem>
				);
			})}
		</Grid>
	);
});

Rating.displayName = 'Rating';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Rating<Element> {...props} />;
