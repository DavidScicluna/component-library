import { createContext, forwardRef,ReactElement } from 'react';

import { ButtonGroup as CUIButtonGroup } from '@chakra-ui/react';

import {
	children as defaultChildren,
	isAttached as defaultIsAttached,
	size as defaultSize,
	spacing as defaultSpacing
} from './common/data/defaultPropValues';
import { ButtonGroupContext as ButtonGroupContextType, ButtonGroupProps,ButtonGroupRef } from './types';

export const ButtonGroupContext = createContext<ButtonGroupContextType>({
	isAttached: defaultIsAttached,
	size: defaultSize
});

const ButtonGroup = forwardRef<ButtonGroupRef, ButtonGroupProps>(function ButtonGroup(props, ref): ReactElement {
	const {
		children = defaultChildren,
		isAttached = defaultIsAttached,
		size = defaultSize,
		spacing = defaultSpacing,
		...rest
	} = props;

	return (
		<ButtonGroupContext.Provider value={{ isAttached, size }}>
			<CUIButtonGroup {...rest} ref={ref} isAttached={isAttached} spacing={spacing}>
				{children}
			</CUIButtonGroup>
		</ButtonGroupContext.Provider>
	);
});

export default ButtonGroup;
