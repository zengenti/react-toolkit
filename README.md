![React Toolkit](/readme.png)

This project aims to to create a home for components and utilities created by the Zengenti team, and wider Contensis developer community, to reduce development time spent and establish standardisation.

## Installation

This project is available as an [npm package](https://www.npmjs.com/package/@zengenti/react-toolkit). You can install the toolkit in your project with the following command:

`npm i @zengenti/react-toolkit`

You can then import components or functions into your project. Here is a basic example using toolkit's `truncateString` utility:

```
import React from 'react;
import { truncateString } from '@zengenti/react-toolkit';

const MyComponent = (title, description) => {
  return (
    <div>
      <h2>{title}</h2>
        <p>{truncateString({ string: description, length: 8 })}</p>
    </div>
  )
}
```

## Contributing

Suitable additions to this library are those that are considered as frequently developed/requested components. However all are welcome to contribute to this project, whether this be to modify an existing item or to add new item to the library.

To learn more about contributing please read [CONTRIBUTING.md](CONTRIBUTING.md).

## Components

This project contains unembellished ‘vanilla’ components that can be imported for use on projects or to act as starting templates.

Styling is kept purposefully limited and unopinionated, these components are created to get something working.

As is their intended state, the components contained within this project are purposefully not associated with Contensis and once imported for use on a project, will need to be mapped to associate with data in Contensis.

## Utilties

This project also contains a collection of commonly used utility functions that can be imported for use on projects.

Whilst most utilities are generic there may be instances of utilities that are designed specifically for usage with Contensis.

Where necessary we defer to other libaries instead of our own for better support. To that end we have compiled a list of [recommended resources](RESOURCES.md).
