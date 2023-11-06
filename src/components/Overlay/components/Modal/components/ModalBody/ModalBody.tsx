import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { Center } from '@components/Layout';

import { __KEYS_MODAL_BODY_CLASS__ } from './common/keys';
import type { ModalBodyProps, ModalBodyRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ModalBody = forwardRef(function ModalBody<Element extends ElementType = PolymorphicDefaultElement>(
	props: ModalBodyProps<Element>,
	ref: ModalBodyRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Center<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_MODAL_BODY_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
		>
			{children}
		</Center>
	);
});

ModalBody.displayName = 'ModalBody';

export default ModalBody;
