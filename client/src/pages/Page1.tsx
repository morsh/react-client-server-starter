import * as React from 'react';
import { Card, CardTitle, CardText } from 'react-md';

interface IState {
  str1: string;
  str2: string;
}

export default class Page1 extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      str1: 'None',
      str2: 'None'
    };
  }

  getHelloWorld() {
    return this.state.str1 + ' ' + this.state.str2;
  }

  render() {
    return (
      <div className="md-grid">
        <Card className="md-cell">
          <CardTitle title="Card 1" />
          <CardText>
            <p>Stam</p>
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