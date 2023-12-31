import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import React from "react"

type ThemeProp = { 
    children: JSX.Element
}

export enum themePalette  {
    BGD = "#12181b",
    LIME = "#C8FA5F",
    FONT_GOLBAL = "'JetBrains Mono', monospace",
    //Alert style
    ERROR_MAIN="#f44336",
    BG_ERROR_MAIN="rgba(244,67,54,0.1)",
    SUCCESS_MAIN ="#66bb6a",
    BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)"


}


const themeDark = createTheme({
    palette:{
        mode:'dark',
        background:{
            default:themePalette.BGD
        },
        primary:{
            main:themePalette.LIME
        }
    },

    typography:{
        fontFamily: themePalette.FONT_GOLBAL
    },

    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform:'none',
                    boxShadow: 'none',
                    borderRadius: '0.5em'
                }
            }
        },
        MuiAlert:{
            defaultProps:{
                style:{
                    borderRadius:'0.8em',
                    fontSize:'1em'
                }
            },
            styleOverrides:{
                standardError:{
                    border:`1px solid ${themePalette.ERROR_MAIN}`,
                    background:themePalette.BG_ERROR_MAIN
                },
                standardSuccess:{
                    border: `1px solid ${themePalette.SUCCESS_MAIN}`,
                    background: themePalette.BG_SUCCESS_MAIN
                }
            }
        }
    }
})

const ThemeConfig:React.FC<ThemeProp> = ({children}) => {
  return (
    <ThemeProvider theme={themeDark}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}

export default ThemeConfig