import { createStackNavigator } from "react-navigation";

import VisualizarEntrega from "./Home/VisualizarEntrega";
import VisualizarPerfil from "./Home/VisualizarPerfil";
import SolicitarEntrega from "./Home/SolicitarEntrega";
import DetailDelivery from "./DetailDelivery";
import EntregasDisponiveis from "./Home/EntregasDisponiveis";

const StackHome = createStackNavigator(
  {
    VisualizarEntrega: {
      screen: VisualizarEntrega
    },
    VisualizarPerfil: {
      screen: VisualizarPerfil
    },
    SolicitarEntrega: {
      screen: SolicitarEntrega
    },
    EntregasDisponiveis: {
      screen: EntregasDisponiveis
    },
    DetailDelivery: {
      screen: DetailDelivery
    }
  },
  {
    initialRouteName: "EntregasDisponiveis",
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
export default StackHome;
