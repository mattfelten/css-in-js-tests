/** @jsx jsx */
import React, { forwardRef } from 'react';
import { jsx } from '@emotion/core';
import classnames from 'classnames';
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

	/** Set width of button.<br />Possible values: 'auto', a specific unit e.g 50%, 200px, 'full' */
	width?: string;
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

		return (
			<ButtonElement
				css={[
					styles.button,

					color === 'primary' && styles.blue,
					color === 'default' && styles.grey,
					color === 'negative' && styles.red,

					fill === 'outline' && styles.outline,
					fill === 'subtle' && styles.subtle,

					props.disabled && styles.disabled,
					preventClicks && styles.inactive,
					loading && styles.loading,

					size === 'xsmall' && styles.xsmall,
					size === 'small' && styles.small,
					size === 'large' && styles.large,
				]}
				disabled={preventClicks}
				role="button"
				tabIndex={getTabIndex(ButtonElement)}
				type={type}
				ref={ref}
				{...props}
			>
				<span css={styles.content}>
					{ children }
				</span>
			</ButtonElement>
		);
	}
);
