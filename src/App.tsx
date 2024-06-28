import {View} from 'react-native';
import { styles } from './config/app-theme';
import { TemperatureControl } from './presentation/screens/TemperatureControl';
import { ColorsScreen } from './presentation/screens/ColorsScreen';

export const App = () => {
  return (
    <View style={styles.container}>
      {/* <TemperatureControl/> */}
      <ColorsScreen />
    </View>
  );
};


