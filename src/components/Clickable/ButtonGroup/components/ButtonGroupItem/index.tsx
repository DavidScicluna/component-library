import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { merge } from 'lodash';

import { useTheme } from '../../../../../common/hooks';
import { useButtonGroupContext } from '../../common/hooks';

import { ButtonGroupItemProps } from './types';

const ButtonGroupItem: FC<ButtonGroupItemProps> = ({ children, index = 0, total = 0, sx, ...rest }) => {
	const theme = useTheme();

	const { isAttached, size } = useButtonGroupContext();

	const handleGetRadius = (): string => {
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
	};

	const handleReturnRadius = (index: number): string => {
		const radius = handleGetRadius();

		if (index === 0) {
			return `${radius} 0 0 ${radius} !important`;
		} else if (index === total) {
			return `0 ${radius} ${radius} 0 !important`;
		} else {
			return '0px !important';
		}
	};

	return (
		<Box
			{...rest}
			sx={merge(isAttached ? { '*, *::before, *::after': { borderRadius: handleReturnRadius(index) } } : {}, sx)}
		>
			{children}
		</Box>
	);
};

export default ButtonGroupItem;
