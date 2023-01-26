import React, {useState} from 'react'
import logoWhite from '../../images/logo/logo-white.png';
import logoWhite2 from '../../images/logo/logo-white2.png';
import logoBlack from '../../images/logo/logo-black.png';
import megaPost01 from '../../images/others/mega-post-01.jpg';
import megaPost02 from '../../images/others/mega-post-02.jpg';
import megaPost03 from '../../images/others/mega-post-03.jpg';
import megaPost04 from '../../images/others/mega-post-04.jpg';
import author from '../../images/others/author.png';
import blogSm01 from '../../images/small-images/blog-sm-01.jpg';
import blogSm02 from '../../images/small-images/blog-sm-02.jpg';
import blogSm03 from '../../images/small-images/blog-sm-03.jpg';
import blogSm04 from '../../images/small-images/blog-sm-04.jpg';
import blogSm05 from '../../images/small-images/blog-sm-05.jpg';
import blogSm06 from '../../images/small-images/blog-sm-06.jpg';
import blogSm07 from '../../images/small-images/blog-sm-07.jpg';
import blogSm08 from '../../images/small-images/blog-sm-08.jpg';
import blogSm09 from '../../images/small-images/blog-sm-09.jpg';
import blogSm10 from '../../images/small-images/blog-sm-10.jpg';
import postHover1 from '../../images/banner/post-hover-image-01.jpg'
import postHover2 from '../../images/banner/post-hover-image-02.jpg'
import postHover3 from '../../images/banner/post-hover-image-03.jpg'
import postColumn01 from '../../images/post-images/post-column-01.jpg'
import postColumn02 from '../../images/post-images/post-column-02.jpg'
import postColumn03 from '../../images/post-images/post-column-03.jpg'
import postColumn04 from '../../images/post-images/post-column-04.jpg'
import postColumn05 from '../../images/post-images/post-column-05.jpg'
import postColumn06 from '../../images/post-images/post-column-06.jpg'
import postColumn07 from '../../images/post-images/post-column-07.jpg'
import postColumn08 from '../../images/post-images/post-column-08.jpg'
import postColumn09 from '../../images/post-images/post-column-09.jpg'
import banner3 from '../../images/add-banner/banner-03.png'
import postGrid02 from '../../images/post-images/post-grid-02.jpg';
import categoryImage from '../../images/post-images/category-image-01.jpg'
import instagram02 from '../../images/small-images/instagram-02.jpg'; 
import instagram from "../../images/small-images/instagram-md-06.jpg";
import Slider from 'react-slick';
import { useSelector } from "react-redux";
import { selectThemeColor } from "../../store/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
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

function change(num, from, to, target) {
  for (let i = 0; i < document.getElementsByClassName(target).length; i++) {
    console.log()
    document.getElementsByClassName(target)[i].classList.remove(to)
    document.getElementsByClassName(target)[num].classList.add(to)
  }
  
}


// document.getElementsByClassName("slick-next")[0].innerHTML = <i class="fa-regular fa-arrow-right"></i>

const HomeCreativeBlog = () => {
  const [showBurger, setShowBurger] = useState(false);
  const burgerFunc = () =>{
    setShowBurger(!showBurger)
  }
  const themeColor = useSelector(selectThemeColor);
  return (
    <>
         <div className={showBurger ? "main-wrapper outline popup-mobile-menu-show" : 'main-wrapper outline'}>
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />
        {/* Start Header */}
        <header className={"header axil-header  header-dark header-sticky " + themeColor}>
          <div className="header-wrap">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
                <div className="logo">
                  <a href="index.html">
                    <img className="dark-logo" src={logoWhite} alt="Blogar logo" />
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
                                            <img className="w-100" src={megaPost02} alt="Post Images" />
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
                                            <img className="w-100" src={megaPost03} alt="Post Images" />
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
                                            <img className="w-100" src={megaPost04} alt="Post Images" />
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
                                            <img className="w-100" src={megaPost04} alt="Post Images" />
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
                                            <img className="w-100" src={megaPost03} alt="Post Images" />
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
                                            <img className="w-100" src={megaPost02} alt="Post Images" />
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
                                            <img className="w-100" src={megaPost04} alt="Post Images" />
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
                                            <img className="w-100" src={megaPost04} alt="Post Images" />
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
                                            <img className="w-100" src={megaPost03} alt="Post Images" />
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
                                            <img className="w-100" src={megaPost02} alt="Post Images" />
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
                                            <img className="w-100" src={megaPost04} alt="Post Images" />
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
                                            <img className="w-100" src={megaPost04} alt="Post Images" />
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
                                            <img className="w-100" src={megaPost03} alt="Post Images" />
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
                                            <img className="w-100" src={megaPost04} alt="Post Images" />
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
                    <li className="icon"><a href="#"><i className="fas fa-bookmark" /></a></li>
                    <li className="icon"><a href="#"><i className="fas fa-bell" /></a></li>
                    <li><a href="#"><img src={author} alt="Author Images" /></a></li>
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
        <div className={"popup-mobilemenu-area"} onClick={burgerFunc}>
          <div className={"inner" + themeColor} onClick={(event)=> event.stopPropagation()}>
            <div className="mobile-menu-top">
              <div className="logo">
                <a href="index.html">
                  <img className="dark-logo" src={logoBlack} alt="Logo Images" />
                  <img className="light-logo" src={logoWhite2} alt="Logo Images" />
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
        <h1 className="d-none">Home Creative Blog</h1>
        <div className={"slider-area creative-slider-area bg-color-grey" + themeColor}>
          <div className="axil-slide slider-style-3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1">
                  <Slider {...{vertical : true, arrows: false, slidesToShow: 4, autoplay: true, pauseOnFocus: false, autoplaySpeed: 4500, speed: 100}} className="slider-inner slick-nav-avtivation-new">
                    {/* Start Single Blog  */}
                    <div className="content-block post-medium post-medium-border">
                      <div className="post-number">
                        <span>01</span>
                      </div>
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={blogSm01} alt="Post Images" />
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a href="#">NIKE WOMEN’S</a>
                          </div>
                        </div>
                        <h4 className="title"><a href="post-details.html">iPadOS 14 introduces
                            new designed specifically for iPad</a></h4>
                        <div className="post-button">
                          <a className="axil-button button-rounded color-secondary-alt" href="post-details.html">Read More</a>
                        </div>
                      </div>
                      <div className="content-block-line"></div>
                    </div>
                    {/* End Single Blog  */}
                    {/* Start Single Blog  */}
                    <div className="content-block post-medium post-medium-border">
                      <div className="post-number">
                        <span>02</span>
                      </div>
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={blogSm02} alt="Post Images" />
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a href="#">APPLE DESIGN</a>
                          </div>
                        </div>
                        <h4 className="title"><a href="post-details.html">Discover the Joy of Water with
                            Nike
                            Victory Swim Collection</a></h4>
                        <div className="post-button">
                          <a className="axil-button button-rounded color-secondary-alt" href="post-details.html">Read More</a>
                        </div>
                      </div>
                      <div className="content-block-line"></div>
                    </div>
                    {/* End Single Blog  */}
                    {/* Start Single Blog  */}
                    <div className="content-block post-medium post-medium-border">
                      <div className="post-number">
                        <span>03</span>
                      </div>
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={blogSm03} alt="Post Images" />
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a href="#">ACCESSIBILITY</a>
                          </div>
                        </div>
                        <h4 className="title"><a href="post-details.html">5 Photography Blogs You Should Be Reading</a></h4>
                        <div className="post-button">
                          <a className="axil-button button-rounded color-secondary-alt" href="post-details.html">Read More</a>
                        </div>
                      </div>
                      <div className="content-block-line"></div>
                    </div>
                    {/* End Single Blog  */}
                    {/* Start Single Blog  */}
                    <div className="content-block post-medium post-medium-border">
                      <div className="post-number">
                        <span>04</span>
                      </div>
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={blogSm04} alt="Post Images" />
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a href="#">GADGETS</a>
                          </div>
                        </div>
                        <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                            and ready to go.</a></h4>
                        <div className="post-button">
                          <a className="axil-button button-rounded color-secondary-alt" href="post-details.html">Read More</a>
                        </div>
                      </div>
                      <div className="content-block-line"></div>
                    </div>
                    {/* End Single Blog  */}
                    {/* Start Single Blog  */}
                    <div className="content-block post-medium post-medium-border">
                      <div className="post-number">
                        <span>05</span>
                      </div>
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={blogSm01} alt="Post Images" />
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a href="#">COLLABORATION</a>
                          </div>
                        </div>
                        <h4 className="title"><a href="post-details.html">The 1 tool that helps remote teams collaborate better</a></h4>
                        <div className="post-button">
                          <a className="axil-button button-rounded color-secondary-alt" href="post-details.html">Read More</a>
                        </div>
                      </div>
                      <div className="content-block-line"></div>
                    </div>
                    {/* End Single Blog  */}
                    {/* Start Single Blog  */}
                    <div className="content-block post-medium post-medium-border">
                      <div className="post-number">
                        <span>06</span>
                      </div>
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src={blogSm04} alt="Post Images" />
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a href="#">PRODUCT UPDATES</a>
                          </div>
                        </div>
                        <h4 className="title"><a href="post-details.html">Discover the Joy of Water with
                            Nike Victory Swim Collection</a></h4>
                        <div className="post-button">
                          <a className="axil-button button-rounded color-secondary-alt" href="post-details.html">Read More</a>
                        </div>
                      </div>
                      <div className="content-block-line"></div>
                    </div>
                    {/* End Single Blog  */}
                  </Slider>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <Slider {...{arrows: false, vertical: true, autoplay: true, autoplaySpeed: 4500, speed: 100, pauseOnFocus: false}} className="thumbnail-wrapper slick-for-avtivation-new">
                    <div className="thumbnail">
                      <a href="#">
                        <img src={postHover1} alt="Thumbnail Images" />
                      </a>
                    </div>
                    <div className="thumbnail">
                      <a href="#">
                        <img src={postHover2} alt="Thumbnail Images" />
                      </a>
                    </div>
                    <div className="thumbnail">
                      <a href="#">
                        <img src={postHover3} alt="Thumbnail Images" />
                      </a>
                    </div>
                    <div className="thumbnail">
                      <a href="#">
                        <img src={postHover1} alt="Thumbnail Images" />
                      </a>
                    </div>
                    <div className="thumbnail">
                      <a href="#">
                        <img src={postHover2} alt="Thumbnail Images" />
                      </a>
                    </div>
                    <div className="thumbnail">
                      <a href="#">
                        <img src={postHover3} alt="Thumbnail Images" />
                      </a>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Banner Area */}
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
                  <a className="axil-link-button" href="#">See All Topics</a>
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
                          <img src={blogSm10} alt="post categories images" />
                        </div>
                        <div className="content">
                          <h5 className="title">Sports &amp; Fitness </h5>
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
                          <img src={blogSm05} alt="post categories images" />
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
                          <img src={blogSm09} alt="post categories images" />
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
                          <img src={blogSm08} alt="post categories images" />
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
                          <img src={blogSm07} alt="post categories images" />
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
                          <img src={blogSm06} alt="post categories images" />
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
        {/* Start Tab Area  */}
        <div className={"axil-tab-area axil-section-gap bg-color-white" + themeColor}>
          <div className="container">
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
                <ul className="axil-tab-button nav nav-tabs mt--20" id="axilTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tab-one" data-bs-toggle="tab" href="#tabone" role="tab" aria-controls="tab-one" aria-selected="true">Accessibility</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tab-two" data-bs-toggle="tab" href="#tabtwo" role="tab" aria-controls="tab-two" aria-selected="false">Android Dev </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tab-three" data-bs-toggle="tab" href="#tabthree" role="tab" aria-controls="tab-three" aria-selected="false">Blockchain</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tab-four" data-bs-toggle="tab" href="#tabfour" role="tab" aria-controls="tab-four" aria-selected="false">Gadgets</a>
                  </li>
                </ul>
                {/* End Tab Button  */}
                {/* Start Tab Content Wrapper  */}
                <div className="tab-content" id="axilTabContent">
                  <div className="single-tab-content tab-pane fade show active" id="tabone" role="tabpanel" aria-labelledby="tab-one">
                    <Slider {...settings} className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side">
                      {/* Start Single Post  */}
                      <div className="slick-single-layout">
                        <div className="content-block modern-post-style text-center content-block-column darks">
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="ACCESSIBILITY">ACCESSIBILITY</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="title"><a href="post-details.html">Lightweight,
                                grippable,
                                and ready to go.</a></h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn01} alt="Post Images" />
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
                                    <span data-text="APPLE DESIGN">APPLE DESIGN</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="title"><a href="post-details.html">Bold new
                                experience. Same
                                Mac magic.</a></h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn04} alt="Post Images" />
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
                            <h4 className="title"><a href="post-details.html">Creative Game With
                                The New
                                DJI Mavic Air 2</a></h4>
                          </div>
                          <div className="post-thumbnail  url">
                            <a href="post-details.html">
                              <img src={postColumn05} alt="Post Images" />
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
                                    <span data-text="ACCESSIBILITY">ACCESSIBILITY</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="title"><a href="post-details.html">Lightweight,
                                grippable,
                                and ready to go.</a></h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn06} alt="Post Images" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End Single Post  */}
                    </Slider>
                  </div>
                  <div className="single-tab-content tab-pane fade" id="tabtwo" role="tabpanel" aria-labelledby="tab-two">
                    <Slider {...settings} className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side">
                      {/* Start Single Post  */}
                      <div className="slick-single-layout">
                        <div className="content-block modern-post-style text-center content-block-column darks">
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
                            <h4 className="title"><a href="post-details.html">Bold new experience. Same
                                Mac magic.</a></h4>
                          </div>
                          <div className="post-thumbnail  url">
                            <a href="post-details.html">
                              <img src={postColumn04} alt="Post Images" />
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
                                    <span data-text="CASE STUDY">CASE STUDY</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                and ready to go.</a></h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn07} alt="Post Images" />
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
                                    <span data-text="ACCESSIBILITY">ACCESSIBILITY</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                and ready to go.</a></h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn08} alt="Post Images" />
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
                                    <span data-text="ACCESSIBILITY">ACCESSIBILITY</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                and ready to go.</a></h4>
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
                  <div className="single-tab-content tab-pane fade" id="tabthree" role="tabpanel" aria-labelledby="tab-three">
                    <Slider {...settings} className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side">
                      {/* Start Single Post  */}
                      <div className="slick-single-layout">
                        <div className="content-block modern-post-style text-center content-block-column darks">
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="ACCESSIBILITY">ACCESSIBILITY</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                and ready to go.</a></h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn01} alt="Post Images" />
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
                            <h4 className="title"><a href="post-details.html">Bold new experience.
                                Same Mac magic.</a></h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn02} alt="Post Images" />
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
                            <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                and ready to go.</a></h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn03} alt="Post Images" />
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
                            <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                and ready to go.</a></h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn04} alt="Post Images" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End Single Post  */}
                    </Slider>
                  </div>
                  <div className="single-tab-content tab-pane fade" id="tabfour" role="tabpanel" aria-labelledby="tab-four">
                    <Slider {...settings} className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side">
                      {/* Start Single Post  */}
                      <div className="slick-single-layout">
                        <div className="content-block modern-post-style text-center content-block-column darks">
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
                            <h4 className="title"><a href="post-details.html">Bold new experience.
                                Same Mac magic.</a></h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn04} alt="Post Images" />
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
                            <h4 className="title"><a href="post-details.html">Creative Game With The New
                                DJI Mavic Air 2</a></h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn02} alt="Post Images" />
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
                            <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                and ready to go.</a></h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn01} alt="Post Images" />
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
                            <h4 className="title"><a href="post-details.html">Lightweight, grippable,
                                and ready to go.</a></h4>
                          </div>
                          <div className="post-thumbnail url">
                            <a href="post-details.html">
                              <img src={postColumn04} alt="Post Images" />
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
                <div className="axil-banner mb--30">
                  <div className="thumbnail">
                    <a href="#">
                      <img className="w-100" src={banner3} alt="Banner Images" />
                    </a>
                  </div>
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
                {/* Start Single Tab Content  */}
                <div className="single-post-grid">
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                      {/* Start Post Grid  */}
                      <div className="content-block post-default image-rounded mt--30">
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <img src={postGrid02} alt="Post Images" />
                          </a>
                        </div>
                        <div className="post-grid-content">
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
                            <h3 className="title"><a href="post-details.html">Security isn’t just a
                                technology problem it’s about design, too</a></h3>
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
                                    <li>Nov 23, 2018</li>
                                    <li>300k Views</li>
                                  </ul>
                                </div>
                              </div>
                              <ul className="social-share-transparent justify-content-end">
                                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                <li><a href="#"><i className="fas fa-link" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Start Post Grid  */}
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 mt_lg--40 mt_md--40 mt_sm--40">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                          {/* Start Post Grid  */}
                          <div className="content-block post-default image-rounded mt--30">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src={postGrid02} alt="Post Images" />
                              </a>
                            </div>
                            <div className="post-grid-content">
                              <div className="post-content">
                                <div className="post-cat">
                                  <div className="post-cat-list">
                                    <a className="hover-flip-item-wrapper" href="#">
                                      <span className="hover-flip-item">
                                        <span data-text="LIFESTYLE">LIFESTYLE</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <h5 className="title"><a href="post-details.html">The 1 tool that
                                    helps remote teams collaborate better</a></h5>
                              </div>
                            </div>
                          </div>
                          {/* Start Post Grid  */}
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                          {/* Start Post Grid  */}
                          <div className="content-block post-default image-rounded mt--30">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src={postGrid02} alt="Post Images" />
                              </a>
                            </div>
                            <div className="post-grid-content">
                              <div className="post-content">
                                <div className="post-cat">
                                  <div className="post-cat-list">
                                    <a className="hover-flip-item-wrapper" href="#">
                                      <span className="hover-flip-item">
                                        <span data-text="COLLABORATION">COLLABORATION</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <h5 className="title"><a href="post-details.html">Get Ready To Up
                                    Your Creative Game With The </a></h5>
                              </div>
                            </div>
                          </div>
                          {/* Start Post Grid  */}
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                          {/* Start Post Grid  */}
                          <div className="content-block post-default image-rounded mt--30">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src={postGrid02} alt="Post Images" />
                              </a>
                            </div>
                            <div className="post-grid-content">
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
                                <h5 className="title"><a href="post-details.html">Traditional design
                                    won’t save us in the COVID-19 era</a></h5>
                              </div>
                            </div>
                          </div>
                          {/* Start Post Grid  */}
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                          {/* Start Post Grid  */}
                          <div className="content-block post-default image-rounded mt--30">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src={postGrid02} alt="Post Images" />
                              </a>
                            </div>
                            <div className="post-grid-content">
                              <div className="post-content">
                                <div className="post-cat">
                                  <div className="post-cat-list">
                                    <a className="hover-flip-item-wrapper" href="#">
                                      <span className="hover-flip-item">
                                        <span data-text="PRODUCT UPDATES">PRODUCT UPDATES</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <h5 className="title"><a href="post-details.html">New: Freehand
                                    Templates, built for the whole team</a></h5>
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
            </div>
          </div>
        </div>
        {/* End Post Grid Area  */}
        {/* Start Post List Wrapper  */}
        <div className={"axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white" + themeColor}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-8">
                {/* Start Post List  */}
                <div className="content-block post-list-view is-active mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postGrid02} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="FOOD">FOOD</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title"><a href="post-details.html">Security isn’t just a technology problem
                        it’s about design, too </a></h4>
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
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fas fa-link" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Post List  */}
                {/* Start Post List  */}
                <div className="content-block post-list-view axil-control mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postGrid02} alt="Post Images" />
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
                    <h4 className="title"><a href="post-details.html">The 1 tool that helps remote teams collaborate better</a></h4>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a className="hover-flip-item-wrapper" href="author.html">
                              <span className="hover-flip-item">
                                <span data-text="Fatima Asrafy">Fatima Asrafy</span>
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
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fas fa-link" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Post List  */}
                {/* Start Post List  */}
                <div className="content-block post-list-view axil-control mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postGrid02} alt="Post Images" />
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
                    <h4 className="title"><a href="post-details.html">Traditional design won’t save us in the COVID-19 era</a></h4>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a className="hover-flip-item-wrapper" href="author.html">
                              <span className="hover-flip-item">
                                <span data-text="Rafayel">Rafayel</span>
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
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fas fa-link" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Post List  */}
                {/* Start Post List  */}
                <div className="content-block post-list-view axil-control mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postGrid02} alt="Post Images" />
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
                    <h4 className="title"><a href="post-details.html">New: Freehand Templates, built for the whole team</a></h4>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a className="hover-flip-item-wrapper" href="author.html">
                              <span className="hover-flip-item">
                                <span data-text="John Dou">John Dou</span>
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
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fas fa-link" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Post List  */}
                {/* Start Post List  */}
                <div className="content-block post-list-view axil-control mt--30">
                  <div className="post-thumbnail">
                    <a href="post-details.html">
                      <img src={postGrid02} alt="Post Images" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="LIFESTYLE">LIFESTYLE</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="title"><a href="post-details.html">Get Ready To Up Your Creative Game With The New DJI Mavic Air 2</a></h4>
                    <div className="post-meta-wrapper">
                      <div className="post-meta">
                        <div className="content">
                          <h6 className="post-author-name">
                            <a className="hover-flip-item-wrapper" href="author.html">
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
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fas fa-link" /></a></li>
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
                            
                            <img src={categoryImage} alt="" />
                          </div>
                          <div className="content">
                            <h5 className="title">Tech</h5>
                          </div>
                        </a>
                      </li>
                      <li className="cat-item">
                        <a href="#" className="inner">
                          <div className="thumbnail">
                            <img src={categoryImage} alt="" />
                          </div>
                          <div className="content">
                            <h5 className="title">Style</h5>
                          </div>
                        </a>
                      </li>
                      <li className="cat-item">
                        <a href="#" className="inner">
                          <div className="thumbnail">
                            <img src={categoryImage} alt="" />
                          </div>
                          <div className="content">
                            <h5 className="title">Travel</h5>
                          </div>
                        </a>
                      </li>
                      <li className="cat-item">
                        <a href="#" className="inner">
                          <div className="thumbnail">
                            <img src={categoryImage} alt="" />
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
                        <button type="submit" className="search-button"><i className="fal fa-search" /></button>
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
                          <h6 className="title"><a href="post-details.html">The underrated design book that transformed the way I
                              work </a></h6>
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
                          <h6 className="title"><a href="post-details.html">Here’s what you should (and shouldn’t) do when</a>
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
                          <h6 className="title"><a href="post-details.html">How a developer and designer duo at Deutsche Bank keep
                              remote</a></h6>
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
                      <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-instagram" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-slack" /></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
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
                          
                          <img src={instagram02} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram02} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram02} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram02} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram02} alt="Instagram Images" />
                        </a>
                      </li>
                      <li className="instagram-post-list">
                        <a href="#">
                          <img src={instagram02} alt="Instagram Images" />
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
                      <span className="instagram-button"><i className="fab fa-instagram" /></span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button"><i className="fab fa-instagram" /></span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button"><i className="fab fa-instagram" /></span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button"><i className="fab fa-instagram" /></span>
                    </a>
                  </li>
                  <li className="single-post">
                    <a href="#">
                      <img src={instagram} alt="Instagram Images" />
                      <span className="instagram-button"><i className="fab fa-instagram" /></span>
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
        <div className={"axil-footer-area axil-footer-style-1 footer-variation-three bg-color-black" + themeColor}>
          {/* Start Footer Top Area  */}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="logo">
                    <a href="index.html">
                      <img className="light-logo" src={logoWhite2} alt="Logo Images" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8">
                  {/* Start Post List  */}
                  <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
                    <h5 className="follow-title mb--0 mr--20">Follow Us</h5>
                    <ul className="social-icon color-tertiary md-size justify-content-start">
                      <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-instagram" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
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

export default HomeCreativeBlog
