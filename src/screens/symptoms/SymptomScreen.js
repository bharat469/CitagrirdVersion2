import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Doctor} from '../../helpers/data/Doctor';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Primary} from '../../helpers/data/colors';
import HeaderInside from '../../props/header/HeaderInside';

const SymptomScreen = ({navigation, route}) => {
  const {sName} = route.params;
  const [data, setData] = useState(Doctor);
  useEffect(() => {
    filter();
  }, []);
  const filter = () => {
    const newData = data.filter(item => {
      return item.symtoms === sName || item.symtoms2 === sName;
    });
    setData(newData);
  };
  return (
    <View style={styles.symptoms}>
      <HeaderInside title={sName} />
      <View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity key={index} style={styles.doctorCard}>
                <item.Pimage width={80} height={100} />
                <View style={styles.doctorDetail}>
                  <View>
                    <Text style={styles.drName}>{item.name}</Text>
                    <Text style={styles.hname}>{item.hospital}</Text>
                    <Text style={styles.specialName}>
                      {item.specialList} ({item.year}yrs)
                    </Text>
                    <Text style={styles.timeName}>{item.time}</Text>
                  </View>
                  <View style={styles.leftStyle}>
                    <Text style={styles.price}>₹{item.price}</Text>
                    <Text style={styles.rating}>★ {item.rating}</Text>
                    <TouchableOpacity style={styles.btn}>
                      <Text style={styles.doctorBtn}>Know More</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default SymptomScreen;

const styles = StyleSheet.create({
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#fff',
    margin: 12,
    width: wp('95%'),
    borderRadius: 12,
  },
  doctorDetail: {
    flexDirection: 'row',
    margin: 12,

    justifyContent: 'space-between',
    width: wp('73%'),
  },
  drName: {
    fontSize: hp('2.3%'),
    fontWeight: '700',
    color: '#000',
  },
  hname: {
    color: '#000',
    fontSize: hp('1.8%'),
    fontWeight: '500',
  },
  specialName: {
    fontSize: hp('1.8%'),
    color: '#686868',
  },
  timeName: {
    color: '#000',
    fontSize: hp('1.8%'),
    fontWeight: '600',
  },
  price: {
    fontSize: hp('2.2%'),
    fontWeight: '700',
    color: Primary,
  },
  rating: {
    backgroundColor: '#FFB121',
    borderRadius: 12,
    color: '#fff',
    textAlign: 'center',
    margin: 6,
    padding: 3,
    fontSize: hp('1.8%'),
    right: hp('2%'),
  },
  btn: {
    right: hp('2%'),
  },
  doctorBtn: {
    fontWeight: '700',
    fontSize: hp('1.7%'),
    textDecorationLine: 'underline',
  },
});
