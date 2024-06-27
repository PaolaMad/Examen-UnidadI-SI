import {View} from 'react-native';
import { TestScreen } from './presentation/screens/TestScreen';
import { styles } from './config/app-theme';

export const App = () => {
  return (
    <View style={styles.container}>
      <TestScreen />
    </View>
  );
};
