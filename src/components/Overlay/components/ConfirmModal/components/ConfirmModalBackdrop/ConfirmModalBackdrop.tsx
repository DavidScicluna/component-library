import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BackdropOverlayProps } from '@components/Overlay';
import { BackdropOverlay } from '@components/Overlay';

import { useConfirmModalContext } from '../../common/hooks';

import { __KEYS_CONFIRM_MODAL_BACKDROP_CLASS__ } from './common/keys';
import type { ConfirmModalBackdropProps, ConfirmModalBackdropRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ConfirmModalBackdrop = forwardRef(function ConfirmModalBackdrop<Element extends PolymorphicElementType>(
	props: ConfirmModalBackdropProps<Element>,
	ref: ConfirmModalBackdropRef<Element>
): ReactElement {
	const { color, colorMode } = useConfirmModalContext();

	const { className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<BackdropOverlay
			{...(rest as BackdropOverlayProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_CONFIRM_MODAL_BACKDROP_CLASS__, { [className]: !!className })}
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
