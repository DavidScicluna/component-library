import { Style } from '../../../../../../../../../../common/types';

export default (): Style => ({
	'cursor': 'not-allowed',
	'pointerEvents': 'none',

	'& .ds-cl-tabs-tab-stack': { opacity: 0.5 }
});
