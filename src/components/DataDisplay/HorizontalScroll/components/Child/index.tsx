import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';

import { ChildProps } from './common/types';

const Child: FC<ChildProps> = ({ children, renderDivider, isLast = false }) => {
	const theme = useTheme();

	return (
		<Center height='100%'>
			{children}

			{renderDivider && !isLast ? renderDivider({ padding: theme.space['0.75'] }) : null}
		</Center>
	);
};

export default Child;
