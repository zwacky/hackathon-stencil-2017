# hackathon-stencil-2017

## WHAT IS STENCIL

- A Compiler for Web Components


## WHY STENCIL

- easily integrated into any other framework (thx to WebComponents)
- feels very 'modern' to use (thx to TS, JSX, CLI)
- lightweight and perfect to bundle components, all with styles
- backed by Ionic with beautiful UI components to use right out of the box ([example](http://ionicframework.com/docs/components/))
  - example project using [Ionic's UI components](https://github.com/ionic-team/ionic-conference-app)


## LEARN

- TypeScript
- JSX
- Virtual DOM
- Async rendering (inspired by React Fiber)
- Reactive data-binding
- WebComponents


## HEADS UP

- stencil is not prime time ready yet
- the unreleased Ionic 4 version will be entirely built with stencil


## SETUP PROJECT

```
git clone https://github.com/ionic-team/stencil-app-starter my-app
cd my-app
git remote rm origin
npm install

npm start
```


## WHERE TO START

### STEP 1: play around a bit

- discover tree structure (scss, ts, tsx)
  - .scss: styles
  - .spec.ts: usually tests
  - .tsx: components using TypeScript's JSX version
  - .ts: helper classes (can be used by components)
- check out live reloads
- 1) try to add another button in **app-home.tsx** that will console.log upon click (`<button onClick={this.doSomething}>test me</button>`)
- 2) create a fresh component that takes parameters https://github.com/ionic-team/stencil#creating-components
  - takes your first and last name


### STEP 2: fetching data & 3rd party libraries

- there is no direct integration of 3rd party libraries (e.g. fetch, axios, rxJS, ...)
  - 3rd party libraries need to be present outside the stencil component (e.g. load it directly in **index.html**)
  - going to use `window.fetch` that is ~80% adopted unpolyfilled (no IE)
- let's create a component that `window.fetch`es our backend services for data and display them within it


### STEP 3: let's use stencil's beauty power

- `npm install @ionic/core@next --save`
- add `{ name: '@ionic/core'},` to stencil.config.js @ config.collections
- checkout and use [all these 29 components!](http://ionicframework.com/docs/components/)
  - from Ionic 3 to 4 there are some minor differences in using them (check [this example project](https://github.com/jgw96/stencil-beer) for currently used components)

```
<ion-list>
  {['item', 'another one', 'yup!'].map(item => {
    return <ion-item>
      { item }
    </ion-item>;
  })}
</ion-list>
```



## RESOURCES

- https://stenciljs.com
- https://github.com/ionic-team/stencil (issues)
- https://jsx.github.io/doc.html (JSX docs)
- https://github.com/jgw96/stencil-beer (used UI components)
