import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Center } from '@components/Layout';

import { __KEYS_CARD_FOOTER_CLASS__ } from './common/keys';
import type { CardFooterProps, CardFooterRef } from './common/types';

const CardFooter = forwardRef(function CardFooter<Element extends ElementType>(
	props: CardFooterProps<Element>,
	ref: CardFooterRef<Element>
): ReactElement {
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
