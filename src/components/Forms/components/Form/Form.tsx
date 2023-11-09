import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_METHOD__ } from '@common/constants';

import { Box } from '@components/Box';

import { __KEYS_FORM_CLASS__ } from './common/keys';
import type { FormDefaultElement, FormElement, FormEvent, FormProps, FormRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Form = forwardRef(function Form<Element extends FormElement = FormDefaultElement>(
	props: FormProps<Element>,
	ref: FormRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, onSubmit = __DEFAULT_METHOD__, ...rest } = props;

	const handleSubmit = (event: FormEvent<Element>): void => {
		event.preventDefault();
		event.stopPropagation();

		onSubmit(event);
	};

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_FORM_CLASS__, { [className]: !!className })}
			onSubmit={handleSubmit}
		>
			{children}
		</Box>
	);
});

Form.displayName = 'Form';

export default Form;
