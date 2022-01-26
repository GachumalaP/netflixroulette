interface FooterProps {
    children: JSX.Element | JSX.Element[]
}

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <>{props.children}</>
    );
}

export default Footer;
