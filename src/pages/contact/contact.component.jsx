import React from 'react';
import './contact.styles.scss';

const ContactPage = () => (
    <main>
        <h3>Contact</h3>
        <div className="container">
            <div className="contact-card">
                <div
                    className="image"
                    style={{ backgroundImage: 'url(./images/toulouse.jpg)' }}
                />
                <div className="content">
                    <div>
                        <h4>Adresse</h4>
                        <p>7 rue Caraman</p>
                        <p>31000 Toulouse</p>
                        <p>France</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>
                            <a href="mailto:marine.heckler@icloud.com">
                                marine.heckler@icloud.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
);

export default ContactPage;
