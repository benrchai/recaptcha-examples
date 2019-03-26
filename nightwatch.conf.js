// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
  src_folders: [ './bot' ],
  output_folder: '',
  selenium: {
    start_process: false, // tells nightwatch to start/stop the selenium process
    host: '127.0.0.1',
    port: 4444, // standard selenium port
  },
  globals_path : "",
  custom_commands_path: [],
  custom_assertions_path: [],
  test_settings: {
    default: {
      silent: true,
      globals: {
        waitForConditionTimeout: 10000, // sometimes internet is slow so wait.
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: { args: [ "--headless", "--disable-gpu", "--window-size=800,600" ] },
        javascriptEnabled: true // turn off to test progressive enhancement
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        acceptInsecureCerts: true,
        "moz:firefoxOptions": {
          args: ["--headless"]
        },
        javascriptEnabled: true // turn off to test progressive enhancement
      }
    }
  }
}