import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../services/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider {...{ store }}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
