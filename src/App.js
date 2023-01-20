import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./style.css";
import "./assets/vendor/bootstrap.min.css";
// import "./assets/vendor/font-awesome.css";
import "./assets/vendor/slick-theme.css";
import "./assets/vendor/slick.css";
import "./assets/vendor/base.css";
import HomeCreativeBlog from "./components/Home/HomeCreativeBlog";
// import "./assets/js/main.js";
// import "./assets/js/vendor/Jquery.js";
// import "./assets/js/vendor/jquery.style.switcher.js";
// import "./assets/js/vendor/js.cookie";
import "./assets/js/vendor/bootstrap.min.js";
import HomeSeoBlog from "./components/Home/HomeSeoBlog";
import HomeTechBlog from "./components/Home/HomeTechBlog";
import "./assets/js/vendor/modernizr.min.js";
import "./assets/js/vendor/slick.min.js";
import HomeLifestyleBlog from "./components/Home/HomeLifestyleBlog";
import PostFormatStandard from "./components/Post/PostFormatStandard";
import PostFormatVideo from "./components/Post/PostFormatVideo";
import PostFormatGallery from "./components/Post/PostFormatGallery";
import PostFormatText from "./components/Post/PostFormatText";
import PostLayout1 from "./components/Post/PostLayout1";
import PostLayout2 from "./components/Post/PostLayout2";
import PostLayout3 from "./components/Post/PostLayout3";
import PostLayout4 from "./components/Post/PostLayout4";
import PostLayout5 from "./components/Post/PostLayout5";
import PostList from "./components/Pages/PostList";
import PostArchive from "./components/Pages/PostArchive";
import AuthorPage from "./components/Pages/AuthorPage";
import AboutPage from "./components/Pages/AboutPage";
import Error from "./components/Pages/Error";
import Maintenance from "./components/Pages/Maintenance";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import Contact from "./components/Pages/Contact";
import "./assets/js/vendor/tweenmax.min.js";
import Theme from "./components/Theme/Theme";
import { useSelector } from "react-redux";
import { selectThemeColor } from "./store/theme";
function App() {
  const themeColor = useSelector(selectThemeColor);
  return (
    <div className={"App"}>
      <BrowserRouter>
        <Theme />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HomeCreativeBlog" element={<HomeCreativeBlog />} />
          <Route path="/HomeSeoBlog" element={<HomeSeoBlog />} />
          <Route path="/HomeTechBlog" element={<HomeTechBlog />} />
          <Route path="/HomeLifestyleBlog" element={<HomeLifestyleBlog />} />
          <Route path="/PostFormatStandard" element={<PostFormatStandard />} />
          <Route path="/PostFormatVideo" element={<PostFormatVideo />} />
          <Route path="/PostFormatGallery" element={<PostFormatGallery />} />
          <Route path="/PostFormatText" element={<PostFormatText />} />
          <Route path="/PostLayout1" element={<PostLayout1 />} />
          <Route path="/PostLayout2" element={<PostLayout2 />} />
          <Route path="/PostLayout3" element={<PostLayout3 />} />
          <Route path="/PostLayout4" element={<PostLayout4 />} />
          <Route path="/PostLayout5" element={<PostLayout5 />} />
          <Route path="/PostList" element={<PostList />} />
          <Route path="/PostArchive" element={<PostArchive />} />
          <Route path="/Author" element={<AuthorPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/Maintenance" element={<Maintenance />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
