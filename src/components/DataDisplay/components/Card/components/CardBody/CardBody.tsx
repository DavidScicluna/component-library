import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Center } from '@components/Layout';

import { __KEYS_CARD_BODY_CLASS__ } from './common/keys';
import type { CardBodyProps, CardBodyRef } from './common/types';

const CardBody = forwardRef(function CardBody<Element extends ElementType>(
	props: CardBodyProps<Element>,
	ref: CardBodyRef<Element>
): ReactElement {
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

export default CardBody;
