import type { ReactNode } from 'react';

import type { Query } from '@common/hooks/useMediaQuery';

export type HideProps = {
	children: ReactNode;
	query: Query;
};
