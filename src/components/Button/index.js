import {Button as ContainerButton} from './styles';

function Button({children, ...props}) { //pega todos os itens e joga nas props. Evita que você fique especificando "onClick", "onChange" [...] várias vezes
    return <ContainerButton {...props}>{children}</ContainerButton>
}

export default Button;