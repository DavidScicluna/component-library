import { ReactElement, forwardRef, useContext, useState, useCallback } from 'react';

import {
	useDisclosure,
	useBoolean,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverArrow,
	Button as CUIButton,
	HStack,
	VStack,
	Center
} from '@chakra-ui/react';

import { merge } from 'lodash';
import { useElementSize, useUpdateEffect } from 'usehooks-ts';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/data/defaultPropValues';
import { DatePickerContext } from '../../../../../..';
import { DatePickerContext as DatePickerContextType } from '../../../../../../types';
import { useTheme } from '../../../../../../../../../common/hooks';
import { getColor } from '../../../../../../../../../common/utils/color';
import { convertREMToPixels, convertStringToNumber } from '../../../../../../../../../common/utils';
import ScaleFade from '../../../../../../../../Transitions/ScaleFade';
import Icon from '../../../../../../../../Icon';

import useStyles from './common/styles';
import { DropdownButtonRef, DropdownButtonProps } from './types';
import { getSizeConfig } from './common/utils';

const DropdownButton = forwardRef<DropdownButtonRef, DropdownButtonProps>(function DropdownButton(
	props,
	ref
): ReactElement {
	const theme = useTheme();

	const { isOpen: isPopperOpen, onOpen: onPopperOpen, onClose: onPopperClose } = useDisclosure();

	const { color = defaultColor, colorMode = defaultColorMode } = useContext<DatePickerContextType>(DatePickerContext);

	const [childrenRef, { width: childrenWidth }] = useElementSize();

	const { children, label, sx, ...rest } = props;

	const [isHovering, setIsHovering] = useBoolean();

	const [background, setBackground] = useState<string>(getColor({ theme, colorMode, type: 'background' }));
	const [border, setBorder] = useState<string>(getColor({ theme, colorMode, type: 'divider' }));

	const style = useStyles({ theme, color, colorMode, isActive: isPopperOpen });

	const handleReturnSpacing = (): number => getSizeConfig().spacing;

	const handleCalculateChildrenWidth = useCallback((): string => {
		if (isHovering) {
			const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[getSizeConfig().spacing], 'rem'));

			return `calc(100% - ${childrenWidth + spacingWidth}px)`;
		} else {
			return '100%';
		}
	}, [theme, getSizeConfig, childrenWidth]);

	useUpdateEffect(() => setBackground(getColor({ theme, colorMode, type: 'background' })), [colorMode]);
	useUpdateEffect(() => setBorder(getColor({ theme, colorMode, type: 'divider' })), [colorMode]);

	return (
		<Popover
			arrowSize={convertREMToPixels(convertStringToNumber(theme.space[1.5], 'rem'))}
			arrowShadowColor={border}
			isOpen={isPopperOpen}
			placement='bottom-start'
			// gutter={gutter}
			onOpen={() => onPopperOpen()}
			onClose={() => onPopperClose()}
		>
			<PopoverTrigger>
				<CUIButton
					{...rest}
					ref={ref}
					tabIndex={0}
					onMouseEnter={() => setIsHovering.on()}
					onMouseLeave={() => setIsHovering.off()}
					variant='unstyled'
					sx={merge(style.button, sx)}
				>
					<HStack width='100%' spacing={handleReturnSpacing()}>
						<Center width={handleCalculateChildrenWidth()} ref={childrenRef} as='span'>
							{label}
						</Center>

						<ScaleFade in={isPopperOpen || isHovering} unmountOnExit={false}>
							<Icon
								width={theme.fontSizes.md}
								height={theme.fontSizes.md}
								fontSize={theme.fontSizes.md}
								colorMode={colorMode}
								color={getColor({ theme, colorMode, type: 'text.secondary' })}
								icon='chevron_right'
								category='outlined'
								sx={{ transform: `rotate(${isPopperOpen ? 90 : 360}deg)` }}
							/>
						</ScaleFade>
					</HStack>
				</CUIButton>
			</PopoverTrigger>

			<PopoverContent
				width='auto'
				// minWidth='275px'
				borderRadius='lg'
				borderWidth='2px'
				borderStyle='solid'
				borderColor={border}
				boxShadow='none'
				_focus={{ boxShadow: 'none' }}
			>
				<PopoverArrow
					background={`${background} !important`}
					borderWidth='2px'
					borderStyle='solid'
					borderColor={border}
					boxShadow='none !important'
				/>

				<Center width='100%' background={background} borderRadius='inherit' overflow='hidden'>
					<VStack width='100%' maxHeight='35vh' overflowX='hidden' overflowY='auto' spacing={0}>
						{children}
					</VStack>
				</Center>
			</PopoverContent>
		</Popover>
	);
});

export default DropdownButton;
