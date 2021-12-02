import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import plants from '../components/plants/';
//import Icon from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Colors} from './../components/styles';
const width = Dimensions.get('screen').width /2-30;
const HomeScreen = (navigation) => {
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

  const CategoryList = (navigation) => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setCategoryIndex(index)}>
            <Text key={{ index }} style={[style.categoryText, categoryIndex == index && style.categoryTextSelected]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({plant}) => {
    return (
      <TouchableOpacity onPress={()=> navigation.navigate("Details")}>
        <View style={style.card}>
      <View style={{ alignItems: 'flex-end' }}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: plant.like
            ? `rgba(245, 42, 42, 0.2)` 
            : `rgba(0,0,0,0.2)`,
          }}
        >
          <Icon name="favorite" size={18} color={plant.like? Colors.red : Colors.dark
          } />
        </View>
      </View>
      <View style={{ height: 100, alignItems: 'center' }}>
        <Image 
        source={plant.img}
        style={{ flex: 1, resizeMode: 'contain' }}  />
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 14, marginTop: 10}}> {plant.name}</Text>
      <View style= {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5,}}><Text style={{fontSize: 19, fontWeight: 'bold'}}>${plant.price}</Text>
      <View style={{height: 25, width: 25, backgroundColor: Colors.brand, borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',}}>
        <Text style={{ fontSize: 20, color: Colors.white, fontWeight: 'bold',}}>+</Text>
      </View>
      </View>
    </View>
    </TouchableOpacity>
      
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: Colors.primary }}>
      <View style={style.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to</Text>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.brand }}>MashShopp</Text>
        </View>
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={{ marginTop: 30, flexDirection: 'row' }}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{ marginLeft: 20 }} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={Colors.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        
        numColumns={2}
        data={plants}
        renderItem={({item}) => <Card plant={item}/>
        }
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  searchContainer: {
    height: 50,
    backgroundColor: Colors.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark,
    flex: 1,
  },

  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: Colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: { fontSize: 13, color: 'grey', fontWeight: 'bold' },

  categoryTextSelected: {
    color: Colors.brand,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: Colors.brand,
  },
  card: {
    height: 225,
    backgroundColor: Colors.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});
export default HomeScreen;
