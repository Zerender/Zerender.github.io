/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  image: string
  bg: string
}

const ProjectCard = ({...props}: ProjectCardProps) => {
    return (
        <a
            href={props.link}
            target="_blank"
            rel="noreferrer noopener"
            sx={{
                width: `100%`,
                boxShadow: `lg`,
                position: `relative`,
                textDecoration: `none`,
                borderRadius: `lg`,
                px: 4,
                pt: [3, 4],
                pb: [3, 4],
                color: `white`, 
                background: props.image ? `0% url(${require(`./images/` + props.image)}), ${props.bg}` : `${props.bg}`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `92% 50%`,
                backgroundSize: `25%, cover`,
                transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
                "&:hover": {
                    color: `white !important`,
                    transform: `translateY(-5px)`,
                    boxShadow: `xl`,                                                                                                                                                                                                                                 
                },
                textShadow: `1px 1px 3px rgba(0, 0, 0, 0.8)`,
                opacity: 1
            }}
        >
            <div sx={{fontSize: [0, 1]}}>{props.children}</div>
            <div
            sx={{
                letterSpacing: `wide`,
                pt: 4,
                fontSize: [3, 4],
                fontWeight: `medium`,
                lineHeight: 1,
            }}
            >
            {props.title}
            </div>
        </a>
        )
    }

export default ProjectCard