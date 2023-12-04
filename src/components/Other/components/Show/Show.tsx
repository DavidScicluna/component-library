import type { FC } from 'react';

import { useMediaQuery } from '@common/hooks';

import type { ShowProps } from './common/types';

const Show: FC<ShowProps> = ({ children, query }) => {
	const isShown = useMediaQuery(query);

	return isShown ? children : null;
};

export default Show;
