import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react" 

export const theme = extendTheme({
    colors:{
        primary: "#27AE60",
        secondary: "#EB5757",
        negative: "#E60000",
        warning: "#FFCD07",
        sucess:"#168821",
        information:"#155BCB",
        gray:{
            0:"#F5F5F5",
            100:"#E0E0E0;",
            300:"#828282",
            600:"#333333"
        },
        red:{
            100: "#EB5757",
            200: "#E60000",
            
        },
        fonts:{
            Heading1: "Bold",
            Heading2: "Bold",
            Heading3: "Bold",
    
        }
    }

})
