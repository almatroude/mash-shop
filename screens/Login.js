import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';

// Icons

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
import { View } from 'react-native';

const { brand, darkLight, primary } = Colors;
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/images/image1.png')} />
        <PageTitle>MashShopp</PageTitle>
        <SubTitle>Account Login</SubTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
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
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <Line></Line>
              <StyledButton google={true} onPress={handleSubmit}>
                <Fontisto name="google" color={primary} size={20} />
                <ButtonText google={true}>Sign in with Google</ButtonText>
              </StyledButton>
              <ExtraView>
                <ExtraText>Don't have Account already?</ExtraText>
                <TextLink><TextLinkContent>Signup</TextLinkContent></TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
