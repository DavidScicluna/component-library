import { ReactElement, useMemo } from 'react';

import { Text } from '@chakra-ui/react';

import CollapsibleCard from '../../../../DataDisplay/CollapsibleCards/OriginalCollapsibleCard';
import { CollapsibleCardMouseEvent } from '../../../../DataDisplay/CollapsibleCards/OriginalCollapsibleCard/common/types';
import CollapsibleCardBody from '../../../../DataDisplay/CollapsibleCards/OriginalCollapsibleCard/components/CollapsibleCardBody';
import CollapsibleCardFooter from '../../../../DataDisplay/CollapsibleCards/OriginalCollapsibleCard/components/CollapsibleCardFooter';
import CollapsibleCardHeader from '../../../../DataDisplay/CollapsibleCards/OriginalCollapsibleCard/components/CollapsibleCardHeader';
import CollapsibleCardStack from '../../../../DataDisplay/CollapsibleCards/OriginalCollapsibleCard/components/CollapsibleCardStack';
import { useAccordionsContext } from '../../common/hooks';
import { toggleAccordion } from '../../common/utils';

import { AccordionProps } from './common/types';

const Accordion = <D,>(props: AccordionProps<D>): ReactElement => {
	const { color, colorMode, isDisabled: defaultIsDisabled, opened, onSetOpened } = useAccordionsContext<D>();

	const { children, id, title, subtitle, actions, footer, isDisabled = defaultIsDisabled, onClick, ...rest } = props;

	const isOpen = useMemo<boolean>((): boolean => {
		return !isDisabled && opened.some((accordion: unknown) => accordion === id);
	}, [isDisabled, opened]);

	const handleClick = (event: CollapsibleCardMouseEvent): void => {
		if (typeof onSetOpened === 'function') {
			onSetOpened(toggleAccordion({ id, opened }));
		}

		if (onClick) {
			onClick(event);
		}
	};

	return (
		<CollapsibleCard
			{...rest}
			id={id}
			width='100%'
			color={color}
			colorMode={colorMode}
			isClickable
			isDisabled={isDisabled}
			isOpen={isOpen}
			onClick={handleClick}
		>
			<CollapsibleCardHeader
				renderTitle={(props) => <Text {...props}>{title}</Text>}
				renderSubtitle={subtitle ? (props) => <Text {...props}>{subtitle}</Text> : undefined}
				actions={actions}
			/>
			<CollapsibleCardStack>
				<CollapsibleCardBody>{children}</CollapsibleCardBody>
				{footer ? <CollapsibleCardFooter>{footer}</CollapsibleCardFooter> : null}
			</CollapsibleCardStack>
		</CollapsibleCard>
	);
};

export default Accordion;
