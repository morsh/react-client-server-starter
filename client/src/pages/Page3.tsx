import * as React from 'react';
import { Card, CardTitle, CardText } from 'react-md';

export default class Page3 extends React.Component {
  render() {
    return (
      <div className="md-grid md-text-container">
        <h2 className="md-cell md-cell--12">
          Page 3
        </h2>
        <Card className="md-cell">
          <CardTitle title="Card 1" />
          <CardText>
            <div>Wowza</div>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 2" />
          <CardText>
            <div>Wowza</div>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 3" />
          <CardText>
            <div>Wowza</div>
          </CardText>
        </Card>
      </div>
    );
  }
}
