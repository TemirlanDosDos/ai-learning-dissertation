const lesson05 = {
  id: 5,
  title: "5-сабақ: Транспонирлеу (Ауыстыру) және күрделі пішіндер",
  description: "tf.transpose функциясы, reshape-тегі [-1] уайлдкарды және Channel Last/First форматтарын ауыстыру.",
  content: `
    <h3>Оқу мақсаттары:</h3>
    <ul>
      <li>Тензордың осьтерін (жолдарды, бағандарды, каналдарды) ауыстыру үшін <code>tf.transpose</code> функциясын қолдану.</li>
      <li><code>tf.reshape</code> ішіндегі <code>[-1]</code> "уайлдкардын" қолдану арқылы есептеулерді автоматтандыруды үйрену.</li>
      <li>Channel Last және Channel First форматтарының айырмашылығын түсініп, оларды бір-біріне түрлендіру.</li>
    </ul>

    <h3>1. Кіріспе</h3>
    <p>Алдыңғы сабақта біз деректерді нейрондық желіге сәйкестендіру үшін пішінді өзгертуді (reshaping) қарастырдық. Дегенмен, кейде деректердің пішіні дұрыс болса да, олардың бағыты қате келеді.</p>
    <p>Мысалы, бір кітапхана түс каналдарын соңында сақтаса (Қызыл, Жасыл, Көк), екіншісі басында сақтауы мүмкін. Мұндай деректерді жай ғана reshape арқылы өзгертсеңіз, пиксельдер араласып, кескін бұзылады. Мұны түзету үшін бізге <strong>Транспонирлеу (Transposing)</strong> қажет.</p>

    <h3>2. Негізгі мазмұн</h3>

    <h4>2.1. Тензорларды транспонирлеу</h4>
    <p><code>reshape</code> деректердің жадыдағы орналасу ретін сақтаса, <code>transpose</code> осьтердің (axes) өздерін қайта реттейді. Бұл матрицадағы жолдар мен бағандардың орнын ауыстырумен бірдей.</p>

     <div class="image-wrapper">
      <img src="/assets/lessons/lesson5/transpose-matrix.png" alt="" style="width: 50%; height: auto;" />
    </div>

    <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto;"><code>import tensorflow as tf

# 2x3 матрицасы
matrix = tf.constant([[1, 2, 3], [4, 5, 6]]) 

# Транспонирлеу (өлшемдерді ауыстыру)
transposed = tf.transpose(matrix) 
# Нәтиже пішіні: (3, 2)</code></pre>

    <h4>2.2. "Уайлдкард" [-1] қолдану</h4>
    <p>Тереңірек желілермен жұмыс істегенде, әрбір операция үшін элементтер санын қолмен есептеу қиын. TensorFlow бұл математиканы автоматтандыру үшін <code>-1</code> индексін ұсынады. Бұл индекс "қалған барлық элементтерді осы өлшемге жинақта" дегенді білдіреді.</p>

    <div class="image-wrapper">
      <img src="/assets/lessons/lesson5/wildcard-reshape.png" alt="" style="width: 50%; height: auto;" />
    </div>

    <h4>2.3. Кескін форматтары: Channel Last vs Channel First</h4>
    <p>Бұл — Конволюциялық нейрондық желілерде (CNN) ең маңызды тақырыптардың бірі.</p>
    
    

    <ul>
        <li><strong>Channel Last (H, W, C):</strong> TensorFlow үшін әдепкі формат. Канал (түс) соңында тұрады.</li>
        <li><strong>Channel First (C, H, W):</strong> Кейбір GPU драйверлері мен фреймворктер (мысалы, PyTorch) үшін жылдамырақ формат.</li>
    </ul>

    <p>Оларды ауыстыру үшін <code>perm</code> (permutation) аргументін қолданамыз:</p>
    <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto;"><code># (H, W, C) -> (C, H, W) ауыстыру
# 0-ші ось (H) -> 1-ге
# 1-ші ось (W) -> 2-ге
# 2-ші ось (C) -> 0-ге ауысады

output = tf.transpose(tensor, perm=[2, 0, 1])</code></pre>

    <div class="image-wrapper">
      <img src="/assets/lessons/lesson5/channels-perm.png" alt="" style="width: 50%; height: auto;" />
    </div>

    <h3>3. Түйін</h3>
    <ul>
      <li><strong>Transpose:</strong> Осьтердің орнын ауыстырады (мысалы, жолды бағанға айналдырады).</li>
      <li><strong>Автоматтандыру:</strong> <code>[-1]</code> параметрі TensorFlow-қа өлшемді қалған деректер негізінде өзі есептеуге мүмкіндік береді.</li>
      <li><strong>Кескін форматы:</strong> Егер кескін бұзылып немесе түсініксіз болып көрінсе, бірінші кезекте арналар (Channels) ретін тексеріңіз.</li>
    </ul>

    <h3>4. Ойланып көр! (Практикалық тапсырма)</h3>
    <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; border: 1px solid #ffeeba;">
        <p><strong>Сценарий:</strong> Сіз кескінді өңдейтін модель алдыңыз. Модель деректерді <code>(Channel, Height, Width)</code> форматында күтеді. Бірақ сіздің деректеріңіз стандартты <code>(Height, Width, Channel)</code> форматында, пішіні <code>(224, 224, 3)</code>.</p>
        <p><strong>Тапсырма:</strong></p>
        <ol>
            <li>Осы кескінді модельге дұрыс беру үшін <code>tf.transpose</code> функциясын қалай қолданасыз?</li>
            <li><code>perm</code> аргументіне сандардың қандай тізімін жазасыз?</li>
        </ol>
        <details>
            <summary style="cursor: pointer; color: #0d6efd;">Жауапты көру</summary>
            <p style="margin-top: 10px;">
                Дұрыс код: <code>tf.transpose(image, perm=[2, 0, 1])</code>.<br>
                Түсіндірме: Бастапқы осьтер [0, 1, 2]. Біз 2-ші осьті (Channel) басына қоямыз, содан кейін 0 (Height) және 1 (Width) келеді.
            </p>
        </details>
    </div>
    
    <div class="image-wrapper">
      <img src="/assets/lessons/lesson5/task-perm.png" alt="" style="width: 50%; height: auto;" />
    </div>
  `,
  quiz: [
    {
      question: "tf.transpose мен tf.reshape арасындағы басты айырмашылық неде?",
      options: [
        "Ешқандай айырмашылық жоқ",
        "reshape деректер ретін сақтайды, ал transpose осьтерді қайта бағыттайды (ауыстырады)",
        "transpose тек 1D тензорлармен жұмыс істейді",
        "reshape тек GPU-да жұмыс істейді"
      ],
      correctAnswer: 1 // B
    },
    {
      question: "tf.reshape(tensor, [-1, 28]) командасындағы -1 не істейді?",
      options: [
        "Ол бірінші өлшемді жояды",
        "Ол бірінші өлшемнің көлемін элементтердің жалпы санына қарай автоматты түрде есептейді",
        "Ол барлық мәндерді теріс сандарға айналдырады",
        "Ол тензорды нөлге теңестіреді"
      ],
      correctAnswer: 1 // B
    },
    {
      question: "TensorFlow-тағы кескіндердің әдепкі форматы (Channel Last) қалай жазылады?",
      options: [
        "(Channel, Height, Width)",
        "(Height, Width, Channel)",
        "(Width, Channel, Height)",
        "(Batch, Channel)"
      ],
      correctAnswer: 1 // B
    },
    {
      question: "2x3 матрицасына tf.transpose қолданғанда, жаңа пішін қандай болады?",
      options: [
        "2x3",
        "6x1",
        "3x2",
        "1x6"
      ],
      correctAnswer: 2 // C
    },
    {
      question: "Неліктен кескін каналдарын ауыстыру үшін reshape қолдануға болмайды?",
      options: [
        "Себебі reshape тым баяу жұмыс істейді",
        "Себебі reshape пиксельдердің логикалық ретін бұзып, кескінді жарамсыз етеді",
        "Себебі reshape тек векторларға арналған",
        "Себебі reshape жадты тым көп алады"
      ],
      correctAnswer: 1 // B
    }
  ]
};

export default lesson05;