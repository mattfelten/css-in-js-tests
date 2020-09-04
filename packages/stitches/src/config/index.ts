import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
	prefix: '',
	tokens: {
		colors: {
			$white: '#ffffff', // (alias)
			$black: '#141414', // (alias)
			$blue: '#2270ee', // (alias)
			$blueGrey: '#8c9ca5', // (alias)
			$red: '#f94d32', // (alias)
			$blue100: '#ecf4fd',
			$blue200: '#a9d1ff',
			$blue300: '#3684f5',
			$blue400: '#2270ee',
			$blue500: '#1360d9',
			$blue600: '#004cc3',
			$neutral0: '#ffffff',
			$neutral10: '#fcfcfc',
			$neutral20: '#fafafa',
			$neutral30: '#f7f7f7',
			$neutral40: '#f5f5f5',
			$neutral50: '#eeeeee',
			$neutral60: '#dfe0e1',
			$neutral70: '#bcbcbd',
			$neutral80: '#9e9ea0',
			$neutral90: '#737475',
			$neutral100: '#606162',
			$neutral200: '#444445',
			$neutral300: '#2d2e31',
			$neutral400: '#141414',
			$blueGrey100: '#eaeff2',
			$blueGrey200: '#d0d8dd',
			$blueGrey300: '#b4c1c8',
			$blueGrey400: '#8c9ca5',
			$blueGrey500: '#6a7a85',
			$blueGrey600: '#576671',
			$Red100: '#ffece9',
			$Red200: '#ffb2a0',
			$Red300: '#ff745f',
			$Red400: '#f94d32',
			$Red500: '#e63717',
			$Red600: '#bf2a00',
		},
		space: {
			$0: '0',
			$1: '8',
			$2: '16',
			$3: '24',
			$4: '32',
			$5: '48',
			$6: '64',
			$7: '96',
			$8: '128',
			$half: '4',
		}
	},
	breakpoints: {},
	utils: {},
});
