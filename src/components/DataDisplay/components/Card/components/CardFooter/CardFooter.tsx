import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicComponentWithRef, PolymorphicDefaultElement } from '@common/types';

import { Center } from '@components/Layout';

import { __KEYS_CARD_FOOTER_CLASS__ } from './common/keys';
import type { CardFooterProps, CardFooterRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CardFooter: PolymorphicComponentWithRef = forwardRef(function CardFooter<
	Element extends ElementType = PolymorphicDefaultElement
>(props: CardFooterProps<Element>, ref: CardFooterRef<Element>): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Center<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CARD_FOOTER_CLASS__, { [className]: !!className })}
		>
			{children}
		</Center>
	);
});

CardFooter.displayName = 'CardFooter';

export default CardFooter;
