const lesson12 = {
    id: 12,
    title: "12-сабақ: Ықтималдық шығын функциялары",
    description: "Регрессия vs Классификация, Binary Cross-Entropy, One-Hot Encoding және Sparse Categorical Cross-Entropy.",
    content: `
    <h3>Оқу мақсаттары:</h3>
    <ul>
      <li>Регрессиялық шығындар (мәндер үшін) мен ықтималдық шығындар (категориялар үшін) арасындағы айырмашылықты сипаттау.</li>
      <li>Sigmoid активациясын қолданып, екі класты классификация мәселелері үшін <strong>Binary Cross-Entropy</strong> функциясын іске асыру.</li>
      <li>Деректердің кодталуына (one-hot немесе бүтін сан) байланысты дұрыс көп класты шығын функциясын — <strong>Categorical</strong> немесе <strong>Sparse Categorical Cross-Entropy</strong> — таңдай алу.</li>
    </ul>

    <h3>1. Кіріспе</h3>
    <p>Өткен сабақта біз үй бағасы немесе акция құны сияқты үздіксіз сандарды болжауға арналған MSE сияқты регрессиялық шығын функцияларын қарастырдық. Бірақ категорияны болжау керек болса ше?</p>
    <p>Егер сіз суретке қарап "Мысық!" немесе "Ит!" деп айтатын AI құрып жатсаңыз, "Мысық" пен "Ит" сөздерінің арасындағы "орташа квадраттық қателікті" есептеудің еш мағынасы жоқ.</p>
    <p>Классификация тапсырмаларында біз <strong>ықтималдықтармен</strong> жұмыс істейміз. Біз желінің оның мысық екеніне 99%, ал ит екеніне 1% сенімді болғанын қалаймыз. Бұған қол жеткізу үшін біз ықтималдық шығын функцияларын қолданамыз. Бұл функциялар желі қате болжамды нық сеніммен жасағанда (мысалы, иттің суретін мысық деп 90% сеніммен айтса), оны қатаң "жазалайды".</p>

    <div class="image-wrapper">
      <img src="/assets/lessons/lesson12/121.png" alt="" style="width: 50%; height: auto;" />
    </div>

    <h3>2. Негізгі мазмұн</h3>

    <h4>2.1. Binary Cross-Entropy (Бинарлы кросс-энтропия)</h4>
    <p>Бұл шығысы тек екі нәтижесі бар (мысалы, Спам немесе Спам емес, 0 немесе 1) классификация мәселелеріне арналған стандартты функция.</p>
    
    

    <p><strong>Математикасы:</strong> Бір үлгі үшін формула мынадай:</p>
    <div style="background-color: #f8f9fa; padding: 10px; border-radius: 5px; text-align: center;">
        <code>L(y) = −y * log(p) − (1 − y) * log(1 − p)</code>
    </div>
    <p>Мұнда <code>y</code> — нақты белгі (0 немесе 1), ал <code>p</code> — болжанған ықтималдық.</p>

    <p><strong>Жұмыс істеу принципі:</strong> Егер нақты белгі 1 (<code>y=1</code>) болса, формула <code>−log(p)</code> түріне келеді. Егер модель <code>p=1</code> (100% сенімділік) деп болжаса, шығын 0 болады. Егер ол <code>p=0.01</code> (өте төмен сенімділік) деп болжаса, шығын орасан зор болады.</p>

    <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto;"><code># Бинарлы классификация үшін модельді компиляциялау
model.compile(loss='binary_crossentropy',
              optimizer='adam',
              metrics=['accuracy'])</code></pre>

    <h4>2.2. Categorical Cross-Entropy (One-Hot)</h4>
    <p>Екі кластан көп болғанда (мысалы, Мысық, Ит немесе Құс), сіз <strong>Categorical Cross-Entropy</strong> функциясына ауысасыз.</p>
    <ul>
        <li><strong>Деректерге қойылатын талап:</strong> Нысаналы деректеріңіз <em>one-hot encoded</em> форматында болуы керек. (Мысалы: <code>[1, 0, 0]</code> — Мысық).</li>
        <li><strong>Активация:</strong> Бұл шығыс қабатындағы <strong>Softmax</strong> активациялық функциясымен жұптастырылады. Softmax барлық шығыс нейрондарындағы ықтималдықтар қосындысының 1-ге тең болуын қамтамасыз етеді.</li>
    </ul>

    <h4>2.3. Sparse Categorical Cross-Entropy</h4>
    <p>Егер сізде 1000 категория болса, one-hot кодтау әрбір дерек үшін 999 нөлден тұратын орасан зор вектор жасайды. Бұл жадты босқа шығындайды.</p>
    
    

    <ul>
        <li><strong>Шешімі:</strong> <code>Sparse Categorical Cross-Entropy</code> функциясын қолданыңыз.</li>
        <li><strong>Айырмашылығы:</strong> Ол белгілерді one-hot векторға айналдырмай-ақ, тікелей бүтін сандар ретінде (мысалы, Қызыл=1, Сары=2, Көк=3) қабылдай береді.</li>
        <li><strong>Артықшылығы:</strong> Жүйе тұтас векторды емес, жалғыз бүтін санды өңдейтіндіктен, бұл уақыт пен жадты айтарлықтай үнемдейді.</li>
    </ul>

    <div class="image-wrapper">
      <img src="/assets/lessons/lesson12/122.png" alt="" style="width: 50%; height: auto;" />
    </div>

    <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto;"><code># Нысаналар бүтін сандар болғанда (0, 1, 2, 3...)
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])</code></pre>

    <h3>3. Түйін</h3>
    <ul>
      <li><strong>Бинарлы мәселелер:</strong> Sigmoid активациясымен бірге <code>binary_crossentropy</code> қолданыңыз.</li>
      <li><strong>Көп класты (One-Hot):</strong> Егер нысаналарыңыз векторлар болса (мысалы, <code>[1, 0, 0]</code>), Softmax-пен бірге <code>categorical_crossentropy</code> қолданыңыз.</li>
      <li><strong>Көп класты (Бүтін сан):</strong> Егер нысаналарыңыз сандар болса (мысалы, 5-класс), <code>sparse_categorical_crossentropy</code> қолданыңыз. Бұл тиімдірек.</li>
    </ul>

    <h3>4. Ойланып көр! (Практикалық тапсырма)</h3>
    <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; border: 1px solid #ffeeba;">
        <p><strong>Сценарий:</strong> Сіз MNIST деректер жиынында (қолмен жазылған 0–9 цифрлары) нейрондық желіні оқытып жатырсыз.</p>
        <ul>
            <li><strong>А жағдайы:</strong> Белгілер (labels) мынадай көрінеді: <code>[5, 0, 4, 1, 9, ...]</code></li>
            <li><strong>В жағдайы:</strong> Белгілер өңделген және былай көрінеді: <code>[[0,0,0,0,0,1,0,0,0,0], [1,0,0,0,0,0,0,0,0,0], ...]</code></li>
        </ul>
        <p><strong>Тапсырма:</strong></p>
        <ol>
            <li>А жағдайы үшін қай шығын функциясын қолдану керек?</li>
            <li>В жағдайы үшін қай шығын функциясын қолдану керек?</li>
            <li>Екі жағдайда да шығыс қабатында қай активациялық функция болуы керек?</li>
        </ol>
        <details>
            <summary style="cursor: pointer; color: #0d6efd;">Жауапты көру</summary>
            <div style="margin-top: 10px;">
                <p>1. А жағдайы — <strong>sparse_categorical_crossentropy</strong> (белгілер бүтін сандар).</p>
                <p>2. В жағдайы — <strong>categorical_crossentropy</strong> (белгілер one-hot векторлар).</p>
                <p>3. Екеуіне де <strong>Softmax</strong> активациясы қажет (көп класты классификация).</p>
            </div>
        </details>
    </div>
  `,
    quiz: [
        {
            question: "Екі класты классификация (мысалы, \"Спам\" немесе \"Спам емес\") үшін ең оңтайлы жұпты таңдаңыз:",
            options: [
                "Softmax активациясы және Categorical Cross-Entropy",
                "ReLU активациясы және Mean Squared Error",
                "Sigmoid активациясы және Binary Cross-Entropy",
                "Sigmoid активациясы және Sparse Categorical Cross-Entropy"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "Егер сіздің деректеріңіз \"One-Hot Encoding\" форматында болса (мысалы, [0, 1, 0]), көп класты классификация үшін қай функцияны қолданасыз?",
            options: [
                "Sparse Categorical Cross-Entropy",
                "Categorical Cross-Entropy",
                "Binary Cross-Entropy",
                "Mean Absolute Error"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "Көп класты классификацияның шығыс қабатында Softmax активациясының негізгі қызметі қандай?",
            options: [
                "Теріс сандарды 0-ге айналдыру",
                "Шығыс мәндерін бүтін сандарға (0 немесе 1) жұмырлау",
                "Барлық шығыс нейрондарының ықтималдық қосындысын 1.0-ге теңестіру",
                "Желінің оқыту жылдамдығын арттыру"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "Sparse Categorical Cross-Entropy функциясының \"Categorical Cross-Entropy\"-ден басты артықшылығы неде?",
            options: [
                "Ол әлдеқайда дәлірек болжам жасайды",
                "Ол белгілерді бүтін сандар ретінде қабылдап, жад пен есептеу ресурстарын үнемдейді",
                "Ол тек екі класты классификация үшін жарамды",
                "Ол модельдің градиентін жылдамырақ есептейді"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "Binary Cross-Entropy формуласында модель қате болжамды нық сеніммен жасаса (мысалы, нақты \"1\" белгісіне модель \"0.01\" деп болжаса), шығын мәні қалай өзгереді?",
            options: [
                "Шығын мәні 0-ге жақындайды",
                "Шығын мәні өзгеріссіз қалады",
                "Шығын мәні экспоненциалды түрде өседі (\"жазалау\")",
                "Шығын мәні теріс санға айналады"
            ],
            correctAnswer: 2 // C
        }
    ]
};

export default lesson12;