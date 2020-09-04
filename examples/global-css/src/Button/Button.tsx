import React, { forwardRef } from 'react';
import classnames from 'classnames';

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
}

const getTabIndex = (el: any) => {
	return el !== 'button' ? 0 : null;
};

/**
 * **Buttons** provide a possible user actions
 */
export const Button = forwardRef<HTMLElement, ButtonProps>(
	(
		{
			children,
			className,
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
		let ButtonElement: any = 'span';

		if (type) ButtonElement = 'button';
		if (props.href) ButtonElement = 'a';

		const preventClicks = props.disabled || inactive || loading;

		const ButtonClasses = classnames('Button', className, {
			'Button--blue': color === 'primary',
			'Button--grey': color === 'default',
			'Button--red': color === 'negative',

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
	}
);
