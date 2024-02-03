import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { CenterProps } from '@components/Layout';
import { Center } from '@components/Layout';

import { __KEYS_CARD_FOOTER_CLASS__ } from './common/keys';
import type { CardFooterProps, CardFooterRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CardFooter = forwardRef(function CardFooter<Element extends PolymorphicElementType>(
	props: CardFooterProps<Element>,
	ref: CardFooterRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Center
			{...(rest as CenterProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_CARD_FOOTER_CLASS__, { [className]: !!className })}
		>
			{children}
		</Center>
	);
});

// CardFooter.displayName = 'CardFooter';

export default CardFooter;
