import * as React from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import { observer, inject } from 'mobx-react';
import { DataItemStore } from 'src/state/TimeData';

interface IState {
  str1: string;
  str2: string;
}

interface IProps {
  dataStore?: DataItemStore;
}

@inject('dataStore')
@observer
export default class Page1 extends React.Component<IProps, IState> {

  dataStore: DataItemStore;

  state = {
    str1: 'None',
    str2: 'None'
  };

  constructor(props: IProps) {
    super(props);

    this.dataStore = this.props.dataStore!;
  }

  getHelloWorld() {
    return this.state.str1 + ' ' + this.state.str2;
  }

  render() {

    if (!this.dataStore) { return null; }

    return (
      <div className="md-grid">
        <Card className="md-cell">
          <CardTitle title="Card 1" />
          <CardText>
            <p>Server Data:</p>
            <p>{JSON.stringify(this.dataStore.items)}</p>
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