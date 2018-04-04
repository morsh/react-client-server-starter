import alt, { AbstractActions } from './alt';
let request = require('xhr-request');

export interface Settings {
  a: any;
}

interface SettingsActions {
  saveSettings(settings: Settings): Settings;
  saveSettingsAsync(settings: Settings): (dispatcher: (settings: Settings) => void) => void;
}

class SettingsActions extends AbstractActions implements SettingsActions {

  saveSettings(settings: Settings) {
    return settings;
  }

  saveSettingsAsync(settings: Settings) {
    return (dispatcher: (settings: Settings) => void) => {

      request(
        '/api', 
        { json: true }, 
        (err: Error, data: {}) => {
          if (err) { 
            throw err;
          }
          
          // the JSON result
          return dispatcher({ a: JSON.stringify(data) });
        }
      );

      // setTimeout(
      //   () => { dispatcher(settings); },
      //   2000
      // );
    };
  }
}

export default alt.createActions<SettingsActions>(SettingsActions);