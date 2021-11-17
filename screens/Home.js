import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
//import Icon from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from './../components/styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: Colors.primary }}>
      <View style={style.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to</Text>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.green }}>MashShopp</Text>
        </View>
      </View>
      <View style={{ marginTop: 30, flexDirection: 'row' }}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{ marginLeft: 20 }} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
      </View>
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
    backgroundColor: Colors.darkLightlight,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkLight,
    flex: 1,
  },
});
export default HomeScreen;
