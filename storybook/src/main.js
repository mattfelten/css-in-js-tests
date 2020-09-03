const typescript = {
	check: true,
	docgen: 'react-docgen-typescript'
};

module.exports = {
	stories: ['./stories/**/*'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-knobs',
	],
	typescript,
};
