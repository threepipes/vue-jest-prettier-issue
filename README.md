# Reproduce the issue

```sh
npm ci
npm test
```

# Result

```
$ npm test

> vue2-babel-in-package@1.0.0 test
> jest --no-cache test.js

 FAIL  ./test.js
  ● Test suite failed to run

    TypeError: Expected a SourceNode, string, or an array of SourceNodes and strings. Got [object Promise]

      1 | import { mount } from '@vue/test-utils'
    > 2 | import Basic from './components/Basic.vue'
        | ^
      3 |
      4 | test('processes .vue files', () => {
      5 |   const wrapper = mount(Basic)

      at SourceNode_add [as add] (node_modules/source-map/lib/source-node.js:178:11)
      at Object.require (test.js:2:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.276 s
Ran all test suites matching /test.js/i.
zsh: exit 1     npm test
```
