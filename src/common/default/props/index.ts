import { ColorMode } from '@chakra-ui/react';

import { sample } from 'lodash-es';

import { colors } from '../../data/colors';
import { AppColor } from '../../types';

export const color: AppColor = sample(colors) || 'blue';
export const colorMode: ColorMode = 'light';

export const method = () => undefined;
