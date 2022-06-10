import React from "react"
import ResponsiveDesignLogo from "../images/responsivedesign.svg"
import InnovativeSOlutions from "../images/innovativesolutions.svg"
import DeveloperDesign from "../images/developerdesign.svg"
import Passion from "../images/passion.svg"
import SingleSummary from "./SingleSummary"

const Summary = () => {
  return (
    <div className="summary">
      <div className="container-fluid">
        <div className="row">
          <SingleSummary
            summaryTitle="development"
            offset={ false}
            image={DeveloperDesign}
            heading="Development and Design"
            description = "I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests."
            
          />

          <SingleSummary
            summaryTitle="responsive"
            offset={ true}
            image={ResponsiveDesignLogo}
            heading="Responsive Layouts"
            description = "Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations."
            
          />

        </div>
          

        <div className="row">

          <SingleSummary
            summaryTitle="ideas"
            offset={ false}
            image={InnovativeSOlutions}
            heading="Ideas and Solutions"
            description = "There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products."
            
          />          
          
          <SingleSummary
            summaryTitle="passion"
            offset={ true}
            image={Passion}
            heading="Passion and Dedication"
            description = "With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved."
            
          />

        </div>


      </div>
    </div>
  )
}

export default Summary