import React from "react";
import "./experience.css";

const experience = () => {
    const experience = [
        {
            title:
                "NODET (National Organization for Development of Exceptional Talents)",
            date: "7/2019",
            position:
                "Volunteer Organizer, English Language Learning Workshop for Middle School Students",
            desc:
                "Organized a workshop to help middle school students learn English, developing organizational and leadership skills while foster a supportive and engaging learning environment.",
        },
        {
            title: "Habitat for Humanity",
            date: "08/2020 - 9/2020",
            position: "Volunteer on Munsee-Delaware Nation Build Site",
            desc:
                "As a Habitat for Humanity volunteer, I worked on the Munsee-Delaware Nation build site to help create safe, affordable housing for Indigenous families and communities. This was a rewarding experience that allowed me to connect with new people while making a positive impact in the community. We worked together to develop housing solutions and build homes that would provide a decent place to live.",
        },
        {
            title: "Future Living Lab",
            date: "11/2021 - 4/2022",
            position: "Architecture and Engineering Student Group Member",
            desc:
                "Collaborated with peers to explore sustainable building designs, combining interests in architecture and structural engineering. Developed teamwork, communication, and project management skills while contributing to innovative research.",
        },
        {
            title: "Mentorship Program",
            date: "7/2022 - 4/2023",
            position: "Mentor",
            desc:
                "Provided support, guidance, and feedback to individuals to assist them in achieving their personal and professional goals. Through this role, I have developed my leadership and coaching skills and gained exposure to different perspectives and experiences.",
        },
    ];
    return (
        <div className="experience-section">
            <h2 className="experience-title">Experience</h2>
            {experience.map((item) => {
                return (
                    <div className="experience-item">
                        <div className="experience-item__title">{item.title}</div>
                        <div className="experience-item__dates">
                            {item.position} ({item.date})
                        </div>
                        <div className="experience-item__description">{item.desc}</div>
                    </div>
                );
            })}
        </div>
        // <StyledExperience>
        //     <StyledSection>
        //         <h2>Experience</h2>
        //         {experience.map((item) => {
        //             return (
        //                 <div className="experience-item">
        //                     <div className="experience-item__title">{item.title}</div>
        //                     <div className="experience-item__dates">
        //                         {item.position} ({item.date})
        //                     </div>
        //                     <div className="experience-item__description">{item.desc}</div>
        //                 </div>
        //             );
        //         })}
        //     </StyledSection>
        // </StyledExperience>
    );
};

export default experience;
