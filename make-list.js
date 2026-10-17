// photos 폴더의 jpg 파일 이름을 읽어 photos.json 을 만든다.
// 사용법: node make-list.js
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'photos');

if (!fs.existsSync(dir)) {
  console.error('photos 폴더를 찾을 수 없습니다: ' + dir);
  process.exit(1);
}

const files = fs.readdirSync(dir)
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort((a, b) => a.localeCompare(b, 'ko'));

fs.writeFileSync(path.join(__dirname, 'photos.json'), JSON.stringify(files, null, 2), 'utf8');
console.log('photos.json 생성 완료: ' + files.length + '장');
