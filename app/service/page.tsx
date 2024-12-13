import React from 'react'
import Service from '../components/Service'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service | Portfolio",
};
const ServicePage = () => {
  return (
    <div>
      <Service/>
    </div>
  )
}

export default ServicePage
