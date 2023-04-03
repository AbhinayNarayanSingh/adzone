import React from "react";
import { useAmp } from "next/amp";
import Wrapper from "../../hoc/Wrapper";
import _JSXStyle from "styled-jsx/style";
import { APP_NAME, BANNER_PLACEHOLDER_IMAGE } from "../../lib/config/homepage";

const Image = (props) => {
	const { src, className, height, width, alt, loading, ...other } = props;
	return (
		<Wrapper>
			{useAmp() ? (
				<amp-img
					src={props.src}
					layout="fixed"
					className={props.className}
					{...other}
				/>
			) : (
				<img
					height={height || "auto"}
					width={width || "auto"}
					alt={alt || APP_NAME}
					src={props.src}
					loading={loading || "lazy"}
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = BANNER_PLACEHOLDER_IMAGE;
					}}
					className={props.className}
					{...other}
				/>
			)}
			<style jsx>
				{`
					.appLogo {
						width: 110px;
					}

					.appLogo:hover {
						cursor: pointer;
						transform: scale(1.1);
						transition: 0.3s;
					}
				`}
			</style>
		</Wrapper>
	);
};

export default Image;
