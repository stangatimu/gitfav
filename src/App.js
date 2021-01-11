import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./routes";
// theme
import theme from "./theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes />
			</Router>
		</ThemeProvider>
	);
}

export default App;
