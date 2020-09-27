//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';



// create a component
const InfoItem = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <Image source={props.source} style={styles.image} />
        </View>
        <View style={styles.textInput}>
          <Text style={styles.text}>First Name: {props.firstname}</Text>
        </View>
        <View style={styles.textInput}>
          <Text style={styles.text}>Last Name: {props.lastname}</Text>
        </View>
        <View style={styles.textInput}>
          <Text style={styles.text}>Email: {props.email}</Text>
        </View>
        <View style={styles.textInput}>
          <Text style={styles.text}>Age: {props.age}</Text>
        </View>
    </View>
  );
};

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
    borderWidth: 2,
  },
  textInput: {
    marginTop: 10,
    width: '60%',
    borderColor: 'black',
    borderWidth: 2,
    height: 40,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    margin: 4,
  },
});

export default InfoItem;
