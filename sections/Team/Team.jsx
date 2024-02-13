import React from "react";
import "./Team.css";
import ph from "../../images/pham.png";
import cn from "../../images/cn.png";
import tp from "../../images/tp.png";
import cm from "../../images/cm.png";

const teamMembers = [
  { name: "Member 1", image: ph },
  { name: "Member 2", image: cn },
  { name: "Member 1", image: tp },
  { name: "Member 2", image: cm },
];

function Team() {
  return (
    <div className="Team">
      <h1>MEET THE TEAMS</h1>
      <div className="Teams">
        {teamMembers.map((member, index) => (
          <div key={index} className={`Team-each`}>
            <img src={member.image} alt={member.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
