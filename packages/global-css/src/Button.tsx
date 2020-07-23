import React, { FC, HTMLElement } from 'react';
import classnames from 'classnames';

/**
 * Button properties
 */
export interface ButtonProps extends HTMLElement {
	/** Background color */
	color?: 'primary' | 'default' | 'negative';

	/** Disabled button, unclicable */
	disabled?: boolean;

	/** Set background type */
	fill?: 'solid' | 'outline' | 'subtle';

	/** Unclicable button */
	inactive?: boolean;

	/** Button with loading indicator */
	loading?: boolean;

	/** Set size of the button */
	size?: 'xsmall' | 'small' | 'medium' | 'large';

	/** Set width of button.<br />Possible values: 'auto', a specific unit e.g 50%, 200px, 'full' */
	width?: string;
}

const getTabIndex = (el: any) => {
	return el !== 'button' ? 0 : null;
};

/**
 * **Buttons** provide a possible user actions
 */
const Button: FC<ButtonProps> = (
	{
		children,
		className,
		color = 'default',
		fill = 'solid',
		inactive,
		loading,
		size = 'medium',
		type = 'button',
		width = 'auto',
		...props
	},
	ref
) => {
	let ButtonElement: any = 'span';

	if (type) ButtonElement = 'button';
	if (props.href) ButtonElement = 'a';

	const preventClicks = props.disabled || inactive || loading;

	const ButtonClasses = classnames('Button', className, {
		'Button--blue': size === 'primary',
		'Button--grey': size === 'default',
		'Button--red': size === 'negative',

		'Button--solid': fill === 'solid',
		'Button--outline': fill === 'outline',
		'Button--subtle': fill === 'subtle',

		'Button--disabled': props.disabled,
		'Button--inactive': preventClicks,
		'Button--loading': loading,

		'Button--xsmall': size === 'xsmall',
		'Button--small': size === 'small',
		'Button--large': size === 'large',
	});

	return (
		<ButtonElement
			className={ButtonClasses}
			disabled={preventClicks}
			role="button"
			tabIndex={getTabIndex(ButtonElement)}
			type={type}
			ref={ref}
			{...props}
		>
			<span className="Button__content">
				{ children }
			</span>
		</ButtonElement>
	);
};

let _Button = React.forwardRef(Button);
export {_Button as Button};
