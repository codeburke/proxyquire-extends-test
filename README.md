## Purpose
I'm trying to understand how to use Proxyquire to mock the extended "base" class for unit testing.

## Files
- **lib/base.js** - Base class that exposes a "inc()" method
- **lib/child.js** - Class that extends the Base class and overrides the "inc()" method with additional logic after if calls `super.inc()`
- **lib/index.js** - Crude test running
test/mocks/base.js - Mock of base.js that stubs `inc()` and returns a static configured value

## Running the tests
```
npm install
npm run problem
```

## The problem
When executing `npm run problem` I see the first scenario work as expected. A console log from the Child inc(), then the Base inc(), and the `expect()` assertion passes

When the proxyquire'd MockChild test is run I only see the MockBase.inc() being exectued and the Child inc() is never run.

