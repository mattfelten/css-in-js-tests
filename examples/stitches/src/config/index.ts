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
			$red100: '#ffece9',
			$red200: '#ffb2a0',
			$red300: '#ff745f',
			$red400: '#f94d32',
			$red500: '#e63717',
			$red600: '#bf2a00',
		},
		fontSizes: {
			$1: '12px',
			$2: '14px',
			$3: '16px',
			$4: '20px'
		},
		space: {
			$0: '0',
			$1: '8px',
			$2: '16px',
			$3: '24px',
			$4: '32px',
			$5: '48px',
			$6: '64px',
			$7: '96px',
			$8: '128px',
			$half: '4px',
		}
	},
	breakpoints: {},
	utils: {},
});
