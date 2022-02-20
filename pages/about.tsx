import React from 'react'
import styles from '../styles/about.module.scss'

const About = () => {
  return (
      <div className={styles.about_container}>
          <div className={styles.wrapper}>
            <h1>Hi! I'm Fumihito Takanami.</h1>

            <h4>FullStack Engineer</h4>

            <p>A highly reliable, passionate, and self-motivated FrontEnd developer seeking a tech role in the IT industry. I have proven abilities and professional experience from multiple projects. I understand the development of web applications using React, Redux, Next.js, TypeScript/JavaScript(ES6+), Node.js, Express.js, HTML, and CSS as well as Object-Oriented Programming. Most importantly, I am very good at collaborating and communicating with others, especially in Agile/Scrum teams.</p>
          </div>
          <img className={styles.img} src="/profile.jpeg" alt="" />

      </div>
  )
}

export default About