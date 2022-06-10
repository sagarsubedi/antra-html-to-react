import React from "react"
import Button from "./Button"
import InputField from "./InputField"

const Contact = () => {
  return (
		<div className = "contact" id="contact">
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col-sm-12 col-md-12 text-center">
						<div className = "contact-header">
							<h1>Contact</h1>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-12 col-md-12 text-center">
						<div className = "contact-header-quote">
							<h4>"XXXXX"</h4>
							<h4>-XXX</h4>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-6 col-md-6">
						<div className = "contact-instructions">
							<h2>Reaching out to me</h2>
							<p>Don't be afraid to contact me! I'm happy to answer any questions, provide more information, or just have a nice conversation! Fill out the form below to being reaching out to me. If you prefer another email client other than your default, which will appear after clicking the button and have all of the information you just entered, you can email me at XXXXX.</p>
							<br />
							<br />
							<br />
							<h2>Contact Information</h2>
							<p>XXXX</p>
							<p>XXXX</p>
							<p>(XXXX)-445-7747</p>
							<p>XXXXXX@gmail.com</p>
						</div>
					</div>

					<div className = "col-sm-6 col-md-6">
						<div className = "contact-form-body">
							<form>
								<div className="row">
									
									<InputField
										fieldClassName="firstname"
										fieldName="Full Name"
										type="text"
										placeholder="First Name"
									/>

									<InputField
										fieldClassName="lastname"
										fieldName="Full Name"
										type="text"
										placeholder="Last Name"
									/>

								</div>

								<div className="row">

									<InputField
										fieldClassName="email"
										fieldName="Email"
										type="email"
										placeholder="Email"
										large={true}
									/>
									
								</div>

								<div className="row">

									<InputField
										fieldClassName="message"
										fieldName="Message"
										textArea={true}
										placeholder="Message"
										large={true}
									/>

								</div>

								<div className = "row">
									<div className = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
										<div className = "submit-contact">
                    <Button text="Submit" />
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Contact