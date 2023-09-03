import type { Style } from '@common/types';

type UseVisuallyHiddenStylesReturn = Style;

const useVisuallyHiddenStyles = (): UseVisuallyHiddenStylesReturn => {
	return {
		width: '1px',
		height: '1px',
		position: 'absolute',
		overflow: 'hidden',
		border: '0',
		clip: 'rect(0, 0, 0, 0)',
		whiteSpace: 'nowrap',
		margin: '-1px',
		padding: '0'
	};
};

export default useVisuallyHiddenStyles;
