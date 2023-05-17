import { forwardRef, ReactElement, useState } from 'react';

import { HStack } from '@chakra-ui/react';

import { range } from 'lodash-es';

import { Undefinable } from '../../../common/types';
import { useProviderContext } from '../../Provider/common/hooks';
import { useFormControlContext } from '../FormControl/common/hooks';

import { RatingProps, RatingRef } from './common/types';
import RatingIcon from './components/RatingIcon';

const Rating = forwardRef<RatingRef, RatingProps>(function Rating(props, ref): ReactElement {
	const { color: appColor, colorMode: appColorMode } = useProviderContext();

	const {
		color: defaultColor = appColor,
		colorMode: defaultColorMode = appColorMode,
		isDisabled: defaultIsDisabled,
		isError: defaultIsError,
		isRequired: defaultIsRequired,
		isReadOnly: defaultIsReadOnly,
		isSuccess: defaultIsSuccess,
		isWarning: defaultIsWarning,
		size: defaultSize
	} = useFormControlContext();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		icons,
		hasTrailingHover = true,
		isDisabled = defaultIsDisabled,
		isError = defaultIsError,
		isRequired = defaultIsRequired,
		isReadOnly = defaultIsReadOnly,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		count = 10,
		onChange,
		size = defaultSize,
		value,
		...rest
	} = props;

	const [hovering, setHovering] = useState<Undefinable<number>>(undefined);

	return (
		<HStack
			{...rest}
			ref={ref}
			aria-readonly={isReadOnly}
			aria-required={isRequired}
			aria-disabled={isDisabled}
			aria-invalid={isError}
		>
			{range(count).map((rating, index) => (
				<RatingIcon
					key={index}
					color={color}
					colorMode={colorMode}
					icons={icons}
					isActive={value ? rating <= value : false}
					isDisabled={isDisabled}
					isError={isError}
					isRequired={isRequired}
					isReadOnly={isReadOnly}
					isSuccess={isSuccess}
					isWarning={isWarning}
					isHovering={!isReadOnly && hasTrailingHover && hovering ? rating <= hovering : false}
					onClick={!isReadOnly && onChange ? () => onChange(rating) : undefined}
					onMouseEnter={hasTrailingHover && !isReadOnly ? () => setHovering(rating) : undefined}
					onMouseLeave={hasTrailingHover && !isReadOnly ? () => setHovering(undefined) : undefined}
					size={size}
				/>
			))}
		</HStack>
	);
});

export default Rating;
