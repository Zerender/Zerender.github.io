import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects";
import About from "@lekoarts/gatsby-theme-cara/src/components/about";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";
// @ts-ignore
import { useMediaQuery } from 'react-responsive';

const Cara = () => {
	const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });

  //parallax is really wonky so unfortunately have to tune these constants by hand
	let hero_factor: number = 1;
	let project_factor: number = 2;
	let about_factor: number = 1;
	let contact_factor: number = 1;

  let parallax_pages: number = 5;
  let hero_offset: number = 0;
	let project_offset: number = 1;
	let about_offset: number = 3;
	let contact_offset: number = 4;

	if (isTabletOrMobileDevice) {
    if (isPortrait) {
      parallax_pages = 6;
      contact_offset = 5;

      hero_factor = 1;
      project_factor = 3;
      about_factor = 3;
      contact_factor = 1;
    }
    //landscape mode on phones leaves so little space to work with
    else {
      parallax_pages = 9;
      project_offset = 1.5;
      about_offset = 4;
      contact_offset = 8;
      
      hero_factor = 1;
      project_factor = 3;
      about_factor = 5;
      contact_factor = 1;
    }
	}

	return (
	<Layout>
		<Parallax pages={parallax_pages}>
			<Hero offset={hero_offset} factor={hero_factor} />
			<Projects offset={project_offset} factor={project_factor} />
			<About offset={about_offset} factor={about_factor} />
			<Contact offset={contact_offset} factor={contact_factor} />
		</Parallax>
	</Layout>
)
};

export default Cara;