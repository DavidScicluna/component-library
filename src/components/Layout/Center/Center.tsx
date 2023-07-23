import { ElementType, forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { Space } from '@common/types/theme';

import Box from '../Box';

import type { CenterProps, CenterRef } from './common/types';

const Center = forwardRef(function Center<Element extends ElementType>(
	props: CenterProps<Element>,
	ref: CenterRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, spacing: s = __DEFAULT_SPACING__, ...rest } = props;

	const spacing = useGetResponsiveValue<Space>(s);

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
				classes.spacing.gap[spacing],
				{ [className]: !!className }
			)}
		>
			{children}
		</Box>
	);
});

export default Center;
