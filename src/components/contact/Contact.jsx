import { useContext, useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { ThemeContext } from '../../context';


const Contact = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hf6i78e', 'template_isnfm6c', formRef.current, 'mJ6NdehvHp4nV-1Xm')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img style={{backgroundColor: darkMode && '#888'}} src="https://cdn-icons-png.flaticon.com/512/5415/5415876.png" alt="" className="c-icon" />+38 066 827 94 21
                        </div>
                        <div className="c-info-item">
                            <img style={{backgroundColor: darkMode && '#888'}} src="https://cdn-icons-png.flaticon.com/512/1239/1239353.png?w=740&t=st=1666630849~exp=1666631449~hmac=4aa9413546a74ec1abae5c8e688498c29022385b9d2f2c99e14fc4453960fa57" alt="" className="c-icon" />zhenkaaf@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img style={{backgroundColor: darkMode && '#888'}} src="https://cdn-icons-png.flaticon.com/512/1250/1250996.png?w=740&t=st=1666630877~exp=1666631477~hmac=f5ef194d4d29e64b029953ab1de61bb981b0c6972e5c46ee22936a9b4940867e" alt="" className="c-icon" />Ukraine
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Find movie posters and motion picture art in several sizes and styles from Movie Poster Shop
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && '#888'}} type="text" placeholder='Name' name='user_name' />
                        <input style={{backgroundColor: darkMode && '#888'}} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor: darkMode && '#888'}} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor: darkMode && '#888'}} name="message" id="" cols="30" rows="5" placeholder='Message'></textarea>
                        {done && <span className='c-message'>Thank for your message</span>}
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;