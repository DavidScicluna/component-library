import { Style } from '../../../../../../common/types';
import { transform } from '../../default/sizes';

export default (): Style => ({
	borderTopWidth: `${transform.hover}px`,
	borderBottomWidth: `${transform.active}px`
});
