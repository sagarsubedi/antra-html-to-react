import React from "react"
import Button from "./Button"
import SingleProject from "./SingleProject"

const Projects = () => {
  return (
    <div className = "projects" id="projects">
			<div className="container-fluid">
				<div className = "row">
					<div className = "col-sm-12 col-md-12 text-center">
						<div className = "projects-header">
							<h1>Projects and Portfolio</h1>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-12 col-md-12 text-center">
						<div className = "projects-header-quote">
							<h3>Sharing my endeavors and passions...</h3>
						</div>
					</div>
				</div>

				<div className="row">

					<SingleProject
						projectNameAsClass="luvtalk-project"
						projectName="LUV TALK Website"
						projectInfo="Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress."
					/>

					<SingleProject
						projectNameAsClass="personal-website-project"
						projectName="Personal Website"
						projectInfo="Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests."
					/>

					<SingleProject
						projectNameAsClass="strike-zone-project"
						projectName="Strike Zone Analysis"
						projectInfo="Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game."
					/>

				</div>

				<div className = "row">
					<div className = "col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
						<div className = "see-more-button">
							<Button text="More" />
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Projects