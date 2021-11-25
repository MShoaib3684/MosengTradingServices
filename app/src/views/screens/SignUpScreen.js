import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';



const SignUpScreen = ({ navigation }) => {

    const [checked, setChecked] = React.useState('first');
    return (
        <SafeAreaView
            style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginTop: "10%", alignContent: 'center', justifyContent: 'center' }}>
                </View>
                <View style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 28, color: COLORS.dark, alignSelf: 'center' }}>
                        Welcome to
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 28, color: COLORS.dark, alignSelf: 'center' }}>
                        Moseng Trading Services
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: COLORS.light, alignSelf: 'center' }}>
                        Create a new Account
                    </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}>

                        <TextInput placeholder="Full Name" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>

                        <TextInput
                            placeholder="Password"
                            style={STYLES.input}
                            secureTextEntry
                        />

                    </View>
                    <View style={STYLES.inputContainer}>

                        <TextInput placeholder="Email" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>

                        <TextInput
                            placeholder="Password"
                            style={STYLES.input}
                            secureTextEntry
                        />
                    </View>
                    <View style={STYLES.inputContainer}>

                        <TextInput placeholder="+1 ^" style={STYLES.input} />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: COLORS.light, }}>I am a: </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: COLORS.light, }}>Driver </Text>
                        </View>
                        <RadioButton
                            value="first"
                            color={COLORS.code}
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: COLORS.light, }}>Customer </Text>
                        </View>
                        <RadioButton
                            value="second"
                            color={COLORS.code}
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <View style={{}}>
                            <View style={STYLES.btnSecondary}>

                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                                    Signup
                                </Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        <Text style={{ color: COLORS.light, fontSize: 18 }}>
                            Already a user?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text
                                style={{
                                    color: COLORS.code,
                                    fontWeight: '500', fontSize: 18
                                }}> Signin
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen;
