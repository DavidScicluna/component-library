import { ElementType, forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { Space } from '@common/types/theme';

import Box from '../../../Box';

import type { CenterProps, CenterRef } from './common/types';

const Center = forwardRef(function Center<Element extends ElementType>(
	props: CenterProps<Element>,
	ref: CenterRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, spacing = __DEFAULT_SPACING__, ...rest } = props;

	const spacingClassName = useGetClass<Space>(spacing, ['spacing', 'gap']);

	return (
		<Box
			{...(rest as CenterProps<Element>)}
			ref={ref}
			className={classNames(
				'flex',
				'flex-row',
				'flex-nowrap',
				'items-center',
				'justify-center',
				spacingClassName,
				{ [className]: !!className }
			)}
		>
			{children}
		</Box>
	);
});

export default Center;
