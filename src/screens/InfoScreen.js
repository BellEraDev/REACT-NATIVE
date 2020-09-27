import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import InfoItem from '../components/InfoItem';

class InfoScreen extends Component {

  renderItem = (data) => {
    return (
      <InfoItem
        key={data.item.key}
        source={data.item.image}
        firstname={data.item.firstname}
        lastname={data.item.lastname}
        email={data.item.email}
        age={data.item.age}
      />
    );
  };
  
  render() {
    let output;
      output = (
        <FlatList
          style={styles.list}
          data={this.props.images}
          renderItem={this.renderItem}
        />
      );
    return <View style={styles.container}>{output}</View>;
  }
}

const mapStateToProps = (state) => ({images: state.imageStore.images});

export default connect(mapStateToProps, null)(InfoScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    
  },
  list: {width: '100%'},
  text: {
    fontSize: 26,
    margin: 4,
  },
});
