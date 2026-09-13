const questions = [

{
q:"मध्य प्रदेश की सबसे बड़ी जनजाति कौन-सी है? / Which is the largest tribe of Madhya Pradesh?",
o:["भील / Bhil","बैगा / Baiga","गोंड / Gond","कोरकू / Korku"],
a:2,
e:"गोंड मध्य प्रदेश की सबसे बड़ी जनजाति है। / Gond is the largest tribe of Madhya Pradesh."
},

{
q:"सहरिया जनजाति मुख्यतः किस जिले में पाई जाती है? / Sahariya tribe is mainly found in which district?",
o:["मंडला / Mandla","शिवपुरी / Shivpuri","झाबुआ / Jhabua","बालाघाट / Balaghat"],
a:1,
e:"सहरिया जनजाति मुख्यतः शिवपुरी क्षेत्र में पाई जाती है। / Sahariya tribe is mainly concentrated in Shivpuri."
},

{
q:"बैगा जनजाति किस श्रेणी में आती है? / Baiga tribe belongs to which category?",
o:["OBC","PVTG","SC","General"],
a:1,
e:"बैगा विशेष रूप से कमजोर जनजातीय समूह (PVTG) है। / Baiga is a Particularly Vulnerable Tribal Group."
},

{
q:"भील जनजाति का प्रमुख निवास क्षेत्र कौन-सा है? / Main habitation area of Bhil tribe?",
o:["रीवा / Rewa","झाबुआ-अलीराजपुर / Jhabua-Alirajpur","सागर / Sagar","कटनी / Katni"],
a:1,
e:"भील मुख्यतः झाबुआ-अलीराजपुर में रहते हैं। / Bhils mainly live in Jhabua-Alirajpur."
},

{
q:"कोरकू जनजाति मुख्यतः किस क्षेत्र में रहती है? / Korku tribe mainly lives in which region?",
o:["विदिशा / Vidisha","सतपुड़ा / Satpura","बुंदेलखंड / Bundelkhand","चंबल / Chambal"],
a:1,
e:"कोरकू जनजाति सतपुड़ा क्षेत्र में रहती है। / Korku tribe lives in the Satpura region."
},

{
q:"भारिया जनजाति का प्रमुख निवास क्षेत्र कौन-सा है? / Main habitation area of Bharia tribe?",
o:["पातालकोट / Patalkot","भोपाल / Bhopal","उज्जैन / Ujjain","मुरैना / Morena"],
a:0,
e:"भारिया जनजाति पातालकोट क्षेत्र में रहती है। / Bharia tribe lives in Patalkot."
},

{
q:"मध्य प्रदेश में अनुसूचित जनजातियों के लिए कौन-सी अनुसूची लागू होती है? / Which Schedule applies to Scheduled Tribes in MP?",
o:["तीसरी / Third","चौथी / Fourth","पाँचवीं / Fifth","छठी / Sixth"],
a:2,
e:"मध्य प्रदेश में पाँचवीं अनुसूची लागू है। / Fifth Schedule applies in Madhya Pradesh."
},

{
q:"PESA अधिनियम किस वर्ष लागू हुआ? / In which year was PESA Act enacted?",
o:["1994","1995","1996","1997"],
a:2,
e:"PESA Act वर्ष 1996 में लागू हुआ। / PESA Act was enacted in 1996."
},

{
q:"PESA अधिनियम का मुख्य उद्देश्य क्या है? / Main objective of PESA Act?",
o:["ग्रामसभा को अधिकार देना / Empower Gram Sabha","उद्योग बढ़ाना / Promote Industries","कर वसूली / Tax Collection","शहरी विकास / Urban Development"],
a:0,
e:"यह अनुसूचित क्षेत्रों में ग्रामसभा को अधिकार देता है। / It empowers Gram Sabha in Scheduled Areas."
},

{
q:"एकलव्य मॉडल आवासीय विद्यालय (EMRS) किसके लिए है? / EMRS is meant for whom?",
o:["सामान्य छात्र / General","SC छात्र / SC","ST छात्र / ST","सैनिक / Soldiers"],
a:2,
e:"EMRS अनुसूचित जनजाति के छात्रों के लिए है। / EMRS is for ST students."
},

{
q:"गोंड जनजाति का प्रसिद्ध लोकनृत्य कौन-सा है? / Famous folk dance of Gond tribe?",
o:["भगोरिया / Bhagoria","सैला / Saila","मटकी / Matki","राई / Rai"],
a:1,
e:"सैला नृत्य गोंड जनजाति से जुड़ा है। / Saila dance is associated with Gond tribe."
},

{
q:"भगोरिया मेला किस जनजाति से संबंधित है? / Bhagoria fair is associated with which tribe?",
o:["भील / Bhil","बैगा / Baiga","सहरिया / Sahariya","कोरकू / Korku"],
a:0,
e:"भगोरिया मेला भील जनजाति से संबंधित है। / Bhagoria fair belongs to Bhil tribe."
},

{
q:"मध्य प्रदेश में सर्वाधिक जनजातीय जनसंख्या वाला जिला कौन-सा है? / District with highest tribal population in MP?",
o:["झाबुआ / Jhabua","अलीराजपुर / Alirajpur","धार / Dhar","मंडला / Mandla"],
a:1,
e:"अलीराजपुर में सर्वाधिक जनजातीय आबादी है। / Alirajpur has the highest tribal population."
},

{
q:"बैगा चक किस जिले में स्थित है? / Baiga Chak is located in which district?",
o:["डिंडोरी / Dindori","रीवा / Rewa","सागर / Sagar","ग्वालियर / Gwalior"],
a:0,
e:"बैगा चक डिंडोरी जिले में स्थित है। / Baiga Chak is in Dindori."
},

{
q:"पातालकोट किस जिले में स्थित है? / Patalkot is located in which district?",
o:["छिंदवाड़ा / Chhindwara","बालाघाट / Balaghat","उज्जैन / Ujjain","शिवपुरी / Shivpuri"],
a:0,
e:"पातालकोट छिंदवाड़ा जिले में स्थित है। / Patalkot is in Chhindwara."
},

{
q:"ग्रामसभा को प्राकृतिक संसाधनों के प्रबंधन का अधिकार किस कानून से मिलता है? / Which law gives Gram Sabha rights over natural resources?",
o:["RTI","PESA","GST","RTE"],
a:1,
e:"PESA कानून ग्रामसभा को यह अधिकार देता है। / PESA grants this right."
},

{
q:"बैगा जनजाति की पारंपरिक खेती क्या कहलाती है? / Traditional cultivation of Baiga tribe is called?",
o:["झूम खेती / Shifting Cultivation","सिंचित खेती / Irrigated","बागवानी / Horticulture","जैविक खेती / Organic"],
a:0,
e:"बैगा पारंपरिक रूप से झूम खेती करते थे। / Baigas traditionally practiced shifting cultivation."
},

{
q:"कोरकू जनजाति की प्रमुख भाषा कौन-सी है? / Main language of Korku tribe?",
o:["भीली / Bhili","कोरकू / Korku","गोंडी / Gondi","हिंदी / Hindi"],
a:1,
e:"कोरकू जनजाति की भाषा कोरकू है। / Their language is Korku."
},

{
q:"निम्न में से कौन-सी PVTG जनजाति है? / Which of the following is a PVTG?",
o:["गोंड / Gond","भील / Bhil","बैगा / Baiga","कोरकू / Korku"],
a:2,
e:"बैगा PVTG श्रेणी में आती है। / Baiga belongs to PVTG."
},

{
q:"सही जोड़ी चुनिए। / Choose the correct pair.",
o:[
"भारिया – पातालकोट / Bharia – Patalkot",
"गोंड – चंबल / Gond – Chambal",
"सहरिया – मालवा / Sahariya – Malwa",
"भील – रीवा / Bhil – Rewa"
],
a:0,
e:"भारिया जनजाति पातालकोट क्षेत्र से संबंधित है। / Bharia tribe is associated with Patalkot."
}

];
