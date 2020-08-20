import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { Button } from '@a/css-modules';

export default {
	title: 'CSS Modules',
	component: Button
}

export const button = (args) => <Button {...args} />;
button.args = {
	children: 'Button Label'
}

export const knobs = () => (
	<Button
		color={select(
			'color',
			['primary', 'default', 'negative'],
			'default'
		)}
		disabled={boolean('disabled', false)}
		fill={select('fill', ['solid', 'outline', 'subtle'], 'solid')}
		loading={boolean('loading', false)}
		size={select(
			'size',
			['large', 'medium', 'small', 'xsmall'],
			'medium'
		)}
		full={boolean('full', false)}
		type={select('type', ['', 'button', 'submit', 'reset'], 'button')}
		href={select(
			'href',
			['', 'https://anvil-react.servicetitan.com/'],
			''
		)}
		iconName={select('icon', [null, 'add', 'edit', 'more_vert'], null)}
	>
		{select('children', ['Button', null], 'Button')}
	</Button>
);
