import styled from "styled-components";
import Box from "./Box";
import { ButtonProps } from "./Button";

interface elevationType {
  [idx: number]: string;
}

const elevationMap: elevationType = [
  "none",
  "var(--shadow)",
  "var(--shadow-md)",
  "var(--shadow-lg)",
];

const backgroundMap = {
  default: "var(--color-background)",
  alt: "var(--color-background-alt)",
  primary: "var(--color-primary)",
};

const colorMap = {
  default: "var(--color-text-primary)",
  alt: "var(--color-text-primary)",
  primary: "var(--color-text-on-primary)",
};

interface ExtraProps {
  elevation?: keyof typeof elevationMap;
  color?: keyof typeof backgroundMap;
}

export type CardProps = ButtonProps | ExtraProps;

const Card = styled(Box)<ExtraProps>`
  border-radius: var(--rounded);
  box-shadow: ${({ elevation }) => elevationMap[elevation || 1]};
  width: auto;
  height: auto;
  padding: 1rem 2rem;
  background-color: ${({ color }) => backgroundMap[color || "default"]};
  color: ${({ color }) => colorMap[color || "default"]};
`;

export default Card;
