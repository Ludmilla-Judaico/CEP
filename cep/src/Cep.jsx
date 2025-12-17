import { useEffect, useState } from 'react'
import './App.css'
import Form from './form.jsx'

function Cep() {
  const [cep, setCep] = useState("")
  const [infos, setInfos] = useState({})
  const [erro, setErro] = useState(false)

  function catchCep(event){
    setCep(event.target.value)
  }

  useEffect(() => {
    try{
      async function info(c){
        if(c.length == 8){
          const url = await fetch("https://viacep.com.br/ws/" + c + "/json/")
          if(url.ok){
            const info = await url.json()
            setInfos(info)
            setErro(false)
          }else{
            setErro(true)
          }
        }else{
          setErro(true)
        }
      }
      info(cep)
    }catch(erro){
      console.log("ERRO")


    }
  }, [cep])

  return (
    <div>
      <h1>ENDEREÇO</h1>
      <Form catchCep={catchCep} infos={infos} erro={erro}/>
    </div>
  )
}

export default Cep
