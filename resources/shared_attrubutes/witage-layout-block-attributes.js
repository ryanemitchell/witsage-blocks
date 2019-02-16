const attributes = {
	blockVisibility: {
		type: "string",
		default: "show-for-all",
	},
	blockContrast: {
		type: 'string',
		default: 'witsage-block-light',
	},
	textAlignment: {
		type: 'string',
		default: '',
	},
	blockAlignment: {
		type: 'string',
		default: 'full',
	},
	blockBackgroundColor: {
		type: 'string',
		default: 'transparent',
	},
	blockOverlay: {
		type: "string",
		default: 'transparent',
	},
	blockParallax: {
		type: 'string',
		default: 'scroll',
	},
	blockOverlayType: {
		type: "string",
		default: 'overlay-none',
	},
	blockContentPadding: {
		type: "number",
		default: "0",
	},
	blockContentDisplay: {
		type: "string",
		default: "block",
	},
	backgroundImgURL: {
		type: 'string',
	},
	backgroundImgID: {
		type: 'number',
	},
	backgroundImgALT: {
		type: 'string',
	},
};
export default attributes;
