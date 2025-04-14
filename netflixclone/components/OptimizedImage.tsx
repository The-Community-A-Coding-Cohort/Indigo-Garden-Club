// import React, { useState } from "react";
// import Image, { ImageProps } from "next/image";

// interface OptimizedImageProps extends Omit<ImageProps, "onLoadingComplete"> {
//   fallbackSrc?: string;
// }

// const OptimizedImage: React.FC<OptimizedImageProps> = ({
//   src,
//   alt,
//   fallbackSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='60' viewBox='0 0 40 60' fill='none'%3E%3Crect width='40' height='60' fill='%23333333'/%3E%3C/svg%3E",
//   style,
//   ...props
// }) => {
//   const [imgSrc, setImgSrc] = useState(src);
//   const [isLoaded, setIsLoaded] = useState(false);

//   // Ensure the SVG placeholder maintains the same 2:3 aspect ratio
//   const optimizedFallbackSrc =
//     fallbackSrc ||
//     "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3' width='200' height='300' fill='none'%3E%3Crect width='2' height='3' fill='%23333333'/%3E%3C/svg%3E";

//   return (
//     <div className="gradient w-full h-full">
//       {/* Low quality placeholder image - loaded immediately */}
//       {/* {!isLoaded && (
//         <Image
//           src={optimizedFallbackSrc}
//           alt={alt}
//           fill
//           className={`${
//             props.className || ""
//           } transition-opacity duration-500 ease-in-out`}
//           priority
//           style={{ ...style, objectFit: "cover" }}
//         />
//       )} */}

//       {/* Main image - loads in the background */}
//       {/* <Image
//         {...props}
//         src={imgSrc}
//         alt={alt}
//         fill
//         onLoad={() => setIsLoaded(true)}
//         onError={() => setImgSrc(optimizedFallbackSrc)}
//         className={`${
//           props.className || ""
//         } transition-opacity duration-500 ease-in-out ${
//           isLoaded ? "opacity-100" : "opacity-0"
//         }`}
//         style={style}
//       /> */}
//     </div>
//   );
// };

// export default OptimizedImage;
