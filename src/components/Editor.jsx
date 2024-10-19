import { Flex, Textarea } from '@chakra-ui/react'
import { HamburgerIcon  , MinusIcon} from '@chakra-ui/icons'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'


export default function Editor({title , id , onexpand , expand , run , onchange}) {

  return (
    <>
      <Flex width='100%' flexGrow='1' direction='column' bg='blackAlpha.900' height={expand ? '100vh' : '142.33px'} borderRadius={5} transition="all 0.8s ease-in-out" >
        <Flex align='center' justify='space-between' color='whiteAlpha.600' px={1}>
            {title}
            
            <Button size='xs' onClick={()=>onexpand(id)} color='whiteAlpha.600'>
            {
              !expand ? <HamburgerIcon/> : <MinusIcon/>
            }
            </Button>
            
        </Flex>
        
            <Textarea color='white' width='100%' bg='rgb(55,65,64)' flexGrow={1} onChange={(e) => onchange(e.target.value)} onKeyUp={run} borderRadius={5} transition="all 1s ease-in-out" border="none" outline="none" p={2} letterSpacing='2px' spellCheck={false}
              css={{
                '::-webkit-scrollbar': {
                  width: '8px',
                  background: 'transparent',
                },
                '::-webkit-scrollbar-track': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                },
                '::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '10px',
                  border: '2px solid transparent',
                  transition: 'background-color 0.3s ease',
                },
                '::-webkit-scrollbar-thumb:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                },
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255, 255, 255, 0.5) transparent',
              }}
              />
      </Flex>
    </>
  )
}
