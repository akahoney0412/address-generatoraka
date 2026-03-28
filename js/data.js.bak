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
    cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'Indianapolis', 'San Francisco', 'Seattle', 'Denver', 'Boston'],
    streets: ['Main St', 'Oak Ave', 'Maple Dr', 'Cedar Ln', 'Pine Rd', 'Elm St', 'Washington Blvd', 'Lake Dr', 'Hill Rd', 'Park Ave', 'River Rd', 'Forest Way', 'Sunset Blvd', 'Broadway', 'First Ave'],
    states: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
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
    cities: ['London', 'Birmingham', 'Leeds', 'Glasgow', 'Sheffield', 'Bradford', 'Edinburgh', 'Liverpool', 'Manchester', 'Bristol', 'Wakefield', 'Cardiff', 'Coventry', 'Nottingham', 'Leicester', 'Sunderland', 'Belfast', 'Newcastle', 'Brighton', 'Oxford'],
    streets: ['High Street', 'Church Lane', 'Victoria Road', 'Park Avenue', 'Station Road', 'King Street', 'Queen Street', 'New Road', 'Green Lane', 'Mill Road', 'The Avenue', 'Bridge Street', 'North Street', 'South Road', 'West Street'],
    states: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
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
    cities: ['北京', '上海', '广州', '深圳', '成都', '杭州', '武汉', '西安', '南京', '重庆', '天津', '苏州', '郑州', '青岛', '大连', '沈阳', '长沙', '济南', '哈尔滨', '昆明'],
    streets: ['中山路', '人民路', '解放路', '建国路', '长安街', '南京路', '北京路', '和平路', '新华路', '光明路', '文化路', '胜利路', '兴华路', '建设路', '振兴路'],
    states: ['北京市', '上海市', '广东省', '四川省', '浙江省', '湖北省', '陕西省', '江苏省', '重庆市', '天津市'],
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
    cities: ['東京', '横浜', '大阪', '名古屋', '札幌', '福岡', '神戸', '京都', '川崎', 'さいたま', '広島', '仙台', '千葉', '北九州', '堺', '浜松', '熊本', '相模原', '岡山', '静岡'],
    streets: ['桜通', '中央通', '東通', '西通', '南通', '北通', '本町', '大通', '商店街', '若宮', '大路', '通り', '元町', '住吉'],
    states: ['東京都', '神奈川県', '大阪府', '愛知県', '北海道', '福岡県', '兵庫県', '京都府', '埼玉県', '千葉県'],
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
    cities: ['서울', '부산', '인천', '대구', '대전', '광주', '수원', '울산', '성남', '고양', '용인', '부천', '안산', '안양', '남양주', '화성', '창원', '청주', '전주', '천안'],
    streets: ['강남대로', '테헤란로', '종로', '세종대로', '올림픽로', '영동대로', '통일로', '중앙로', '대학로', '해운대로'],
    states: ['서울특별시', '부산광역시', '인천광역시', '대구광역시', '경기도', '경상남도', '경상북도', '전라남도', '전라북도', '충청남도'],
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
    cities: ['Manila', 'Quezon City', 'Caloocan', 'Davao', 'Cebu City', 'Zamboanga', 'Antipolo', 'Taguig', 'Pasig', 'Cagayan de Oro', 'Parañaque', 'Las Piñas', 'Makati', 'Bacolod', 'Muntinlupa'],
    streets: ['Rizal Avenue', 'Quezon Boulevard', 'España Boulevard', 'Roxas Boulevard', 'Taft Avenue', 'EDSA', 'Shaw Boulevard', 'Commonwealth Avenue', 'Aurora Boulevard', 'Ortigas Avenue'],
    states: ['Metro Manila', 'Cebu', 'Davao', 'Central Visayas', 'Northern Mindanao', 'Western Visayas', 'Calabarzon', 'Central Luzon', 'Cordillera', 'Ilocos Region'],
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
    cities: ['Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hannover', 'Nürnberg', 'Duisburg', 'Bochum', 'Wuppertal', 'Bonn', 'Bielefeld', 'Mannheim'],
    streets: ['Hauptstraße', 'Schulstraße', 'Gartenstraße', 'Dorfstraße', 'Bahnhofstraße', 'Kirchstraße', 'Bergstraße', 'Waldstraße', 'Ringstraße', 'Lindenstraße', 'Rathausplatz', 'Marktplatz', 'Münchener Str.', 'Berliner Str.', 'Frankfurter Str.'],
    states: ['Bayern', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hessen', 'Mecklenburg-Vorpommern', 'Niedersachsen', 'Nordrhein-Westfalen', 'Rheinland-Pfalz'],
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
    cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Saint-Étienne', 'Le Havre', 'Toulon', 'Grenoble', 'Dijon', 'Angers', 'Nîmes', 'Villeurbanne'],
    streets: ['Rue de la Paix', 'Avenue des Champs-Élysées', 'Rue Victor Hugo', 'Boulevard Haussmann', 'Rue de Rivoli', 'Avenue Montaigne', 'Rue du Faubourg', 'Allée des Roses', 'Impasse Beaumont', 'Passage du Commerce'],
    states: ['Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Auvergne-Rhône-Alpes', 'Occitanie', 'Nouvelle-Aquitaine', 'Bretagne', 'Normandie', 'Hauts-de-France', 'Grand Est', 'Pays de la Loire'],
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
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle', 'Canberra', 'Sunshine Coast', 'Wollongong', 'Hobart', 'Geelong', 'Townsville', 'Cairns', 'Darwin', 'Toowoomba', 'Ballarat', 'Bendigo', 'Launceston', 'Albury'],
    streets: ['George Street', 'Queen Street', 'King Street', 'Elizabeth Street', 'Collins Street', 'Bourke Street', 'Flinders Street', 'Swanston Street', 'Spencer Street', 'William Street', 'Pitt Street', 'Bridge Road', 'Chapel Street', 'High Street', 'Pacific Highway'],
    states: ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'],
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
    cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener', 'London', 'Victoria', 'Halifax', 'Oshawa', 'Windsor', 'Saskatoon', 'Regina', 'Sherbrooke', 'Kelowna', 'Barrie'],
    streets: ['Main Street', 'King Street', 'Queen Street', 'Yonge Street', 'Bay Street', 'Front Street', 'Bloor Street', 'Dundas Street', 'Eglinton Avenue', 'Lawrence Avenue', 'Sheppard Avenue', 'Finch Avenue', 'Victoria Street', 'Church Street', 'Spadina Avenue'],
    states: ['ON', 'QC', 'BC', 'AB', 'MB', 'SK', 'NS', 'NB', 'NL', 'PE', 'NT', 'YT', 'NU'],
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
    cities: ['Roma', 'Milano', 'Napoli', 'Torino', 'Palermo', 'Genova', 'Bologna', 'Firenze', 'Bari', 'Catania', 'Venezia', 'Verona', 'Messina', 'Padova', 'Trieste', 'Taranto', 'Brescia', 'Reggio Calabria', 'Modena', 'Prato'],
    streets: ['Via Roma', 'Via Garibaldi', 'Corso Italia', 'Via Nazionale', 'Via Manzoni', 'Piazza del Duomo', 'Via Dante', 'Corso Vittorio Emanuele', 'Via dei Mille', 'Via della Repubblica'],
    states: ['Lazio', 'Lombardia', 'Campania', 'Piemonte', 'Sicilia', 'Liguria', 'Emilia-Romagna', 'Toscana', 'Puglia', 'Veneto'],
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
    cities: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Murcia', 'Palma', 'Las Palmas', 'Bilbao', 'Alicante', 'Córdoba', 'Valladolid', 'Vigo', 'Gijón', 'Eixample', 'A Coruña', 'Vitoria-Gasteiz', 'Granada', 'Elche'],
    streets: ['Calle Mayor', 'Gran Vía', 'Paseo de Gracia', 'Calle de Alcalá', 'Rambla de Cataluña', 'Avenida del Libertador', 'Calle de Serrano', 'Paseo de la Castellana', 'Calle del Arenal', 'Avenida de la Paz'],
    states: ['Madrid', 'Cataluña', 'Comunidad Valenciana', 'Andalucía', 'Aragón', 'Murcia', 'Baleares', 'Canarias', 'País Vasco', 'Galicia'],
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
    cities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Porto Alegre', 'Belém', 'Goiânia', 'Guarulhos', 'Campinas', 'São Luís', 'Maceió', 'Natal', 'Teresina', 'Campo Grande', 'João Pessoa'],
    streets: ['Rua das Flores', 'Avenida Paulista', 'Rua Brasil', 'Avenida Brasil', 'Rua das Acácias', 'Travessa da Paz', 'Rua das Palmeiras', 'Avenida Principal', 'Rua do Comércio', 'Rua da Liberdade'],
    states: ['SP', 'RJ', 'DF', 'BA', 'CE', 'MG', 'AM', 'PR', 'PE', 'RS', 'PA', 'GO', 'MA', 'AL', 'RN', 'PI', 'MS', 'PB', 'MT', 'RO'],
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
    cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana'],
    streets: ['MG Road', 'Nehru Road', 'Gandhi Nagar', 'Shivaji Marg', 'Link Road', 'Park Street', 'Civil Lines', 'Model Town', 'Rajpur Road', 'Station Road', 'GT Road', 'Ring Road', 'Mall Road', 'Church Street', 'Brigade Road'],
    states: ['Maharashtra', 'Delhi', 'Karnataka', 'Telangana', 'Gujarat', 'Tamil Nadu', 'West Bengal', 'Rajasthan', 'Uttar Pradesh', 'Madhya Pradesh', 'Andhra Pradesh', 'Bihar', 'Haryana', 'Kerala', 'Punjab'],
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
    cities: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск', 'Омск', 'Самара', 'Ростов-на-Дону', 'Уфа', 'Красноярск', 'Пермь', 'Воронеж', 'Волгоград', 'Краснодар', 'Саратов', 'Тюмень', 'Тольятти', 'Ижевск'],
    streets: ['ул. Ленина', 'ул. Мира', 'ул. Советская', 'пр. Победы', 'ул. Гагарина', 'ул. Пушкина', 'ул. Горького', 'ул. Кирова', 'пр. Маршала', 'ул. Строителей'],
    states: ['Московская область', 'Санкт-Петербург', 'Новосибирская область', 'Свердловская область', 'Нижегородская область', 'Республика Татарстан', 'Челябинская область', 'Омская область'],
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
    cities: ['Ciudad de México', 'Guadalajara', 'Monterrey', 'Puebla', 'Toluca', 'Tijuana', 'León', 'Juárez', 'Zapopan', 'Nezahualcóyotl', 'Mérida', 'San Luis Potosí', 'Querétaro', 'Acapulco', 'Aguascalientes', 'Morelia', 'Culiacán', 'Veracruz', 'Chihuahua', 'Hermosillo'],
    streets: ['Av. Insurgentes', 'Paseo de la Reforma', 'Av. Universidad', 'Blvd. Hidalgo', 'Av. Juárez', 'Calle Revolución', 'Av. Morelos', 'Calle 5 de Mayo', 'Av. Independencia', 'Calle Constitución'],
    states: ['Ciudad de México', 'Jalisco', 'Nuevo León', 'Puebla', 'Estado de México', 'Baja California', 'Guanajuato', 'Chihuahua', 'Yucatán', 'Querétaro'],
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
    cities: ['Singapore', 'Jurong East', 'Tampines', 'Woodlands', 'Sengkang', 'Punggol', 'Yishun', 'Hougang', 'Bedok', 'Queenstown', 'Geylang', 'Toa Payoh', 'Ang Mo Kio', 'Bishan', 'Bukit Merah'],
    streets: ['Orchard Road', 'Raffles Place', 'Marina Bay', 'Holland Village', 'Tanjong Pagar', 'Tiong Bahru Road', 'Buona Vista', 'Upper Thomson Road', 'Jalan Besar', 'Telok Blangah'],
    states: ['Central Region', 'East Region', 'North Region', 'North-East Region', 'West Region'],
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
    cities: ['Kuala Lumpur', 'Klang', 'Ipoh', 'George Town', 'Petaling Jaya', 'Shah Alam', 'Subang Jaya', 'Johore Bahru', 'Kota Kinabalu', 'Kuching', 'Seremban', 'Alor Setar', 'Miri', 'Sibu', 'Sandakan'],
    streets: ['Jalan Ampang', 'Jalan Bukit Bintang', 'Jalan Tuanku Abdul Halim', 'Jalan Imbi', 'Jalan Chow Kit', 'Jalan Pudu', 'Jalan Raja Laut', 'Jalan Sultan Ismail', 'Jalan Semarak', 'Jalan Pahang'],
    states: ['Selangor', 'Kuala Lumpur', 'Johor', 'Pulau Pinang', 'Perak', 'Sabah', 'Sarawak', 'Kedah', 'Kelantan', 'Negeri Sembilan'],
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
    cities: ['กรุงเทพมหานคร', 'นนทบุรี', 'ปากเกร็ด', 'เชียงใหม่', 'นครราชสีมา', 'อุดรธานี', 'หาดใหญ่', 'ภูเก็ต', 'พัทยา', 'ขอนแก่น', 'Bangkok', 'Chiang Mai', 'Pattaya', 'Phuket', 'Khon Kaen'],
    streets: ['ถนนสุขุมวิท', 'ถนนสีลม', 'ถนนพระราม 4', 'ถนนรัชดาภิเษก', 'ถนนเพชรบุรี', 'Sukhumvit Road', 'Silom Road', 'Rama 4 Road', 'Ratchadaphisek Road', 'Phetburi Road'],
    states: ['กรุงเทพมหานคร', 'นนทบุรี', 'เชียงใหม่', 'นครราชสีมา', 'ขอนแก่น', 'สงขลา', 'ภูเก็ต', 'ชลบุรี'],
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
    cities: ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ', 'Biên Hòa', 'Nha Trang', 'Huế', 'Buôn Ma Thuột', 'Quy Nhơn', 'Vũng Tàu', 'Nam Định', 'Thái Nguyên', 'Vinh', 'Đà Lạt'],
    streets: ['Đường Trần Phú', 'Phố Huế', 'Đường Lê Lợi', 'Đường Nguyễn Huệ', 'Phố Phan Đình Phùng', 'Đường Hùng Vương', 'Đường 30 tháng 4', 'Đường Nam Kỳ Khởi Nghĩa', 'Đường Hai Bà Trưng', 'Đường Điện Biên Phủ'],
    states: ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ', 'Bình Dương', 'Đồng Nai', 'Khánh Hòa'],
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
