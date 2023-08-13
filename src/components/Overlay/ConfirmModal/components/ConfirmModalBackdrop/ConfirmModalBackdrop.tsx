import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { BackdropOverlay } from '@components/Overlay/components/BackdropOverlay';

import { useConfirmModalContext } from '../../common/hooks';

import type { ConfirmModalBackdropElement, ConfirmModalBackdropProps, ConfirmModalBackdropRef } from './common/types';

const ConfirmModalBackdrop = forwardRef(function ConfirmModalBackdrop<Element extends ConfirmModalBackdropElement>(
	props: ConfirmModalBackdropProps<Element>,
	ref: ConfirmModalBackdropRef<Element>
): ReactElement {
	const { color, colorMode } = useConfirmModalContext();

	const { className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<BackdropOverlay<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-confirm-modal-backdrop`, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
			w='inherit'
			h='inherit'
			blur='md'
		/>
	);
});

export default ConfirmModalBackdrop;
