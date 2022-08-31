import styles from './index.module.scss';
import { CloseCircleTwoTone } from '@ant-design/icons';
import { ChangeEvent, useState } from "react";
import CountDown from 'components/CountDown'

interface IProps {
    isShow: boolean;
    onClose: Function;
}


const Login = (props: IProps) => {
    const { isShow = false } = props;
    const [ form, setForm ] = useState({
        phone: '',
        veriCode: ''
    })
    const [ isShowVerifyCode, setIsShowVerifyCode ] = useState(false);


    const handleClose = () => {

    }

    const handleGetVerifyCode = () => {
        setIsShowVerifyCode(true)
    }

    const handleCountDownEnd = () => {
        setIsShowVerifyCode(false)
    }

    const handleLogin = () => {

    }

    const handleOAuthGithub = () => {

    }

    const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e?.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        isShow ? (
        
            <div className={styles.loginArea}>
                <div className={styles.loginBox}>
                    <div className={styles.panfish}><img src='https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ad7fa76844a2df5c03151ead0ce65ea6.svg'></img></div>
                    <div className={styles.loginTitle}>
                        <div>Mobile Login</div>
                        <div className={styles.close} onClick={handleClose}><CloseCircleTwoTone /></div>
                    </div>
                    <input name="phone" 
                            type="text" 
                            placeholder='Enter mobile number'
                            value={form.phone}
                            onChange={handleFormChange} />
                    <div className={styles.verifyCodeArea}>
                        <input name="veriCode"
                                type="text" 
                                placeholder='Enter verification code' 
                                value={form.veriCode}
                                onChange={handleFormChange} />
                        <span className={styles.verifyCode} onClick={handleGetVerifyCode}>
                            {isShowVerifyCode ? <CountDown time={10} onEnd={handleCountDownEnd}/> : 'Get Code'}
                        </span>
                    </div>
                    <div className={styles.loginBtn} onClick={handleLogin}>Login</div>
                    <div className={styles.otherLogin} onClick={handleOAuthGithub}>Login with Github</div> 
                    <div className={styles.loginPrivacy}>
                        Check out to agree to our&nbsp;
                        <a href="https://www.udemy.com/terms/privacy/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Privacy Policy.
                        </a>
                    </div>
                </div>
            </div>
        
        ) : null
    )
}

export default Login;