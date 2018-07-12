import React from 'react';

// Component require
import Todo from '../components/Todo';

export default class Todos extends React.Component {
  render() {
    const inputStyle = {
      width: '100%',
    };

    const zeroStyle = {
      margin: '0px',
      padding: '0px'
    };

    const items = [
      'Wake up',
      'Praise for Buddha',
      'Sit for Meditation',
      'Have breakfast',
      'Brush my teeth',
      'Take the bath',
      'Go to work'
    ].map((item, i) => <Todo key={i} item={item} />);

    return (
      <div>
        <h3>Todos page</h3>
        <ul class="list-group">{items}</ul>
        <form class="form-group">
          <div class="row" style={zeroStyle}>
          <div class="col-md-11" style={zeroStyle}><input type="text" class="form-control" style={inputStyle} /></div>
          <div class="col-md-1"><input type="submit" class="btn btn-primary" value="Add New" /></div>
          </div>
        </form>
      </div>
    );
  }
}
