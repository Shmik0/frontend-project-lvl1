install:
	npm ci
brain-games:
	node bin/games/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint . 
brain-even: 
	node bin/games/brain-even.js
brain-calc:
	node bin/games/brain-calc.js		
	