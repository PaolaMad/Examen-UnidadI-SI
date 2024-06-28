import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../config/app-theme';

export const TemperatureControl = () => {
    const [temperature, setTemperatura] = useState(20);

    const temperatureColors = () => {
        if(temperature < 15){
            styles.blueTemperature;
        }
        if(temperature === 15 || temperature < 25){
            styles.greenTemperature;
        }
        if(temperature > 25){
            styles.redTemperature;
        }
    };

    return (
        <View>
            <Text style={styles.title}>Control de Temperatura</Text>
            <View>

                <Text
                    style={styles.temperature}>
                    {temperature}
                </Text>

                <Pressable
                    onPress={() => setTemperatura(temperature - 1)}
                    style={{...styles.minorButton, color: 'green' ? 'black' : 'white'}}
                >
                    <Text>-</Text>
                </Pressable>

                <Pressable
                    style={styles.plusButton}
                    onPress={() => setTemperatura(temperature + 1)}
                >
                    <Text>+</Text>
                </Pressable>
            </View>
        </View>
    );
};


// 1. Crear una aplicación que simule un control de temperatura. (30%):
// a. Crear un estado llamado temperature inicializado en 20.
// b. Añadir botones para aumentar y disminuir la temperatura.
// c. Cambiar el color del texto de la temperatura según el rango: azul para menos de 15, verde para
// 15-25, y rojo para más de 25.