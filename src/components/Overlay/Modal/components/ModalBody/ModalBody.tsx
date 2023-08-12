import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Center } from '@components/Layout';

import type { ModalBodyProps, ModalBodyRef } from './common/types';

const ModalBody = forwardRef(function ModalBody<Element extends ElementType>(
	props: ModalBodyProps<Element>,
	ref: ModalBodyRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Center<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-modal-body`, { [className]: !!className })}
			w='100%'
			h='100%'
		>
			{children}
		</Center>
	);
});

export default ModalBody;
