import type { ReactNode } from 'react';

import type { Query } from '@common/hooks/useMediaQuery';

export type ShowProps = {
	children: ReactNode;
	query: Query;
};
