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
                py: [4, 5],
                color: `white`, 
                //backgroundImage: `url(${require('./images/tusimple.png')})` ,
                //background: bg || `none`,
                background: props.image ? `25% url(${require(`./images/` + props.image)}), ${props.bg}` : `${props.bg}`,
                //backgroundSize: `25%`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `92% 40%`,
                transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
                "&:hover": {
                    color: `white !important`,
                    transform: `translateY(-5px)`,
                    boxShadow: `xl`,                                                                                                                                                                                                                                 
                },
            }}
        >
            <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{props.children}</div>
            <div
            sx={{
                //textTransform: `uppercase`,
                letterSpacing: `wide`,
                pt: 4,
                fontSize: [4, 5],
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