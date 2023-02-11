import { ReactElement, forwardRef } from 'react';

import { Center } from '@chakra-ui/react';

import { useTheme } from '../../../common/hooks';

import { GlassRef, GlassProps } from './types';

const Glass = forwardRef<GlassRef, GlassProps>(function Glass(props, ref): ReactElement {
	const theme = useTheme();

	const { children, size = 2, ...rest } = props;

	return (
		<Center {...rest} ref={ref} backdropFilter={`blur(${theme.space[size]})`}>
			{children}
		</Center>
	);
});

export default Glass;
