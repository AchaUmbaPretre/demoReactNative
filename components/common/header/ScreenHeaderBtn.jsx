import { Image, TouchableOpacity } from "react-native";
import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image/>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
