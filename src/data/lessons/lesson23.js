const lesson23 = {
    id: 23,
    title: "23-сабақ: Гиперпараметрлерді баптау (Hyperparameter Tuning)",
    description: "Модель параметрлері vs Гиперпараметрлер, Keras Tuner және оңтайлы конфигурацияны іздеу.",
    content: `
    <h3>Оқу мақсаттары:</h3>
    <ul>
      <li>Модель параметрлері (салмақтар) мен Гиперпараметрлер (конфигурациялық баптаулар) арасындағы айырмашылықты ажырату.</li>
      <li>Keras Tuner кітапханасын қолданып, қабаттар саны, нейрондар және оқыту жылдамдықтары үшін іздеу кеңістігін анықтау.</li>
      <li>Оңтайлы желі конфигурациясын автоматты түрде іздеу үшін Hyperband немесе BayesianOptimization алгоритмдерін іске асыру.</li>
    </ul>

    <h3>1. Кіріспе</h3>
    <p>Алдыңғы сабақтарда біз нейрондық желілеріміз үшін сандарды (нейрон саны, қабат саны) біршама кездейсоқ таңдап келдік. Біз 32 немесе 64 нейрон қолдандық, оқыту жылдамдығын (learning rate) 0.001 деп орнаттық. Бірақ бұл сандардың ең тиімді екенін қайдан білеміз?</p>
    <p>Машиналық оқыту — бұл жоғары деңгейдегі итеративті процесс. Бұл процесс жиі <strong>«баптау» (tuning)</strong> деп аталады. Мұны қолмен жасау (бір санды өзгерту, оқытуды күту, нәтижені жазу) өте тиімсіз. Бұл сабақта біз ең жақсы желі архитектурасын іздейтін автоматтандырылған алгоритмдерді қолдануды үйренеміз.</p>

    <h3>2. Негізгі мазмұн</h3>

    <h4>2.1. Параметрлер мен Гиперпараметрлер</h4>
    <p>Машиналық оқытудағы параметрлердің екі түрін ажыратып алуымыз керек:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Түр</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Сипаттама</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Мысалдар</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Модель параметрлері</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Желі оларды оқыту кезінде (backpropagation) автоматты түрде үйренеді.</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Салмақтар (weights), Ығысулар (biases)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Гиперпараметрлер</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Оқыту басталғанға дейін біз (инженер) таңдайтын баптаулар.</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Қабаттар саны, нейрондар саны, оқыту жылдамдығы</td>
        </tr>
      </tbody>
    </table>

    <h4>2.2. Ауытқу мен Дисперсия (Bias-Variance Trade-off)</h4>
    <p>Гиперпараметрлерді баптаған кезде біз тепе-теңдікті сақтауға тырысамыз:</p>
    
    

    <ul>
        <li><strong>Жоғары ауытқу (Underfitting):</strong> Желі тым қарапайым, деректердің күрделілігін қамти алмайды.</li>
        <li><strong>Жоғары дисперсия (Overfitting):</strong> Желі тым күрделі, оқыту деректерін жаттап алады, бірақ жаңа деректерде сәтсіздікке ұшырайды.</li>
    </ul>

    <h4>2.3. Keras Tuner-ге кіріспе</h4>
    <p><strong>Keras Tuner</strong> — оңтайлы параметрлерді автоматты түрде іздейтін кітапхана. Ол мынадай негізгі іздеу алгоритмдерін ұсынады: Random Search, Hyperband, BayesianOptimization. Тәжірибеде <strong>Hyperband</strong> алгоритміне басымдық беріледі, себебі ол ресурстарды өте тиімді бөледі.</p>

    <h4>2.4. «Гипермодельді» анықтау</h4>
    <p>Тюнерді қолдану үшін гиперпараметр аргументін (hp) қабылдайтын модель құрастырушы функциясын жасау керек:</p>
    <ul>
        <li><code>hp.Int</code>: Диапазоннан бүтін санды таңдайды (мысалы, 32-ден 512-ге дейін).</li>
        <li><code>hp.Choice</code>: Тізімнен нақты мәнді таңдайды (мысалы, [1e-2, 1e-3]).</li>
        <li><code>hp.Boolean</code>: True немесе False (мысалы, Dropout қосу-қоспау).</li>
    </ul>

    <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto;"><code>def build_model(hp):
    model = Sequential()
    # 16 мен 1024 арасындағы нейрондарды баптау
    model.add(Dense(units=hp.Int("units", min_value=16, max_value=1024, step=32),
                    activation='relu'))
    
    # Dropout қабатын қосуды шешу
    if hp.Boolean("dropout"):
        model.add(Dropout(rate=0.25))

    model.add(Dense(10, activation='softmax'))

    # Оқыту жылдамдығын таңдау
    lr = hp.Choice("learning_rate", values=[1e-2, 1e-3, 1e-4])
    model.compile(optimizer=Adam(learning_rate=lr), loss='sparse_categorical_crossentropy', metrics=['accuracy'])
    return model</code></pre>

    <h3>3. Түйін</h3>
    <ul>
      <li><strong>Итеративті процесс:</strong> Бірінші реттен мінсіз архитектураны табу қиын, сондықтан баптау (tuning) міндетті.</li>
      <li><strong>Гиперпараметрлер:</strong> Бұл модель үйренетін салмақтар емес, біз қолмен (немесе тюнермен) орнататын конфигурациялар.</li>
      <li><strong>Keras Tuner:</strong> <code>hp.Int</code> және <code>hp.Choice</code> сияқты әдістер арқылы іздеу кеңістігін анықтауға мүмкіндік береді.</li>
      <li><strong>Тиімділік:</strong> Hyperband алгоритмі нашар жұмыс істейтін модельдерді ерте тоқтату арқылы уақытты үнемдейді.</li>
    </ul>

    <h3>4. Ойланып көр! (Практикалық тапсырма)</h3>
    <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; border: 1px solid #ffeeba;">
        <p><strong>Сценарий:</strong> Сіз 1, 2 немесе 3 жасырын қабаты бар және 'relu' немесе 'tanh' активациясы қолданылатын желі құруыңыз керек.</p>
        <p><strong>Тапсырма:</strong> Төмендегі бос орындарды толтырыңыз:</p>
        <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 10px; border-radius: 5px;"><code># 1-тапсырма: 1 мен 3 арасында қабат қосатын цикл
for i in range(hp.Int("num_layers", min_value=1, max_value=3)):
    
    # 2-тапсырма: Активация функциясын таңдау
    act_func = hp.Choice("activation", values=[________, ________])
    model.add(Dense(units=64, activation=act_func))</code></pre>
        <details>
            <summary style="cursor: pointer; color: #0d6efd;">Жауапты көру</summary>
            <div style="margin-top: 10px;">
                <p><code>values=['relu', 'tanh']</code></p>
            </div>
        </details>
    </div>
  `,
    quiz: [
        {
            question: "Төмендегілердің қайсысы «Гиперпараметр» емес, «Модель параметрі» болып саналады?",
            options: [
                "Оқыту жылдамдығы (Learning Rate)",
                "Қабаттар саны",
                "Нейрон салмақтары (Weights)",
                "Пакет өлшемі (Batch Size)"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "[0.01, 0.001, 0.0001] сияқты нақты нұсқалар жиынтығынан оқыту жылдамдығын таңдау үшін Keras Tuner-дің қай әдісін қолданасыз?",
            options: [
                "hp.Int",
                "hp.Float",
                "hp.Boolean",
                "hp.Choice"
            ],
            correctAnswer: 3 // D
        },
        {
            question: "Неліктен Hyperband алгоритмі қарапайым Random Search-тен артық деп саналады?",
            options: [
                "Ол жаһандық максимумды табуға кепілдік береді",
                "Ол ресурстарды бөлуде тиімдірек (нашар модельдерді ерте тоқтатады)",
                "Ол тек Linux жүйесінде жұмыс істейді",
                "Оған валидация жиынтығы қажет емес"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "Модельде «жоғары дисперсия» (overfitting) байқалса, гиперпараметрлерді баптау арқылы оны қалай реттеуге болады?",
            options: [
                "Нейрондар санын барынша көбейту арқылы",
                "Оқыту дәуірлерін (epochs) шексіз арттыру арқылы",
                "Dropout қабатын қосу немесе модельдің күрделілігін азайту арқылы",
                "Кері таралу алгоритмін тоқтату арқылы"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "build_model(hp) функциясындағы hp аргументінің басты қызметі қандай?",
            options: [
                "Ол оқыту деректерін модельге жүктейді",
                "Ол гиперпараметрлердің іздеу кеңістігін (диапазондар мен таңдауларды) анықтауға мүмкіндік береді",
                "Ол модельдің соңғы дәлдігін автоматты түрде есептейді",
                "Ол модельдің салмақтарын сақтайтын массив"
            ],
            correctAnswer: 1 // B
        }
    ]
};

export default lesson23;