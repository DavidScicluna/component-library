import { ColorMode } from '@chakra-ui/react';

import { sample } from 'lodash-es';

import { Color } from '../../../theme/types';
import { colors } from '../../data/colors';

export const color: Color = sample(colors) || 'blue';
export const colorMode: ColorMode = 'light';

export const method = () => undefined;
