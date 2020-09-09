import React, { forwardRef } from 'react';
import { Base, Content } from './Button.styles';

/**
 * Button properties
 */
export interface ButtonProps extends Omit<React.HTMLProps<HTMLElement>, 'size'> {
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

/**
 * **Buttons** provide a possible user actions
 */
export const Button = forwardRef<HTMLElement, ButtonProps>(
	(
		{
			children,
			color = 'default',
			fill = 'solid',
			inactive,
			loading,
			size = 'medium',
			type = 'button',
			...props
		},
		ref
	) => {
		let element: any = 'span';

		if (type) element = 'button';
		if (props.href) element = 'a';

		const preventClicks = props.disabled || inactive || loading;

		const variants = {
			color: color,
			fill: fill,
			size: size,
		}

		const attrs = {
			as: element,
			disabled: preventClicks,
			role: "button",
			tabIndex: element !== 'button' ? 0 : null,
			ref,
			type,
			...props
		}

		return (
			<Base {...variants} {...attrs}>
				<Content>{ children }</Content>
			</Base>
		);
	}
);

Button.displayName = "Button";
