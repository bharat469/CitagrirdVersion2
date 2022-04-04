import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderInside from '../../props/header/HeaderInside';
import {SearchBar} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Doctor} from '../../helpers/data/Doctor';
import {Primary} from '../../helpers/data/colors';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [masterData, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  const fetch = () => {
    setData(Doctor);
  };

  useEffect(() => {
    fetch();
  });

  const updateText = text => {
    setSearch(text);
  };

  const SearchUpdate = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.name ? item.name : '';
        const textData = text;
        const secondData = item.hospital ? item.hospital : '';
        const textData2 = text;
        const thirdData = item.specialList ? item.specialList : '';
        const textData3 = text;
        return (
          itemData.indexOf(textData) > -1 ||
          secondData.indexOf(textData2) > -1 ||
          thirdData.indexOf(textData3) > -1
        );
      });
      setFilter(newData);
      setSearch(text);
    } else {
      setFilter(masterData);
      setSearch(text);
    }
  };

  return (
    <View style={styles.searchContainer}>
      <HeaderInside title="Select your doctor " />
      <SearchBar
        placeholder="Search by doctors, specialities"
        containerStyle={{
          backgroundColor: '#fff',
          width: wp('90%'),
          left: wp('3.6%'),
          borderWidth: 1,
          borderColor: '#C2C2C2',
          borderRadius: 12,
          borderTopColor: '#C2C2C2',
          borderBottomColor: '#C2C2C2',
        }}
        inputContainerStyle={{backgroundColor: '#fff'}}
        value={search}
        onChangeText={text => SearchUpdate(text)}
      />
      <View>
        <FlatList
          data={filter}
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

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
  },
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
