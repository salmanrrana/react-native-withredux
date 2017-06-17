import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  //boiler plate set up of listView
  //tells what source of data to use. knows how to figure out what items to show on the screen
  //depending on where the user has scrolled on the screen
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    //have access to this.props.libraries because of the mapStatetoprops function below
    //only part that is not boilerplate is the thiss.props.libraries
    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }

  //this will return a single library
  renderRow(library) {
    return (
      <ListItem library={library} />
    )
  }

  render() {
    console.log('props from librarylist.js : ', this.props);
    return(
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
