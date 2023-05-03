import { FC } from 'react';

import { useConst, VisuallyHidden, VStack } from '@chakra-ui/react';

import { useTheme } from '../../../../../../common/hooks';
import Collapse from '../../../../../Transitions/Collapse';
import {
	getConfig as getTransitionConfig,
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings
} from '../../../../../Transitions/common/utils';
import { useCollapsibleCardContext } from '../../common/hooks';
import { CollapsibleCardMouseEvent } from '../../common/types';
import CollapsibleCardDivider from '../CollapsibleCardDivider';

import { CollapsibleCardStackProps } from './common/types';

const CollapsibleCardStack: FC<CollapsibleCardStackProps> = (props) => {
	const theme = useTheme();

	const { isDivisible, isOpen, onHover, spacing: defaultSpacing } = useCollapsibleCardContext();

	const { children, onMouseEnter, onMouseLeave, spacing = defaultSpacing, ...rest } = props;

	const duration = useConst(getTransitionDuration({ theme, duration: 'slow' }));
	const easing = useConst(getTransitionEasings({ theme }));
	const config = useConst({ ...getTransitionConfig({ theme }), duration, easing });

	const handleMouseEnter = (event: CollapsibleCardMouseEvent): void => {
		if (typeof onHover.on === 'function') {
			onHover.on();
		}

		if (onMouseEnter) {
			onMouseEnter(event);
		}
	};

	const handleMouseLeave = (event: CollapsibleCardMouseEvent): void => {
		if (typeof onHover.off === 'function') {
			onHover.off();
		}

		if (onMouseLeave) {
			onMouseLeave(event);
		}
	};

	return (
		<Collapse in={isOpen} transition={{ enter: { ...config }, exit: { ...config } }} style={{ width: '100%' }}>
			<VStack
				{...rest}
				width='100%'
				divider={isDivisible ? <CollapsibleCardDivider /> : undefined}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				spacing={spacing}
			>
				<VisuallyHidden>
					<span />
				</VisuallyHidden>

				{children}
			</VStack>
		</Collapse>
	);
};

export default CollapsibleCardStack;
