import React from "react";
import { Button } from "react-native-paper";
import theme from "../constants/theme";

interface Props {
    loading: boolean;
    generatePassword: () => void;
}

const GeneratePasswordButton: React.FC<Props> = ({
    loading,
    generatePassword,
}) => {
    return (
        <Button
            style={{
                height: 50,
                margin: 20,
                justifyContent: "center",
                borderRadius: 50,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}
            labelStyle={{ fontSize: 16 }}
            mode="contained"
            disabled={loading}
            loading={loading}
            color={theme.color.purple}
            onPress={generatePassword}
        >
            Generate password
        </Button>
    );
};

export default GeneratePasswordButton;
