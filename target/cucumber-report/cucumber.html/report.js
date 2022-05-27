$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createaccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Functionality",
  "description": "As user , I would like to create account successfully",
  "id": "create-account-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10805140500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I should able to create account with valid information",
  "description": "",
  "id": "create-account-functionality;i-should-able-to-create-account-with-valid-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter email address for create account \"shena@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the first name \"johnen\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the last name \"sena\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the password \"1234567\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter the address \"johnen road\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter the city \"london\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the state \"Hawaii\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the zipcode \"12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the country \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter the phone number \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter the alias address \"My address\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on registration button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am successfully registration with valid information",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I can see the my account message \"My Account\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 304530400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shena@gmail.com",
      "offset": 42
    }
  ],
  "location": "CreateAccountPageTest.iEnterEmailAddressForCreateAccount(String)"
});
formatter.result({
  "duration": 7280224600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: //input[@id\u003d\u0027email_create\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-N67ITPLC\u0027, ip: \u0027192.168.1.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat com.automation.utility.Utilites.sendTextToElement(Utilites.java:72)\r\n\tat com.automation.websitepages.SignInPage.enterEmailForCreateAccount(SignInPage.java:48)\r\n\tat com.cucumber.steps.CreateAccountPageTest.iEnterEmailAddressForCreateAccount(CreateAccountPageTest.java:13)\r\n\tat ✽.And I enter email address for create account \"shena@gmail.com\"(createaccount.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnCreateAccountButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "johnen",
      "offset": 24
    }
  ],
  "location": "CreateAccountPageTest.iEnterTheFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sena",
      "offset": 23
    }
  ],
  "location": "CreateAccountPageTest.iEnterTheLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567",
      "offset": 22
    }
  ],
  "location": "CreateAccountPageTest.iEnterThePassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "johnen road",
      "offset": 21
    }
  ],
  "location": "CreateAccountPageTest.iEnterTheAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "london",
      "offset": 18
    }
  ],
  "location": "CreateAccountPageTest.iEnterTheCity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hawaii",
      "offset": 20
    }
  ],
  "location": "CreateAccountPageTest.iSelectTheState(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 21
    }
  ],
  "location": "CreateAccountPageTest.iEnterTheZipcode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 22
    }
  ],
  "location": "CreateAccountPageTest.iSelectTheCountry(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 26
    }
  ],
  "location": "CreateAccountPageTest.iEnterThePhoneNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "My address",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterTheAliasAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnRegistrationButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountPageTest.iAmSuccessfullyRegistrationWithValidInformation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 34
    }
  ],
  "location": "CreateAccountPageTest.iCanSeeTheMyAccountMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12133219900,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-N67ITPLC\u0027, ip: \u0027192.168.1.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [47dcdf48633c9d351261bf02fb41eba3, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\megha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51200}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51200/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 47dcdf48633c9d351261bf02fb41eba3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.automation.utility.Utilites.getScreenshot(Utilites.java:332)\r\n\tat com.cucumber.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.uri("signin.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As user, I would like to login With valid credentials",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2837686500,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-N67ITPLC\u0027, ip: \u0027192.168.1.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [dfec308f9ab8cdc05e6d31030b2c7d96, get {url\u003dhttp://automationpractice.com/index.php}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\megha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51261}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51261/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dfec308f9ab8cdc05e6d31030b2c7d96\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:328)\r\n\tat com.automation.managerdriver.ManageDriver.selectBrowser(ManageDriver.java:43)\r\n\tat com.cucumber.Hooks.setup(Hooks.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTest.iOnHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInPageTest.iClickOnLoginLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInPageTest.iAmOnLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "I should navigate to login page successfully",
  "description": "",
  "id": "login-functionality;i-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    },
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on login page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I am successfully navigate to login page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I can see the authentication message \"AUTHENTICATION\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageTest.iAmOnLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInPageTest.iAmSuccessfullyNavigateToLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 38
    }
  ],
  "location": "SignInPageTest.iCanSeeTheAuthenticationMessage(String)"
});
formatter.result({
  "status": "skipped"
});
