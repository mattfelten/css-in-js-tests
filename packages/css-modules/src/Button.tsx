import React, { FC, HTMLElement } from 'react';
import classnames from 'classnames';
import styles from './Button.scss';

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

	const ButtonClasses = classnames(className, styles.Button, {
		[styles['Button--blue']]: size === 'primary',
		[styles['Button--grey']]: size === 'default',
		[styles['Button--red']]: size === 'negative',

		[styles['Button--solid']]: fill === 'solid',
		[styles['Button--outline']]: fill === 'outline',
		[styles['Button--subtle']]: fill === 'subtle',

		[styles['Button--disabled']]: props.disabled,
		[styles['Button--inactive']]: preventClicks,
		[styles['Button--loading']]: loading,

		[styles['Button--xsmall']]: size === 'xsmall',
		[styles['Button--small']]: size === 'small',
		[styles['Button--large']]: size === 'large',
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
			<span className={styles.Button__content}>
				{ children }
			</span>
		</ButtonElement>
	);
};

let _Button = React.forwardRef(Button);
export {_Button as Button};
