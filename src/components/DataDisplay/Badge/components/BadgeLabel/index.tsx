import { FC, useContext } from 'react';

import { Center } from '@chakra-ui/react';

import { merge } from 'lodash';


import { BadgeContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import { size as defaultSize } from '../../common/data/defaultPropValues';
import { BadgeContext as BadgeContextType } from '../../types';

import { BadgeLabelProps } from './types';
import useStyles from './styles';

const BadgeLabel: FC<BadgeLabelProps> = (props) => {
	const theme = useTheme();

	const { size = defaultSize } = useContext<BadgeContextType>(BadgeContext);

	const { children, sx, ...rest } = props;

	const style = useStyles({ theme, size });

	return (
		<Center {...rest} as='span' sx={{ ...merge(style, sx) }}>
			{children}
		</Center>
	);
};

export default BadgeLabel;
