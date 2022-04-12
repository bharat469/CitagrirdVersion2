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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Day} from '../../helpers/data/day';
import {Time} from '../../helpers/data/time';

const DoctorInfo = ({navigation, route}) => {
  const {name} = route.params;
  const [data, setData] = useState(Doctor);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [id, setId] = useState();
  const [Tid, setTid] = useState();

  useEffect(() => {
    doctInfo();
  }, []);

  const doctInfo = () => {
    const newData = data.filter(item => {
      return item.name === name;
    });
    setData(newData);
  };

  const selectDays = item => {
    setId(item.id);
    setDate(item.day);
    console.log(date);
  };

  const selectTime = item => {
    setTid(item.id);
    setTime(item.time);
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
          <Text style={styles.aboutText}>Select Day's</Text>
          <FlatList
            data={Day}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={id === index ? styles.daySelected : styles.daySelect}
                  onPress={() => selectDays(item)}>
                  <Text
                    style={
                      id === index ? styles.dayTextSelected : styles.dayText
                    }>
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.time}>
          {Time.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={Tid === index ? styles.TimeSelected : styles.TimeSelect}
                onPress={() => selectTime(item)}>
                <Text
                  style={
                    Tid === index ? styles.timeTextSelected : styles.timeText
                  }>
                  {item.time}
                </Text>
              </TouchableOpacity>
            );
          })}
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonText}> ₹ 200</Text>

            <TouchableOpacity
              style={styles.bookbtn}
              onPress={() =>
                navigation.navigate('TokenScreen', {
                  day: date,
                  time: time,
                })
              }>
              <Text style={styles.bookAppointment}> Book Appointment</Text>
            </TouchableOpacity>
          </View>
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
  daySelect: {
    margin: 12,
    borderWidth: 1,
    padding: 12,
    width: wp('20%'),
    alignItems: 'center',
    borderRadius: 15,
    borderColor: Primary,
  },
  TimeSelect: {
    margin: 6,
    borderWidth: 1,
    padding: 12,
    width: wp('30%'),
    alignItems: 'center',
    borderRadius: 15,
    borderColor: Primary,
  },
  daySelected: {
    margin: 12,
    borderWidth: 1,
    padding: 12,
    width: wp('20%'),
    alignItems: 'center',
    borderRadius: 15,
    borderColor: Primary,
    backgroundColor: Primary,
  },
  TimeSelected: {
    margin: 6,
    borderWidth: 1,
    padding: 12,
    width: wp('30%'),
    alignItems: 'center',
    borderRadius: 15,
    borderColor: Primary,
    backgroundColor: Primary,
  },
  dayText: {
    color: '#000',
    fontWeight: '700',
    fontSize: hp('2%'),
  },
  timeText: {
    color: '#000',
    fontWeight: '700',
    fontSize: hp('2%'),
  },
  dayTextSelected: {
    color: '#fff',
    fontWeight: '700',
    fontSize: hp('2%'),
  },
  timeTextSelected: {
    color: '#fff',
    fontWeight: '700',
    fontSize: hp('2%'),
  },
  timeTextSelected: {
    color: '#fff',
    fontWeight: '700',
    fontSize: hp('2%'),
  },
  time: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    width: wp('63.5%'),

    alignItems: 'center',
    margin: 12,
    borderColor: Primary,
    borderRadius: 16,
  },
  buttonText: {
    color: Primary,
    fontWeight: '700',
    fontSize: hp('2.2%'),
    padding: 6,
  },
  bookbtn: {
    backgroundColor: Primary,
    padding: 12,
    marginLeft: 12,
    width: wp('46%'),
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  bookAppointment: {
    color: '#ffff',
    fontSize: hp('2%'),
    fontWeight: '700',
  },
});
