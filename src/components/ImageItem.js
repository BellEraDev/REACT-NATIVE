//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


// create a component

const ImageItem = (props) => {

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={props.linkItem}>
        <View style={styles.textContainer}>
          <Image source={props.source} style={styles.image} />
          <Text style={styles.text}>
            {'  '}
            {props.firstname} {props.lastname}
          </Text>
        </View>
      </TouchableNativeFeedback>

      <View style={styles.buttoncontainer}>
        <TouchableHighlight onPress={props.alertItem}>
          <View style={styles.iconContainer}>
            <Icon size={24} name="phone-portrait-outline" color="black"></Icon>
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.buttoncontainer}>
        <TouchableNativeFeedback onPress={props.deleteItem}>
          <View style={styles.iconContainer}>
            <Icon size={24} name="trash-outline" color="black"></Icon>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};


//define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 5,
    borderWidth: 2,
    borderColor: 'black',
    height: 50,
  },
  buttonContainer: {
    margin: 5,
    alignItems: 'center',
  },
  phoneContainer: {
    margin: 5,
    alignItems: 'center',
  },
  trashContainer: {
    margin: 5,
    alignItems: 'center',
  },
  button: {
    width: '80%',
  },
  textContainer: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 4,
  },
  iconContainer: {
    flexDirection: 'row',
    margin: 4,
    borderColor: 'violet',
    width: '100%',
    alignItems: 'center',
  },
  image: {width: 45, height: 45, resizeMode: 'contain', marginRight: 20},
  text: {color: 'brown', fontWeight: 'bold'},
});

export default ImageItem;
