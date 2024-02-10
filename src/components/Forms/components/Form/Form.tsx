import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_METHOD__ } from '@common/constants';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { __DEFAULT_FORM_AS__ } from './common/constants';
import { __KEYS_FORM_CLASS__ } from './common/keys';
import type { FormElement, FormEvent, FormProps, FormRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Form = forwardRef(function Form<Element extends FormElement>(
	props: FormProps<Element>,
	ref: FormRef<Element>
): JSX.Element {
	const {
		children,
		as = __DEFAULT_FORM_AS__,
		className = __DEFAULT_CLASSNAME__,
		onSubmit = __DEFAULT_METHOD__,
		...rest
	} = props;

	const handleSubmit = (event: FormEvent<Element>): void => {
		event.preventDefault();
		event.stopPropagation();

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onSubmit(event as any);
	};

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_FORM_CLASS__, { [className]: !!className })}
			onSubmit={handleSubmit}
		>
			{children}
		</Box>
	);
});

// Form.displayName = 'Form';

export default Form;
