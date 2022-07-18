import 'simplebar/src/simplebar.css'

import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { CssBaseline } from '@mui/material'
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'

import palette from './palette'
import typography from './typography'
import componentsOverride from './overrides'
import shadows, { customShadows } from './shadows'

export default function ThemeProvider(props){
  const { children } = props
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows,
    }),
    [],
  )

  const theme = createTheme(themeOptions)
  theme.components = componentsOverride(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
}
