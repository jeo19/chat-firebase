import Main from "./components/Chat";
import Chat from "./components/Main";
import {createStackNavigator} from "react-navigation";

const navigator=createStackNavigator({
  Main:{screen:Main},
  Chat:{screen:Chat},
});
export default navigator;