import { useEffect, useState } from 'react'
import './App.css'
import Form from './form.jsx'

function Cep() {
  const [cep, setCep] = useState("")
  const [infos, setInfos] = useState({})
  const [erro, setErro] = useState(false)
  const [okErro, setOkErro] = useState(false)

  function catchCep(event){
    setCep(event.target.value)
  }
  useEffect(() => {
    try{
      async function info(c){
        const url = await fetch("https://viacep.com.br/ws/" + c + "/json/")
        if(url.ok){
          const info = await url.json()
          setInfos(info)
        }else{
          setOkErro(true)
        }
        setErro(false)
      }
      info(cep)
    }catch(erro){
      throw new Error(`Erro na api! Erro ${erro}`);
      
    }
  }, [cep])

  function isWrong(c){
    if(c.length >= 0 && c.length <= 7 || c.length > 8){
      setErro(true)
      setInfos({})
    }else if(okErro){
      setErro(true)
    }else{
      setErro(false)
    }
  }

  function toFalse(){
    setErro(false)
  }

  return (
    <div>
      <h1>ENDEREÇO</h1>
      <Form catchCep={catchCep} infos={infos} erro={erro} isWrong={isWrong} cep={cep} toFalse={toFalse}/>
    </div>
  )
}

export default Cep
