import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Primary} from '../../helpers/data/colors';
import {Doctor} from '../../helpers/data/Doctor';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DoctorInfo = ({navigation, route}) => {
  const {name} = route.params;
  const [data, setData] = useState(Doctor);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('DD-MM-YYYY');

  useEffect(() => {
    doctInfo();
  }, []);

  const doctInfo = () => {
    const newData = data.filter(item => {
      return item.name === name;
    });
    setData(newData);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    console.log('true');
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(moment(date).format('Do MMMM YYYY'));
    console.log('Hit it');
    hideDatePicker();
  };

  return (
    <View style={styles.imageStyle}>
      <View style={styles.headerStyle}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>Save doctor</Text>
          <Ionicons name="bookmark-outline" size={24} color={Primary} />
        </TouchableOpacity>
      </View>
      <View>
        {data.map((item, index) => {
          return (
            <View key={item.id}>
              <View style={styles.doctorInfo}>
                <item.Pimage width={120} height={120} />
                <View style={styles.doctorData}>
                  <Text style={styles.headerText}>{item.name}</Text>
                  <Text style={styles.hospitalText}>{item.hospital}</Text>
                  <Text style={styles.specialText}>{item.specialList}</Text>
                  <View style={styles.ratingView}>
                    <Text style={styles.yearText}>{item.year} yrs Exp.</Text>
                    <Text style={styles.ratingText}>★ {item.rating}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.about}>
                <Text style={styles.aboutText}>About</Text>
                <Text style={styles.aboutData}>{item.about}</Text>
              </View>
              <View style={styles.about}>
                <Text style={styles.aboutText}>Address</Text>
                <Text style={styles.aboutData}>{item.address}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.calender}>
          <Text style={styles.aboutText}>Select Date</Text>
          <TouchableOpacity
            style={styles.textInputStyle}
            onPress={showDatePicker}>
            <Text style={styles.DateText}>{date ? date : '04/04/1991'}</Text>
            <FontAwesome name="calendar" size={24} color={Primary} />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>
    </View>
  );
};

export default DoctorInfo;

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerStyle: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  saveBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E4EEFD',
    borderWidth: 1,
    padding: 3,
    borderRadius: 12,
    borderColor: '#E4EEFD',
  },
  saveText: {
    color: '#000',
    fontSize: hp('1.8%'),
  },
  doctorInfo: {
    flexDirection: 'row',
    padding: 12,
  },
  doctorData: {
    padding: 12,
  },
  headerText: {
    fontSize: hp('2.3%'),
    fontWeight: '800',
    color: '#000',
  },
  hospitalText: {
    fontSize: hp('2%'),
    color: '#000',
  },
  specialText: {
    fontSize: hp('1.8%'),
    color: '#777777',
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  yearText: {
    backgroundColor: '#E4EEFD',
    textAlign: 'center',
    color: Primary,
    borderRadius: 22,
    padding: 6,
    fontSize: hp('2%'),
    width: wp('25%'),
  },
  ratingText: {
    backgroundColor: '#FFB121',
    padding: 6,
    textAlign: 'center',
    borderRadius: 22,
    color: '#fff',
    width: wp('15%'),
  },
  about: {
    padding: 12,
  },
  aboutText: {
    color: '#000',
    fontSize: hp('2%'),
    fontWeight: '700',
  },
  aboutData: {
    color: '#000',
    fontSize: hp('1.8%'),
  },
  calender: {
    padding: 12,
  },
  daySelector: {
    borderColor: Primary,
    borderWidth: 1,
    padding: 12,
    margin: 6,
    width: wp('26%'),
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  textInputStyle: {
    padding: 12,
    borderWidth: 1,
    borderColor: Primary,
    width: wp('85%'),
    borderRadius: 12,
    flexDirection: 'row',
    margin: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  DateText: {
    fontSize: hp('2%'),
    color: '#000',
  },
});
