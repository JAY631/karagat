import React from "react";
import { Link } from "react-router-dom";
import logoBlack from "../../images/logo/logo-black.png";
import logoWhite2 from "../../images/logo/logo-white2.png";
import mega1 from "../../images/others/mega-post-01.jpg";
import mega2 from "../../images/others/mega-post-02.jpg";
import mega3 from "../../images/others/mega-post-03.jpg";
import mega4 from "../../images/others/mega-post-04.jpg";
import author from "../../images/others/author.png";
import author1 from "../../images/post-images/author/author-image-1.png";
import author2 from "../../images/post-images/gallery-post-02.jpg";
import author3 from "../../images/post-images/author/author-image-2.png";
import postImages from "../../images/post-images/post-images-1.jpg";
import postImages1 from "../../images/post-images/post-images-2.jpg";
import galleryPost from "../../images/post-images/gallery-post-01.jpg";
import authorImage2 from "../../images/post-images/author/author-image-2.png";
import authorImage3 from "../../images/post-images/author/author-image-3.png";
import galleryPost3 from "../../images/post-images/gallery-post-03.jpg";
import banner01 from "../../images/add-banner/banner-01.png";
import banner03 from "../../images/add-banner/banner-03.png";
import postColumn1 from "../../images/post-images/post-column-01.jpg";
import postColumn2 from "../../images/post-images/post-column-02.jpg";
import postColumn3 from "../../images/post-images/post-column-03.jpg";
import postColumn4 from "../../images/post-images/post-column-04.jpg";
import postColumn5 from "../../images/post-images/post-column-05.jpg";
import postColumn6 from "../../images/post-images/post-column-06.jpg";
import postColumn7 from "../../images/post-images/post-column-07.jpg";
import postColumn8 from "../../images/post-images/post-column-08.jpg";
import postSm1 from "../../images/post-images/post-sm-01.jpg";
import postSm2 from "../../images/post-images/post-sm-02.jpg";
import postSm3 from "../../images/post-images/post-sm-03.jpg";
import postSm4 from "../../images/post-images/post-sm-04.jpg";
import postSm5 from "../../images/post-images/post-sm-05.jpg";
import postSm6 from "../../images/post-images/post-sm-06.jpg";
import trendPost1 from "../../images/post-images/trend-post-01.jpg";
import trendPost2 from "../../images/post-images/trend-post-02.jpg";
import trendPost3 from "../../images/post-images/trend-post-03.jpg";
import trendPost4 from "../../images/post-images/trend-post-04.jpg";
import postGrid1 from "../../images/post-images/post-grid-01.jpg";
import postGrid2 from "../../images/post-images/post-grid-02.jpg";
import postGrid3 from "../../images/post-images/post-grid-03.jpg";
import postGrid7 from "../../images/post-images/post-grid-07.jpg";
import postGrid8 from "../../images/post-images/post-grid-08.jpg";
import postGrid9 from "../../images/post-images/post-grid-09.jpg";
import postLis11 from "../../images/post-images/post-list-11.jpg";
import postLis12 from "../../images/post-images/post-list-12.jpg";
import postLis13 from "../../images/post-images/post-list-13.jpg";
import postLis14 from "../../images/post-images/post-list-14.jpg";
import postLis15 from "../../images/post-images/post-list-15.jpg";
import categoryImage01 from "../../images/post-images/category-image-01.jpg";
import categoryImage02 from "../../images/post-images/category-image-02.jpg";
import categoryImage03 from "../../images/post-images/category-image-03.jpg";
import categoryImage04 from "../../images/post-images/category-image-04.jpg";
import blogSm01 from "../../images/small-images/blog-sm-01.jpg";
import blogSm02 from "../../images/small-images/blog-sm-02.jpg";
import blogSm03 from "../../images/small-images/blog-sm-03.jpg";
import instagram01 from "../../images/small-images/instagram-01.jpg";
import instagram02 from "../../images/small-images/instagram-02.jpg";
import instagram03 from "../../images/small-images/instagram-03.jpg";
import instagram04 from "../../images/small-images/instagram-04.jpg";
import instagram05 from "../../images/small-images/instagram-05.jpg";
import instagram06 from "../../images/small-images/instagram-06.jpg";
import postDark01 from "../../images/post-images/post-dark-01.jpg";
import postDark03 from "../../images/post-images/post-dark-03.jpg";
import postDark04 from "../../images/post-images/post-dark-04.jpg";
import postDark05 from "../../images/post-images/post-dark-05.jpg";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
// import Carousel frаom 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { useSelector } from "react-redux";
import { selectThemeColor } from "../../store/theme";
import { useState } from "react";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  swipe: true,
  speed: 250,
};

const Home = () => {
  const [showBurger, setShowBurger] = useState(false);
  const burgerFunc = () => {
    setShowBurger(!showBurger);
  };
  const themeColor = useSelector(selectThemeColor);
  function change(num, to, target) {
    for (let i = 0; i < document.getElementsByClassName(target).length; i++) {
      document.getElementsByClassName(target)[i].classList.remove(to);
      document.getElementsByClassName(target)[num].classList.add(to);
      console.log(document.getElementsByClassName(target)[num].classList);
    }
  }
  return (
    <>
      <div
        className={
          showBurger ? "main-wrapper popup-mobile-menu-show" : "main-wrapper"
        }
      >
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />

        {/* Start Header */}
        <header
          className={
            "header axil-header header-light header-sticky" + themeColor
          }
        >
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
                                  <Link to={"/"}>Home Default</Link>
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/HomeCreativeBlog"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Home Creative Blog">
                                  Home Creative Blog
                                </span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/HomeSeoBlog"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Home SEO Blog">
                                  Home SEO Blog
                                </span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/HomeTechBlog"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Home Tech Blog">
                                  Home Tech Blog
                                </span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/HomeLifestyleBlog"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Home Lifestyle Blog">
                                  Home Lifestyle Blog
                                </span>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Posts</a>
                        <ul className="axil-submenu">
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/PostFormatStandard"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Format Standard">
                                  Post Format Standard
                                </span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/PostFormatVideo"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Format Video">
                                  Post Format Video
                                </span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/PostFormatGallery"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Format Gallery">
                                  Post Format Gallery
                                </span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/PostFormatText"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Format Text Only">
                                  Post Format Text Only
                                </span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/PostLayout1"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Layout One">
                                  Post Layout One
                                </span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/PostLayout2"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Layout Two">
                                  Post Layout Two
                                </span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/PostLayout3"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Layout Three">
                                  Post Layout Three
                                </span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/PostLayout4"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Layout Four">
                                  Post Layout Four
                                </span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/PostLayout5"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Layout Five">
                                  Post Layout Five
                                </span>
                              </span>
                            </Link>
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
                                <li
                                  className="vertical-nav-item active mega-menu-item"
                                  onMouseOver={() =>
                                    change(0, "active", "mega-menu-item")
                                  }
                                >
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
                                <li
                                  className="vertical-nav-item mega-menu-item"
                                  onMouseOver={() =>
                                    change(1, "active", "mega-menu-item")
                                  }
                                >
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
                                <li
                                  className="vertical-nav-item mega-menu-item"
                                  onMouseOver={() =>
                                    change(2, "active", "mega-menu-item")
                                  }
                                >
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
                                <li
                                  className="vertical-nav-item mega-menu-item"
                                  onMouseOver={() =>
                                    change(3, "active", "mega-menu-item")
                                  }
                                >
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
                                              src={mega1}
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
                                              src={mega2}
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
                                              src={mega3}
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
                                              src={mega4}
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
                                              src={mega4}
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
                                              src={mega3}
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
                                              src={mega2}
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
                                              src={mega4}
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
                                              src={mega4}
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
                                              src={mega3}
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
                                              src={mega2}
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
                                              src={mega4}
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
                                              src={mega1}
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
                                              src={mega4}
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
                                              src={mega3}
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
                                              src={mega4}
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
                            <Link
                              className="hover-flip-item-wrapper"
                              to="/PostList"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post List">Post List</span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/PostArchive"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Post Archive">
                                  Post Archive
                                </span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/Author"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Author Page">Author Page</span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/About"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="About Page">About Page</span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/Contact"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Contact Us">Contact Us</span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/Error"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="404 Page">404 Page</span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/Maintenance"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Maintenance">Maintenance</span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover-flip-item-wrapper"
                              to={"/PrivacyPolicy"}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Privacy Policy">
                                  Privacy Policy
                                </span>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to={"/HomeLifestyleBlog"}>Lifestyle</Link>
                      </li>
                      <li>
                        <Link to={"/HomeTechBlog"}>Gadgets</Link>
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
                      <a href="#" className=" icons">
                        <i className="fas fa-bookmark" />
                      </a>
                    </li>
                    <li className="icon ">
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
                      <div className="icon" onClick={burgerFunc}>
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
        <div
          className={
            showBurger
              ? "popup-mobilemenu-area popup-mobile-menu-show"
              : "popup-mobilemenu-area"
          }
          onClick={burgerFunc}
        >
          <div
            className={"inner" + themeColor}
            onClick={(event) => event.stopPropagation()}
          >
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
                  <i>
                    <FontAwesomeIcon icon={faX} />
                  </i>
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
        <h1 className="d-none">Home Default Blog</h1>
        <div className={"slider-area bg-color-grey" + themeColor}>
          <div className="axil-slide slider-style-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="slider-activation axil-slick-arrow">
                    {/* <Carousel> */}
                    {/* Start Single Slide  */}
                    <div className="content-block">
                      {/* Start Post Thumbnail  */}
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={galleryPost} alt="Post Images" />
                        </a>
                      </div>
                      {/* End Post Thumbnail  */}
                      {/* Start Post Content  */}
                      <div className="post-content darks">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="DESIGN">DESIGN</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h2 className="title">
                          <a className={"map"} href="post-details.html">
                            4 Типа программистов
                          </a>
                        </h2>
                        {/* Post Meta  */}
                        <div className="post-meta-wrapper with-button">
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
                                    <span data-text="Rahabi Khan">
                                      Rahabi Khan
                                    </span>
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
                          <div className="read-more-button cerchio">
                            <a
                              className="axil-button button-rounded hover-flip-item-wrapper"
                              href="post-details.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Read Post">Read Post</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End Post Content  */}
                    </div>
                    {/* End Single Slide  */}
                    {/* Start Single Slide  */}
                    <div className="content-block">
                      {/* Start Post Thumbnail  */}
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={galleryPost3} alt="Post Images" />
                        </a>
                      </div>
                      {/* End Post Thumbnail  */}
                      {/* Start Post Content  */}
                      <div className="post-content darks">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="CAREERS">CAREERS</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h2 className="title">
                          <a href="post-details.html" className={"map"}>
                            These 5 tips will help you nail your next design
                            presentation
                          </a>
                        </h2>
                        {/* Post Meta  */}
                        <div className="post-meta-wrapper with-button">
                          <div className="post-meta">
                            <div className="post-author-avatar border-rounded">
                              <img src={author1} alt="Author Images" />
                            </div>
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Syed Tahmim">
                                      Syed Tahmim
                                    </span>
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
                          <div className="read-more-button cerchio">
                            <a
                              className="axil-button button-rounded hover-flip-item-wrapper"
                              href="post-details.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Read Post">Read Post</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End Post Content  */}
                    </div>
                    {/* End Single Slide  */}
                    {/* Start Single Slide  */}
                    <div className="content-block">
                      {/* Start Post Thumbnail  */}
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={author2} alt="Post Images" />
                        </a>
                      </div>
                      {/* End Post Thumbnail  */}
                      {/* Start Post Content  */}
                      <div className="post-content darks">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="DESIGN">DESIGN</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h2 className="title">
                          <a href="post-details.html" className={"map"}>
                            iPadOS 14 introduces new designed specifically for
                            iPad
                          </a>
                        </h2>
                        {/* Post Meta  */}
                        <div className="post-meta-wrapper with-button">
                          <div className="post-meta">
                            <div className="post-author-avatar border-rounded">
                              <img src={author3} alt="Author Images" />
                            </div>
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Ismat Jahan">
                                      Ismat Jahan
                                    </span>
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
                          <div className="read-more-button cerchio">
                            <a
                              className="axil-button button-rounded hover-flip-item-wrapper"
                              href="post-details.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Read Post">Read Post</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End Post Content  */}
                    </div>
                    {/* End Single Slide  */}
                    {/* </Carousel> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Banner Area */}
        {/* Start Featured Area  */}
        <div
          className={
            "axil-featured-post axil-section-gap bg-color-grey" + themeColor
          }
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title">More Featured Posts.</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Start Single Post  */}
              <div className="col-lg-6 col-xl-6 col-md-12 col-12 mt--30">
                <div className="content-block content-direction-column axil-control is-active post-horizontal thumb-border-rounded">
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="APPLE DESIGN">APPLE DESIGN</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        Apple reimagines the iPhone experience with iOS 14
                      </a>
                    </h4>
                    <div className="post-meta">
                      <div className="post-author-avatar border-rounded">
                        <img src={author3} alt="Author Images" />
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
                  </div>
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postImages} alt="Post Images" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Single Post  */}
              {/* Start Single Post  */}
              <div className="col-lg-6 col-xl-6 col-md-12 col-12 mt--30">
                <div className="content-block content-direction-column axil-control post-horizontal thumb-border-rounded">
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="TECH">TECH</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        Flutter: the good, the bad and the ugly
                      </a>
                    </h4>
                    <div className="post-meta">
                      <div className="post-author-avatar border-rounded">
                        <img src={author1} alt="Author Images" />
                      </div>
                      <div className="content">
                        <h6 className="post-author-name">
                          <a
                            className="hover-flip-item-wrapper"
                            href="author.html"
                          >
                            <span className="hover-flip-item">
                              <span data-text="Jone Doe num">Jone Doe</span>
                            </span>
                          </a>
                        </h6>
                        <ul className="post-meta-list">
                          <li>Feb 17, 2019</li>
                          <li>300k Views</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postImages1} alt="Post Images" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Single Post  */}
            </div>
          </div>
        </div>
        {/* End Featured Area  */}
        {/* Start Tab Area  */}
        <div
          className={
            "axil-tab-area axil-section-gap bg-color-white" + themeColor
          }
        >
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="axil-banner mb--30">
                    <div className="thumbnail">
                      <a href="#">
                        <img
                          className="w-100"
                          src={banner03}
                          alt="Banner Images"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2 className="title">Innovation &amp; Tech</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  {/* Start Tab Button  */}
                  <ul
                    className="axil-tab-button nav nav-tabs mt--20"
                    id="axilTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="tab-one"
                        data-bs-toggle="tab"
                        href="#tabone"
                        role="tab"
                        aria-controls="tab-one"
                        aria-selected="true"
                      >
                        Accessibility
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="tab-two"
                        data-bs-toggle="tab"
                        href="#tabtwo"
                        role="tab"
                        aria-controls="tab-two"
                        aria-selected="false"
                      >
                        Android Dev
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="tab-three"
                        data-bs-toggle="tab"
                        href="#tabthree"
                        role="tab"
                        aria-controls="tab-three"
                        aria-selected="false"
                      >
                        Blockchain
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="tab-four"
                        data-bs-toggle="tab"
                        href="#tabfour"
                        role="tab"
                        aria-controls="tab-four"
                        aria-selected="false"
                      >
                        Gadgets
                      </a>
                    </li>
                  </ul>
                  {/* End Tab Button  */}
                  {/* Start Tab Content Wrapper  */}
                  <div className="tab-content" id="axilTabContent">
                    <div
                      className="single-tab-content tab-pane fade show active"
                      id="tabone"
                      role="tabpanel"
                      aria-labelledby="tab-one"
                    >
                      <Slider
                        className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side"
                        {...settings}
                      >
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="ACCESSIBILITY">
                                        ACCESSIBILITY
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Lightweight, grippable, and ready to go.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn4} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="APPLE DESIGN">HUI</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Bold new experience. Same Mac magic.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn5} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="GADGETS">GADGETS</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Creative Game With The New DJI Mavic Air 2
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn6} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="ACCESSIBILITY">
                                        ACCESSIBILITY
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Lightweight, grippable, and ready to go.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn7} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                    <div
                      className="single-tab-content tab-pane fade"
                      id="tabtwo"
                      role="tabpanel"
                      aria-labelledby="tab-two"
                    >
                      <Slider
                        className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side"
                        {...settings}
                      >
                        {/* Start Single Post  */}
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="APPLE DESIGN">
                                        APPLE DESIGN
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Bold new experience. Same Mac magic.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn7} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Post  */}
                        {/* Start Single Post  */}
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="CASE STUDY">
                                        CASE STUDY
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Lightweight, grippable, and ready to go.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn7} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Post  */}
                        {/* Start Single Post  */}
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="ACCESSIBILITY">
                                        ACCESSIBILITY
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Lightweight, grippable, and ready to go.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn5} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Post  */}
                        {/* Start Single Post  */}
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="ACCESSIBILITY">
                                        ACCESSIBILITY
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Lightweight, grippable, and ready to go.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn4} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Post  */}
                      </Slider>
                    </div>
                    <div
                      className="single-tab-content tab-pane fade"
                      id="tabthree"
                      role="tabpanel"
                      aria-labelledby="tab-three"
                    >
                      <Slider
                        className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side"
                        {...settings}
                      >
                        {/* Start Single Post  */}
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="ACCESSIBILITY">
                                        ACCESSIBILITY
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Lightweight, grippable, and ready to go.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn4} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Post  */}
                        {/* Start Single Post  */}
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="DESIGN">DESIGN</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Bold new experience. Same Mac magic.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn8} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Post  */}
                        {/* Start Single Post  */}
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="DESIGN">DESIGN</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Lightweight, grippable, and ready to go.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn1} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Post  */}
                        {/* Start Single Post  */}
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="DESIGN">DESIGN</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Lightweight, grippable, and ready to go.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn2} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Post  */}
                      </Slider>
                    </div>
                    <div
                      className="single-tab-content tab-pane fade"
                      id="tabfour"
                      role="tabpanel"
                      aria-labelledby="tab-four"
                    >
                      <Slider
                        className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side"
                        {...settings}
                      >
                        {/* Start Single Post  */}
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="APPLE DESIGN">
                                        APPLE DESIGN
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Bold new experience. Same Mac magic.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn3} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Post  */}
                        {/* Start Single Post  */}
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="GADGETS">GADGETS</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Creative Game With The New DJI Mavic Air 2
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html">
                                <img src={postColumn3} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Post  */}
                        {/* Start Single Post  */}
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="GADGETS">GADGETS</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Lightweight, grippable, and ready to go.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src={postColumn1} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Post  */}
                        {/* Start Single Post  */}
                        <div className="slick-single-layout">
                          <div className="content-block modern-post-style text-center content-block-column darks">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="GADGETS">GADGETS</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Lightweight, grippable, and ready to go.
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail url">
                              <a href="post-details.html ">
                                <img src={postColumn5} alt="Post Images" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Post  */}
                      </Slider>
                    </div>
                  </div>
                  {/* End Tab Content Wrapper  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Tab Area  */}
        {/* Start Categories List  */}
        <div
          className={
            "axil-categories-list axil-section-gap bg-color-grey" + themeColor
          }
        >
          <div className="container">
            <div className="row align-items-center mb--30">
              <div className="col-lg-6 col-md-8 col-sm-8 col-12">
                <div className="section-title">
                  <h2 className="title">Trending Topics</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 col-sm-4 col-12">
                <div className="see-all-topics text-start text-sm-end mt_mobile--20">
                  <a className="axil-link-button" href="#">
                    See All Topics
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Start List Wrapper  */}
                <div className="list-categories d-flex flex-wrap">
                  {/* Start Single Category  */}
                  <div className="single-cat">
                    <div className="inner">
                      <a href="#">
                        <div className="thumbnail">
                          <img src={postSm1} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">Sports &amp; Fitness</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* End Single Category  */}
                  {/* Start Single Category  */}
                  <div className="single-cat">
                    <div className="inner">
                      <a href="#">
                        <div className="thumbnail">
                          <img src={postSm2} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">Travel</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* End Single Category  */}
                  {/* Start Single Category  */}
                  <div className="single-cat">
                    <div className="inner">
                      <a href="#">
                        <div className="thumbnail">
                          <img src={postSm3} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">lifestyle</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* End Single Category  */}
                  {/* Start Single Category  */}
                  <div className="single-cat">
                    <div className="inner">
                      <a href="#">
                        <div className="thumbnail">
                          <img src={postSm4} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">Health</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* End Single Category  */}
                  {/* Start Single Category  */}
                  <div className="single-cat">
                    <div className="inner">
                      <a href="#">
                        <div className="thumbnail">
                          <img src={postSm5} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">Animals</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* End Single Category  */}
                  {/* Start Single Category  */}
                  <div className="single-cat">
                    <div className="inner">
                      <a href="#">
                        <div className="thumbnail">
                          <img src={postSm6} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">Food &amp; Drink</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* End Single Category  */}
                </div>
                {/* Start List Wrapper  */}
              </div>
            </div>
          </div>
        </div>
        {/* Start Categories List  */}
        {/* Start Trending Post Area  */}
        <div
          className={
            "axil-trending-post-area axil-section-gap bg-color-white" +
            themeColor
          }
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title">Most Popular</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Start Axil Tab Button  */}
                <ul
                  className="axil-tab-button nav nav-tabs mt--20"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="trend-one"
                      data-bs-toggle="tab"
                      href="#trendone"
                      role="tab"
                      aria-controls="trend-one"
                      aria-selected="true"
                    >
                      Accessibility
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="trend-two"
                      data-bs-toggle="tab"
                      href="#trendtwo"
                      role="tab"
                      aria-controls="trend-two"
                      aria-selected="false"
                    >
                      Android Dev
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="trend-three"
                      data-bs-toggle="tab"
                      href="#trendthree"
                      role="tab"
                      aria-controls="trend-three"
                      aria-selected="false"
                    >
                      Blockchain
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="trend-four"
                      data-bs-toggle="tab"
                      href="#trendfour"
                      role="tab"
                      aria-controls="trend-four"
                      aria-selected="false"
                    >
                      Gadgets
                    </a>
                  </li>
                </ul>
                {/* End Axil Tab Button  */}
                {/* Start Axil Tab Content  */}
                <div className="tab-content">
                  {/* Single Tab Content  */}
                  <div
                    className="row trend-tab-content tab-pane fade show active"
                    id="trendone"
                    role="tabpanel"
                    aria-labelledby="trend-one"
                  >
                    <div className="col-lg-8">
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control"
                        onMouseOver={() => change(0, "is-active", "trend-post")}
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">01</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="CASE STUDY">
                                      CASE STUDY
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                How a developer and designer duo at Deutsche
                                Bank keep remote collaboration alive
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Jone Doe num">
                                          Jone Doe
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost1} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list is-active"
                        onMouseOver={() => change(1, "is-active", "trend-post")}
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">02</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="BOOKS">BOOKS</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                The underrated design book that transformed the
                                way I work
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Jane Afroj">
                                          Jane Afroj
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost2} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control"
                        onMouseOver={() => change(2, "is-active", "trend-post")}
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">03</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="PROCESS">PROCESS</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                Here’s what you should (and shouldn’t) do when
                                giving formal feedback
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Israt Ara">
                                          Israt Ara
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost3} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control"
                        onMouseOver={() => change(3, "is-active", "trend-post")}
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">04</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="CASE STUDY">
                                      CASE STUDY
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                6 ways you can make your design more inclusive
                                and equitable
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Ismat Jahan">
                                          Ismat Jahan
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost4} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                    </div>
                  </div>
                  {/* Single Tab Content  */}
                  {/* Single Tab Content  */}
                  <div
                    className="row trend-tab-content tab-pane fade"
                    id="trendtwo"
                    role="tabpanel"
                    aria-labelledby="trend-two"
                  >
                    <div className="col-lg-8">
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control"
                        onMouseOver={() => change(0, "is-active", "trend-post")}
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">01</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="CASE STUDY">
                                      CASE STUDY
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                How a developer and designer duo at Deutsche
                                Bank keep remote collaboration alive
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Jakowar">Jakowar</span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost1} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control is-active"
                        onMouseOver={() => change(5, "is-active", "trend-post")}
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">02</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="BOOKS">BOOKS</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                The underrated design book that transformed the
                                way I work
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Jasika">Jasika</span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost2} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control"
                        onMouseOver={() => change(6, "is-active", "trend-post")}
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">03</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="PROCESS">PROCESS</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                Here’s what you should (and shouldn’t) do when
                                giving formal feedback
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Israt Ara">
                                          Israt Ara
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost3} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control"
                        onMouseOver={() => change(7, "is-active", "trend-post")}
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">04</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="CASE STUDY">
                                      CASE STUDY
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                How a developer and designer duo at Deutsche
                                Bank keep remote collaboration alive
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="John Jane">
                                          John Jane
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost4} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                    </div>
                  </div>
                  {/* Single Tab Content  */}
                  {/* Single Tab Content  */}
                  <div
                    className="row trend-tab-content tab-pane fade"
                    id="trendthree"
                    role="tabpanel"
                    aria-labelledby="trend-two"
                  >
                    <div className="col-lg-8">
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control"
                        onMouseOver={() => change(8, "is-active", "trend-post")}
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">01</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="CASE STUDY">
                                      CASE STUDY
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                How a developer and designer duo at Deutsche
                                Bank keep remote collaboration alive
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Najmul">Najmul</span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost1} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control is-active"
                        onMouseOver={() => change(9, "is-active", "trend-post")}
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">02</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="BOOKS">BOOKS</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                The underrated design book that transformed the
                                way I work
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Kanak Lota">
                                          Kanak Lota
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost2} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control"
                        onMouseOver={() =>
                          change(11, "is-active", "trend-post")
                        }
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">03</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="PROCESS">PROCESS</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                Here’s what you should (and shouldn’t) do when
                                giving formal feedback
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Nowsin Afroj">
                                          Nowsin Afroj
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost3} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control"
                        onMouseOver={() =>
                          change(11, "is-active", "trend-post")
                        }
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">04</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="CASE STUDY">
                                      CASE STUDY
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                How a developer and designer duo at Deutsche
                                Bank keep remote collaboration alive
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Ismat Jahan">
                                          Ismat Jahan
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost4} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                    </div>
                  </div>
                  {/* Single Tab Content  */}
                  {/* Single Tab Content  */}
                  <div
                    className="row trend-tab-content tab-pane fade"
                    id="trendfour"
                    role="tabpanel"
                    aria-labelledby="trend-two"
                  >
                    <div className="col-lg-8">
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control"
                        onMouseOver={() =>
                          change(12, "is-active", "trend-post")
                        }
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">01</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="CASE STUDY">
                                      CASE STUDY
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                How a developer and designer duo at Deutsche
                                Bank keep remote collaboration alive
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Ismat Jahan">
                                          Ismat Jahan
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost1} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control is-active"
                        onMouseOver={change(13, "is-active", "trend-post")}
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">02</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="BOOKS">BOOKS</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                The underrated design book that transformed the
                                way I work
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Jasika">Jasika</span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost2} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control"
                        onMouseOver={() =>
                          change(14, "is-active", "trend-post")
                        }
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">03</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="PROCESS">PROCESS</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                Here’s what you should (and shouldn’t) do when
                                giving formal feedback
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Najmul Alom">
                                          Najmul Alom
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost3} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                      {/* Start Single Post  */}
                      <div
                        className="content-block trend-post post-order-list axil-control"
                        onMouseOver={() =>
                          change(15, "is-active", "trend-post")
                        }
                      >
                        <div className="post-inner">
                          <span className="post-order-list num">04</span>
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="CASE STUDY">
                                      CASE STUDY
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="post-details.html">
                                How a developer and designer duo at Deutsche
                                Bank keep remote collaboration alive
                              </a>
                            </h3>
                            <div className="post-meta-wrapper">
                              <div className="post-meta">
                                <div className="content">
                                  <h6 className="post-author-name">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="author.html"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Jakarark">
                                          Jakarark
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <ul className="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
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
                        </div>
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={trendPost4} alt="Post Images" />
                          </a>
                        </div>
                      </div>
                      {/* End Single Post  */}
                    </div>
                  </div>
                  {/* Single Tab Content  */}
                </div>
                {/* End Axil Tab Content  */}
              </div>
            </div>
          </div>
        </div>
        {/* End Trending Post Area  */}
        {/* Start Post Grid Area  */}
        <div
          className={
            "axil-post-grid-area axil-section-gap bg-color-grey" + themeColor
          }
        >
          <div className="container">
            <div className="row axil-section-gapBottom">
              <div className="col-lg-12">
                <div className="axil-social-wrapper bg-color-white radius darks">
                  <ul className="social-with-text">
                    <li className="twitter">
                      <a href="#">
                        <i className="fab fa-twitter icons" />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li className="facebook">
                      <a href="#">
                        <i className="fab fa-facebook-f icons" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li className="instagram">
                      <a href="#">
                        <i className="fab fa-instagram icons" />
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li className="youtube">
                      <a href="#">
                        <i className="fab fa-youtube icons" />
                        <span>Youtube</span>
                      </a>
                    </li>
                    <li className="pinterest">
                      <a href="#">
                        <i className="fab fa-pinterest icons" />
                        <span>Pinterest</span>
                      </a>
                    </li>
                    <li className="discord">
                      <a href="#">
                        <i className="fab fa-discord icons" />
                        <span>Discord</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title">Most Popular</h2>
                </div>
              </div>
              <div className="col-lg-12">
                <ul
                  className="axil-tab-button nav nav-tabs mt--20"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="grid-one"
                      data-bs-toggle="tab"
                      href="#gridone"
                      role="tab"
                      aria-controls="grid-one"
                      aria-selected="true"
                    >
                      Accessibility
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="grid-two"
                      data-bs-toggle="tab"
                      href="#gridtwo"
                      role="tab"
                      aria-controls="grid-two"
                      aria-selected="false"
                    >
                      Android Dev
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="grid-three"
                      data-bs-toggle="tab"
                      href="#gridthree"
                      role="tab"
                      aria-controls="grid-three"
                      aria-selected="false"
                    >
                      Blockchain
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="grid-four"
                      data-bs-toggle="tab"
                      href="#gridfour"
                      role="tab"
                      aria-controls="grid-four"
                      aria-selected="false"
                    >
                      Gadgets
                    </a>
                  </li>
                </ul>
                {/* Start Tab Content  */}
                <div className="grid-tab-content tab-content mt--10">
                  {/* Start Single Tab Content  */}
                  <div
                    className="single-post-grid tab-pane fade show active"
                    id="gridone"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                        {/* Start Post Grid  */}
                        <div className="content-block post-grid post-grid-large mt--30">
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              <img src={postGrid1} alt="Post Images" />
                            </a>
                          </div>
                          <div className="post-grid-content">
                            <div className="post-content darks">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="DESIGN">DESIGN</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h3 className="title">
                                <a href="post-details.html">
                                  Get Ready To Up Your Creative Game With The
                                  New DJI Mavic Air 2
                                </a>
                              </h3>
                              <div className="post-meta-wrapper">
                                <div className="post-meta">
                                  <div className="post-author-avatar border-rounded">
                                    <img
                                      src={authorImage2}
                                      alt="Author Images"
                                    />
                                  </div>
                                  <div className="content">
                                    <h6 className="post-author-name">
                                      <a
                                        className="hover-flip-item-wrapper"
                                        href="author.html"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="Ismat Jahan">
                                            Ismat Jahan
                                          </span>
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
                          </div>
                        </div>
                        {/* Start Post Grid  */}
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                            {/* Start Post Grid  */}
                            <div className="content-block post-grid mt--30">
                              <div className="post-thumbnail">
                                <a href="post-details.html">
                                  <img src={postGrid7} alt="Post Images" />
                                </a>
                              </div>
                              <div className="post-grid-content">
                                <div className="post-content darks">
                                  <div className="post-cat">
                                    <div className="post-cat-list">
                                      <a
                                        className="hover-flip-item-wrapper"
                                        href="#"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="LIFESTYLE">
                                            LIFESTYLE
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="title">
                                    <a href="post-details.html">
                                      The underrated design book that
                                      transformed the
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            {/* Start Post Grid  */}
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                            {/* Start Post Grid  */}
                            <div className="content-block post-grid mt--30">
                              <div className="post-thumbnail">
                                <a href="post-details.html">
                                  <img src={postGrid8} alt="Post Images" />
                                </a>
                              </div>
                              <div className="post-grid-content">
                                <div className="post-content darks">
                                  <div className="post-cat">
                                    <div className="post-cat-list">
                                      <a
                                        className="hover-flip-item-wrapper"
                                        href="#"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="TRAVEL">TRAVEL</span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="title">
                                    <a href="post-details.html">
                                      Apple reimagines the iPhone experience
                                      with iOS 14
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            {/* Start Post Grid  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Tab Content  */}
                  {/* Start Single Tab Content  */}
                  <div
                    className="single-post-grid tab-pane fade"
                    id="gridtwo"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                        {/* Start Post Grid  */}
                        <div className="content-block post-grid post-grid-large mt--30">
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              <img src={postGrid9} alt="Post Images" />
                            </a>
                          </div>
                          <div className="post-grid-content">
                            <div className="post-content darks">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="DESIGN">DESIGN</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h3 className="title">
                                <a href="post-details.html">
                                  Get Ready To Up Your Creative Game With The
                                  New DJI Mavic Air 2
                                </a>
                              </h3>
                              <div className="post-meta-wrapper">
                                <div className="post-meta">
                                  <div className="post-author-avatar border-rounded">
                                    <img
                                      src={authorImage2}
                                      alt="Author Images"
                                    />
                                  </div>
                                  <div className="content">
                                    <h6 className="post-author-name">
                                      <a
                                        className="hover-flip-item-wrapper"
                                        href="author.html"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="Ismat Jahan">
                                            Ismat Jahan
                                          </span>
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
                          </div>
                        </div>
                        {/* Start Post Grid  */}
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                            {/* Start Post Grid  */}
                            <div className="content-block post-grid mt--30">
                              <div className="post-thumbnail">
                                <a href="post-details.html">
                                  <img src={postGrid2} alt="Post Images" />
                                </a>
                              </div>
                              <div className="post-grid-content">
                                <div className="post-content darks">
                                  <div className="post-cat">
                                    <div className="post-cat-list">
                                      <a
                                        className="hover-flip-item-wrapper"
                                        href="#"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="LIFESTYLE">
                                            LIFESTYLE
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="title">
                                    <a href="post-details.html">
                                      The underrated design book that
                                      transformed the
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            {/* Start Post Grid  */}
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                            {/* Start Post Grid  */}
                            <div className="content-block post-grid mt--30">
                              <div className="post-thumbnail">
                                <a href="post-details.html">
                                  <img src={postGrid3} alt="Post Images" />
                                </a>
                              </div>
                              <div className="post-grid-content">
                                <div className="post-content darks">
                                  <div className="post-cat">
                                    <div className="post-cat-list">
                                      <a
                                        className="hover-flip-item-wrapper"
                                        href="#"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="TRAVEL">TRAVEL</span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="title">
                                    <a href="post-details.html">
                                      Apple reimagines the iPhone experience
                                      with iOS 14
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            {/* Start Post Grid  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Tab Content  */}
                  {/* Start Single Tab Content  */}
                  <div
                    className="single-post-grid tab-pane fade"
                    id="gridthree"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                        {/* Start Post Grid  */}
                        <div className="content-block post-grid post-grid-large mt--30">
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              <img src={postGrid9} alt="Post Images" />
                            </a>
                          </div>
                          <div className="post-grid-content">
                            <div className="post-content darks">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="DESIGN">DESIGN</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h3 className="title">
                                <a href="post-details.html">
                                  Get Ready To Up Your Creative Game With The
                                  New DJI Mavic Air 2
                                </a>
                              </h3>
                              <div className="post-meta-wrapper">
                                <div className="post-meta">
                                  <div className="post-author-avatar border-rounded">
                                    <img
                                      src={authorImage2}
                                      alt="Author Images"
                                    />
                                  </div>
                                  <div className="content">
                                    <h6 className="post-author-name">
                                      <a
                                        className="hover-flip-item-wrapper"
                                        href="author.html"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="Ismat Jahan">
                                            Ismat Jahan
                                          </span>
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
                          </div>
                        </div>
                        {/* Start Post Grid  */}
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                            {/* Start Post Grid  */}
                            <div className="content-block post-grid mt--30">
                              <div className="post-thumbnail">
                                <a href="post-details.html">
                                  <img src={postGrid7} alt="Post Images" />
                                </a>
                              </div>
                              <div className="post-grid-content">
                                <div className="post-content darks">
                                  <div className="post-cat">
                                    <div className="post-cat-list">
                                      <a
                                        className="hover-flip-item-wrapper"
                                        href="#"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="LIFESTYLE">
                                            LIFESTYLE
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="title">
                                    <a href="post-details.html">
                                      The underrated design book that
                                      transformed the
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            {/* Start Post Grid  */}
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                            {/* Start Post Grid  */}
                            <div className="content-block post-grid mt--30">
                              <div className="post-thumbnail">
                                <a href="post-details.html">
                                  <img src={postGrid8} alt="Post Images" />
                                </a>
                              </div>
                              <div className="post-grid-content">
                                <div className="post-content darks">
                                  <div className="post-cat">
                                    <div className="post-cat-list">
                                      <a
                                        className="hover-flip-item-wrapper"
                                        href="#"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="TRAVEL">TRAVEL</span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="title">
                                    <a href="post-details.html">
                                      Apple reimagines the iPhone experience
                                      with iOS 14
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            {/* Start Post Grid  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Tab Content  */}
                  {/* Start Single Tab Content  */}
                  <div
                    className="single-post-grid tab-pane fade"
                    id="gridfour"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                        {/* Start Post Grid  */}
                        <div className="content-block post-grid post-grid-large mt--30">
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              <img src={postGrid1} alt="Post Images" />
                            </a>
                          </div>
                          <div className="post-grid-content">
                            <div className="post-content darks">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="DESIGN">DESIGN</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h3 className="title">
                                <a href="post-details.html">
                                  Get Ready To Up Your Creative Game With The
                                  New DJI Mavic Air 2
                                </a>
                              </h3>
                              <div className="post-meta-wrapper">
                                <div className="post-meta">
                                  <div className="post-author-avatar border-rounded">
                                    <img
                                      src={authorImage2}
                                      alt="Author Images"
                                    />
                                  </div>
                                  <div className="content">
                                    <h6 className="post-author-name">
                                      <a
                                        className="hover-flip-item-wrapper"
                                        href="author.html"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="Ismat Jahan">
                                            Ismat Jahan
                                          </span>
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
                          </div>
                        </div>
                        {/* Start Post Grid  */}
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                            {/* Start Post Grid  */}
                            <div className="content-block post-grid mt--30">
                              <div className="post-thumbnail">
                                <a href="post-details.html">
                                  <img src={postGrid2} alt="Post Images" />
                                </a>
                              </div>
                              <div className="post-grid-content">
                                <div className="post-content darks">
                                  <div className="post-cat">
                                    <div className="post-cat-list">
                                      <a
                                        className="hover-flip-item-wrapper"
                                        href="#"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="LIFESTYLE">
                                            LIFESTYLE
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="title">
                                    <a href="post-details.html">
                                      The underrated design book that
                                      transformed the
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            {/* Start Post Grid  */}
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                            {/* Start Post Grid  */}
                            <div className="content-block post-grid mt--30">
                              <div className="post-thumbnail">
                                <a href="post-details.html">
                                  <img src={postGrid3} alt="Post Images" />
                                </a>
                              </div>
                              <div className="post-grid-content">
                                <div className="post-content darks">
                                  <div className="post-cat">
                                    <div className="post-cat-list">
                                      <a
                                        className="hover-flip-item-wrapper"
                                        href="#"
                                      >
                                        <span className="hover-flip-item">
                                          <span data-text="TRAVEL">TRAVEL</span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="title">
                                    <a href="post-details.html">
                                      Apple reimagines the iPhone experience
                                      with iOS 14
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            {/* Start Post Grid  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Tab Content  */}
                </div>
                {/* End Tab Content  */}
              </div>
            </div>
          </div>
        </div>
        {/* End Post Grid Area  */}
        {/* Start Post List Wrapper  */}
        <div
          className={
            "axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white" +
            themeColor
          }
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-8">
                <div className="axil-banner">
                  <div className="thumbnail">
                    <a href="#">
                      <img
                        className="w-100"
                        src={banner01}
                        alt="Banner Images"
                      />
                    </a>
                  </div>
                </div>
                {/* Start Post List  */}
                <div className="content-block post-list-view axil-control is-active mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postLis11} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content border">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="FOOD">FOOD</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        Security isn’t just a technology problem it’s about
                        design, too
                      </a>
                    </h4>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a
                              className="hover-flip-item-wrapper"
                              href="author.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Jane Ara">Jane Ara</span>
                              </span>
                            </a>
                          </h6>
                          <ul className="post-meta-list">
                            <li>Feb 17, 2019</li>
                            <li>3 min read</li>
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
                </div>
                {/* End Post List  */}
                {/* Start Post List  */}
                <div className="content-block post-list-view axil-control mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postLis12} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content border">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="LIFESTYLE">LIFESTYLE</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        The 1 tool that helps remote teams collaborate better
                      </a>
                    </h4>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a
                              className="hover-flip-item-wrapper"
                              href="author.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Fatima Jane">Fatima Jane</span>
                              </span>
                            </a>
                          </h6>
                          <ul className="post-meta-list">
                            <li>Feb 17, 2019</li>
                            <li>3 min read</li>
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
                </div>
                {/* End Post List  */}
                {/* Start Post List  */}
                <div className="content-block post-list-view axil-control mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postLis15} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content border">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="TRAVEL">TRAVEL</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        Traditional design won’t save us in the COVID-19 era
                      </a>
                    </h4>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a
                              className="hover-flip-item-wrapper"
                              href="author.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Esrat Ara">Esrat Ara</span>
                              </span>
                            </a>
                          </h6>
                          <ul className="post-meta-list">
                            <li>Feb 17, 2019</li>
                            <li>3 min read</li>
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
                </div>
                {/* End Post List  */}
                {/* Start Post List  */}
                <div className="content-block post-list-view axil-control mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postLis13} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content border">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="DESIGN">DESIGN</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        Get Ready To Up Your Creative Game With The New DJI
                        Mavic Air 2
                      </a>
                    </h4>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a
                              className="hover-flip-item-wrapper"
                              href="author.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="John Doe">John Doe</span>
                              </span>
                            </a>
                          </h6>
                          <ul className="post-meta-list">
                            <li>Feb 17, 2019</li>
                            <li>3 min read</li>
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
                </div>
                {/* End Post List  */}
                {/* Start Post List  */}
                <div className="content-block post-list-view axil-control mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postLis14} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content border">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="FOOD">FOOD</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        Security isn’t just a technology problem it’s about
                        design, too
                      </a>
                    </h4>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a
                              className="hover-flip-item-wrapper"
                              href="author.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Asifa Fr">Asifa Fr</span>
                              </span>
                            </a>
                          </h6>
                          <ul className="post-meta-list">
                            <li>Feb 17, 2019</li>
                            <li>3 min read</li>
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
                </div>
                {/* End Post List  */}
              </div>
              <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
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
                            <img src={categoryImage02} alt="" />
                          </div>
                          <div className="content">
                            <h5 className="title">Style</h5>
                          </div>
                        </a>
                      </li>
                      <li className="cat-item">
                        <a href="#" className="inner">
                          <div className="thumbnail">
                            <img src={categoryImage03} alt="" />
                          </div>
                          <div className="content">
                            <h5 className="title">Travel</h5>
                          </div>
                        </a>
                      </li>
                      <li className="cat-item">
                        <a href="#" className="inner">
                          <div className="thumbnail">
                            <img src={categoryImage04} alt="" />
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
                              way I work
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
                            <img src={blogSm02} alt="Post Images" />
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
                      <div className="content-block post-medium mb--20">
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={blogSm03} alt="Post Images" />
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
                  <div className="axil-single-widget widget widget_social mb--30">
                    <h5 className="widget-title">Stay In Touch</h5>
                    {/* Start Post List  */}
                    <ul className="social-icon md-size justify-content-center">
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-facebook-f " />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-instagram " />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-twitter " />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-slack " />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icons">
                          <i className="fab fa-linkedin-in " />
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
                          <img src={instagram02} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram03} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram04} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram05} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram06} alt="Instagram Images" />
                        </a>
                      </li>
                    </ul>
                    {/* End Post List  */}
                  </div>
                  {/* End Single Widget  */}
                </div>
                {/* End Sidebar Area  */}
              </div>
            </div>
          </div>
        </div>
        {/* End Post List Wrapper  */}
        {/* Start Video Area  */}
        <div
          className={
            "axil-video-post-area axil-section-gap bg-color-black" + themeColor
          }
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title">Featured Video</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
                {/* Start Post List  */}
                <div className="content-block post-default image-rounded mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postDark01} alt="Post Images" />
                    </a>
                    <a
                      className="video-popup position-top-center"
                      href="post-details.html"
                    >
                      <span className="play-icon" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="CAREERS">CAREERS</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h3 className="title">
                      <a href="post-details.html">
                        Security isn’t just a technology problem it’s about
                        design, too
                      </a>
                    </h3>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
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
                            <li>3 min read</li>
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
                </div>
                {/* End Post List  */}
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
                <div className="row">
                  {/* Start Post List  */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="content-block post-default image-rounded mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={postDark04} alt="Post Images" />
                        </a>
                        <a
                          className="video-popup size-medium position-top-center"
                          href="post-details.html"
                        >
                          <span className="play-icon" />
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="DESIGN">DESIGN</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h5 className="title">
                          <a href="post-details.html">
                            Get Ready To Up Your Creative Game With The
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* End Post List  */}
                  {/* Start Post List  */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="content-block post-default image-rounded mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={postDark03} alt="Post Images" />
                        </a>
                        <a
                          className="video-popup size-medium position-top-center"
                          href="post-details.html"
                        >
                          <span className="play-icon" />
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="LEADERSHIP">LEADERSHIP</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h5 className="title">
                          <a href="post-details.html">
                            Traditional design won’t save us in the COVID-19 era
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* End Post List  */}
                  {/* Start Post List  */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="content-block post-default image-rounded mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={postDark04} alt="Post Images" />
                        </a>
                        <a
                          className="video-popup size-medium position-top-center"
                          href="post-details.html"
                        >
                          <span className="play-icon" />
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="PRODUCT UPDATES">
                                  PRODUCT UPDATES
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h5 className="title">
                          <a href="post-details.html">
                            New: Freehand Templates, built for the whole team
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* End Post List  */}
                  {/* Start Post List  */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="content-block post-default image-rounded mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={postDark05} alt="Post Images" />
                        </a>
                        <a
                          className="video-popup size-medium position-top-center"
                          href="post-details.html"
                        >
                          <span className="play-icon" />
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="COLLABORATION">
                                  COLLABORATION
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h5 className="title">
                          <a href="post-details.html">
                            The 1 tool that helps remote teams collaborate
                            better
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* End Post List  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Video Area  */}
        {/* Start Instagram Area  */}
        <div
          className={
            "axil-instagram-area axil-section-gap bg-color-grey" + themeColor
          }
        >
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
                      <img src={instagram01} alt="Instagram Images" />
                      <span className="instagram-button icons">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram02} alt="Instagram Images" />
                      <span className="instagram-button icons">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram03} alt="Instagram Images" />
                      <span className="instagram-button icons">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>

                  <li className="single-post">
                    <a href="#">
                      <img src={instagram04} alt="Instagram Images" />
                      <span className="instagram-button icons">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram05} alt="Instagram Images" />
                      <span className="instagram-button icons">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram06} alt="Instagram Images" />
                      <span className="instagram-button icons">
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
        <div
          className={
            "axil-footer-area axil-footer-style-1 footer-variation-2" +
            themeColor
          }
        >
          <div className="footer-mainmenu">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h2 className="title">World</h2>
                    <div className="inner">
                      <ul className="ft-menu-list">
                        <li>
                          <a href="#">U.N.</a>
                        </li>
                        <li>
                          <a href="#">Conflicts</a>
                        </li>
                        <li>
                          <a href="#">Terrorism</a>
                        </li>
                        <li>
                          <a href="#">Disasters</a>
                        </li>
                        <li>
                          <a href="#">Global Economy</a>
                        </li>
                        <li>
                          <a href="#">Environment</a>
                        </li>
                        <li>
                          <a href="#">Religion</a>
                        </li>
                        <li>
                          <a href="#">Scandals</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h2 className="title">Politics</h2>
                    <div className="inner">
                      <ul className="ft-menu-list">
                        <li>
                          <a href="#">Executive</a>
                        </li>
                        <li>
                          <a href="#">Senate</a>
                        </li>
                        <li>
                          <a href="#">House</a>
                        </li>
                        <li>
                          <a href="#">Judiciary</a>
                        </li>
                        <li>
                          <a href="#">Global Economy</a>
                        </li>
                        <li>
                          <a href="#">Foreign policy</a>
                        </li>
                        <li>
                          <a href="#">Polls</a>
                        </li>
                        <li>
                          <a href="#">Elections</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h2 className="title">Entertainment</h2>
                    <div className="inner">
                      <ul className="ft-menu-list">
                        <li>
                          <a href="#">Celebrity News</a>
                        </li>
                        <li>
                          <a href="#">Movies</a>
                        </li>
                        <li>
                          <a href="#">TV News</a>
                        </li>
                        <li>
                          <a href="#">Disasters</a>
                        </li>
                        <li>
                          <a href="#">Music News</a>
                        </li>
                        <li>
                          <a href="#">Environment</a>
                        </li>
                        <li>
                          <a href="#">Style News</a>
                        </li>
                        <li>
                          <a href="#">Entertainment Video</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h2 className="title">Business</h2>
                    <div className="inner">
                      <ul className="ft-menu-list">
                        <li>
                          <a href="#">Environment</a>
                        </li>
                        <li>
                          <a href="#">Conflicts</a>
                        </li>
                        <li>
                          <a href="#">Terrorism</a>
                        </li>
                        <li>
                          <a href="#">Disasters</a>
                        </li>
                        <li>
                          <a href="#">Global Economy</a>
                        </li>
                        <li>
                          <a href="#">Environment</a>
                        </li>
                        <li>
                          <a href="#">Religion</a>
                        </li>
                        <li>
                          <a href="#">Scandals</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h2 className="title">Health</h2>
                    <div className="inner">
                      <ul className="ft-menu-list">
                        <li>
                          <a href="#">Movies</a>
                        </li>
                        <li>
                          <a href="#">Conflicts</a>
                        </li>
                        <li>
                          <a href="#">Terrorism</a>
                        </li>
                        <li>
                          <a href="#">Disasters</a>
                        </li>
                        <li>
                          <a href="#">Global Economy</a>
                        </li>
                        <li>
                          <a href="#">Environment</a>
                        </li>
                        <li>
                          <a href="#">Religion</a>
                        </li>
                        <li>
                          <a href="#">Scandals</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h2 className="title">About</h2>
                    <div className="inner">
                      <ul className="ft-menu-list">
                        <li>
                          <a href="#">U.N.</a>
                        </li>
                        <li>
                          <a href="#">Conflicts</a>
                        </li>
                        <li>
                          <a href="#">Terrorism</a>
                        </li>
                        <li>
                          <a href="#">Disasters</a>
                        </li>
                        <li>
                          <a href="#">Global Economy</a>
                        </li>
                        <li>
                          <a href="#">Environment</a>
                        </li>
                        <li>
                          <a href="#">Religion</a>
                        </li>
                        <li>
                          <a href="#">Scandals</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Start Footer Top Area  */}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        className="dark-logo"
                        src={logoBlack}
                        alt="Logo Images"
                      />
                      <img
                        className="white-logo"
                        src={logoWhite2}
                        alt="Logo Images"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8">
                  {/* Start Post List  */}
                  <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
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
                <div className="col-lg-9 col-md-8">
                  <div className="copyright-left">
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
                <div className="col-lg-3 col-md-4">
                  <div className="copyright-right text-start text-md-end mt_sm--20">
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
};

export default Home;
