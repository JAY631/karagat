import React, {useState} from "react";
import logoBlack from "../../images/logo/logo-black.png";
import logoWhite from "../../images/logo/logo-white.png";
import logoWhite2 from "../../images/logo/logo-white2.png";
import author from "../../images/others/author.png";
import megaPost01 from "../../images/others/mega-post-01.jpg";
import categoryImage01 from "../../images/post-images/category-image-01.jpg";
import blogSm01 from "../../images/small-images/blog-sm-01.jpg";
import instagram01 from "../../images/small-images/instagram-01.jpg";
import instagram from "../../images/small-images/instagram-md-06.jpg";
import postMd01 from "../../images/post-single/post-md-01.jpg";
import authorImage3 from "../../images/post-images/author/author-image-3.png";
import postSingle01 from "../../images/post-single/post-single-01.jpg";
import authorB1 from "../../images/post-images/author/author-b1.png";
import ads01 from "../../images/post-single/ads-01.jpg";
import banner02 from "../../images/add-banner/banner-02.png";
import stories01 from "../../images/post-single/stories-01.jpg";
import { useSelector } from "react-redux";
import { selectThemeColor } from "../../store/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
function change(num, from, to, target) {
  for (let i = 0; i < document.getElementsByClassName(target).length; i++) {
    document.getElementsByClassName(target)[i].classList.remove(to)
    document.getElementsByClassName(target)[num].classList.add(to)
  }
}

export default function PostFormatStandard() {
  const [showBurger, setShowBurger] = useState(false);
  const burgerFunc = () =>{
    setShowBurger(!showBurger)
  }
  const themeColor = useSelector(selectThemeColor);
  return (
    <>
      <div className={showBurger ? "main-wrapper popup-mobile-menu-show" : 'main-wrapper'}>
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />
       
        {/* Start Header */}
        <header className={"header axil-header  header-light header-sticky header-with-shadow" + themeColor}>
          <div className="header-wrap">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
                <div className="logo">
                  <a href="index.html">
                    <img
                      className="dark-logo"
                      src={logoBlack}
                      alt="Blogar logo"
                    />
                    <img
                      className="light-logo"
                      src={logoWhite2}
                      alt="Blogar logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-block">
                <div className="mainmenu-wrapper">
                  <nav className="mainmenu-nav">
                    {/* Start Mainmanu Nav */}
                    <ul className="mainmenu">
                      <li className="menu-item-has-children">
                        <a href="#">Home</a>
                        <ul className="axil-submenu">
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="index.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Home Default">
                                  Home Default
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="home-creative-blog.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Home Creative Blog">
                                  Home Creative Blog
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="home-seo-blog.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Home SEO Blog">
                                  Home SEO Blog
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="home-tech-blog.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Home Tech Blog">
                                  Home Tech Blog
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="home-lifestyle-blog.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Home Lifestyle Blog">
                                  Home Lifestyle Blog
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Posts</a>
                        <ul className="axil-submenu">
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="post-format-standard.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Format Standard">
                                  Post Format Standard
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="post-format-video.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Format Video">
                                  Post Format Video
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="post-format-gallery.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Format Gallery">
                                  Post Format Gallery
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="post-format-text.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Format Text Only">
                                  Post Format Text Only
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="post-layout-1.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Layout One">
                                  Post Layout One
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="post-layout-2.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Layout Two">
                                  Post Layout Two
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="post-layout-3.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Layout Three">
                                  Post Layout Three
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="post-layout-4.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Layout Four">
                                  Post Layout Four
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="post-layout-5.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Layout Five">
                                  Post Layout Five
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children megamenu-wrapper">
                        <a href="#">Mega Menu</a>
                        <ul className="megamenu-sub-menu">
                          <li className="megamenu-item">
                            {/* Start Verticle Nav  */}
                            <div className="axil-vertical-nav">
                              <ul className="vertical-nav-menu">
                                <li className="vertical-nav-item active" onMouseEnter={()=>change(0, "", "active", "vertical-nav-item")}>
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#tab1"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="Accessibility">
                                        Accessibility
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li className="vertical-nav-item" onMouseEnter={()=>change(1, "", "active", "vertical-nav-item")}>
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#tab2"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="Android Dev">
                                        Android Dev
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li className="vertical-nav-item" onMouseEnter={()=>change(2, "", "active", "vertical-nav-item")}>
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#tab3"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="Blockchain">
                                        Blockchain
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li className="vertical-nav-item" onMouseEnter={()=>change(3, "", "active", "vertical-nav-item")}>
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#tab4"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="Gadgets">Gadgets</span>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* Start Verticle Nav  */}
                            {/* Start Verticle Menu  */}
                            <div className="axil-vertical-nav-content">
                              {/* Start One Item  */}
                              <div
                                className="axil-vertical-inner tab-content"
                                id="tab1"
                                style={{ display: "block" }}
                              >
                                <div className="axil-vertical-single">
                                  <div className="row">
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="DESIGN">
                                                    DESIGN
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              India may require online shops to
                                              hand
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="CREATIVE">
                                                    CREATIVE
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              Lightweight, grippable, and ready
                                              to go.
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="TRAVEL">
                                                    TRAVEL
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              Bold new experience. Same Mac
                                              magic.
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="GADGETS">
                                                    GADGETS
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              Creative Game With The New DJI
                                              Mavic Air
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                  </div>
                                </div>
                              </div>
                              {/* End One Item  */}
                              {/* Start One Item  */}
                              <div
                                className="axil-vertical-inner tab-content"
                                id="tab2"
                              >
                                <div className="axil-vertical-single">
                                  <div className="row">
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="DESIGN">
                                                    DESIGN
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              India may require online shops to
                                              hand
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="DESIGN">
                                                    DESIGN
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              Lightweight, grippable, and ready
                                              to go.
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="DESIGN">
                                                    DESIGN
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              Bold new experience. Same Mac
                                              magic.
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="DESIGN">
                                                    DESIGN
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              Creative Game With The New DJI
                                              Mavic Air
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                  </div>
                                </div>
                              </div>
                              {/* End One Item  */}
                              {/* Start One Item  */}
                              <div
                                className="axil-vertical-inner tab-content"
                                id="tab3"
                              >
                                <div className="axil-vertical-single">
                                  <div className="row">
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="DESIGN">
                                                    DESIGN
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              Creative Game With The New DJI
                                              Mavic Air
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="DESIGN">
                                                    DESIGN
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              Bold new experience. Same Mac
                                              magic.
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="DESIGN">
                                                    DESIGN
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              Lightweight, grippable, and ready
                                              to go.
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="DESIGN">
                                                    DESIGN
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              India may require online shops to
                                              hand
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                  </div>
                                </div>
                              </div>
                              {/* End One Item  */}
                              {/* Start One Item  */}
                              <div
                                className="axil-vertical-inner tab-content"
                                id="tab4"
                              >
                                <div className="axil-vertical-single">
                                  <div className="row">
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="DESIGN">
                                                    DESIGN
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              India may require online shops to
                                              hand
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="DESIGN">
                                                    DESIGN
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              Lightweight, grippable, and ready
                                              to go.
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="DESIGN">
                                                    DESIGN
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              Bold new experience. Same Mac
                                              magic.
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img
                                              className="w-100"
                                              src={megaPost01}
                                              alt="Post Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a
                                                className="hover-flip-item-wrapper"
                                                href="#"
                                              >
                                                <span className="hover-flip-item">
                                                  <span data-text="DESIGN">
                                                    DESIGN
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">
                                              Creative Game With The New DJI
                                              Mavic Air
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Post List  */}
                                  </div>
                                </div>
                              </div>
                              {/* End One Item  */}
                            </div>
                            {/* End Verticle Menu  */}
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="axil-submenu">
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="post-list.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post List">Post List</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="archive.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Archive">
                                  Post Archive
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="author.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Author Page">Author Page</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="about.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="About Page">About Page</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="contact.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Contact Us">Contact Us</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="404.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="404 Page">404 Page</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="maintenance.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Maintenance">Maintenance</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover-flip-item-wrapper"
                              href="privacy-policy.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Privacy Policy">
                                  Privacy Policy
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="home-lifestyle-blog.html">Lifestyle</a>
                      </li>
                      <li>
                        <a href="home-tech-blog.html">Gadgets</a>
                      </li>
                    </ul>
                    {/* End Mainmanu Nav */}
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-8 col-md-8 col-sm-9 col-12">
                <div className="header-search text-end d-flex align-items-center">
                  <form className="header-search-form d-sm-block d-none">
                    <div className="axil-search form-group">
                      <button type="submit" className="search-button">
                        <i className="fal fa-search" />
                      </button>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                  <div className="mobile-search-wrapper d-sm-none d-block">
                    <button className="search-button-toggle">
                      <i className="fal fa-search" />
                    </button>
                    <form className="header-search-form">
                      <div className="axil-search form-group">
                        <button type="submit" className="search-button">
                          <i className="fal fa-search" />
                        </button>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </div>
                  <ul className="metabar-block"> 
                    <li className="icon">
                      <a href="#" className="icons">
                        <i className="fas fa-bookmark" />
                      </a>
                    </li>
                    <li className="icon">
                      <a href="#" className="icons">
                        <i className="fas fa-bell" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={author} alt="Author Images" />
                      </a>
                    </li>
                  </ul>
                  {/* Start Hamburger Menu  */}
                  <div className="hamburger-menu d-block d-xl-none">
                    <div className="hamburger-inner">
                    <div className="icon icons" onClick={burgerFunc}>
                        <FontAwesomeIcon icon={faBars} />
                      </div>
                    </div>
                  </div>
                  {/* End Hamburger Menu  */}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Start Header */}
        {/* Start Mobile Menu Area  */}
        <div className={"popup-mobilemenu-area"} onClick={burgerFunc}>
          <div className={"inner" + themeColor}  onClick={(event)=> event.stopPropagation()}>
            <div className="mobile-menu-top">
              <div className="logo">
                <a href="index.html">
                  <img
                    className="dark-logo"
                    src={logoBlack}
                    alt="Logo Images"
                  />
                  <img
                    className="light-logo"
                    src={logoWhite2}
                    alt="Logo Images"
                  />
                </a>
              </div>
              <div className="mobile-close" onClick={burgerFunc}>
                <div className="icon">
                  <i><FontAwesomeIcon icon={faX}/></i>
                </div>
              </div>
            </div>
            <ul className="mainmenu">
              <li className="menu-item-has-children">
                <a href="#">Home</a>
                <ul className="axil-submenu">
                  <li>
                    <a href="index.html">Home Default</a>
                  </li>
                  <li>
                    <a href="home-creative-blog.html">Home Creative Blog</a>
                  </li>
                  <li>
                    <a href="home-seo-blog.html">Home Seo Blog</a>
                  </li>
                  <li>
                    <a href="home-tech-blog.html">Home Tech Blog</a>
                  </li>
                  <li>
                    <a href="home-lifestyle-blog.html">Home Lifestyle Blog</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Categories</a>
                <ul className="axil-submenu">
                  <li>
                    <a href="post-details.html">Accessibility</a>
                  </li>
                  <li>
                    <a href="post-details.html">Android Dev</a>
                  </li>
                  <li>
                    <a href="post-details.html">Accessibility</a>
                  </li>
                  <li>
                    <a href="post-details.html">Android Dev</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Post Format</a>
                <ul className="axil-submenu">
                  <li>
                    <a href="post-format-standard.html">Post Format Standard</a>
                  </li>
                  <li>
                    <a href="post-format-video.html">Post Format Video</a>
                  </li>
                  <li>
                    <a href="post-format-gallery.html">Post Format Gallery</a>
                  </li>
                  <li>
                    <a href="post-format-text.html">Post Format Text Only</a>
                  </li>
                  <li>
                    <a href="post-layout-1.html">Post Layout One</a>
                  </li>
                  <li>
                    <a href="post-layout-2.html">Post Layout Two</a>
                  </li>
                  <li>
                    <a href="post-layout-3.html">Post Layout Three</a>
                  </li>
                  <li>
                    <a href="post-layout-4.html">Post Layout Four</a>
                  </li>
                  <li>
                    <a href="post-layout-5.html">Post Layout Five</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="axil-submenu">
                  <li>
                    <a href="post-list.html">Post List</a>
                  </li>
                  <li>
                    <a href="archive.html">Post Archive</a>
                  </li>
                  <li>
                    <a href="author.html">Author Page</a>
                  </li>
                  <li>
                    <a href="about.html">About Page</a>
                  </li>
                  <li>
                    <a href="maintenance.html">Maintenance</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="404.html">404 Page</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
            <div className="buy-now-btn">
              <a href="#">
                Buy Now <span className="badge">$15</span>
              </a>
            </div>
          </div>
        </div>
        {/* End Mobile Menu Area  */}
        {/* Start Banner Area */}
        <div className={"banner banner-single-post post-formate post-standard alignwide" + themeColor}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Start Single Slide  */}
                <div className="content-block">
                  {/* Start Post Thumbnail  */}
                  <div className="post-thumbnail">
                    <img src={postSingle01} alt="Post Images" />
                  </div>
                  {/* End Post Thumbnail  */}
                  {/* Start Post Content  */}
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="FEATURED POST">FEATURED POST</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h1 className="title">
                      Apple honors eight developers with annual Apple Design
                      Awards
                    </h1>
                    {/* Post Meta  */}
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="post-author-avatar border-rounded">
                          <img src={authorImage3} alt="Author Images" />
                        </div>
                        <div className="content">
                          <h6 className="post-author-name">
                            <a
                              className="hover-flip-item-wrapper"
                              href="author.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Ismat Jahan">Ismat Jahan</span>
                              </span>
                            </a>
                          </h6>
                          <ul className="post-meta-list">
                            <li>Feb 17, 2019</li>
                            <li>300k Views</li>
                          </ul>
                        </div>
                      </div>
                      <ul className="social-share-transparent justify-content-end">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-link" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Post Content  */}
                </div>
                {/* End Single Slide  */}
              </div>
            </div>
          </div>
        </div>
        {/* End Banner Area */}
        {/* Start Post Single Wrapper  */}
        <div className={"post-single-wrapper axil-section-gap bg-color-white" + themeColor}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="axil-post-details">
                  <p className="has-medium-font-size">
                    Winners are recognized for outstanding app design,
                    innovation, ingenuity, and technical achievement
                  </p>
                  <figure className="wp-block-image">
                    <img src={postSingle01} alt="Post Images" />
                    <figcaption>
                      The Apple Design Award trophy, created by the Apple Design
                      team, is a symbol of achievement and excellence.
                    </figcaption>
                  </figure>
                  <p>
                    Apple today named eight app and game developers receiving an
                    Apple Design Award, each one selected for being thoughtful
                    and creative. Apple Design Award winners bring distinctive
                    new ideas to life and demonstrate deep mastery of Apple
                    technology. The apps spring up from developers large and
                    small, in every part of the world, and provide users with
                    new ways of working, creating, and playing.
                  </p>
                  <p>
                    “Every year, app and game developers demonstrate exceptional
                    craftsmanship and we’re honoring the best of the best,” said
                    Ron Okamoto, Apple’s vice president of Worldwide Developer
                    Relations. “Receiving an Apple Design Award is a special and
                    laudable accomplishment. Past honorees have made some of the
                    most noteworthy apps and games of all time. Through their
                    vision, determination, and exacting standards, the winning
                    developers inspire not only their peers in the Apple
                    developer community, but all of us at Apple, too.”
                  </p>
                  <h2>Apple Design Award Winners: Apps</h2>
                  <p>
                    {" "}
                    Apple today named eight app and game developers receiving an
                    Apple Design Award, each one selected for being thoughtful
                    and creative. Apple Design Award winners bring distinctive
                    new ideas to life and demonstrate deep mastery of Apple
                    technology. The apps spring up from developers large and
                    small, in every part of the world, and provide users with
                    new ways of working, creating, and playing.
                  </p>
                  <p>
                    “Every year, app and game developers demonstrate exceptional
                    craftsmanship and we’re honoring the best of the best,” said
                    Ron Okamoto, Apple’s vice president of Worldwide Developer
                    Relations. “Receiving an Apple Design Award is a special and
                    laudable accomplishment. Past honorees have made some of the
                    most noteworthy apps and games of all time. Through their
                    vision, determination, and exacting standards, the winning
                    developers inspire not only their peers in the Apple
                    developer community, but all of us at Apple, too.”
                  </p>
                  <blockquote>
                    <p>
                      “Most of us felt like we could trust each other to be
                      quarantined together, so we didn’t need to wear masks or
                      stay far apart.”
                    </p>
                  </blockquote>
                  <figure className="wp-block-image">
                    <img src={postSingle01} alt="Post Images" />
                    <figcaption>
                      The Apple Design Award trophy, created by the Apple Design
                      team, is a symbol of achievement and excellence.
                    </figcaption>
                  </figure>
                  <h2>Apple Design Award Winners: Apps</h2>
                  <p>
                    <a href="#">Apple today named</a> eight app and game
                    developers receiving an Apple Design Award, each one
                    selected for being thoughtful and creative. Apple Design
                    Award winners bring distinctive new ideas to life and
                    demonstrate deep mastery of Apple technology. The apps
                    spring up from developers large and small, in every part of
                    the world, and provide users with new ways of working,
                    creating, and playing.
                  </p>
                  <p>
                    “Every year, app and game developers demonstrate exceptional
                    craftsmanship and we’re honoring the best of the best,” said
                    Ron Okamoto, Apple’s vice president of Worldwide Developer
                    Relations. “Receiving an Apple Design Award is a special and
                    laudable accomplishment. Past honorees have made some of the
                    most noteworthy apps and games of all time. Through their
                    vision, determination, and exacting standards, the winning
                    developers inspire not only their peers in the Apple
                    developer community, but all of us at Apple, too.”
                  </p>
                  <figure className="wp-block-image">
                    <img src={postSingle01} alt="Post Images" />
                    <figcaption>
                      The Apple Design Award trophy, created by the Apple Design
                      team, is a symbol of achievement and excellence.
                    </figcaption>
                  </figure>
                  <h3>Apple Design Award Winners: Apps </h3>
                  <p>
                    {" "}
                    <a href="#">Apple today named</a> eight app and game
                    developers receiving an Apple Design Award, each one
                    selected for being thoughtful and creative. Apple Design
                    Award winners bring distinctive new ideas to life and
                    demonstrate deep mastery of Apple technology. The apps
                    spring up from developers large and small, in every part of
                    the world, and provide users with new ways of working,
                    creating, and playing.
                  </p>
                  <p>
                    “Every year, app and game developers demonstrate exceptional
                    craftsmanship and we’re honoring the best of the best,” said
                    Ron Okamoto, Apple’s vice president of Worldwide Developer
                    Relations. “Receiving an Apple Design Award is a special and
                    laudable accomplishment. Past honorees have made some of the
                    most noteworthy apps and games of all time. Through their
                    vision, determination, and exacting standards, the winning
                    developers inspire not only their peers in the Apple
                    developer community, but all of us at Apple, too.”{" "}
                  </p>
                  <p>
                    More than 250 developers have been recognized with Apple
                    Design Awards over the past 20 years. The recognition has
                    proven to be an accelerant for developers who are pioneering
                    innovative designs within their individual apps and
                    influencing entire categories. Previous winners such as
                    Pixelmator, djay, Complete Anatomy, HomeCourt, “Florence,”
                    and “Crossy Road” have set the standard in areas such as
                    storytelling, interface design, and use of Apple tools and
                    technologies.
                  </p>
                  <p>
                    For more information on the apps and games, visit the{" "}
                    <a href="#">App Store</a>.
                  </p>
                  <div className="tagcloud">
                    <a href="#">Design</a>
                    <a href="#">Life Style</a>
                    <a href="#">Web Design</a>
                    <a href="#">Development</a>
                    <a href="#">Design</a>
                    <a href="#">Life Style</a>
                  </div>
                  <div className="social-share-block">
                    <div className="post-like">
                      <a href="#">
                        <i className="fal fa-thumbs-up" />
                        <span>2.2k Like</span>
                      </a>
                    </div>
                    <ul className="social-icon icon-rounded-transparent md-size">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Start Author  */}
                  <div className="about-author">
                    <div className="media">
                      <div className="thumbnail">
                        <a href="#">
                          <img src={authorB1} alt="Author Images" />
                        </a>
                      </div>
                      <div className="media-body">
                        <div className="author-info">
                          <h5 className="title">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="Rahabi Ahmed Khan">
                                  Rahabi Ahmed Khan
                                </span>
                              </span>
                            </a>
                          </h5>
                          <span className="b3 subtitle">Sr. UX Designer</span>
                        </div>
                        <div className="content">
                          <p className="b1 description">
                            At 29 years old, my favorite compliment is being
                            told that I look like my mom. Seeing myself in her
                            image, like this daughter up top, makes me so proud
                            of how far I’ve come, and so thankful for where I
                            come from.
                          </p>
                          <ul className="social-share-transparent size-md">
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="far fa-envelope" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Author  */}
                  {/* Start Comment Form Area  */}
                  <div className="axil-comment-area">
                    <div className="axil-total-comment-post">
                      <div className="title">
                        <h4 className="mb--0">30+ Comments</h4>
                      </div>
                      <div className="cerchio">
                        <div className="add-comment-button">
                          <a
                            className="axil-button button-rounded"
                            href="post-details.html"
                            tabIndex={0}
                          >
                            <span>Add Your Comment</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Start Comment Respond  */}
                    <div className="comment-respond">
                      <h4 className="title">Post a comment</h4>
                      <form action="#">
                        <p className="comment-notes">
                          <span id="email-notes">
                            Your email address will not be published.
                          </span>{" "}
                          Required fields are marked{" "}
                          <span className="required">*</span>
                        </p>
                        <div className="row row--10">
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="form-group">
                              <label htmlFor="name">Your Name</label>
                              <input id="name" className="int" type="text" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="form-group">
                              <label htmlFor="email">Your Email</label>
                              <input id="email" className="int" type="email" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="form-group">
                              <label htmlFor="website">Your Website</label>
                              <input id="website" className="int" type="text" />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="message">Leave a Reply</label>
                              <textarea
                                className="int"
                                id="message"
                                name="message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <p className="comment-form-cookies-consent">
                              <input
                                id="wp-comment-cookies-consent"
                                name="wp-comment-cookies-consent"
                                type="checkbox"
                                defaultValue="yes"
                              />
                              <label htmlFor="wp-comment-cookies-consent">
                                Save my name, email, and website in this browser
                                for the next time I comment.
                              </label>
                            </p>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-submit cerchio">
                              <input
                                name="submit"
                                type="submit"
                                id="submit"
                                className="axil-button button-rounded"
                                defaultValue="Post Comment"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* End Comment Respond  */}
                    {/* Start Comment Area  */}
                    <div className="axil-comment-area">
                      <h4 className="title">2 comments</h4>
                      <ul className="comment-list">
                        {/* Start Single Comment  */}
                        <li className="comment">
                          <div className="comment-body">
                            <div className="single-comment">
                              <div className="comment-img">
                                <img src={authorB1} alt="Author Images" />
                              </div>
                              <div className="comment-inner">
                                <h6 className="commenter">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="Cameron Williamson">
                                        Cameron Williamson
                                      </span>
                                    </span>
                                  </a>
                                </h6>
                                <div className="comment-meta">
                                  <div className="time-spent">
                                    Nov 23, 2018 at 12:23 pm
                                  </div>
                                  <div className="reply-edit">
                                    <div className="reply">
                                      <a
                                        className="comment-reply-link hover-flip-item-wrapper"
                                        href="#"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="Reply">Reply</span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="comment-text">
                                  <p className="b2">
                                    Duis hendrerit velit scelerisque felis
                                    tempus, id porta libero venenatis. Nulla
                                    facilisi. Phasellus viverra magna commodo
                                    dui lacinia tempus. Donec malesuada nunc non
                                    dui posuere, fringilla vestibulum urna
                                    mollis. Integer condimentum ac sapien quis
                                    maximus.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul className="children">
                            {/* Start Single Comment  */}
                            <li className="comment">
                              <div className="comment-body">
                                <div className="single-comment">
                                  <div className="comment-img">
                                    <img src={authorB1} alt="Author Images" />
                                  </div>
                                  <div className="comment-inner">
                                    <h6 className="commenter">
                                      <a
                                        className="hover-flip-item-wrapper"
                                        href="#"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="Rahabi Khan">
                                            Rahabi Khan
                                          </span>
                                        </span>
                                      </a>
                                    </h6>
                                    <div className="comment-meta">
                                      <div className="time-spent">
                                        Nov 23, 2018 at 12:23 pm
                                      </div>
                                      <div className="reply-edit">
                                        <div className="reply">
                                          <a
                                            className="comment-reply-link hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="Reply">
                                                Reply
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="comment-text">
                                      <p className="b2">
                                        Pellentesque habitant morbi tristique
                                        senectus et netus et malesuada fames ac
                                        turpis egestas. Suspendisse lobortis
                                        cursus lacinia. Vestibulum vitae leo id
                                        diam pellentesque ornare.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            {/* End Single Comment  */}
                          </ul>
                        </li>
                        {/* End Single Comment  */}
                        {/* Start Single Comment  */}
                        <li className="comment">
                          <div className="comment-body">
                            <div className="single-comment">
                              <div className="comment-img">
                                <img src={authorB1} alt="Author Images" />
                              </div>
                              <div className="comment-inner">
                                <h6 className="commenter">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="Rahabi Khan">
                                        Rahabi Khan
                                      </span>
                                    </span>
                                  </a>
                                </h6>
                                <div className="comment-meta">
                                  <div className="time-spent">
                                    Nov 23, 2018 at 12:23 pm
                                  </div>
                                  <div className="reply-edit">
                                    <div className="reply">
                                      <a
                                        className="comment-reply-link hover-flip-item-wrapper"
                                        href="#"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="Reply">Reply</span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="comment-text">
                                  <p className="b2">
                                    Duis hendrerit velit scelerisque felis
                                    tempus, id porta libero venenatis. Nulla
                                    facilisi. Phasellus viverra magna commodo
                                    dui lacinia tempus. Donec malesuada nunc non
                                    dui posuere, fringilla vestibulum urna
                                    mollis. Integer condimentum ac sapien quis
                                    maximus.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* End Single Comment  */}
                      </ul>
                    </div>
                    {/* End Comment Area  */}
                  </div>
                  {/* End Comment Form Area  */}
                </div>
              </div>
              <div className="col-lg-4">
                {/* Start Sidebar Area  */}
                <div className="sidebar-inner">
                  {/* Start Single Widget  */}
                  <div className="axil-single-widget widget widget_categories mb--30">
                    <ul>
                      <li className="cat-item">
                        <a href="#" className="inner">
                          <div className="thumbnail">
                            <img src={categoryImage01} alt="" />
                          </div>
                          <div className="content">
                            <h5 className="title">Tech</h5>
                          </div>
                        </a>
                      </li>
                      <li className="cat-item">
                        <a href="#" className="inner">
                          <div className="thumbnail">
                            <img src={categoryImage01} alt="" />
                          </div>
                          <div className="content">
                            <h5 className="title">Style</h5>
                          </div>
                        </a>
                      </li>
                      <li className="cat-item">
                        <a href="#" className="inner">
                          <div className="thumbnail">
                            <img src={categoryImage01} alt="" />
                          </div>
                          <div className="content">
                            <h5 className="title">Travel</h5>
                          </div>
                        </a>
                      </li>
                      <li className="cat-item">
                        <a href="#" className="inner">
                          <div className="thumbnail">
                            <img src={categoryImage01} alt="" />
                          </div>
                          <div className="content">
                            <h5 className="title">Food</h5>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="axil-single-widget widget widget_search mb--30">
                    <h5 className="widget-title">Search</h5>
                    <form action="#">
                      <div className="axil-search form-group">
                        <button type="submit" className="search-button">
                          <i className="fal fa-search" />
                        </button>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="axil-single-widget widget widget_postlist mb--30">
                    <h5 className="widget-title">Popular on Blogar</h5>
                    {/* Start Post List  */}
                    <div className="post-medium-block">
                      {/* Start Single Post  */}
                      <div className="content-block post-medium mb--20">
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={blogSm01} alt="Post Images" />
                          </a>
                        </div>
                        <div className="post-content">
                          <h6 className="title">
                            <a href="post-details.html">
                              The underrated design book that transformed the
                              way I work{" "}
                            </a>
                          </h6>
                          <div className="post-meta">
                            <ul className="post-meta-list">
                              <li>Feb 17, 2019</li>
                              <li>300k Views</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div className="content-block post-medium mb--20">
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={blogSm01} alt="Post Images" />
                          </a>
                        </div>
                        <div className="post-content">
                          <h6 className="title">
                            <a href="post-details.html">
                              Here’s what you should (and shouldn’t) do when
                            </a>
                          </h6>
                          <div className="post-meta">
                            <ul className="post-meta-list">
                              <li>Feb 17, 2019</li>
                              <li>300k Views</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div className="content-block post-medium">
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={blogSm01} alt="Post Images" />
                          </a>
                        </div>
                        <div className="post-content">
                          <h6 className="title">
                            <a href="post-details.html">
                              How a developer and designer duo at Deutsche Bank
                              keep remote
                            </a>
                          </h6>
                          <div className="post-meta">
                            <ul className="post-meta-list">
                              <li>Feb 17, 2019</li>
                              <li>300k Views</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Single Post  */}
                    </div>
                    {/* End Post List  */}
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="axil-single-widget widget widget_newsletter mb--30">
                    {/* Start Post List  */}
                    <div className="newsletter-inner text-center">
                      <h4 className="title mb--15">Never Miss A Post!</h4>
                      <p className="b2 mb--30">
                        Sign up for free and be the first to <br /> get notified
                        about updates.
                      </p>
                      <form action="#">
                        <div className="form-group">
                          <input type="text" className="int" placeholder="Enter Your Email " />
                        </div>
                        <div className="form-submit">
                          <button className="cerchio axil-button button-rounded">
                            <span>Subscribe</span>
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* End Post List  */}
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="axil-single-widget widget widget_ads mb--30">
                    {/* Start Post List  */}
                    <div className="thumbnail">
                      <a href="#">
                        <img src={ads01} alt="Ads Images" />
                      </a>
                    </div>
                    {/* End Post List  */}
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="axil-single-widget widget widget_social mb--30">
                    <h5 className="widget-title">Stay In Touch</h5>
                    {/* Start Post List  */}
                    <ul className="social-icon md-size justify-content-center">
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-slack" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    {/* End Post List  */}
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="axil-single-widget widget widget_instagram mb--30">
                    <h5 className="widget-title">Instagram</h5>
                    {/* Start Post List  */}
                    <ul className="instagram-post-list-wrapper">
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram01} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram01} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram01} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram01} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram01} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram01} alt="Instagram Images" />
                        </a>
                      </li>
                    </ul>
                    {/* End Post List  */}
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="axil-single-widget widget widget_archive mb--30">
                    <h5 className="widget-title">Archives</h5>
                    {/* Start Post List  */}
                    <ul>
                      <li>
                        <a href="#">January 2020</a>
                      </li>
                      <li>
                        <a href="#">February 2020</a>
                      </li>
                      <li>
                        <a href="#">March 2020</a>
                      </li>
                      <li>
                        <a href="#">April 2020</a>
                      </li>
                    </ul>
                    {/* End Post List  */}
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="axil-single-widget widget widget_video mb--30">
                    <h5 className="widget-title">Featured Videos</h5>
                    {/* Start Post List  */}
                    <div className="video-post-wrapepr">
                      {/* Start Post List  */}
                      <div className="content-block image-rounded">
                        <div className="post-content">
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              <img
                                src={postMd01}
                                alt="Post Images"
                              />
                            </a>
                            <a
                              className="video-popup size-medium icon-color-secondary position-top-center"
                              href="post-details.html"
                            >
                              <span className="play-icon" />
                            </a>
                          </div>
                          <h6 className="title mt--10">
                            <a href="post-details.html">
                              I built my own camera with a Raspberry Pi 4
                            </a>
                          </h6>
                        </div>
                      </div>
                      {/* End Post List  */}
                      {/* Start Post List  */}
                      <div className="content-block image-rounded mt--20">
                        <div className="post-content">
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              <img
                                src={postMd01}
                                alt="Post Images"
                              />
                            </a>
                            <a
                              className="video-popup size-medium icon-color-secondary position-top-center"
                              href="post-details.html"
                            >
                              <span className="play-icon" />
                            </a>
                          </div>
                          <h6 className="title mt--10">
                            <a href="post-details.html">
                              A rocket launch can’t unite us until the space
                              world acknowledges our divisions
                            </a>
                          </h6>
                        </div>
                      </div>
                      {/* End Post List  */}
                      {/* Start Post List  */}
                      <div className="content-block image-rounded mt--20">
                        <div className="post-content">
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              <img
                                src={postMd01}
                                alt="Post Images"
                              />
                            </a>
                            <a
                              className="video-popup size-medium icon-color-secondary position-top-center"
                              href="post-details.html"
                            >
                              <span className="play-icon" />
                            </a>
                          </div>
                          <h6 className="title mt--10">
                            <a href="post-details.html">
                              {" "}
                              With iOS 14, Apple is finally letting the iPhone
                              home screen get complicated
                            </a>
                          </h6>
                        </div>
                      </div>
                      {/* End Post List  */}
                    </div>
                    {/* End Post List  */}
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="axil-single-widget widget widget_tag_cloud mb--30">
                    <h5 className="widget-title">Archives</h5>
                    {/* Start Post List  */}
                    <div className="tagcloud">
                      <a href="#">Design</a>
                      <a href="#">Development</a>
                      <a href="#">Graphic</a>
                      <a href="#">UI/UX Design</a>
                      <a href="#">HTML</a>
                    </div>
                    {/* End Post List  */}
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="axil-single-widget widget widget_dropdown mb--30">
                    <h5 className="widget-title">Archives</h5>
                    {/* Start Post List  */}
                    <form action="#">
                      <select>
                        <option>Select Month</option>
                        <option>April 2020 (4)</option>
                        <option>March 2020 (3)</option>
                        <option>November 2018 (11)</option>
                        <option>January 2013 (5)</option>
                      </select>
                    </form>
                    {/* End Post List  */}
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="axil-single-widget widget widget_postlist mb--30">
                    <h5 className="widget-title">Recent Post</h5>
                    {/* Start Post List  */}
                    <div className="post-medium-block">
                      {/* Start Single Post  */}
                      <div className="content-block post-medium mb--20">
                        <div className="post-content">
                          <h6 className="title">
                            <a href="post-details.html">
                              The underrated design book that transformed the
                              way I work{" "}
                            </a>
                          </h6>
                          <div className="post-meta">
                            <ul className="post-meta-list">
                              <li>Feb 17, 2019</li>
                              <li>300k Views</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div className="content-block post-medium mb--20">
                        <div className="post-content">
                          <h6 className="title">
                            <a href="post-details.html">
                              Here’s what you should (and shouldn’t) do when
                            </a>
                          </h6>
                          <div className="post-meta">
                            <ul className="post-meta-list">
                              <li>Feb 17, 2019</li>
                              <li>300k Views</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div className="content-block post-medium">
                        <div className="post-content">
                          <h6 className="title">
                            <a href="post-details.html">
                              How a developer and designer duo at Deutsche Bank
                              keep remote
                            </a>
                          </h6>
                          <div className="post-meta">
                            <ul className="post-meta-list">
                              <li>Feb 17, 2019</li>
                              <li>300k Views</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Single Post  */}
                    </div>
                    {/* End Post List  */}
                  </div>
                  {/* End Single Widget  */}
                  <div className="axil-banner">
                    <div className="thumbnail">
                      <a href="#">
                        <img
                          className="w-100"
                          src={banner02}
                          alt="Banner Images"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Sidebar Area  */}
              </div>
            </div>
          </div>
        </div>
        {/* End Post Single Wrapper  */}
        {/* Start More Stories Area  */}
        <div className={"axil-more-stories-area axil-section-gap bg-color-grey" + themeColor}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title">More Stories</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Start Stories Post  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                {/* Start Post List  */}
                <div className="post-stories content-block mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={stories01} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a href="#">LEADERSHIP</a>
                      </div>
                    </div>
                    <h5 className="title">
                      <a href="post-details.html">
                        Microsoft and Bridgestone launch real-time tire
                      </a>
                    </h5>
                  </div>
                </div>
                {/* End Post List  */}
              </div>
              {/* Start Stories Post  */}
              {/* Start Stories Post  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                {/* Start Post List  */}
                <div className="post-stories content-block mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={stories01} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a href="#">DESIGN</a>
                      </div>
                    </div>
                    <h5 className="title">
                      <a href="post-details.html">
                        Microsoft and Bridgestone launch real-time tire
                      </a>
                    </h5>
                  </div>
                </div>
                {/* End Post List  */}
              </div>
              {/* Start Stories Post  */}
              {/* Start Stories Post  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                {/* Start Post List  */}
                <div className="post-stories content-block mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={stories01} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a href="#">PRODUCT UPDATES</a>
                      </div>
                    </div>
                    <h5 className="title">
                      <a href="post-details.html">
                        Microsoft and Bridgestone launch real-time tire
                      </a>
                    </h5>
                  </div>
                </div>
                {/* End Post List  */}
              </div>
              {/* Start Stories Post  */}
              {/* Start Stories Post  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                {/* Start Post List  */}
                <div className="post-stories content-block mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={stories01} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a href="#">COLLABORATION</a>
                      </div>
                    </div>
                    <h5 className="title">
                      <a href="post-details.html">
                        Microsoft and Bridgestone launch real-time tire
                      </a>
                    </h5>
                  </div>
                </div>
                {/* End Post List  */}
              </div>
              {/* Start Stories Post  */}
            </div>
          </div>
        </div>
        {/* End More Stories Area  */}
        {/* Start Instagram Area  */}
        <div className={"axil-instagram-area axil-section-gap bg-color-extra03" + themeColor}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title">Instagram</h2>
                </div>
              </div>
            </div>
            <div className="row mt--30">
              <div className="col-lg-12">
                <ul className="instagram-post-list">
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Instagram Area  */}
        {/* Start Footer Area  */}
        <div className={"axil-footer-area axil-footer-style-1 bg-color-white" + themeColor}>
          {/* Start Footer Top Area  */}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* Start Post List  */}
                  <div className="inner d-flex align-items-center flex-wrap">
                    <h5 className="follow-title mb--0 mr--20">Follow Us</h5>
                    <ul className="social-icon color-tertiary md-size justify-content-start">
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End Post List  */}
                </div>
              </div>
            </div>
          </div>
          {/* End Footer Top Area  */}
          {/* Start Copyright Area  */}
          <div className="copyright-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9 col-md-12">
                  <div className="copyright-left">
                    <div className="logo">
                      <a href="index.html">
                        <img
                          className="dark-logo"
                          src={logoBlack}
                          alt="Logo Images"
                        />
                        <img
                          className="light-logo"
                          src={logoWhite2}
                          alt="Logo Images"
                        />
                      </a>
                    </div>
                    <ul className="mainmenu justify-content-start">
                      <li>
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="Contact Us">Contact Us</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="Terms of Use">Terms of Use</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="AdChoices">AdChoices</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="Advertise with Us">
                              Advertise with Us
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="Blogar Store">Blogar Store</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12">
                  <div className="copyright-right text-start text-lg-end mt_md--20 mt_sm--20">
                    <p className="b3">All Rights Reserved © 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Copyright Area  */}
        </div>
        {/* End Footer Area  */}
        {/* Start Back To Top  */}
        <a id="backto-top" />
        {/* End Back To Top  */}
      </div>
    </>
  );
}
