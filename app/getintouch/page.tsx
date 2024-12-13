import React from 'react'
import Contact from '../components/Contact'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
};
const ContactPage = () => {
  return (
    <div>
      <Contact/>
      
    </div>
  )
}

export default ContactPage
