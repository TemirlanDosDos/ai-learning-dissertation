const lesson08 = {
    id: 8,
    title: "8-сабақ: Нейрон және негізгі активациялар",
    description: "Жасанды нейронның анатомиясы, бейсызықтық (nonlinearity), Sigmoid, Tanh және Градиенттің жоғалуы мәселесі.",
    content: `
    <h3>Оқу мақсаттары:</h3>
    <ul>
      <li>Жасанды нейронның негізгі компоненттерін (weights, bias, activation) анықтау.</li>
      <li>Нейрондық желіге бейсызықтықтың (nonlinearity) неліктен қажет екенін түсіндіру.</li>
      <li>Sigmoid және Tanh функцияларын салыстырып, олардың айырмашылығын білу.</li>
      <li>Градиенттің жоғалуы (Vanishing Gradient) мәселесін және оның терең желілерге әсерін түсіну.</li>
    </ul>

    <h3>1. Кіріспе</h3>
    <p>Бүгін біз оқыту процесінің "жүрегіне" — <strong>Нейронға</strong> тоқталамыз. Жалғыз нейрон математикалық тұрғыдан қарапайым болғанымен, оларды үлкен желілерге біріктіру компьютерлерге күрделі мәселелерді шешуге мүмкіндік береді.</p>
    <p>Алайда, нейрон активациялық функциясыз пайдасыз — онсыз ең заманауи желінің өзі қарапайым сызықтық регрессиядан (түзу сызықтан) аспайды.</p>

    <h3>2. Негізгі мазмұн</h3>

    <h4>2.1. Жасанды нейронның анатомиясы</h4>
    <p>Нейрон ақпаратты үш негізгі қадаммен өңдейді:</p>
    
    

    <ol>
        <li><strong>Салмақтар (Weights, w):</strong> Кіріс деректерінің (x) маңыздылығын анықтайды.</li>
        <li><strong>Ығысу (Bias, b):</strong> Модельге икемділік береді (функцияны графикте жылжытуға мүмкіндік береді).</li>
        <li><strong>Активациялық функция (f):</strong> Салмақталған қосындыны соңғы шығысқа айналдырады.</li>
    </ol>
    
    <div style="background-color: #f8f9fa; padding: 10px; border-radius: 5px; text-align: center;">
        <strong>Математикалық формула:</strong><br>
        <code>y = f(w * x + b)</code>
    </div>

    <h4>2.2. Бейсызықтықтың (Nonlinearity) қажеттілігі</h4>
    <p>Егер активациялық функция болмаса, нейрондық желі тек түзу сызықтарды ғана тани алар еді. Шынайы өмірдегі деректер (суреттер, дыбыс, мәтін) өте күрделі және ирелең болып келеді. Бейсызықтық функциялар желіге осы күрделі заңдылықтарды "иілу" арқылы үйренуге мүмкіндік береді.</p>

    

    <h4>2.3. Классикалық активациялық функциялар</h4>
    
    

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Функция</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Формула</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Шығыс диапазоны</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Қолданылуы</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Sigmoid</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;"><code>σ(x) = 1 / (1 + e⁻ˣ)</code></td>
          <td style="border: 1px solid #ddd; padding: 8px;"><code>[0, 1]</code></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Ықтималдықтарды есептеу (соңғы қабат)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Tanh</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;"><code>tanh(x)</code></td>
          <td style="border: 1px solid #ddd; padding: 8px;"><code>[-1, 1]</code></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Жасырын қабаттар (нөлге орталықтандырылған)</td>
        </tr>
      </tbody>
    </table>

    <h4>2.4. Градиенттің жоғалуы (Vanishing Gradient)</h4>
    <p>Бұл — терең нейрондық желілердің ең басты мәселелерінің бірі.</p>
    
    

    <ul>
        <li><strong>Мәселе:</strong> Sigmoid және Tanh функцияларының шеткі жақтары өте тегіс (плато).</li>
        <li><strong>Салдары:</strong> Кері таралу (backpropagation) кезінде қателік сигналы (градиент) осы жерлерде нөлге жақындап, "өшіп" қалады.</li>
        <li><strong>Нәтиже:</strong> Желінің алғашқы қабаттары салмақтарын жаңарта алмай, үйренуді тоқтатады.</li>
    </ul>

    <h3>3. Түйін</h3>
    <ul>
      <li><strong>Нейрон құрылымы:</strong> Салмақтар + Ығысу + Активация.</li>
      <li><strong>Бейсызықтық:</strong> Күрделі заңдылықтарды тануға мүмкіндік беретін басты компонент.</li>
      <li><strong>Sigmoid & Tanh:</strong> Негізгі функциялар, бірақ терең желілерде градиенттің жоғалуына алып келуі мүмкін.</li>
    </ul>

    <h3>4. Ойланып көр! (Практикалық тапсырма)</h3>
    <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; border: 1px solid #ffeeba;">
        <p><strong>Сценарий:</strong> Нейронның тура өтуін (forward pass) есептеңіз. ReLU логикасын қолданыңыз (егер нәтиже >0 болса, сол мән қалады, әйтпесе 0 болады).</p>
        <p><strong>Деректер:</strong></p>
        <ul>
            <li>Кірістер: <code>x1 = 0.5</code>, <code>x2 = -1.0</code></li>
            <li>Салмақтар: <code>w1 = 0.8</code>, <code>w2 = 0.5</code></li>
            <li>Ығысу: <code>b = 0.2</code></li>
        </ul>
        <p><strong>Тапсырма:</strong></p>
        <ol>
            <li>Салмақталған қосындыны есептеңіз.</li>
            <li>Ығысуды (bias) қосыңыз.</li>
            <li>ReLU активациясын қолданып, соңғы жауапты табыңыз.</li>
        </ol>
        <details>
            <summary style="cursor: pointer; color: #0d6efd;">Жауапты көру</summary>
            <p style="margin-top: 10px;">
                1. <strong>Қосынды:</strong> <code>(0.5 * 0.8) + (-1.0 * 0.5) = 0.4 - 0.5 = -0.1</code><br>
                2. <strong>Ығысумен:</strong> <code>-0.1 + 0.2 = 0.1</code><br>
                3. <strong>Активация (ReLU):</strong> <code>0.1 > 0</code> болғандықтан, соңғы шығыс — <strong>0.1</strong>.
            </p>
        </details>
    </div>
  `,
    quiz: [
        {
            question: "Нейрондық желідегі активациялық функцияның басты рөлі қандай?",
            options: [
                "Деректерді RAM-да сақтау",
                "Бейсызықтықты енгізіп, күрделі заңдылықтарды модельдеуге мүмкіндік беру",
                "Модельдің жылдамдығын екі есе арттыру",
                "Тек оң сандарды жою"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "Қай функция шығысты [0, 1] диапазонына қысады?",
            options: [
                "Tanh",
                "Sigmoid",
                "ReLU",
                "Linear"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "'Градиенттің жоғалуы' мәселесінің басты зардабы қандай?",
            options: [
                "Компьютердің жады толып кетеді",
                "Алғашқы қабаттар үйренуге қажетті сигналды алмай, оқу тоқтап қалады",
                "Модель тым тез үйреніп кетеді (overfitting)",
                "Деректер автоматты түрде өшіріледі"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "Tanh функциясының Sigmoid-тан басты математикалық артықшылығы неде?",
            options: [
                "Ол нөлге орталықтандырылған (диапазоны -1-ден 1-ге дейін)",
                "Ол есептеуге жеңіл",
                "Ол ешқашан нөлге тең болмайды",
                "Ол тек терең қабаттарда жұмыс істейді"
            ],
            correctAnswer: 0 // A
        },
        {
            question: "Егер активациялық функция сызықтық болса (y = x), нейрондық желі неге айналады?",
            options: [
                "Күрделі жасанды интеллектке",
                "Қарапайым сызықтық регрессия моделіне",
                "Графикалық картаның драйверіне",
                "Деректер базасына"
            ],
            correctAnswer: 1 // B
        }
    ]
};

export default lesson08;