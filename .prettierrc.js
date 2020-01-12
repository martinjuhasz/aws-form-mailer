module.exports = {
	printWidth: 80,
	endOfLine: 'lf',
	overrides: [
		{
			files: '*.{ts,tsx}',
			options: {
				parser: 'typescript',
				singleQuote: true,
				trailingComma: 'all',
				useTabs: true,
				semi: false,
			},
		},
		{
			files: '*.js',
			options: {
				parser: 'babel',
				singleQuote: true,
				trailingComma: 'all',
				useTabs: true,
				semi: false,
			},
		},
		{
			files: '*.md',
			options: {
				parser: 'markdown',
				proseWrap: 'always',
			},
		},
		{
			files: '*.{yml,yaml}',
			options: {
				parser: 'yaml',
				proseWrap: 'always',
			},
		},
	],
}
