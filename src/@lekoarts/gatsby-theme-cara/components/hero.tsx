/** @jsx jsx */
import {useColorMode, jsx } from "theme-ui"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import SVG from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [colorMode, setColorMode] = useColorMode();
  var bgImage = colorMode === `dark` ? `background-hero.jpg` : `background-hero-light.jpg`;
  var arrowColor = colorMode === `dark` ? `icon_brightest` : `black`;
  return  (
    <div>
      <Divider speed={0.2} offset={offset} factor={factor}>
          <img src={ require('./images/' + bgImage) } style={{width: `100vw`, height: `auto`}}/>
          <UpDown>
              <SVG icon="downArrowCircle" hiddenMobile width={160} color={arrowColor} left="50%" top="70%" />
          </UpDown>
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <Intro />
        </Inner>
      </Content>
      <Divider
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
        speed={0.2}
        offset={1}
        factor={factor}
      >
      </Divider>
    </div>
  )
}

export default Hero