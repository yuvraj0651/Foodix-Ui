    import HeaderLogoLight from "../../../assets/header/logo-white.png";
    import HeaderLogoDark from "../../../assets/header/logo-main.png";
    import { FaBagShopping } from "react-icons/fa6";
    import { HiMiniBars3CenterLeft } from "react-icons/hi2";
    import { IoClose } from "react-icons/io5";
    import { useEffect, useState } from "react";
    import { Link, useLocation } from "react-router-dom";

    const Header = () => {

        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
        const [scrolled, setScrolled] = useState(false);

        const location = useLocation();
        const isHomePage = location.pathname === "/";

        useEffect(() => {
            const handleScroll = () => setScrolled(window.scrollY > 50);
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        useEffect(() => {
            if (isSidebarOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }

            return () => {
                document.body.style.overflow = "hidden";
            }
        }, [isSidebarOpen]);

        const toggleSidebar = () => {
            setIsSidebarOpen(!isSidebarOpen);
        }

        return (
            <header>
                <div className={`header-section border-b border-b-slate-500 p-3 shadow-sm shadow-[#ccc] fixed left-0 right-0 w-full z-10 transition-all duration-300 ${isHomePage ? scrolled ? "navbar-scrolled bg-slate-900 animate-slideDown dark:bg-slate-800" : "bg-black border-0 pt-3 lg:pt-[1rem]" : "bg-slate-900 dark:bg-slate-800"}`} >
                    <div className="header-section__inner flex items-center justify-between">
                        <div className="header-section__logo-block w-[7rem]">
                            <img
                                src={HeaderLogoLight}
                                alt="header-logo-light"
                                className="img-fluid"
                            />
                        </div>
                        <nav className={`header-section__navigation-block absolute xxl:static xxl:w-auto xxl:h-auto xxl:shadow-none border border-[#222] top-[3.8rem] left-[-300px] w-[300px] h-screen px-[1rem] py-[1rem] bg-slate-50 shadow-sm shadow-[#000] transition-all duration-500 ${isSidebarOpen ? "opened" : ""} xxl:flex items-center xxl:p-0 xxl:bg-transparent xxl:border-none border-0 xxl:gap-4 dark:bg-slate-800 dark:lg:bg-transparent`}>
                            <div className="header-section__nav-logo flex items-center justify-center pb-3 xxl:hidden">
                                <img src={HeaderLogoDark} alt="header-logo-dark" className="img-fluid w-[8rem] block dark:hidden" />
                                <img src={HeaderLogoLight} alt="header-logo-dark" className="img-fluid w-[8rem] hidden dark:block" />
                            </div>
                            <ul className="navigation-menu pl-0 m-0 pb-12 font-poppins xxl:flex items-center xxl:pb-0 xxl:gap-5">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/menu">Menu</Link>
                                </li>
                                <li>
                                    <a href="/">Shop</a>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/team">Team</Link>
                                </li>
                            </ul>
                            <div className="header-section__book-button border border-[#ccc] text-center py-[0.35rem] shadow-sm shadow-[#ccc] bg-gradient-to-r from-amber-400 to-amber-600 text-slate-50 xxl:hidden">
                                <button type="button" className="capitalize tracking-wide font-[500]">book a table</button>
                            </div>
                            <div className="header-section__close-block absolute top-[1rem] right-[1rem] xxl:hidden" onClick={toggleSidebar}>
                                <IoClose className="close-icon cta-icon text-xl dark:text-[#ccc]" />
                            </div>
                        </nav>
                        <div className="header-section__cta-block flex items-center gap-[0.6rem] xxl:gap-[0.8rem] text-white">
                            <div className="header-section__cart-block">
                                <FaBagShopping className="cart-icon cta-icon" />
                            </div>
                            <div className="header-section__hamburger-block xxl:hidden" onClick={toggleSidebar}>
                                <HiMiniBars3CenterLeft className="hamburger-icon cta-icon text-amber-500 text-xl" />
                            </div>
                            <div className="desktop-header-book-button">
                                <div className="header-section__book-button hidden xxl:block border border-[#ccc] text-center py-[0.3rem] shadow-sm shadow-[#ccc] bg-gradient-to-r from-amber-400 to-amber-600  dark:from-amber-800 dark:to-amber-500 text-slate-50 xxl:px-3 xxl:rounded-md">
                                    <button type="button" className="capitalize tracking-wide font-[500]">book a table</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isSidebarOpen && <div className="sidebar-overlay fixed top-0 left-0 h-screen w-full z-[9]" onClick={toggleSidebar}></div>}
            </header>
        );
    };

    export default Header;
