import { Fragment } from 'react';

import { useMediaQuery } from '@common/hooks';

import type { HideProps } from './common/types';

const Hide = ({ children, query }: HideProps): JSX.Element => {
	const isHidden = useMediaQuery(query);

	return <Fragment>{isHidden ? children : null}</Fragment>;
};

export default Hide;
