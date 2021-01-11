# ng-streets

A utility library for retrieving Nigerian states, local government areas and street data.

## Getting Started

### Prerequisites

- Node (>=8.10.0)
- npm or Yarn

### Installing

Add the package to your project from the npm registry using `npm` or `yarn` with

```
npm install ng-streets
```
or
```
yarn add ng-streets
```

## How to use

<details>
<summary>Data types</summary>

```ts
State: <name: string, geoPol: string, areas: Array<Area>>
Area: <name: string, streets: Array<Street>>
Street: <name:string>
```
</details>


### Methods

<details>
<summary>getStates</summary>
Returns an array of the contained data of every state in Nigeria.

```js
const { getStates } = require('ng-streets');

const data = getStates();
console.log(data);
/*
[
  {name: 'Abia', geoPol: 'South East', areas; [...]},
  ...,
 {name: 'Zamfara', geoPol: 'North West', areas; [...]}
]
*/
```
</details>

<details>
<summary>getState</summary>
Returns the contained data of a state in the dataset.

* **name** name of the state

```js
const { getState } = require('ng-streets');

const data = getState('lagos');
console.log(data);
// {name: 'Lagos', geoPol: 'South West', areas; [...]}
```
</details>



## Contributing

Please read [CONTRIBUTING.md](https://github.com/sudo-kaizen/ng-streets/CONTRIBUTING.MD) for details on our code of conduct, and the process for submitting pull requests to us.

To add street data without modifying the codebase, please fill the [Nigerian Streets Data form](https://forms.gle/2SdvUuEGPudnPFpY6).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/sudo-kaizen/ng-streets/tags).

## Authors

* **Orim Dominic Adah** - *Initial work* - [sudo-kaizen](https://github.com/sudo-kaizen)

See also the list of [contributors](https://github.com/sudo-kaizen/ng-streets/contributors) who participated in this project.