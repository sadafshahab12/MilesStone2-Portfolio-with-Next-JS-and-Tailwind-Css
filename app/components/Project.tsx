import React from "react";
import ProjectCard from "../components/ProjectCard";
import Project2Card from "../components/Project2Card";
import Link from "next/link";

const Project = () => {
  return (
    <>
      <section>
        <div>
          <h1 className="text-[1.5rem] md:text-[2rem] font-black text-center py-2 md:py-6">
            My Projects
          </h1>
        </div>
        <div className="px-3 md:px-10 py-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-5 md:gap-10">
            <div>
              {/* Next JS  */}
              <ProjectCard
                src="/images/work/latest1.jpg"
                h1="Next JS Ecommerce Website"
                p="Ecommerce website with next js and tailwind css with responsiveness."
                projectLink="https://uiux-hackathon-2-nextjs-design-jam-2024.vercel.app/"
              />
            </div>

            <div>
              {/* Next JS  */}
              <ProjectCard
                src="/images/work/latest3.jpg"
                h1="Fourth Portfolio"
                p="I build my fourth Portfolio with Next Js and Tailwind Css."
                projectLink="https://portfolio-with-next-js-and-custom-css-nu.vercel.app/"
              />
            </div>
            <div>
              {/* Next JS  */}
              <ProjectCard
                src="/images/work/latest4.jpg"
                h1="Login And SignOut"
                p="I build Login & SignOut with Next Js and Tailwind Css , Auth.js and GitHub Authentication."
                projectLink="https://code-connect-login-sign-out-page-with-next-js.vercel.app/"
              />
            </div>
            <div>
              {/* Next JS  */}
              <ProjectCard
                src="/images/work/next js api.png"
                h1="Book Hub"
                p="I created a Books API that can provide a list of books together with a user interface. CRUD Operation is used in its construction."
                projectLink="https://monday-2-5-assignment-submission-november-11-class-10.vercel.app/"
              />
            </div>
            <div>
              {/* Next JS  */}
              <ProjectCard
                src="/images/work/post.png"
                h1="Post Sphere"
                p="I build Post Sphere with Next Js and Tailwind Css and Post API."
                projectLink="https://next-js-assignment-post-api-post-sphere.vercel.app/"
              />
            </div>
            <div>
              {/* Next JS  */}
              <ProjectCard
                src="/images/work/portfolio next js.png"
                h1="First Next JS Website"
                p="My First Portfolio with Next Js and Tailwind Css."
                projectLink="https://next-js-assignment-3-five.vercel.app/"
              />
            </div>

            <div>
              {/* Next JS  */}
              <ProjectCard
                src="/images/work/nextjs website.png"
                h1="Rise Up Website"
                p="The motivational website was created using Tailwind CSS and Next JS, with Figma for design and code writing."
                projectLink="https://rise-up-website-next-js-assignment-7.vercel.app/"
              />
            </div>

            <div>
              {/* Next JS  */}
              <ProjectCard
                src="/images/work/milestone.png"
                h1="Taste Bite"
                p="I Built a simple multi-page website using React components.I Applied Tailwind CSS to style the website, and it is responsive."
                projectLink="https://milestone-2-assignments-next-js-with-tailwind-css.vercel.app/"
              />
            </div>
            <div>
              {/* html css JS  */}
              <Project2Card
                src="/images/work/latest2.jpg"
                h1="GitHub User Finder"
                p="A simple tool to discover top GitHub developers by username. Powered by the GitHub API."
                projectLink="https://git-hub-user-dev-finder-8db1.vercel.app/"
              />
            </div>
            <div>
              {/* html css javascript  */}
              <Project2Card
                src="/images/work/joke.png"
                h1="Random Joke Generator"
                p="I build Random Joke Generator with  html css javascript and Joke API."
                projectLink="https://random-joke-generator-wine.vercel.app/"
              />
            </div>
            <div>
              {/* html css javascript  */}
              <Project2Card
                src="/images/work/fee.png"
                h1="Fee Management"
                p="I build Random Fee Management Website with  html css javascript and bootstarp."
                projectLink="https://smit-presentation-student-fee-management.vercel.app/"
              />
            </div>
            <div>
              {/* html css javascript  */}
              <Project2Card
                src="/images/work/resumebuilder.png"
                h1="Resume Builder"
                p="Experience our Resume Builder, built with  html css javascript.Create your resume free of cost."
                projectLink="https://milestone-5-unique-path-and-shareable-link-pi.vercel.app/"
              />
            </div>
          </div>
        </div>
        <div className="text-center my-5">
          <Link
            href="https://github.com/sadafshahab12"
            className="text-[0.9rem]  bg-black text-white py-3 px-5 text-center  cursor-pointer"
          >
            Visit Github
          </Link>
        </div>
      </section>
    </>
  );
};

export default Project;
