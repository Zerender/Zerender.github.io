import React from "react"
import ProjectCard from "../@lekoarts/gatsby-theme-cara/components/project-card"
import Social from "../@lekoarts/gatsby-theme-cara/components/social"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: props => (
    <ProjectCard {...props}>
    </ProjectCard>
  ),

  Social: props => (
    <Social {...props}>
    </Social>
  ),
}

export default components