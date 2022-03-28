import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Primary} from '../../helpers/data/colors';
const Input = props => {
  return (
    <View style={styles.inputConatiner}>
      <View style={{marginLeft: wp('4%')}}>{props.icon}</View>
      <TextInput
        placeholder={props.Placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.textStyle}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputConatiner: {
    borderWidth: 1,
    borderColor: Primary,
    margin: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    width: wp('90%'),
  },
  textStyle: {
    padding: 12,

    width: wp('85%'),
    borderRadius: 8,
    fontSize: hp('2.2%'),

    color: '#000',
  },
});
