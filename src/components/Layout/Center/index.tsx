import { forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import Box from '../Box';

import { CenterProps, CenterRef } from './common/types';

const Center = forwardRef<CenterRef, CenterProps>(function Center(props, ref): ReactElement {
	const { children, className = '', ...rest } = props;

	return (
		<Box
			{...rest}
			ref={ref}
			className={classNames('flex', 'flex-row', 'flex-nowrap', 'items-center', 'justify-center', 'gap-0', {
				[className]: !!className
			})}
		>
			{children}
		</Box>
	);
});

export default Center;
