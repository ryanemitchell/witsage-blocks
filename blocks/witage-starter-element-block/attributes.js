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
		default: '',
	},
	richMessage: {
		type: 'array',
		source: 'children',
		selector: '.rich-message',
	},

};
export default attributes;
