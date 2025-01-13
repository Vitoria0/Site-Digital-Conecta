import { createTheme } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#FE7062',
		},
		secondary: {
			main: '#FE7062',
		},
		tertiary: {
			main: '#FE7062',
		},
		text: {
			primary: '#FE7062',
			secondary: '#FE7062',
			tertiary: '#FE7062',
		},
		background: {
			default: '#FE7062',
		},
	},
});

theme = responsiveFontSizes(theme);

export { theme };