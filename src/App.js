import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Toastify from "./components/Toastify/Toastify";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import ComContextProvider from "./contexts/ComContextProvider";
import FavoriteContextProvider from "./contexts/FavContextProvider";
import LikeContextProvider from "./contexts/LikeContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  AOS.init({
    duration: 2000,
  });
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
