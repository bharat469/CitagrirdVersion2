import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Primary} from '../../helpers/data/colors';
import Button from '../../props/button/button';

const CreatePin = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const pin = '123456';
  const CELL_COUNT = 6;
  const verifyPin = () => {
    if (pin === value) {
      navigation.replace('LoginScreen');
    } else {
      Alert.alert('Invalid Pin !!! ', 'Please enter valid Pin');
      setValue('');
    }
  };
  return (
    <View style={styles.createPinScreen}>
      <TouchableOpacity
        style={styles.BackButton}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.otpTextData}>
        <Text style={styles.textSizeBig}>Create your own PIN</Text>
        <Text style={styles.textSizeSmall}>
          This will help you to unlock Citagrid with ease and safety everytime
          you use it
        </Text>
      </View>
      <View style={{top: hp('8%'), alignItems: 'center'}}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={styles.verifyBtn}>
        <Button
          buttonText="Verify"
          buttonSize={{width: wp('70%')}}
          onPress={verifyPin}
        />
      </View>
    </View>
  );
};

export default CreatePin;

const styles = StyleSheet.create({
  BackButton: {
    padding: 12,
    borderWidth: 1,
    width: wp('12%'),
    top: hp('2%'),
    marginLeft: wp('2%'),
    borderColor: '#D8D8D8',
    borderRadius: 12,
  },
  otpTextData: {
    top: hp('4%'),
    padding: 12,
  },
  textSizeBig: {
    fontSize: hp('3%'),
    width: wp('51%'),
    fontWeight: 'bold',
    color: '#000',
  },
  textSizeSmall: {
    fontSize: hp('2%'),
    marginTop: hp('2%'),
    letterSpacing: 0.1,
    color: '#686868',
  },

  codeFieldRoot: {
    marginTop: 15,
  },
  cellRoot: {
    width: wp('10%'),
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    margin: 12,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: Primary,
    borderBottomWidth: 2,
  },
  verifyBtn: {
    top: hp('7%'),
    alignItems: 'center',
  },
  blackText: {
    fontSize: hp('2%'),
    fontWeight: '600',
    color: '#000',
  },
  blueText: {
    color: Primary,
    fontSize: hp('2%'),
    left: wp('1%'),
    fontWeight: '700',
  },
});
