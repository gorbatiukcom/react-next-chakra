import { BoxProps, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { get } from "lodash";
import React from "react";

const primaryColor = "brand.blue";
const MotionBox = motion.div;

export const Menu = (props: any) => (
  <Flex
    width="100%"
    px={[1]}
    py={[2]}
    position="fixed"
    top="64px"
    zIndex="2"
    bg="bgPrimary"
    boxShadow="md"
    _dark={{
      borderBottom: "1px solid",
      borderColor: "gray.500",
    }}
    {...props}
  />
);
export const MenuContainer = (props: BoxProps) => (
  <Flex
    zIndex="2"
    overflowX="auto"
    mx="auto"
    width="auto"
    css={{
      "&::-webkit-scrollbar": {
        width: "0px",
        height: "0px",
        background: "transparent",
      },
    }}
    {...props}
  />
);

const StyledNav = styled(MotionBox)`
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  p {
    white-space: nowrap;
    z-index: 2;
  }
`;
const StyledNavUnderline = styled(MotionBox)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${(props: any) => get(props, `theme.colors.${primaryColor}`) + ""};
  position: absolute;
  bottom: 0;
  z-index: -1;
`;

type NavProps = BoxProps & {
  active?: boolean;
  children: React.ReactNode;
};

export const Nav = ({ children, active = false, ...rest }: NavProps) => (
  <StyledNav animate {...(rest as any)}>
    <Text fontWeight="500" p={["10px"]} lineHeight="100%" fontSize={["sm", "md"]} userSelect="none">
      {children}
    </Text>

    {active && <StyledNavUnderline layoutId="underline" />}
  </StyledNav>
);
