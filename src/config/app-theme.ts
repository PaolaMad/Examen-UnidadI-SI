import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
    },
    temperature: {
        fontSize: 50,
        padding: 20,
        color: 'white',
    },
    blueTemperature: {
        fontSize: 50,
        padding: 20,
        color: '#3322ef',
    },
    greenTemperature: {
        fontSize: 50,
        padding: 20,
        color: '#14e60c',
    },
    redTemperature: {
        fontSize: 50,
        padding: 20,
        color: '#ef2222',
    },
    minorButton: {
        backgroundColor: '#1e756d',
        paddingHorizontal: 20,
        width: 25,
        height: 25,
        borderRadius: 8,
        fontSize: 25,
        borderWidth: 1,
        marginVertical: -25,
        color: 'black',
    },
    plusButton: {
        paddingHorizontal: 20,
        backgroundColor: '#1e756d',
        width: 25,
        height: 25,
        borderRadius: 8,
        fontSize: 25,
        borderWidth: 1,
        marginHorizontal: 50,
        color: 'black',
    },
    colorsButton: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 15,
        padding: 11,
        fontSize: 20,
    },
    colorsScreen: {
        flex: 1,
    },
});
