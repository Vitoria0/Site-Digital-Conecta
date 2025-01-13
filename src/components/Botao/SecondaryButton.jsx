import { Button, Typography } from '@mui/material';

export const Secondary = ({ children, ...props }) => {
  const handleClick = () => {
    window.open('https://w.app/OVacNf', '_blank');
  };

	return (
		<Button
onClick={handleClick}
			variant='outlined'
			sx={{ 
display: {xs:'none', sm:'flex'},
fontFamily: 'Poppins',
				px: {xs:1, sm:2, md:2.5, xl:3},
borderRadius: '5rem',
				py: {xs:0.5, sm:1, md:1.2},
color: '#FE7062',
borderColor: '#FE7062',
				transition: 'all 200ms ease-in-out',
				'&:hover': {
					transform: 'scale(1.03)',
borderColor: '#FE7062',
				},
				'&:focus': {
					outline: 'none',
	borderColor: '#FE7062',
				},
			}}
			{...props}
		>
			<Typography variant='p' color={'#FE7062'} fontWeight={'bold'} sx={{fontSize:{xs: '0.3rem', sm: '0.5rem', md:'0.6rem',lg:'0.75rem',  xl:'0.8rem'}}}>
				{children}
			</Typography>
		</Button>
	);
};
