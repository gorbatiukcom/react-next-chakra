"use client";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelectedLayoutSegment } from "next/navigation";
import { useRef } from "react";
import { IoMenu, IoMenuSharp } from "react-icons/io5";

import { Image } from "@/components/image";
import { Link } from "@/components/link";

export const SocialMediaLinks = [
  {
    url: "https://www.instagram.com/",
    name: "instagram",
  },
  {
    url: "https://www.facebook.com/",
    name: "facebook",
  },
];

const NavigationLinks = [
  {
    url: "/",
    segment: null,
    name: "Home",
  },
  {
    url: "/services",
    segment: "services",
    name: "Services",
  },
  {
    url: "/about",
    segment: "about",
    name: "About us",
  },
  {
    url: "/contacts",
    segment: "contacts",
    name: "Contacts",
  },
];

const DesktopHeader = ({ segment: activeSegment }: { segment: string | null }) => {
  const color = "textPrimary";
  return (
    <Flex width="100%" pt={0} px="80px" justifyContent="space-between" alignItems="flex-start">
      <Link href="/">
        <Image
          src="https://source.unsplash.com/192x192/?logo"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <Flex pt="40px">
        {NavigationLinks.map(({ url, segment, name }) => (
          <Link
            key={name}
            href={url}
            py={2}
            px={5}
            color={color}
            fontSize="24px"
            lineHeight="40px"
            cursor="pointer"
            _hover={{
              color: "brand.blue",
            }}
            position="relative"
            _before={
              activeSegment === segment
                ? {
                    content: `""`,
                    position: "absolute",
                    display: "block",
                    width: "40%",
                    height: "2px",
                    bottom: 0,
                    left: "calc(50% - 20%)",
                    background: "brand.blue",
                    pointerEvents: "none",
                    borderRadius: "2px",
                  }
                : undefined
            }
          >
            {name}
          </Link>
        ))}
      </Flex>
      <Link
        href="tel:+48444777444"
        py={2}
        px={5}
        pt="48px"
        mr={-5}
        color={color}
        fontSize="24px"
        lineHeight="40px"
        cursor="pointer"
        _hover={{
          color: "brand.blue",
        }}
      >
        +48 444 777 444
      </Link>
    </Flex>
  );
};

const MobileHeader = ({ segment: activeSegment }: { segment: string | null }) => {
  const burgerColor = "textPrimary";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null as any);

  return (
    <Flex
      display={["flex", "none"]}
      width="100%"
      pt={0}
      pl={0}
      pr={4}
      justifyContent="space-between"
    >
      <Link href="/">
        <Image src="/images/logo.svg" alt="logo" minWidth={102} width={102} height={152} p={2} />
      </Link>
      <IconButton
        mt={2}
        mr="-6px"
        ref={btnRef}
        aria-label="menu"
        color={burgerColor}
        icon={<Icon as={IoMenuSharp} boxSize="36px" />}
        background="transparent"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        variant="small"
      >
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton color="textPrimaryWhite" size="lg" />
          <DrawerBody display="flex" flexDirection="column" justifyContent="center" px={5}>
            {NavigationLinks.map(({ url, segment, name }) => (
              <Link
                key={name}
                href={url}
                py={2}
                px={5}
                color="textPrimaryWhite"
                fontSize="20px"
                lineHeight="40px"
                cursor="pointer"
                _hover={{
                  color: "brand.blue",
                }}
                position="relative"
                _before={
                  activeSegment === segment
                    ? {
                        content: `""`,
                        position: "absolute",
                        display: "block",
                        width: "6px",
                        height: "6px",
                        left: 0,
                        bottom: "calc(50% - 3px)",
                        background: "brand.blue",
                        pointerEvents: "none",
                        borderRadius: "full",
                      }
                    : undefined
                }
                onClick={onClose}
              >
                {name}
              </Link>
            ))}
          </DrawerBody>

          <DrawerFooter justifyContent="flex-start" p={4} pl={10}>
            <Flex flexDirection="column">
              <Link
                href="tel:+48444777444"
                color="textPrimaryWhite"
                fontSize={["14px", "18px"]}
                lineHeight={["21px", "40px"]}
                fontWeight={600}
                cursor="pointer"
                _hover={{
                  color: "brand.blue",
                }}
                pb={2}
              >
                +48 444 777 444
              </Link>

              <Flex width="100%" justifyContent="flex-end" gap={[4, 6]}>
                {SocialMediaLinks.map(({ url, name }) => (
                  <Link
                    key={name}
                    href={url}
                    color="textPrimaryWhite"
                    fontSize={["14px", "18px"]}
                    lineHeight={["21px", "40px"]}
                    cursor="pointer"
                    fontWeight={600}
                    _hover={{
                      color: "brand.blue",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </Link>
                ))}
              </Flex>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

const HeaderContent = ({ segment: activeSegment }: { segment: string | null }) => {
  return (
    <>
      <MobileHeader segment={activeSegment} />
      <DesktopHeader segment={activeSegment} />
    </>
  );
};

export const Header = ({ children }: { children: any }) => {
  const segment = useSelectedLayoutSegment();
  console.log("🚀 ~ Header ~ segment:", segment);

  return (
    <Box overflow="hidden">
      <HeaderContent segment={segment} />
      {children}
    </Box>
  );
};
