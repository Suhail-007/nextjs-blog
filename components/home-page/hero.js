import Image from 'next/image';

import styles from './hero.module.css';
import profile from '../../public/images/site/my.jpg';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image src={profile} alt='Picture of the author' width={300} height={300} priority />
            </div>
            <h1>Hi, I'm Mohd Suhail</h1>
            <p>I blog about web development - especially frontend frameworks like Angular and React.</p>
        </section>
    )
}