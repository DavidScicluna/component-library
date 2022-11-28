import { FC } from 'react';

import { Tab as CUITab, HStack, Center } from '@chakra-ui/react';

import merge from 'lodash/merge';
import { dataAttr } from '@chakra-ui/utils';
import { useElementSize } from 'usehooks-ts';
import { omit } from 'lodash';

import { isDisabled as defaultIsDisabled } from '../../../../common/data/defaultPropValues';
import { useTheme } from '../../../../../../../common/hooks';
import { getSizeConfig } from '../../../../common/utils';
import { useTabsContext } from '../../../../common/hooks';

import { isActive as defaultIsActive, isSelected as defaultIsSelected } from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { TabProps } from './types';

const Tab: FC<TabProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, isDisabled: isTabDisabled, isFitted, size } = useTabsContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		label,
		renderLeft,
		renderRight,
		isActive = defaultIsActive,
		isDisabled = defaultIsDisabled,
		isSelected = defaultIsSelected,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, isFullWidth: isFitted, isSelected, size });

	const handleReturnSpacing = (): number => getSizeConfig({ size }).spacing;

	return (
		<CUITab
			{...omit({ ...rest }, 'panelId')}
			aria-disabled={isTabDisabled || isDisabled}
			data-active={dataAttr(isActive)}
			isDisabled={isTabDisabled || isDisabled}
			isSelected={isSelected}
			sx={merge(style.tab, sx)}
			_disabled={style.disabled}
			_active={style.active}
		>
			<HStack
				className='ds-cl-tabs-tab-stack'
				width='100%'
				alignItems='inherit'
				justifyContent='inherit'
				spacing={handleReturnSpacing()}
			>
				{renderLeft && renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}

				<Center ref={childrenRef} as='span'>
					{label}
				</Center>

				{renderRight && renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
			</HStack>
		</CUITab>
	);
};

export default Tab;
