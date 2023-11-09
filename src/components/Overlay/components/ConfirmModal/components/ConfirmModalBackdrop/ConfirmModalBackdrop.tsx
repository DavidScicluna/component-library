import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { BackdropOverlay } from '@components/Overlay';

import { useConfirmModalContext } from '../../common/hooks';

import { __KEYS_CONFIRM_MODAL_BACKDROP_CLASS__ } from './common/keys';
import type { ConfirmModalBackdropProps, ConfirmModalBackdropRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ConfirmModalBackdrop = forwardRef(function ConfirmModalBackdrop<
	Element extends ElementType = PolymorphicDefaultElement
>(props: ConfirmModalBackdropProps<Element>, ref: ConfirmModalBackdropRef<Element>): ReactElement {
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
