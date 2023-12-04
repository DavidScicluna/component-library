import type { FC } from 'react';

import { useMediaQuery } from '@common/hooks';

import type { HideProps } from './common/types';

const Hide: FC<HideProps> = ({ children, query }) => {
	const isHidden = useMediaQuery(query);

	return isHidden ? children : null;
};

export default Hide;
