import { forwardRef, ReactElement, useCallback, useState } from 'react';

import {
	Button as CUIButton,
	Center,
	HStack,
	Popover,
	PopoverArrow,
	PopoverContent,
	PopoverTrigger,
	useBoolean,
	useDisclosure,
	VStack
} from '@chakra-ui/react';

import { merge } from 'lodash-es';
import { useElementSize, useUpdateEffect } from 'usehooks-ts';

import { useTheme } from '../../../../../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../../../../../common/utils';
import { getColor } from '../../../../../../../../../common/utils/color';
import Icon from '../../../../../../../../DataDisplay/Icon';
import ScaleFade from '../../../../../../../../Transitions/ScaleFade';
import { useDatePickerContext } from '../../../../../../common/hooks';

import useStyles from './common/styles';
import { DropdownButtonProps, DropdownButtonRef } from './common/types';
import { getSizeConfig } from './common/utils';

const DropdownButton = forwardRef<DropdownButtonRef, DropdownButtonProps>(function DropdownButton(
	props,
	ref
): ReactElement {
	const theme = useTheme();

	const { isOpen: isPopperOpen, onOpen: onPopperOpen, onClose: onPopperClose } = useDisclosure();

	const { color, colorMode } = useDatePickerContext();

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
			gutter={8}
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
								color='gray'
								colorMode={colorMode}
								icon='chevron_right'
								category='outlined'
								variant='transparent'
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
