const lesson21 = {
    id: 21,
    title: "21-сабақ: Деректерді жүктеу және алдын ала өңдеу",
    description: "Pandas кітапханасы, жетіспейтін деректерді өңдеу (Imputation) және деректер жиынтығын бөлу (Train/Test/Split).",
    content: `
    <h3>Оқу мақсаттары:</h3>
    <ul>
      <li>Pandas кітапханасын қолданып, CSV файлдарын жүктеуді және тексеруді үйрену.</li>
      <li>Жетіспейтін деректермен жұмыс істеу стратегияларын (жою және толтыру) іске асыру.</li>
      <li>Деректер жиынтығын Оқыту, Әзірлеу (Валидация) және Тест жиынтықтарына бөлуді меңгеру.</li>
    </ul>

    <h3>1. Кіріспе</h3>
    <p>Шынайы өмірде деректер нейрондық желі үшін дайын күйінде келмейді. Олар жиі форматталмаған, бос орындары бар немесе қателіктерге толы болады.</p>
    <p>Машиналық оқытуда <strong>«Garbage in, Garbage out»</strong> (қоқыс кірсе, қоқыс шығады) деген қағида бар: егер сіз модельге сапасыз деректер берсеңіз, одан сапасыз болжамдар аласыз. Сондықтан деректерді тазалау — кез келген ЖИ жобасының ең маңызды кезеңі.</p>

    <h3>2. Негізгі мазмұн</h3>

    <h4>2.1. Pandas арқылы деректерді тексеру</h4>
    <p>Деректерді жүктеген соң (<code>pd.read_csv</code>), оның құрылымын түсіну үшін келесі үш негізгі функцияны қолданамыз:</p>
    
    

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Функция</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Қызметі</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><code>data.head(5)</code></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Деректердің форматын көру үшін алғашқы 5 жолды шығарады.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><code>data.info()</code></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Бағандардың деректер типін және бос (null) мәндердің санын көрсетеді.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><code>data.describe()</code></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Сандық деректердің статистикасын (орташа мән, мин, макс) есептейді.</td>
        </tr>
      </tbody>
    </table>

    <h4>2.2. Жетіспейтін деректермен жұмыс (Missing Data)</h4>
    <p>Деректердегі «тесіктерді» (NaN мәндері) түзетудің екі негізгі жолы бар:</p>
    
    

    <ul>
        <li><strong>Жою (Dropping):</strong> Егер бос мәндер өте аз болса, <code>data.dropna()</code> арқылы оларды алып тастауға болады. Бірақ бұл әдіс деректер көлемін азайтып жіберуі мүмкін.</li>
        <li><strong>Толтыру (Imputation):</strong> Деректерді сақтап қалу үшін бос орындарды орташа немесе медианалық мәнмен толтырамыз. Бұл үшін <code>SimpleImputer</code> класы қолданылады.</li>
    </ul>
    
    <div class="image-wrapper">
      <img src="/assets/lessons/lesson21/211.png" alt="" style="width: 50%; height: auto;" />
    </div>

    <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto;"><code>from sklearn.impute import SimpleImputer
import numpy as np

# Орташа мәнмен (mean) толтыру стратегиясы
imputer = SimpleImputer(missing_values=np.nan, strategy='mean')
imputed_data = imputer.fit_transform(df.values)</code></pre>

    <h4>2.3. Деректер жиынтығын бөлу (Splitting)</h4>
    <p>Модельдің жай жаттап алмай (overfitting), нақты үйренуін бағалау үшін деректерді үш бөлікке бөлеміз:</p>
    
    

    <ul>
        <li><strong>Оқыту жиынтығы (Training Set):</strong> Модель осы деректер арқылы салмақтарды үйренеді.</li>
        <li><strong>Әзірлеу / Валидация жиынтығы (Dev Set):</strong> Гиперпараметрлерді (мысалы, оқыту жылдамдығын) баптау үшін қолданылады.</li>
        <li><strong>Тест жиынтығы (Test Set):</strong> Модельдің соңғы сапасын тексеру үшін қолданылады.</li>
    </ul>

    <div class="image-wrapper">
      <img src="/assets/lessons/lesson21/212.png" alt="" style="width: 50%; height: auto;" />
    </div>

    <div style="background-color: #e8f4fd; padding: 10px; border-left: 4px solid #2196F3;">
        <strong>Бөлу пропорциялары:</strong><br>
        Шағын деректер үшін: <strong>60% / 20% / 20%</strong>.<br>
        Үлкен деректер (1 млн+) үшін: <strong>98% / 1% / 1%</strong>.
    </div>

    <h3>4. Ойланып көр! (Практикалық тапсырма)</h3>
    <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; border: 1px solid #ffeeba;">
        <p><strong>Сценарий:</strong> Пациенттердің жасы жазылған бағанда («Age») бос орындар бар. Сіз оны орташа мәнмен толтыруыңыз керек.</p>
        <p><strong>Деректер:</strong> 25, 30, 35, NaN, 40.</p>
        <p><strong>Тапсырма:</strong></p>
        <ol>
            <li>Осы тізімдегі сандардың орташа мәнін есептеңіз.</li>
            <li><code>SimpleImputer(strategy='mean')</code> қолданылған жағдайда NaN орнына қандай сан жазылады?</li>
        </ol>
        <details>
            <summary style="cursor: pointer; color: #0d6efd;">Жауапты көру</summary>
            <div style="margin-top: 10px;">
                <p><strong>Орташа мән:</strong> (25 + 30 + 35 + 40) / 4 = <strong>32.5</strong>.</p>
                <p>Демек, NaN орнына <strong>32.5</strong> жазылады.</p>
            </div>
        </details>
    </div>
  `,
    quiz: [
        {
            question: "Сандық бағандардың статистикалық сипаттамасын (mean, max, min) көру үшін қай Pandas функциясы қолданылады?",
            options: [
                "data.head()",
                "data.info()",
                "data.describe()",
                "data.split()"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "Неліктен біз «Әзірлеу» (Валидация) жиынтығын Оқыту жиынтығынан бөлек ұстаймыз?",
            options: [
                "Оқыту жылдамдығын арттыру үшін",
                "Гиперпараметрлерді баптау және модельдің жаттап алуын (overfitting) тексеру үшін",
                "Модельді екі рет қатар оқыту үшін",
                "Тест жиынтығын мүлдем қолданбау үшін"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "1 миллионнан астам үлгісі бар деректер жиынтығы үшін ең қолайлы бөлу пропорциясы қайсы?",
            options: [
                "60% / 20% / 20%",
                "33% / 33% / 33%",
                "98% / 1% / 1%",
                "50% / 25% / 25%"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "SimpleImputer-де strategy='mean' параметрі не істейді?",
            options: [
                "Жетіспейтін мәндері бар барлық жолдарды өшіреді",
                "Бос орындарды сол бағанның орташа мәнімен толтырады",
                "Бос орындарды нөлмен толтырады",
                "Деректерді екіге бөледі"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "data.info() функциясының басты пайдасы неде?",
            options: [
                "Деректердің графигін салу",
                "Бағандардың деректер типін және бос (null) мәндердің санын жылдам көру",
                "Модельдің дәлдігін есептеу",
                "Деректерді CSV файлына сақтау"
            ],
            correctAnswer: 1 // B
        }
    ]
};

export default lesson21;