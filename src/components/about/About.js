import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName} {info.lastName.toLowerCase()} $</span> cat
                about {firstName} </p>
            <p><span style={{color: info.baseColor}}>about {firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return (
          <>
            <p>
              <span style={{ color: info.baseColor }}>
                {firstName} {info.lastName.toLowerCase()} $
              </span>{" "}
              cd bộ-kỹ-năng/uy-tín
            </p>
            <p>
              <span style={{ color: info.baseColor }}>
                bộ-kỹ-năng/uy-tín <span className={Style.green}>(main)</span> $
              </span>{" "}
              ls
            </p>
            <p style={{ color: info.baseColor }}> chuyên mục thành thạo</p>
            <ul className={Style.skills}>
              {info.skills.proficientWith.map((proficiency, index) => (
                <li key={index}>{proficiency}</li>
              ))}
            </ul>
            <p style={{ color: info.baseColor }}> chuyên mục có hiểu biết</p>
            <ul className={Style.skills}>
              {info.skills.exposedTo.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </>
        );
    }

    function miscText() {
        return (
          <>
            <p>
              <span style={{ color: info.baseColor }}>
                {firstName} {info.lastName.toLowerCase()} $
              </span>{" "}
              cd sở-thích/đặc-biệt
            </p>
            <p>
              <span style={{ color: info.baseColor }}>
                sở-thích/đặc-biệt <span className={Style.green}>(main)</span> $
              </span>{" "}
              ls
            </p>
            <ul>
              {info.hobbies.map((hobby, index) => (
                <li key={index}>
                  <Box component={"span"} mr={"1rem"}>
                    {hobby.emoji}
                  </Box>
                  {hobby.label}
                </li>
              ))}
            </ul>
          </>
        );
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}
