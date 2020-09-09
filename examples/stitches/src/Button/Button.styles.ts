import { styled } from '../config';

const shadowFocus = '0 0 0 3px rgba(169, 209, 255, 1)';

export const Base = styled('button', {
	alignItems: 'center',
	border: 0,
	borderRadius: 3,
	boxSizing: 'border-box',
	cursor: 'pointer',
	display: 'inline-flex',
	fontSize: '$3',
	fontFamily: 'Helvetica',
	fontWeight: 'bold',
	justifyContent: 'center',
	lineHeight: 1,
	margin: 0,
	outline: 'none',
	textAlign: 'center',
	textDecoration: 'none',
	textShadow: 'none',
	transition: 'background .2s, color .2s',
	userSelect: 'none',

	':hover': {
		textDecoration: 'none',
	},

	':focus': {
		outline: 0,
		position: 'relative',
		boxShadow: shadowFocus,
	},

	variants: {
		size: {
			xsmall: {
				fontSize: '$2',
				padding: '6px 12px',
			},
			small: {
				padding: '$1 $2',
			},
			medium: {
				padding: 'calc(var(--space-2) - var(--space-half)) $2', /* 12px 16px - 40px tall */
			},
			large: {
				padding: '$2 calc(var(--space-2) + var(--space-half))',
			}
		},
		color: {
			default: {
				color: '$neutral200'
			},
			primary: {},
			negative: {
				':focus': {
					boxShadow: '0 0 0 3px $red200'
				}
			}
		},
		fill: {
			solid: {},
			outline: {
				background: 'transparent',
				boxShadow: 'inset 0 0 0 1px currentColor'
			},
			subtle: {
				background: 'transparent'
			}
		}
	}
});

Base.displayName = "Button Base";

// * Solid Grey (Default) * //
Base.compoundVariant(
	{
		color: 'default',
		fill: 'solid',
	},
	{
		background: '$neutral50',

		':hover': {
			background: '$neutral60',
		},

		':active': {
			background: '$neutral70',
		},
	}
);

// * Solid Blue * //
Base.compoundVariant(
	{
		color: 'primary',
		fill: 'solid',
	},
	{
		background: '$blue',
		color: '$white',

		':hover': {
			background: '$blue300',
		},

		':active': {
			background: '$blue500',
		},
	}
);

// * Solid Red * //
Base.compoundVariant(
	{
		color: 'negative',
		fill: 'solid',
	},
	{
		background: '$red500',
		color: '$white',

		':hover': {
			background: '$red400',
		},

		':active': {
			background: '$red600',
		},
	}
);

// * Outline Grey * //
Base.compoundVariant(
	{
		color: 'default',
		fill: 'outline',
	},
	{
		':hover': {
			background: '$neutral50',
			boxShadow: 'none'
		},

		':active': {
			background: '$neutral70'
		},

		':focus': {
			boxShadow: 'inset 0 0 0 1px $blue500, ' + shadowFocus
		}
	}
);

// * Outline Blue * //
Base.compoundVariant(
	{
		color: 'primary',
		fill: 'outline',
	},
	{
		color: '$blue',

		':hover': {
			background: '$blue',
			color: '$white'
		},

		':active': {
			background: '$blue500',
		},
	}
);

// * Outline Red * //
Base.compoundVariant(
	{
		color: 'negative',
		fill: 'outline',
	},
	{
		color: '$red500',

		':hover': {
			background: '$red500',
			color: '$white'
		},

		':active': {
			background: '$red600',
		},
	}
);

// * Subtle Grey * //
Base.compoundVariant(
	{
		color: 'default',
		fill: 'subtle',
	},
	{
		':hover': {
			background: 'rgba(var(--colors-neutral400), .1)',
		},

		':active': {
			background: 'rgba(var(--colors-neutral400), .2)',
		},
	}
);

// * Subtle Blue * //
Base.compoundVariant(
	{
		color: 'primary',
		fill: 'subtle',
	},
	{
		color: '$blue',

		':hover': {
			background: '$blue100',
		},

		':active': {
			background: '$blue200',
		},
	}
);

// * Subtle Red * //
Base.compoundVariant(
	{
		color: 'negative',
		fill: 'subtle',
	},
	{
		color: '$red500',

		':hover': {
			background: '$red100'
		},

		':active': {
			background: '$red200'
		},
	}
);

export const Content = styled('span', {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'center',
	pointerEvents: 'none',
	width: '100%',
});

Content.displayName = "Button Content";
