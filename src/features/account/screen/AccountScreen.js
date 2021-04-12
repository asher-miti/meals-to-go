import React from 'react';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/Spacer';
import LottieView from 'lottie-react-native';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key='animation'
          autoPlay
          loop
          resizeMode='cover'
          source={require('../../../../assets/watermelon.json')}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon='lock-open-outline'
          color='black'
          mode='contained'
          onPress={() => navigation.navigate('Login')}>
          Login
        </AuthButton>
        <Spacer size='large'>
          <AuthButton
            icon='email'
            mode='contained'
            onPress={() => navigation.navigate('Register')}>
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
