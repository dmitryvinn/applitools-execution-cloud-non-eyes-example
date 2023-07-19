'use strict'

const { Builder, By } = require('selenium-webdriver');
const { Eyes,
    ClassicRunner,
    Configuration,
    BatchInfo } = require('@applitools/eyes-selenium');


describe('Documentation Demo App', () => {
    const APP_NAME = 'Documentation Demo App'
    var applitoolsApiKey;
    var headless;

    let batch;
    let config;
    let runner;

    let testStatus;

    let driver;

    beforeAll(async () => {

        applitoolsApiKey = process.env.APPLITOOLS_API_KEY;

        headless = process.env.HEADLESS ? ['headless'] : []

        runner = new ClassicRunner();

        batch = new BatchInfo('Example: Execution Cloud Tests for Non-Eyes Coverage');

        config = new Configuration();
        config.setApiKey(applitoolsApiKey);

        config.setBatch(batch);

    }, 60000);

    beforeEach(async function () {
        testStatus = "Passed";
        var capabilities = {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: headless,
            },
        };

        let url = await Eyes.getExecutionCloudUrl();
        driver = new Builder().usingServer(url).withCapabilities(capabilities).build();

        await driver.manage().setTimeouts({ implicit: 10000 });

    }, 60000)

    test('should navigate to another page and increment its counter', async () => {

        await driver.executeScript(
            'applitools:startTest',
            {
                'testName': expect.getState().currentTestName,
                'appName': APP_NAME,
                'batch': { "id": batch.getId() }
            }
        )
        await driver.get('https://docs-demo-app.vercel.app/');

        await driver.findElement(By.xpath("//*[text() = 'Another Page']")).click();
        await driver.findElement(By.className('button-counter')).click();
        const finalClickCount = await driver.findElement(By.className('button-counter')).getText();

        await expect(finalClickCount).toContain('Clicked 1 times');
    }),
        afterEach(async function () {
            await driver.executeScript('applitools:endTest', { 'status': testStatus })
            // Quit the WebDrivegor instance.
            await driver.quit();

        }, 60000);

})