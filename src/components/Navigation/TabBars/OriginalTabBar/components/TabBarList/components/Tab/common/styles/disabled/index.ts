import { Style } from '../../../../../../../../../../../common/types';

export default (): Style => ({
	'cursor': 'not-allowed',
	'pointerEvents': 'none',

	'& .ds-cl-tab-bar-tab-stack': { opacity: 0.5 }
});
