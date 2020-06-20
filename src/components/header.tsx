import React from "react";
import { Box, Text } from "react-native-design-utility";


const Header: React.FC = () => {
  return (
    <Box mx={20} center>
      <Text size={30} bold style={{fontFamily: "Teko-Regular"}}>
        Rand Pass
      </Text>
    </Box>
  );
};

export default Header;
