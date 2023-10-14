function LeftMobileMenu() {
    return (
        <aside className="left-menu">
            <div class="menu-wrapper">
                <input type="checkbox" name="toggle" id="toggle"/>
                <div className="menu-icon-bar-1"></div>
                <div className="menu-icon-bar-2"></div>
                <div className="menu-icon-bar-3"></div>
                <ul className="mobile-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            {/* <i class="fa-solid fa-arrow-right"></i> */}
        </aside>
    );
}

export default LeftMobileMenu;