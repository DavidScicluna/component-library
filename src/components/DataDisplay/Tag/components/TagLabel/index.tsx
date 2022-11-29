import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import { useTagContext } from '../../common/hooks';

import { TagLabelProps } from './types';

const TagLabel: FC<TagLabelProps> = (props) => {
	const theme = useTheme();

	const { size } = useTagContext();

	const { children, ...rest } = props;

	return (
		<Center
			{...rest}
			as='span'
			sx={{
				userSelect: 'none',

				fontSize: theme.fontSizes[size],
				fontWeight: theme.fontWeights.semibold,
				textTransform: 'uppercase',
				whiteSpace: 'nowrap',
				lineHeight: theme.lineHeights.base,
				letterSpacing: '.6px'
			}}
		>
			{children}
		</Center>
	);
};

export default TagLabel;
