const lesson15 = {
    id: 15,
    title: "15-сабақ: Тығыз және нормализациялау қабаттары",
    description: "Dense қабаттары, Ішкі ковариациялық ауысу (Internal Covariate Shift), Batch Normalization және Layer Normalization.",
    content: `
    <h3>Оқу мақсаттары:</h3>
    <ul>
      <li>Keras моделіндегі <code>Dense</code> (толық байланысқан) қабаттарын кіріс, жасырын және шығыс рөлдері үшін баптау.</li>
      <li>Ішкі ковариациялық ауысуды (Internal Covariate Shift) анықтап, нормализациялау қабаттарының оқытуды қалай тұрақтандыратынын түсіну.</li>
      <li>Терең желілерде конвергенцияны (тұрақтануды) жылдамдату үшін <strong>Batch Normalization</strong> және <strong>Layer Normalization</strong> әдістерін іске асыру.</li>
    </ul>

    <h3>1. Кіріспе</h3>
    <p>Егер нейрондар терең оқытудың атомдары болса, <strong>Dense (Тығыз)</strong> қабаттары — оның молекулалары. Бұл — нейрондық желілердегі ең негізгі құрылымдар, мұнда бір қабаттағы әрбір нейрон келесі қабаттағы әрбір нейронмен байланысқан.</p>
    <p>Алайда, тығыз қабаттарды бірінің үстіне бірін жинай беру жиі мәселе тудырады: деректер желі арқылы өткен сайын, әр қабатқа келетін кірістердің таралуы үнемі өзгеріп отырады. <strong>Ішкі ковариациялық ауысу</strong> деп аталатын бұл құбылыс оқытуды айтарлықтай баяулатады. Бұны түзету үшін біз <strong>нормализациялау қабаттарын</strong> қолданамыз. Олар деректерді тұрақты шкалаға келтіріп, желіге жылдамырақ үйренуге мүмкіндік береді.</p>

    <h3>2. Негізгі мазмұн</h3>

    <h4>2.1. Dense (Толық байланысқан) қабаттар</h4>
    <p>Dense қабатының басты ерекшелігі — әрбір кіріс түйіні әрбір шығыс түйініне қосылған.</p>
    
    

    <p><strong>Негізгі параметрлер:</strong></p>
    <ul>
        <li><code>units</code> (Бірліктер): Нейрондар саны. Шығыс кеңістігінің өлшемін анықтайды.</li>
        <li><code>activation</code> (Активация): Шығысты түрлендіру функциясы (мысалы, жасырын қабаттар үшін <code>relu</code>, шығыс үшін <code>softmax</code>).</li>
        <li><code>input_dim</code> / <code>input_shape</code>: Тек бірінші қабат үшін қажет.</li>
    </ul>

    <p><strong>Keras-та қабаттарды анықтау:</strong></p>
    <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto;"><code>from keras.models import Sequential
from keras.layers import Dense

model = Sequential()

# 1. Кіріс қабаты (100 белгі қабылдайды)
model.add(Dense(units=64, activation='relu', input_dim=100))

# 2. Жасырын қабат
model.add(Dense(units=32, activation='relu'))

# 3. Шығыс қабаты (Бинарлы классификация үшін 1 нейрон)
model.add(Dense(units=1, activation='sigmoid'))</code></pre>

    <h4>2.2. Нормализацияның қажеттілігі</h4>
    <p>Терең желілерде салмақтар жаңарған сайын, активациялардың таралуы өзгереді. Бұл кейінгі қабаттарды үнемі жаңа жағдайға бейімделуге мәжбүрлейді.</p>
    
    

    <h4>2.3. Batch Normalization (Пакеттік нормализация)</h4>
    <p>Бұл әдіс әрбір шағын пакеттің (mini-batch) орташа мәнін 0-ге, ал дисперсиясын 1-ге теңестіреді.</p>
    <p><strong>Орналасуы:</strong> Әдетте сызықтық түрлендіруден кейін, бірақ активацияға (ReLU) дейін қолданылады.</p>

    <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto;"><code>from keras.layers import Dense, BatchNormalization, Activation

model.add(Dense(units=64))         # 1. Есептеу
model.add(BatchNormalization())    # 2. Нормализациялау
model.add(Activation('relu'))      # 3. Активация</code></pre>

    <h4>2.4. Layer Normalization (Қабаттық нормализация)</h4>
    <p>Batch Normalization пакет өлшеміне тәуелді болғандықтан, ол Реккуренттік желілер (RNN) үшін тиімсіз болуы мүмкін. Layer Normalization нормализацияны пакет бойынша емес, бір үлгінің ішіндегі барлық белгілер (features) бойынша жүргізеді.</p>
    
    

    <h3>3. Түйін</h3>
    <ul>
      <li><strong>Dense қабаттары:</strong> Белгілердің күрделі байланыстарын үйренуге арналған негізгі блоктар.</li>
      <li><strong>Ішкі ковариациялық ауысу:</strong> Деректер таралуының өзгеруі оқуды баяулатады.</li>
      <li><strong>Batch vs. Layer Norm:</strong> Тура байланысты желілер үшін Batch Norm, ал RNN немесе кішкентай пакеттер үшін Layer Norm қолданыңыз.</li>
    </ul>

    <h3>4. Ойланып көр! (Практикалық тапсырма)</h3>
    <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; border: 1px solid #ffeeba;">
        <p><strong>Сценарий:</strong> Сіз клиенттердің кетуін болжайтын терең желі құрып жатырсыз. Оқыту өте тұрақсыз жүріп жатыр.</p>
        <p><strong>Тапсырма:</strong> Төмендегі стандартты қабатты Batch Normalization қолданатындай етіп 3 бөлікке бөліп қайта жазыңыз:</p>
        <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 10px; border-radius: 5px;"><code>model.add(Dense(128, activation='relu'))</code></pre>
        <details>
            <summary style="cursor: pointer; color: #0d6efd;">Жауапты көру (Шешімі)</summary>
            <div style="margin-top: 10px;">
                <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 10px; border-radius: 5px;"><code>model.add(Dense(128))
model.add(BatchNormalization())
model.add(Activation('relu'))</code></pre>
            </div>
        </details>
    </div>
  `,
    quiz: [
        {
            question: "Қабаттың \"Тығыз\" (Dense) немесе \"Толық байланысқан\" болуы нені білдіреді?",
            options: [
                "Әрбір нейрон тек өзінің жақын көршілеріне ғана қосылған",
                "Әрбір нейрон алдыңғы және кейінгі қабаттардағы әрбір нейронға қосылған",
                "Қабатта 1000-нан астам нейрон бар",
                "Қабат тек кескіндерді өңдеуге арналған"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "Неліктен Batch Normalization әдетте активациялық функцияға (ReLU) дейін қолданылады?",
            options: [
                "Модельдің файлдық өлшемін азайту үшін",
                "Активациядан кейін нормализациялау техникалық тұрғыдан мүмкін емес",
                "Сызықтық шығыстарды нормализациялау арқылы активацияға кіретін деректерді тұрақтандыру үшін",
                "Деректерді автоматты түрде бүтін сандарға айналдыру үшін"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "Реккуренттік нейрондық желілер (RNN) үшін немесе пакет өлшемдері өте кішкентай болғанда қай нормализация әдісі тиімді?",
            options: [
                "Batch Normalization",
                "Pixel Normalization",
                "Layer Normalization",
                "Data Augmentation"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "input_shape=(20,) арқылы бірінші Dense қабатын анықтағанда, 20 саны нені білдіреді?",
            options: [
                "Пакет өлшемін (Batch size)",
                "Қабаттағы нейрондар санын",
                "Кіріс деректеріндегі белгілер санын (features)",
                "Оқытылатын дәуірлер (epochs) санын"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "Batch Normalization қолданудың оқыту процесіне тигізетін басты пайдасы қандай?",
            options: [
                "Модельді әдейі баяулату",
                "Конвергенцияны (тұрақтануды) жылдамдатады және үлкенірек оқыту жылдамдығын қолдануға мүмкіндік береді",
                "Барлық оқыту деректерін өшіріп тастайды",
                "Тек суреттердің ажыратымдылығын арттырады"
            ],
            correctAnswer: 1 // B
        }
    ]
};

export default lesson15;