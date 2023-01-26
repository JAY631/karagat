import React, {useState} from 'react'
import logoBlack from "../../images/logo/logo-black.png";
import logoWhite from "../../images/logo/logo-white.png";
import logoWhite2 from "../../images/logo/logo-white2.png";
import author from "../../images/others/author.png";
import megaPost01 from "../../images/others/mega-post-01.jpg";
import categoryImage01 from "../../images/post-images/category-image-01.jpg";
import blogSm01 from "../../images/small-images/blog-sm-01.jpg";
import instagram01 from "../../images/small-images/instagram-01.jpg";
import instagram from "../../images/small-images/instagram-md-06.jpg";
import postList04 from "../../images/post-images/post-list-04.jpg";
import postList05 from "../../images/post-images/post-list-05.jpg";
import postList02 from "../../images/post-images/post-list-02.jpg";
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

export default function PostList() {
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
        <header className={"header axil-header header-light header-sticky header-with-shadow" + themeColor}>
          <div className="header-wrap">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
                <div className="logo">
                  <a href="index.html">
                    <img className="dark-logo" src={logoBlack} alt="Blogar logo" />
                    <img className="light-logo" src={logoWhite2} alt="Blogar logo" />
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
                            <a className="hover-flip-item-wrapper" href="index.html">
                              <span className="hover-flip-item">
                                <span data-text="Home Default">Home Default</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="home-creative-blog.html">
                              <span className="hover-flip-item">
                                <span data-text="Home Creative Blog">Home Creative Blog</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="home-seo-blog.html">
                              <span className="hover-flip-item">
                                <span data-text="Home SEO Blog">Home SEO Blog</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="home-tech-blog.html">
                              <span className="hover-flip-item">
                                <span data-text="Home Tech Blog">Home Tech Blog</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="home-lifestyle-blog.html">
                              <span className="hover-flip-item">
                                <span data-text="Home Lifestyle Blog">Home Lifestyle Blog</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Posts</a>
                        <ul className="axil-submenu">
                          <li>
                            <a className="hover-flip-item-wrapper" href="post-format-standard.html">
                              <span className="hover-flip-item">
                                <span data-text="Post Format Standard">Post Format Standard</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="post-format-video.html">
                              <span className="hover-flip-item">
                                <span data-text="Post Format Video">Post Format Video</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="post-format-gallery.html">
                              <span className="hover-flip-item">
                                <span data-text="Post Format Gallery">Post Format Gallery</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="post-format-text.html">
                              <span className="hover-flip-item">
                                <span data-text="Post Format Text Only">Post Format Text Only</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="post-layout-1.html">
                              <span className="hover-flip-item">
                                <span data-text="Post Layout One">Post Layout One</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="post-layout-2.html">
                              <span className="hover-flip-item">
                                <span data-text="Post Layout Two">Post Layout Two</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="post-layout-3.html">
                              <span className="hover-flip-item">
                                <span data-text="Post Layout Three">Post Layout Three</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="post-layout-4.html">
                              <span className="hover-flip-item">
                                <span data-text="Post Layout Four">Post Layout Four</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="post-layout-5.html">
                              <span className="hover-flip-item">
                                <span data-text="Post Layout Five">Post Layout Five</span>
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
                                <li className="vertical-nav-item active"  onMouseEnter={()=>change(0, "", "active", "vertical-nav-item")}>
                                  <a className="hover-flip-item-wrapper" href="#tab1">
                                    <span className="hover-flip-item">
                                      <span data-text="Accessibility">Accessibility</span>
                                    </span>
                                  </a>
                                </li>
                                <li className="vertical-nav-item" onMouseEnter={()=>change(1, "", "active", "vertical-nav-item")}>
                                  <a className="hover-flip-item-wrapper" href="#tab2">
                                    <span className="hover-flip-item">
                                      <span data-text="Android Dev">Android Dev</span>
                                    </span>
                                  </a>
                                </li>
                                <li className="vertical-nav-item" onMouseEnter={()=>change(2, "", "active", "vertical-nav-item")}>
                                  <a className="hover-flip-item-wrapper" href="#tab3">
                                    <span className="hover-flip-item">
                                      <span data-text="Blockchain">Blockchain</span>
                                    </span>
                                  </a>
                                </li>
                                <li className="vertical-nav-item" onMouseEnter={()=>change(3, "", "active", "vertical-nav-item")}>
                                  <a className="hover-flip-item-wrapper" href="#tab4">
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
                              <div className="axil-vertical-inner tab-content" id="tab1" style={{display: 'block'}}>
                                <div className="axil-vertical-single">
                                  <div className="row">
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
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
                                            <a href="post-details.html">India may require online shops to
                                              hand</a>
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
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a className="hover-flip-item-wrapper" href="#">
                                                <span className="hover-flip-item">
                                                  <span data-text="CREATIVE">CREATIVE</span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">Lightweight, grippable, and ready
                                              to go.</a>
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
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
                                          </a>
                                        </div>
                                        <div className="post-content">
                                          <div className="post-cat">
                                            <div className="post-cat-list">
                                              <a className="hover-flip-item-wrapper" href="#">
                                                <span className="hover-flip-item">
                                                  <span data-text="TRAVEL">TRAVEL</span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <h5 className="title">
                                            <a href="post-details.html">Bold new experience. Same Mac
                                              magic.</a>
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
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
                                          </a>
                                        </div>
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
                                          <h5 className="title">
                                            <a href="post-details.html">Creative Game With The New DJI
                                              Mavic Air</a>
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
                              <div className="axil-vertical-inner tab-content" id="tab2">
                                <div className="axil-vertical-single">
                                  <div className="row">
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
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
                                            <a href="post-details.html">India may require online shops to
                                              hand</a>
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
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
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
                                            <a href="post-details.html">Lightweight, grippable, and ready
                                              to go.</a>
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
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
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
                                            <a href="post-details.html">Bold new experience. Same Mac
                                              magic.</a>
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
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
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
                                            <a href="post-details.html">Creative Game With The New DJI
                                              Mavic Air</a>
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
                              <div className="axil-vertical-inner tab-content" id="tab3">
                                <div className="axil-vertical-single">
                                  <div className="row">
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
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
                                            <a href="post-details.html">Creative Game With The New DJI
                                              Mavic Air</a>
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
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
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
                                            <a href="post-details.html">Bold new experience. Same Mac
                                              magic.</a>
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
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
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
                                            <a href="post-details.html">Lightweight, grippable, and ready
                                              to go.</a>
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
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
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
                                            <a href="post-details.html">India may require online shops to
                                              hand</a>
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
                              <div className="axil-vertical-inner tab-content" id="tab4">
                                <div className="axil-vertical-single">
                                  <div className="row">
                                    {/* Start Post List  */}
                                    <div className="col-lg-3">
                                      <div className="content-block image-rounded">
                                        <div className="post-thumbnail mb--20">
                                          <a href="post-details.html">
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
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
                                            <a href="post-details.html">India may require online shops to
                                              hand</a>
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
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
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
                                            <a href="post-details.html">Lightweight, grippable, and ready
                                              to go.</a>
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
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
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
                                            <a href="post-details.html">Bold new experience. Same Mac
                                              magic.</a>
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
                                            <img className="w-100" src={megaPost01} alt="Post Images" />
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
                                            <a href="post-details.html">Creative Game With The New DJI
                                              Mavic Air</a>
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
                            <a className="hover-flip-item-wrapper" href="post-list.html">
                              <span className="hover-flip-item">
                                <span data-text="Post List">Post List</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="archive.html">
                              <span className="hover-flip-item">
                                <span data-text="Post Archive">Post Archive</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="author.html">
                              <span className="hover-flip-item">
                                <span data-text="Author Page">Author Page</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="about.html">
                              <span className="hover-flip-item">
                                <span data-text="About Page">About Page</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="contact.html">
                              <span className="hover-flip-item">
                                <span data-text="Contact Us">Contact Us</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="404.html">
                              <span className="hover-flip-item">
                                <span data-text="404 Page">404 Page</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="maintenance.html">
                              <span className="hover-flip-item">
                                <span data-text="Maintenance">Maintenance</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="hover-flip-item-wrapper" href="privacy-policy.html">
                              <span className="hover-flip-item">
                                <span data-text="Privacy Policy">Privacy Policy</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li><a href="home-lifestyle-blog.html">Lifestyle</a></li>
                      <li><a href="home-tech-blog.html">Gadgets</a></li>
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
                      <input type="text" className="form-control" placeholder="Search" />
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
                        <input type="text" className="form-control" placeholder="Search" />
                      </div>
                    </form>
                  </div>
                  <ul className="metabar-block">
                    <li className="icon">
                      <a href="#" className='icons' ><i className="fas fa-bookmark" /></a>
                    </li>
                    <li className="icon">
                      <a href="#" className='icons' ><i className="fas fa-bell" /></a>
                    </li>
                    <li>
                      <a href="#"><img src={author} alt="Author Images" /></a>
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
                  <img className="dark-logo" src={logoBlack} alt="Logo Images" />
                  <img className="light-logo" src={logoWhite2} alt="Logo Images" />
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
                  <li><a href="index.html">Home Default</a></li>
                  <li>
                    <a href="home-creative-blog.html">Home Creative Blog</a>
                  </li>
                  <li><a href="home-seo-blog.html">Home Seo Blog</a></li>
                  <li><a href="home-tech-blog.html">Home Tech Blog</a></li>
                  <li>
                    <a href="home-lifestyle-blog.html">Home Lifestyle Blog</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Categories</a>
                <ul className="axil-submenu">
                  <li><a href="post-details.html">Accessibility</a></li>
                  <li><a href="post-details.html">Android Dev</a></li>
                  <li><a href="post-details.html">Accessibility</a></li>
                  <li><a href="post-details.html">Android Dev</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Post Format</a>
                <ul className="axil-submenu">
                  <li>
                    <a href="post-format-standard.html">Post Format Standard</a>
                  </li>
                  <li><a href="post-format-video.html">Post Format Video</a></li>
                  <li>
                    <a href="post-format-gallery.html">Post Format Gallery</a>
                  </li>
                  <li>
                    <a href="post-format-text.html">Post Format Text Only</a>
                  </li>
                  <li><a href="post-layout-1.html">Post Layout One</a></li>
                  <li><a href="post-layout-2.html">Post Layout Two</a></li>
                  <li><a href="post-layout-3.html">Post Layout Three</a></li>
                  <li><a href="post-layout-4.html">Post Layout Four</a></li>
                  <li><a href="post-layout-5.html">Post Layout Five</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="axil-submenu">
                  <li><a href="post-list.html">Post List</a></li>
                  <li><a href="archive.html">Post Archive</a></li>
                  <li><a href="author.html">Author Page</a></li>
                  <li><a href="about.html">About Page</a></li>
                  <li><a href="maintenance.html">Maintenance</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </li>
              <li><a href="404.html">404 Page</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
            <div className="buy-now-btn">
              <a href="#">Buy Now <span className="badge">$15</span></a>
            </div>
          </div>
        </div>
        {/* End Mobile Menu Area  */}
        <h1 className="d-none">Home Tech Blog</h1>
        {/* Start Post List Wrapper  */}
        <div className={"axil-post-list-area axil-section-gap bg-color-white" + themeColor}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-8">
                {/* Start Post List  */}
                <div className="content-block post-list-view sticky mt--30">
                  <div className="post-content dark__card">
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
                      <a href="post-details.html">Security isn’t just a technology problem it’s about
                        design, too problem it’s about design, too.
                      </a>
                    </h4>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a className="hover-flip-item-wrapper" href="author.html">
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
                          <a href="#"><i className="fab fa-facebook-f" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-instagram" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-twitter" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fas fa-link" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Post List  */}
                {/* Start Post List  */}
                <div className="content-block post-list-view mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postList02} alt="Post Images" />
                    </a>
                    <a className="video-popup size-medium position-top-center icon-color-secondary" href="post-details.html"><span className="play-icon" /></a>
                  </div>
                  <div className="post-content">
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
                      <a href="post-details.html">Traditional design won’t save us in the COVID-19 era</a>
                    </h4>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a className="hover-flip-item-wrapper" href="author.html">
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
                          <a href="#"><i className="fab fa-facebook-f" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-instagram" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-twitter" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fas fa-link" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Post List  */}
                {/* Start Post List  */}
                <div className="content-block post-list-view format-quote mt--30">
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="TRAVEL">TRAVEL</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <blockquote>
                      <h4 className="title">
                        <a href="post-details.html">“You can now listen to the entire library of Design
                          Better <br />
                          books for free”</a>
                      </h4>
                    </blockquote>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a className="hover-flip-item-wrapper" href="author.html">
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
                          <a href="#"><i className="fab fa-facebook-f" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-instagram" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-twitter" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fas fa-link" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Post List  */}
                {/* Start Post List  */}
                <div className="content-block post-list-view mt--30">
                  <div className="post-thumbnail post-gallery-activation axil-slick-arrow arrow-between-side">
                    <a href="post-details.html">
                      <img src={postList04} alt="Post Images" />
                    </a>
                    <a href="post-details.html">
                      <img src={postList04} alt="Post Images" />
                    </a>
                    <a href="post-details.html">
                      <img src={postList04} alt="Post Images" />
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
                    <h4 className="title">
                      <a href="post-details.html">New: Freehand Templates, built for the whole team</a>
                    </h4>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a className="hover-flip-item-wrapper" href="author.html">
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
                          <a href="#"><i className="fab fa-facebook-f" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-instagram" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-twitter" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fas fa-link" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Post List  */}
                {/* Start Post List  */}
                <div className="content-block post-list-view mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postList05} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="CREATIVE">CREATIVE</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="post-details.html">Get Ready To Up Your Creative Game With The New DJI Mavic
                        Air 2</a>
                    </h4>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a className="hover-flip-item-wrapper" href="author.html">
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
                          <a href="#"><i className="fab fa-facebook-f" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-instagram" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-twitter" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fas fa-link" /></a>
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
                        <input type="text" className="form-control" placeholder="Search" />
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
                            <a href="post-details.html">The underrated design book that transformed the way
                              I work
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
                            <a href="post-details.html">Here’s what you should (and shouldn’t) do when</a>
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
                            <a href="post-details.html">How a developer and designer duo at Deutsche Bank
                              keep remote</a>
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
                        <a href="#" className='icons'><i className="fab fa-facebook-f" /></a>
                      </li>
                      <li>
                        <a href="#" className='icons'><i className="fab fa-instagram" /></a>
                      </li>
                      <li>
                        <a href="#" className='icons'><i className="fab fa-twitter" /></a>
                      </li>
                      <li>
                        <a href="#" className='icons'><i className="fab fa-slack" /></a>
                      </li>
                      <li>
                        <a href="#" className='icons'><i className="fab fa-linkedin-in" /></a>
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
                      <span className="instagram-button icons"><i className="fab fa-instagram" /></span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button icons"><i className="fab fa-instagram" /></span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button icons"><i className="fab fa-instagram" /></span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button icons"><i className="fab fa-instagram" /></span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button icons"><i className="fab fa-instagram" /></span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button"><i className="fab fa-instagram" /></span>
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
                        <a href="#" className='icons'><i className="fab fa-facebook-f" /></a>
                      </li>
                      <li>
                        <a href="#" className='icons'><i className="fab fa-instagram" /></a>
                      </li>
                      <li>
                        <a href="#" className='icons'><i className="fab fa-twitter" /></a>
                      </li>
                      <li>
                        <a href="#" className='icons'><i className="fab fa-linkedin-in" /></a>
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
                        <img className="dark-logo" src={logoBlack} alt="Logo Images" />
                        <img className="light-logo" src={logoWhite2} alt="Logo Images" />
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
                            <span data-text="Advertise with Us">Advertise with Us</span>
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
  )
}
