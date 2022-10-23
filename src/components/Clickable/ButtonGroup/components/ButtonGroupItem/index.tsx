import { FC, useContext, useCallback } from 'react';

import { Box } from '@chakra-ui/react';

import { merge } from 'lodash';

import { useTheme } from '../../../../../common/hooks';
import { ButtonGroupContext as ButtonGroupContextType } from '../../types';
import { ButtonGroupContext } from '../..';
import { isAttached as defaultIsAttached, size as defaultSize } from '../../common/data/defaultPropValues';

import { ButtonGroupItemProps } from './types';

const ButtonGroupItem: FC<ButtonGroupItemProps> = ({ children, index = 0, total = 0, sx, ...rest }) => {
	const theme = useTheme();

	const { isAttached = defaultIsAttached, size = defaultSize } =
		useContext<ButtonGroupContextType>(ButtonGroupContext);

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
			} else if (index === total) {
				return `0 ${radius} ${radius} 0 !important`;
			} else {
				return '0px !important';
			}
		},
		[children, handleGetRadius]
	);

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
