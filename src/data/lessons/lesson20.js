const lesson20 = {
    id: 20,
    title: "20-сабақ: LSTM архитектурасы",
    description: "Ұяшық күйі (Ct) мен Жасырын күй (ht), Қақпа механизмдері (Gating) және Keras-та LSTM баптау.",
    content: `
    <h3>Оқу мақсаттары:</h3>
    <ul>
      <li>LSTM блогындағы Ұяшық күйі (Ct) мен Жасырын күй (ht) арасындағы айырмашылықты сипаттау.</li>
      <li>Ақпарат ағынын реттеудегі Ұмыту (Forget), Кіріс (Input) және Шығыс (Output) қақпаларының қызметін түсіндіру.</li>
      <li>Keras-та LSTM қабатын баптап, <code>return_sequences</code> параметрінің маңызын түсіну.</li>
    </ul>

    <h3>1. Кіріспе</h3>
    <p>Стандартты RNN ұзын тізбектерді өңдеу кезінде «амнезиядан» — Градиенттің жоғалуы мәселесінен зардап шегеді. Желі тізбектің соңына жеткенде оның басында не болғанын ұмытып қалады.</p>
    <p><strong>LSTM (Long Short-Term Memory)</strong> желісі дәл осы мәселені шешу үшін жасалған. Оны стандартты желінің жанында жүріп жатқан «конвейер таспасы» деп елестетіңіз. Бұл таспа ақпараттың бірінші сөзден ең соңғы сөзге дейін өзгеріссіз жетуіне мүмкіндік береді және қажет болғанда ғана жаңартылып отырады.</p>

    <h3>2. Негізгі мазмұн</h3>

    <h4>2.1. Екі күй: Ұяшық және Жасырын күй</h4>
    <p>LSTM әр уақыт қадамында екі бөлек векторды («жадыны») сақтайды:</p>
    
    

    <ul>
        <li><strong>Ұяшық күйі (Ct):</strong> Бұл «ұзақ мерзімді ішкі жады». Ол ақпаратты уақыт қадамдары арқылы өте аз математикалық өзгерістермен тасымалдайды, бұл градиенттің жоғалуына жол бермейді.</li>
        <li><strong>Жасырын күй (ht):</strong> Бұл «жұмыс жады» немесе ұяшықтың нақты сол сәттегі шығысы. Ол ағымдағы болжам үшін және келесі қадамға контекст ретінде қолданылады.</li>
    </ul>

    <div class="image-wrapper">
      <img src="/assets/lessons/lesson20/201.png" alt="" style="width: 50%; height: auto;" />
    </div>

    <h4>2.2. Қақпа механизмдері (Gating Mechanisms)</h4>
    <p>Ақпарат ағынын үш негізгі қақпа («сүзгі») басқарады:</p>
    
    

    <ul>
        <li><strong>Ұмыту қақпасы (Forget Gate):</strong> Ұяшық күйінен қандай ақпаратты өшіру керектігін шешеді. (0-ге жақын мән — өшіру, 1-ге жақын — сақтау).</li>
        <li><strong>Кіріс қақпасы (Input Gate):</strong> Ұяшық күйіне қандай жаңа ақпаратты қосу керектігін анықтайды.</li>
        <li><strong>Шығыс қақпасы (Output Gate):</strong> Ағымдағы ұяшық күйінің қай бөлігі келесі жасырын күйге (шығысқа) өтетінін шешеді.</li>
    </ul>

    <h4>2.3. LSTM-дегі активациялық функциялар</h4>
    <p>Keras-та LSTM екі түрлі активация функциясын қатар қолданады:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Параметр</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Функция</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Қызметі</th>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><code>activation</code></td>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>tanh</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">Мәндерді <code>[-1, 1]</code> аралығында қысады. Деректердің өзін модуляциялау үшін қолданылады.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><code>recurrent_activation</code></td>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>sigmoid</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">Мәндерді <code>[0, 1]</code> аралығында шығарады. Қақпалардың «ашық» немесе «жабық» екенін анықтайды.</td>
        </tr>
    </table>

    <h3>3. Keras-та іске асыру</h3>
    <p>LSTM қабатын баптаудың үлгісі:</p>
    <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto;"><code>from keras.layers import LSTM

# units: ішкі жады ұяшықтарының саны
# return_sequences: True болса, бүкіл тізбекті келесі қабатқа береді
model.add(LSTM(units=50, 
               activation='tanh', 
               recurrent_activation='sigmoid', 
               return_sequences=True, 
               input_shape=(time_steps, features)))</code></pre>

    <div style="background-color: #ffe6e6; padding: 10px; border-left: 4px solid #dc3545;">
        <strong>Маңызды ескерту:</strong> Егер сіз екі немесе одан да көп LSTM қабатын бірінің үстіне бірін қойсаңыз (stacking), соңғы қабаттан басқа алдыңғы қабаттардың барлығында міндетті түрде <code>return_sequences=True</code> болуы керек.
    </div>

    <h3>Негізгі түйіндер</h3>
    <ul>
        <li><strong>Ұзақ мерзімді жады:</strong> LSTM-дер ұзақ тізбектер бойы ақпаратты сақтайтын конвейер таспасы сияқты әрекет ететін Ұяшық күйін (Ct) қолдану арқылы градиенттің жоғалуы мәселесін шешеді.</li>
        <li><strong>Таңдамалы жады:</strong> Ағынды үш қақпа басқарады: Ұмыту (ескі ақпаратты өшіру), Кіріс (жаңа ақпаратты сақтау) және Шығыс (ағымдағы болжамды анықтау).</li>
        <li><strong>Қос активация:</strong> LSTM-дер қақпалар үшін Sigmoid-ты (0 мен 1 логикасы) және деректердің өзін модуляциялау үшін Tanh-ты (-1 мен 1 диапазоны) қолданады.</li>
    </ul>

    <h3>4. Практикалық тапсырма: Қабатты түзету</h3>
    <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; border: 1px solid #ffeeba;">
        <p><strong>Сценарий:</strong> Сіз акция бағасын болжайтын жинақталған (stacked) LSTM моделін құрып жатырсыз.</p>
        <p><strong>Қатесі бар код:</strong></p>
        <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 10px; border-radius: 5px;"><code>model = Sequential()
# 1-қабат
model.add(LSTM(units=64, return_sequences=False, input_shape=(30, 1)))
# 2-қабат
model.add(LSTM(units=32))</code></pre>
        <p><strong>Тапсырма:</strong></p>
        <ol>
            <li>Неліктен 2-қабат істен шығады (Error)?</li>
            <li>Кодты қалай түзетесіз?</li>
        </ol>
        <details>
            <summary style="cursor: pointer; color: #0d6efd;">Жауапты көру</summary>
            <div style="margin-top: 10px;">
                <p><strong>Қате:</strong> 1-қабатта <code>return_sequences=False</code> болғандықтан, ол тек соңғы уақыт қадамының векторын береді (2D). Ал 2-қабат (LSTM) кіріс ретінде толық тізбекті (3D) күтеді.</p>
                <p><strong>Түзету:</strong> 1-қабатта <code>return_sequences=True</code> деп орнату қажет.</p>
            </div>
        </details>
    </div>
  `,
    quiz: [
        {
            question: "LSTM-дегі Ұяшық күйінің (Ct) негізгі қызметі қандай?",
            options: [
                "Кескіннің соңғы классификациясын анықтау",
                "Уақыт қадамдары арқылы ақпаратты өте аз өзгерістермен тасымалдайтын ішкі жады ретінде әрекет ету",
                "Ағымдағы уақыт қадамы үшін шығысты сүзу",
                "Желі салмақтарын нөлге қайтару"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "Ішкі жадыдан қандай ақпаратты лақтырып тастау керектігін шешуге қай қақпа жауапты?",
            options: [
                "Кіріс қақпасы",
                "Шығыс қақпасы",
                "Ұмыту қақпасы",
                "Логикалық қақпа"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "Неліктен Keras LSTM-дерінде recurrent_activation әдетте sigmoid болып орнатылады?",
            options: [
                "Себебі оны есептеу ReLU-ға қарағанда жылдамырақ",
                "Себебі ол 0 мен 1 арасындағы мәндерді шығарады, бұл қақпаларды ашу/жабу үшін өте қолайлы",
                "Себебі ол тек теріс сандарды шығарады",
                "Себебі ол градиенттің жарылуын болдырмайды"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "Егер сіз екі LSTM қабатын бірінің үстіне бірін қойғыңыз келсе, бірінші қабатта қай параметрді True деп орнату керек?",
            options: [
                "stateful",
                "return_sequences",
                "return_state",
                "bidirectional"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "Ұяшық күйі (Ct) мен Жасырын күй (ht) арасындағы негізгі айырмашылық неде?",
            options: [
                "Ct тек суреттермен жұмыс істейді, ал ht — мәтінмен",
                "Ct — бұл ұзақ мерзімді ішкі жады, ал ht — ағымдағы шығыс және келесі қадамға берілетін контекст",
                "Ешқандай айырмашылық жоқ, олар бір вектордың екі атауы",
                "Ct тек соңғы қабатта қолданылады"
            ],
            correctAnswer: 1 // B
        }
    ]
};

export default lesson20;