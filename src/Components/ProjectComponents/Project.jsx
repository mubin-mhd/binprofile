import React from "react";
import ProjectPost from "./ProjectPost";

const Project = () => {
  return (
    <section className="flex flex-wrap justify-evenly ">
      <ProjectPost
        title="Al Qur'an dan Tafsir"
        desc="Aplikasi ini dibuat dengan react js memanfaatkan API dari quran Cloud, tersedia fitur pencarian surah dan tafsir lenkap dengan tulisan arab dan latin"
        tech1="HTML5"
        tech2="CSS3"
        tech3="Reactjs"
        tech4="TailwindCSS"
      />
      <ProjectPost
        title="Todo List"
        desc="Aplikasi ini dibuat dengan react js, tersedia fitur add, remove, edit, delete, and data in JSON server"
        tech1="HTML5"
        tech2="CSS3"
        tech3="Reactjs"
        tech4="TailwindCSS"
      />
    </section>
  );
};

export default Project;
