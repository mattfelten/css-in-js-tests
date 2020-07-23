## Testing different CSS-in-JS methods
See context in my [thread on Twitter](https://twitter.com/mattfelten/status/1286083668604145665?s=20)

There are a lot of ways of setting an application architecture and not all of those make sense for a distributed design system. This is a set of experiments creating a single mildly-complex component using different frameworks and methods to see how hard it is to set up on the tooling level, as well as how complex it becomes to author a component.

### Scope
- Components are written with Typescript to support better prop typing
- CSS, when applicable, should be using BEM notation for consistent syntax and collision protection

### Experiment Methods
- Global CSS
- CSS Modules
- Styled Components
- Emotion
- Others?
