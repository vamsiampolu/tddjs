The book uses the xUnit based testing framework JsTestDriver, this is based on the JUnit framework for Java, this is not a Behaviour-Driven-Development (BDD) based framework.

**Behaviour Driven Development**

The goal of TDD is design, not testing. TDD has issues with vocabulary.

BDD seeks to normalize the vocabulary used by developers, testers and other stakeholders.

**Acceptance Test Driven Developement**

 + start with a high level acceptance test

    * defined as user stories in conjunction with business stake holders.

    * some frameworks such as Cucumber allow for creating executable specifications

  + break the system down into smaller parts:

    * move to lower level unit tests on these parts until acceptance tests are passing.

**Continuous Integration**

  + runs all the tests whenever a developer pushes the code to the git repo.

  + can test JS code in all browsers, can check for issues caused by aggressive minification.

When examining a test framework, examine its:

+ test runner

A test runner determines the workflow, desirable qualities include:

  * clear fail/success status

  * allow forr extension using a plugin architecture eg. test coverage

+ assertions

Should allow for handling language specific features such as NaN, undefined and so on.

+ dependencies

the worst sort of dependency would tamper with the global scope.

> the original version of JsUnitTest depended upon Prototype.js which would pollute the global Objects

**The state of JS testing frameworks in 2012**

1. JsUnit

  + runs tests within the browser based on the URL

  + tests are run in sandboxed frames

  + not updated frequently

  + require a fixture file which:

    * hosts dummy markup

    * load library and testing files

2. YUI Test

  + has no dependencies

  + influenced by XUnit, built for YUI

  + supports its own mocking library

  + supports asynchronous testing

3. QUnit

  + follows the xUnit paradigm less strictly

  + written for the jQuery library


