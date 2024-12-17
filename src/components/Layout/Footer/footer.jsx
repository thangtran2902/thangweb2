import './footer.scss';
function Footer() {
    return (
        <div className="container">
            <div className="footer_bar">
                <div className="row">
                    <div className="col-lg-3">
                        <h2 className="footer__title">Về chúng tôi</h2>
                        <p className="footer__desc">
                            Website chính thức và duy nhất của PhimChill. Hiện tại chúng mình chỉ có duy nhất một
                            website chứ không có website nào khác nhé!
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <h2 className="footer__title">Phim Mới</h2>
                        <ul className="footer__list-menu">
                            <li className="menu__list">
                                <a className="menu__link" href="/tv/phim-le">
                                    Phim lẻ
                                </a>
                            </li>
                            <li className="menu__list">
                                <a className="menu__link" href="/tv/hoat-hinh">
                                    Phim hoạt hình
                                </a>
                            </li>
                            <li className="menu__list">
                                <a className="menu__link" href="/movie/phim-bo">
                                    Phim bộ
                                </a>
                            </li>
                            <li className="menu__list">
                                <a className="menu__link" href="#!">
                                    Phim khoa học
                                </a>
                            </li>
                            <li className="menu__list">
                                <a className="menu__link" href="#!">
                                    Phim hành động
                                </a>
                            </li>
                            <li className="menu__list">
                                <a className="menu__link" href="#!">
                                    Phim hài hước
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h2 className="footer__title">Thông tin</h2>
                        <ul className="footer__list-menu">
                            <li className="menu__list">
                                <a className="menu__link" href="#!">
                                    Giới thiệu
                                </a>
                            </li>
                            <li className="menu__list">
                                <a className="menu__link" href="#!">
                                    Chính sách bảo mật
                                </a>
                            </li>
                            <li className="menu__list">
                                <a className="menu__link" href="#!">
                                    Điều khoản{' '}
                                </a>
                            </li>
                            <li className="menu__list">
                                <a className="menu__link" href="#!">
                                    Sitemap
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h2 className="footer__title">Hỗ trợ</h2>
                        <div className="flex flex-row">
                            <p className="support menu__list">
                                Mọi thắc mắc và góp ý cần hỗ trợ xin vui lòng liên hệ Fanpage và Instagram
                            </p>
                            <div className="menu__list link__profile">
                                <img src="/facebook.svg" className=""></img>
                                <a href="https://www.facebook.com/thang.nobi.986/?locale=vi_VN" className="menu__link">
                                    Facebook
                                </a>
                            </div>
                            <div className="menu__list link__profile">
                                <img src="/instagram.svg" className=""></img>
                                <a href="https://www.instagram.com/_thangtran29/" className="menu__link">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__line"></div>
                <div className="footer__dmca">
                    <h2 className="copyright">
                        Copyright 2024 ©<span>Linux Nhóm 10</span>
                    </h2>

                    <img
                        src="https://images.dmca.com/Badges/dmca_protected_4_120.png?ID=6b2ba16f-50e0-4ca6-84e7-96c103bcddf7"
                        alt="dmca"
                        className="dmca__img"
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;
