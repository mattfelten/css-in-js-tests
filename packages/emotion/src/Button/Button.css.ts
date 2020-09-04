import { css, keyframes } from "emotion";
import { colorBlue, colorBlue100, colorBlue200, colorBlue300, colorBlue500, colorNeutral50, colorNeutral60, colorNeutral70, colorNeutral200, colorNeutral400, colorRed100, colorRed200, colorRed400, colorRed500, colorRed600, colorWhite, spacing1, spacing2, spacinghalf } from '../variables';

const shadowFocus = '0 0 0 3px rgba(169, 209, 255, 1)';

export const button = css`
	align-items: center;
	background-color: ${colorNeutral50};
	border: 0;
	border-radius: 3px;
	box-sizing: border-box;
	color: ${colorNeutral200};
	cursor: pointer;
	display: inline-flex;
	font-size: 16px;
	font-family: 'Helvetica';
	font-weight: bold;
	justify-content: center;
	line-height: 1;
	margin: 0;
	outline: none;
	padding: calc(${spacing2} - ${spacinghalf}) ${spacing2}; /* 12px 16px - 40px tall */
	text-align: center;
	text-decoration: none;
	text-shadow: none;
	transition: background .2s, color .2s;
	user-select: none;

	&:hover {
		background-color: ${colorNeutral60};
		text-decoration: none;
	}

	&:active { background-color: ${colorNeutral70}; }

	&:focus {
		outline: 0;
		position: relative;
		box-shadow: ${shadowFocus};
	}
`;


export const outline = css`
	background-color: transparent;
	box-shadow: inset 0 0 0 1px currentColor;
	color: ${colorNeutral200};

	&:hover {
		background-color: ${colorNeutral50};
		box-shadow: none;
		color: ${colorNeutral200};
	}

	&:active { background-color: ${colorNeutral70}; }

	&:focus { box-shadow: inset 0 0 0 1px ${colorBlue500}, ${shadowFocus}; }
`;

export const subtle = css`
	background-color: transparent;
	color: ${colorNeutral200};

	&:hover { background: rgba(${colorNeutral400}, .1); }
	&:active { background: rgba(${colorNeutral400}, .2); }
`;

export const content = css`
	align-items: center;
	display: flex;
	justify-content: center;
	pointer-events: none;
	width: 100%;
`;

// Colors
export const grey = css`
	&:hover,
	&:active,
	&:focus,
	&:focus:active {
		color: ${colorNeutral200};
	}
`;

export const blue = css`
	background-color: ${colorBlue};
	color: ${colorWhite};

	&:hover { background-color: ${colorBlue300}; }

	&:active { background-color: ${colorBlue500}; }

	&:hover,
	&:active,
	&:focus,
	&:focus:active {
		color: ${colorWhite};
	}

	&${outline} {
		background-color: transparent;
		color: ${colorBlue};

		&:hover {
			background-color: ${colorBlue};
			color: ${colorWhite};
		}

		&:active { background-color: ${colorBlue500}; }
	}

	&${subtle} {
		background-color: transparent;
		color: ${colorBlue};

		&:hover { background: ${colorBlue100}; }
		&:active { background: ${colorBlue200}; }
	}
`;

export const red = css`
	background-color: ${colorRed500};
	color: ${colorWhite};

	&:hover { background-color: ${colorRed400}; }

	&:active { background-color: ${colorRed600}; }

	&:focus { box-shadow: 0 0 0 3px ${colorRed200}; }

	&:hover,
	&:active,
	&:focus,
	&:focus:active {
		color: ${colorWhite};
	}

	&${outline} {
		background-color: transparent;
		color: ${colorRed500};

		&:hover {
			background-color: ${colorRed500};
			color: ${colorWhite};
		}

		&:active { background-color: ${colorRed600}; }

		&:focus { box-shadow: inset 0 0 0 1px ${colorRed500}, 0 0 0 3px ${colorRed200}; }
	}

	&${subtle} {
		background-color: transparent;
		color: ${colorRed500};

		&:hover { background: ${colorRed100}; }
		&:active { background: ${colorRed200}; }
	}
`;

// Disabled State
export const disabled = css`
	&,
	&${outline},
	&${subtle} {
		background: ${colorNeutral50};
		color: ${colorNeutral70};
	}

	&${outline},
	&${subtle} {
		background: transparent;
	}
`;

export const inactive = css`
	pointer-events: none;
`;

// Sizes
export const xsmall = css`
	font-size: 14px;
	padding: 6px 12px;
`;

export const small = css`
	padding: ${spacing1} ${spacing2};
`;

export const large = css`
	padding: ${spacing2} (${spacing2} + ${spacinghalf});
`;

const spin = keyframes`
	to { transform: rotate(360deg); }
`;

export const loading = css`
	opacity: .6;
	pointer-events: none;
	position: relative;

	& ${content} { opacity: 0; }

	&::before {
		content: '';
		box-sizing: border-box;
		display: inline-block;
		width: .8em;
		height: .8em;
		border-radius: 50%;
		border: .15em solid transparent;
		border-top-color: currentColor;
		animation: ${spin} .6s linear infinite;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -.4em;
		margin-left: -.4em;
	}
`;
