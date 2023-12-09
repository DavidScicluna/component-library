import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { BackdropOverlay } from '@components/Overlay';

import { useModalContext } from '../../common/hooks';

import { __KEYS_MODAL_BACKDROP_CLASS__ } from './common/keys';
import type { ModalBackdropProps, ModalBackdropRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ModalBackdrop: PolymorphicComponentWithRef = forwardRef(function ModalBackdrop<
	Element extends ElementType = PolymorphicDefaultElement
>(props: ModalBackdropProps<Element>, ref: ModalBackdropRef<Element>): ReactElement {
	const { color, colorMode } = useModalContext();

	const { className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<BackdropOverlay<Element>
			{...rest}
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

ModalBackdrop.displayName = 'ModalBackdrop';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <ModalBackdrop<Element> {...props} />;
