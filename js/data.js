// Country data for the global address generator
const COUNTRIES = {
  US: {
    name: 'United States',
    flag: '🇺🇸',
    code: 'US',
    phoneCode: '+1',
    currency: '$',
    phoneFormat: () => {
      const area = rand(200, 999);
      const p1 = rand(200, 999);
      const p2 = rand(1000, 9999);
      return `+1 ${area} ${p1} ${p2}`;
    },
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark'],
      female: ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Barbara', 'Elizabeth', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Lisa', 'Nancy', 'Betty', 'Margaret', 'Sandra']
    },
    lastNames: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'],
    cities: [
      { city: 'New York', state: 'NY', zips: ['10001','10002','10003'], streets: ['Broadway','5th Avenue','Wall Street','Park Avenue','Madison Avenue'], districts: ['Manhattan','Brooklyn','Queens'], areaCode: '212' },
      { city: 'Los Angeles', state: 'CA', zips: ['90001','90012','90024'], streets: ['Hollywood Boulevard','Sunset Boulevard','Wilshire Boulevard','Rodeo Drive','Venice Boulevard'], districts: ['Hollywood','Beverly Hills','Santa Monica'], areaCode: '213' },
      { city: 'Chicago', state: 'IL', zips: ['60601','60602','60611'], streets: ['Michigan Avenue','State Street','Lake Shore Drive','Wacker Drive','Clark Street'], districts: ['The Loop','Lincoln Park','Wicker Park'], areaCode: '312' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, ${state} ${zip}`,
    idLabel: 'SSN',
    idFormat: () => `${String(rand(100, 999))}-${String(rand(10, 99))}-${String(rand(1000, 9999))}`,
    salaryRange: [3000, 12000],
  },
  GB: {
    name: 'United Kingdom',
    flag: '🇬🇧',
    code: 'GB',
    phoneCode: '+44',
    currency: '£',
    phoneFormat: () => `+44 ${rand(1000, 9999)} ${rand(100000, 999999)}`,
    zipFormat: () => {
      const letters = 'ABCDEFGHIJKLMNOPRSTUVWXY';
      const l1 = letters[rand(0, letters.length - 1)];
      const l2 = letters[rand(0, letters.length - 1)];
      return `${l1}${l2}${rand(1, 9)} ${rand(1, 9)}${letters[rand(0, letters.length - 1)]}${letters[rand(0, letters.length - 1)]}`;
    },
    firstNames: {
      male: ['Oliver', 'George', 'Harry', 'Jack', 'Jacob', 'Noah', 'Charlie', 'Muhammad', 'Thomas', 'Oscar', 'William', 'James', 'Henry', 'Alfie', 'Freddie'],
      female: ['Olivia', 'Amelia', 'Isla', 'Ava', 'Emily', 'Isabella', 'Mia', 'Poppy', 'Ella', 'Lily', 'Grace', 'Sophia', 'Evie', 'Sophie', 'Charlotte']
    },
    lastNames: ['Smith', 'Jones', 'Williams', 'Taylor', 'Brown', 'Davies', 'Evans', 'Wilson', 'Thomas', 'Roberts', 'Johnson', 'Lewis', 'Walker', 'Robinson', 'Wood', 'Thompson', 'White', 'Watson', 'Jackson', 'Wright'],
    cities: [
      { city: 'London', state: 'England', zips: ['SW1A 1AA','EC1A 1BB','W1A 0AX'], streets: ['Oxford Street','Baker Street','Piccadilly','Regent Street','Bond Street'], districts: ['Westminster','Kensington','Camden'], areaCode: '020' },
      { city: 'Manchester', state: 'England', zips: ['M1 1AA','M2 3AB','M4 1HQ'], streets: ['Market Street','Deansgate','Oxford Road','Piccadilly Gardens','Portland Street'], districts: ['City Centre','Salford','Trafford'], areaCode: '0161' },
      { city: 'Edinburgh', state: 'Scotland', zips: ['EH1 1AA','EH2 2AB','EH3 5AT'], streets: ['Princes Street','Royal Mile','George Street','Leith Walk','Morningside Road'], districts: ['Old Town','New Town','Leith'], areaCode: '0131' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, ${zip}, ${state}`,
    idLabel: 'NI Number',
    idFormat: () => {
      const l = 'ABCDEFGHIJKLMNOPRSTUVWXY';
      return `${l[rand(0,l.length-1)]}${l[rand(0,l.length-1)]} ${rand(100000,999999)} ${l[rand(0,l.length-1)]}`;
    },
    salaryRange: [2500, 10000],
  },
  CN: {
    name: 'China',
    flag: '🇨🇳',
    code: 'CN',
    phoneCode: '+86',
    currency: '¥',
    phoneFormat: () => `+86 1${['3','4','5','7','8'][rand(0,4)]}${rand(100000000, 999999999)}`,
    zipFormat: () => String(rand(100000, 999999)),
    firstNames: {
      male: ['伟', '强', '磊', '军', '勇', '涛', '超', '明', '建', '峰', '杰', '鑫', '博', '浩', '宇'],
      female: ['芳', '娜', '敏', '静', '秀英', '慧', '艳', '娟', '婷', '丽', '燕', '玲', '雪', '洁', '梅']
    },
    lastNames: ['王', '李', '张', '刘', '陈', '杨', '黄', '赵', '吴', '周', '徐', '孙', '马', '朱', '胡', '郭', '何', '高', '林', '郑'],
    cities: [
      { city: '北京', state: '', zips: ['100001','100020','100080'], streets: ['长安街','王府井大街','西单大街','朝阳路','建国门外大街'], districts: ['东城区','西城区','朝阳区'], areaCode: '010' },
      { city: '上海', state: '', zips: ['200001','200010','200025'], streets: ['南京路','淮海路','人民大道','四川北路','外滩'], districts: ['黄浦区','浦东新区','静安区'], areaCode: '021' },
      { city: '广州', state: '广东省', zips: ['510000','510010','510095'], streets: ['天河路','北京路','中山大道','越秀路','环市东路'], districts: ['天河区','越秀区','海珠区'], areaCode: '020' },
    ],
    streetAddress: (num, street, city, zip, state) => `${state}${city}市${street}${num}号`,
    idLabel: '身份证号',
    idFormat: () => {
      const provinces = ['11', '12', '13', '14', '15', '21', '22', '23', '31', '32', '33', '34', '35', '36', '37', '41', '42', '43', '44', '45'];
      const prov = provinces[rand(0, provinces.length-1)];
      const city = String(rand(1, 9)).padStart(2, '0');
      const district = String(rand(1, 9)).padStart(2, '0');
      const year = rand(1960, 2000);
      const month = String(rand(1, 12)).padStart(2, '0');
      const day = String(rand(1, 28)).padStart(2, '0');
      const seq = String(rand(100, 999));
      const checkDigits = '0123456789X';
      const check = checkDigits[rand(0, checkDigits.length-1)];
      return `${prov}${city}${district}${year}${month}${day}${seq}${check}`;
    },
    salaryRange: [5000, 30000],
  },
  JP: {
    name: 'Japan',
    flag: '🇯🇵',
    code: 'JP',
    phoneCode: '+81',
    currency: '¥',
    phoneFormat: () => `+81 ${rand(10, 99)}-${rand(1000, 9999)}-${rand(1000, 9999)}`,
    zipFormat: () => `${String(rand(100, 999))}-${String(rand(1000, 9999))}`,
    firstNames: {
      male: ['大翔', '蓮', '悠真', '陽翔', '湊', '結翔', '樹', '朝陽', '晴', '颯', '翔', '海', '大和', '葵', '律'],
      female: ['陽菜', '凜', '結菜', '紬', '杏', '葵', '咲良', '美羽', '莉子', '心春', '花', '桃', '優', '愛', '澪']
    },
    lastNames: ['佐藤', '鈴木', '高橋', '田中', '伊藤', '渡辺', '山本', '中村', '小林', '加藤', '吉田', '山田', '佐々木', '山口', '松本', '井上', '木村', '林', '斉藤', '清水'],
    cities: [
      { city: '東京', state: '東京都', zips: ['100-0001','101-0021','102-0082'], streets: ['銀座通り','新宿大通り','渋谷センター街','池袋西口','秋葉原駅前'], districts: ['千代田区','新宿区','渋谷区'], areaCode: '03' },
      { city: '大阪', state: '大阪府', zips: ['530-0001','542-0076','556-0011'], streets: ['御堂筋','心斎橋筋','なんば大通り','天王寺通り','北堀江'], districts: ['北区','中央区','浪速区'], areaCode: '06' },
      { city: '名古屋', state: '愛知県', zips: ['460-0001','461-0001','462-0819'], streets: ['錦通','大津通り','広小路通り','栄通','久屋大通'], districts: ['中区','東区','千種区'], areaCode: '052' },
    ],
    streetAddress: (num, street, city, zip, state) => `〒${zip} ${state}${city}市${street}${num}丁目`,
    idLabel: 'マイナンバー',
    idFormat: () => String(rand(100000000000, 999999999999)),
    salaryRange: [200000, 800000],
  },
  KR: {
    name: 'South Korea',
    flag: '🇰🇷',
    code: 'KR',
    phoneCode: '+82',
    currency: '₩',
    phoneFormat: () => `+82 ${rand(10, 99)}-${rand(1000, 9999)}-${rand(1000, 9999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['민준', '서준', '도윤', '예준', '시우', '하준', '지호', '준서', '준우', '현우', '지훈', '건우', '우진', '선호', '서진'],
      female: ['서연', '서윤', '지우', '서현', '하은', '하윤', '민서', '지유', '윤서', '채원', '수아', '지아', '지민', '아린', '예은']
    },
    lastNames: ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임', '한', '오', '서', '신', '권', '황', '안', '송', '류', '전'],
    cities: [
      { city: '서울', state: '서울특별시', zips: ['04524','06141','03080'], streets: ['강남대로','테헤란로','종로','세종대로','을지로'], districts: ['강남구','종로구','중구'], areaCode: '02' },
      { city: '부산', state: '부산광역시', zips: ['48058','47012','49200'], streets: ['해운대로','중앙대로','광복로','동래로','사직로'], districts: ['해운대구','중구','동래구'], areaCode: '051' },
      { city: '인천', state: '인천광역시', zips: ['22100','21565','22300'], streets: ['경인로','인하로','부평대로','주안로','송도대로'], districts: ['중구','부평구','연수구'], areaCode: '032' },
    ],
    streetAddress: (num, street, city, zip, state) => `${state} ${city} ${street} ${num}`,
    idLabel: '주민등록번호',
    idFormat: () => {
      const year = rand(60, 99);
      const month = String(rand(1, 12)).padStart(2, '0');
      const day = String(rand(1, 28)).padStart(2, '0');
      const gender = [1, 2, 3, 4][rand(0, 3)];
      const seq = String(rand(100000, 999999));
      return `${year}${month}${day}-${gender}${seq}`;
    },
    salaryRange: [2000000, 8000000],
  },
  PH: {
    name: 'Philippines',
    flag: '🇵🇭',
    code: 'PH',
    phoneCode: '+63',
    currency: '₱',
    phoneFormat: () => `+63 ${rand(900, 999)} ${rand(100, 999)} ${rand(1000, 9999)}`,
    zipFormat: () => String(rand(1000, 9999)),
    firstNames: {
      male: ['Juan', 'Jose', 'Miguel', 'Carlo', 'Mark', 'John', 'Michael', 'Angelo', 'Christian', 'Joseph', 'Daniel', 'David', 'Gabriel', 'Jerome', 'Lawrence'],
      female: ['Maria', 'Ana', 'Rosa', 'Carmen', 'Luz', 'Grace', 'Patricia', 'Maricel', 'Cristina', 'Lourdes', 'Jennifer', 'Michelle', 'Jasmine', 'Rhea', 'Rowena']
    },
    lastNames: ['Santos', 'Reyes', 'Cruz', 'Bautista', 'Ocampo', 'Garcia', 'Mendoza', 'Torres', 'Castillo', 'Flores', 'Ramos', 'Aquino', 'Dela Cruz', 'Villanueva', 'Perez'],
    cities: [
      { city: 'Manila', state: 'Metro Manila', zips: ['1000','1001','1002'], streets: ['Rizal Avenue','Taft Avenue','España Boulevard','Roxas Boulevard','Quezon Boulevard'], districts: ['Ermita','Malate','Binondo'], areaCode: '02' },
      { city: 'Cebu City', state: 'Cebu', zips: ['6000','6001','6002'], streets: ['Colon Street','Osmena Boulevard','Gorordo Avenue','Cebu South Road','Mandaue Bypass'], districts: ['Capitol Site','Lahug','Banilad'], areaCode: '032' },
      { city: 'Davao', state: 'Davao Region', zips: ['8000','8001','8003'], streets: ['Claro M. Recto Avenue','J.P. Laurel Avenue','Quimpo Boulevard','Quirino Avenue','Ilustre Street'], districts: ['Poblacion','Agdao','Buhangin'], areaCode: '082' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, ${zip} ${state}, Philippines`,
    idLabel: 'PhilSys ID',
    idFormat: () => `${rand(1000, 9999)}-${rand(1000, 9999)}-${rand(1000, 9999)}`,
    salaryRange: [15000, 80000],
  },
  DE: {
    name: 'Germany',
    flag: '🇩🇪',
    code: 'DE',
    phoneCode: '+49',
    currency: '€',
    phoneFormat: () => `+49 ${rand(100, 999)} ${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Luca', 'Leon', 'Finn', 'Noah', 'Paul', 'Jonas', 'Luis', 'Felix', 'Maximilian', 'Ben', 'Elias', 'Tim', 'Jan', 'Nico', 'Stefan'],
      female: ['Emma', 'Mia', 'Hannah', 'Lea', 'Lena', 'Leoni', 'Anna', 'Sophie', 'Julia', 'Lara', 'Lisa', 'Marie', 'Laura', 'Sara', 'Klara']
    },
    lastNames: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann'],
    cities: [
      { city: 'Berlin', state: 'Berlin', zips: ['10115','10178','10243'], streets: ['Unter den Linden','Kurfürstendamm','Friedrichstraße','Karl-Marx-Allee','Potsdamer Straße'], districts: ['Mitte','Prenzlauer Berg','Kreuzberg'], areaCode: '030' },
      { city: 'München', state: 'Bayern', zips: ['80331','80333','80469'], streets: ['Maximilianstraße','Leopoldstraße','Marienplatz','Kaufingerstraße','Nymphenburger Straße'], districts: ['Altstadt','Schwabing','Maxvorstadt'], areaCode: '089' },
      { city: 'Hamburg', state: 'Hamburg', zips: ['20095','20144','20357'], streets: ['Mönckebergstraße','Jungfernstieg','Reeperbahn','Eppendorfer Baum','Wandsbeker Marktstraße'], districts: ['Altstadt','Eimsbüttel','Eppendorf'], areaCode: '040' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, ${state}`,
    idLabel: 'Personalausweis',
    idFormat: () => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let id = '';
      for (let i = 0; i < 4; i++) id += letters[rand(0, letters.length-1)];
      id += rand(100000000, 999999999);
      return id;
    },
    salaryRange: [2500, 9000],
  },
  FR: {
    name: 'France',
    flag: '🇫🇷',
    code: 'FR',
    phoneCode: '+33',
    currency: '€',
    phoneFormat: () => `+33 ${rand(1, 9)} ${rand(10, 99)} ${rand(10, 99)} ${rand(10, 99)} ${rand(10, 99)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Gabriel', 'Léo', 'Raphaël', 'Louis', 'Hugo', 'Arthur', 'Thomas', 'Théo', 'Lucas', 'Mathis', 'Noah', 'Liam', 'Antoine', 'Clément', 'Julien'],
      female: ['Emma', 'Jade', 'Louise', 'Alice', 'Chloé', 'Inès', 'Léa', 'Manon', 'Camille', 'Zoé', 'Sarah', 'Lucie', 'Pauline', 'Julie', 'Charlotte']
    },
    lastNames: ['Martin', 'Bernard', 'Robert', 'Richard', 'Durand', 'Dubois', 'Moreau', 'Laurent', 'Simon', 'Michel', 'Lefebvre', 'Leroy', 'Roux', 'David', 'Bertrand', 'Morel', 'Fournier', 'Girard', 'Bonnet', 'Dupont'],
    cities: [
      { city: 'Paris', state: 'Île-de-France', zips: ['75001','75008','75016'], streets: ['Avenue des Champs-Élysées','Rue de Rivoli','Boulevard Haussmann','Rue de la Paix','Avenue Montaigne'], districts: ['1er arrondissement','8e arrondissement','16e arrondissement'], areaCode: '01' },
      { city: 'Lyon', state: 'Auvergne-Rhône-Alpes', zips: ['69001','69002','69003'], streets: ['Rue de la République','Place Bellecour','Quai des Célestins','Cours Lafayette','Rue Mercière'], districts: ["Presqu'île",'Vieux-Lyon','Part-Dieu'], areaCode: '04' },
      { city: 'Marseille', state: "Provence-Alpes-Côte d'Azur", zips: ['13001','13002','13008'], streets: ['La Canebière','Rue de Rome','Avenue du Prado','Boulevard Longchamp','Cours Julien'], districts: ['Le Panier','Noailles','Vieux-Port'], areaCode: '04' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${zip} ${city}, ${state}`,
    idLabel: 'Numéro de Sécurité Sociale',
    idFormat: () => {
      const sex = rand(1, 2);
      const year = rand(60, 99);
      const month = String(rand(1, 12)).padStart(2, '0');
      const dept = String(rand(1, 95)).padStart(2, '0');
      const com = String(rand(1, 99)).padStart(3, '0');
      const ord = String(rand(1, 999)).padStart(3, '0');
      const key = String(rand(1, 99)).padStart(2, '0');
      return `${sex} ${year} ${month} ${dept} ${com} ${ord} ${key}`;
    },
    salaryRange: [2000, 8000],
  },
  AU: {
    name: 'Australia',
    flag: '🇦🇺',
    code: 'AU',
    phoneCode: '+61',
    currency: 'A$',
    phoneFormat: () => `+61 ${rand(400, 499)} ${rand(100, 999)} ${rand(100, 999)}`,
    zipFormat: () => String(rand(1000, 9999)),
    firstNames: {
      male: ['Oliver', 'William', 'Jack', 'Noah', 'Thomas', 'Liam', 'Ethan', 'James', 'Lucas', 'Cooper', 'Alexander', 'Mason', 'Henry', 'Samuel', 'Benjamin'],
      female: ['Olivia', 'Charlotte', 'Ava', 'Mia', 'Amelia', 'Grace', 'Isla', 'Sophie', 'Emily', 'Zoe', 'Ruby', 'Lily', 'Emma', 'Chloe', 'Isabella']
    },
    lastNames: ['Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Taylor', 'Johnson', 'White', 'Martin', 'Anderson', 'Thompson', 'Nguyen', 'Thomas', 'Walker', 'Harris', 'Lee', 'Ryan', 'Robinson', 'Kelly', 'King'],
    cities: [
      { city: 'Sydney', state: 'NSW', zips: ['2000','2010','2017'], streets: ['George Street','Pitt Street','Market Street','Oxford Street','Military Road'], districts: ['CBD','Surry Hills','Darlinghurst'], areaCode: '02' },
      { city: 'Melbourne', state: 'VIC', zips: ['3000','3004','3008'], streets: ['Collins Street','Bourke Street','Flinders Street','Swanston Street','Chapel Street'], districts: ['CBD','South Yarra','Fitzroy'], areaCode: '03' },
      { city: 'Brisbane', state: 'QLD', zips: ['4000','4101','4169'], streets: ['Queen Street','George Street','Edward Street','Adelaide Street','Brunswick Street'], districts: ['CBD','South Bank','Fortitude Valley'], areaCode: '07' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${state} ${zip}`,
    idLabel: 'Tax File Number',
    idFormat: () => `${rand(100, 999)} ${rand(100, 999)} ${rand(100, 999)}`,
    salaryRange: [4000, 15000],
  },
  CA: {
    name: 'Canada',
    flag: '🇨🇦',
    code: 'CA',
    phoneCode: '+1',
    currency: 'C$',
    phoneFormat: () => `+1 ${rand(200, 999)} ${rand(200, 999)} ${rand(1000, 9999)}`,
    zipFormat: () => {
      const letters = 'ABCEGHJKLMNPRSTVXY';
      const l = letters[rand(0, letters.length-1)];
      const l2 = 'ABCEFGHJKLMNOPQRSTUVWXYZ'[rand(0, 22)];
      const l3 = 'ABCEFGHJKLMNOPQRSTUVWXYZ'[rand(0, 22)];
      return `${l}${rand(0,9)}${l2} ${rand(0,9)}${l3}${rand(0,9)}`;
    },
    firstNames: {
      male: ['Liam', 'Noah', 'Oliver', 'William', 'Benjamin', 'James', 'Lucas', 'Mason', 'Ethan', 'Alexander', 'Jacob', 'Logan', 'Aiden', 'Jackson', 'Sebastian'],
      female: ['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn', 'Abigail', 'Emily', 'Elizabeth', 'Sofia', 'Ella']
    },
    lastNames: ['Smith', 'Brown', 'Tremblay', 'Martin', 'Roy', 'Wilson', 'MacDonald', 'Taylor', 'Johnson', 'White', 'Anderson', 'Thompson', 'Gagnon', 'Lee', 'Côté', 'Young', 'Scott', 'Hill', 'Moore', 'Clark'],
    cities: [
      { city: 'Toronto', state: 'ON', zips: ['M5A 1A1','M4B 1B3','M6G 3B8'], streets: ['Yonge Street','Bay Street','Bloor Street','Dundas Street','Queen Street West'], districts: ['Downtown','Midtown','The Annex'], areaCode: '416' },
      { city: 'Vancouver', state: 'BC', zips: ['V5K 0A1','V6B 1A1','V6Z 2H3'], streets: ['Granville Street','Robson Street','Hastings Street','Georgia Street','Davie Street'], districts: ['Downtown','Kitsilano','Mount Pleasant'], areaCode: '604' },
      { city: 'Montreal', state: 'QC', zips: ['H2Y 1C6','H3A 0A1','H3G 1T7'], streets: ['Rue Sainte-Catherine','Boulevard Saint-Laurent','Avenue du Parc','Rue Sherbrooke','Avenue du Mont-Royal'], districts: ['Plateau-Mont-Royal','Ville-Marie','Rosemont'], areaCode: '514' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, ${state} ${zip}`,
    idLabel: 'SIN',
    idFormat: () => `${rand(100, 999)} ${rand(100, 999)} ${rand(100, 999)}`,
    salaryRange: [3500, 12000],
  },
  IT: {
    name: 'Italy',
    flag: '🇮🇹',
    code: 'IT',
    phoneCode: '+39',
    currency: '€',
    phoneFormat: () => `+39 ${rand(300, 399)} ${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Francesco', 'Alessandro', 'Andrea', 'Lorenzo', 'Matteo', 'Davide', 'Gabriele', 'Riccardo', 'Filippo', 'Marco', 'Luca', 'Federico', 'Giovanni', 'Antonio', 'Giuseppe'],
      female: ['Sofia', 'Giulia', 'Aurora', 'Alice', 'Ginevra', 'Emma', 'Chiara', 'Beatrice', 'Martina', 'Eleonora', 'Federica', 'Valentina', 'Sara', 'Francesca', 'Anna']
    },
    lastNames: ['Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco', 'Bruno', 'Gallo', 'Conti', 'De Luca', 'Costa', 'Giordano', 'Mancini', 'Rizzo', 'Lombardi', 'Moretti'],
    cities: [
      { city: 'Roma', state: 'Lazio', zips: ['00100','00161','00195'], streets: ['Via Nazionale','Via del Corso','Via Veneto','Via Appia Nuova','Viale Trastevere'], districts: ['Centro Storico','Trastevere','Prati'], areaCode: '06' },
      { city: 'Milano', state: 'Lombardia', zips: ['20100','20121','20135'], streets: ['Corso Buenos Aires','Via Torino','Via Dante','Corso Vittorio Emanuele II','Via Montenapoleone'], districts: ['Duomo','Navigli','Brera'], areaCode: '02' },
      { city: 'Napoli', state: 'Campania', zips: ['80100','80121','80138'], streets: ['Via Toledo','Spaccanapoli','Corso Umberto I','Via Santa Lucia','Via dei Tribunali'], districts: ['Centro Storico','Chiaia','Posillipo'], areaCode: '081' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street}, ${num}, ${zip} ${city} (${state})`,
    idLabel: 'Codice Fiscale',
    idFormat: () => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let cf = '';
      for (let i = 0; i < 6; i++) cf += letters[rand(0, letters.length-1)];
      cf += rand(10, 99);
      cf += letters[rand(0, letters.length-1)];
      cf += String(rand(1, 31)).padStart(2, '0');
      cf += letters[rand(0, letters.length-1)];
      cf += String(rand(1, 999)).padStart(3, '0');
      cf += letters[rand(0, letters.length-1)];
      return cf;
    },
    salaryRange: [1500, 6000],
  },
  ES: {
    name: 'Spain',
    flag: '🇪🇸',
    code: 'ES',
    phoneCode: '+34',
    currency: '€',
    phoneFormat: () => `+34 ${rand(600, 699)} ${rand(100, 999)} ${rand(100, 999)}`,
    zipFormat: () => String(rand(10000, 52999)),
    firstNames: {
      male: ['Santiago', 'Mateo', 'Sebastián', 'Nicolás', 'Miguel', 'Alejandro', 'Daniel', 'Pablo', 'Lucas', 'Diego', 'Adrián', 'Marcos', 'Álvaro', 'Javier', 'Fernando'],
      female: ['Sofía', 'Valentina', 'Isabella', 'Camila', 'Valeria', 'Lucía', 'Daniela', 'Sara', 'Paula', 'María', 'Carmen', 'Ana', 'Laura', 'Marta', 'Alba']
    },
    lastNames: ['García', 'Martínez', 'López', 'Sánchez', 'González', 'Pérez', 'Rodríguez', 'Fernández', 'Jiménez', 'Díaz', 'Moreno', 'Álvarez', 'Romero', 'Alonso', 'Navarro', 'Torres', 'Domínguez', 'Vázquez', 'Ramos', 'Gil'],
    cities: [
      { city: 'Madrid', state: 'Comunidad de Madrid', zips: ['28001','28010','28013'], streets: ['Gran Vía','Paseo de la Castellana','Calle de Serrano','Calle Mayor','Calle de Alcalá'], districts: ['Centro','Salamanca','Chamberí'], areaCode: '91' },
      { city: 'Barcelona', state: 'Cataluña', zips: ['08001','08010','08036'], streets: ['Paseo de Gracia','Las Ramblas','Avenida Diagonal','Calle de Aragón','Gran Vía de les Corts Catalanes'], districts: ['Eixample','Gràcia','Born'], areaCode: '93' },
      { city: 'Valencia', state: 'Comunidad Valenciana', zips: ['46001','46011','46021'], streets: ['Calle Colón','Avenida del Puerto','Gran Vía Marqués del Turia','Calle de la Paz','Avenida de Aragón'], districts: ["L'Eixample",'Rascanya','Patraix'], areaCode: '96' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, ${state}`,
    idLabel: 'DNI',
    idFormat: () => {
      const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
      const num = rand(10000000, 99999999);
      return `${num}-${letters[num % 23]}`;
    },
    salaryRange: [1500, 5000],
  },
  BR: {
    name: 'Brazil',
    flag: '🇧🇷',
    code: 'BR',
    phoneCode: '+55',
    currency: 'R$',
    phoneFormat: () => `+55 ${rand(11, 99)} ${rand(90000, 99999)}-${rand(1000, 9999)}`,
    zipFormat: () => `${String(rand(10000, 99999))}-${String(rand(100, 999))}`,
    firstNames: {
      male: ['Miguel', 'Arthur', 'Heitor', 'Davi', 'Gabriel', 'Pedro', 'Lucas', 'Mateus', 'Bernardo', 'Samuel', 'João', 'Vitor', 'Gustavo', 'Cauã', 'Murilo'],
      female: ['Alice', 'Valentina', 'Sophia', 'Isabella', 'Manuela', 'Júlia', 'Helena', 'Laura', 'Luiza', 'Maria', 'Ana', 'Beatriz', 'Gabriela', 'Rafaela', 'Isabela']
    },
    lastNames: ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Gomes', 'Costa', 'Ribeiro', 'Martins', 'Carvalho', 'Almeida', 'Lopes', 'Sousa', 'Fernandes', 'Vieira', 'Barbosa'],
    cities: [
      { city: 'São Paulo', state: 'SP', zips: ['01310-000','01402-001','04510-010'], streets: ['Avenida Paulista','Rua Oscar Freire','Avenida Brigadeiro Faria Lima','Rua Augusta','Avenida Rebouças'], districts: ['Jardins','Itaim Bibi','Pinheiros'], areaCode: '11' },
      { city: 'Rio de Janeiro', state: 'RJ', zips: ['20040-020','22071-900','22450-040'], streets: ['Avenida Rio Branco','Rua das Laranjeiras','Avenida Nossa Senhora de Copacabana','Rua Visconde de Pirajá','Estrada da Gávea'], districts: ['Copacabana','Ipanema','Centro'], areaCode: '21' },
      { city: 'Brasília', state: 'DF', zips: ['70040-010','70070-010','70200-001'], streets: ['Eixo Monumental','Setor Comercial Sul','Avenida das Nações','Setor Bancário Norte','W3 Sul'], districts: ['Asa Norte','Asa Sul','Lago Sul'], areaCode: '61' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street}, ${num} - ${city}, ${state}, ${zip}`,
    idLabel: 'CPF',
    idFormat: () => {
      const p1 = rand(100, 999);
      const p2 = rand(100, 999);
      const p3 = rand(100, 999);
      const p4 = rand(10, 99);
      return `${p1}.${p2}.${p3}-${p4}`;
    },
    salaryRange: [1500, 10000],
  },
  IN: {
    name: 'India',
    flag: '🇮🇳',
    code: 'IN',
    phoneCode: '+91',
    currency: '₹',
    phoneFormat: () => `+91 ${rand(6000, 9999)} ${rand(100000, 999999)}`,
    zipFormat: () => String(rand(100000, 999999)),
    firstNames: {
      male: ['Aarav', 'Vihaan', 'Arjun', 'Reyansh', 'Vivaan', 'Ansh', 'Dhruv', 'Kabir', 'Ritvik', 'Aaryan', 'Sai', 'Krishna', 'Aryan', 'Ishaan', 'Shaurya'],
      female: ['Saanvi', 'Aadya', 'Kiara', 'Ananya', 'Avni', 'Aadhya', 'Aaradhya', 'Diya', 'Pari', 'Mahi', 'Priya', 'Sneha', 'Pooja', 'Riya', 'Nisha']
    },
    lastNames: ['Sharma', 'Verma', 'Patel', 'Gupta', 'Singh', 'Kumar', 'Yadav', 'Joshi', 'Chauhan', 'Agarwal', 'Mishra', 'Tiwari', 'Pandey', 'Chaudhary', 'Malhotra', 'Mehta', 'Jain', 'Kapoor', 'Bose', 'Roy'],
    cities: [
      { city: 'Mumbai', state: 'Maharashtra', zips: ['400001','400051','400093'], streets: ['Marine Drive','Linking Road','S.V. Road','Andheri Kurla Road','L.B.S. Marg'], districts: ['Colaba','Bandra','Andheri'], areaCode: '022' },
      { city: 'Delhi', state: 'Delhi', zips: ['110001','110006','110019'], streets: ['Connaught Place','Chandni Chowk','Karol Bagh Road','Outer Ring Road','Rohini Road'], districts: ['Connaught Place','Old Delhi','South Delhi'], areaCode: '011' },
      { city: 'Bangalore', state: 'Karnataka', zips: ['560001','560008','560038'], streets: ['MG Road','Brigade Road','Residency Road','Cunningham Road','Lavelle Road'], districts: ['Indiranagar','Koramangala','Whitefield'], areaCode: '080' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num}, ${street}, ${city}, ${state} - ${zip}`,
    idLabel: 'Aadhaar',
    idFormat: () => `${rand(1000, 9999)} ${rand(1000, 9999)} ${rand(1000, 9999)}`,
    salaryRange: [20000, 150000],
  },
  RU: {
    name: 'Russia',
    flag: '🇷🇺',
    code: 'RU',
    phoneCode: '+7',
    currency: '₽',
    phoneFormat: () => `+7 (${rand(900, 999)}) ${rand(100, 999)}-${rand(10, 99)}-${rand(10, 99)}`,
    zipFormat: () => String(rand(100000, 999999)),
    firstNames: {
      male: ['Александр', 'Дмитрий', 'Максим', 'Сергей', 'Андрей', 'Алексей', 'Артём', 'Илья', 'Кирилл', 'Михаил', 'Никита', 'Иван', 'Роман', 'Владимир', 'Егор'],
      female: ['Анастасия', 'Мария', 'Дарья', 'Анна', 'Елизавета', 'Екатерина', 'Полина', 'Виктория', 'Алина', 'Варвара', 'Ксения', 'Наталья', 'Надежда', 'Татьяна', 'Ольга']
    },
    lastNames: ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Фёдоров', 'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семёнов', 'Егоров', 'Павлов', 'Козлов', 'Степанов', 'Николаев'],
    cities: [
      { city: 'Москва', state: 'Московская область', zips: ['101000','105005','125009'], streets: ['ул. Тверская','ул. Арбат','пр. Мира','Ленинский проспект','ул. Садовая'], districts: ['Центральный','Северный','Западный'], areaCode: '495' },
      { city: 'Санкт-Петербург', state: 'Санкт-Петербург', zips: ['190000','191011','194100'], streets: ['Невский проспект','Лиговский проспект','Садовая улица','Московский проспект','ул. Рубинштейна'], districts: ['Центральный','Адмиралтейский','Васильевский'], areaCode: '812' },
      { city: 'Новосибирск', state: 'Новосибирская область', zips: ['630001','630049','630099'], streets: ['ул. Ленина','Красный проспект','ул. Кирова','пр. Маркса','ул. Советская'], districts: ['Центральный','Железнодорожный','Заельцовский'], areaCode: '383' },
    ],
    streetAddress: (num, street, city, zip, state) => `${zip}, ${state}, г. ${city}, ${street}, д. ${num}`,
    idLabel: 'СНИЛС',
    idFormat: () => {
      const p1 = String(rand(100, 999));
      const p2 = String(rand(100, 999));
      const p3 = String(rand(100, 999));
      const p4 = String(rand(10, 99));
      return `${p1}-${p2}-${p3} ${p4}`;
    },
    salaryRange: [30000, 200000],
  },
  MX: {
    name: 'Mexico',
    flag: '🇲🇽',
    code: 'MX',
    phoneCode: '+52',
    currency: '$',
    phoneFormat: () => `+52 ${rand(100, 999)} ${rand(100, 999)} ${rand(1000, 9999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Santiago', 'Mateo', 'Sebastián', 'Leonardo', 'Diego', 'Miguel', 'Ángel', 'Carlos', 'Luis', 'Emilio', 'Rodrigo', 'Alejandro', 'Javier', 'Fernando', 'Andrés'],
      female: ['Sofía', 'Valeria', 'Camila', 'Daniela', 'Isabella', 'Andrea', 'Fernanda', 'Paola', 'María', 'Lucía', 'Gabriela', 'Karen', 'Mariana', 'Ana', 'Natalia']
    },
    lastNames: ['González', 'Rodríguez', 'Martínez', 'García', 'López', 'Hernández', 'Pérez', 'Sánchez', 'Ramírez', 'Torres', 'Flores', 'Rivera', 'Gómez', 'Díaz', 'Cruz', 'Morales', 'Reyes', 'Gutiérrez', 'Ortega', 'Vargas'],
    cities: [
      { city: 'Ciudad de México', state: 'Ciudad de México', zips: ['06600','06700','06010'], streets: ['Av. Insurgentes','Paseo de la Reforma','Av. Presidente Masaryk','Eje Central Lázaro Cárdenas','Av. Chapultepec'], districts: ['Condesa','Polanco','Roma Norte'], areaCode: '55' },
      { city: 'Guadalajara', state: 'Jalisco', zips: ['44100','44200','44600'], streets: ['Av. Juárez','López Cotilla','Av. Vallarta','Av. México','Calzada Independencia'], districts: ['Centro Histórico','Chapultepec','Tlaquepaque'], areaCode: '33' },
      { city: 'Monterrey', state: 'Nuevo León', zips: ['64000','64010','64700'], streets: ['Av. Constitución','Av. Eugenio Garza Sada','Av. Miguel Hidalgo','Calzada del Valle','Av. Gonzalitos'], districts: ['Centro','San Pedro Garza García','Santa Catarina'], areaCode: '81' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${city}, ${state}, CP ${zip}`,
    idLabel: 'CURP',
    idFormat: () => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let curp = '';
      for (let i = 0; i < 4; i++) curp += letters[rand(0, letters.length-1)];
      curp += rand(60, 99);
      const month = String(rand(1, 12)).padStart(2, '0');
      const day = String(rand(1, 28)).padStart(2, '0');
      curp += month + day;
      curp += ['H', 'M'][rand(0, 1)];
      for (let i = 0; i < 2; i++) curp += letters[rand(0, letters.length-1)];
      for (let i = 0; i < 3; i++) curp += letters[rand(0, letters.length-1)];
      curp += letters[rand(0, letters.length-1)] + rand(0, 9);
      return curp;
    },
    salaryRange: [8000, 40000],
  },
  SG: {
    name: 'Singapore',
    flag: '🇸🇬',
    code: 'SG',
    phoneCode: '+65',
    currency: 'S$',
    phoneFormat: () => `+65 ${[8, 9][rand(0, 1)]}${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(100000, 999999)),
    firstNames: {
      male: ['Ethan', 'Ryan', 'Jayden', 'Lucas', 'Noah', 'Wei Ming', 'Jun Hao', 'Jia Jun', 'Kai', 'Rajan', 'Arjun', 'Vikram', 'Amir', 'Hafiz', 'Zulkifli'],
      female: ['Emma', 'Olivia', 'Ava', 'Mei Ling', 'Xin Yi', 'Yu Ting', 'Priya', 'Deepa', 'Nur', 'Siti', 'Aishah', 'Zara', 'Lily', 'Chloe', 'Mia']
    },
    lastNames: ['Tan', 'Lim', 'Lee', 'Ng', 'Ong', 'Wong', 'Goh', 'Chen', 'Koh', 'Chan', 'Sharma', 'Patel', 'Ahmad', 'Ismail', 'Yusof'],
    cities: [
      { city: 'Singapore', state: 'Central Region', zips: ['048616','059803','178957'], streets: ['Orchard Road','Raffles Place','Marina Bay','Shenton Way','Cecil Street'], districts: ['Orchard','Raffles Place','Marina Bay'], areaCode: '65' },
      { city: 'Tampines', state: 'East Region', zips: ['520001','520102','521521'], streets: ['Tampines Avenue 1','Tampines Street 21','New Upper Changi Road','Simei Street','Bedok North Road'], districts: ['Tampines','Bedok','Simei'], areaCode: '65' },
      { city: 'Jurong East', state: 'West Region', zips: ['600100','640200','640300'], streets: ['Jurong Gateway Road','Boon Lay Way','Toh Guan Road','Corporation Road','Pioneer Road North'], districts: ['Jurong East','Jurong West','Boon Lay'], areaCode: '65' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, Singapore ${zip}`,
    idLabel: 'NRIC',
    idFormat: () => {
      const prefix = ['S', 'T', 'F', 'G'][rand(0, 3)];
      const digits = rand(1000000, 9999999);
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return `${prefix}${digits}${letters[rand(0, letters.length-1)]}`;
    },
    salaryRange: [3000, 15000],
  },
  MY: {
    name: 'Malaysia',
    flag: '🇲🇾',
    code: 'MY',
    phoneCode: '+60',
    currency: 'RM',
    phoneFormat: () => `+60 ${[11, 12, 13, 14, 16, 17, 18, 19][rand(0, 7)]}-${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Ahmad', 'Muhammad', 'Haziq', 'Izzat', 'Syafiq', 'Wei Jun', 'Jia Hao', 'Kai Xuan', 'Raj', 'Arjun', 'Vikram', 'Rajan', 'Loke', 'Tan', 'Chong'],
      female: ['Nurul', 'Siti', 'Aisyah', 'Fatimah', 'Nadia', 'Wei Ling', 'Xin Yi', 'Mei Fen', 'Priya', 'Kavitha', 'Shanthi', 'Nisha', 'Asha', 'Lim', 'Wong']
    },
    lastNames: ['bin Abdullah', 'binti Ahmad', 'Tan', 'Lim', 'Wong', 'Lee', 'Ng', 'Ong', 'Chin', 'Chan', 'Kumar', 'Rajan', 'Gopal', 'Singh', 'Kaur'],
    cities: [
      { city: 'Kuala Lumpur', state: 'Kuala Lumpur', zips: ['50000','50088','50450'], streets: ['Jalan Bukit Bintang','Jalan Sultan Ismail','Jalan Ampang','Jalan Imbi','Jalan Pudu'], districts: ['KLCC','Bukit Bintang','Chow Kit'], areaCode: '03' },
      { city: 'George Town', state: 'Pulau Pinang', zips: ['10000','10050','10100'], streets: ['Jalan Penang','Jalan Burma','Jalan Sultan Ahmad Shah','Jalan Macalister','Jalan Tun Abdul Razak'], districts: ['Georgetown','Batu Ferringhi','Air Itam'], areaCode: '04' },
      { city: 'Johor Bahru', state: 'Johor', zips: ['80000','80100','80300'], streets: ['Jalan Wong Ah Fook','Jalan Dato Onn','Jalan Skudai','Jalan Tebrau','Jalan Abdul Samad'], districts: ['Johor Bahru City Centre','Larkin','Tampoi'], areaCode: '07' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num}, ${street}, ${zip} ${city}, ${state}`,
    idLabel: 'MyKad',
    idFormat: () => {
      const year = rand(60, 99);
      const month = String(rand(1, 12)).padStart(2, '0');
      const day = String(rand(1, 28)).padStart(2, '0');
      const state = String(rand(1, 16)).padStart(2, '0');
      const seq = String(rand(100, 999));
      const gender = rand(1, 9);
      return `${year}${month}${day}-${state}-${seq}${gender}`;
    },
    salaryRange: [2000, 15000],
  },
  TH: {
    name: 'Thailand',
    flag: '🇹🇭',
    code: 'TH',
    phoneCode: '+66',
    currency: '฿',
    phoneFormat: () => `+66 ${rand(80, 99)}-${rand(100, 999)}-${rand(1000, 9999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['สมชาย', 'สมศักดิ์', 'วิชัย', 'ประสิทธิ์', 'สุรชัย', 'ธนวัฒน์', 'กิตติพงศ์', 'ปรีชา', 'ชัยพร', 'วิทยา', 'Somchai', 'Wichai', 'Thanawat', 'Kittipong', 'Chaiyaphon'],
      female: ['สมหญิง', 'สุภาพร', 'รัตนา', 'ประภา', 'กัลยา', 'นภาพร', 'ปิยะนุช', 'ศิริพร', 'วรรณา', 'อรุณ', 'Somporn', 'Rattana', 'Kanlaya', 'Napaporn', 'Siriporn']
    },
    lastNames: ['สมบูรณ์', 'ประสงค์', 'วงศ์วาน', 'รุ่งเรือง', 'สุขสวัสดิ์', 'ชัยชนะ', 'พงศ์พัฒน์', 'บุญมา', 'Somboon', 'Prasong', 'Wongwan', 'Rungrueang', 'Suksawat', 'Chaichana', 'Boonma'],
    cities: [
      { city: 'Bangkok', state: 'กรุงเทพมหานคร', zips: ['10100','10110','10120'], streets: ['Sukhumvit Road','Silom Road','Rama IV Road','Ratchadaphisek Road','Phetchaburi Road'], districts: ['Pathum Wan','Bang Rak','Watthana'], areaCode: '02' },
      { city: 'Chiang Mai', state: 'เชียงใหม่', zips: ['50000','50100','50200'], streets: ['Nimman Road','Chang Klan Road','Huay Kaew Road','Wualai Road','Superhighway Road'], districts: ['Mueang','Hang Dong','San Kamphaeng'], areaCode: '053' },
      { city: 'Phuket', state: 'ภูเก็ต', zips: ['83000','83100','83130'], streets: ['Thepkrasattri Road','Yaowarat Road','Rat-U-Thit Road','Bangla Road','Thalang Road'], districts: ['Mueang','Kathu','Thalang'], areaCode: '076' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, ${state}`,
    idLabel: 'หมายเลขบัตรประชาชน',
    idFormat: () => {
      const p1 = rand(1, 8);
      const p2 = String(rand(1000, 9999));
      const p3 = String(rand(10000, 99999));
      const p4 = String(rand(10, 99));
      const p5 = rand(1, 9);
      return `${p1}-${p2}-${p3}-${p4}-${p5}`;
    },
    salaryRange: [15000, 80000],
  },
  VN: {
    name: 'Vietnam',
    flag: '🇻🇳',
    code: 'VN',
    phoneCode: '+84',
    currency: '₫',
    phoneFormat: () => `+84 ${rand(90, 99)}-${rand(100, 999)}-${rand(1000, 9999)}`,
    zipFormat: () => String(rand(100000, 999999)),
    firstNames: {
      male: ['Minh', 'Hùng', 'Đức', 'Tuấn', 'Quang', 'Thành', 'Bảo', 'Khoa', 'Nam', 'Hưng', 'Dũng', 'Tùng', 'Phúc', 'Anh', 'Việt'],
      female: ['Lan', 'Hoa', 'Linh', 'Thúy', 'Hương', 'Mai', 'Thu', 'Trang', 'Nhung', 'Yến', 'Ngọc', 'Phương', 'Châu', 'Diễm', 'Trinh']
    },
    lastNames: ['Nguyễn', 'Trần', 'Lê', 'Phạm', 'Hoàng', 'Phan', 'Vũ', 'Đặng', 'Bùi', 'Đỗ', 'Hồ', 'Ngô', 'Dương', 'Lý', 'Đinh'],
    cities: [
      { city: 'Hà Nội', state: 'Hà Nội', zips: ['100000','115000','116000'], streets: ['Phố Huế','Đường Đinh Tiên Hoàng','Đường Lê Lợi','Phố Phan Đình Phùng','Đường Hai Bà Trưng'], districts: ['Hoàn Kiếm','Đống Đa','Cầu Giấy'], areaCode: '024' },
      { city: 'Hồ Chí Minh', state: 'Hồ Chí Minh', zips: ['700000','710000','700900'], streets: ['Đường Nguyễn Huệ','Đường Lê Lợi','Đường Đồng Khởi','Đường Nam Kỳ Khởi Nghĩa','Đường Hai Bà Trưng'], districts: ['Quận 1','Quận 3','Bình Thạnh'], areaCode: '028' },
      { city: 'Đà Nẵng', state: 'Đà Nẵng', zips: ['550000','551000','552000'], streets: ['Đường Trần Phú','Đường Nguyễn Văn Linh','Đường 2 tháng 9','Đường Điện Biên Phủ','Đường Nguyễn Tất Thành'], districts: ['Hải Châu','Sơn Trà','Ngũ Hành Sơn'], areaCode: '0236' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, ${state} ${zip}`,
    idLabel: 'CCCD',
    idFormat: () => String(rand(100000000000, 999999999999)),
    salaryRange: [5000000, 30000000],
  }
};

const OCCUPATIONS = [
  'Software Engineer', 'Data Scientist', 'Product Manager', 'Web Developer', 'Graphic Designer',
  'Marketing Manager', 'Financial Analyst', 'Sales Representative', 'Project Manager', 'HR Specialist',
  'Teacher', 'Nurse', 'Doctor', 'Lawyer', 'Accountant', 'Architect', 'Civil Engineer', 'Electrician',
  'Chef', 'Photographer', 'Journalist', 'Writer', 'Artist', 'Musician', 'Translator',
  'Physical Therapist', 'Pharmacist', 'Dentist', 'Veterinarian', 'Psychologist',
  'Wind Energy Engineer', 'Watch Repairer', 'Biomedical Engineer', 'UX Designer', 'DevOps Engineer',
  'Network Administrator', 'Cybersecurity Analyst', 'Database Administrator', 'QA Engineer', 'Business Analyst'
];

const COMPANIES = [
  'Tech Solutions Inc.', 'Global Services Ltd.', 'Innovation Corp.', 'Digital Ventures', 'Smart Systems LLC',
  'Premier Group', 'Pacific Holdings', 'Metro Industries', 'Apex Technologies', 'Sunrise Enterprises',
  'Blue Ocean Consulting', 'Red Rock Capital', 'Green Valley Farms', 'Star Network', 'Peak Performance Co.',
  'Nexus Software', 'Horizon Media', 'Vortex Analytics', 'Summit Partners', 'Echo Digital'
];

const COMPANY_SIZES = ['1-10', '11-50', '51-200', '201-500', '500-1000', '1000+', '无'];

const EMPLOYMENT_STATUSES = [
  'Full-time work', 'Part-time work', 'Self-employed', 'Freelancer', 'Contract', 'Intern', 'Unemployed', 'Retired'
];

const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const OS_LIST = [
  'Windows 10', 'Windows 11', 'macOS Ventura', 'macOS Monterey', 'Ubuntu 22.04', 'macOS Sonoma',
  'Windows 10 Pro', 'macOS Big Sur', 'Fedora Linux 38', 'Debian 12'
];

const EDUCATION_LEVELS = [
  "High school diploma", "Associate's degree", "Bachelor's degree", "Master's degree", "PhD", "Vocational training"
];

const SECURITY_QUESTIONS = [
  "What is your mother's maiden name?",
  "What was the name of your first pet?",
  "What city were you born in?",
  "What was the name of your elementary school?",
  "What is the last 4 of your SSN?",
  "What is your favorite movie?",
  "What street did you grow up on?",
  "What was your childhood nickname?",
  "What is the middle name of your oldest child?",
  "What is the name of the town where your parents met?"
];

const EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com',
  'iubridge.com', 'tempmail.net', 'throwam.com', 'fakeinbox.com', 'mailnull.com',
  'yopmail.com', 'guerrillamail.com', 'trashmail.com', 'sharklasers.com', 'spamgourmet.com'
];

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Safari/605.1.15',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.90 Mobile Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64;) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
];

// Helper random function
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom(arr) {
  return arr[rand(0, arr.length - 1)];
}
