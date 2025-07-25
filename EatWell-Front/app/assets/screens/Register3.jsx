// app/assets/screens/Register3.js
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, Image, TextInput, Alert, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSignUpContext } from '../context/SignUpContext';

export default function Register3Screen() {
    const { signUpData, setSignUpData } = useSignUpContext();
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [gender, setGender] = useState("");
    const [weightGoal, setWeightGoal] = useState("");
    const [activeInput, setActiveInput] = useState(null);

    const navigation = useNavigation();

    const handleContinue = () => {
        setSignUpData({ 
            ...signUpData, 
            weight, 
            height, 
            gender,
            weightGoal 
        });

        const validateWeight = (weight) => {
            const weightNum = parseFloat(weight);
            return !isNaN(weightNum) && weightNum >= 30 && weightNum <= 300;
        };

        if (!validateWeight(weight)) {
            Alert.alert("Invalid weight", "Please enter a valid weight between 30 and 300 kg.");
            return;
        }

        const validateWeightGoal = (weightGoal) => {
            const weightNum = parseFloat(weightGoal);
            return !isNaN(weightNum) && weightNum >= 30 && weightNum <= 300;
        };

        if (!validateWeightGoal(weightGoal)) {
            Alert.alert("Invalid weight goal", "Please enter a valid weight between 30 and 300 kg.");
            return;
        }

        const validateHeight = (height) => {
            const heightNum = parseFloat(height);
            return !isNaN(heightNum) && heightNum >= 100 && heightNum <= 300;
        };
        
        if (!validateHeight(height)) {
            Alert.alert("Invalid height", "Please enter a valid height between 100 and 300 cm.");
            return;
        }
        if (!gender) {
            Alert.alert("Gender not selected", "Please select your gender.");
            return;
        }

        console.log("Registering:", { weight, height, gender });
        navigation.navigate('Register4');
    };

    // Handle inputs without the enter button

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>

            <View style={styles.header}>
                <Image 
                    source={{ uri: 'https://i.postimg.cc/HxgKzxMj/cropped-image-11.png' }} 
                    style={styles.logo} 
                />
                <Text style={styles.title}>Register</Text>
                <Text style={styles.stepIndicator}>3/5</Text>
            </View>
            <ScrollView contentContainerStyle={styles.formContainer}>
                <TextInput
                    value={weight}
                    onChangeText={(text) => setWeight(text)}
                    placeholder="Weight (Kg)"
                    style={[styles.input, activeInput === 'weight' && styles.activeInput]}
                    keyboardType="numeric"
                    onFocus={() => setActiveInput('weight')}
                />
                <TextInput
                    value={height}
                    onChangeText={(text) => setHeight(text)}
                    placeholder="Height (Cm)"
                    style={[styles.input, activeInput === 'height' && styles.activeInput]}
                    keyboardType="numeric"
                    onFocus={() => setActiveInput('height')}
                />
                <TextInput
                    value={weightGoal}
                    onChangeText={(text) => setWeightGoal(text)}
                    placeholder="Weight Goal (Kg)" 
                    style={[styles.input, activeInput === 'weightGoal' && styles.activeInput]}
                    keyboardType="numeric"
                    onFocus={() => setActiveInput('weightGoal')}
                />
                <View style={styles.genderContainer}>
                    <TouchableOpacity 
                        style={[styles.genderButton, gender === 'female' && styles.genderButtonSelected]} 
                        onPress={() => setGender('female')}
                    >
                        <Text style={[styles.genderText, gender === 'female' && styles.selectedGenderText]}>F</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.genderButton, gender === 'male' && styles.genderButtonSelected]} 
                        onPress={() => setGender('male')}
                    >
                        <Text style={[styles.genderText, gender === 'male' && styles.selectedGenderText]}>M</Text>
                    </TouchableOpacity>
                </View>



                <TouchableOpacity style={styles.button} onPress={handleContinue}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#161E21',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
        padding: 10,
        borderRadius: 5,
    },
    backButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: 20,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    stepIndicator: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 20,
    },
    formContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
    },
    activeInput: {
        borderWidth: 2,
        borderColor: '#1E9947',
    },
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        marginBottom: 20,
    },
    genderButton: {
        width: 100,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    genderButtonSelected: {
        backgroundColor: '#1E9947',
    },
    genderText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectedGenderText: {
        color: '#fff',
    },

    button: {
        width: 300,
        height: 50,
        backgroundColor: '#1E9947',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});