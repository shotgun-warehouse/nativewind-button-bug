import './global.css';
import { Button, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Hello World</Text>
      <Button title='test' />
    </View>
  );
}
