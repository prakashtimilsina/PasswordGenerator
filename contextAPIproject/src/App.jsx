import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-center bg-orange-400 font-bold">Hello ContextAPI</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
