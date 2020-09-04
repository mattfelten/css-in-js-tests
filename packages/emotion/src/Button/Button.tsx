import React, { forwardRef } from 'react';
import { cx } from 'emotion';
import * as styles from './Button.css.js';

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

		const ButtonClasses = cx(
			className,
			styles.button,
			{[styles.blue]: color === 'primary'},
			{[styles.grey]: color === 'default'},
			{[styles.red]: color === 'negative'},

			// { [styles['Button--solid']]: fill === 'solid' },
			{[styles.outline]: fill === 'outline'},
			{[styles.subtle]: fill === 'subtle'},

			{[styles.disabled]: props.disabled},
			{[styles.inactive]: preventClicks},
			{[styles.loading]: loading},

			{[styles.xsmall]: size === 'xsmall'},
			{[styles.small]: size === 'small'},
			{[styles.large]: size === 'large'},
		);

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
				<span className={cx(styles.content)}>
					{ children }
				</span>
			</ButtonElement>
		);
	}
);
