
function Header() {
    return (
        <div className="padT4 padB4">
            <div className="container mobile-container">
                <div className="d-flex justify-content-between">
                    <div>
                        <img alt="Lunar Expansion Foundation" src="/images/lunarexpansionfoundation.png" width="300px" />
                    </div>
                    <div className="light">
                        <h6 className="header-title">Lunar Expansion Conference Speakers</h6>
                    </div>
                    <div className="text-dark">
                        Hello Explorer &nbsp;&nbsp;
                        <span>
                            <a href="#">Sign-Out</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;