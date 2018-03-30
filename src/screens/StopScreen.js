"use strict";

import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class StopScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "00:00.00",
            buttonLeft: "Reset",
            buttonRight: "Start",
            colorButtonLeft: "red",
            colorButtonRight: "blue",
            isRunning: false,
            countTime: 0
        };
    }

    _clickStart = () => {
        let checkRunning = this.state.isRunning;
        this.setState({
            isRunning: !checkRunning,
            buttonRight: checkRunning ? "Start" : "Stop",
            buttonLeft: checkRunning ? "Reset" : "Lap"
        });
    };
    //
    // startTimer()  {
    //     this.interval = setInterval(( = {
    //         if (this.state.isRunning) {
    //
    //         }
    //     }, 10))
    // }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.textCount}>{this.state.time}</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.controlContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text
                                style={[
                                    styles.textButton,
                                    { color: `${this.state.colorButtonLeft}` }
                                ]}
                            >
                                {this.state.buttonLeft}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this._clickStart}
                        >
                            <Text
                                style={[
                                    styles.textButton,
                                    { color: `${this.state.colorButtonRight}` }
                                ]}
                            >
                                {this.state.buttonRight}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    topContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 14,
        backgroundColor: "white"
    },
    bottomContainer: {
        flex: 5,
        backgroundColor: "gray"
    },
    controlContainer: {
        marginTop: 35,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    button: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        fontSize: 20
    },
    textCount: {
        fontSize: 80,
        color: "black"
    }
});
