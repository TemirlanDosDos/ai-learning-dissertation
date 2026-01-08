const lesson26 = {
    id: 26,
    title: "26-сабақ: Жоба – Уақыттық қатарларды болжау (ARIMA vs. RNN)",
    description: "ARIMA мен RNN (LSTM) салыстыру, деректерді масштабтау, терезелеу (Windowing) және акция бағасын болжау.",
    content: `
    <h3>Оқу мақсаттары:</h3>
    <ul>
      <li>Уақыттық қатарларды модельдеу үшін статистикалық ARIMA моделі мен Рекурренттік нейрондық желілердің (RNN) айырмашылығын ажырату.</li>
      <li>Деректердің стационарлығын қамтамасыз етудегі Авторегрессия (p), Дифференциалдау (d) және Сырғымалы орташа мән (q) рөлдерін түсіндіру.</li>
      <li>Акция бағасын болжау үшін LSTM желісін оқытуға арналған деректерді масштабтау және терезелеу (windowing) құбырын құру.</li>
    </ul>

    <h3>1. Кіріспе</h3>
    <p>Алдыңғы сабақтарда біз классификация үшін тура байланысты желілерді (FNN) қолдандық. Олар суреттегі нысанды тануға шебер болғанымен, оларда «уақыт» немесе «реттілік» ұғымы жоқ. Егер кескіндегі пиксельдердің орнын ауыстырсаңыз, модель оны бәрібір тануы мүмкін. Бірақ акция нарығының графигіндегі күндердің орнын ауыстырсаңыз, деректер барлық мағынасын жоғалтады.</p>
    <p>Болашақты болжау үшін (акция бағасы немесе сөйлемдегі келесі сөз болсын) бізге тарихты және реттілікті түсінетін модельдер қажет. Бұл сабақта біз дәстүрлі статистиканың "ауыр салмақты" өкілі <strong>ARIMA</strong> мен терең оқытудың "жас шебері" <strong>RNN</strong>-ді салыстырамыз.</p>

    <h3>2. Негізгі мазмұн</h3>

    <h4>2.1. Статистикалық тәсіл: ARIMA</h4>
    <p>Терең оқыту пайда болғанға дейін ARIMA (AutoRegressive Integrated Moving Average) моделі алтын стандарт болды. Ол болашақ <code>Y(t)</code> мәнін өткен мәндер мен қателіктердің сызықтық комбинациясы ретінде болжайды.</p>
    <p><strong>ARIMA үш параметрмен (p, d, q) анықталады:</strong></p>
    <ul>
        <li><strong>p (Авторегрессия):</strong> Қанша өткен уақыт қадамына (lags) қарайтынын анықтайды.</li>
        <li><strong>d (Дифференциалдау):</strong> Деректерді стационарлы (тұрақты орташа мән/дисперсия) ету үшін ағымдағы мәннен өткен мәнді азайту саны.</li>
        <li><strong>q (Сырғымалы орташа мән):</strong> Болжам қателіктеріне назар аударатын терезенің өлшемі.</li>
    </ul>

    <h4>2.2. Терең оқыту тәсілі: RNN</h4>
    <p>Рекурренттік нейрондық желілерде (RNN) деректер цикл арқылы ағады, бұл "жады" рөлін атқарады.</p>
    
    

    <p><strong>Жады күйі:</strong> RNN-дегі түйін өзінің ағымдағы <code>A(t)</code> күйін ағымдағы кіріс <code>X(t)</code> және алдыңғы күйі <code>A(t-1)</code> негізінде есептейді:</p>
    <div style="background-color: #f8f9fa; padding: 10px; text-align: center; border-radius: 5px;">
        <code>A(t) = f(w1*X(t) + w2*A(t-1))</code>
    </div>

    <h4>2.3. Деректерді өңдеу: Масштабтау және Терезелеу</h4>
    <p>Нейрондық желілер кіріс деректерінің шкаласына өте сезімтал. Сондықтан:</p>
    <ol>
        <li><strong>Масштабтау (Scaling):</strong> Баға деректерін 0 мен 1 арасына сығу үшін <code>MinMaxScaler</code> қолданамыз.</li>

    <div class="image-wrapper">
      <img src="/assets/lessons/lesson26/261.png" alt="" style="width: 50%; height: auto;" />
    </div>

        <li><strong>Терезелеу (Windowing):</strong> Уақыттық қатарды X (өткен 30 күн) және y (31-ші күн) жұптарына бөлу.</li>
    </ol>
    
    <div class="image-wrapper">
      <img src="/assets/lessons/lesson26/262.png" alt="" style="width: 50%; height: auto;" />
    </div>

    <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto;"><code>import numpy as np

# scaled_prices — 0 мен 1 арасындағы деректер
time_steps = 30
X, y = [], []

for i in range(len(scaled_prices) - time_steps):
    # X: i-ден i+30-ға дейінгі күндер
    X.append(scaled_prices[i : i + time_steps])
    # y: i+30-шы күн (нысаналы мән)
    y.append(scaled_prices[i + time_steps])

X, y = np.array(X), np.array(y)</code></pre>

    <h4>2.4. Keras LSTM моделі</h4>
    <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto;"><code>from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LSTM

model = Sequential()
# 1-қабат: Тізбекті келесі қабатқа беру үшін return_sequences=True
model.add(LSTM(50, return_sequences=True, input_shape=(30, 1)))
# 2-қабат: Стандартты LSTM (соңғы жасырын күйді шығарады)
model.add(LSTM(50))
# Шығыс қабаты: Бағаны болжайтын жалғыз нейрон
model.add(Dense(1))

model.compile(optimizer='adam', loss='mean_squared_error')</code></pre>

    <h3>3. Түйін</h3>
    <ul>
      <li><strong>Стационарлық:</strong> ARIMA моделі деректердің стационарлы болуын қатаң талап етеді (дифференциалдау — d).</li>
      <li><strong>RNN икемділігі:</strong> LSTM желілері сызықтық емес байланыстарды үйрене алады және қатаң статистикалық параметрлерді қажет етпейді.</li>
      <li><strong>Тензор пішіні:</strong> RNN үшін уақыттық қатарлар әрқашан 3D тензор — <code>(Үлгілер, Уақыт қадамдары, Белгілер)</code> пішінінде болуы тиіс.</li>
    </ul>

    <h3>4. Ойланып көр! (Практикалық тапсырма)</h3>
    <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; border: 1px solid #ffeeba;">
        <p><strong>Сценарий:</strong> Сізде 1000 күндік акция бағасы бар. Сіз LSTM-нің 11-ші күнді болжау үшін өткен 10 күнге қарағанын қалайсыз. Сізде тек 1 ғана белгі (Жабылу бағасы) бар.</p>
        <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 10px; border-radius: 5px;"><code>time_steps = 10
X_train = []
for i in range(1000 - time_steps):
    X_train.append(scaled_prices[i : i + time_steps])
X_train = np.array(X_train)</code></pre>
        <p><strong>Тапсырма:</strong> Төмендегі код орындалған соң <code>X_train</code>-нің соңғы пішіні (shape) қандай болады?</p>
        <details>
            <summary style="cursor: pointer; color: #0d6efd;">Жауапты көру</summary>
            <div style="margin-top: 10px;">
                <p><strong>Үлгілер (Samples):</strong> 1000 - 10 = 990<br>
                <strong>Уақыт қадамдары (Time Steps):</strong> 10<br>
                <strong>Белгілер (Features):</strong> 1<br>
                <strong>Соңғы пішін:</strong> <code>(990, 10, 1)</code></p>
            </div>
        </details>
    </div>
  `,
    quiz: [
        {
            question: "ARIMA(p, d, q) моделіндегі 'd' (Integrated) параметрінің негізгі мақсаты не?",
            options: [
                "Болжам жасау үшін өткен уақыт қадамдарының санын таңдау",
                "Модельдегі жасырын нейрондар санын орнату",
                "Деректерді стационарлы ету үшін айырманы алу (дифференциалдау) санын білдіреді",
                "Сырғымалы орташа терезенің өлшемін анықтайды"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "Акция болжау моделінің бірінші LSTM қабатында неліктен return_sequences=True қолданамыз?",
            options: [
                "Соңғы бағаны бірден шығару үшін",
                "Қабаттың толық тізбекті келесі жинақталған (stacked) LSTM қабатына беруін қамтамасыз ету үшін",
                "Желінің ішкі жадын толығымен өшіру үшін",
                "Оқыту уақытын 2 есе азайту үшін"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "RNN үшін деректер дайындағанда \"жылжымалы терезе\" (sliding window) әдісінің мақсаты не?",
            options: [
                "Деректерді бүтін сандарға айналдыру үшін",
                "Деректерді X (өткен күндер тізбегі) және y (келесі күннің бағасы) жұптарына айналдырып, модельге контекст үйрету үшін",
                "Деректердегі барлық нөлдерді өшіріп тастау үшін",
                "Кескіндердің рұқсаттылығын арттыру үшін"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "Keras-тағы LSTM қабаты кіріс деректерінің қандай пішінде (shape) болуын талап етеді?",
            options: [
                "(Samples, Features) — 2D матрица",
                "(Width, Height, Channels) — Кескін форматы",
                "(Samples, Time_steps, Features) — 3D тензор",
                "(Batch_size, ) — 1D вектор"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "Уақыттық қатарларды болжауда LSTM желісінің ARIMA моделінен басты артықшылығы неде?",
            options: [
                "LSTM деректердегі күрделі, сызықтық емес байланыстарды және ұзақ мерзімді тәуелділіктерді жақсы үйрене алады",
                "LSTM тек қана сызықтық трендтермен жұмыс істейді",
                "LSTM моделі ешқандай оқыту деректерін қажет етпейді",
                "LSTM деректердің міндетті түрде стационарлы болуын талап етпейді"
            ],
            correctAnswer: 0 // A (немесе 4 - D) - екеуі де дұрыс, бірақ А негізгісі
        }
    ]
};

export default lesson26;