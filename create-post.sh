printf "What is Title? (ex: my-first-post) -> "
read TITLE
printf "When is post date? (ex: 2019-01-22) -> "
read POSTED_DATE

echo "$TITLE" | tr "[:upper:]" "[:lower:]"

if [$POSTED_DATE == ""];
then POSTED_DATE=`date +"%F"`
fi

POST_PATH="$POSTED_DATE-$TITLE"
echo $POST_PATH

echo `mkdir ./src/pages/$POST_PATH`
echo `touch ./src/pages/$POST_PATH/index.md`

INDEX_MD="./src/pages/$POST_PATH/index.md"

echo "---
path: '/$POST_PATH'
date: '${POSTED_DATE}T10:00:00.000Z'
title: '$TITLE'
featuredImage: ''
---" >> $INDEX_MD

echo "Title is $POST_PATH"