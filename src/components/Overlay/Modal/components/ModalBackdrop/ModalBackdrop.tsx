import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { BackdropOverlay } from '@components/Overlay/components/BackdropOverlay';

import { useModalContext } from '../../common/hooks';

import type { ModalBackdropElement, ModalBackdropProps, ModalBackdropRef } from './common/types';

const ModalBackdrop = forwardRef(function ModalBackdrop<Element extends ModalBackdropElement>(
	props: ModalBackdropProps<Element>,
	ref: ModalBackdropRef<Element>
): ReactElement {
	const { color, colorMode } = useModalContext();

	const { className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<BackdropOverlay<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-modal-backdrop`, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
			w='inherit'
			h='inherit'
			blur='md'
		/>
	);
});

export default ModalBackdrop;
