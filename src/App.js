import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import getTempByCityName from './api/getTempByCityName';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: null,
            temp: null,
            loading: false,
            err: false,
            txtCityName: ''
        }
        this.findTemp = this.findTemp.bind(this)
    }

    findTemp() {
        const currentCityName = this.state.txtCityName;
        this.setState({ loading: true, cityName: null, temp: null })
        getTempByCityName(currentCityName)
            .then(temp => {
                this.setState({ loading: false, cityName: currentCityName, temp, txtCityName: '' })
            })
            .catch(err => this.setState({ loading: false, txtCityName: '', err: true }))
    }

    render() {
        const { cityName, temp, loading, err } = this.state;
        let resultText;
        if (cityName === null) resultText = 'Enter your CityName';
        if (loading) resultText = 'Loading....';
        if (err) resultText = 'Cannot Find your City Name';
        if (cityName !== null) resultText = `${cityName} is now ${temp}`;
        return (
            <View style={styles.container}>
                <Text style={styles.result}>{resultText}</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.txtCityName}
                    onChangeText={txt => this.setState({ txtCityName: txt })}
                />
                <TouchableOpacity style={styles.button} onPress={this.findTemp} >
                    <Text style={styles.buttonText}>Get Temp</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        paddingVertical: 60,
        justifyContent: 'center'
    },

    result: {
        color: 'green',
        fontSize: 30,
        margin: 20
    },

    textInput: {
        height: 45,
        width: 300,
        backgroundColor: 'white',
        margin: 30,
        paddingHorizontal: 10
    },

    button: {
        backgroundColor: 'green',
        margin: 20,
        padding: 20
    },

    buttonText: {
        color: 'yellow',
        fontSize: 20
    }
})