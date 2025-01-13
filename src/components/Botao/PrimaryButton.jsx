import { Button, Typography } from '@mui/material';


export const Primary = ({ children, noShadow, metodo, ...props }) => {
	return (
		<Button
			onClick={metodo}
			variant='contained'
			sx={{
				px: {xs:1, sm:1.5, md:2, xl:3},
				py: {xs:1, sm:1, md:1.5},
				borderRadius: '10px',
				boxShadow:noShadow?'none': '0px 10px 10px #FE706270',
				transition: 'all 200ms ease-in-out',
				'&:hover': {
					border: 0,
					transform: 'scale(1.03)',
				},
				'&:focus': {
					outline: 'none',
				},
			}}
			{...props}
		>
			<Typography variant='p' color={'#FFF'} fontWeight={'bold'} sx={{fontSize:{xs: '0.6rem', sm: '0.8rem', md:'0.7rem',lg:'0.8rem',  xl:'0.8rem'}}}>
				{children}
			</Typography>
		</Button>
	);
};
