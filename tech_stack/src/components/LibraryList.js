import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log('props: ', this.props);
    return;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
  console.log('state: ', state);
};

export default connect(mapStateToProps)(LibraryList);
