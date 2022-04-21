import "./App.css";
import Toastify from "./components/Toastify/Toastify";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import ComContextProvider from "./contexts/ComContextProvider";
import FavoriteContextProvider from "./contexts/FavContextProvider";
import LikeContextProvider from "./contexts/LikeContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <AuthContextProvider>
      <LikeContextProvider>
        <CartContextProvider>
          <FavoriteContextProvider>
            <ComContextProvider>
              <ProductContextProvider>
                <Toastify />
                <MyRoutes />
              </ProductContextProvider>
            </ComContextProvider>
          </FavoriteContextProvider>
        </CartContextProvider>
      </LikeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
