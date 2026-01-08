const lesson34 = {
    id: 34,
    title: "34-сабақ: Алдын ала оқытылған модельдер және ЖИ Агенттері",
    description: "API арқылы LLM-мен жұмыс, Промпт-инженерия стратегиялары және RAG (Retrieval-Augmented Generation) архитектурасы.",
    content: `
    <h3>Оқу мақсаттары:</h3>
    <ul>
      <li>API арқылы GPT-4 және DALL-E сияқты заманауи модельдермен әрекеттесу үшін Python кодын іске асыру.</li>
      <li>Модельді қайта оқытпай-ақ оның нәтижесін оңтайландыру үшін Промпт-инженерия әдістерін (Zero-Shot, Few-Shot, Chain-of-Thought) қолдану.</li>
      <li>LLM-дерді сыртқы дереккөздерге қосу үшін LangChain және RAG (Іздеумен толықтырылған генерация) арқылы автономды ЖИ Агентін құру.</li>
    </ul>

    <h3>1. Кіріспе</h3>
    <p>Осы курста біз MNIST немесе акция бағалары сияқты нақты деректер жиынында нейрондық желілерді нөлден бастап құрдық. Бірақ табиғи тілді адам деңгейінде түсінетін модельді оқыту үшін жеке әзірлеушінің мүмкіндігінен тыс орасан зор есептеу ресурстары қажет.</p>
    <p>Бұл жерде бізге <strong>Алдын ала оқытылған модельдер</strong> көмекке келеді. GPT-4 сияқты модельді өзіңіз оқытудың орнына, оны дайын сервис (API) ретінде қолданасыз. Бұл сабақ заманауи ЖИ әзірлеудің ең озық шебі — промпт-инженерия және ЖИ Агенттеріне арналады.</p>

    <h3>2. Негізгі мазмұн</h3>

    <h4>2.1. Заманауи модельдерге қол жеткізу (API)</h4>
    <p>Мәтінді өңдеу немесе кескін жасау сияқты күрделі тапсырмалар үшін біз API-ге (Application Programming Interface) сүйенеміз.</p>
    
    <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto;"><code>from openai import OpenAI
client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Сәлем, ЖИ әлемі!"}]
)
print(response.choices[0].message.content)</code></pre>

    <h4>2.2. Промпт-инженерия: Жаңа "бағдарламау тілі"</h4>
    <p>Промпт-инженерия — модельдің мінез-құлқын бағыттау үшін кіріс мәтіндерін шебер құрастыру өнері.</p>

    

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Әдіс</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Сипаттамасы</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Zero-Shot</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Модельден тапсырманы ешқандай мысалсыз орындауды сұрау.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Few-Shot</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Промпт ішінде модельге бірнеше мысал келтіру (дәлдікті арттырады).</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Chain-of-Thought</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Модельді күрделі мәселелерді қадам-қадаммен шешуге итермелеу.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Role-Playing</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Модельден нақты бір тұлға (мысалы, "сен мұғалімсің") кейпіне енуді сұрау.</td>
        </tr>
      </tbody>
    </table>

    <h4>2.3. ЖИ Агенттері және RAG</h4>
    <p>ЖИ Агенті — мақсатқа жету үшін автономды әрекет ете алатын (код жазатын, интернеттен іздейтін) бағдарлама. LLM-дердің білімі оқыту кезеңімен шектелген (Knowledge Cutoff). Бұны шешу үшін біз <strong>RAG (Retrieval-Augmented Generation)</strong> архитектурасын қолданамыз.</p>
    
    

    <p><strong>RAG Архитектурасы:</strong></p>
    <ol>
        <li><strong>Индекстеу:</strong> Құжаттарды (PDF) бөліктерге бөліп, Векторлық қоймада (FAISS, Chroma) сақтау.</li>
        <li><strong>Іздеу (Retrieval):</strong> Сұраққа ұқсас ақпаратты қоймадан тауып алу.</li>
        <li><strong>Генерация:</strong> Табылған деректерді промптқа "контекст" ретінде қосып, LLM-нен жауап алу.</li>
    </ol>

    <h3>3. Түйін</h3>
    <ul>
      <li><strong>Оқытудың орнына API:</strong> Күрделі тапсырмалар үшін модельді нөлден оқытпай, дайын API-лерді қолданыңыз.</li>
      <li><strong>Промпт стратегиялары:</strong> Нәтижені жақсарту үшін мысалдар мен қадамдық ойлауды қолданыңыз.</li>
      <li><strong>RAG:</strong> Модельдің білімін жаңарту немесе жеке деректерді қолдану үшін RAG жүйесін пайдаланыңыз.</li>
    </ul>

    <h3>4. Ойланып көр! (Практикалық тапсырма)</h3>
    <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; border: 1px solid #ffeeba;">
        <p><strong>Сценарий:</strong> Сіз компанияның PDF құжаттары бойынша жауап беретін чат-боттың кодын тексеріп жатырсыз.</p>
        <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 10px; border-radius: 5px;"><code># 1. Векторлық қоймадан құжаттарды іздеу
retriever = store.as_retriever(search_kwargs={"k": 3})
results = retriever.get_relevant_documents(query_text)

# 2. Промпт жасау
PROMPT_TEMPLATE = "Контексті қолданып жауап бер: {context} \\n Сұрақ: {query}"</code></pre>
        <p><strong>Тапсырма:</strong></p>
        <ol>
            <li><code>k: 3</code> параметрі нені білдіреді?</li>
            <li>Неліктен біз <code>context</code> айнымалысын промптқа енгіземіз?</li>
        </ol>
        <details>
            <summary style="cursor: pointer; color: #0d6efd;">Жауапты көру</summary>
            <div style="margin-top: 10px;">
                <p>1. Ол қоймадан сұраққа ең ұқсас <strong>3 құжат бөлігін</strong> іздеп табады.</p>
                <p>2. LLM-ге өз білімінде жоқ <strong>нақты ақпаратты (контексті)</strong> беру үшін.</p>
            </div>
        </details>
    </div>
  `,
    quiz: [
        {
            question: "Промпт-инженерияда Zero-Shot пен Few-Shot әдістерінің басты айырмашылығы неде?",
            options: [
                "Zero-Shot модельді толық қайта оқытуды білдіреді",
                "Zero-Shot тек сурет генерациялау үшін қолданылады",
                "Few-Shot әдісінде модельге промпт ішінде бірнеше мысал беріледі, ал Zero-Shot-та ешқандай мысал берілмейді",
                "Олардың арасында ешқандай айырмашылық жоқ"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "Неліктен \"Chain-of-Thought\" (Ойлау тізбегі) промпты күрделі есептерді шешуде тиімдірек?",
            options: [
                "Ол модельдің жауап беру жылдамдығын арттырады",
                "Ол модельді есептің шешімін қадам-қадаммен жазуға мәжбүрлейді, бұл логикалық қателерді азайтады",
                "Ол модельді автоматты түрде интернетке қосады",
                "Ол модельдің файлдық өлшемін кішірейтеді"
            ],
            correctAnswer: 1 // B
        },
        {
            question: "RAG жүйесіндегі Векторлық қойманың (FAISS немесе Chroma) негізгі қызметі қандай?",
            options: [
                "Пайдаланушы сұранысына мағыналық жағынан ұқсас ақпарат бөліктерін тиімді сақтау және іздеу",
                "Жасалған кескіндерді PNG форматында сақтау",
                "OpenAI API кілттерін қауіпсіз жерде жасырып ұстау",
                "Модельдің салмақтарын қысу"
            ],
            correctAnswer: 0 // A
        },
        {
            question: "Стандартты чат-бот пен автономды «ЖИ Агентінің» (AI Agent) басты айырмашылығы неде?",
            options: [
                "ЖИ Агенттері тек қана 1D векторларымен жұмыс істейді",
                "ЖИ Агенттері оқытуды мүлдем қажет етпейді",
                "ЖИ Агенті мақсатқа жету үшін сыртқы құралдарды (интернет, код орындау ортасы) автономды түрде қолдана алады",
                "ЖИ Агенті — бұл тек қана ескірген модельдердің жаңа атауы"
            ],
            correctAnswer: 2 // C
        },
        {
            question: "Неліктен заманауи LLM жүйелерінде RAG архитектурасын қолдану «Knowledge Cutoff» (білімнің шектелуі) мәселесін шешеді?",
            options: [
                "RAG модельдің ішкі салмақтарын күнделікті қайта оқытып отырады",
                "RAG модельге оқыту кезінде болмаған жаңа немесе жеке деректерді сыртқы қоймадан тауып, контекст ретінде беруге мүмкіндік береді",
                "RAG модельді тек қана 2026 жылдан кейінгі деректермен шектейді",
                "RAG барлық ескі ақпаратты автоматты түрде өшіреді"
            ],
            correctAnswer: 1 // B
        }
    ]
};

export default lesson34;