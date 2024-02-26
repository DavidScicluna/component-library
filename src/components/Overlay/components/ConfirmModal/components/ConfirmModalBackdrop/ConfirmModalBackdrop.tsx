import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BackdropOverlayProps } from '@components/Overlay';
import { BackdropOverlay } from '@components/Overlay';

import { useConfirmModalContext } from '../../common/hooks';

import { KEYS_CONFIRM_MODAL_BACKDROP_CLASS } from './common/keys';
import type { ConfirmModalBackdropProps, ConfirmModalBackdropRef } from './common/types';

const ConfirmModalBackdrop = forwardRef(function ConfirmModalBackdrop<Element extends PolymorphicElementType>(
	props: ConfirmModalBackdropProps<Element>,
	ref: ConfirmModalBackdropRef<Element>
): JSX.Element {
	const { color, colorMode } = useConfirmModalContext();

	const { className = DEFAULT_CLASSNAME, ...rest } = props;

	return (
		<BackdropOverlay
			{...(rest as BackdropOverlayProps<Element>)}
			ref={ref}
			className={classNames(KEYS_CONFIRM_MODAL_BACKDROP_CLASS, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
			w='inherit'
			h='inherit'
			blur='md'
		/>
	);
});

// ConfirmModalBackdrop.displayName = 'ConfirmModalBackdrop';

export default ConfirmModalBackdrop;
