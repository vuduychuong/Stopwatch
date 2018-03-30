import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StopScreen from "./src/screens/StopScreen";

export default class App extends React.Component {
    render() {
        return <StopScreen />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
