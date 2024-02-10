import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { CenterProps } from '@components/Layout';
import { Center } from '@components/Layout';

import { __KEYS_MODAL_BODY_CLASS__ } from './common/keys';
import type { ModalBodyProps, ModalBodyRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ModalBody = forwardRef(function ModalBody<Element extends PolymorphicElementType>(
	props: ModalBodyProps<Element>,
	ref: ModalBodyRef<Element>
): JSX.Element {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Center
			{...(rest as CenterProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_MODAL_BODY_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
		>
			{children}
		</Center>
	);
});

// ModalBody.displayName = 'ModalBody';

export default ModalBody;
