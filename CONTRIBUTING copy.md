## Contents

- [Installation and setup](#installation-and-setup)
- [Working locally on the project](#working-locally-on-the-project)
- [Creating Components](creating-components)

## Installation and setup

### Node Compatibility

**Node:** ^14

### Setting up the project locally

1. Clone the repo from Github: `git clone git@github.com:ZenSamClifford/zengenti-react-components.git`
2. Install NPM Node Modules by running `npm install` from the project root

## Working locally on the project

Run `npm run storybook` from the project root. This will run a new instance of [Storybook JS](https://storybook.js.org/) that can be accessed from `localhost:6006`.

Changes made locally are automatically compiled and the browser instance of Storybook will automaticaly refresh, hot-loading changes very quickly where possible.

## Creating components

Components should always be created within the `src/components` folder.

### Naming components

Each component should have a name that describes what it is as generically as possible and shouldn't factor in its expected location. A good example of this would be a component called 'accordion', the name is short and describes its function. A not so great name would be news-accordion because it loses semantics when used outside of the news section.

### Naming component folders

Once a component has a good name you can create a new folder within `src/components` that is based on the name. The format of this folder name should always be lowercase, with multiple words being seperated by camel case.

### Component file structure

Within the component folder you must create the following 3 files:

```
/components/
 |_ {componentName}.tsx
 |_ styles.css
```

Files within the folder should be named in camel case which means that each word in the name should have a lowercase first letter i.e. myCoolComponent.

#### {componentName}.tsx

This file is where the Component Structure is defined.

#### styles.css

This is where component styling is defined. These styles need to be very minimal, an only for functionality as these will be overwritten.

### Story Component file structure

Within the component folder you must create the following 3 files:

```
/stories/
 |_ {componentName.stories}.tsx
 |_ styles.css
```

Files within the folder should be named in camel case which means that each word in the name should have a lowercase first letter i.e. myCoolComponent.

#### {componentName.stories}.tsx

This file is where the component can be shown off / documented.

#### styles.css

This is where story styling is defined. These styles need to be for decoration to show it in it's best light.
