import React from "react";
import { CardTitle } from "./ui/card";

interface TitleProps {
  text?: string;
  subtitle?: string;
  textColor?: string
  subHeading?: string;
  titleBorder?: string;
}

const Title: React.FC<TitleProps> = ({ text,subHeading, subtitle,textColor,titleBorder }) => {
  return (
    <div className="text-start">
      <span className="relative inline-block">
      <CardTitle className={`text-4xl md:text-6xl tracking-wider font-bold  font-poppins ${ textColor ? textColor : 'text-gray-800'}`}>
        {text}
      </CardTitle>
      <small className={`${titleBorder}`}></small>
      </span>
      {subtitle && (
        <CardTitle className={`${textColor ? textColor : "text-2xl"} ${textColor ? textColor : "md:text-4xl"}  font-poppins ${textColor ? textColor : "text-gray-600 dark:text-gray-300"} mt-2`}>
          {subtitle}
        </CardTitle>
      )}
      {subHeading && (
        <CardTitle className={`text-lg  tracking-tighter md:text-2xl text-gray-600 dark:text-gray-300  ${textColor} mt-2`}>
          {subHeading}
        </CardTitle>
      )}
    </div>
  );
};

export default Title;
