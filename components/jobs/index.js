import Link from "next/link"
import { useState } from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import { getJobs } from "../../actions"
import Title from "../title"



const Jobs = ({jobs}) => {
  

  const [value, setValue] = useState(0)
  const { company, position, location, date, desc} = jobs[value].attributes;

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
              <button key={`job-${Math.random().toString().slice(2,4)}${item.attributes.id}`} 
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}>{item.attributes.company}
              </button>
              )
            })}
          </div>

          <article className="job-info">
            <h3>{position}</h3>
            <div>
              <h4>{company}</h4>
              <span> {location}</span>
            </div>
            <p className="job-date">{date}</p>
            {
              desc.map((item) => {
                return <div key={item.id} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{item.name}</p>
                </div>
              })
            }
          </article>
      </div>
      <Link href="/about" >
        <a className="btn center-btn">more info</a>
      </Link>
    </section>
  )
}



export default Jobs
