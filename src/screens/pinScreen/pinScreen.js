import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {useState} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Primary} from '../../helpers/data/colors';
import Button from '../../props/button/button';

const PinScreen = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;
  const pin = '123456';
  const verifyPin = () => {
    if (pin === value) {
      navigation.replace('HomeScreen');
    } else {
      Alert.alert('Invalid Pin !!! ', 'Please enter valid Pin');
      setValue('');
    }
  };

  return (
    <View style={styles.pinscreenContainer}>
      <TouchableOpacity
        style={styles.BackButton}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.pinScreen}>
        <Text style={styles.pinHeaderText}>Enter Pin to Continue</Text>
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
        <Button
          buttonText="Verify"
          buttonSize={{width: wp('70%')}}
          onPress={verifyPin}
        />
        <View style={styles.textWarning}>
          <Text style={styles.headerText}>FORGET PIN?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PinForget')}>
            <Text style={styles.textBtn}>RESET PIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PinScreen;

const styles = StyleSheet.create({
  pinscreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  BackButton: {
    padding: 12,
    borderWidth: 1,
    width: wp('12%'),
    top: hp('2%'),
    marginLeft: wp('2%'),
    borderColor: '#D8D8D8',
    borderRadius: 12,
  },
  pinScreen: {
    top: hp('4%'),
    padding: 12,
  },
  pinHeaderText: {
    fontSize: hp('3%'),
    fontWeight: '800',
    color: '#000',
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
  textWarning: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: hp('2%'),
  },
  headerText: {
    fontSize: hp('2%'),
    color: '#000',
  },
  textBtn: {
    color: Primary,
    fontWeight: '800',
  },
});
