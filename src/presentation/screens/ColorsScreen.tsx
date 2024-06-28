import { Pressable, Text, View } from 'react-native';
import { styles } from '../../config/app-theme';
import { useState } from 'react';


export const ColorsScreen = () => {
    const [color, SetColor] = useState('');

    const colors = () => {
        const charset = '0123456789ABCDEF';
        let newColor = '';
        for (let i = 0; i < 6; i++) {
            newColor = (charset.charAt(Math.floor(Math.random() * charset.length)));
        }
        SetColor(newColor);
    };

    return (
        <View>
            <Pressable onPress={colors}>
                <Text style={styles.colorsButton}>Cambiar Color</Text>
            </Pressable>
        </View >
    );
};


