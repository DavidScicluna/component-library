import { FC, useMemo } from 'react';

import { Center, Popover, PopoverArrow, PopoverContent, PopoverTrigger, useDisclosure } from '@chakra-ui/react';

import { useConst, useTheme } from '../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../common/utils';
import { getColor } from '../../../common/utils/color';
import { useProviderContext } from '../../Provider/common/hooks';

import { PopperProps } from './common/types';

const Popper: FC<PopperProps> = (props) => {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		renderAction,
		isOpen = false,
		onOpen,
		onClose,
		placement = 'bottom-end',
		gutter = 8,
		...rest
	} = props;

	const { isOpen: isPopperOpen, onOpen: onPopperOpen, onClose: onPopperClose } = useDisclosure();

	const background = useMemo<string>(() => {
		return getColor({ theme, colorMode, type: 'background' });
	}, [colorMode]);
	const border = useMemo<string>(() => {
		return getColor({ theme, colorMode, type: 'divider' });
	}, [colorMode]);

	const arrowSize = useConst<number>(convertREMToPixels(convertStringToNumber(theme.space[1.5], 'rem')));

	return (
		<Popover
			{...rest}
			arrowSize={arrowSize}
			arrowShadowColor={border}
			isOpen={isOpen || isPopperOpen}
			placement={placement}
			gutter={gutter}
			onOpen={() => (onOpen ? onOpen() : onPopperOpen())}
			onClose={() => (onClose ? onClose() : onPopperClose())}
		>
			<PopoverTrigger>
				{renderAction({
					color,
					colorMode,
					isOpen: isOpen || isPopperOpen,
					onOpen: onPopperOpen,
					onClose: onClose ? onClose : onPopperClose
				})}
			</PopoverTrigger>
			<PopoverContent
				width='auto'
				minWidth='275px'
				maxWidth='350px'
				background='transparent !important'
				borderRadius='lg'
				borderWidth='2px'
				borderStyle='solid'
				borderColor={border}
				boxShadow='none'
				sx={{ 'boxShadow': 'none', '& *, *::before, *::after': { boxShadow: 'none' } }}
			>
				<PopoverArrow
					background={`${background} !important`}
					borderWidth='2px'
					borderStyle='solid'
					borderColor={border}
					boxShadow='none !important'
				/>
				<Center width='100%' background={`${background} !important`} border='none' borderRadius='inherit'>
					{children}
				</Center>
			</PopoverContent>
		</Popover>
	);
};

export default Popper;
