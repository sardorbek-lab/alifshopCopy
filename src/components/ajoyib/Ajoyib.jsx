import './Ajoyib.css'

const Ajoyib = () => {
    return (

        <div className="info-section">
            <div className="top-content">
                <div className="phone-image">
                    <img src="https://alifshop.uz/_ipx/f_webp,s_328x344/images/illustrations/alifshop-app-uz.png" alt="Phone" />
                </div>
                <div className="promo-content">
                    <h2 style={{ fontWeight: "620" }}>Ajoyib takliflar har doim <br /> yoningizda</h2>
                    <p>alif shop ilovasi orqali buyurtma qiling, va qulay takliflar haqida <br />hammadan  tez biling</p>
                    <div className="store-buttons">
                        <img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/play-market-icon.svg" alt="Google Play" />
                        <img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/app-store-icon.svg" alt="App Store" />
                        <img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/app-gallery-icon.svg" alt="App Gallery" />
                    </div>
                </div>
                <div className="qr-code">
                    <img src="https://i.imgur.com/S3UWAxf.jpeg" alt="QR code" />
                    <p>Yuklab olish uchun <br /> kamerangizni QR kodga <br /> qarating</p>
                </div>
            </div>

            <div className="bottom-content">
                <div className="info-box">
                    <h3>alif shop</h3>
                    <p>alifshop.uz - xaridorlarga tez va qulay tarzda turli xil tovarlarni sotib olish imkoniyatini beradigan marketpleys.</p>
                    <a href="">Barchasini ko'rsatish</a>
                </div>
                <div className="info-box">
                    <h3>Smartfonlar muddatli to'lov asosida</h3>
                    <p>Bugungi kunda yuqori texnologiyalar davrida smartfon kundalik hayotimizning ajralmas qismiga aylangan.</p>
                    <a href="">Barchasini ko'rsatish</a>
                </div>
                <div className="info-box">
                    <h3>Noutbuklar muddatli to'lov asosida</h3>
                    <p>Shaxsiy kompyuterlar bizga o'z ishimizni yuqori sifatli bajarish va bo'sh vaqtimizni unumli o'tkazish imkonini beradi.</p>
                    <a href="">Barchasini ko'rsatish</a>
                </div>
                <div className="info-box">
                    <h3>Jiholar muddatli to'lov asosida</h3>
                    <p>Bizning online do'konda elektronika va turli xil maishiy texnika mavjud: televizorlar, muzlatgichlar va boshqalar.</p>
                    <a href="">Barchasini ko'rsatish</a>
                </div>
            </div>
        </div>
    )
}

export default Ajoyib
