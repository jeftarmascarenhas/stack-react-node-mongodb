import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/main";
import Profile from "./pages/profile";

const MainStack = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: "DevRadar"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Perfil no Github"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: "#7d40e7"
      },
      headerTintColor: "#fff"
    }
  }
);

const Routes = createAppContainer(MainStack);

export default Routes;
