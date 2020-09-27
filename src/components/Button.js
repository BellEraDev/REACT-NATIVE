import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../utils/colors';

class ButtonOne extends Component {
  handleOperation = () => {
    this.props.operation(this.props.char);
  };

  componentDidMount = () => {}

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.operation(this.props.char)}
        style={styles.container}>
        <Text style={styles.text}>{this.props.char}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: colors['gray-darker'],
  },
  text: {
    color: colors.white,
    fontSize: 30,
    color: colors['black'],
  },
});

export default ButtonOne;
