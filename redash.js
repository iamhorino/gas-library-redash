/**
 * Redashをインスタンス化するためのファクトリメソッド
 * @param { string } api RedashAPIのURLを指定
 * @return { Redash }
 */
function create(api) {
  return new Redash(api);
}

(function(global){
  const Redash = (function() {
    function Redash(api) {
      this.api = api;
      this.result = execQuery(this.api);
    }

    const execQuery = (api) => {
      const res = UrlFetchApp.fetch(api);
      const result = Utilities.parseCsv(res.getContentText("UTF-8"));

      return result;
    }

    /**
    * クエリ結果を取得
    */
    Redash.prototype.getResult = function() {
      return this.result;
    };

    /**
    * クエリ結果のカラム名だけ取得
    */
    Redash.prototype.getHeader = function() {
      return this.result[0];
    };

    /**
    * クエリ結果のレコードだけ取得
    */
    Redash.prototype.getData = function() {
      return this.result.slice(1);
    };

    return Redash;
  })();
  global.Redash = Redash;
}) (this);