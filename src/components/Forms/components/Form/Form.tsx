import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_METHOD } from '@common/constants';
import type { PolymorphicFormEvent } from '@common/types';

import { Box } from '@components/Box';

import { DEFAULT_FORM_AS } from './common/constants';
import { KEYS_FORM_CLASS } from './common/keys';
import type { FormElement, FormProps, FormRef } from './common/types';

const Form = forwardRef(function Form<Element extends FormElement>(
	props: FormProps<Element>,
	ref: FormRef<Element>
): JSX.Element {
	const { children, as = DEFAULT_FORM_AS, className = DEFAULT_CLASSNAME, onSubmit = DEFAULT_METHOD, ...rest } = props;

	const handleSubmit = (event: PolymorphicFormEvent): void => {
		event.preventDefault();
		event.stopPropagation();

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onSubmit(event as any);
	};

	return (
		<Box
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_FORM_CLASS, { [className]: !!className })}
			onSubmit={handleSubmit}
		>
			{children}
		</Box>
	);
});

// Form.displayName = 'Form';

export default Form;
