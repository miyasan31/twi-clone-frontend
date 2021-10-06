# 開発メモ

## 修正必要箇所

### /home, /[userId]

- ユニオン型でツイートとリツートを取得できるように API を組まないといけない

### /follower

- フォロー状態がわかるようにバックエンド側で状態を取得

### /[userId], /[userId]/retweets, /[userId]/likes, /[userId]/comments

✅ where userId = で取得できるような Query にする

### /home, /[userId], /[userId]/retweets, /[userId]/likes, /[userId]/comments

- 自分がいいねしてるかどうかの状態を取得しないといけない
- いいねを全件取得して比べるのは良くないらから、バックエンドで照合させて論理型を取得する感じかな
- カウントと同時に検索するので行こう
