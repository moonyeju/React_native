import { Image, Text, StyleSheet, View, Keyboard, Alert } from 'react-native';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';
import { useRef, useState, useEffect } from 'react';
import Button from '../components/Button';
import { signIn } from '../api/auth';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!disabled && !isLoading) {
      Keyboard.dismiss();
      setIsLoading(true);
      try {
        const data = await signIn(email, password);
        console.log(data);
        setIsLoading(false);
      } catch (e) {
        Alert.alert('SignIn Failed', e, [
          {
            text: 'OK',
            onPress: () => setIsLoading(false),
          },
        ]);
      }
    }
  };
  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image
          source={require('../../assets/main.png')}
          style={styles.image}
          resizeMode={'cover'}
        />
        <Input
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          title={'email'}
          placeholder={'your@email.com'}
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          iconName={IconNames.EMAIL}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          title={'password'}
          secureTextEntry
          iconName={IconNames.PASSWORD}
          onSubmitEditing={onSubmit}
        />
        <View style={styles.buttonContainer}>
          <Button
            title={'LOGIN'}
            onPress={onSubmit}
            disabled={disabled}
            isLoading={isLoading}
          />
        </View>
      </View>
    </SafeInputView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
export default SignInScreen;
