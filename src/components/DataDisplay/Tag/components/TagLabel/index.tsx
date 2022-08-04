import { FC, useContext } from 'react';

import { Center } from '@chakra-ui/react';


import { TagContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import { size as defaultSize } from '../../common/data/defaultPropValues';
import { TagContext as TagContextType } from '../../types';

import { TagLabelProps } from './types';

const TagLabel: FC<TagLabelProps> = (props) => {
	const theme = useTheme();

	const { size = defaultSize } = useContext<TagContextType>(TagContext);

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
