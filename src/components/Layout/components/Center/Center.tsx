import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';

import Box from '@components/Box';

import { useGetCenterClasses } from './common/hooks';
import type { CenterProps, CenterRef } from './common/types';

const Center = forwardRef(function Center<Element extends ElementType>(
	props: CenterProps<Element>,
	ref: CenterRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, spacing = __DEFAULT_SPACING__, ...rest } = props;

	const classes = useGetCenterClasses({ spacing });

	return (
		<Box<Element>
			{...(rest as CenterProps<Element>)}
			ref={ref}
			className={classNames(classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

export default Center;
