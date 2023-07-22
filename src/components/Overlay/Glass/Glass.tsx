import { ElementType, forwardRef, ReactElement } from 'react';

import Box from '@components/Layout/Box';

import { useTheme } from '../../../common/hooks';

import { __DEFAULT_GLASS_SIZE__ } from './common/constants';
import { GlassProps, GlassRef } from './common/types';

const Glass = forwardRef(function Glass<Element extends ElementType>(
	props: GlassProps<Element>,
	ref: GlassRef<Element>
): ReactElement {
	const theme = useTheme();

	const { children, size = __DEFAULT_GLASS_SIZE__, ...rest } = props;

	return (
		<Box {...(rest as GlassProps<Element>)} ref={ref} backdropFilter={`blur(${theme.spacing[size]})`}>
			{children}
		</Box>
	);
});

export default Glass;
