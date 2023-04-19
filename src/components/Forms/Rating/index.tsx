import { FC, useCallback, useState } from 'react';

import { FormControl, HStack, useColorMode, VStack } from '@chakra-ui/react';

import { debounce, includes, isEmpty, isNil, merge, range } from 'lodash-es';

import { useTheme } from '../../../common/hooks';
import Collapse from '../../Transitions/Collapse';
import FormHelperText from '../FormHelperText';
import FormLabel from '../FormLabel';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isFullWidth as defaultIsFullWidth,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize,
	variant as defaultVariant
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { getSizeConfig } from './common/utils';
import RatingIcon from './components/RatingIcon';
import { RatingProps } from './types';

const Rating: FC<RatingProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		color = defaultColor,
		colorMode = colorModeHook,
		id,
		name,
		label,
		helper,
		icons,
		isDisabled = defaultIsDisabled,
		isError = defaultIsError,
		isWarning = defaultIsWarning,
		isSuccess = defaultIsSuccess,
		isReadOnly = defaultIsReadOnly,
		isRequired = defaultIsRequired,
		isFullWidth = defaultIsFullWidth,
		ratings = 10,
		onChange,
		size = defaultSize,
		variant = defaultVariant,
		value,
		sx,
		...rest
	} = props;

	const [hovering, setHovering] = useState<number>();

	const style = useStyles({ theme, colorMode, isError, isWarning, isSuccess, isFullWidth, size, variant });

	const handleReturnSpacing = useCallback(
		debounce((): number => getSizeConfig({ size }).spacing, 500),
		[size, getSizeConfig]
	);

	return (
		<VStack as={FormControl} tabIndex={0} alignItems='flex-start' sx={{ width: isFullWidth ? '100%' : 'auto' }}>
			{label && (
				<FormLabel
					colorMode={colorMode}
					id={id || name}
					isDisabled={isDisabled}
					isRequired={isRequired}
					isReadOnly={isReadOnly}
					size={size}
					sx={sx?.formLabel}
				>
					{label}
				</FormLabel>
			)}

			<HStack
				{...rest}
				width='100%'
				alignItems='center'
				justifyContent='space-between'
				spacing={handleReturnSpacing()}
				sx={merge(style.group, sx?.group || {})}
			>
				{range(ratings).map((rating, index) => (
					<RatingIcon
						key={index}
						color={color}
						colorMode={colorMode}
						icons={icons}
						isActive={includes(value, rating)}
						isDisabled={isDisabled}
						isError={isError}
						isHovering={rating <= (hovering || -1)}
						isSuccess={isSuccess}
						isWarning={isWarning}
						isReadOnly={isReadOnly}
						onClick={onChange ? () => onChange({ rating }) : undefined}
						onMouseEnter={() => setHovering(rating)}
						onMouseLeave={() => setHovering(undefined)}
						size={size}
						sx={sx?.rating}
					/>
				))}
			</HStack>

			<Collapse in={!(isNil(helper) || isEmpty(helper))} style={{ width: '100%' }}>
				<FormHelperText
					colorMode={colorMode}
					isDisabled={isDisabled}
					isError={isError}
					isWarning={isWarning}
					isSuccess={isSuccess}
					isReadOnly={isReadOnly}
					size={size}
					sx={sx?.formHelperText || {}}
				>
					{helper}
				</FormHelperText>
			</Collapse>
		</VStack>
	);
};

export default Rating;
