import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicElementType
} from '@common/types';

import { Center } from '@components/Layout';

import { __KEYS_CARD_BODY_CLASS__ } from './common/keys';
import type { CardBodyProps, CardBodyRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CardBody: PolymorphicComponentWithRef = forwardRef(function CardBody<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: CardBodyProps<Element>, ref: CardBodyRef<Element>): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Center<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CARD_BODY_CLASS__, { [className]: !!className })}
		>
			{children}
		</Center>
	);
});

CardBody.displayName = 'CardBody';

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <CardBody<Element> {...props} />;
