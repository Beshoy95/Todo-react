import React from 'react';
import { ChakraProvider,extendTheme,theme ,Box ,CSSReset } from "@chakra-ui/react"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story)=>(
   <ChakraProvider theme={theme}>
     <CSSReset/>
     <Box>
       <Story/>
     </Box>
  </ChakraProvider>
  )
  ]