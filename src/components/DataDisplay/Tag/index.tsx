import { ReactElement, createContext, forwardRef, useCallback } from 'react';

import { useColorMode, Tag as CUITag, HStack } from '@chakra-ui/react';

import { dataAttr } from '@chakra-ui/utils';
import merge from 'lodash/merge';

import { useTheme } from '../../../common/hooks';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isActive as defaultIsActive,
	isClickable as defaultIsClickable,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize,
	variant as defaultVariant
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { getSizeConfig } from './common/utils';
import { TagContext as TagContextType, TagRef, TagProps } from './types';

export const TagContext = createContext<TagContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled,
	size: defaultSize,
	variant: defaultVariant
});

const Tag = forwardRef<TagRef, TagProps>(function Tag(props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		isActive = defaultIsActive,
		isClickable = defaultIsClickable,
		isDisabled = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, isFullWidth, isClickable, size, variant });

	const handleReturnSpacing = useCallback((): number => getSizeConfig({ size }).spacing, [size, getSizeConfig]);

	return (
		<TagContext.Provider value={{ color, colorMode, isDisabled, size, variant }}>
			<CUITag
				{...rest}
				ref={ref}
				tabIndex={0}
				aria-disabled={isClickable && isDisabled}
				data-active={dataAttr(isClickable && isActive)}
				variant='unstyled'
				sx={merge(style.tag, sx)}
				_disabled={style.disabled}
				_active={style.active}
			>
				<HStack
					width='inherit'
					position='relative'
					zIndex={1}
					align='center'
					justify='center'
					flex={1}
					spacing={handleReturnSpacing()}
				>
					{children}
				</HStack>
			</CUITag>
		</TagContext.Provider>
	);
});

export default Tag;
