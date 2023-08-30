/* eslint-disable jsx-a11y/alt-text */
"use client";
import styled from 'styled-components';
import styles from "./Poster.module.scss";
import { DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react';

const lerp = (min: number, max: number, percentage: number) =>
  min * (1 - percentage) + max * percentage;

// type PosterProps = JSX.ImgHTMLAttributes<HTMLImageElement> & { path: string };
type PosterProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & { path: string, class?: string };

const StyledDiv = styled.div<{$xOffset: number; $yOffset: number; $spotX: number; $spotY: number}>`
  --x-off: ${props => props.$xOffset};
  --y-off: ${props => props.$yOffset};
  --spot-x: ${props => props.$spotX};
  --spot-y: ${props => props.$spotY};
`

export default function Poster(props: PosterProps) {
  // const [local, imgProps] = splitProps(props, ["class", "path"]);
  //this might have been done with just two signals but it would've required
  //calcs in css and it would've been far less readable
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [spotX, setSpotX] = useState(50);
  const [spotY, setSpotY] = useState(50);
  return (
    <StyledDiv
      className={styles.wrapper}
      $spotX={spotX}
      $spotY={spotY}
      $xOffset={xOffset}
      $yOffset={yOffset}
      onPointerMove={(e) => {
        const { width, height, x, y } = (
          e.currentTarget as HTMLDivElement
        ).getBoundingClientRect();
        const percentageX = (e.clientX - x) / width;
        const percentageY = (e.clientY - y) / height;
        setXOffset(lerp(-15, 15, percentageX));
        setYOffset(lerp(-15, 15, percentageY));
        setSpotX(percentageX * 100);
        setSpotY(percentageY * 100);
      }}
      onPointerLeave={() => {
        setXOffset(0);
        setYOffset(0);
        setSpotX(50);
        setSpotY(50);
      }}
    >
      <picture>
        <source
          srcSet={`https://image.tmdb.org/t/p/w342${props.path}`}
          media="(min-width: 840px)"
        />
        <source
          srcSet={`https://image.tmdb.org/t/p/w185${props.path}`}
          media="(min-width: 640px)"
        />
        <source
          srcSet={`https://image.tmdb.org/t/p/w342${props.path}`}
          media="(min-width: 605px)"
        />
        <source
          srcSet={`https://image.tmdb.org/t/p/w185${props.path}`}
          media="(min-width: 510px)"
        />
        <source
          srcSet={`https://image.tmdb.org/t/p/w154${props.path}`}
          media="(min-width: 300px)"
        />
        <img
          className={[styles.poster, props.class].join(" ")}
          {...props}
          src={`https://image.tmdb.org/t/p/w92${props.path}`}
          width={342}
          height={556}
        />
      </picture>
    </StyledDiv>
  );
}
