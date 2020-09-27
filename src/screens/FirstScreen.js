import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Button, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {addImage} from '../store/actions/actionCreator';
const placeholder =
  'https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png';
import ImagePicker from 'react-native-image-picker';

class FirstScreen extends Component {
  state = {
    image: null,
    firstname: null,
    lastname: null,
    email: null,
    age: null,
  };

  componentWillUnmount() {
    this.setState({
      image: null,
      firstname: null,
      lastname: null,
      email: null,
      age: null,
    });
  }

  selectImageHandler = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (result) => {
      if (result.didCancel) {
        console.log('User canceled image picking');
      } else if (result.error) {
        console.log('Image picker error', result.error);
      } else {
        this.setState({
          image: {uri: result.uri},
        });
      }
    });
  };

  addImageHandler = () => {
    if (
      this.state.image == null ||
      this.state.firstname == null ||
      this.state.lastname == null ||
      this.state.email == null ||
      this.state.age == null
    ) {
      return;
    }
    this.props.onAddImage({
      image: this.state.image,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      age: this.state.age,
    });
    this.setState({
      image: null,
      firstname: null,
      lastname: null,
      email: null,
      age: null,
    });
    // this.InfoHandler();
    // this.cancelHandler();
  };

  cancelHandler = () => {
    Navigation.pop(this.props.componentId);
  };

  render() {
    let imageSource;
    if (this.state.image != null) {
      imageSource = this.state.image;
    } else {
      imageSource = {uri: placeholder};
    }
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageSource} />
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            onChangeText={(text) => {
              this.setState({firstname: text});
            }}
            value={this.state.firstname}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            onChangeText={(text) => {
              this.setState({lastname: text});
            }}
            value={this.state.lastname}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(text) => {
              this.setState({email: text});
            }}
            value={this.state.email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Age"
            onChangeText={(text) => {
              this.setState({age: text});
            }}
            value={this.state.age}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="OK" onPress={this.addImageHandler} />
          <Button title="Photo" onPress={this.selectImageHandler} />
          <Button title="Cancel" onPress={this.cancelHandler} />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddImage: (image) => dispatch(addImage(image)),
  };
};
export default connect(null, mapDispatchToProps)(FirstScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
  },
  textInput: {
    marginTop: 10,
    width: '60%',
    borderColor: 'brown',
    borderWidth: 1,
    height: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    margin: 4,
  },
});
