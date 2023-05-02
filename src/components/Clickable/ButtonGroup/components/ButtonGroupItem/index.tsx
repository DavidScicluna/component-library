import { FC, useMemo } from 'react';

import { Box } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../../../common/hooks';
import { useButtonGroupContext } from '../../common/hooks';

import { ButtonGroupItemProps } from './common/types';

const ButtonGroupItem: FC<ButtonGroupItemProps> = ({ children, index = 0, total = 0, sx, ...rest }) => {
	const theme = useTheme();

	const { isAttached, isCompact, isRound } = useButtonGroupContext();

	const radius = useMemo((): string => {
		const radius = theme.radii[isRound ? 'full' : isCompact ? 'xs' : 'base'];
		const t = --total;

		if (index === 0) {
			return `${radius} 0 0 ${radius} !important`;
		} else if (index === t) {
			return `0 ${radius} ${radius} 0 !important`;
		} else {
			return '0px !important';
		}
	}, [isRound, isCompact]);

	return (
		<Box {...rest} sx={merge(isAttached ? { '*, *::before, *::after': { borderRadius: radius } } : {}, sx)}>
			{children}
		</Box>
	);
};

export default ButtonGroupItem;
