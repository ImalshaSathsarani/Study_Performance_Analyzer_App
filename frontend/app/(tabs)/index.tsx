import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 justify-center items-center bg-primary"
    >
      <Text className="text-5xl  text-accent ">Welcome!</Text>
      <Link href="/service">Service(Manicure)</Link>
    </View>
  );
}
