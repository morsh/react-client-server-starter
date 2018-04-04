import * as React from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import { SettingsActions, SettingsContainer, SettingsStore } from '../state';
import connectToStores from 'alt-utils/lib/connectToStores';

interface State {
  str1: string;
  str2: string;
}

class Page1 extends React.Component<SettingsContainer, State> {

  static getStores(props: {}) {
    return [SettingsStore];
  }

  static getPropsFromStores(props: {}) {
      return SettingsStore.getState();
  }

  constructor(props: SettingsContainer) {
    super(props);

    this.state = {
      str1: 'None',
      str2: 'None'
    };
  }

  getHelloWorld() {
    return this.state.str1 + ' ' + this.state.str2;
  }

  componentWillMount() {
    SettingsActions.saveSettingsAsync({ a: 10 });

    setTimeout(
      () => {
        this.setState({
          str1: 'Hello',
          str2: 'World'
        });
      },
      5000
    );
  }

  render() {
    return (
      <div className="md-grid">
        <Card className="md-cell">
          <CardTitle title="Card 1" />
          <CardText>
            <p>{this.props.settings.a}</p>
            <p>{this.getHelloWorld()}</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 2" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 3" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default connectToStores(Page1);