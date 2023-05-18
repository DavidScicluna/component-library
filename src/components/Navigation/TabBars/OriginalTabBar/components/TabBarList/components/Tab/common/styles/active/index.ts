import { Style } from '../../../../../../../../../../../common/types';

export default (): Style => {
	return {
		'cursor': 'default',
		'pointerEvents': 'none',

		'& .ds-cl-tab-bar-tab-stack': { opacity: 1 }
	};
};
