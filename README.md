## gas-library-redash
- gas-library-redashはGoogleAppsScriptのライブラリです
- Redashで定期実行しているクエリをGoogleSpreadSheetsに自動で反映したい場合などに使うことを想定しています

## Installation
スクリプトID: xxxxxx

## How to use
1. `gas-library-redash`ライブラリを自分のプロジェクトにインポートします
2. RedashからQueryAPIをコピーします
3. APIを引数に取ってRedashをインスタンス化します
4. `getResult`関数を使うと、クエリ結果を取得できます

```js
function myFunction() {
  const api = "http://00.00.00.00/api/queries/00/results.csv";
  const redash = Redash.create(api);
  const result = redash.getResult();
}
```

## Example
```sql:サンプルクエリ
SELECT
  id,
  title,
  body
FROM
  articles
LIMIT
  2
```
```js:GAS
function myFunction() {
  const api = "http://00.00.00.00/api/queries/00/results.csv";
  const redash = Redash.create(api);
  const result = redash.getResult();
  const header = redash.getHeader();
  const data = redash.getData();
}
```
```js:Result
[
  ['id', 'title', 'body'],
  [1, 'タイトル①', '内容①'],
  [2, 'タイトル②', '内容②']
],
[
  ['id', 'title', 'body']
],
[
  [1, 'タイトル①', '内容①'],
  [2, 'タイトル②', '内容②']
]
```

## Document
