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

2. [Vue Test Utils](https://test-utils.vuejs.org/) - Allows us to setup our components within our testing files simulating a component as if it exists.
   - [Getting Started](https://test-utils.vuejs.org/guide/) with test utils of vue.
   - accepts two parameters (component, options)
     - component refers to the vue component being tested
     - options is an object similar to the vue lifecycle that can be override
       - { data() { return { data: 'Sample Data' } } }
   - **Asynchronous Operations** is also available
     - it('', async() => { await wrapper.setData({ company: "Hello World" })})
       - setData({}) should be asynchronous

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

### Vue Directives

- v-bind allows us to bind the attributes and a colon (:) is a shorthand for v-bind
- key attribute is a unique identifier for vue to keep track of the elements
