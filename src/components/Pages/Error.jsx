import React from 'react'
import logoBlack from "../../images/logo/logo-black.png";
import logoWhite from "../../images/logo/logo-white.png";
import logoWhite2 from "../../images/logo/logo-white2.png";
import add from "../../images/others/add-01.png";
import banner from "../../images/add-banner/banner-01.png";
import banner1 from "../../images/add-banner/banner-03.png";
import author from "../../images/others/author.png";
import lifestylePost from "../../images/post-images/lifestyle-post-01.jpg";
import lifestylePost06 from "../../images/post-images/lifestyle-post-06.jpg";
import megaPost01 from "../../images/others/mega-post-01.jpg";
import postTect1 from "../../images/post-images/post-tect-01.jpg";
import postTect2 from "../../images/post-images/post-tect-02.jpg";
import postSm01 from "../../images/post-images/post-sm-01.jpg";
import postTech09 from "../../images/post-images/post-tech-09.jpg";
import postDark01 from "../../images/post-images/post-dark-01.jpg";
import postDark04 from "../../images/post-images/post-dark-04.jpg";
import postTech06 from "../../images/post-images/post-tech-06.jpg";
import postTestTech from "../../images/post-images/post-test-tech-01.jpg";
import categoryImage01 from "../../images/post-images/category-image-01.jpg";
import blogSm01 from "../../images/small-images/blog-sm-01.jpg";
import instagram01 from "../../images/small-images/instagram-01.jpg";
import instagram from "../../images/small-images/instagram-md-06.jpg";
import featuredPost01 from "../../images/post-single/featured-post-01.jpg";
import postMd01 from "../../images/post-single/post-md-01.jpg";
import postSeoList from "../../images/small-images/post-seo-list-02.jpg";
import liststyleSm01 from "../../images/small-images/liststyle-sm-01.jpg";
import lifestyleGrid01 from "../../images/post-images/lifestyle-grid-01.jpg";
import authorImage3 from "../../images/post-images/author/author-image-3.png";
import postList04 from "../../images/post-images/post-list-04.jpg";
import postList05 from "../../images/post-images/post-list-05.jpg";
import postList02 from "../../images/post-images/post-list-02.jpg";
import postList01 from "../../images/post-images/post-list-01.jpg";
import authorImage2 from "../../images/post-images/author/author-image-2.png";
import authorImage1 from "../../images/post-images/author/author-image-1.png";
import postSingle01 from "../../images/post-single/post-single-01.jpg";
import authorB1 from "../../images/post-images/author/author-b1.png";
import ads01 from "../../images/post-single/ads-01.jpg";
import banner02 from "../../images/add-banner/banner-02.png";
import stories01 from "../../images/post-single/stories-01.jpg";
import error from '../../images/others/404.png';
import { useSelector } from "react-redux";
import { selectThemeColor } from "../../store/theme";
function change(num, from, to, target) {
  for (let i = 0; i < document.getElementsByClassName(target).length; i++) {
    document.getElementsByClassName(target)[i].classList.remove(to)
    document.getElementsByClassName(target)[num].classList.add(to)
  }
  
}

export default function Error() {
  const themeColor = useSelector(selectThemeColor);
  return (
    <>
    <div className="main-wrapper">
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
                                <li className="vertical-nav-item active" onMouseEnter={()=>change(0, "", "active", "vertical-nav-item")}>
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
                    <div className="hamburger-inner">
                      <div className="icon"><i className="fal fa-bars" /></div>
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
                  <img className="dark-logo" src={logoBlack} alt="Logo Images" />
                  <img className="light-logo" src={logoWhite2} alt="Logo Images" />
                </a>
              </div>
              <div className="mobile-close">
                <div className="icon">
                  <i className="fal fa-times" />
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
        {/* Start Banner Area */}
        {/* Start Error Area  */}
        <div className={"error-area bg_image--4 bg-color-grey" + themeColor}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <img src={error} alt="Error Images" />
                  <h1 className="title">Page not found!</h1>
                  <p>Sorry, but the page you were looking for could not be found.</p>
                  <div className="back-totop-button cerchio d-inline-block">
                    <a className="axil-button button-rounded hover-flip-item-wrapper" href="index.html">
                      <span className="hover-flip-item">
                        <span data-text="Back to Homepage">Back to Homepage</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Error Area  */}
        {/* Start Footer Area  */}
        <div className={"axil-footer-area axil-footer-style-1 footer-variation-2" + themeColor}>
          <div className="footer-mainmenu">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h2 className="title">World</h2>
                    <div className="inner">
                      <ul className="ft-menu-list">
                        <li><a href="#">U.N.</a></li>
                        <li><a href="#">Conflicts</a></li>
                        <li><a href="#">Terrorism</a></li>
                        <li><a href="#">Disasters</a></li>
                        <li><a href="#">Global Economy</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Religion</a></li>
                        <li><a href="#">Scandals</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h2 className="title">Politics</h2>
                    <div className="inner">
                      <ul className="ft-menu-list">
                        <li><a href="#">Executive</a></li>
                        <li><a href="#">Senate</a></li>
                        <li><a href="#">House</a></li>
                        <li><a href="#">Judiciary</a></li>
                        <li><a href="#">Global Economy</a></li>
                        <li><a href="#">Foreign policy</a></li>
                        <li><a href="#">Polls</a></li>
                        <li><a href="#">Elections</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h2 className="title">Entertainment</h2>
                    <div className="inner">
                      <ul className="ft-menu-list">
                        <li><a href="#">Celebrity News</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV News</a></li>
                        <li><a href="#">Disasters</a></li>
                        <li><a href="#">Music News</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Style News</a></li>
                        <li><a href="#">Entertainment Video</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h2 className="title">Business</h2>
                    <div className="inner">
                      <ul className="ft-menu-list">
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Conflicts</a></li>
                        <li><a href="#">Terrorism</a></li>
                        <li><a href="#">Disasters</a></li>
                        <li><a href="#">Global Economy</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Religion</a></li>
                        <li><a href="#">Scandals</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h2 className="title">Health</h2>
                    <div className="inner">
                      <ul className="ft-menu-list">
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Conflicts</a></li>
                        <li><a href="#">Terrorism</a></li>
                        <li><a href="#">Disasters</a></li>
                        <li><a href="#">Global Economy</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Religion</a></li>
                        <li><a href="#">Scandals</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h2 className="title">About</h2>
                    <div className="inner">
                      <ul className="ft-menu-list">
                        <li><a href="#">U.N.</a></li>
                        <li><a href="#">Conflicts</a></li>
                        <li><a href="#">Terrorism</a></li>
                        <li><a href="#">Disasters</a></li>
                        <li><a href="#">Global Economy</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Religion</a></li>
                        <li><a href="#">Scandals</a></li>
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
                      <img className="dark-logo" src={logoBlack} alt="Logo Images" />
                      <img className="white-logo" src={logoWhite2} alt="Logo Images" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8">
                  {/* Start Post List  */}
                  <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
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
  )
}
