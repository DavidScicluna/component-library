import { forwardRef, useState } from 'react';

import classNames from 'classnames';
import { range } from 'lodash-es';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Icon } from '@components/DataDisplay';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	DEFAULT_RATING_COUNT,
	DEFAULT_RATING_DIRECTION,
	DEFAULT_RATING_HIGHLIGHT_MODE,
	DEFAULT_RATING_ICONS,
	DEFAULT_RATING_ID,
	DEFAULT_RATING_IS_DISABLED,
	DEFAULT_RATING_IS_ERROR,
	DEFAULT_RATING_IS_READONLY,
	DEFAULT_RATING_IS_REQUIRED,
	DEFAULT_RATING_IS_SUCCESS,
	DEFAULT_RATING_IS_WARNING,
	DEFAULT_RATING_SIZE
} from './common/constants';
import { useRatingClasses, useRatingIconSize, useRatingResponsiveValues } from './common/hooks';
import { KEYS_RATING_CLASS } from './common/keys';
import type { RatingProps, RatingRef } from './common/types';

const Rating = forwardRef(function Rating<Element extends PolymorphicElementType>(
	props: RatingProps<Element>,
	ref: RatingRef<Element>
): JSX.Element {
	const {
		color: DEFAULT_FORM_CONTROL_COLOR,
		colorMode: DEFAULT_FORM_CONTROL_COLORMODE,
		id: DEFAULT_FORM_CONTROL_ID = DEFAULT_RATING_ID,
		hasFormControl,
		isDisabled: DEFAULT_FORM_CONTROL_IS_DISABLED = DEFAULT_RATING_IS_DISABLED,
		isError: DEFAULT_FORM_CONTROL_IS_ERROR = DEFAULT_RATING_IS_ERROR,
		isReadOnly: DEFAULT_FORM_CONTROL_IS_READONLY = DEFAULT_RATING_IS_READONLY,
		isRequired: DEFAULT_FORM_CONTROL_IS_REQUIRED = DEFAULT_RATING_IS_REQUIRED,
		isSuccess: DEFAULT_FORM_CONTROL_IS_SUCCESS = DEFAULT_RATING_IS_SUCCESS,
		isWarning: DEFAULT_FORM_CONTROL_IS_WARNING = DEFAULT_RATING_IS_WARNING,
		size: DEFAULT_FORM_CONTROL_SIZE = DEFAULT_RATING_SIZE
	} = useFormControlContext();

	const {
		id = DEFAULT_FORM_CONTROL_ID,
		className = DEFAULT_CLASSNAME,
		w,
		h,
		color = DEFAULT_FORM_CONTROL_COLOR,
		colorMode = DEFAULT_FORM_CONTROL_COLORMODE,
		count: countProp = DEFAULT_RATING_COUNT,
		direction: directionProp = DEFAULT_RATING_DIRECTION,
		highlightMode: highlightModeProp = DEFAULT_RATING_HIGHLIGHT_MODE,
		icons: iconsProp = DEFAULT_RATING_ICONS,
		isDisabled: isDisabledProp = DEFAULT_FORM_CONTROL_IS_DISABLED,
		isError: isErrorProp = DEFAULT_FORM_CONTROL_IS_ERROR,
		isReadOnly: isReadOnlyProp = DEFAULT_FORM_CONTROL_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_FORM_CONTROL_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_FORM_CONTROL_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_FORM_CONTROL_IS_WARNING,
		onChange,
		onHover,
		size: sizeProp = DEFAULT_FORM_CONTROL_SIZE,
		value,
		...rest
	} = props;

	const [hoveringCounts, setHoveringCounts] = useState<Array<number>>([]);

	const {
		count = DEFAULT_RATING_COUNT,
		direction = DEFAULT_RATING_DIRECTION,
		highlightMode = DEFAULT_RATING_HIGHLIGHT_MODE,
		icons = DEFAULT_RATING_ICONS,
		isDisabled = DEFAULT_FORM_CONTROL_IS_DISABLED,
		isError = DEFAULT_FORM_CONTROL_IS_ERROR,
		isReadOnly = DEFAULT_FORM_CONTROL_IS_READONLY,
		isRequired = DEFAULT_FORM_CONTROL_IS_REQUIRED,
		isSuccess = DEFAULT_FORM_CONTROL_IS_SUCCESS,
		isWarning = DEFAULT_FORM_CONTROL_IS_WARNING,
		size = DEFAULT_FORM_CONTROL_SIZE
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
		<Grid
			{...rest}
			ref={ref}
			className={classNames(KEYS_RATING_CLASS, classes, { [className]: !!className })}
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

// Rating.displayName = 'Rating';

export default Rating;
