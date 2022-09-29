# job-search

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# LEARNING NOTES

## Tools used for testing

1. Jest - js testing library created by facebook and is framework agnostic

   - Flags to add for JEST (--watch and --coverage)
     - (--watch) will run in watch mode (constant running process) and watch file for changes and triggers a fresh run of tests.
     - (--coverage) enables test coverage. Will tell us what percentage of our code our tests are running through (Branches (e.g., If else statement), Functions, Lines).

   ### Using [JEST](https://jestjs.io/docs/getting-started)

   - Use the **describe** function to organize your tests into categories.
   - Use the **it** function to declare the logic you're testing
   - Use the **expect** function to declare your assertion (e.g., toBe, toBeGreaterThan)
     - toBe -> strict equality (Booleans, Strings, Numbers)
     - toEqual -> JavaScript Objects or Arrays
     - toMatch() -> checks that it matches the regular expression

2. [Vue Test Utils](https://test-utils.vuejs.org/) - Allows us to setup our components within our testing files simulating a component as if it exists.

   - [Getting Started](https://test-utils.vuejs.org/guide/) with test utils of vue.
   - accepts two parameters **mount(component, options)**
     - component refers to the vue component being tested
     - options is an object similar to the vue lifecycle that can be override

   ```
   //Options
       {
         global: {
           stub: {}
         },
         data() {
           return {
             data: 'Sample Data'
           }
         }
       }
   ```

   - **Asynchronous Operations** is also available
     - it('', async() => { await wrapper.setData({ company: "Hello World" })}) - setData({}) should be asynchronous
   - **shallowMount(component, options)** - doesnt mount any components the component has
   - **stub** - global: { stub: { componentName: true } } will replace/swap any component in a component with a substitute to simplify the test.

   ### Methods

   - **find()** and **findAll()** methods locate elements in our Vue component's template. We can target HTML elements, CSS classes,IDs, etc. But these approaches can be brittle.
   - **text()** - finds text from the mounted component
   - **findComponent({ name: 'ComponentName' })** - finds a component within in a component (Check for MainNav test file)
     - findComponent is not really recommended as the test will be limited to the name of the component and if changed it will fail the test. Recommended is to use the find() passind a data-test attribute inside so that even if the component name is changed it will still pass the test
   - **trigger()** - can trigger or simulate a user event such as a click in a user test.
     - is asynchronous thus needed to be in a asynchronous method
   - **classes()** - checks for classes on the element
   - **get()** -> will not proceed to the assertions or next line if it fails. This will fail the test if Vue Test Utils cannot identify the search target.
   - **exists()** - returns true if a Vue Test Utils wrapper/node/target is an actual element
   -

## Unit Tests

Small lightweight test that gives some feedback that what we've built is built correctly and it should run fast.

- is a single piece of a program in isolation
- should be lightweight and should run fast
- If there are dependencies, unit test should mock or stub them out

## Testing Pyramind

Manual Tests -
E2E Tests - Rendering a full vue app in a simulated browser and having some automated tasks to click on something simulating a user navigating throughout the app.
Integration Tests - Like adding a whole bunch of puzzle pieces and making sure that its working as expected. Testing different components that works with each together.
Unit Test - Biggest Pie slice of test in an app that focus on small bits of functionality.

## Test-Driven Development (TDD)

Writing the test first before writing the implementation code. TDD leads to a higher quality tests and higher quality code. Typically, if tests are hard to setup if it requires a lot of spaghetti code, a lot of boiler plate code, it's usually a sign that the implementation is too complex as well.

We want our tests to mirror the user's interaction with the component. As such, we'd like to avoid artificial changes to the component. We also want to decouple the tests rom the implementation. Test behavior.

**Benefits**

1. Ensure you are testing the right thing
2. Avoid duplication of tests
3. Describe the "why" rather than the implementation
4. Higher test coverage
5. Makes code easy to refactor
6. Leads to higher-quality tests and implementation

- Red -> Green -> Refactor -> Repeat
  - Red - Expects to fail because there are no implementations yet
  - Green - Write the implementation code as expected based on the test file
  - Refactor - Improve code without changing its underlying purpose

## Vue Notes

### Vue Re-rendering

Vue automatically re-renders a component template whenever a piece of data is changed or updated.

### Computed Property

Automatically updates its value when a certain value changes. A computed property will only re-evaluate when some of its reactive dependencies have changed.

### Methods

Where we can add into our vue component configuration object. This can access the data and overwrite its properties.

### Vue Directives

- v-bind allows us to bind the attributes and a colon (:) is a shorthand for v-bind
  - allows to pass in dynamic prop value (not a string because props are evaluated as string)
- key attribute is a unique identifier for vue to keep track of the elements
- v-if directive conditionally renders a chunk of HTML or a Vue component
- v-else directive renders a chunk of HTML if the v-if directive evaluates to false
- v-on directive declares a method for Vue to invoke whenever an event occurs.
  - @ is a shortcut for v-on directive.
  - dont invoke the v-on method unless we pass in some parameters as vue does invoke it automatically and will pass an event object.

### Components

components are independent and isolated small chunks with predefined properties that is reusable.

- props -> used to pass in values to the component and has three properties for each props { required: Boolean, type: String, default: Value, validator() { return Boolean } }

```
props: {
  btnType: {
    type: String,
    default: 'primary',
    required: false,
    validator(val) {
      return ['primary'].includes(val)
    }
  }
}
```

Global Components - can be used in any Vue component. We do not need to import them and register them locally.

- they can increase your bundle size

## FontAwesome for Vue

[FontAwesome Installation](https://fontawesome.com/docs/web/use-with/vue)
[FontAwesome Adding Icons](https://fontawesome.com/docs/web/use-with/vue/add-icons)

## CSS GRID GUIDE NOTES

[CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
[GRID GARDEN](https://cssgridgarden.com) - game for practicing css grid
