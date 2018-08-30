var cards = [
  ['英語', 'えいご', 'English'],
  ['掲示板', 'けいじばん', 'Bulletin board'],
  ['故障', 'こしょう', 'Out of order'],
  ['宅急便', 'たっきゅうびん', 'Delivery service'],
  ['困る', 'こまる', 'To be at a loss'],
  ['料金', 'りょうきん', 'Fare, fee'],

  ['危険', 'きけん', 'Dangerous'],
  ['営業中', 'えいぎょうちゅう', 'Open for business hours'],
  ['準備', 'じゅんび', 'Preparation'],
  ['非常口', 'ひじょうぐち', 'Emergency exit'],
  ['禁止', 'きんし', 'Prohibition'],
  ['会社', 'かいしゃ', 'Company'],

  ['押す', 'おす', 'To push/stamp'],
  ['会議', 'かいぎ', 'Meeting'],
  ['軽い', 'かるい', 'Light weight'],
  ['受付', 'うけつけ', 'Receptionist'],
  ['元気', 'げんき', 'Healthy, vigor'],
  ['試験', 'しけん', 'Exam'],

  ['有名', 'ゆうめい', 'Famous'],
  ['祝日', 'しゅくじつ', 'National holiday'],
  ['専攻', 'せんこう', 'Major'],
  ['難しい', 'むずかしい', 'Difficult'],
  ['年齢', 'ねんれい', 'Age'],
  ['国籍', 'こくせき', 'Nationality'],

  ['休診', 'きゅうしん', 'Closed: the doctor is not seeing patients'],
  ['予約', 'よやく', 'Reservation'],
  ['相談', 'そうだん', 'To consult'],
  ['内線', 'ないせん', 'Extension (phone number)'],
  ['医院', 'いいん', 'Clinic'],

  ['映画', 'えいが', 'Movie'],
  ['料理', 'りょうり', 'Cooking, cuisine'],
  ['旅行', 'りょこう', 'Traveling'],
  ['歩く', 'あるく', 'To walk'],
  ['誘う', 'さそう', 'To invite'],
  ['教育', 'きょういく', 'Education'],
  ['喫茶店', 'きっさてん', 'Coffee shop'],

  ['薬', 'くすり', 'Medicine'],
  ['結婚', 'けっこん', 'Marriage'],
  ['痛い', 'いたい', 'Painful'],
  ['絵', 'え', 'Picture'],
  ['少し', 'すこし', 'A little'],
  ['修理', 'しゅうり', 'Repair'],
  ['病院', 'びょういん', 'Hospital'],
  
  ['食堂', 'しょくどう', 'Cafeteria'],
  ['授業', 'じゅぎょう', 'Class'],
  ['お願い', 'おねがい', 'Request'],
  ['コピー機', 'コピーき', 'Copy machine'],
  ['手紙', 'てがみ', 'Letter'],
  ['全部', 'ぜんぶ', 'All, total']
].map(cardTemplate);

function deal() {
  document.querySelector('#cards').innerHTML = shuffle(cards).slice(0,10).join('');
}
deal();

function cardTemplate ([kanji, hiragana, english]) {
  return `
    <input id="done-${kanji}" type="checkbox" />
    <input id="show-${kanji}" type="checkbox" />
    <div class="card">
      <label for="show-${kanji}">
        <label for="done-${kanji}">
          <p class="kanji answer">${kanji}</p>
          <p class="hiragana answer">${hiragana}</p>
          <p class="english answer">${english}</p>
        </label>
      </label>
    </div>`;
}

// https://stackoverflow.com/a/2450976/1253312
function shuffle(array) {
  var currentIndex = array.length, randomIndex;
  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
