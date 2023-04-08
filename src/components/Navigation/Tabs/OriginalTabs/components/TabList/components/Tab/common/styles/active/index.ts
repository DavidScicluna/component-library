import { Style } from '../../../../../../../../../../../common/types';

export default (): Style => {
	return {
		'cursor': 'default',
		'pointerEvents': 'none',

		'& .ds-cl-tabs-tab-stack': { opacity: 1 }
	};
};
