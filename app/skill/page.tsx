import React from 'react'
import Skills from '../components/Skills'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Portfolio",
};
const SkillsPage = () => {
  return (
    <div>
      <Skills/>
    </div>
  )
}

export default SkillsPage
