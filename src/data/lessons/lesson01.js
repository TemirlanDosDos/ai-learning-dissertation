const lesson01 = {
  id: 1,
  title: "1-сабақ: Машиналық оқытуға кіріспе және жұмыс ортасын баптау",
  description: "Жасанды интеллект зерттеулерінің мақсаты, Python кітапханалары (TensorFlow, Keras), GPU/RAM талаптары және Google Colab пен жергілікті ортаны салыстыру.",
  // language=HTML
  content: `
    <h3>Оқу мақсаттары:</h3>
    <ul>
      <li>Жасанды интеллект (AI) зерттеулерінің түпкі мақсатын анықтау.</li>
      <li>Терең оқыту үшін қажетті негізгі Python кітапханаларын (TensorFlow, Keras, NumPy, Pandas) тану.</li>
      <li>Модельдерді оқытуға қойылатын техникалық талаптарды (GPU/RAM) білу.</li>
      <li>Google Colab пен жергілікті жұмыс орталарын салыстыру.</li>
    </ul>

    <h3>1. Кіріспе</h3>
    <p>Машиналық оқыту Siri мен Alexa сияқты дауыстық көмекшілерден бастап, Tesla-ның автономды көліктеріне дейінгі технологияларды қозғалысқа келтіріп, күнделікті өмірімізге етене еніп кетті. Бұл саланың айтулы жетістіктерінің бірі — DeepMind-тың AlphaGo жобасы.</p>
    <p>Негізінде, AI зерттеулерінің мақсаты — адам интеллектімен бәсекелесе алатын, ойлауға және үйренуге қабілетті машиналар жасау. Бұған қол жеткізу үшін тек код жазу жеткіліксіз; ол үшін арнайы математикалық құралдар мен есептеу қуаты қажет.</p>

    <div class="image-wrapper">
      <img src="/assets/lessons/lesson1/ai-intro.png" alt="" style="width: 50%; height: auto;" />
    </div>

    );

    <h3>2. Негізгі мазмұн</h3>
    
    <h4>2.1. Бағдарламалық қамтамасыз ету жиынтығы (The Software Stack)</h4>
    <p>Python — машиналық оқытудың негізгі тілі. Оның күші арнайы кітапханаларында:</p>
    
    <ul>
      <li><strong>NumPy және Pandas:</strong> Деректерді өңдеу мен талдауға арналған.</li>
      <li><strong>TensorFlow және Keras:</strong> Нейрондық желілерді құру мен оқытудың басты құралдары.</li>
    </ul>

    <div class="image-wrapper">
      <img src="/assets/lessons/lesson1/gpu.png" alt="" style="width: 50%; height: auto;" />
    </div>

    <h4>2.2. Техникалық жабдықтарға қойылатын талаптар</h4>
    <p>Терең оқыту алгоритмдері үлкен есептеу қуатын қажет етеді:</p>
    
    <ul>
      <li><strong>Орталық процессор (CPU):</strong> Жүйенің тұрақтылығы үшін кем дегенде 16 ГБ RAM қажет.</li>
      <li><strong>Графикалық процессор (GPU):</strong> Ең маңызды компонент. NVIDIA GPU-лары CUDA технологиясының арқасында әлемдік стандарт болып саналады.</li>
    </ul>
    <blockquote>Ұсыныс: Кем дегенде 16 ГБ VRAM (бейнежад) бар карталар (мысалы, RTX 3080) тиімдірек.</blockquote>

    <div class="image-wrapper">
      <img src="/assets/lessons/lesson1/python-stack.png" alt="" style="width: 50%; height: auto;" />
    </div>

    );
    
    <h4>2.3. Операциялық жүйе және жұмыс ортасы</h4>
    <ul>
      <li><strong>Linux (Ubuntu):</strong> Ең жақсы таңдау. Драйверлер мен кітапханалар өте тұрақты жұмыс істейді.</li>
      <li><strong>Windows:</strong> Танымал, бірақ баптау кезінде қиындықтар туындауы мүмкін.</li>
      <li><strong>Google Colab:</strong> Тегін бұлттық сервис. Егер компьютеріңіз әлсіз болса, бұл — ең тиімді шешім.</li>
    </ul>
    
    <div style="margin: 20px 0; padding: 15px; background-color: #e8f4fd; border-left: 5px solid #2196F3; border-radius: 4px;">
      <strong>📺 Медиа ресурс:</strong><br/>
      Google Colab-пен жұмыс істеу туралы видеоны қараңыз (0:00-1:27 аралығы):<br/>
      <a href="https://www.youtube.com/watch?v=ACc0ZVIlKXI" target="_blank" style="color: #0d6efd; text-decoration: underline;">Видеоны ашу (YouTube)</a>
    </div>

    <div class="image-wrapper">
      <img src="/assets/lessons/lesson1/Frame%202.png" alt="" style="width: 50%; height: auto;" />
    </div>

    <div class="image-wrapper">
      <img src="/assets/lessons/lesson1/Frame%203.png" alt="" style="width: 50%; height: auto;" />
    </div>

    <h3>3. Түйін</h3>
    <ul>
      <li><strong>AI мақсаты:</strong> Ойлауға және үйренуге қабілетті жүйелер жасау.</li>
      <li><strong>GPU басымдығы:</strong> Тек CPU-мен терең оқыту өте баяу жүреді.</li>
      <li><strong>Минималды талап:</strong> 16 ГБ жедел жад (RAM).</li>
      <li><strong>Негізгі құралдар:</strong> Python, TensorFlow және Keras.</li>
    </ul>

    <h3>4. Ойланып көр! (Практикалық тапсырма)</h3>
    <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; border: 1px solid #ffeeba;">
        <p><strong>Сценарий:</strong> Сізде мынадай сипаттамалары бар ноутбук бар:</p>
        <ul>
        <li>ОЖ: Windows 10</li>
        <li>RAM: 8 ГБ</li>
        <li>GPU: Кірістірілген Intel Graphics</li>
        </ul>
        <p><strong>Тапсырма:</strong></p>
        <ol>
        <li>Осы ноутбуктың сабаққа сәйкес келмейтін екі техникалық тұсын анықтаңыз.</li>
        <li>Жаңа компьютер сатып алмай-ақ, бұл мәселені қалай шешуге болады?</li>
        </ol>
    </div>
  `,
  quiz: [
    {
      question: "AI зерттеулерінің түпкі мақсаты не?",
      options: [
        "Адамдардан жылдам есептейтін калькулятор жасау",
        "Ойлауға және үйренуге қабілетті машиналар жасау",
        "Барлық жұмыс орындарын автоматтандыру",
        "Деректерді сақтауға арналған серверлер жасау"
      ],
      correctAnswer: 1 // B (0-ден бастағанда 1)
    },
    {
      question: "Терең оқыту модельдерін оқытуды жеделдету үшін қай компонент ең маңызды?",
      options: [
        "Жылдам интернет",
        "Жылдам CPU",
        "NVIDIA GPU",
        "Үлкен монитор"
      ],
      correctAnswer: 2 // C
    },
    {
      question: "Неліктен Linux (Ubuntu) терең оқыту үшін жиі таңдалады?",
      options: [
        "Ол тегін болғандықтан",
        "Оның GPU драйверлерін қолдауы жақсырақ және баптау оңай",
        "Ол Windows-тан әдемірек",
        "Ол тек Python тілінде жұмыс істейді"
      ],
      correctAnswer: 1 // B
    },
    {
      question: "Егер сізде қуатты компьютер болмаса, тегін GPU ресурстарын қайдан алуға болады?",
      options: [
        "Microsoft Word",
        "Google Colab",
        "Telegram",
        "GitHub Desktop"
      ],
      correctAnswer: 1 // B
    },
    {
      question: "Машиналық оқыту үшін ұсынылатын жүйелік RAM (жедел жад) мөлшері қандай?",
      options: [
        "2 ГБ",
        "4 ГБ",
        "8 ГБ",
        "16 ГБ және одан жоғары"
      ],
      correctAnswer: 3 // D
    }
  ]
};

export default lesson01;