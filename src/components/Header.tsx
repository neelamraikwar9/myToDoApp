
type HeaderProp = {
    title: string; 
}

const Header : React.FC<HeaderProp> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )

}

export default Header; 