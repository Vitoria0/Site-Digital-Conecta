import { Button, Typography } from '@mui/material';

export const Secondary = ({ children, ...props }) => {
  const handleClick = () => {
    window.open('https://wa.me/5547992503931', '_blank');
  };

	return (
		<Button
onClick={handleClick}
			variant='contained'
			sx={{ 
display: {xs:'none', sm:'flex'},
fontFamily: 'Fredoka',
				px: {xs:1, sm:2, md:2.5, xl:3},
borderRadius: '5rem',
				py: {xs:0.5, sm:1, md:1.2},
color: '#FFF',
borderColor: '#FF6F28',
				transition: 'all 200ms ease-in-out',
				'&:hover': {
					transform: 'scale(1.03)',
borderColor: '#FF6F28',
				},
				'&:focus': {
					outline: 'none',
	borderColor: '#FF6F28',
				},
			}}
			{...props}
		>
			<Typography variant='p' color={'#FFF'} fontWeight={'bold'} sx={{fontSize:{xs: '0.3rem', sm: '0.5rem', md:'0.6rem',lg:'0.75rem',  xl:'0.8rem'}}}>
				{children}
			</Typography>
		</Button>
	);
};
