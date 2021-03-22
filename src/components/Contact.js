import React from 'react';
import './Contact.css'

const name = 'Irina Mychko';
const avatar = 'https://wi.wallpapertip.com/wsimgs/152-1521763_red-girl-nice-model-beautiful-photography-lips-fashion.jpg';
const status = true;


const Contact = () => {
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} alt="avatar" />
            <div>
                <h4 className="name">{name}</h4>

                <div className="status">{status ?

                    <div className="status-online">
                        <p className="status-text"> online</p>
                    </div>
                    :
                    <div className="status-offline">
                        <p className="status-text">offline</p>
                    </div>}

                </div>
            </div>

        </div>
    )
}


export default Contact;
