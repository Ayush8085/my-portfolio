import React from "react";
import saitama_img from "../assets/saitama.png";
import { useUser } from "../hooks/useUser";

const Intro = () => {
  const { userData } = useUser();

  return (
    <section
      id="hero"
      className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
    >
      <article className="sm:w-1/2">
        <figure className="my-12">
          <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
            <p className='text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-["\201C"] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-["\201D"] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2'>
              Hello, you have come to{" "}
              <span className="">Ayush's Portfolio</span>. He is a passionate
              Full Stack Developer. He is a real hero like me because he is
              interested in almost all the sports and skilled in many
              technologies as well which makes him all rounder🏋️.
            </p>
          </blockquote>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
            &#8212;Saitama <span className="italic"> A.K.A</span> One Punch Man
          </figcaption>
        </figure>
      </article>

      <img className="w-1/2" src={saitama_img} alt="" />
    </section>
  );
};

export default Intro;
