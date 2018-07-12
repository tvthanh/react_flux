import React from 'react';

export default class Todo extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <li class="list-group-item">
        <div class="row">
          <div class="col-md-1"><input type="checkbox" /></div>
          <div class="col-md-10">{item}</div>
          <div class="col-md-1 text-right"><i class="glyphicon glyphicon-trash"></i></div>
        </div>
      </li>
    );
  }
}
