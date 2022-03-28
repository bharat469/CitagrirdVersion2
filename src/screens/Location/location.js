import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Locations} from '../../helpers/data/svgImages';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SelectDropdown from 'react-native-select-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import {LocationData} from '../../helpers/data/city';
import {Primary} from '../../helpers/data/colors';
import Button from '../../props/button/button';

const Location = ({navigation}) => {
  const [location, setLocation] = useState();
  return (
    <View style={styles.locationScreen}>
      <View style={styles.locationContainer}>
        <Locations width={300} height={250} />
        <Text style={styles.locationText}>Which city do you reside in?</Text>
      </View>
      <View style={styles.dropdownList}>
        <SelectDropdown
          data={LocationData}
          onSelect={(selectedItem, index) => {
            setLocation(selectedItem);
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
        <Button
          buttonText="Next"
          buttonSize={styles.ButtonText}
          onPress={() => navigation.navigate('PinScreen')}
        />
        <Text style={styles.textAlert}>
          In case your city is not listed, we’ll be coming soon
        </Text>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  locationScreen: {
    flex: 1,
    alignItems: 'center',
  },
  locationContainer: {
    top: hp('6%'),
  },
  locationText: {
    textAlign: 'center',
    fontSize: hp('3%'),
    color: '#000',
    fontWeight: '700',
  },
  dropdownStyle: {
    borderWidth: 1,
    width: wp('90%'),
    borderRadius: 22,
    margin: 12,
    borderColor: '#C2C2C2',
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
