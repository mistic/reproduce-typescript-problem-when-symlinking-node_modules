(async () => {
	const Path = require('path');
	const execa = require('execa');
	const REF_CONFIG_PATHS = [Path.resolve(__dirname, 'tsconfig.refs.json')];

	for (const path of REF_CONFIG_PATHS) {
		const relative = Path.relative(__dirname, path);
		await execa(require.resolve('typescript/bin/tsc'), ['-b', relative, '--pretty'], {
	  		cwd: __dirname,
		});
	}
})();
