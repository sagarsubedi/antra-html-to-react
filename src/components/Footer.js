import React from "react"
import FacebookLogo from "../images/facebook.svg"
import LinkedInLogo from "../images/linkedin.svg"
import PinterestLogo from "../images/pinterest.svg"
import EmailLogo from "../images/email.svg"
import SocialMediaLogo from "./SocialMediaLogo"
import NavbarLink from "./NavbarLink"

const Footer = () => {
  return (
		<div className = "footer">
			<div className="container-fluid">
				
				<div className = "row">
					<div className = "media-links">
						
						<SocialMediaLogo
							isFirst={true}
							name="facebook"
							image={ FacebookLogo}
						/>

						<SocialMediaLogo
							name="linkedin"
							image={ LinkedInLogo}
						/>

						<SocialMediaLogo
							name="pinterest"
							image={ PinterestLogo}
						/>

						<SocialMediaLogo
							name="email-icon"
							image={ EmailLogo}
						/>

					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-6 col-md-6 text-right">
						<div className = "personal-contact phone">
							<h4>Phone: XXXXXX</h4>
						</div>
					</div>

					<div className = "col-sm-6 col-md-6 text-left">
						<div className = "personal-contact email-personal-contact">
							<h4>Email: XXXXX@gmail.com</h4>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-4 col-md-4 text-center">
						<div className = "company-information">
							<h3>XXXX</h3>
							<h4>Copyright &copy; 2021</h4>
							<h4>NY</h4>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "home-footer">
							<NavbarLink isH4={true} url="#" text="Home" />
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "portfolio-footer">
							<NavbarLink isH4={true} url="#" text="Portfolio" />
							<ul>
								{/* <li><a href = "#">Project1</a></li>
								<li><a href = "#">Project2</a></li>
								<li><a href = "#">Project3</a></li>
								<li><a href = "#">See All</a></li> */}
								<NavbarLink url="#" text="Project1" />
								<NavbarLink url="#" text="Project2" />
								<NavbarLink url="#" text="Project3" />
								<NavbarLink url="#" text="See All" />
							</ul>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "resume-footer">
							<NavbarLink isH4={true} url="#" text="Resume" />
							<ul>
								<NavbarLink url="#" text="Download" />
							</ul>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "contact-footer">
							<NavbarLink isH4={true} url="#" text="Contact" />
						</div>
					</div>
				</div>
			</div>
		</div>
  )

}

export default Footer