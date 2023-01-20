import React from "react";
import logoBlack from "../../images/logo/logo-black.png";
import logoWhite from "../../images/logo/logo-white.png";
import logoWhite2 from "../../images/logo/logo-white2.png";
import author from "../../images/others/author.png";
import megaPost from "../../images/others/mega-post-01.jpg";
import postSeoGrid01 from "../../images/post-images/post-seo-grid-01.jpg";
import postSeoSm1 from "../../images/post-images/post-seo-sm-01.jpg";
import authorImage2 from "../../images/post-images/author/author-image-2.png";
import banner03 from "../../images/add-banner/banner-03.png";
import postColumn09 from "../../images/post-images/post-column-09.jpg";
import postGrid from '../../images/post-images/post-grid-10.jpg';
import postGrid12 from "../../images/post-images/post-grid-12.jpg";
import postDark01 from "../../images/post-images/post-dark-01.jpg";
import postDark02 from '../../images/post-images/post-dark-03.jpg';
import blogSm06 from "../../images/small-images/blog-sm-06.jpg";
import banner01 from "../../images/add-banner/banner-01.png";
import postSeoList01 from '../../images/small-images/post-seo-list-01.jpg';
import categoryImage01 from '../../images/post-images/category-image-01.jpg';
import instagram01 from '../../images/small-images/instagram-01.jpg';
import instagramMd06 from '../../images/small-images/instagram-md-06.jpg';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { selectThemeColor } from "../../store/theme";
// function change(num, from, to, target) {
//   for (let i = 0; i < document.getElementsByClassName(target).length; i++) {
//     document.getElementsByClassName(target)[i].classList.remove(to)
//     document.getElementsByClassName(target)[num].classList.add(to)
//   }
  
// }
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  swipe: true,
  speed: 250
};
const HomeSeoBlog = () => {
  function change(num, to, target) {
    for (let i = 0; i < document.getElementsByClassName(target).length; i++) {
      document.getElementsByClassName(target)[i].classList.remove(to)
      document.getElementsByClassName(target)[num].classList.add(to)
      console.log(document.getElementsByClassName(target)[num].classList)
    }
    
  }
  const themeColor = useSelector(selectThemeColor);
  return (
    <>
      <div className="main-wrapper">
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />
        {/* Start Header */}
        <header className={"header axil-header header-style-6  header-light header-sticky " + themeColor}>
          <div className="header-top">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xl-4">
                <ul className="social-icon color-white md-size justify-content-center justify-content-sm-start">
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
              <div className="col-lg-2 col-md-6 col-sm-6 col-xl-4">
                <div className="logo text-center">
                  <a href="index.html">
                    <img
                      className="dark-logo"
                      src={logoBlack}
                      alt="Blogar logo"
                    />
                    <img
                      className="light-logo"
                      src={logoWhite}
                      alt="Blogar logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 col-xl-4">
                <div className="header-top-bar d-flex justify-content-center justify-content-lg-end flex-wrap align-items-center">
                  <ul className="header-top-date liststyle d-flex flrx-wrap align-items-center mr--20">
                    <li>
                      <a href="#">4 November, 2022</a>
                    </li>
                  </ul>
                  <ul className="header-top-nav liststyle d-flex flrx-wrap align-items-center">
                    <li>
                      <a href="#">Advertisement</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-7 col-12">
                <div className="mainmenu-wrapper d-none d-xl-block">
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
                            <Link
                              className="hover-flip-item-wrapper"
                              to={'/HomeTechBlog'}
                            >
                              <span className="hover-flip-item">
                                <span data-text="Home Tech Blog">
                                  Home Tech Blog
                                </span>
                              </span>
                            </Link>
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
                                              src={megaPost}
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
              <div className="col-xl-5 col-12">
                <div className="header-search d-flex flex-wrap align-items-center justify-content-center justify-content-xl-end">
                  <form className="header-search-form d-sm-block d-none">
                    <div className="axil-search form-group">
                      <button type="submit" className="search-button">
                        <i class="fa-thin fa-magnifying-glass"></i>{" "}
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
                      <i class="fa-thin fa-magnifying-glass"></i>{" "}
                    </button>
                    <form className="header-search-form">
                      <div className="axil-search form-group">
                        <button type="submit" className="search-button">
                          <i class="fa-thin fa-magnifying-glass"></i>{" "}
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
                      <div className="icon">
                        <i className="fal fa-bars" />
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
        <div className={"popup-mobilemenu-area" + themeColor}>
          <div className="inner">
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
                    src={logoWhite}
                    alt="Logo Images"
                  />
                </a>
              </div>
              <div className="mobile-close">
                <div className="icon">
                  <i className="fal fa-times" />
                </div>
              </div>
            </div>
            <ul className="mainmenu">
              <li className="menu-item-has-children">
                <a href="#">Home</a>
                <ul className="axil-submenu">
                  <li>
                    <a to={'/Home'}>Home Default</a>
                  </li>
                  <li>
                    <Link to={'/HomeCreativeBlog'}>Home Creative Blog</Link>
                  </li>
                  <li>
                    <Link to={'/HomeSeoBlog'}>Home Seo Blog</Link>
                  </li>
                  <li>
                    <Link to={'/HomeTechBlog'}>Home Tech Blog</Link>
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
        <h1 className="d-none">Home Seo Blog</h1>
        <div className={"axil-seo-post-banner seoblog-banner axil-section-gap bg-color-grey" + themeColor}>
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                {/* Start Post Grid  */}
                <div className="content-block post-grid post-grid-large">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postSeoGrid01} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-grid-content">
                    <div className="post-content darks">
                      <div className="post-cat">
                        <div className="post-cat-list">
                          <a className="hover-flip-item-wrapper" href="#">
                            <span className="hover-flip-item">
                              <span data-text="RESEARCH">RESEARCH</span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <h3 className="title">
                        <a href="post-details.html">
                          How to write a title with an optimal width for SEO
                        </a>
                      </h3>
                      <div className="post-meta-wrapper">
                        <div className="post-meta">
                          <div className="post-author-avatar border-rounded">
                            <img src={authorImage2} alt="Author Images" />
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
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start Post Grid  */}
              </div>
              <div className="col-xl-5 col-lg-5 col-md-12 col-12 mt_md--30 mt_sm--30">
                {/* Start Single Post  */}
                <div className="content-block post-medium post-medium-border">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postSeoSm1} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="BUSINESS">BUSINESS</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        How to craft great page titles for SEO
                      </a>
                    </h4>
                  </div>
                </div>
                {/* End Single Post  */}
                {/* Start Single Post  */}
                <div className="content-block post-medium post-medium-border">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postSeoSm1} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="MARKETING">MARKETING</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        Learn What Marketing Is and How It Is Used
                      </a>
                    </h4>
                  </div>
                </div>
                {/* End Single Post  */}
                {/* Start Single Post  */}
                <div className="content-block post-medium post-medium-border">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postSeoSm1} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="DIGITAL SERVICE">
                              DIGITAL SERVICE
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        How to use your keyphrase in the SEO title
                      </a>
                    </h4>
                  </div>
                </div>
                {/* End Single Post  */}
                {/* Start Single Post  */}
                <div className="content-block post-medium post-medium-border">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postSeoSm1} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="BUSINSS KEY">BUSINSS KEY</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        Facebook for Business: Marketing on Facebook
                      </a>
                    </h4>
                  </div>
                </div>
                {/* End Single Post  */}
              </div>
            </div>
          </div>
        </div>
        {/* Start Tab Area  */}
        <div className={"axil-tab-area axil-section-gap bg-color-white" + themeColor}>
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
                  <h2 className="title">What's new at Bloger</h2>
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
                      Search Engines
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
                      Research
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
                      Marketing
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
                      Branding
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
                    <Slider className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side" {...settings}>
                      {/* Start Single Post  */}
                      <div className="slick-single-layout">
                        <div className="content-block modern-post-style text-center content-block-column darks">
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
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
                                Introducing Keyword Data in Site Explorer
                              </a>
                            </h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn09} alt="Post Images" />
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
                                <a className="hover-flip-item-wrapper" href="#">
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
                                Total monthly search traffic for API.
                              </a>
                            </h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn09} alt="Post Images" />
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
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="GADGETS">GADGETS</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="title">
                              <a href="post-details.html">
                                Search improvements in Content Explorer
                              </a>
                            </h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn09} alt="Post Images" />
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
                                <a className="hover-flip-item-wrapper" href="#">
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
                              <img src={postColumn09} alt="Post Images" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End Single Post  */}
                    </Slider>
                  </div>
                  <div
                    className="single-tab-content tab-pane fade"
                    id="tabtwo"
                    role="tabpanel"
                    aria-labelledby="tab-two"
                  >
                    <Slider className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side" {...settings} >
                      {/* Start Single Post  */}
                      <div className="slick-single-layout">
                        <div className="content-block modern-post-style text-center content-block-column darks">
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
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
                              <img src={postColumn09} alt="Post Images" />
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
                                <a className="hover-flip-item-wrapper" href="#">
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
                              <img src={postColumn09} alt="Post Images" />
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
                                <a className="hover-flip-item-wrapper" href="#">
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
                              <img src={postColumn09} alt="Post Images" />
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
                                <a className="hover-flip-item-wrapper" href="#">
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
                              <img src={postColumn09} alt="Post Images" />
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
                    <Slider className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side" {...settings}>
                      {/* Start Single Post  */}
                      <div className="slick-single-layout">
                        <div className="content-block modern-post-style text-center content-block-column darks">
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
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
                              <img src={postColumn09} alt="Post Images" />
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
                                <a className="hover-flip-item-wrapper" href="#">
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
                              <img src={postColumn09} alt="Post Images" />
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
                                <a className="hover-flip-item-wrapper" href="#">
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
                              <img src={postColumn09} alt="Post Images" />
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
                                <a className="hover-flip-item-wrapper" href="#">
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
                              <img src={postColumn09} alt="Post Images" />
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
                    <Slider className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side" {...settings}>
                      {/* Start Single Post  */}
                      <div className="slick-single-layout">
                        <div className="content-block modern-post-style text-center content-block-column darks">
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
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
                              <img src={postColumn09} alt="Post Images" />
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
                                <a className="hover-flip-item-wrapper" href="#">
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
                              <img src={postColumn09} alt="Post Images" />
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
                                <a className="hover-flip-item-wrapper" href="#">
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
                            <a href="post-details.html">
                              <img src={postColumn09} alt="Post Images" />
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
                                <a className="hover-flip-item-wrapper" href="#">
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
                            <a href="post-details.html">
                              <img src={postColumn09} alt="Post Images" />
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
        {/* End Tab Area  */}
        {/* Start Post Grid Area  */}
        <div className={"axil-post-grid-area axil-section-gap bg-color-grey" + themeColor}>
          <div className="container">
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
                      Keyword Research
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
                      Link Building
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
                      Website Traffic
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
                      <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                            {/* Start Post Grid  */}
                            <div className="content-block post-grid mt--30">
                              <div className="post-thumbnail">
                                <a href="post-details.html">
                                  <img src={postGrid} alt="Post Images" />
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
                                          <span data-text="CONTENT">
                                            CONTENT
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="title">
                                    <a href="post-details.html">
                                      How to create white papers that convert
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
                                  <img src={postGrid} alt="Post Images" />
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
                                          <span data-text="DIGITAL MARKETING">
                                            DIGITAL MARKETING
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="title">
                                    <a href="post-details.html">
                                      Building agility with technology and
                                      talent
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            {/* Start Post Grid  */}
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                        {/* Start Post Grid  */}
                        <div className="content-block post-grid post-grid-large mt--30">
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              <img src={postGrid12} alt="Post Images" />
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
                                      <span data-text="SEO">SEO</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h3 className="title">
                                <a href="post-details.html">
                                  A five-step framework for effective keyword
                                  targeting
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
                                          <span data-text="Arlene McCoy">
                                            Arlene McCoy
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
                      <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                            {/* Start Post Grid  */}
                            <div className="content-block post-grid mt--30">
                              <div className="post-thumbnail">
                                <a href="post-details.html">
                                  <img src={postGrid} alt="Post Images" />
                                </a>
                              </div>
                              <div className="post-grid-content">
                                <div className="post-content  darks">
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
                                  <img src={postGrid} alt="Post Images" />
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
                                      with iOS 14{" "}
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            {/* Start Post Grid  */}
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                        {/* Start Post Grid  */}
                        <div className="content-block post-grid post-grid-large mt--30">
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              <img src={postGrid} alt="Post Images" />
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
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Start Post Grid  */}
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
                      <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                            {/* Start Post Grid  */}
                            <div className="content-block post-grid mt--30">
                              <div className="post-thumbnail">
                                <a href="post-details.html">
                                  <img src={postGrid} alt="Post Images" />
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
                                  <img src={postGrid} alt="Post Images" />
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
                                      with iOS 14{" "}
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            {/* Start Post Grid  */}
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                        {/* Start Post Grid  */}
                        <div className="content-block post-grid post-grid-large mt--30">
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              <img src={postGrid} alt="Post Images" />
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
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Start Post Grid  */}
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
        {/* Start Video Area  */}
        <div className={"axil-video-post-area axil-section-gap bg-color-black" + themeColor}>
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
                                <span data-text="Rahabi Khan">Rahabi Khan</span>
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
                          <img src={postDark02} alt="Post Images" />
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
                            The 1 tool that helps remote teams collaborate
                            better
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* End Post List  */}
                  {/* Start Post List  */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="content-block post-default  image-rounded mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={postDark02} alt="Post Images" />
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
                            The 1 tool that helps remote teams collaborate
                            better
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
                          <img src={postDark02} alt="Post Images" />
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
                            The 1 tool that helps remote teams collaborate
                            better
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
                          <img src={postDark02} alt="Post Images" />
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
                                <span data-text="CAREERS">CAREERS</span>
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
        {/* Start Categories List  */}
        <div className={"axil-categories-list axil-section-gap bg-color-grey" + themeColor}>
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
                <div className="list-categories categories-activation axil-slick-arrow arrow-between-side">
                  {/* Start Single Category  */}
                  <div className="single-cat">
                    <div className="inner">
                      <a href="#">
                        <div className="thumbnail">
                          <img src={blogSm06} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">Search Engines</h5>
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
                          <img src={blogSm06} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">SEO</h5>
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
                          <img src={blogSm06} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">Content</h5>
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
                          <img src={blogSm06} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">Marketing</h5>
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
                          <img src={blogSm06} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">Video</h5>
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
                          <img src={blogSm06} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">Food &amp; Drink</h5>
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
                          <img src={blogSm06} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">Search Engines</h5>
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
                          <img src={blogSm06} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">Video</h5>
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
        {/* Start Post List Wrapper  */}
        <div className={"axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white" + themeColor}>
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
                <div className="content-block post-list-view is-active mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img
                        src={postSeoList01}
                        alt="Post Images"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="RESEARCH">RESEARCH</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        Competitive Advantage in a Commoditized Industry
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
                                <span data-text="Jone Doe">Jone Doe</span>
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
                      <img
                        src={postSeoList01}
                        alt="Post Images"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="SEARCH ENGINES">
                              SEARCH ENGINES
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        YouTube Dominates Google Video in 2020
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
                                <span data-text="Esmat Ara">Esmat Ara</span>
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
                      <img
                        src={postSeoList01}
                        alt="Post Images"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="ON-PAGE SEO">ON-PAGE SEO</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        How to Create a Useful and Well Optimized FAQ Page
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
                                <span data-text="Pritha Knock">
                                  Pritha Knock
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
                {/* End Post List  */}
                {/* Start Post List  */}
                <div className="content-block post-list-view axil-control mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img
                        src={postSeoList01}
                        alt="Post Images"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="CONTENT MARKETING">
                              CONTENT MARKETING
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        3 Digital PR Tenets for Excellent Outreach
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
                                <span data-text="Kanak Lota">Kanak Lota</span>
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
                      <img
                        src={postSeoList01}
                        alt="Post Images"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="SEO TOOL">SEO TOOL</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">
                        Overcoming Blockers: How to Build Your Red Tape Toolkit{" "}
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
              <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
                {/* Start Sidebar Area  */}
                <div className="sidebar-inner">
                  {/* Start Single Widget  */}
                  <div className="axil-single-widget widget widget_categories mb--30">
                    <ul>
                      <li className="cat-item">
                        <a href="#" className="inner">
                          <div className="thumbnail">
                            <img
                              src={categoryImage01}
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h5 className="title">Tech</h5>
                          </div>
                        </a>
                      </li>
                      <li className="cat-item">
                        <a href="#" className="inner">
                          <div className="thumbnail">
                            <img
                              src={categoryImage01}
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h5 className="title">Style</h5>
                          </div>
                        </a>
                      </li>
                      <li className="cat-item">
                        <a href="#" className="inner">
                          <div className="thumbnail">
                            <img
                              src={categoryImage01}
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h5 className="title">Travel</h5>
                          </div>
                        </a>
                      </li>
                      <li className="cat-item">
                        <a href="#" className="inner">
                          <div className="thumbnail">
                            <img
                              src={categoryImage01}
                              alt=""
                            />
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
                            <img
                              src={blogSm06}
                              alt="Post Images"
                            />
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
                            <img
                              src={blogSm06}
                              alt="Post Images"
                            />
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
                            <img
                              src={blogSm06}
                              alt="Post Images"
                            />
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
                          <img
                            src={instagram01}
                            alt="Instagram Images"
                          />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img
                            src={instagram01}
                            alt="Instagram Images"
                          />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img
                            src={instagram01}
                            alt="Instagram Images"
                          />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img
                            src={instagram01}
                            alt="Instagram Images"
                          />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img
                            src={instagram01}
                            alt="Instagram Images"
                          />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img
                            src={instagram01}
                            alt="Instagram Images"
                          />
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
        {/* Start Instagram Area  */}
        <div className={"axil-instagram-area axil-section-gap bg-color-grey" + themeColor}>
          <div className="container">
            {/* Start Social Area  */}
            <div className="row axil-section-gapBottom">
              <div className="col-lg-12">
                <div className="axil-social-wrapper bg-color-white radius darks">
                  <ul className="social-with-text">
                    <li className="twitter">
                      <a href="#">
                        <i className="fab fa-twitter iconss" />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li className="facebook">
                      <a href="#">
                        <i className="fab fa-facebook-f iconss" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li className="instagram">
                      <a href="#">
                        <i className="fab fa-instagram iconss" />
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li className="youtube">
                      <a href="#">
                        <i className="fab fa-youtube iconss" />
                        <span>Youtube</span>
                      </a>
                    </li>
                    <li className="pinterest">
                      <a href="#">
                        <i className="fab fa-pinterest iconss" />
                        <span>Pinterest</span>
                      </a>
                    </li>
                    <li className="discord">
                      <a href="#">
                        <i className="fab fa-discord iconss" />
                        <span>Discord</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Social Area  */}
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
                      <img
                        src={instagramMd06}
                        alt="Instagram Images"
                      />
                      <span className="instagram-button">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img
                        src={instagramMd06}
                        alt="Instagram Images"
                      />
                      <span className="instagram-button">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img
                        src={instagramMd06}
                        alt="Instagram Images"
                      />
                      <span className="instagram-button">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img
                        src={instagramMd06}
                        alt="Instagram Images"
                      />
                      <span className="instagram-button">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img
                        src={instagramMd06}
                        alt="Instagram Images"
                      />
                      <span className="instagram-button">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img
                        src={instagramMd06}
                        alt="Instagram Images"
                      />
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
};

export default HomeSeoBlog;
