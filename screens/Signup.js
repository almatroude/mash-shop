import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';

// Icons

import {
  StyledContainer,
  InnerContainer,
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
import { View, TouchableOpacity } from 'react-native';

const { brand, darkLight, primary } = Colors;

import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import DateTimePicker from '@react-native-community/datetimepicker';

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2020, 0, 1));
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatepicker = () => {
    setShow('date');
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>MashShopp</PageTitle>
        <SubTitle>Account Signup</SubTitle>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={date}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <Formik
          initialValues={{ fullName: '', email: '', dateOfBirth: '', password: '', comfirmPassword: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="Mashud Bawa Abdulai "
                placeholderTextColor={darkLight}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />

              <MyTextInput
                label="Email Address"
                placeholder="mashshop@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                icon="mail"
              />

              <MyTextInput
                label="Date of Birth"
                placeholder="YYYY - MM - DD"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={dob ? dob.toDateString() : ''}
                icon="calendar"
                isDate={true}
                editable={false}
                showDatepicker={showDatepicker}
              />

              <MyTextInput
                label="Password"
                placeholder="*********************"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                icon="lock"
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <MyTextInput
                label="Comfirm Password"
                placeholder="*********************"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('comfirmPassword')}
                onBlur={handleBlur('comfirmPassword')}
                value={values.comfirmPassword}
                icon="lock"
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <Line></Line>
              <ExtraView>
                <ExtraText>Already having an account</ExtraText>
                <TextLink>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatepicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatepicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
