const ai01 = {
  id: 1,
  title: "Text → Text",
  content: `
  <section class="lesson-section intro">
    <h2>🧠 1-сабақ. Text → Text</h2>

    <p><strong>Тақырып:</strong> ChatGPT көмегімен мәтінмен жұмыс істеу</p>
    <p><strong>Ұзақтығы:</strong> ~40 минут</p>

    <p>
      <em>
        Бұл сабақта сіз жасанды интеллектпен мәтін арқылы жұмыс істеуді нөлден бастап үйренесіз.
      </em>
    </p>
  </section>

  <hr/>

  <section class="lesson-section">
    <h3>1️⃣ Text → Text деген не?</h3>

    <p>
      <strong>Text → Text</strong> — бұл жасанды интеллектке мәтін жазып,
      одан мәтін түрінде жауап алу.
    </p>

    <ul>
      <li>Сұрақтарға жауап алу</li>
      <li>Мәтін жаздыру</li>
      <li>Идея ойлап табу</li>
      <li>Кеңес алу</li>
    </ul>

    <img
      src="/assets/aiLessons/ai01/picture1.jpg"
      alt="AI ML DL Diagram"
      style="max-width:35%; margin:20px 0;"
    />
  </section>

  <hr/>

  <section class="lesson-section">
    <h3>2️⃣ ChatGPT қалай жұмыс істейді?</h3>

    <p>
      ChatGPT — бұл үлкен тілдік модель. Ол бұрын үйренген мәтіндерге
      сүйене отырып жауап береді.
    </p>

    <p>Жұмыс принципі:</p>

    <pre>
Сіздің мәтініңіз → ChatGPT → Жауап
    </pre>
  </section>

  <hr/>

  <section class="lesson-section">
    <h3>3️⃣ ChatGPT-ті тегін қолдану</h3>

    <p>
      Бұл сабақта біз ChatGPT сервисін қолданамыз:
      <br/>
      👉 <a href="https://chat.openai.com" target="_blank">https://chat.openai.com</a>
    </p>

    <p>Артықшылықтары:</p>

    <ul>
      <li>Тегін қолдануға болады</li>
      <li>Қазақ тілін түсінеді</li>
      <li>Мәтінмен жұмыс істеуге ыңғайлы</li>
    </ul>

    <img
      src="/assets/aiLessons/ai01/7.webp"
      alt="AI ML DL Diagram"
      style="max-width:35%; margin:20px 0;"
    />
  </section>

  <hr/>

  <section class="lesson-section">
    <h3>4️⃣ Қадамдап нұсқаулық</h3>

    <ol>
      <li>Браузерді ашып, chat.openai.com сайтына кіріңіз</li>
      <li>Аккаунтқа тіркеліңіз немесе кіріңіз</li>
      <li>Төменгі жолаққа мәтін жазыңыз</li>
      <li>Enter батырмасын басыңыз</li>
    </ol>

    <img
      src="/assets/aiLessons/ai01/1.jpg"
      alt="AI ML DL Diagram"
      style="max-width:20%; margin:20px 0;"
    />
  </section>

  <hr/>

  <section class="lesson-section examples">
    <h3>5️⃣ Тірі мысалдар — 3 промпт</h3>

    <h4>🔹 Промпт №1. Қарапайым сұрақ</h4>

    <pre>
Жасанды интеллект деген не? Қарапайым тілмен түсіндір.
    </pre>

    <p>
      <strong>Нәтиже:</strong> ChatGPT жасанды интеллектті қысқа әрі түсінікті етіп түсіндіреді.
    </p>

    <img src="/assets/aiLessons/ai01/2.jpg" alt="AI ML DL Diagram" style="max-width:20%; margin:20px 0;" />

    <h4>🔹 Промпт №2. Рөл беру</h4>

    <pre>
Сіз мұғалімсіз. 7-сынып оқушысына арналған
"Жасанды интеллект" тақырыбында қысқа түсіндірме жазыңыз.
    </pre>

    <p>
      Бұл промптта жасанды интеллектке рөл берілді, сондықтан жауап қарапайым болады.
    </p>

    <img
      src="/assets/aiLessons/ai01/3.jpg"
      alt="AI ML DL Diagram"
      style="max-width:20%; margin:20px 0;"
    />

    <h4>🔹 Промпт №3. Өмірлік мәселе</h4>

    <pre>
Маған күнделікті уақытты дұрыс жоспарлау үшін 5 кеңес бер.
    </pre>

    <p>
      ChatGPT бұл жерде кеңесші ретінде жұмыс істейді.
    </p>

    <img src="/assets/aiLessons/ai01/4.jpg" alt="AI ML DL Diagram" style="max-width:20%; margin:20px 0;"/>
  </section>

  <hr/>

  <section class="lesson-section mistakes">
    <h3>6️⃣ Жиі кездесетін қателер</h3>

    <p>❌ Қате промпт: <code>Маған мәтін жазып бер</code></p>

    <p>Неге қате?</p>

    <ul>
      <li>Қандай тақырып екені белгісіз</li>
      <li>Қай стильде жазу керек екені айтылмаған</li>
      <li>Кімге арналғаны көрсетілмеген</li>
    </ul>

    <p>
      ✅ Дұрыс промпт:
      <code>
        Жасанды интеллекттің білім саласындағы пайдасы туралы
        8–10 сөйлемнен тұратын түсіндірме мәтін жазыңыз.
      </code>
    </p>

    <img src="/assets/aiLessons/ai01/bad.jpg" alt="AI ML DL Diagram" style="max-width:20%; margin:20px 0;"/>
  </section>

  <hr/>

  <section class="lesson-section conclusion">
    <h3>7️⃣ Қорытынды</h3>

    <ul>
      <li>Text → Text қалай жұмыс істейтінін үйрендіңіз</li>
      <li>ChatGPT-ті қолдана бастадыңыз</li>
      <li>Дұрыс промпт жазуды меңгере бастадыңыз</li>
    </ul>
  </section>
`
};

export default ai01;
