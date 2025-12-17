function Form(props){
    return(
        <form>
            <label
                htmlFor="cep"
            >
                CEP:
            </label>
            <input
                name="cep"
                id="cep"
                type="text"
                onChange={() => {props.catchCep}}
            >
            </input>
            <p>{(props.erro) ? "CPF inválido" : null}</p>

            <label
                htmlFor="rua"
            >
                Rua: 
            </label>
            <input
                value={props.infos.rua || "rua"}
                name="rua"
                id="rua"
                type="text"
            >
            </input>

            <label
                htmlFor="bairro"
            >
                Bairro: 
            </label>
            <input
                value={props.infos.bairro || "bairro"}
                name="bairro"
                id="bairro"
                type="text"
            >
            </input>
        </form>
    )
}

export default Form