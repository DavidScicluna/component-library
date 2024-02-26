import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { CenterProps } from '@components/Layout';
import { Center } from '@components/Layout';

import { KEYS_CARD_BODY_CLASS } from './common/keys';
import type { CardBodyProps, CardBodyRef } from './common/types';

const CardBody = forwardRef(function CardBody<Element extends PolymorphicElementType>(
	props: CardBodyProps<Element>,
	ref: CardBodyRef<Element>
): JSX.Element {
	const { children, className = DEFAULT_CLASSNAME, ...rest } = props;

	return (
		<Center
			{...(rest as CenterProps<Element>)}
			ref={ref}
			className={classNames(KEYS_CARD_BODY_CLASS, { [className]: !!className })}
		>
			{children}
		</Center>
	);
});

// CardBody.displayName = 'CardBody';

export default CardBody;
