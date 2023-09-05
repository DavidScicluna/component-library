import { useMemo } from 'react';

import type { ThemeAppColorMode } from '@common/types';
import type { GetAmountTypeArr, GetAmountTypeObj } from '@common/utils/amount';
import { getAmount } from '@common/utils/amount';

import useAppTheme from './useAppTheme';

type UseGetAmountProps = {
	colorMode?: ThemeAppColorMode;
	types?: GetAmountTypeArr;
};

const __DEFAULT_GET_AMOUNT_TYPES__: GetAmountTypeArr = ['active', 'back', 'hover', 'placeholder', 'selection'];

const useGetAmount = (props: UseGetAmountProps) => {
	const { colorMode: __DEFAULT_GET_COLOR_COLORMODE__ } = useAppTheme();

	const { colorMode = __DEFAULT_GET_COLOR_COLORMODE__, types = __DEFAULT_GET_AMOUNT_TYPES__ } = props;

	const amount = useMemo<GetAmountTypeObj>(() => {
		return types
			.map((type) => {
				const t = getAmount(colorMode, type);
				return { key: type, value: t };
			})
			.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {}) as GetAmountTypeObj;
	}, [colorMode, types]);

	return amount;
};

export default useGetAmount;
