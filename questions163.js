window.questions = [
  {
    question: "1. कंप्यूटर विज़न (Computer Vision) और इमेज प्रोसेसिंग के लिए विशेष रूप से डिज़ाइन किए गए न्यूरल नेटवर्क आर्किटेक्चर को क्या कहा जाता है? / Which neural network architecture is specifically designed for computer vision and image processing?",
    options: [
      "A. रिकरेंट न्यूरल नेटवर्क (RNN)",
      "B. कनवोल्यूशनल न्यूरल नेटवर्क (CNN)",
      "C. जनरेटिव एडवरसैरियल नेटवर्क (GAN)",
      "D. लॉन्ग शॉर्ट-टर्म मेमोरी (LSTM)"
    ],
    answer: "B",
    explanation: "CNN (Convolutional Neural Network) इमेज ग्रिड पैटर्न को पहचानने में सबसे कुशल होते हैं, इसलिए इनका उपयोग फेशियल रिकग्निशन, इमेज वर्गीकरण और कंप्यूटर विज़न में किया जाता है।"
  },
  {
    question: "2. वर्ष 2016 में गूगल की डीपमाइंड (DeepMind) द्वारा विकसित किस एआई सिस्टम ने विश्व चैंपियन ली सेडोल को प्रसिद्ध जटिल बोर्ड गेम 'गो' (Go) में हराकर इतिहास रचा था? / Which AI system developed by Google's DeepMind defeated world champion Lee Sedol in the game of 'Go' in 2016?",
    options: [
      "A. डीप ब्लू (Deep Blue)",
      "B. अल्फ़ागो (AlphaGo)",
      "C. वॉटसन (Watson)",
      "D. चैटजीपीटी (ChatGPT)"
    ],
    answer: "B",
    explanation: "AlphaGo पहला कंप्यूटर प्रोग्राम था जिसने रीइन्फोर्समेंट लर्निंग (Reinforcement Learning) का उपयोग करके बिना किसी मानवीय सहायता के 'गो' गेम के विश्व चैंपियन को हराया था। (डीप ब्लू ने 1997 में शतरंज चैंपियन कास्पारोव को हराया था)।"
  },
  {
    question: "3. स्वायत्त वाहनों (Autonomous Vehicles) और उन्नत रोबोटिक्स में वातावरण की सटीक 3D दूरी मापने के लिए प्रयुक्त होने वाले 'LiDAR' सेंसर का पूर्ण रूप क्या है? / What is the full form of 'LiDAR' sensor used in autonomous robots and vehicles?",
    options: [
      "A. Light Detection and Ranging",
      "B. Linear Data Analysis and Routing",
      "C. Laser Infrared Digital Audio Receiver",
      "D. Light Intensity Doppler Altitude Radar"
    ],
    answer: "A",
    explanation: "LiDAR का पूर्ण रूप Light Detection and Ranging है। यह सेंसर चारों तरफ लेज़र लाइट बीम छोड़ता है और उनके टकराकर वापस आने के समय से सटीक 3D डिजिटल मैप तैयार करता है।"
  },
  {
    question: "4. रोबोटिक्स के संदर्भ में, एक रोबोटिक आर्म/मैनिपुलेटर के अंतरिक्ष में स्वतंत्र रूप से घूमने की दिशाओं की संख्या को क्या कहा जाता है? / In robotics, the number of independent ways a robotic manipulator can move in three-dimensional space is called:",
    options: [
      "A. एक्चुएशन इंडेक्स (Actuation Index)",
      "B. डिग्री ऑफ फ्रीडम (Degrees of Freedom - DoF)",
      "C. टॉर्क क्षमता (Torque Capacity)",
      "D. काइनेमैटिक लिंक (Kinematic Link)"
    ],
    answer: "B",
    explanation: "डिग्री ऑफ फ्रीडम (DoF) यह दर्शाती है कि एक रोबोटिक जोड़ (Joint) कितनी दिशाओं या अक्षों पर गति कर सकता है। एक आदर्श स्वतंत्र मानव हाथ में 7 DoF होते हैं।"
  },
  {
    question: "5. एक प्रकार का साइबर हमला जिसमें हमलावर किसी इनपुट फ़ील्ड के माध्यम से दुर्भावनापूर्ण कोड प्रविष्ट कर वेबसाइट के बैकएंड डेटाबेस को अनधिकृत रूप से एक्सेस कर लेता है, कहलाता है: / A cyber-attack that targets databases by inserting malicious code into input fields is called:",
    options: [
      "A. क्रॉस-साइट स्क्रिप्टिंग (XSS)",
      "B. एसक्यूएल इंजेक्शन (SQL Injection / SQLi)",
      "C. बफर ओवरफ़्लो (Buffer Overflow)",
      "D. डिनायल ऑफ सर्विस (DoS)"
    ],
    answer: "B",
    explanation: "SQL Injection में हैकर्स वेबसाइट के लॉगइन या सर्च बॉक्स में SQL कमांड्स डालकर सीधे डेटाबेस सर्वर में सेंध लगाते हैं और संवेदनशील यूजर डेटा चुरा लेते हैं।"
  },
  {
    question: "6. वर्ष 2010 में खोजा गया वह कौन सा पहला अत्यधिक जटिल साइबर हथियार (मैलवेयर) था, जिसे विशेष रूप से ईरान के परमाणु संयंत्र के 'SCADA' औद्योगिक प्रणालियों को भौतिक नुकसान पहुँचाने के लिए डिज़ाइन किया गया था? / Which was the first complex cyber weapon discovered in 2010 that targeted industrial SCADA systems of Iran's nuclear plant?",
    options: [
      "A. वानाक्राई (WannaCry)",
      "B. स्टक्सनेट (Stuxnet)",
      "C. पेगासस (Pegasus)",
      "D. कॉन्फ़िकर (Conficker)"
    ],
    answer: "B",
    explanation: "Stuxnet इतिहास का पहला ऐसा वायरस/मैलवेयर था जिसने कंप्यूटरों के डिजिटल सिस्टम से निकलकर वास्तविक दुनिया के भौतिक बुनियादी ढांचे (ईरान के यूरेनियम सेंट्रीफ्यूज) को नष्ट किया था।"
  },
  {
    question: "7. मध्य प्रदेश में ग्रामीण ई-गवर्नेंस की शुरुआत करने वाली उस ऐतिहासिक अग्रणी परियोजना का क्या नाम है, जिसे वर्ष 2000 में धार जिले से शुरू किया गया था और जिसने प्रतिष्ठित स्टॉकहोम चैलेंज अवार्ड जीता था? / What is the name of the pioneer rural e-governance project started in Dhar district of MP in 2000 that won the Stockholm Challenge Award?",
    options: [
      "A. ज्ञानदूत (Gyandoot)",
      "B. ग्राम संपर्क (Gram Sampark)",
      "C. ई-मालवा (e-Malwa)",
      "D. सुदर्शन (Sudarshan)"
    ],
    answer: "A",
    explanation: "ज्ञानदूत परियोजना जनवरी 2000 में मध्य प्रदेश के धार जिले में शुरू हुई थी। यह ग्रामीण सूचना कियोस्क (सिटिजन डेटा सेंटर) के माध्यम से किसानों को कृषि उपज के भाव और सरकारी सेवाएं देने वाला भारत का पहला मॉडल था।"
  },
  {
    question: "8. भारत सरकार के वाणिज्य और उद्योग मंत्रालय (DPIIT) द्वारा अमेज़न और फ्लिपकार्ट जैसी बड़ी कंपनियों के एकाधिकार को तोड़ने और छोटे दुकानदारों को डिजिटल कॉमर्स से जोड़ने के लिए शुरू किए गए ओपन नेटवर्क का क्या नाम है? / What is the name of the open network initiative launched by India's DPIIT to democratize digital commerce?",
    options: [
      "A. ONDC (Open Network for Digital Commerce)",
      "B. NEGP (National Electronic Government Portal)",
      "C. BHIM (Bharat Interface for Money)",
      "D. GeM (Government e-Marketplace)"
    ],
    answer: "A",
    explanation: "ONDC एक ओपन-सोर्स नेटवर्क प्रोटोकॉल है जो किसी भी ई-कॉमर्स प्लेटफॉर्म पर मौजूद खरीदार को किसी भी अन्य प्लेटफॉर्म के विक्रेता से सीधे सामान खरीदने की सुविधा देता है, जिससे ई-कॉमर्स का लोकतंत्रीकरण हो रहा है।"
  },
  {
    question: "9. सेमीकंडक्टर निर्माण के क्षेत्र में, आधुनिक प्रोसेसरों (जैसे 3nm या 5nm चिप्स) में ट्रांजिस्टर के रिसाव (Current Leakage) को रोकने के लिए उपयोग किए जाने वाले 3D गेट आर्किटेक्चर का क्या नाम है? / In semiconductor fabrication, what is the name of the 3D gate architecture used in sub-10nm nodes to prevent leakage?",
    options: [
      "A. प्लानर मॉसफेट (Planar MOSFET)",
      "B. फिनफेट (FinFET)",
      "C. बीजेटी (BJT)",
      "D. वैक्यूम ट्यूब (Vacuum Tube)"
    ],
    answer: "B",
    explanation: "FinFET (Fin Field-Effect Transistor) एक त्रिविमीय (3D) ट्रांजिस्टर डिज़ाइन है जो चैनल को तीन तरफ से घेरता है, जिससे करंट का रिसाव रुकता है और चिप की परफॉरमेंस और ऊर्जा दक्षता अत्यधिक बढ़ जाती है।"
  },
  {
    question: "10. इलेक्ट्रॉनिक डिजिटल सर्किट में, निम्नलिखित में से किन लॉजिक गेट्स (Logic Gates) को 'यूनिवर्सल गेट्स' (Universal Gates) कहा जाता है क्योंकि इनसे कोई भी अन्य गेट बनाया जा सकता है? / In digital electronics, which logic gates are called 'Universal Gates'?",
    options: [
      "A. AND और OR",
      "B. NOT और XOR",
      "C. NAND और NOR",
      "D. XNOR और AND"
    ],
    answer: "C",
    explanation: "NAND और NOR गेट्स को यूनिवर्सल गेट कहा जाता है क्योंकि केवल इन गेट्स के विभिन्न संयोजनों का उपयोग करके बुनियादी गेट्स (AND, OR, NOT) सहित कोई भी जटिल तार्किक परिपथ बनाया जा सकता है।"
  },
  {
    question: "11. सूचना प्रौद्योगिकी (IT) अधिनियम, 2000 की वह कौन सी महत्वपूर्ण धारा है जो भारत सरकार को राष्ट्रीय सुरक्षा, संप्रभुता और लोक व्यवस्था के हित में किसी भी आपत्तिजनक इंटरनेट सामग्री या वेबसाइट को ब्लॉक करने की शक्ति देती है? / Which section of the IT Act, 2000 empowers the government to block websites or public access to information in the interest of national security?",
    options: [
      "A. धारा 43 (Section 43)",
      "B. धारा 65 (Section 65)",
      "C. धारा 69A (Section 69A)",
      "D. धारा 72 (Section 72)"
    ],
    answer: "C",
    explanation: "धारा 69A के तहत ही भारत सरकार राष्ट्रीय सुरक्षा और संप्रभुता को खतरा पैदा करने वाले विदेशी ऐप्स (जैसे टिकटॉक, पबजी) या किसी भी अवैध यूआरएल/वेबसाइट को ब्लॉक करने का आदेश जारी करती है।"
  },
  {
    question: "12. कंप्यूटर नेटवर्किंग के संदर्भ में 'OSI मॉडल' (Open Systems Interconnection) में कुल कितनी परतें (Layers) होती हैं और राउटिंग (Routing) की प्रक्रिया किस परत पर संपन्न होती है? / In computer networking, how many layers are there in the OSI model, and at which layer does routing take place?",
    options: [
      "A. 5 परतें - डेटा लिंक लेयर",
      "B. 7 परतें - नेटवर्क लेयर (Network Layer)",
      "C. 6 परतें - ट्रांसपोर्ट लेयर",
      "D. 7 परतें - फिजिकल लेयर"
    ],
    answer: "B",
    explanation: "OSI मॉडल में 7 परतें होती हैं। इसकी तीसरी परत यानी 'नेटवर्क लेयर' (Network Layer) का मुख्य कार्य पैकेट्स को सोर्स से डेस्टिनेशन तक भेजने के लिए सबसे अच्छा रास्ता (Routing) और लॉजिकल एड्रेसिंग (IP Address) तय करना है।"
  },
  {
    question: "13. क्लाउड कंप्यूटिंग के विपरीत, जब डेटा प्रोसेसिंग और विश्लेषण क्लाउड सर्वर पर भेजने के बजाय सीधे उसी स्थान या डिवाइस के करीब किया जाता है जहां डेटा उत्पन्न हो रहा है, तो इसे क्या कहते हैं? / In contrast to cloud computing, what is it called when data processing is performed closer to the data source?",
    options: [
      "A. ग्रिड कंप्यूटिंग (Grid Computing)",
      "B. एज कंप्यूटिंग (Edge Computing)",
      "C. क्वांटम कंप्यूटिंग (Quantum Computing)",
      "D. मेनफ्रेम कंप्यूटिंग (Mainframe Computing)"
    ],
    answer: "B",
    explanation: "Edge Computing डेटा को नेटवर्क के 'एज' (किनारे या डिवाइस के पास) पर प्रोसेस करता है। इससे लेटेंसी (देरी) कम होती है और इंटरनेट बैंडविड्थ की बचत होती है, जो IoT और सेल्फ-ड्राइविंग कारों के लिए जरूरी है।"
  },
  {
    question: "14. विकेंद्रीकृत सोशल नेटवर्किंग (Decentralized Social Networks) को आपस में जोड़ने और स्वतंत्र सर्वरों के बीच संवाद स्थापित करने के लिए प्रयुक्त होने वाले वर्ल्ड वाइड वेब कंसोर्टियम (W3C) के आधिकारिक प्रोटोकॉल का क्या नाम है? / What is the name of the official W3C protocol used to power decentralized social networks?",
    options: [
      "A. HTTP / HTTPS",
      "B. ActivityPub",
      "C. BitTorrent",
      "D. FTP"
    ],
    answer: "B",
explanation: "ActivityPub एक खुला, विकेंद्रीकृत सोशल नेटवर्किंग प्रोटोकॉल है। यह थ्रेड्स (Threads), मास्टोडन जैसे अलग-अलग प्लेटफॉर्म्स को आपस में जुड़कर डेटा शेयर करने की शक्ति देता है, जिसे 'फेडिवर्स' (Fediverse) कहा जाता है।"},{question: "15. दृश्य प्रकाश स्पेक्ट्रम (Visible Light Spectrum) का उपयोग करके उच्च गति से वायरलेस डेटा ट्रांसफर करने वाली उस अत्याधुनिक तकनीक का क्या नाम है जिसके आविष्कारक हैराल्ड हास (Harald Haas) हैं? / What is the technology that uses the visible light spectrum for high-speed wireless data transmission, invented by Harald Haas?",options: ["A. वाई-फाई (Wi-Fi)","B. ली-फाई (Li-Fi / Light Fidelity)","C. ब्लूटूथ (Bluetooth)","D. एनएफसी (NFC)"],answer: "B",explanation: "Li-Fi (Light Fidelity) डेटा ट्रांसफर करने के लिए सामान्य रेडियो तरंगों के बजाय एलईडी (LED) बल्ब से निकलने वाले दृश्य प्रकाश (Visible Light) का उपयोग करती है। यह वाई-फाई से कई गुना तेज़ और अधिक सुरक्षित होती है क्योंकि प्रकाश दीवारों के पार नहीं जा सकता।"},{question: "16. इलेक्ट्रॉनिक्स और सेमीकंडक्टर प्रौद्योगिकी के संदर्भ में, 'क्वांटम डॉट्स' (Quantum Dots) क्या हैं? / In the context of electronics and semiconductor technology, what are 'Quantum Dots'?",options: ["A. नैनोस्केल सेमीकंडक्टर कण जो विशिष्ट तरंग दैर्ध्य का प्रकाश उत्सर्जित करते हैं","B. कंप्यूटर माउस के अंदर पाए जाने वाले लेज़र पॉइंटर्स","C. हार्ड डिस्क में डेटा स्टोर करने वाले चुंबकीय डॉट्स","D. सुपरकंप्यूटर को ठंडा करने वाले लिक्विड कूलेंट"],answer: "A",explanation: "क्वांटम डॉट्स मानव बाल से हजारों गुना छोटे नैनोमीटर आकार के अर्धचालक क्रिस्टल होते हैं। जब इन पर यूवी प्रकाश पड़ता है, तो ये अपने आकार के आधार पर बहुत चमकीले और शुद्ध रंग (लाल, हरा, नीला) छोड़ते हैं। इनका उपयोग आधुनिक QLED टीवी डिस्प्ले और मेडिकल इमेजिंग में होता है।"},{question: "17. साइबर सुरक्षा में 'एसिमेट्रिक एन्क्रिप्शन' (Asymmetric Encryption) या पब्लिक की क्रिप्टोग्राफी के तहत डेटा को सुरक्षित रखने के लिए कुल कितनी कुंजियों (Keys) का उपयोग किया जाता है? / In Asymmetric Encryption, how many keys are used to secure data communication?",options: ["A. केवल एक ही समान कुंजी (Single Symmetric Key)","B. दो अलग-अलग कुंजियाँ - एक पब्लिक की और एक प्राइवेट की (Public & Private Key)","C. चार डिजिटल टोकन कुंजियाँ","D. बिना किसी कुंजी के केवल पासवर्ड मैपिंग"],answer: "B",explanation: "एसिमेट्रिक एन्क्रिप्शन में दो कुंजियों का जोड़ा होता है। डेटा को एन्क्रिप्ट (लॉक) करने के लिए 'पब्लिक की' (जो सबके लिए उपलब्ध है) का उपयोग होता है, लेकिन उसे केवल वही व्यक्ति डिक्रिप्ट (अनलॉक) कर सकता है जिसके पास उसकी विशिष्ट 'प्राइवेट की' होती है।"},{question: "18. इलेक्ट्रॉनिक उपकरणों में प्रयुक्त होने वाले सौर सेलों (Solar Cells) या फोटोवोल्टिक सेलों का निर्माण मुख्य रूप से किस प्रभाव/घटना पर आधारित होता है? / The construction of solar cells used in electronic devices is primarily based on which phenomenon?",options: ["A. सीबेक प्रभाव (Seebeck Effect)","B. प्रकाश विद्युत प्रभाव (Photoelectric Effect)","C. थॉमसन प्रभाव (Thomson Effect)","D. जूल का नियम (Joule's Law)"],answer: "B",explanation: "सौर सेल सेमीकंडक्टर सामग्री (जैसे सिलिकॉन) से बने होते हैं जो प्रकाश विद्युत प्रभाव (Photoelectric Effect) के सिद्धांत पर काम करते हैं। जब इन पर सूर्य की किरणों के फोटॉन टकराते हैं, तो इलेक्ट्रॉन मुक्त होते हैं और विद्युत धारा उत्पन्न होती है।"},{question: "19. ई-गवर्नेंस के क्षेत्र में, इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय (MeitY) और नैसकॉम (NASSCOM) द्वारा संयुक्त रूप से संचालित भारत के आधिकारिक राष्ट्रीय एआई पोर्टल का वेब डोमेन नाम क्या है? / What is the official web portal domain for Artificial Intelligence in India, run by MeitY and NASSCOM?",options: ["A. www.ai.gov.in","B. www.indiaai.gov.in","C. www.digitalai.in","D. www.cyberai.org"],answer: "B",explanation: "INDIAAI (https://indiaai.gov.in) भारत का राष्ट्रीय कृत्रिम बुद्धिमत्ता पोर्टल है। यह भारत में एआई से संबंधित सभी शोधों, स्टार्टअप्स, नीतियों और शैक्षिक संसाधनों के लिए एक केंद्रीय वन-स्टॉप प्लेटफॉर्म के रूप में कार्य करता है।"},{question: "20. रोबोटिक्स की वह कौन सी विशिष्ट शाखा है जो जैविक जीवों (जैसे चींटियों या मधुमक्खियों) के सामाजिक व्यवहार से प्रेरित होकर कई छोटे, सरल रोबोटों के आपसी तालमेल से जटिल कार्यों को पूरा करने पर शोध करती है? / Which branch of robotics is inspired by the collective behavior of biological organisms like ants or bees?",options: ["A. नैनो रोबोटिक्स (Nano Robotics)","B. स्वाम रोबोटिक्स (Swarm Robotics)","C. इंडस्ट्रियल रोबोटिक्स","D. सर्जिकल रोबोटिक्स"],answer: "B",explanation: "Swarm Robotics में सैकड़ों छोटे रोबोट बिना किसी केंद्रीय कमांडर के, आपस में रेडियो सिग्नल या सेंसर की मदद से तालमेल बिठाकर एक बड़े समूह (झुंड) के रूप में काम करते हैं। इसका उपयोग रेस्क्यू ऑपरेशन या कृषि मैपिंग में किया जाता है।"}];
