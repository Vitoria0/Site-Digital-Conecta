import { Link } from "@mui/material"

export const LinkMenu = ({to, text}) => {
    return (
        <Link onClick={to}  sx={{textDecoration: 'none', color: '#FFF', fontSize:{xs: '0.5rem', sm: '0.5rem', md:'0.8rem', lg:'1rem', xl:'1rem'}, transition: 'all 200ms ease-in-out', fontFamily: 'Fredoka', '&:hover': {color: '#FF6F28', cursor: 'pointer'}}}>{text}</Link>)
}