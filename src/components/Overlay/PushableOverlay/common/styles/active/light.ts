import { Style } from '../../../../../../common/types';
import { transform } from '../../default/sizes';

export default (): Style => ({
	borderTopWidth: `${transform.default}px`,
	borderBottomWidth: `${transform.active}px`
});
