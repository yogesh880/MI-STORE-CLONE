import React from 'react'
import "../styles/PreNavbar.css"

const carticon = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 482-42-42 74-74H330v-60h182l-74-74 42-42 146 146-146 146ZM289.788 976Q260 976 239 954.788q-21-21.213-21-51Q218 874 239.212 853q21.213-21 51-21Q320 832 341 853.212q21 21.213 21 51Q362 934 340.788 955q-21.213 21-51 21Zm404 0Q664 976 643 954.788q-21-21.213-21-51Q622 874 643.212 853q21.213-21 51-21Q724 832 745 853.212q21 21.213 21 51Q766 934 744.788 955q-21.213 21-51 21ZM62 236v-60h116l170 364h287.706L796 260h67L701 563q-11 19-28.559 30.5Q654.881 605 634 605H331l-56 104h491v60H284q-37.663 0-57.332-30Q207 709 224 678l64-118-148-324H62Z" /></svg>

function PreNavbar() {
    return (
        <div className='preNav'>
            <div>
                <a href="https://www.mi.com/in/">MI INDIA</a><span>|</span>
                <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a><span>|</span>
                <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a><span>|</span>
                <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE</a><span>|</span>
            </div>
            <div>
                <a href="https://store.mi.com/in/site/login">SIGN IN</a><span>|</span>
                <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a><span>|</span>
                <a href="https://store.mi.com/in/site/login">{carticon}CART(0)</a>
            </div>

        </div>
    )
}

export default PreNavbar
