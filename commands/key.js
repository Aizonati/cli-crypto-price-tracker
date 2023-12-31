const inquirer = require("inquirer");
const colors = require("colors");
const KeyManager = require("../lib/KeyManager");
const { isRequired } = require("../utils/validation");

const key = {
  // Setting the API key
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key ".green + "https://www.coinapi.io/",
        validate: isRequired
      }
    ]);
    const key = keyManager.setKey(input.key)
    if(key){
      console.log('API Key Set'.blue);
    }
  },

  // Getting the API key
  async show() {
    try {
      const keyManager = new KeyManager()
      const key = keyManager.getKey()
      console.log('Current API Key: ', key.yellow)
      return key
    } catch (error) {
      console.error(error.message.red)
    }
  },

  // Removing the API key
  async remove() {
    try {
      const keyManager = new KeyManager()
      keyManager.deleteKey()
      console.log('Key removed'.blue)
      return;
    } catch (error) {
      console.error(error.message.red)
    }
  },
};

module.exports = key;
