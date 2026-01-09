const ai02 = {
  id: 2,
  title: "Text → Image",
  content: `
  <section class="lesson-section intro">
    <h2>🧠 2-сабақ. Text → Image</h2>

    <p><strong>Тақырып:</strong> Gemini AI көмегімен мәтін арқылы сурет жасау</p>
    <p><strong>Ұзақтығы:</strong> ~40 минут</p>

    <p>
      <em>
        Бұл сабақта сіз Gemini жасанды интеллектін пайдаланып,
        мәтіндік сипаттама (промпт) арқылы сурет генерациялауды үйренесіз.
      </em>
    </p>
  </section>

  <hr/>

  <section class="lesson-section">
    <h3>1️⃣ Text → Image деген не?</h3>

    <p>
      <strong>Text → Image</strong> — бұл жасанды интеллектке мәтін түрінде
      сипаттама беріп, сол сипаттамаға сәйкес сурет алу процесі.
    </p>

    <ul>
      <li>Иллюстрация және дизайн</li>
      <li>Презентацияға сурет дайындау</li>
      <li>Әлеуметтік желіге контент жасау</li>
      <li>Идеяларды визуалды түрде көрсету</li>
    </ul>
  </section>

  <hr/>

  <section class="lesson-section">
    <h3>2️⃣ Gemini AI қалай жұмыс істейді?</h3>

    <p>
      Gemini — Google компаниясы жасаған көпмодальды жасанды интеллект.
      Ол мәтінді талдап, ондағы объектілерді, эмоцияны, жарықты және стильді
      ескере отырып сурет жасайды.
    </p>

    <pre>
Мәтіндік промпт → Gemini AI → Сурет
    </pre>

    <img src="/assets/aiLessons/ai02/555.webp" alt="AI ML DL Diagram" />
  </section>

  <hr/>

  <section class="lesson-section">
    <h3>3️⃣ Gemini AI қолданылатын сервис</h3>

    <p>Бұл сабақта біз Google Gemini ресми сервисін қолданамыз.</p>

    <p>
      👉 <a href="https://gemini.google.com" target="_blank">
      https://gemini.google.com
      </a>
    </p>

    <ul>
      <li>Google аккаунт арқылы кіруге болады</li>
      <li>Тегін нұсқасы бар (шектеулі)</li>
      <li>Қарапайым интерфейс</li>
    </ul>

    <img src="/assets/aiLessons/ai02/1.jpg" alt="AI ML DL Diagram" />
  </section>

  <hr/>

  <section class="lesson-section">
    <h3>4️⃣ Қадамдап нұсқаулық</h3>

    <ol>
      <li>Браузерде gemini.google.com сайтына кіріңіз</li>
      <li>Google аккаунтыңызбен кіріңіз</li>
      <li>Чат терезесіне суретке арналған промпт жазыңыз</li>
      <li>Gemini берген нәтижені күтіңіз</li>
      <li>Қажет болса, промптты нақтылап қайта жазыңыз</li>
    </ol>
  </section>

  <hr/>

  <section class="lesson-section examples">
    <h3>5️⃣ Тірі мысалдар — 3 сапалы промпт</h3>

    <h4>🔹 Промпт №1. Фотореалистік портрет</h4>
    <pre>
25 жастағы жас жігіттің портреті,
терезе жанында тұр,
таңғы табиғи күн жарығы бетіне түсіп тұр,
шынайы эмоция, тыныш және сенімді көзқарас,
фотореализм стилі,
табиғи тері текстурасы анық көрінеді,
жұмсақ бұлдыр фон,
кәсіби камерамен түсірілгендей,
жоғары айқындық және детализация.
    </pre>
    <img src="/assets/aiLessons/ai02/2.jpg" alt="AI ML DL Diagram" />

    <h4>🔹 Промпт №2. Кинематографиялық эмоция</h4>
    <pre>
Жас қыз жаңбырлы қала көшесінде тұр,
қолында қара қолшатыр,
кешкі уақыт, көшедегі шамдар жанып тұр,
бетінде ойлы және сәл мұңды эмоция,
кинематографиялық кадр стилі,
жарық пен көлеңке контрастты,
терең атмосфера, драмалық көңіл күй,
жоғары сапалы визуал.
    </pre>
    <img src="/assets/aiLessons/ai02/3.jpg" alt="AI ML DL Diagram" />

    <h4>🔹 Промпт №3. Заманауи lifestyle көрініс</h4>
    <pre>
Заманауи кофеханада ноутбукпен жұмыс істеп отырған жас әйел,
үлкен терезе жанында,
таңғы жұмсақ табиғи жарық,
жайлы интерьер, жылы түстер,
күнделікті өмір көрінісі,
lifestyle фотосурет стилі,
таза композиция,
жоғары детализация және сапа.
    </pre>
    <img src="/assets/aiLessons/ai02/4.jpg" alt="AI ML DL Diagram" />
  </section>

  <hr/>

  <section class="lesson-section mistakes">
    <h3>6️⃣ Жиі кездесетін қателер</h3>

    <p>❌ Қате промпт: <code>Әдемі сурет сал</code></p>

    <p>
      ✅ Дұрыс промпт:
      <code>
        Көктемгі саябақ, жасыл ағаштар,
        күн шуақты, акварель стилі.
      </code>
    </p>

    <img src="/assets/aiLessons/ai02/56.jpg" alt="AI ML DL Diagram" />
  </section>

  <hr/>

  <section class="lesson-section conclusion">
    <h3>7️⃣ Қорытынды</h3>

    <ul>
      <li>Text → Image қалай жұмыс істейтінін түсіндіңіз</li>
      <li>Gemini AI арқылы сапалы сурет жасауды үйрендіңіз</li>
      <li>Детальды промпттың шешуші рөл атқаратынын білдіңіз</li>
    </ul>

    <p><strong>Келесі сабақ:</strong> Text → Speech</p>
  </section>
  `
};

export default ai02;
