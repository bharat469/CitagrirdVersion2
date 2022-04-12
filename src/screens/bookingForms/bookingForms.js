import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '../../props/input/input';
import {Primary} from '../../helpers/data/colors';
import SelectDropdown from 'react-native-select-dropdown';
import RadioBtn from '../../props/radioBtn/radioBtn';
import Button from '../../props/button/button';

const materialStatus = ['Married', 'Unmarried'];
const gender = [
  {id: 0, key: 'Male', label: 'Male'},
  {id: 1, key: 'female', label: 'female'},
];

const BookingForms = ({navigation, route}) => {
  const [value, setValue] = useState(null);
  const [status, setStatus] = useState('');
  const {day, time} = route.params;
  return (
    <View style={styles.bookingForms}>
      <View style={styles.tokenHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.bookingFormContainer}>
        <Text style={styles.bookingText}>Provide us the below details</Text>
        <Input
          Placeholder="Name"
          icon={<AntDesign name="user" size={24} color={Primary} />}
        />
        <Input
          Placeholder="04/04/1991"
          icon={<AntDesign name="calendar" size={24} color={Primary} />}
        />
        <SelectDropdown
          data={materialStatus}
          onSelect={(selectedItem, index) => {
            setStatus(selectedItem);
          }}
          buttonTextStyle={{textAlign: 'left'}}
          defaultButtonText={'Select Location'}
          buttonStyle={styles.dropdownStyle}
          renderDropdownIcon={isOpened => {
            return (
              <Entypo
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                size={24}
                color={Primary}
              />
            );
          }}
          dropdownStyle={styles.dropdownPlate}
        />
        <View style={{top: hp('4%')}}>
          <RadioBtn RadioArray={gender} default={'Male'} />
        </View>
      </View>
      <Button
        buttonText="Payment"
        buttonSize={{width: wp('90%'), left: wp('6%'), top: hp('22%')}}
        onPress={() => {
          navigation.navigate('PaymentConfirmation', {
            day,
            time,
          });
        }}
      />
    </View>
  );
};

export default BookingForms;

const styles = StyleSheet.create({
  bookingForms: {
    flex: 1,
  },
  tokenHeader: {
    padding: 12,
    backgroundColor: '',
  },

  backButton: {
    borderWidth: 1,
    padding: 6,
    width: wp('10%'),
    height: hp('5%'),
    alignItems: 'center',
    borderRadius: 12,
    borderColor: '#D8D8D8',
    backgroundColor: '#F8FBFF',
  },
  bookingFormContainer: {
    padding: 12,
  },
  bookingText: {
    fontSize: hp('2.2%'),
    fontWeight: '700',
    color: '#000',
    textAlign: 'left',
    margin: 12,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#000',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dropdownStyle: {
    borderWidth: 1,
    width: wp('90%'),
    borderRadius: 12,
    margin: 12,
    borderColor: Primary,
  },
  dropdownList: {
    top: hp('8%'),
    alignItems: 'center',
  },
  dropdownPlate: {
    borderRadius: 12,
    borderColor: Primary,
    borderWidth: 4,
    textAlign: 'left',
  },
  textAlert: {
    textAlign: 'center',
    fontSize: hp('2%'),
    top: hp('35%'),
  },
  ButtonText: {
    width: wp('90%'),
  },
});
