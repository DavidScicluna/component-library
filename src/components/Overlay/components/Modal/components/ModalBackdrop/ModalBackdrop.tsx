import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BackdropOverlayProps } from '@components/Overlay';
import { BackdropOverlay } from '@components/Overlay';

import { useModalContext } from '../../common/hooks';

import { KEYS_MODAL_BACKDROP_CLASS } from './common/keys';
import type { ModalBackdropProps, ModalBackdropRef } from './common/types';

const ModalBackdrop = forwardRef(function ModalBackdrop<Element extends PolymorphicElementType>(
	props: ModalBackdropProps<Element>,
	ref: ModalBackdropRef<Element>
): JSX.Element {
	const { color, colorMode } = useModalContext();

	const { className = DEFAULT_CLASSNAME, ...rest } = props;

	return (
		<BackdropOverlay
			{...(rest as BackdropOverlayProps<Element>)}
			ref={ref}
			className={classNames(KEYS_MODAL_BACKDROP_CLASS, { [className]: !!className })}
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
