import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BackdropOverlayProps } from '@components/Overlay';
import { BackdropOverlay } from '@components/Overlay';

import { useModalContext } from '../../common/hooks';

import { __KEYS_MODAL_BACKDROP_CLASS__ } from './common/keys';
import type { ModalBackdropProps, ModalBackdropRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ModalBackdrop = forwardRef(function ModalBackdrop<Element extends PolymorphicElementType>(
	props: ModalBackdropProps<Element>,
	ref: ModalBackdropRef<Element>
): JSX.Element {
	const { color, colorMode } = useModalContext();

	const { className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<BackdropOverlay
			{...(rest as BackdropOverlayProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_MODAL_BACKDROP_CLASS__, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
			w='inherit'
			h='inherit'
			blur='md'
		/>
	);
});

// ModalBackdrop.displayName = 'ModalBackdrop';

export default ModalBackdrop;
