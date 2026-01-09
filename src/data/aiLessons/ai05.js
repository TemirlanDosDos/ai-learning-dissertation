const ai05 = {
  id: 5,
  title: "Image → Image",
  content: `
  <section class="lesson-section intro">
    <h2>🧠 5-сабақ. Image → Image</h2>

    <p><strong>Тақырып:</strong> Gemini арқылы суретті өзгерту</p>
    <p><strong>Ұзақтығы:</strong> ~30 минут</p>

    <p>
      <em>
        Бұл сабақта сіз дайын суретті Gemini-ге жүктеп,
        мәтін арқылы нақты нұсқау беріп,
        суретті өңдеуді үйренесіз.
      </em>
    </p>
  </section>

  <hr/>

  <section class="lesson-section">
    <h3>1️⃣ Image → Image деген не?</h3>

    <p>
      <strong>Image → Image</strong> — бұл дайын суретті
      жасанды интеллектке беріп,
      сол суретті өзгерту немесе өңдеу.
    </p>

    <ul>
      <li>Артық объектілерді алып тастау</li>
      <li>Фонды өзгерту</li>
      <li>Сурет стилін ауыстыру</li>
    </ul>
  </section>

  <hr/>

  <section class="lesson-section">
    <h3>2️⃣ Қолданылатын сервис</h3>

    <p>Бұл сабақта <strong>Gemini</strong> қолданылады.</p>

    <p>
      👉 <a href="https://gemini.google.com" target="_blank">
      https://gemini.google.com
      </a>
    </p>

    <img src="/assets/aiLessons/ai02/555.webp" alt="AI ML DL Diagram" />
  </section>

  <hr/>

  <section class="lesson-section">
    <h3>3️⃣ Қалай жұмыс істейді?</h3>

    <ol>
      <li>Gemini чатына суретті жүктейсіз</li>
      <li>Төменге не өзгерту керегін жазасыз</li>
      <li>Gemini жаңартылған сурет береді</li>
    </ol>

    <pre>
Сурет + нұсқау → Gemini → Жаңа сурет
    </pre>
  </section>

  <hr/>

  <section class="lesson-section examples">
    <h3>4️⃣ Тірі мысалдар — 3 промпт</h3>

    <h3>Мысал сурет:</h3>
    <img src="/assets/aiLessons/ai05/1.jpg" alt="AI ML DL Diagram" />

    <h4>🔹 Мысал №1. Артық объектіні алып тастау</h4>
    <pre>
Осы суреттегі артқы жақта тұрған адамды алып таста.
Қалған бөлігін өзгертпе.
    </pre>

    <img src="/assets/aiLessons/ai05/2.jpg" alt="AI ML DL Diagram" />

    <h4>🔹 Мысал №2. Фонды ауыстыру</h4>
    <pre>
Адамды сол күйі қалдыр.
Артындағы фонды алып тастап,
оның орнына ашық, минималистік фон қой.
    </pre>

    <img src="/assets/aiLessons/ai05/3.jpg" alt="AI ML DL Diagram" />

    <h4>🔹 Мысал №3. Стильді өзгерту</h4>
    <pre>
Осы фотосуретті
digital illustration стиліне ауыстыр.
Жұмсақ түстер қолдан.
    </pre>

    <img src="/assets/aiLessons/ai05/4.jpg" alt="AI ML DL Diagram" />
  </section>

  <hr/>

  <section class="lesson-section mistakes">
    <h3>5️⃣ Жиі кездесетін қателер</h3>

    <p>
      ❌ <code>Осыны дұрыста</code><br/>
      ❌ <code>Әдемі қылып бер</code>
    </p>

    <p>Себебі: нақты не өзгеретіні айтылмаған.</p>

    <p>
      Дұрыс тәсіл:
      не алып тастау керек,
      не ауысады,
      не сол күйі қалуы керек —
      нақты жазу.
    </p>
  </section>

  <hr/>

  <section class="lesson-section conclusion">
    <h3>6️⃣ Қорытынды</h3>

    <ul>
      <li>Gemini арқылы сурет өңдеуді үйрендіңіз</li>
      <li>Суретке нақты нұсқау беруді түсіндіңіз</li>
      <li>Image → Image логикасын меңгердіңіз</li>
    </ul>

    <p><strong>Келесі сабақ:</strong> Image → Text</p>
  </section>
  `
};

export default ai05;
