import * as C from './styles';

type Props = {
    name: string,
    url: string,
    onDelete: (name: string) => void
}

export const PhotoItem = ( {url, name, onDelete}: Props ) => {
    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
            <button onClick={() => onDelete(name)}>Excluir</button>
        </C.Container>
    )
}