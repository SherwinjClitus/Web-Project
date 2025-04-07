import React from "react";
import "../styles/Home.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="home-container">
      {/* <div className="icons-container">
    {/* <div style={{ position: 'relative', height: '500px' }}>  */}
    {/* <img src={trophy} alt="Trophy Icon" style={{ position: 'absolute', top: '5vh', left: '5vh', width: '50px', height: '50px' }} />
    <img src={book} alt="Book Icon" style={{ position: 'absolute', top: '20vh', right: '20vh', width: '50px', height: '50px' }} />
    <img src={connector} alt="Code Icon" style={{ position: 'absolute', bottom: '10vh', left: '20vh', width: '50px', height: '50px' }} />
    <img src={pen} alt="Pen Icon" style={{ position: 'absolute', top: '5vh', right: '40vh', width: '50px', height: '50px' }} />
    <img src={circuit} alt="Circuit Icon" style={{ position: 'absolute', bottom: '20vh', left: '40vh', width: '50px', height: '50px' }} />
    <img src={bug} alt="Bug Icon" style={{ position: 'absolute', bottom: '5vh', right: '10vh', width: '50px', height: '50px' }} />
    </div> */} 
    <div className="text-container">
      <h1 className="title">
          <TypeAnimation
            sequence={[
              "Aptitude Guru Hem", // First text
              1500,
              "",
              500, // Pause for 1.5 sec
            ]}
            wrapper="span"
            speed={1} // Speed of typing
            repeat={Infinity} // Repeat infinitely
          />
        </h1>
      {/* </section> */}
      <h2 className="sub-title">
        <strong>At AGH, we shape futures and build skills that</strong>
        <br />
        <em>nurture your innovative spirit.</em>
      </h2>
      <p className="description">
        Where Success Meets Opportunity! Are you ready to embark on a
        transformative journey towards success? At Aptitude Guru, we are
        committed to providing you with the essential skills and knowledge to
        excel in your professional endeavors. Our expert training in aptitude
        and coding equips you to conquer every challenge, from company interview
        assessments to prestigious coding platforms like{" "}
        <a
          href="https://leetcode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LeetCode
        </a>
        ,{" "}
        <a
          href="https://www.geeksforgeeks.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GeeksForGeeks
        </a>
        ,{" "}
        <a
          href="https://www.hackerrank.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HackerRank
        </a>
        , and more.
      </p>
      </div>
      <div className="buttons">
        <button className="start-learning">Start Your Learning</button>
        <button className="live-demo">Join a Live Demo</button>
    </div>
    </div>
  );
};
export default Home;
