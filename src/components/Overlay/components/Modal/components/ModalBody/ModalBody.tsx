import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { CenterProps } from '@components/Layout';
import { Center } from '@components/Layout';

import { KEYS_MODAL_BODY_CLASS } from './common/keys';
import type { ModalBodyProps, ModalBodyRef } from './common/types';

const ModalBody = forwardRef(function ModalBody<Element extends PolymorphicElementType>(
	props: ModalBodyProps<Element>,
	ref: ModalBodyRef<Element>
): JSX.Element {
	const { children, className = DEFAULT_CLASSNAME, ...rest } = props;

	return (
		<Center
			{...(rest as CenterProps<Element>)}
			ref={ref}
			className={classNames(KEYS_MODAL_BODY_CLASS, { [className]: !!className })}
			w='100%'
			h='100%'
		>
			{children}
		</Center>
	);
});

// ModalBody.displayName = 'ModalBody';

export default ModalBody;
