import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		fontFamily: string;
		colors: {
			light100: string;
			light200: string;
			blue: string;
			white: string;
			text: string;
			lightText: string;
		};
	}
}
