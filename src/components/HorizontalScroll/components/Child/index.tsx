import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { ChildProps } from './types';

import { useTheme } from '../../../../common/hooks';

const Child: FC<ChildProps> = ({ children, renderDivider, isLast = false }) => {
	const theme = useTheme();

	return (
		<Center height='100%'>
			{children}

			{renderDivider && !isLast ? (
				<Center p={0} m={0}>
					{renderDivider({ padding: theme.space['0.75'] })}
				</Center>
			) : null}
		</Center>
	);
};

export default Child;
