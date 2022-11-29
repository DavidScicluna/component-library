import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { merge } from 'lodash';

import { useTheme } from '../../../../../common/hooks';
import { useBadgeContext } from '../../common/hooks';

import useStyles from './styles';
import { BadgeLabelProps } from './types';

const BadgeLabel: FC<BadgeLabelProps> = (props) => {
	const theme = useTheme();

	const { size } = useBadgeContext();

	const { children, sx, ...rest } = props;

	const style = useStyles({ theme, size });

	return (
		<Center {...rest} as='span' sx={{ ...merge(style, sx) }}>
			{children}
		</Center>
	);
};

export default BadgeLabel;
