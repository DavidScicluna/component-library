import { ReactElement, forwardRef, useCallback } from 'react';

import { ButtonGroup as CUIButtonGroup, Center } from '@chakra-ui/react';

import { useTheme } from '../../../common/hooks';

import {
	children as defaultChildren,
	isAttached as defaultIsAttached,
	size as defaultSize,
	spacing as defaultSpacing
} from './common/data/defaultPropValues';
import { ButtonGroupRef, ButtonGroupProps } from './types';

const ButtonGroup = forwardRef<ButtonGroupRef, ButtonGroupProps>(function ButtonGroup(props, ref): ReactElement {
	const theme = useTheme();

	const {
		children = defaultChildren,
		isAttached = defaultIsAttached,
		size = defaultSize,
		spacing = defaultSpacing,
		...rest
	} = props;

	const handleGetRadius = useCallback((): string => {
		switch (size) {
			case 'xs':
			case 'sm':
				return theme.radii.xs;
			case 'lg':
			case 'xl':
				return theme.radii.lg;
			default:
				return theme.radii.base;
		}
	}, [theme, size]);

	const handleReturnRadius = useCallback(
		(index: number): string => {
			const radius = handleGetRadius();

			if (index === 0) {
				return `${radius} 0 0 ${radius} !important`;
			} else if (index === children.length - 1) {
				return `0 ${radius} ${radius} 0 !important`;
			} else {
				return '0px !important';
			}
		},
		[children, handleGetRadius]
	);

	return (
		<CUIButtonGroup {...rest} ref={ref} isAttached={isAttached} spacing={spacing}>
			{children.map((child, index: number) => (
				<Center
					key={index}
					sx={isAttached ? { '*, *::before, *::after': { borderRadius: handleReturnRadius(index) } } : {}}
				>
					{child}
				</Center>
			))}
		</CUIButtonGroup>
	);
});

export default ButtonGroup;
