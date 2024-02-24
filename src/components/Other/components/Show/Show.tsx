import { Fragment } from 'react';

import { useMediaQuery } from '@common/hooks';

import type { ShowProps } from './common/types';

const Show = ({ children, query }: ShowProps): JSX.Element => {
	const isShown = useMediaQuery(query);

	return <Fragment>{isShown ? children : null}</Fragment>;
};

export default Show;
