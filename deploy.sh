pnpm build

cd doc/.vitepress/dist

git init

git add .

git commit -m 'deploy'

git push -f git@github.com:tgbf2674/mmqUtils-page.git

cd -
