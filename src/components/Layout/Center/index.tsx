import { ElementType, forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import { useGetResponsiveValue } from '../../../common/hooks';
import { Space } from '../../../common/types';
import Box from '../Box';

import { CenterProps, CenterRef } from './common/types';

const Center = forwardRef(function Center<Element extends ElementType>(
	props: CenterProps<Element>,
	ref: CenterRef<Element>
): ReactElement {
	const { children, className = '', spacing: s = 2, ...rest } = props;

	const spacing = useGetResponsiveValue<Space>(s);

	return (
		<Box
			{...rest}
			ref={ref}
			className={classNames(
				'flex',
				'flex-row',
				'flex-nowrap',
				'items-center',
				'justify-center',
				`gap-${spacing}`,
				{ [className]: !!className }
			)}
		>
			{children}
		</Box>
	);
});

export default Center;
