import { extendTheme } from '@chakra-ui/react';
import { StyleConfig } from "@chakra-ui/theme-tools";
import {
    customBoldCardStyle, customGeneralCardStyle
} from "./common";
import {
    navItemContentStyle,
    navItemFlexStyle, navItemIconStyle,
    navItemLinkStyle,
    sidebarContainerStyle,
    sidebarWrapperStyle
} from "./sidebar";

import { cardTheme } from "./card";
import { inputTheme } from './input';
import { numberInputTheme } from './numberInput';
import { selectTheme } from './select';

const colors = {
    brand: {
        // 900: '#1a365d',
        // 800: '#153e75',
        // 700: '#2a69ac',
    }
}

const fonts = {
    heading: "'Roboto', -apple-system, system-ui, sans-serif",
    body: "'Roboto', -apple-system, system-ui, sans-serif",
};


const letterSpacings = {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
};

const config = {
    initialColorMode: 'white',
    useSystemColorMode: false,
}

const components: Record<string, StyleConfig> = {
    SidebarContainer: {
        baseStyle: ({ colorMode }) => (
            sidebarContainerStyle(colorMode)
        )
    },
    SidebarWrapper: {
        baseStyle: ({ colorMode }) => (
            sidebarWrapperStyle(colorMode)
        )
    },
    NavItemFlex: {
        baseStyle: ({ colorMode }) => (
            navItemFlexStyle(colorMode)
        )
    },
    NavItemContent: {
        baseStyle: ({ colorMode }) => (
            navItemContentStyle(colorMode)
        )
    },
    NavItemLink: {
        baseStyle: ({ colorMode }) => (
            navItemLinkStyle(colorMode)
        )
    },
    NavItemIcon: {
        baseStyle: ({ colorMode }) => (
            navItemIconStyle(colorMode)
        )
    },
    CustomGeneralCard: {
        baseStyle: ({ colorMode }) => (
            customGeneralCardStyle(colorMode)
        )
    },
    CustomBoldCard: {
        baseStyle: ({ colorMode }) => (
            customBoldCardStyle(colorMode)
        )
    },
    CustomParentListItem: {
        baseStyle: ({ colorMode }) => (
            {

            }
        )
    },
    CustomChildListItem: {
        baseStyle: ({ colorMode }) => (
            {

            }
        )
    },
    // @ts-ignore
    Input: inputTheme,
    // @ts-ignore
    NumberInput: numberInputTheme,
    // @ts-ignore
    Select: selectTheme,
    // @ts-ignore
    Card: cardTheme,
    FormControl: {
        baseStyle: {
            mb: 3
        }
    },
    FormLabel: {
        baseStyle: {
            mt: 3,
            fontWeight: 400,
            color: "gray.500"
        }
    },
    FeatureCard: {
        baseStyle: ({ colorMode }) => (
            {
                backgroundColor: colorMode == "light" ? "blue.400" : "blue.900",
                px: 5,
                py: 7,
                color: "whiteAlpha.900",
                fontWeight: "600",
                borderRadius: 10,
                justifyContent: "space-between",
                display: "flex",
                alignContent: "center",
                cursor: "pointer",
                _hover: {
                    boxShadow: "sm"
                }
            }
        )
    }
}
export const theme = extendTheme({
    colors,
    letterSpacings,
    fonts,
    config,
    components
})
