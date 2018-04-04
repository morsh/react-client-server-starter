import alt, { AbstractStoreModel } from './alt';

import SettingsActions, { Settings } from './SettingsActions';

export interface SettingsContainer {
  settings: Settings;
}

class SettingsStore extends AbstractStoreModel<SettingsContainer> implements SettingsContainer {

  settings: Settings;

  constructor() {
    super();

    this.settings = { a: 0 };

    this.bindListeners({
      saveSettings: [ SettingsActions.saveSettings, SettingsActions.saveSettingsAsync ]
    });
  }
  
  saveSettings(settings: Settings) {
    this.settings = settings;
  }
}

export default alt.createStore<SettingsContainer>(
  (SettingsStore as AltJS.StoreModel<SettingsContainer>), 'SettingsStore');