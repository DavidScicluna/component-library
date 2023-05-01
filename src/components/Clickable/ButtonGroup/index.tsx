import { createContext, forwardRef, ReactElement } from 'react';

import { ButtonGroup as CUIButtonGroup } from '@chakra-ui/react';

import {
	children as defaultChildren,
	isAttached as defaultIsAttached,
	isCompact as defaultIsCompact,
	isRound as defaultIsRound,
	spacing as defaultSpacing
} from './common/default/props';
import { ButtonGroupContext as ButtonGroupContextType, ButtonGroupProps, ButtonGroupRef } from './common/types';

export const ButtonGroupContext = createContext<ButtonGroupContextType>({
	isAttached: defaultIsAttached,
	isCompact: defaultIsCompact,
	isRound: defaultIsRound
});

const ButtonGroup = forwardRef<ButtonGroupRef, ButtonGroupProps>(function ButtonGroup(props, ref): ReactElement {
	const {
		children = defaultChildren,
		isAttached = defaultIsAttached,
		isCompact = defaultIsCompact,
		isRound = defaultIsRound,
		spacing = defaultSpacing,
		...rest
	} = props;

	return (
		<ButtonGroupContext.Provider value={{ isAttached, isCompact, isRound }}>
			<CUIButtonGroup {...rest} ref={ref} isAttached={isAttached} spacing={spacing}>
				{children}
			</CUIButtonGroup>
		</ButtonGroupContext.Provider>
	);
});

export default ButtonGroup;
