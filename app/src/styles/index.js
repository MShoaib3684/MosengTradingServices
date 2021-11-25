import { StyleSheet } from "react-native";
import COLORS from "../consts/color";

const STYLES = StyleSheet.create({
    inputContainer:
    {
        flexDirection: 'row',
        marginTop: 20,
    },

    inputIcon: {
        marginTop: 15,
        position: 'absolute',
        marginLeft: 10,

    },
    inputIconl: {
        marginTop: 15,
        position: 'absolute',
        marginLeft: "90%",

    },
    input: {
        color: COLORS.light,
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 20,
        fontWeight: '900',
    },

    textBox: {
        paddingLeft: 40,
        color: '#fff',
        backgroundColor: '#fff',
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: '#fff',
        borderWidth: 1,

    },
    btnPrimary: {
        backgroundColor: COLORS.code,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    line: {
        height: 1,
        widht: 30,
        backgroundColor: COLORS.light,
    },
    btnSecondary: {
        backgroundColor: COLORS.code,
        height: 50,
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    btnImage: {
        width: 50,
        height: 50,
        marginLeft: 5,
    },
    btnImage1: {
        width: 45,
        height: 45,
        marginLeft: 5,
    },
    container: {
        paddingHorizontal: 5,
        paddingVertical: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    btnVerify: {
        backgroundColor: COLORS.code,
        height: 50,
        marginTop: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        color: '#000',
    },
    verificationCodeInputViewBox: {
        backgroundColor: '#fff',
        height: 60,
        marginHorizontal: 50,
        marginTop: 20,
        flexDirection: 'row',
    },
    verificationCodeInputView: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    verificationCodeInput: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        color: '#000000',
        fontSize: 27,
        borderBottomColor: '#828282',
        borderBottomWidth: 5,
        fontWeight: '700',
        marginHorizontal: 10,
    },
    otpBoxesContainer: {
        flexDirection: 'row',
    },
    otpBox: {
        padding: 40,
        marginRight: 20,
        borderWidth: 10,
        borderColor: '#F5F5F5',
        height: 45,
        width: 45,
        textAlign: 'center',
    },
});


export default STYLES;