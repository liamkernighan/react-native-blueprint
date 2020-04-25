module.exports = {
	root: true,
	extends: [
		'@react-native-community',
		'plugin:sonarjs/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		'project': './tsconfig.json',
	},
	plugins: [
		'react',
		'promise',
		'optimize-regex',
		'@typescript-eslint',
		'prefer-arrow',
		'import',
		'sonarjs',
	],
  	rules: {

		'prettier/prettier': 0,

		//#region common rules
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'comma-style': 'error',
		'curly': ['error', 'all'],
		'eqeqeq' : 'error',
		'func-style': ['error', 'expression'],
		'generator-star-spacing': ['error', { 'before': false, 'after': true}],
		'indent': ['error', 'tab', ],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'new-parens': 'error',
		'no-alert': 'warn',
		'no-bitwise': 'warn',
		'no-confusing-arrow': 'error',
		'no-console': 'warn',
		'no-duplicate-imports': ['error', { 'includeExports': true }],
		'no-else-return': ['error', { 'allowElseIf': false }],
		'no-implicit-coercion': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'warn',
		'no-multiple-empty-lines': 'error',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow': 'error',
		'no-tabs': ['error', { 'allowIndentationTabs': true }],
		'no-template-curly-in-string': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undefined': 'error',
		'no-unneeded-ternary': 'error',
		'no-unused-expressions': 'error',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-whitespace-before-property': 'error',
		'no-var': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-spacing': ['error', 'always'],
		'object-shorthand': ['error', 'always'],
		'prefer-arrow-callback': 'warn',
		'radix': 'error',
		'prefer-destructuring': 'error',
		'prefer-promise-reject-errors': 'error',
		'quotes': ['error', 'single'],
		'rest-spread-spacing': ['error', 'never'],
		'semi': 'off',
		'semi-spacing': 'error',
		'sort-imports': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{
				'anonymous': 'always',
				'named': 'never',
				'asyncArrow': 'always'
			}
		],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': ['error', 'always'],
		'switch-colon-spacing': 'error',
		'template-curly-spacing': 'error',

		//#endregion

		//#region typescript plugin rules

		'@typescript-eslint/array-type': ['error', { 'default': 'array' }],

		'@typescript-eslint/no-extra-parens': ['error'], // Disallow unnecessary parentheses
		'@typescript-eslint/semi': ['error', 'never'], // Require or disallow semicolons instead of ASI
		'@typescript-eslint/member-delimiter-style': ['error', { 'multiline': { 'delimiter': 'none' } }], // Require a specific member delimiter style for interfaces and type literals
		'@typescript-eslint/member-ordering': 'warn', // Require a consistent member declaration order
	  '@typescript-eslint/no-magic-numbers': [
		  'error',
		  {
				'ignoreNumericLiteralTypes': true,
				'ignoreEnums': true,
				'enforceConst': true,
				'ignoreReadonlyClassProperties': true,
				'ignore': [0, 24, 60, 1000]
		  }
	  ], // Disallows magic numbers
	  '@typescript-eslint/brace-style': ['error', '1tbs'], // Enforce consistent brace style for blocks
	  '@typescript-eslint/indent': ['error', 'tab', { 'SwitchCase': 1 }], // Enforce consistent indentation
	  '@typescript-eslint/quotes': ['error', 'single', { 'avoidEscape': true }], // Enforce the consistent use of either backticks, double, or single quotes
	  '@typescript-eslint/func-call-spacing': ['error', 'never'], // Require or disallow spacing between function identifiers and their invocations
	  '@typescript-eslint/no-useless-constructor': 'error', // Disallow unnecessary constructors
	  '@typescript-eslint/prefer-for-of': 'warn', // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
	  '@typescript-eslint/no-parameter-properties': 'error', // Disallow the use of parameter properties in class constructors
	  '@typescript-eslint/no-unnecessary-type-arguments': 'warn', // Warns if an explicitly specified type argument is the default for that type parameter
	  '@typescript-eslint/prefer-function-type': 'warn', // Use function types instead of interfaces with call signatures
	  '@typescript-eslint/prefer-readonly': 'warn', // Requires that private members are marked as readonly if they're never modified outside of the constructor
	  '@typescript-eslint/no-explicit-any': 'off',
	  '@typescript-eslint/explicit-function-return-type': 'off',

	  '@typescript-eslint/naming-convention': [
		'error',
			{ 'selector': 'variableLike', 'format': ['camelCase'] },
			{
				'selector': 'interface',
				'format': ['PascalCase'],
				'prefix': ['I'],
			},
			{
				'selector': 'memberLike',
				'modifiers': ['private', 'readonly'],
				'format': ['camelCase'],
			},
	  ],
	  '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_$' }],

	  // TODO: waiting for this rule to be fixed for TS
	  // 'no-invalid-this': 'error', // disallow this keywords outside of classes or class-like objects
	  // https://github.com/typescript-eslint/typescript-eslint/issues/491
	  // https://github.com/typescript-eslint/typescript-eslint/issues/604

	  //#endregion

		//#region react plugin rules

		'react/no-set-state': 'error',
		'react/no-danger': 'error',
		'react/no-deprecated': 'error',
		'react/no-this-in-sfc': 'error',
		'react/prefer-stateless-function': 'error',
		'react/jsx-filename-extension': ['error', { 'extensions': ['.tsx'] }],
		'react/jsx-no-useless-fragment': 'error',
		'react/jsx-pascal-case': 'error',

		//#endregion

		//#region other plugins

		'import/no-default-export': 'error',
		'import/no-anonymous-default-export': 'error',
		'optimize-regex/optimize-regex': 'warn',
		'prefer-arrow/prefer-arrow-functions': 'error',
		'promise/prefer-await-to-then': 'error',

		//#endregion

  }
};
