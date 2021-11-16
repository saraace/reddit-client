import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Theme from "../containers/Theme/Theme";
import { store } from "../services/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider {...{ store }}>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</Provider>
	);
}

export default MyApp;
