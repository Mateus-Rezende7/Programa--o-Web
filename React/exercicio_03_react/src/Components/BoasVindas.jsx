

import PropTypes from 'prop-types';

const BoasVindas = (props) => {
    return (
        <article>
            <h2 style={{color :'#36bba6'}}>Olá, {props.nome}, seja bem-vindo!</h2>
            <p style={{color:'green',padding:'1vh',margin:'0',  border:'5px solid', borderRadius:'5px'}}>Palmeiras</p>
        </article>
    );
};

BoasVindas.defaultProps = {
    nome: 'Nome padrão',
};

BoasVindas.propTypes = {
    nome: PropTypes.string,
}

export default BoasVindas