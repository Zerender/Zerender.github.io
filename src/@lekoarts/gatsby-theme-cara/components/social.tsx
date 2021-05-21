/**@jsx jsx */
import { useColorMode, jsx } from "theme-ui";
import {
	FaGithub,
	FaLinkedinIn,
	FaRegEnvelope,
	FaMediumM,
} from "react-icons/fa";

type SocialProps = {
    email:string,
    github:string,
    linkedin:string,
    medium:string
  }

const Social = ({...props}: SocialProps) => {
	const size = '4em';
	const component: [JSX.Element, string][] = [
		[<FaRegEnvelope sx={{height:size, width:size}}/>, props.email],
		[<FaGithub sx={{height:size, width:size}}/>, props.github],
		[<FaLinkedinIn sx={{height:size, width:size}}/>, props.linkedin],
		[<FaMediumM sx={{height:size, width:size}}/>, props.medium],
	];
	const [colorMode, setColorMode] = useColorMode();
	const icons: JSX.Element[] = component.map((icon, index) => {
		return (
		<a
			key={index}
			href={icon[1]}
			target="_blank"
			rel="noopener noreferrer"
			sx={{
				"&:hover": {
					color: colorMode === `dark` ? `white !important` : `black !important`,
					transform: `translateY(-5px)`,
				},
			}}
		>
			{icon[0]}
		</a>
		)
	});
	return (
		<div
			sx={{
				display: `flex`,
				justifyContent: `space-between`,
				width: ["100%", "50%", "40%"],
			}}
		>
			{icons}
		</div>
	);
};

export default Social;