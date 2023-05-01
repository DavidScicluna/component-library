import { forwardRef, ReactElement } from 'react';

import { Center } from '@chakra-ui/react';

import { useTheme } from '../../../common/hooks';

import { GlassProps, GlassRef } from './common/types';

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
