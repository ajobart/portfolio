import React, { FC } from "react";

/**
 * Image component
 * @param className - Class of the image
 * @param alt - Text alternative of the image
 * @param path - Path of the image
 * @param click - Event on click
 */
interface ImageProps {
  className?: string;
  alt?: string;
  path?: string;
  click?: React.MouseEventHandler<HTMLElement>;
}

const Image: FC<ImageProps> = ({
  className = "",
  path = "",
  alt = "",
  click,
}) => {
  return (
    <>
      <img className={`${className}`} src={path} alt={alt} onClick={click} />
    </>
  );
};

export default Image;
