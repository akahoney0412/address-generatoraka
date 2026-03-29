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
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, ${state} ${zip}, USA`,
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
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, UK`,
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
      male: ['Wei', 'Qiang', 'Lei', 'Jun', 'Yong', 'Tao', 'Chao', 'Ming', 'Jian', 'Feng', 'Jie', 'Xin', 'Bo', 'Hao', 'Yu'],
      female: ['Fang', 'Na', 'Min', 'Jing', 'Xiuying', 'Hui', 'Yan', 'Juan', 'Ting', 'Li', 'Yan', 'Ling', 'Xue', 'Jie', 'Mei']
    },
    lastNames: ['Wang', 'Li', 'Zhang', 'Liu', 'Chen', 'Yang', 'Huang', 'Zhao', 'Wu', 'Zhou', 'Xu', 'Sun', 'Ma', 'Zhu', 'Hu', 'Guo', 'He', 'Gao', 'Lin', 'Zheng'],
    cities: [
      { city: 'Beijing', state: 'Beijing', zips: ['100001','100020','100080'], streets: ['Changan Avenue','Wangfujing Street','Xidan Street','Chaoyang Road','Jianguomenwai Avenue'], districts: ['Dongcheng','Xicheng','Chaoyang'], areaCode: '010' },
      { city: 'Shanghai', state: 'Shanghai', zips: ['200001','200010','200025'], streets: ['Nanjing Road','Huaihai Road','Renmin Avenue','Sichuan North Road','The Bund'], districts: ['Huangpu','Pudong','Jing\'an'], areaCode: '021' },
      { city: 'Guangzhou', state: 'Guangdong', zips: ['510000','510010','510095'], streets: ['Tianhe Road','Beijing Road','Zhongshan Avenue','Yuexiu Road','Huanshi East Road'], districts: ['Tianhe','Yuexiu','Haizhu'], areaCode: '020' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, China`,
    idLabel: 'ID Card',
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
      male: ['Hiroto', 'Ren', 'Yuma', 'Haruto', 'Minato', 'Yuto', 'Itsuki', 'Asahi', 'Haru', 'Hayate', 'Sho', 'Kai', 'Yamato', 'Aoi', 'Ritsu'],
      female: ['Hina', 'Rin', 'Yuna', 'Tsumugi', 'An', 'Aoi', 'Sakura', 'Miwa', 'Riko', 'Koharu', 'Hana', 'Momo', 'Yu', 'Ai', 'Mio']
    },
    lastNames: ['Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Ito', 'Watanabe', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Kato', 'Yoshida', 'Yamada', 'Sasaki', 'Yamaguchi', 'Matsumoto', 'Inoue', 'Kimura', 'Hayashi', 'Saito', 'Shimizu'],
    cities: [
      { city: 'Tokyo', state: 'Tokyo', zips: ['100-0001','150-0001','160-0022'], streets: ['Ginza', 'Shinjuku-dori','Shibuya Center-gai','Ikebukuro West Gate Street','Asakusa-dori'], districts: ['Chiyoda','Shinjuku','Shibuya'], areaCode: '03' },
      { city: 'Osaka', state: 'Osaka', zips: ['530-0001','542-0076','556-0011'], streets: ['Midosuji','Shinsaibashi-suji','Namba-dori','Tennoji-dori','Kita-horie'], districts: ['Kita','Chuo','Naniwa'], areaCode: '06' },
      { city: 'Nagoya', state: 'Aichi', zips: ['460-0001','461-0001','462-0819'], streets: ['Nishiki-dori','Otsu-dori','Hirokoji','Sakae-dori','Hisaya-odori'], districts: ['Naka','Higashi','Chikusa'], areaCode: '052' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num}-${rand(1,9)}-${rand(1,20)} ${street}, ${city} ${zip}, Japan`,
    idLabel: 'My Number',
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
      male: ['Minjun', 'Seojun', 'Doyun', 'Yejun', 'Siwoo', 'Hajun', 'Jiho', 'Junseo', 'Junwoo', 'Hyunwoo', 'Jihun', 'Geonwoo', 'Woojin', 'Seonho', 'Seojin'],
      female: ['Seoyeon', 'Seoyun', 'Jiwoo', 'Seohyeon', 'Haeun', 'Hayoon', 'Minseo', 'Jiyu', 'Yunseo', 'Chaewon', 'Sua', 'Jia', 'Jimin', 'Arin', 'Yeeun']
    },
    lastNames: ['Kim', 'Lee', 'Park', 'Choi', 'Jung', 'Kang', 'Jo', 'Yoon', 'Jang', 'Lim', 'Han', 'Oh', 'Seo', 'Shin', 'Kwon', 'Hwang', 'An', 'Song', 'Ryu', 'Jeon'],
    cities: [
      { city: 'Seoul', state: 'Seoul', zips: ['04524','06141','03080'], streets: ['Gangnam-daero','Teheran-ro','Jongno','Sejongno','Eulji-ro'], districts: ['Gangnam-gu','Jongno-gu','Jung-gu'], areaCode: '02' },
      { city: 'Busan', state: 'Busan', zips: ['48058','47012','49200'], streets: ['Haeundae-ro','Jungang-daero','Gwangbok-ro','Dongnae-ro','Sajik-ro'], districts: ['Haeundae-gu','Jung-gu','Dongnae-gu'], areaCode: '051' },
      { city: 'Incheon', state: 'Incheon', zips: ['22100','21565','22300'], streets: ['Gyeongin-ro','Inha-ro','Bupyeong-daero','Juan-ro','Songdo-daero'], districts: ['Jung-gu','Bupyeong-gu','Yeonsu-gu'], areaCode: '032' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, South Korea`,
    idLabel: 'Resident Registration Number',
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
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Germany`,
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
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${zip} ${city}, France`,
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
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${state} ${zip}, Australia`,
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
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, ${state} ${zip}, Canada`,
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
    streetAddress: (num, street, city, zip, state) => `${street}, ${num}, ${zip} ${city}, Italy`,
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
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Spain`,
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
    streetAddress: (num, street, city, zip, state) => `${street}, ${num} - ${city}, ${state}, ${zip}, Brazil`,
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
    streetAddress: (num, street, city, zip, state) => `${num}, ${street}, ${city}, ${state} - ${zip}, India`,
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
      male: ['Alexander', 'Dmitry', 'Maxim', 'Sergey', 'Andrey', 'Alexey', 'Artyom', 'Ilya', 'Kirill', 'Mikhail', 'Nikita', 'Ivan', 'Roman', 'Vladimir', 'Yegor'],
      female: ['Anastasia', 'Maria', 'Daria', 'Anna', 'Elizaveta', 'Ekaterina', 'Polina', 'Victoria', 'Alina', 'Varvara', 'Ksenia', 'Natalia', 'Nadezhda', 'Tatiana', 'Olga']
    },
    lastNames: ['Ivanov', 'Smirnov', 'Kuznetsov', 'Popov', 'Vasiliev', 'Petrov', 'Sokolov', 'Mikhailov', 'Novikov', 'Fyodorov', 'Morozov', 'Volkov', 'Alexeyev', 'Lebedev', 'Semyonov', 'Yegorov', 'Pavlov', 'Kozlov', 'Stepanov', 'Nikolaev'],
    cities: [
      { city: 'Moscow', state: 'Moscow Oblast', zips: ['101000','105005','125009'], streets: ['Tverskaya Street','Arbat Street','Mira Avenue','Leninsky Prospekt','Sadovaya Street'], districts: ['Central','Northern','Western'], areaCode: '495' },
      { city: 'Saint Petersburg', state: 'Saint Petersburg', zips: ['190000','191011','194100'], streets: ['Nevsky Prospekt','Ligovsky Prospekt','Sadovaya Street','Moskovsky Prospekt','Rubinsteina Street'], districts: ['Central','Admiralteysky','Vasilyevsky'], areaCode: '812' },
      { city: 'Novosibirsk', state: 'Novosibirsk Oblast', zips: ['630001','630049','630099'], streets: ['Lenin Street','Krasny Prospekt','Kirov Street','Marks Prospekt','Sovetskaya Street'], districts: ['Central','Zheleznodorozhny','Zaeltsovsky'], areaCode: '383' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Russia`,
    idLabel: 'SNILS',
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
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${city}, ${state}, CP ${zip}, Mexico`,
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
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Singapore`,
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
    streetAddress: (num, street, city, zip, state) => `${num}, ${street}, ${zip} ${city}, Malaysia`,
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
      male: ['Somchai', 'Somsak', 'Wichai', 'Prasit', 'Surachai', 'Thanawat', 'Kittipong', 'Preecha', 'Chaiyaphon', 'Witthaya', 'Nattapong', 'Panya', 'Krit', 'Pongsakorn', 'Theerasak'],
      female: ['Somying', 'Supaporn', 'Rattana', 'Prapa', 'Kanlaya', 'Napaphon', 'Piyanuch', 'Siriporn', 'Wanna', 'Arun', 'Kannika', 'Pornpan', 'Wassana', 'Nanthida', 'Patcharee']
    },
    lastNames: ['Somboon', 'Prasong', 'Wongwan', 'Rungrueang', 'Suksawat', 'Chaichana', 'Phongphat', 'Boonma', 'Jaidee', 'Khongchai', 'Saengmanee', 'Buakaew', 'Phatthanasiri', 'Kitisak', 'Wongsawat'],
    cities: [
      { city: 'Bangkok', state: 'Bangkok', zips: ['10100','10110','10120'], streets: ['Sukhumvit Road','Silom Road','Rama IV Road','Ratchadaphisek Road','Phetchaburi Road'], districts: ['Pathum Wan','Bang Rak','Watthana'], areaCode: '02' },
      { city: 'Chiang Mai', state: 'Chiang Mai', zips: ['50000','50100','50200'], streets: ['Nimman Road','Chang Klan Road','Huay Kaew Road','Wualai Road','Superhighway Road'], districts: ['Mueang','Hang Dong','San Kamphaeng'], areaCode: '053' },
      { city: 'Phuket', state: 'Phuket', zips: ['83000','83100','83130'], streets: ['Thepkrasattri Road','Yaowarat Road','Rat-U-Thit Road','Bangla Road','Thalang Road'], districts: ['Mueang','Kathu','Thalang'], areaCode: '076' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Thailand`,
    idLabel: 'Thai National ID',
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
      male: ['Minh', 'Hung', 'Duc', 'Tuan', 'Quang', 'Thanh', 'Bao', 'Khoa', 'Nam', 'Long', 'Dung', 'Tung', 'Phuc', 'Anh', 'Viet'],
      female: ['Lan', 'Hoa', 'Linh', 'Thuy', 'Huong', 'Mai', 'Thu', 'Trang', 'Nhung', 'Yen', 'Ngoc', 'Phuong', 'Chau', 'Diem', 'Trinh']
    },
    lastNames: ['Nguyen', 'Tran', 'Le', 'Pham', 'Hoang', 'Phan', 'Vu', 'Dang', 'Bui', 'Do', 'Ho', 'Ngo', 'Duong', 'Ly', 'Dinh'],
    cities: [
      { city: 'Hanoi', state: 'Hanoi', zips: ['100000','115000','116000'], streets: ['Pho Hue','Dinh Tien Hoang Street','Le Loi Street','Phan Dinh Phung Street','Hai Ba Trung Street'], districts: ['Hoan Kiem','Dong Da','Cau Giay'], areaCode: '024' },
      { city: 'Ho Chi Minh City', state: 'Ho Chi Minh City', zips: ['700000','710000','700900'], streets: ['Nguyen Hue Boulevard','Le Loi Street','Dong Khoi Street','Nam Ky Khoi Nghia Street','Hai Ba Trung Street'], districts: ['District 1','District 3','Binh Thanh'], areaCode: '028' },
      { city: 'Da Nang', state: 'Da Nang', zips: ['550000','551000','552000'], streets: ['Tran Phu Street','Nguyen Van Linh Street','2 Thang 9 Street','Dien Bien Phu Street','Nguyen Tat Thanh Street'], districts: ['Hai Chau','Son Tra','Ngu Hanh Son'], areaCode: '0236' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Vietnam`,
    idLabel: 'CCCD',
    idFormat: () => String(rand(100000000000, 999999999999)),
    salaryRange: [5000000, 30000000],
  },
  NL: {
    name: 'Netherlands',
    flag: '🇳🇱',
    code: 'NL',
    phoneCode: '+31',
    currency: '€',
    phoneFormat: () => `+31 6-${rand(1000, 9999)}-${rand(1000, 9999)}`,
    zipFormat: () => `${rand(1000, 9999)} ${String.fromCharCode(rand(65,90))}${String.fromCharCode(rand(65,90))}`,
    firstNames: {
      male: ['Jan', 'Pieter', 'Willem', 'Hendrik', 'Cornelis', 'Johannes', 'Dirk', 'Gerrit', 'Theodorus', 'Martinus', 'Luuk', 'Daan', 'Finn', 'Sven', 'Lars'],
      female: ['Maria', 'Anna', 'Johanna', 'Elisabeth', 'Cornelia', 'Wilhelmina', 'Hendrika', 'Geertruida', 'Petronella', 'Adriana', 'Emma', 'Lotte', 'Sofie', 'Fleur', 'Lisa']
    },
    lastNames: ['de Jong', 'Jansen', 'de Vries', 'van den Berg', 'van Dijk', 'Bakker', 'Janssen', 'Visser', 'Smit', 'Meijer', 'de Boer', 'Mulder', 'de Groot', 'Bos', 'Vos'],
    cities: [
      { city: 'Amsterdam', state: 'Noord-Holland', zips: ['1012','1013','1015'], streets: ['Damrak','Kalverstraat','Leidsestraat','Prinsengracht','Herengracht'], districts: ['Centrum','De Pijp','Jordaan'], areaCode: '20' },
      { city: 'Rotterdam', state: 'Zuid-Holland', zips: ['3011','3012','3013'], streets: ['Coolsingel','Lijnbaan','Meent','Witte de Withstraat','Nieuwe Binnenweg'], districts: ['Centrum','Delfshaven','Feijenoord'], areaCode: '10' },
      { city: 'Den Haag', state: 'Zuid-Holland', zips: ['2511','2512','2513'], streets: ['Lange Voorhout','Noordeinde','Grote Marktstraat','Spuistraat','Denneweg'], districts: ['Centrum','Scheveningen','Bezuidenhout'], areaCode: '70' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Netherlands`,
    idLabel: 'BSN',
    idFormat: () => String(rand(100000000, 999999999)),
    salaryRange: [2500, 6000],
  },
  TR: {
    name: 'Turkey',
    flag: '🇹🇷',
    code: 'TR',
    phoneCode: '+90',
    currency: '₺',
    phoneFormat: () => `+90 5${rand(30, 59)}-${rand(100, 999)}-${rand(1000, 9999)}`,
    zipFormat: () => String(rand(10000, 81999)),
    firstNames: {
      male: ['Mehmet', 'Mustafa', 'Ahmet', 'Ali', 'Hüseyin', 'Hasan', 'İbrahim', 'Ömer', 'Yusuf', 'Murat', 'Emre', 'Burak', 'Serkan', 'Kemal', 'Onur'],
      female: ['Fatma', 'Ayşe', 'Emine', 'Hatice', 'Zeynep', 'Elif', 'Merve', 'Büşra', 'Esra', 'İrem', 'Selin', 'Cemre', 'Özge', 'Gizem', 'Neslihan']
    },
    lastNames: ['Yılmaz', 'Kaya', 'Demir', 'Şahin', 'Çelik', 'Yıldız', 'Yıldırım', 'Öztürk', 'Aydın', 'Özdemir', 'Arslan', 'Doğan', 'Kılıç', 'Aslan', 'Çetin'],
    cities: [
      { city: 'Istanbul', state: 'Istanbul', zips: ['34000','34100','34200'], streets: ['İstiklal Caddesi','Bağdat Caddesi','Nişantaşı Caddesi','Divanyolu Caddesi','Cumhuriyet Caddesi'], districts: ['Beyoğlu','Kadıköy','Beşiktaş'], areaCode: '212' },
      { city: 'Ankara', state: 'Ankara', zips: ['06000','06100','06200'], streets: ['Atatürk Bulvarı','Kızılay Meydanı','Tunalı Hilmi Caddesi','Çankaya Caddesi','GMK Bulvarı'], districts: ['Çankaya','Kızılay','Ulus'], areaCode: '312' },
      { city: 'Izmir', state: 'Izmir', zips: ['35000','35100','35200'], streets: ['Kordon Boyu','Kemeraltı Caddesi','Cumhuriyet Bulvarı','Alsancak Caddesi','Şair Eşref Bulvarı'], districts: ['Konak','Bornova','Karşıyaka'], areaCode: '232' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} No:${num}, ${zip} ${city}, Turkey`,
    idLabel: 'TC Kimlik',
    idFormat: () => String(rand(10000000000, 99999999999)),
    salaryRange: [8000, 30000],
  },
  AE: {
    name: 'UAE',
    flag: '🇦🇪',
    code: 'AE',
    phoneCode: '+971',
    currency: 'AED',
    phoneFormat: () => `+971 5${rand(0,9)}-${rand(100,999)}-${rand(1000,9999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Mohammed', 'Ahmed', 'Ali', 'Omar', 'Khalid', 'Abdullah', 'Sultan', 'Hamad', 'Saeed', 'Rashid', 'Zayed', 'Majid', 'Tariq', 'Faisal', 'Yousef'],
      female: ['Fatima', 'Maryam', 'Aisha', 'Noura', 'Sara', 'Hessa', 'Shaikha', 'Latifa', 'Reem', 'Maitha', 'Dana', 'Hana', 'Nadia', 'Salma', 'Layla']
    },
    lastNames: ['Al Maktoum', 'Al Nahyan', 'Al Qasimi', 'Al Nuaimi', 'Al Rashidi', 'Al Mansoori', 'Al Hamdan', 'Al Kaabi', 'Al Suwaidi', 'Al Mazrouei', 'Al Falasi', 'Al Zaabi', 'Al Shamsi', 'Al Mulla', 'Al Blooshi'],
    cities: [
      { city: 'Dubai', state: 'Dubai', zips: ['00000','00001','00002'], streets: ['Sheikh Zayed Road','Dubai Mall Boulevard','Jumeirah Beach Road','Al Wasl Road','Business Bay Avenue'], districts: ['Downtown','Marina','Jumeirah'], areaCode: '4' },
      { city: 'Abu Dhabi', state: 'Abu Dhabi', zips: ['00100','00101','00102'], streets: ['Corniche Road','Hamdan Street','Khalifa Street','Airport Road','Al Muroor Road'], districts: ['Al Khalidiyah','Tourist Club','Al Mushrif'], areaCode: '2' },
      { city: 'Sharjah', state: 'Sharjah', zips: ['00200','00201','00202'], streets: ['Al Wahda Street','Al Arouba Road','King Faisal Street','Al Taawun Street','Maliha Road'], districts: ['Al Qasimia','Al Taawun','Al Majaz'], areaCode: '6' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, UAE`,
    idLabel: 'Emirates ID',
    idFormat: () => `784-${rand(1000,9999)}-${rand(1000000,9999999)}-${rand(1,9)}`,
    salaryRange: [5000, 25000],
  },
  PL: {
    name: 'Poland',
    flag: '🇵🇱',
    code: 'PL',
    phoneCode: '+48',
    currency: 'zł',
    phoneFormat: () => `+48 ${rand(500,799)}-${rand(100,999)}-${rand(100,999)}`,
    zipFormat: () => `${String(rand(10,99))}-${String(rand(100,999))}`,
    firstNames: {
      male: ['Piotr', 'Krzysztof', 'Andrzej', 'Tomasz', 'Stanisław', 'Marek', 'Jan', 'Paweł', 'Michał', 'Marcin', 'Łukasz', 'Grzegorz', 'Adam', 'Wojciech', 'Rafał'],
      female: ['Anna', 'Maria', 'Katarzyna', 'Małgorzata', 'Agnieszka', 'Krystyna', 'Barbara', 'Ewa', 'Zofia', 'Monika', 'Aleksandra', 'Natalia', 'Joanna', 'Magdalena', 'Karolina']
    },
    lastNames: ['Nowak', 'Kowalski', 'Wiśniewski', 'Dąbrowski', 'Lewandowski', 'Wójcik', 'Kamiński', 'Kowalczyk', 'Zieliński', 'Szymański', 'Woźniak', 'Kozłowski', 'Jankowski', 'Wojciechowski', 'Kwiatkowski'],
    cities: [
      { city: 'Warszawa', state: 'Masovian', zips: ['00-001','00-100','02-001'], streets: ['Nowy Świat','Krakowskie Przedmieście','Marszałkowska','Aleje Jerozolimskie','Chmielna'], districts: ['Śródmieście','Mokotów','Praga-Południe'], areaCode: '22' },
      { city: 'Kraków', state: 'Lesser Poland', zips: ['30-001','31-001','30-500'], streets: ['Floriańska','Grodzka','Długa','Dietla','Starowiślna'], districts: ['Stare Miasto','Kazimierz','Podgórze'], areaCode: '12' },
      { city: 'Wrocław', state: 'Lower Silesian', zips: ['50-001','51-001','53-001'], streets: ['Świdnicka','Oławska','Piłsudskiego','Kazimierza Wielkiego','Ruska'], districts: ['Stare Miasto','Krzyki','Śródmieście'], areaCode: '71' },
    ],
    streetAddress: (num, street, city, zip, state) => `ul. ${street} ${num}, ${zip} ${city}, Poland`,
    idLabel: 'PESEL',
    idFormat: () => String(rand(10000000000, 99999999999)),
    salaryRange: [3000, 12000],
  },
  AR: {
    name: 'Argentina',
    flag: '🇦🇷',
    code: 'AR',
    phoneCode: '+54',
    currency: 'ARS',
    phoneFormat: () => `+54 9 11 ${rand(1000,9999)}-${rand(1000,9999)}`,
    zipFormat: () => `${String.fromCharCode(rand(65,90))}${rand(1000,9999)}${String.fromCharCode(rand(65,90))}${String.fromCharCode(rand(65,90))}${String.fromCharCode(rand(65,90))}`,
    firstNames: {
      male: ['Nicolás', 'Matías', 'Sebastián', 'Lucas', 'Martín', 'Santiago', 'Alejandro', 'Facundo', 'Agustín', 'Tomás', 'Gonzalo', 'Federico', 'Juan', 'Pablo', 'Diego'],
      female: ['Valentina', 'Camila', 'Sofía', 'Martina', 'Florencia', 'Lucía', 'Agustina', 'Melina', 'Natalia', 'Daniela', 'Laura', 'Paula', 'Ana', 'Gabriela', 'Romina']
    },
    lastNames: ['González', 'Rodríguez', 'Gómez', 'Fernández', 'López', 'Díaz', 'Martínez', 'Pérez', 'García', 'Sánchez', 'Romero', 'Sosa', 'Torres', 'Álvarez', 'Ruiz'],
    cities: [
      { city: 'Buenos Aires', state: 'Buenos Aires', zips: ['C1000','C1002','C1004'], streets: ['Avenida de Mayo','Avenida Corrientes','Avenida 9 de Julio','Florida','Lavalle'], districts: ['San Telmo','Palermo','Recoleta'], areaCode: '11' },
      { city: 'Córdoba', state: 'Córdoba', zips: ['X5000','X5003','X5009'], streets: ['Avenida Colón','Bulevar San Juan','Avenida Hipólito Yrigoyen','Calle Obispo Trejo','Deán Funes'], districts: ['Centro','Nueva Córdoba','Alberdi'], areaCode: '351' },
      { city: 'Rosario', state: 'Santa Fe', zips: ['S2000','S2002','S2008'], streets: ['Avenida Pellegrini','Calle Córdoba','Bulevar Oroño','Avenida San Martín','Sarmiento'], districts: ['Centro','República de la Sexta','Echesortu'], areaCode: '341' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${city} ${zip}, Argentina`,
    idLabel: 'DNI',
    idFormat: () => String(rand(10000000, 99999999)),
    salaryRange: [150000, 600000],
  },
  ID: {
    name: 'Indonesia',
    flag: '🇮🇩',
    code: 'ID',
    phoneCode: '+62',
    currency: 'Rp',
    phoneFormat: () => `+62 8${rand(10,99)}-${rand(1000,9999)}-${rand(1000,9999)}`,
    zipFormat: () => String(rand(10110, 99999)),
    firstNames: {
      male: ['Budi', 'Agus', 'Eko', 'Hendra', 'Rudi', 'Dian', 'Fajar', 'Rizky', 'Arif', 'Wahyu', 'Dicky', 'Andi', 'Reza', 'Bayu', 'Yoga'],
      female: ['Siti', 'Dewi', 'Rina', 'Sri', 'Wati', 'Yuni', 'Fitri', 'Nurul', 'Indah', 'Ratna', 'Ayu', 'Rini', 'Desi', 'Hana', 'Putri']
    },
    lastNames: ['Santoso', 'Wijaya', 'Kusuma', 'Setiawan', 'Prasetyo', 'Hidayat', 'Nugroho', 'Susanto', 'Wibowo', 'Rahmawati', 'Sari', 'Putra', 'Kurniawan', 'Wahyudi', 'Suryadi'],
    cities: [
      { city: 'Jakarta', state: 'DKI Jakarta', zips: ['10110','10120','10130'], streets: ['Jalan Sudirman','Jalan Thamrin','Jalan Gatot Subroto','Jalan Rasuna Said','Jalan Kuningan'], districts: ['Gambir','Menteng','Kebayoran Baru'], areaCode: '21' },
      { city: 'Surabaya', state: 'East Java', zips: ['60111','60112','60121'], streets: ['Jalan Pemuda','Jalan Basuki Rahmat','Jalan Darmo','Jalan Raya Gubeng','Jalan Urip Sumoharjo'], districts: ['Genteng','Tegalsari','Gubeng'], areaCode: '31' },
      { city: 'Bandung', state: 'West Java', zips: ['40111','40112','40113'], streets: ['Jalan Braga','Jalan Asia Afrika','Jalan Merdeka','Jalan Dago','Jalan Pasteur'], districts: ['Sumur Bandung','Coblong','Cicendo'], areaCode: '22' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} No. ${num}, ${city} ${zip}, Indonesia`,
    idLabel: 'NIK',
    idFormat: () => String(rand(1000000000000000, 9999999999999999)),
    salaryRange: [3000000, 15000000],
  },
  NZ: {
    name: 'New Zealand',
    flag: '🇳🇿',
    code: 'NZ',
    phoneCode: '+64',
    currency: 'NZ$',
    phoneFormat: () => `+64 2${rand(1,9)}-${rand(100,999)}-${rand(1000,9999)}`,
    zipFormat: () => String(rand(1010, 9999)),
    firstNames: {
      male: ['James', 'William', 'Oliver', 'Jack', 'George', 'Charlie', 'Thomas', 'Noah', 'Liam', 'Lucas', 'Ethan', 'Mason', 'Logan', 'Harrison', 'Finn'],
      female: ['Olivia', 'Charlotte', 'Isla', 'Ava', 'Mia', 'Grace', 'Amelia', 'Emma', 'Sophie', 'Lucy', 'Lily', 'Emily', 'Ella', 'Harper', 'Ruby']
    },
    lastNames: ['Smith', 'Jones', 'Williams', 'Brown', 'Taylor', 'Wilson', 'Johnson', 'White', 'Martin', 'Anderson', 'Thompson', 'Clarke', 'Walker', 'Wright', 'Robinson'],
    cities: [
      { city: 'Auckland', state: 'Auckland', zips: ['1010','1011','1021'], streets: ['Queen Street','Ponsonby Road','Karangahape Road','Dominion Road','Great North Road'], districts: ['CBD','Ponsonby','Newmarket'], areaCode: '9' },
      { city: 'Wellington', state: 'Wellington', zips: ['6011','6012','6021'], streets: ['Lambton Quay','Courtenay Place','Cuba Street','Manners Street','Willis Street'], districts: ['CBD','Te Aro','Thorndon'], areaCode: '4' },
      { city: 'Christchurch', state: 'Canterbury', zips: ['8011','8013','8022'], streets: ['Colombo Street','Riccarton Road','Papanui Road','Fitzgerald Avenue','Cashel Street'], districts: ['Central City','Riccarton','Papanui'], areaCode: '3' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, New Zealand`,
    idLabel: 'IRD Number',
    idFormat: () => `${rand(10,99)}-${rand(100,999)}-${rand(100,999)}`,
    salaryRange: [2500, 7000],
  },
  ZA: {
    name: 'South Africa',
    flag: '🇿🇦',
    code: 'ZA',
    phoneCode: '+27',
    currency: 'R',
    phoneFormat: () => `+27 ${rand(60,84)}-${rand(100,999)}-${rand(1000,9999)}`,
    zipFormat: () => String(rand(1000, 9999)),
    firstNames: {
      male: ['Sipho', 'Thabo', 'Lebo', 'Bongani', 'Thabiso', 'Kagiso', 'Luthando', 'Sandile', 'Nhlanhla', 'Siyanda', 'Tshepo', 'Lungelo', 'Sifiso', 'Mthokozisi', 'Sibusiso'],
      female: ['Nomsa', 'Zanele', 'Thandi', 'Lerato', 'Nompumelelo', 'Ayanda', 'Nokukhanya', 'Sizakele', 'Bongiwe', 'Lungile', 'Nosipho', 'Zinhle', 'Nokuthula', 'Ntombi', 'Nolwazi']
    },
    lastNames: ['Nkosi', 'Dlamini', 'Sithole', 'Mahlangu', 'Khumalo', 'Ndlovu', 'Mthembu', 'Ngcobo', 'Mhlongo', 'Bhengu', 'Zulu', 'Xulu', 'Ntanzi', 'Mnguni', 'Khoza'],
    cities: [
      { city: 'Johannesburg', state: 'Gauteng', zips: ['2000','2001','2107'], streets: ['Commissioner Street','Fox Street','Bree Street','Rissik Street','Jeppe Street'], districts: ['CBD','Sandton','Soweto'], areaCode: '11' },
      { city: 'Cape Town', state: 'Western Cape', zips: ['8000','8001','8005'], streets: ['Long Street','Buitenkant Street','Adderley Street','Strand Street','Kloof Street'], districts: ['City Bowl','Gardens','Sea Point'], areaCode: '21' },
      { city: 'Durban', state: 'KwaZulu-Natal', zips: ['4001','4051','4052'], streets: ['West Street','Smith Street','Florida Road','Umgeni Road','Marine Parade'], districts: ['CBD','Berea','Morningside'], areaCode: '31' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, ${state} ${zip}, South Africa`,
    idLabel: 'SA ID Number',
    idFormat: () => String(rand(7000000000000, 9999999999999)),
    salaryRange: [5000, 30000],
  },
  SE: {
    name: 'Sweden',
    flag: '🇸🇪',
    code: 'SE',
    phoneCode: '+46',
    currency: 'kr',
    phoneFormat: () => `+46 7${rand(0,9)}-${rand(100,999)}-${rand(10,99)}-${rand(10,99)}`,
    zipFormat: () => `${rand(100,999)} ${rand(10,99)}`,
    firstNames: {
      male: ['Lars', 'Erik', 'Karl', 'Johan', 'Per', 'Anders', 'Mikael', 'Stefan', 'Björn', 'Peter', 'Andreas', 'Jonas', 'Daniel', 'Mattias', 'Niklas'],
      female: ['Anna', 'Eva', 'Maria', 'Karin', 'Sara', 'Emma', 'Lena', 'Kristina', 'Ingrid', 'Malin', 'Johanna', 'Sofia', 'Linda', 'Camilla', 'Helena']
    },
    lastNames: ['Johansson', 'Andersson', 'Karlsson', 'Nilsson', 'Eriksson', 'Larsson', 'Olsson', 'Persson', 'Svensson', 'Gustafsson', 'Pettersson', 'Jonsson', 'Jansson', 'Hansson', 'Bengtsson'],
    cities: [
      { city: 'Stockholm', state: 'Stockholm', zips: ['111 20','114 26','116 20'], streets: ['Drottninggatan','Kungsgatan','Strandvägen','Götgatan','Birger Jarlsgatan'], districts: ['Norrmalm','Södermalm','Östermalm'], areaCode: '8' },
      { city: 'Göteborg', state: 'Västra Götaland', zips: ['411 01','413 01','414 63'], streets: ['Avenyn','Kungsportsavenyn','Kungsgatan','Vasagatan','Östra Hamngatan'], districts: ['Centrum','Majorna','Haga'], areaCode: '31' },
      { city: 'Malmö', state: 'Skåne', zips: ['211 11','214 23','215 68'], streets: ['Södergatan','Stortorget','Drottninggatan','Amiralsgatan','Davidshallsgatan'], districts: ['Centrum','Husie','Limhamn'], areaCode: '40' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Sweden`,
    idLabel: 'Personnummer',
    idFormat: () => `${rand(19,20)}${String(rand(0,99)).padStart(2,'0')}${String(rand(1,12)).padStart(2,'0')}${String(rand(1,28)).padStart(2,'0')}-${rand(1000,9999)}`,
    salaryRange: [25000, 60000],
  },
  CH: {
    name: 'Switzerland',
    flag: '🇨🇭',
    code: 'CH',
    phoneCode: '+41',
    currency: 'CHF',
    phoneFormat: () => `+41 7${rand(5,9)}-${rand(100,999)}-${rand(10,99)}-${rand(10,99)}`,
    zipFormat: () => String(rand(1000, 9658)),
    firstNames: {
      male: ['Hans', 'Peter', 'Thomas', 'Andreas', 'Martin', 'Markus', 'Daniel', 'Stefan', 'Urs', 'Beat', 'Michael', 'Christian', 'Patrick', 'David', 'Nicolas'],
      female: ['Anna', 'Maria', 'Elisabeth', 'Sandra', 'Nicole', 'Christine', 'Laura', 'Sarah', 'Claudia', 'Monika', 'Julia', 'Karin', 'Barbara', 'Sabine', 'Katharina']
    },
    lastNames: ['Müller', 'Meier', 'Schmid', 'Keller', 'Weber', 'Huber', 'Schneider', 'Meyer', 'Steiner', 'Fischer', 'Gerber', 'Zimmermann', 'Brunner', 'Widmer', 'Lehmann'],
    cities: [
      { city: 'Zürich', state: 'Zürich', zips: ['8001','8002','8003'], streets: ['Bahnhofstrasse','Langstrasse','Limmatquai','Rämistrasse','Zähringerstrasse'], districts: ['Altstadt','Wiedikon','Oerlikon'], areaCode: '44' },
      { city: 'Genève', state: 'Genève', zips: ['1201','1202','1204'], streets: ['Rue du Rhône','Rue de Rive','Boulevard du Pont-d\'Arve','Rue de la Croix-d\'Or','Rue du Marché'], districts: ['Eaux-Vives','Plainpalais','Jonction'], areaCode: '22' },
      { city: 'Bern', state: 'Bern', zips: ['3001','3006','3007'], streets: ['Marktgasse','Kramgasse','Spitalgasse','Aarbergergasse','Bundesgasse'], districts: ['Altstadt','Länggasse','Bümpliz'], areaCode: '31' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Switzerland`,
    idLabel: 'AHV-Nummer',
    idFormat: () => `756.${rand(1000,9999)}.${rand(1000,9999)}.${rand(10,99)}`,
    salaryRange: [5000, 12000],
  },
  IL: {
    name: 'Israel',
    flag: '🇮🇱',
    code: 'IL',
    phoneCode: '+972',
    currency: '₪',
    phoneFormat: () => `+972 ${[50,52,53,54,55,58][rand(0,5)]}-${rand(100,999)}-${rand(1000,9999)}`,
    zipFormat: () => String(rand(1000000, 9999999)),
    firstNames: {
      male: ['Noam', 'David', 'Avi', 'Moshe', 'Yosef', 'Itai', 'Eyal', 'Roi', 'Nir', 'Amir', 'Ariel', 'Shai', 'Or', 'Gal', 'Yonatan'],
      female: ['Tamar', 'Noa', 'Maya', 'Shira', 'Michal', 'Yael', 'Rina', 'Dana', 'Liora', 'Tali', 'Ori', 'Gali', 'Sivan', 'Keren', 'Inbar']
    },
    lastNames: ['Cohen', 'Levi', 'Mizrahi', 'Peretz', 'Biton', 'Dahan', 'Gabay', 'Friedman', 'Shapiro', 'Katz', 'Goldberg', 'Ben-David', 'Azoulay', 'Malka', 'Amar'],
    cities: [
      { city: 'Tel Aviv', state: 'Tel Aviv District', zips: ['6120101','6201001','6209201'], streets: ['Dizengoff Street','Ben Yehuda Street','Rothschild Boulevard','Allenby Street','Ibn Gabirol Street'], districts: ['Center','North','South'], areaCode: '03' },
      { city: 'Jerusalem', state: 'Jerusalem District', zips: ['9100101','9143204','9421701'], streets: ['Jaffa Street','King George Street','Ben Yehuda Street','Emek Refaim Street','Hebron Road'], districts: ['City Center','German Colony','Rechavia'], areaCode: '02' },
      { city: 'Haifa', state: 'Haifa District', zips: ['3301602','3308007','3435201'], streets: ['Herzl Street','Ben Gurion Boulevard','HaNassi Boulevard','Sderot HaNadiv','Moriya Avenue'], districts: ['Hadar','Carmel','Downtown'], areaCode: '04' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, Israel`,
    idLabel: 'Teudat Zehut',
    idFormat: () => String(rand(100000000, 999999999)),
    salaryRange: [8000, 25000],
  },
  EG: {
    name: 'Egypt',
    flag: '🇪🇬',
    code: 'EG',
    phoneCode: '+20',
    currency: 'EGP',
    phoneFormat: () => `+20 1${[0,1,2,5][rand(0,3)]}${rand(10000000, 99999999)}`,
    zipFormat: () => String(rand(11111, 56999)),
    firstNames: {
      male: ['Mohamed', 'Ahmed', 'Mahmoud', 'Ibrahim', 'Ali', 'Hassan', 'Omar', 'Khaled', 'Kareem', 'Tarek', 'Amr', 'Hani', 'Walid', 'Sherif', 'Mostafa'],
      female: ['Fatima', 'Mariam', 'Nour', 'Sara', 'Aya', 'Mona', 'Rania', 'Dina', 'Heba', 'Noha', 'Amira', 'Yasmine', 'Hana', 'Eman', 'Asmaa']
    },
    lastNames: ['Hassan', 'Ibrahim', 'Mohamed', 'Ali', 'Ahmed', 'Mahmoud', 'Khalil', 'Mansour', 'Saad', 'Abdel-Rahman', 'El-Sayed', 'Morsi', 'Fahmy', 'Salah', 'Mostafa'],
    cities: [
      { city: 'Cairo', state: 'Cairo Governorate', zips: ['11511','11514','11311'], streets: ['Qasr Al-Aini Street','Ramses Street','Corniche El-Nil','Salah Salem Road','El Tahrir Square'], districts: ['Zamalek','Downtown','Heliopolis'], areaCode: '02' },
      { city: 'Alexandria', state: 'Alexandria Governorate', zips: ['21111','21131','21521'], streets: ['Corniche Road','El-Hurriya Road','Port Said Street','Gamal Abdel Nasser Street','25 July Street'], districts: ['Montazah','Sidi Bishr','Stanley'], areaCode: '03' },
      { city: 'Giza', state: 'Giza Governorate', zips: ['12511','12571','12621'], streets: ['Pyramids Road','Sudan Street','Faisal Street','Haram Street','Al-Ahram Street'], districts: ['Dokki','Agouza','Mohandessin'], areaCode: '02' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Egypt`,
    idLabel: 'National ID',
    idFormat: () => String(rand(10000000000000, 99999999999999)),
    salaryRange: [3000, 15000],
  },
  NG: {
    name: 'Nigeria',
    flag: '🇳🇬',
    code: 'NG',
    phoneCode: '+234',
    currency: '₦',
    phoneFormat: () => `+234 ${[803,806,810,813,814,816,903,906][rand(0,7)]}-${rand(100,999)}-${rand(1000,9999)}`,
    zipFormat: () => String(rand(100001, 999999)),
    firstNames: {
      male: ['Emeka', 'Chidi', 'Tunde', 'Seun', 'Biodun', 'Chinedu', 'Oluwasegun', 'Adebayo', 'Nnamdi', 'Ike', 'Obinna', 'Kelechi', 'Sola', 'Gbenga', 'Tobi'],
      female: ['Ngozi', 'Amaka', 'Bimpe', 'Chioma', 'Adaeze', 'Tolani', 'Taiwo', 'Yetunde', 'Funmi', 'Bukola', 'Ifeoma', 'Chinwe', 'Nneka', 'Chiamaka', 'Folake']
    },
    lastNames: ['Okafor', 'Adeyemi', 'Okonkwo', 'Babatunde', 'Nwosu', 'Adeleke', 'Eze', 'Obi', 'Adesanya', 'Nwankwo', 'Chukwu', 'Bello', 'Olawale', 'Ogbonna', 'Dike'],
    cities: [
      { city: 'Lagos', state: 'Lagos State', zips: ['100001','100002','101001'], streets: ['Broad Street','Adeola Odeku Street','Balogun Market Road','Awolowo Road','Marina Street'], districts: ['Victoria Island','Lagos Island','Ikoyi'], areaCode: '01' },
      { city: 'Abuja', state: 'FCT', zips: ['900001','900002','900211'], streets: ['Constitution Avenue','Nnamdi Azikiwe Way','Ahmadu Bello Way','Independence Avenue','Herbert Macaulay Way'], districts: ['Central Business District','Garki','Wuse'], areaCode: '09' },
      { city: 'Port Harcourt', state: 'Rivers State', zips: ['500001','500002','500003'], streets: ['Aba Road','Rumuola Road','Elelenwo Street','Trans-Amadi Road','GRA Phase 2 Road'], districts: ['GRA','Diobu','Trans-Amadi'], areaCode: '084' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, Nigeria`,
    idLabel: 'NIN',
    idFormat: () => String(rand(10000000000, 99999999999)),
    salaryRange: [50000, 500000],
  },
  CL: {
    name: 'Chile',
    flag: '🇨🇱',
    code: 'CL',
    phoneCode: '+56',
    currency: 'CLP',
    phoneFormat: () => `+56 9 ${rand(1000,9999)} ${rand(1000,9999)}`,
    zipFormat: () => String(rand(1000000, 9999999)),
    firstNames: {
      male: ['Sebastian', 'Matias', 'Nicolas', 'Alejandro', 'Diego', 'Felipe', 'Ignacio', 'Cristobal', 'Rodrigo', 'Martin', 'Gabriel', 'Tomas', 'Pablo', 'Joaquin', 'Andres'],
      female: ['Valentina', 'Camila', 'Sofia', 'Isidora', 'Javiera', 'Florencia', 'Constanza', 'Catalina', 'Daniela', 'Francisca', 'Martina', 'Antonella', 'Renata', 'Maria', 'Ana']
    },
    lastNames: ['Gonzalez', 'Munoz', 'Rojas', 'Diaz', 'Perez', 'Soto', 'Contreras', 'Silva', 'Martinez', 'Sepulveda', 'Morales', 'Rodriguez', 'Lopez', 'Fuentes', 'Hernandez'],
    cities: [
      { city: 'Santiago', state: 'Santiago Metropolitan', zips: ['8320000','8340593','7500000'], streets: ['Avenida Libertador Bernardo O\'Higgins','Avenida Providencia','Avenida Apoquindo','Avenida Las Condes','Paseo Ahumada'], districts: ['Santiago Centro','Providencia','Las Condes'], areaCode: '2' },
      { city: 'Valparaiso', state: 'Valparaiso Region', zips: ['2340000','2380264','2380000'], streets: ['Avenida Brasil','Avenida Argentina','Condell Street','Pedro Montt Avenue','Errazuriz Avenue'], districts: ['Cerro Alegre','El Plan','Cerro Concepcion'], areaCode: '32' },
      { city: 'Concepcion', state: 'Biobio Region', zips: ['4030000','4040000','4070000'], streets: ['Avenida O\'Higgins','Calle Caupolican','Avenida Chacabuco','Calle Freire','Avenida Los Carrera'], districts: ['Centro','Pedro de Valdivia','Hualpen'], areaCode: '41' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${city}, Chile`,
    idLabel: 'RUT',
    idFormat: () => `${rand(1000000,25999999)}-${rand(0,9)}`,
    salaryRange: [400000, 2000000],
  },
  CO: {
    name: 'Colombia',
    flag: '🇨🇴',
    code: 'CO',
    phoneCode: '+57',
    currency: 'COP',
    phoneFormat: () => `+57 ${[310,311,312,313,314,315,316,317,318,319][rand(0,9)]} ${rand(1000000,9999999)}`,
    zipFormat: () => String(rand(110111, 999999)),
    firstNames: {
      male: ['Santiago', 'Juan', 'Alejandro', 'Sebastian', 'Daniel', 'Andres', 'David', 'Felipe', 'Diego', 'Carlos', 'Miguel', 'Luis', 'Cristian', 'Nicolas', 'Camilo'],
      female: ['Valentina', 'Sofia', 'Isabella', 'Camila', 'Daniela', 'Alejandra', 'Maria', 'Natalia', 'Juliana', 'Paola', 'Andrea', 'Sara', 'Manuela', 'Laura', 'Mariana']
    },
    lastNames: ['Garcia', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Perez', 'Sanchez', 'Ramirez', 'Gomez', 'Torres', 'Diaz', 'Vargas', 'Castro', 'Jimenez'],
    cities: [
      { city: 'Bogota', state: 'Bogota D.C.', zips: ['110111','110221','110311'], streets: ['Carrera 7','Avenida El Dorado','Calle 72','Avenida 19','Calle 53'], districts: ['La Candelaria','Chapinero','Suba'], areaCode: '1' },
      { city: 'Medellin', state: 'Antioquia', zips: ['050001','050010','050021'], streets: ['El Poblado Avenue','Carrera 43A','Junin Street','San Juan Avenue','Las Vegas Avenue'], districts: ['El Poblado','Laureles','Belen'], areaCode: '4' },
      { city: 'Cali', state: 'Valle del Cauca', zips: ['760001','760020','760045'], streets: ['Avenida Colombia','Carrera 5','Calle 13','Avenida Roosevelt','Carrera 100'], districts: ['El Centro','San Antonio','Ciudad Jardin'], areaCode: '2' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} #${num}, ${city}, Colombia`,
    idLabel: 'Cedula',
    idFormat: () => String(rand(100000000, 1999999999)),
    salaryRange: [1200000, 6000000],
  },
  PE: {
    name: 'Peru',
    flag: '🇵🇪',
    code: 'PE',
    phoneCode: '+51',
    currency: 'PEN',
    phoneFormat: () => `+51 9${rand(10,99)}-${rand(100,999)}-${rand(100,999)}`,
    zipFormat: () => String(rand(1, 99999)).padStart(5, '0'),
    firstNames: {
      male: ['Alejandro', 'Luis', 'Carlos', 'Jorge', 'Miguel', 'Pedro', 'Juan', 'Daniel', 'Rodrigo', 'Jose', 'Diego', 'Fernando', 'Ricardo', 'Andres', 'Sebastian'],
      female: ['Valentina', 'Sofia', 'Maria', 'Lucia', 'Camila', 'Daniela', 'Isabella', 'Gabriela', 'Ana', 'Paula', 'Rosa', 'Carmen', 'Adriana', 'Patricia', 'Claudia']
    },
    lastNames: ['Garcia', 'Rodriguez', 'Lopez', 'Martinez', 'Sanchez', 'Flores', 'Huanca', 'Quispe', 'Mamani', 'Condori', 'Vargas', 'Morales', 'Ramos', 'Cruz', 'Torres'],
    cities: [
      { city: 'Lima', state: 'Lima Region', zips: ['15001','15036','15074'], streets: ['Avenida Larco','Jiron de la Union','Avenida Arequipa','Avenida Brasil','Miraflores Boulevard'], districts: ['Miraflores','San Isidro','Barranco'], areaCode: '1' },
      { city: 'Arequipa', state: 'Arequipa Region', zips: ['04001','04002','04003'], streets: ['Mercaderes Street','San Juan de Dios Street','Moral Street','Santa Catalina Street','Alvarez Thomas Avenue'], districts: ['Cercado','Cayma','Mariano Melgar'], areaCode: '54' },
      { city: 'Cusco', state: 'Cusco Region', zips: ['08001','08002','08003'], streets: ['Avenida El Sol','Calle Hatun Rumiyoc','Calle del Medio','Avenida Tupac Amaru','Santa Teresa Street'], districts: ['Cusco','San Sebastian','Wanchaq'], areaCode: '84' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Peru`,
    idLabel: 'DNI',
    idFormat: () => String(rand(10000000, 99999999)),
    salaryRange: [900, 5000],
  },
  IE: {
    name: 'Ireland',
    flag: '🇮🇪',
    code: 'IE',
    phoneCode: '+353',
    currency: '€',
    phoneFormat: () => `+353 8${rand(0,9)}-${rand(100,999)}-${rand(1000,9999)}`,
    zipFormat: () => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return `${letters[rand(0,25)]}${rand(10,99)} ${letters[rand(0,25)]}${rand(10,99)}`;
    },
    firstNames: {
      male: ['Liam', 'Conor', 'Sean', 'Patrick', 'James', 'Ryan', 'Jack', 'Niall', 'Cian', 'Oisin', 'Finn', 'Eoin', 'Declan', 'Brendan', 'Kieran'],
      female: ['Aoife', 'Ciara', 'Niamh', 'Siobhan', 'Sinead', 'Aisling', 'Orla', 'Maeve', 'Roisin', 'Caoimhe', 'Emma', 'Sophie', 'Grace', 'Hannah', 'Clodagh']
    },
    lastNames: ['Murphy', 'Kelly', 'O\'Sullivan', 'Walsh', 'Smith', 'O\'Brien', 'Byrne', 'Ryan', 'O\'Connor', 'O\'Neill', 'Doyle', 'McCarthy', 'Gallagher', 'O\'Doherty', 'Kennedy'],
    cities: [
      { city: 'Dublin', state: 'Leinster', zips: ['D01','D02','D04'], streets: ['O\'Connell Street','Grafton Street','Dame Street','Nassau Street','St. Stephen\'s Green'], districts: ['City Centre','Southside','Northside'], areaCode: '01' },
      { city: 'Cork', state: 'Munster', zips: ['T12','T23','T45'], streets: ['Patrick Street','Washington Street','MacCurtain Street','Grand Parade','South Mall'], districts: ['City Centre','Blackpool','Bishopstown'], areaCode: '021' },
      { city: 'Galway', state: 'Connacht', zips: ['H91','H54','H65'], streets: ['Shop Street','High Street','William Street','Dominick Street','Eyre Square'], districts: ['City Centre','Salthill','Knocknacarra'], areaCode: '091' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Ireland`,
    idLabel: 'PPS Number',
    idFormat: () => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return `${rand(1000000,9999999)}${letters[rand(0,25)]}${letters[rand(0,25)]}`;
    },
    salaryRange: [2500, 8000],
  },
  PT: {
    name: 'Portugal',
    flag: '🇵🇹',
    code: 'PT',
    phoneCode: '+351',
    currency: '€',
    phoneFormat: () => `+351 9${[1,2,3,6][rand(0,3)]}${rand(1000000,9999999)}`,
    zipFormat: () => `${rand(1000,9999)}-${String(rand(0,999)).padStart(3,'0')}`,
    firstNames: {
      male: ['Joao', 'Miguel', 'Pedro', 'Andre', 'Ricardo', 'Tiago', 'Luis', 'Rui', 'Nuno', 'Filipe', 'Carlos', 'Jorge', 'Antonio', 'Francisco', 'Goncalo'],
      female: ['Ana', 'Maria', 'Sofia', 'Catarina', 'Ines', 'Mariana', 'Marta', 'Sara', 'Joana', 'Beatriz', 'Patricia', 'Teresa', 'Helena', 'Andreia', 'Rita']
    },
    lastNames: ['Silva', 'Santos', 'Ferreira', 'Pereira', 'Oliveira', 'Costa', 'Rodrigues', 'Martins', 'Jesus', 'Sousa', 'Fernandes', 'Goncalves', 'Gomes', 'Lopes', 'Marques'],
    cities: [
      { city: 'Lisboa', state: 'Lisboa District', zips: ['1100-001','1200-001','1300-001'], streets: ['Avenida da Liberdade','Rua Augusta','Rua do Ouro','Praca do Comercio','Rua Garrett'], districts: ['Baixa','Chiado','Bairro Alto'], areaCode: '21' },
      { city: 'Porto', state: 'Porto District', zips: ['4000-001','4100-001','4050-001'], streets: ['Rua de Santa Catarina','Avenida dos Aliados','Rua das Flores','Rua do Infante Dom Henrique','Rua 31 de Janeiro'], districts: ['Baixa','Bonfim','Cedofeita'], areaCode: '22' },
      { city: 'Faro', state: 'Faro District', zips: ['8000-001','8000-250','8000-400'], streets: ['Rua de Santo Antonio','Rua Dom Francisco Gomes','Largo do Carmo','Avenida da Republica','Rua Conselheiro Bivar'], districts: ['Centro Historico','Montenegro','Gambelas'], areaCode: '289' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${zip} ${city}, Portugal`,
    idLabel: 'NIF',
    idFormat: () => String(rand(100000000, 999999999)),
    salaryRange: [800, 3000],
  },
  GR: {
    name: 'Greece',
    flag: '🇬🇷',
    code: 'GR',
    phoneCode: '+30',
    currency: '€',
    phoneFormat: () => `+30 69${rand(0,9)}${rand(1000000,9999999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Nikos', 'Giorgos', 'Dimitris', 'Kostas', 'Thanasis', 'Makis', 'Panos', 'Stavros', 'Alexandros', 'Spyros', 'Christos', 'Vasilis', 'Tasos', 'Gianni', 'Petros'],
      female: ['Maria', 'Elena', 'Eleni', 'Christina', 'Anna', 'Katerina', 'Sofia', 'Alexia', 'Stavroula', 'Ioanna', 'Dimitra', 'Nikoleta', 'Despina', 'Irene', 'Antonia']
    },
    lastNames: ['Papadopoulos', 'Papadimitriou', 'Oikonomou', 'Papageorgiou', 'Alexiou', 'Christodoulou', 'Georgiou', 'Ioannou', 'Petrou', 'Stavros', 'Antoniou', 'Nikolaou', 'Andreou', 'Stylianou', 'Demetriou'],
    cities: [
      { city: 'Athens', state: 'Attica', zips: ['10431','10552','11471'], streets: ['Stadiou Street','Ermou Street','Panepistimiou Street','Athinas Street','Voulis Street'], districts: ['Syntagma','Monastiraki','Kolonaki'], areaCode: '21' },
      { city: 'Thessaloniki', state: 'Central Macedonia', zips: ['54621','54622','54630'], streets: ['Tsimiski Street','Egnatia Street','Aristotelous Square','Mitropoleos Street','Nikis Avenue'], districts: ['Centre','Ladadika','Vardaris'], areaCode: '2310' },
      { city: 'Heraklion', state: 'Crete', zips: ['71201','71202','71306'], streets: ['25th August Street','1866 Street','Daidalou Street','Handakos Street','Knossos Avenue'], districts: ['Old Town','Ammoudara','Agia Triada'], areaCode: '2810' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Greece`,
    idLabel: 'AMKA',
    idFormat: () => `${String(rand(1,31)).padStart(2,'0')}${String(rand(1,12)).padStart(2,'0')}${rand(10,99)}${rand(10000,99999)}`,
    salaryRange: [700, 3000],
  },
  UA: {
    name: 'Ukraine',
    flag: '🇺🇦',
    code: 'UA',
    phoneCode: '+380',
    currency: '₴',
    phoneFormat: () => `+380 ${[50,63,66,67,68,73,91,93,95,97,98,99][rand(0,11)]}-${rand(100,999)}-${rand(10,99)}-${rand(10,99)}`,
    zipFormat: () => String(rand(1000, 99999)).padStart(5, '0'),
    firstNames: {
      male: ['Oleksandr', 'Mykola', 'Vasyl', 'Ivan', 'Andriy', 'Dmytro', 'Serhiy', 'Volodymyr', 'Artem', 'Bohdan', 'Yaroslav', 'Taras', 'Mykhailo', 'Viktor', 'Roman'],
      female: ['Olena', 'Nataliya', 'Yuliya', 'Oksana', 'Iryna', 'Tetiana', 'Svitlana', 'Mariia', 'Daryna', 'Sofia', 'Anastasiya', 'Kateryna', 'Larysa', 'Lyudmyla', 'Vira']
    },
    lastNames: ['Kovalenko', 'Bondarenko', 'Tkachenko', 'Kravchenko', 'Shevchenko', 'Marchenko', 'Petrenko', 'Melnyk', 'Lysenko', 'Moroz', 'Koval', 'Savchenko', 'Ponomarenko', 'Lazarenko', 'Pavlenko'],
    cities: [
      { city: 'Kyiv', state: 'Kyiv Oblast', zips: ['01001','02000','03150'], streets: ['Khreshchatyk Street','Bohdan Khmelnytsky Street','Velyka Vasylkivska Street','Saksahanskoho Street','Volodymyrska Street'], districts: ['Pecherskyi','Shevchenkivskyi','Holosiivskyi'], areaCode: '44' },
      { city: 'Lviv', state: 'Lviv Oblast', zips: ['79000','79008','79013'], streets: ['Svobody Avenue','Rynok Square','Shevchenko Avenue','Franka Street','Horodotska Street'], districts: ['Halychyna','Sykhiv','Lychakiv'], areaCode: '32' },
      { city: 'Odesa', state: 'Odesa Oblast', zips: ['65000','65012','65023'], streets: ['Derybasivska Street','Prymorsky Boulevard','Kanatna Street','Pushkinska Street','Velyka Arnautska Street'], districts: ['Prymorskyi','Khadjibeyskyi','Malinovskyi'], areaCode: '48' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Ukraine`,
    idLabel: 'IPN',
    idFormat: () => String(rand(1000000000, 9999999999)),
    salaryRange: [8000, 40000],
  },
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
