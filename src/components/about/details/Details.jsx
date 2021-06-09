import "./details.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export default function Details() {
  return (
    <div className="Details">
      <Tabs>
        <TabList>
          <Tab>Skills</Tab>
          <Tab>Experience</Tab>
          <Tab>Education</Tab>
        </TabList>
        <TabPanel id="skills-panel">
          <div className="list-container">
          <ul>
            <li>C#</li>
            <li>.NET Core</li>
            <li>Entity Framework</li>
            <li>SQL Server</li>
            <li>HTML5 / CSS3</li>
            <li>JavaScript / jQuery</li>
            <li>React</li>
            <li>RESTful APIs</li>
          </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="experience">
            <p className="job-title">Software Developer @ <span>Case Western Reserve University</span></p>
            <p className="date">Jun '19 - PRESENT</p>
          </div>
          <div className="experience">
            <p className="job-title">TechOps Manager @ <span>US Cable Corporation</span></p>
            <p className="date">Feb '16 - Jan '19</p>
          </div>
          <div className="experience">
            <p className="job-title">Field Technician @ <span>US Cable Corporation</span></p>
            <p className="date">Jul '13 - Feb '16</p>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="experience">
            <p className="job-title">We Can Code IT - <span>Fullstack Software Development Bootcamp</span></p>
            <p className="date">Jan '19 - Apr '19</p>
          </div>
          <div className="experience">
            <p className="job-title">Central State University - <span>Computer Science (Coursework)</span></p>
            <p className="date">2011 - 2013</p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}
