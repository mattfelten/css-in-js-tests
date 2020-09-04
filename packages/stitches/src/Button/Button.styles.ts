import { styled } from '../config';

const shadowFocus = '0 0 0 3px rgba(169, 209, 255, 1)';

export const Base = styled('button', {
	alignItems: 'center',
	backgroundColor: '$neutral50',
	border: 0,
	borderRadius: 3,
	boxSizing: 'border-box',
	color: '$neutral200',
	cursor: 'pointer',
	display: 'inline-flex',
	fontSize: 16,
	fontFamily: 'Helvetica',
	fontWeight: 'bold',
	justifyContent: 'center',
	lineHeight: 1,
	margin: 0,
	outline: 'none',
	padding: '12 $2', /* 12px 16px - 40px tall */
	textAlign: 'center',
	textDecoration: 'none',
	textShadow: 'none',
	transition: 'background .2s, color .2s',
	userSelect: 'none',

	':hover': {
		backgroundColor: '$neutral60',
		textDecoration: 'none',
	},

	':active': {
		backgroundColor: '$neutral70',
	},

	':focus': {
		outline: 0,
		position: 'relative',
		boxShadow: shadowFocus,
	},
});

Base.displayName = "Button Base";

export const Content = styled('span', {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'center',
	pointerEvents: 'none',
	width: '100%',
});

Content.displayName = "Button Content";
