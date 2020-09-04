## Testing different CSS-in-JS methods
See context in my [thread on Twitter](https://twitter.com/mattfelten/status/1286083668604145665?s=20)

There are a lot of ways of setting an application architecture and not all of those make sense for a distributed design system. This is a set of experiments creating a single mildly-complex component using different frameworks and methods to see how hard it is to set up on the tooling level, as well as how complex it becomes to author a component.

### Scope
- Components are written with Typescript to support better prop typing
- CSS, when applicable, should be using BEM notation for consistent syntax and collision protection
- Each method will have a Storybook story attached to verify component variations work
- Each method will have completely self-defined build steps (no shared dependencies or configs) so recreating these outside the scope of this project is easier

### Experiment Methods
- Global CSS
	- Working
- CSS Modules
	- Working
- Emotion
	- Working. Style overriding is much different than CSS and needs a complete overhaul.
- Stiches
	- TODO: Doesn't render in Storybook. If I rename the story while Storybook is running, it appears but the component isn't found.
- Styled Components
- Others?
