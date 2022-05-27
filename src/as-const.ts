// read only にしたい場合に as const を使うイメージ
export {};

let name = 'Shumpei';

name = 'Kikuta';

// Shun 型になる -> 定数扱いになる
let nickname = 'Shum' as const;
nickname = 'Shum';

// 定数扱い = Read only

let profile = {
  name: 'Shumpei',
  height: 184,
} as const;
// profile.name = 'Shun';
// profile.height = '185';
