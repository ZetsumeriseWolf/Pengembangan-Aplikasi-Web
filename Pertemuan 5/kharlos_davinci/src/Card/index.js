import { Body, Container, Header } from "./styles/Card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Header = function CardHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Card.Body = function CardBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
