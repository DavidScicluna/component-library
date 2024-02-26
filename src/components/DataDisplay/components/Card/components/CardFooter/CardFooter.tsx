import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { CenterProps } from '@components/Layout';
import { Center } from '@components/Layout';

import { KEYS_CARD_FOOTER_CLASS } from './common/keys';
import type { CardFooterProps, CardFooterRef } from './common/types';

const CardFooter = forwardRef(function CardFooter<Element extends PolymorphicElementType>(
	props: CardFooterProps<Element>,
	ref: CardFooterRef<Element>
): JSX.Element {
	const { children, className = DEFAULT_CLASSNAME, ...rest } = props;

	return (
		<Center
			{...(rest as CenterProps<Element>)}
			ref={ref}
			className={classNames(KEYS_CARD_FOOTER_CLASS, { [className]: !!className })}
		>
			{children}
		</Center>
	);
});

// CardFooter.displayName = 'CardFooter';

export default CardFooter;
