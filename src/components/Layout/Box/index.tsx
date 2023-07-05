import { forwardRef, ReactElement } from 'react';

import { BoxProps, BoxRef } from './common/types';

const Box = forwardRef<BoxRef, BoxProps>(function Box(props, ref): ReactElement {
	const { children, ...rest } = props;

	return (
		<div {...rest} ref={ref}>
			{children}
		</div>
	);
});

export default Box;
