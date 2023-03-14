import style from 'styles/profile.module.css'
import Image from 'next/image'
import Maru from 'public/maru01.jpg'

function Profile() {
    return (
        <div className={style.main}>
            <figure>
                <Image
                    src={Maru}
                    alt="profile"
                    // layout='cover'
                    width={100}
                    className={style.img}
                />
            </figure>
            <p>プロフィール</p>
            <div className={style.text}>
                鹿児島市在住。<br />
                老夫婦の趣味のページ。<br />
                作成した作品や作り方などを紹介していきます。<br/>
            </div>
        </div>
    )
}

export default Profile
