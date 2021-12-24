import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Colors } from '../components/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import plants from '../components/plants/';

const Details = ({ navigation, route }) => {
  const plant = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={style.imageContainer}>
        <Image source={plant.img} style={{ resizeMode: 'contain', flex: 1 }} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
        >
          <View style={style.line} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Best Choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{plant.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: Colors.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}
            >
              ${plant.price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
          <Text style={{ color: 'grey', fontSize: 10, lineHeight: 22, marginTop: 10 }}>{plant.about}</Text>
          <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}> - </Text>
              </View>
              <Text style={{ fontSize: 20, marginHorizontal: 10, fontWeight: 'bold' }}>1</Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}> + </Text>
              </View>
            </View>
            <View style={style.buyBtn}>
              <Text style={{ color: Colors.white, fontSize: 10, fontWeight: 'bold' }}>Buy</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  detailsContainer: {
    flex: 0.55,
    backgroundColor: Colors.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 3,
    paddingTop: 3,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: Colors.dark,
    marginBottom: 5,
    marginRight: 3,
  },

  priceTag: {
    backgroundColor: Colors.brand,
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
  },

  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  buyBtn: {
    width: 120,
    height: 50,
    backgroundColor: Colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
export default Details;
