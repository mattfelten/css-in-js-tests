## Testing different CSS-in-JS methods
See context in my [thread on Twitter](https://twitter.com/mattfelten/status/1286083668604145665?s=20)

There are a lot of ways of setting an application architecture and not all of those make sense for a distributed design system. This is a set of experiments creating a single mildly-complex component using different frameworks and methods to see how hard it is to set up on the tooling level, as well as how complex it becomes to author a component.

### Scope
- Components are written with Typescript to support better prop typing
- CSS, when applicable, should be using BEM notation for consistent syntax and collision protection
- Each method will have a Storybook story attached to verify component variations work
- Each method will have completely self-defined build steps (no shared dependencies or configs) so recreating these outside the scope of this project is easier

### CSS Methods
- **Global CSS**: Working
- **CSS Modules**: Working
- **[Emotion](https://emotion.sh)**: Working. Style overriding is much different than CSS and needs a complete overhaul.
- **[Stiches](https://stitches.dev)**: Doesn't render in Storybook. If I rename the story while Storybook is running, it appears but the component isn't found.
- **[Styled Components](https://styled-components.com)**: Not started
- **[SEEK Treat](https://seek-oss.github.io/treat/)**: Not started

Any others?

### Running the project
`npm install` will set up the project

`npm start` will build each example and run storybook

`npm run build` will build each example
