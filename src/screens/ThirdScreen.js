import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert, FlatList} from 'react-native';
import ImageItem from '../components/ImageItem';
import {connect} from 'react-redux';
import {addAlert, deleteImage, linkPage} from '../store/actions/actionCreator';
import {Navigation} from 'react-native-navigation';

class ThirdScreen extends Component {
  deleteItemHandler = (key) => {
    this.props.onDeleteImage(key);
  };

  linkItemHandler = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'InfoScreen',
      },
      options: {
        topBar: {
          title: {text: 'Information Screen'},
        },
      },
    });
  };

  alertItemHandler = (firstname) => {
    this.props.onAlertPage(firstname);
    Alert.alert('Hello ', firstname);
  };

  renderItem = (data) => {
    return (
      <ImageItem
        key={data.item.key}
        source={data.item.image}
        deleteItem={() => this.deleteItemHandler(data.item.key)}
        linkItem={() => this.linkItemHandler(data.item)}
        alertItem={() => this.alertItemHandler(data.item.firstname)}
        firstname={data.item.firstname}
        lastname={data.item.lastname}
        email={data.item.email}
        age={data.item.age}
      />
    );
  };

  render() {
    let output;
    if (this.props.images == null || this.props.images.length <= 0)
      output = <Text style={styles.text}> No Image Available</Text>;
    else
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

const mapDispatchToProps = (dispatch) => ({
  onDeleteImage: (key) => dispatch(deleteImage(key)),
  onLinkPage: () => dispatch(linkPage()),
  onAlertPage: (firstname) => dispatch(addAlert(firstname)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ThirdScreen);

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
