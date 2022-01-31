import React from "react";

const Experience = () => {
  return (
    <div id="HowWork" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker">
            <div className="timeline-content"></div>
            <h3>Junior Full Stack Developer
           </h3>
            <p>
            ● Created Customer prediction App </p>
          <p>
            ● Built features using scikit-learn in Python that learned
            from the data provided to predict activities of potential
            regulars ina store </p>
            <p>
            ● Utilizing my RESTful API from a model prediction
            created using Node JS
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker">
            <div className="timeline-content"></div>
            <p>
            ● Built a responsive webapp using Node JS and React JS
            </p>
            <p>
            ● Used: JavaScript, Python,Node JS, SQLite,
            Scikit-learn, HTML, CSS
     
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker">
            <div className="timeline-content"></div>
            <h3>Junior Front End Developer
            </h3>
            <p>
            ● Building stable and maintainable codebases using React JS
            </p>
            <p>
            ● Performing bug fixes and code reviews.
            </p>
            <p>
            ● Adding cart feature for purchases
            </p>
            <p>
            ● Tidying code workspace by separating sass style files
            from page and component files on React JS
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker">
            <div className="timeline-content"></div>           
            <p>
            ● Implementing mobile-first approach to website
            </p>
            <p>
            ● Integrating data from RESTful APIs
            </p>
            <p>
            ● Improve on-page SEO by adding internal links
            and sitemaps
            </p>
            <p>
            ● Built a company Website using Wordpress
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker">
            <div className="timeline-content"></div>
            <h3>Junior Back End Developer</h3>
            <p>
            ● Worked with another developer to implement RESTful
            APIs in Node JS
              </p>  
              <p>
              ● Adding a PostgreSQL database in Node JS for
              production deployment.
                </p>    
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;