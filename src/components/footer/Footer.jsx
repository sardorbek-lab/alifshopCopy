import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Hujjatlar</h3>
                    <ul>
                        <li>Sotish uchun umumiy shartlar</li>
                        <li>Nizom</li>
                        <li>Guvohnoma</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Servis</h3>
                    <ul>
                        <li>Namoz vaqti</li>
                        <li>Muddatli to'lov islomda</li>
                        <li>alif shopda soting!</li>
                        <li>Qaytarish</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Tovarlar katalogi</h3>
                    <ul>
                        <li>Smartfonlar va telefonlar</li>
                        <li>Gadjetlar</li>
                        <li>Smartfonlar uchun aksessuarlar</li>
                        <li>Soat va aksessuarlar</li>
                        <li>Tegishli tovarlar</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Biz ijtimoiy axborot vositalarida</h3>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/direct/t/17844667929281050/?hl=ru">
                        <img src="https://alifshop.uz/_ipx/s_40x40/images/media/instagram.webp" alt="Instagram" />
                        </a>
                        <img src="https://alifshop.uz/_ipx/s_40x40/images/media/facebook.svg" alt="Facebook" />
                        <img src="https://alifshop.uz/_ipx/s_40x40/images/media/telegram.svg" alt="Telegram" />
                        <img src="https://alifshop.uz/_ipx/s_40x40/images/media/ok.svg" alt="Odnoklassniki" />
                        <img src="https://alifshop.uz/_ipx/s_40x40/images/media/tiktok.svg" alt="TikTok" />
                    </div>
                    <h3 style={{marginTop:"40px"}}>Axborot xizmati</h3>
                    <div className="contact-info">
                        <p><strong>@alifshop_uz</strong></p>
                        <p>+998 555 12 12 12</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>2025 © alifshop.uz</p>
            </div>
        </footer>
    )
}

export default Footer
