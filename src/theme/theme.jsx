import { createTheme } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#FF6F28',
		},
		secondary: {
			main: '#FF6F28',
		},
		tertiary: {
			main: '#FF6F28',
		},
		text: {
			primary: '#FF6F28',
			secondary: '#FF6F28',
			tertiary: '#FF6F28',
		},
		background: {
			default: '#FF6F28',
		},
	},
});

theme = responsiveFontSizes(theme);

export { theme };