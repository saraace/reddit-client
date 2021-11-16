export interface PostPreview {
	enabled: boolean;
	images: {
		source: {
			height: number;
			url: string;
			width: number;
		};
	}[];
}
