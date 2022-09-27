pnpm build

cd docs/.vitepress/dist

git init

git checkout master

git add .

git commit -m 'deploy'

git remote add origin git@github.com:tgbf2674/mmqUtils-page.git

git push -f

cd ..
cd ..
cd ..
