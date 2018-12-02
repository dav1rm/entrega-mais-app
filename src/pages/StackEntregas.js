import { createStackNavigator } from "react-navigation";

import AcompanharEntrega from "./Entregas/AcompanharEntrega";
import MinhasEntregas from "./Entregas/MinhasEntregas";

const StackEntregas = createStackNavigator(
  {
    AcompanharEntrega: {
      screen: AcompanharEntrega
    },
    MinhasEntregas: {
      screen: MinhasEntregas
    }
  },
  {
    initialRouteName: "MinhasEntregas",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#0D3782"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16
      }
    }
  }
);
export default StackEntregas;
