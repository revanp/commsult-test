

function Header()
{
    return (
        <header id="header" className="static-sticky">
            <div className="header-wrap">
                <div className="header-top overflow-hidden">
                    <div className="container clearfix expanded-side-clear">
                        <div className="row">
                            <div className="cs-logo col-lg-2 col-sm-6">
                                <a href="#">
                                    <img src="./Ontego_Business_Mobi.svg" alt="logo"  />
                                </a>
                            </div>
                            <nav className="cs-primary-menu col-lg-8">
                                <ul>
                                    <li className="cs-active-nav">
                                        <a href="#">
                                            <div>Product</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div>Why Ontego?</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div>Events</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div>Resources</div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="cs-demo-button col-lg-2">
                                <button className="btn btn-request-demo">Request a demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container clearfix">
                        <div className="row cs-scroll-start">
                            <div className="cs-dropdown-logo col-lg-2">
                                <a href="#" id="sap">
                                    <img src="./Ontego_subline.svg" alt="Ontego SAP Mobility" />
                                </a>
                            </div>
                            <div className="cs-dropdown-submenu-wrapper col-lg-10">
                                <div className="cs-tabs clearfix" style={{ marginLeft: "50px" }}>
                                    <ul className="tab-nav clearfix">
                                        <li>
                                            <a href="#" id="sapFunktionen">
                                                <div className="cs-dropdown-submenu-title" style={{fontSize: "20px", fontFamily: "Crimson Text" }}>
                                                    <span>Features</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" id="sapFunktionen">
                                                <div className="cs-dropdown-submenu-title" style={{fontSize: "20px", fontFamily: "Crimson Text" }}>
                                                    <span>Features</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" id="sapFunktionen">
                                                <div className="cs-dropdown-submenu-title" style={{fontSize: "20px", fontFamily: "Crimson Text" }}>
                                                    <span>Features</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;