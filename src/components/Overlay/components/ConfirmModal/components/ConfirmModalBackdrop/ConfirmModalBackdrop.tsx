import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { BackdropOverlay } from '@components/Overlay';

import { useConfirmModalContext } from '../../common/hooks';

import { __KEYS_CONFIRM_MODAL_BACKDROP_CLASS__ } from './common/keys';
import type { ConfirmModalBackdropProps, ConfirmModalBackdropRef } from './common/types';

const ConfirmModalBackdrop = forwardRef(function ConfirmModalBackdrop<Element extends ElementType>(
	props: ConfirmModalBackdropProps<Element>,
	ref: ConfirmModalBackdropRef<Element>
): ReactElement {
	const { color, colorMode } = useConfirmModalContext();

	const { className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<BackdropOverlay<Element>
			{...rest}
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

ConfirmModalBackdrop.displayName = 'ConfirmModalBackdrop';

export default ConfirmModalBackdrop;
