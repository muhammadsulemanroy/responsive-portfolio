import React from "react";
import styled from "styled-components";

const Contact =() => {
   const Wrapper =styled.section`
   padding: 9rem 0 5rem 0;

     .container {
        margin-top: 6rem;
        text-align:center;
     

     .contact-form {
        max-width: 50rem;
        margin:auto;

    .contact-inputs {
      display:flex;
      flex-direction:column;
      gap:3rem;

      input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
           
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
    }
     }
     }
     `; 

    return (
        <Wrapper className="section">
          <h2 className="common-heading">Feel free to Contact</h2>
          <iframe 
          src=
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26502.063160348287!2d72.40226274999999!3d33.870129800000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df1ebcfaa665c1%3A0x6da548f8d0a39ec!2sMinhas%20Airbase%2C%20Kamra%20Kalan%2C%20Attock%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1675676800021!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           
           <div className="container">
             <div className="contact-form">
                <form action="https://formspree.io/f/xqkopznk" method="POST" className="contact-inputs">
                  
                  <input
                  type="text"
                  name="username"
                  placeholder="username"
                  autoComplete="off"
                  required/>
                  
                  <input
                  type="email"
                  name="email"
                  placeholder="email"
                  autoComplete="off"
                  required/>

                  <textarea 
                  name="mesage"
                   col="30"
                    rows="6"
                    autoComplete="off"
                    required>
                    </textarea>

                  <input type="submit" value="send"/>
                </form>
             </div>
           </div>
        </Wrapper>
    );
};

export default Contact;