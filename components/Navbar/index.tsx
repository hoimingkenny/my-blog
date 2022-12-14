import { useState } from "react";
import type { NextPage } from "next";
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from './index.module.scss';
import { navs } from './config';
import { Button } from "antd";
import Login from "components/Login";

const Navbar: NextPage = () => {
    // console.log(useRouter());
    const { pathname } = useRouter();
    const [isShowLogin, setIsShowLogin] = useState(false);

    const handleGotoEditorPage = () => {

    }

    const handleLogin = () => {
        setIsShowLogin(true)
    }

    const handleClose = () => {
        setIsShowLogin(false)
    }

    return (
        <div className={styles.navbar}>
            <section className={styles.logoArea}>CHENG</section>
            <section className={styles.linkArea}>
                {
                    navs?.map((nav) => (
                        <Link key={nav?.label} href={nav?.value}>
                            <a className={pathname === nav?.value ? styles.active : ''}>
                                {nav?.label}
                            </a>
                        </Link>
                    ))
                }
            </section>
            <section className={styles.operationArea}>
                <Button onClick={handleGotoEditorPage}>Write</Button>
                <Button onClick={handleLogin} type="primary">Login</Button>
            </section>
            <Login isShow={isShowLogin} onClose={handleClose} />
        </div>
    )
}

export default Navbar;