import { Box } from '@mui/material'
import { Flex, Spacer } from '@chakra-ui/react'
import Editor from './Editor'
import { useState , useEffect } from 'react'

function App() {
  const [expandId , setExpandId] = useState('');
  const [htmlCont, sethtmlCont] = useState('');
  const [cssCont , setcssCont] = useState('');
  const [jsCont , setjsCont] = useState('');
  //Checking
    
  function expandHandler(id) {
    expandId === id ? setExpandId('') : setExpandId(id)
  }
  function run() {
    const output = document.getElementById('output');
      const fullCont = htmlCont + `<style>${cssCont}</style>` + `<script>${jsCont}</script>`;
      output.srcdoc = fullCont;
      console.log(output.srcdoc);
      
  }
  /* useEffect(()=>{
    
    output.srcdoc = '<h1><h1>Hello</h1></h1>';
  } ,[]) */
  

  return (
    <>
     <Box display='flex' height='100vh' width='100vw'  flexDirection='row' padding={2} bgcolor='#2A2C2B'>
      <Flex direction='column' width='50%' height='100%' mr='10px'>
        <Editor title='HTML' id = 'html' onexpand={expandHandler} expand={expandId === 'html'} run={run}  onchange={sethtmlCont} />
        <Editor title='CSS' id = 'css' onexpand={expandHandler} expand={expandId === 'css'}  run={run} onchange={setcssCont} />
        <Editor title='JS' id = 'js' onexpand={expandHandler} expand={expandId === 'js'}  run={run} onchange={setjsCont} />
      </Flex>
      <Flex direction='row'  width='50%' height='100%' bg='white' borderRadius={5}>
        <iframe id='output' width='100%'/>
      </Flex>
     </Box>
    </>
  )
}

export default App
