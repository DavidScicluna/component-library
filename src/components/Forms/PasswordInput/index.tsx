import { forwardRef, ReactElement, useMemo } from 'react';

import { useBoolean } from '@chakra-ui/react';

import IconButton from '../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import Input from '../Input';

import { PasswordInputProps, PasswordInputRef } from './common/types';

const PasswordInput = forwardRef<PasswordInputRef, PasswordInputProps>(function PasswordInput(
	props,
	ref
): ReactElement {
	const { color, colorMode, isVisible: isVisibleProp, onVisibilityChange, size, ...rest } = props;

	const [isVisibleHook, setIsVisibleHook] = useBoolean();

	const isVisible = useMemo(() => isVisibleProp || isVisibleHook, [isVisibleProp, isVisibleHook]);

	const handleVisibility = (): void => {
		if (isVisibleProp && onVisibilityChange) {
			if (isVisibleProp) {
				onVisibilityChange(false);
			} else {
				onVisibilityChange(true);
			}
		} else {
			if (isVisibleHook) {
				setIsVisibleHook.off();
			} else {
				setIsVisibleHook.on();
			}
		}
	};

	return (
		<Input
			{...rest}
			ref={ref}
			color={color}
			colorMode={colorMode}
			type={isVisible ? 'text' : 'password'}
			renderRight={({ color, colorMode }) => (
				<IconButton
					color={color}
					colorMode={colorMode}
					aria-label=''
					onClick={handleVisibility}
					size='xs'
					variant='icon'
					sx={{ 'p': 0.5, '*': { p: 0 } }}
				>
					<IconButtonIcon icon={isVisible ? 'visibility_off' : 'visibility'} />
				</IconButton>
			)}
			size={size}
		/>
	);
});

export default PasswordInput;
