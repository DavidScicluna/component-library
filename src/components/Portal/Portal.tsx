import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Box } from '@components/Box';

import type { PortalProps, PortalRef } from './common/types';

const Portal = forwardRef(function Portal<Element extends ElementType>(
	props: PortalProps<Element>,
	ref: PortalRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return ReactDOM.createPortal(
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-portal`, {
				[className]: !!className
			})}
			w='100vw'
			h='100vh'
		>
			{children}
		</Box>,
		document.body
	);
});

export default Portal;
