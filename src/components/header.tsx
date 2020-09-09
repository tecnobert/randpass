import { Box, Text } from "react-native-design-utility";

import React from "react";

const Header: React.FC = () => {
  return (
    <Box mx={20} center>
      <Text size={30} bold style={{fontFamily: "Poppins_400Regular"}}>
        Rand Pass
      </Text>
    </Box>
  );
};

export default Header;
