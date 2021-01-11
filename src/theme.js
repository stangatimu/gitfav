import { createMuiTheme } from "@material-ui/core/styles";
// app theme
export const basic_green = "#14A892";
export const light_green = "#89D3C8";
export const dark_green = "#0e907c";
const theme = createMuiTheme({
	palette: {
		primary: {
			main: basic_green,
			light: light_green,
			dark: dark_green,
		},
	},
});

export default theme;
