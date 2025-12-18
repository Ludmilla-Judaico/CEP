function Form(props){
    return(
        <form onClick={() => {props.isWrong(props.cep)}}>
{/*----------CEP----------- */}
            <input
                type="text"
                placeholder="CEP"
                onChange={(event) => {props.catchCep(event)}}
                onClick={() => {props.toFalse()}}
                id={(props.erro) ? "inputError" : ""}
            >
            </input>
            <p id="error">{(props.erro) ? "CEP inválido" : ""}</p>
{/*------------RUA-------------- */}
            <input
                value={props.infos.logradouro || ""}
                placeholder="Rua"
                type="text"
            >
            </input>

{/*------------NÚMERO----------- */} 
            <input
                placeholder="Número"
                type="text"
            >
            </input>
{/*------------BAIRRO-------------- */}
            <input
                value={props.infos.bairro || ""}
                placeholder="Bairro"
                type="text"
            >
            </input>
{/*------------ESTADO---------- */}
            <input
                value={props.infos.estado || ""}
                placeholder="Estado"
                type="text"
            >
            </input>
{/*----------CIDADE---------- */}
            <input
                value={props.infos.localidade || ""}
                placeholder="Cidade"
                type="text"
            >
            </input>

            {/* <button onClick={() => {props.isWrong(props.cep)}}></button> */}
        </form>
    )
}

export default Form