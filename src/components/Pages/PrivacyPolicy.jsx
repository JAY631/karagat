import React, {useState} from 'react'
import logoBlack from "../../images/logo/logo-black.png";
import logoWhite from "../../images/logo/logo-white.png";
import logoWhite2 from "../../images/logo/logo-white2.png";
import megaPost01 from "../../images/others/mega-post-01.jpg";
import author from "../../images/others/author.png";
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

export default function PrivacyPolicy() {
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
                      <li className="menu-item-has-children"><a href="#">Home</a>
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
                      <li className="menu-item-has-children"><a href="#">Posts</a>
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
                      <li className="menu-item-has-children megamenu-wrapper"><a href="#">Mega Menu</a>
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
                                <li className="vertical-nav-item"  onMouseEnter={()=>change(1, "", "active", "vertical-nav-item")}>
                                  <a className="hover-flip-item-wrapper" href="#tab2">
                                    <span className="hover-flip-item">
                                      <span data-text="Android Dev">Android Dev</span>
                                    </span>
                                  </a>
                                </li>
                                <li className="vertical-nav-item"  onMouseEnter={()=>change(2, "", "active", "vertical-nav-item")}>
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
                                          <h5 className="title"><a href="post-details.html">India may require online shops to hand</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">Lightweight, grippable, and ready to go.</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">Bold new experience. Same Mac magic.</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">Creative Game With The New DJI Mavic Air</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">India may require online shops to hand</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">Lightweight, grippable, and ready to go.</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">Bold new experience. Same Mac magic.</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">Creative Game With The New DJI Mavic Air</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">Creative Game With The New DJI Mavic Air</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">Bold new experience. Same Mac magic.</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">Lightweight, grippable, and ready to go.</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">India may require online shops to hand</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">India may require online shops to hand</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">Lightweight, grippable, and ready to go.</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">Bold new experience. Same Mac magic.</a></h5>
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
                                          <h5 className="title"><a href="post-details.html">Creative Game With The New DJI Mavic Air</a></h5>
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
                      <li className="menu-item-has-children"><a href="#">Pages</a>
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
                      <button type="submit" className="search-button"><i className="fal fa-search" /></button>
                      <input type="text" className="form-control" placeholder="Search" />
                    </div>
                  </form>
                  <div className="mobile-search-wrapper d-sm-none d-block">
                    <button className="search-button-toggle"><i className="fal fa-search" /></button>
                    <form className="header-search-form">
                      <div className="axil-search form-group">
                        <button type="submit" className="search-button"><i className="fal fa-search" /></button>
                        <input type="text" className="form-control" placeholder="Search" />
                      </div>
                    </form>
                  </div>
                  <ul className="metabar-block">
                    <li className="icon"><a className='icons' href="#"><i className="fas fa-bookmark" /></a></li>
                    <li className="icon"><a className='icons' href="#"><i className="fas fa-bell" /></a></li>
                    <li><a href="#"><img src={author} alt="Author Images" /></a></li>
                  </ul>
                  {/* Start Hamburger Menu  */}
                  <div className="hamburger-menu d-block d-xl-none">
                  <div className="icon icons" onClick={burgerFunc}>
                        <i><FontAwesomeIcon icon={faBars} /></i>
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
              <li className="menu-item-has-children"><a href="#">Home</a>
                <ul className="axil-submenu">
                  <li><a href="index.html">Home Default</a></li>
                  <li><a href="home-creative-blog.html">Home Creative Blog</a></li>
                  <li><a href="home-seo-blog.html">Home Seo Blog</a></li>
                  <li><a href="home-tech-blog.html">Home Tech Blog</a></li>
                  <li><a href="home-lifestyle-blog.html">Home Lifestyle Blog</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children"><a href="#">Categories</a>
                <ul className="axil-submenu">
                  <li><a href="post-details.html">Accessibility</a></li>
                  <li><a href="post-details.html">Android Dev</a></li>
                  <li><a href="post-details.html">Accessibility</a></li>
                  <li><a href="post-details.html">Android Dev</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children"><a href="#">Post Format</a>
                <ul className="axil-submenu">
                  <li><a href="post-format-standard.html">Post Format Standard</a></li>
                  <li><a href="post-format-video.html">Post Format Video</a></li>
                  <li><a href="post-format-gallery.html">Post Format Gallery</a></li>
                  <li><a href="post-format-text.html">Post Format Text Only</a></li>
                  <li><a href="post-layout-1.html">Post Layout One</a></li>
                  <li><a href="post-layout-2.html">Post Layout Two</a></li>
                  <li><a href="post-layout-3.html">Post Layout Three</a></li>
                  <li><a href="post-layout-4.html">Post Layout Four</a></li>
                  <li><a href="post-layout-5.html">Post Layout Five</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children"><a href="#">Pages</a>
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
        {/* Start Post Single Wrapper  */}
        <div className={"axil-privacy-area axil-section-gap bg-color-white" + themeColor}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="content">
                  <div className="inner">
                    <div className="section-title">
                      <h4 className="title">This Privacy policy was published on April 26th, 2018.</h4>
                    </div>
                    <h3>GDPR compliance</h3>
                    <p className="subtitle-2 mb--40">Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero, varius congue magna tempus vitae. Donec a justo nec elit sagittis sagittis eu a ante. Vivamus rutrum elit odio. Donec gravida id ligula ut faucibus. Aenean convallis ligula orci, ut congue nunc sodales ut. In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.
                    </p>
                    <h3>About Blogar</h3>
                    <p className="subtitle-2 mb--40">In dapibus, nibh sit amet pulvinar convallis, massa nunc tincidunt nunc, a pretium risus nulla ut dui. Ut ut condimentum tellus, dapibus volutpat est. Integer ullamcorper iaculis blandit. Pellentesque id tempus urna. Quisque luctus cursus imperdiet. <a href="#">hello@Blogar.com</a></p>
                    <h3>When we collect personal data about you</h3>
                    <ul className="mb--40">
                      <li>Email is a crucial channel in any marketing.</li>
                      <li>Curious what to say? How to say it?</li>
                      <li>Whether you’re kicking off a new campaign.</li>
                      <li>Habitasse per feugiat aliquam luctus accumsan curae</li>
                    </ul>
                    <h3>Why we collect and use personal data</h3>
                    <p className="subtitle-2">Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero, varius congue magna tempus vitae. Donec a justo nec elit sagittis sagittis eu a ante. Vivamus rutrum elit odio. Donec gravida id ligula ut faucibus. Aenean convallis ligula orci, ut congue nunc sodales ut. In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>
                    <ul className="mb--40">
                      <li>Nulla facilisi. Sed pulvinar nec purus eu sollicitudin. Quisque ut tempus quam, in cursus eros.</li>
                      <li>Fusce malesuada luctus velit eu tempor. Pellentesque habitant morbi tristique senectus et netus et.</li>
                      <li>Pellentesque ornare nulla est, non blandit sapien lacinia nec. Nulla ac velit id est mattis faucibus.</li>
                      <li>Aliquam lacus nisi, lobortis non diam eget, malesuada bibendum justo. Praesent fringilla sagittis ex, ac molestie ipsum ullamcorper a.</li>
                      <li> Vestibulum nulla tortor, aliquam at porta in, hendrerit sed nibh.</li>
                    </ul>
                    <h3>Type of personal data collected</h3>
                    <p className="subtitle-2 mb--40">In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem. </p>
                    <h3>Information we collect automatically</h3>
                    <p className="subtitle-2 mb--40">Etiam vel mi vel neque mattis iaculis. Proin vitae consequat augue, vel porta tellus. Nullam tincidunt ac lorem eu lacinia. Praesent ac diam id odio elementum efficitur. Suspendisse sit amet urna vitae neque tempor pellentesque. Aenean ut dapibus urna. Pellentesque neque nulla, interdum vitae rhoncus at, pretium id arcu. Etiam sodales lectus at convallis vestibulum. Quisque non neque augue. Nullam condimentum nulla felis, nec suscipit augue congue ac.</p>
                    <h3>The use of cookies and web beacons</h3>
                    <p className="subtitle-2">We may log information using "cookies." Cookies are small data files stored on your hard drive by a website. Cookies help us make our Site and your visit better.</p>
                    <p className="subtitle-2">We may log information using digital images called web beacons on our Site or in our emails.</p>
                    <p className="subtitle-2 mb--40">This information is used to make our Site work more efficiently, as well as to provide business and marketing information to the owners of the Site, and to gather such personal data as browser type and operating system, referring page, path through site, domain of ISP, etc. for the purposes of understanding how visitors use our Site. Cookies and similar technologies help us tailor our Site to your personal needs, as well as to detect and prevent security threats and abuse. If used alone, cookies and web beacons do not personally identify you.</p>
                    <h3>How long we keep your data</h3>
                    <p className="subtitle-2">We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.</p>
                    <p className="subtitle-2 mb--40">We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.</p>
                    <h3>Your rights to your personal data</h3>
                    <p className="subtitle-2 mb--40">We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.</p>
                    <h3>Hotjar’s privacy policy</h3>
                    <p className="subtitle-2 mb--40">Pellentesque vestibulum venenatis iaculis. Aliquam viverra sodales ultrices. Quisque sed purus id massa consequat consectetur eu vel lorem. Maecenas lectus velit, cursus quis orci non, laoreet hendrerit mi. Nulla vitae ipsum fringilla, placerat metus eu, malesuada velit. Quisque viverra risus ex. Aenean commodo vestibulum efficitur. Nullam ligula orci, aliquet sed luctus vel, luctus vel dui. Sed pulvinar, ipsum at mattis imperdiet, diam augue tempor diam, sed porttitor odio elit ut ante. In posuere mi at mi pellentesque ornare sit amet gravida nisi. Praesent ac blandit odio. Curabitur iaculis ante elit, et imperdiet leo mollis at.</p>
                    <h3>Changes to this Privacy Policy</h3>
                    <p className="subtitle-2">Integer eu ornare lectus, ornare ullamcorper tellus. Morbi in urna a justo dignissim luctus. Nam sagittis ante ut lorem feugiat, sed consectetur ligula lacinia. Vestibulum quis mauris sed lectus pretium dictum sed vitae orci. Vestibulum facilisis facilisis mauris non maximus. Nam tristique ipsum egestas, suscipit orci sit amet, rutrum ante. Proin in felis pellentesque, ullamcorper enim vel, molestie ipsum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Post Single Wrapper  */}
        {/* Start Footer Area  */}
        <div className={"axil-footer-area axil-footer-style-1 bg-color-black" + themeColor}>
          {/* Start Footer Top Area  */}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* Start Post List  */}
                  <div className="inner d-flex align-items-center flex-wrap">
                    <h5 className="follow-title mb--0 mr--20">Follow Us</h5>
                    <ul className="social-icon color-tertiary md-size justify-content-start">
                      <li><a href="#" className='icons'><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#" className='icons'><i className="fab fa-instagram" /></a></li>
                      <li><a href="#" className='icons'><i className="fab fa-twitter" /></a></li>
                      <li><a href="#" className='icons'><i className="fab fa-linkedin-in" /></a></li>
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
