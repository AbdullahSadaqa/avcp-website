/* =====================================================
   AVCP PRODUCT CATALOGUE
===================================================== */

const productSearch = document.getElementById("productSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const catalogueGrid = document.getElementById("catalogueGrid");
const noResults = document.getElementById("noResults");

let selectedCategory = "all";


/* =====================================================
   PRODUCTS DATA
===================================================== */

const products = [

    /* =====================================================
       INJECTABLES — 36 PRODUCTS
    ===================================================== */

    {
        name: "AD3E",
        category: "injectables",
        categoryEn: "Injectables",
        categoryAr: "الحقن",
        image: "images/injectables/AD3E.png"
    },

  /* =====================================================
   ADVOCAL
===================================================== */

{
    name: "Advocal",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Advocal.png",

    details: {

        en: {
            dosageForm: "S.C. or slow I.V. injectable solution",
            pack: "100 or 500 mL",
            targetSpecies: "Cattle, sheep and goats",

            composition: [
                "Calcium Gluconate — 20%",
                "Boric Acid — 4%"
            ],

            indications:
                "For the treatment of hypocalcemia, also known as parturient paresis or milk fever, in cattle, sheep and goats.",

            contraindications:
                "Not specified in the leaflet.",

            dosage:
                "Administer by subcutaneous (S.C.) or slow intravenous (I.V.) injection. Cattle: 250–500 mL (1 mL per 1 kg body weight). Sheep and goats: 50–100 mL (1 mL per 1 kg body weight). The dose may be repeated at intervals of 8–12 hours if required. Intravenous injection of calcium boro-gluconate should be given slowly. For best effectiveness, the solution should be warmed to blood temperature and administered as soon as hypocalcemia is detected.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "A heart attack may occur with intravenous administration.",
                "To reduce this risk, the intravenous injection should be administered slowly."
            ],

            interactions: [
                "Cephalothin",
                "Prednisolone phosphate",
                "Tetracyclines",
                "Sodium bicarbonate",
                "Phenylbutazone",
                "Sulfonamides",
                "Magnesium antagonizes the cardioexcitatory effect of calcium."
            ],

            withdrawal: [
                "No withdrawal period is required."
            ],

            warnings: [
                "Do not mix with other medicinal products."
            ],

            storage:
                "Store at 15–30°C in a dark place and keep out of reach of children.",

            packing:
                "100 or 500 mL vial."
        },


        ar: {
            dosageForm: "محلول للحقن تحت الجلد أو الحقن الوريدي البطيء",
            pack: "100 أو 500 مل",
            targetSpecies: "الأبقار، الأغنام والماعز",

            composition: [
                "جلوكونات الكالسيوم — 20%",
                "حمض البوريك — 4%"
            ],

            indications:
                "يُستخدم لعلاج نقص الكالسيوم، ويشمل ذلك شلل ما بعد الولادة المعروف أيضًا بحمى الحليب، في الأبقار والأغنام والماعز.",

            contraindications:
                "لم تُذكر موانع استعمال في النشرة.",

            dosage:
                "يُعطى عن طريق الحقن تحت الجلد أو الحقن الوريدي البطيء. الأبقار: 250–500 مل، بمعدل 1 مل لكل 1 كغ من وزن الحيوان. الأغنام والماعز: 50–100 مل، بمعدل 1 مل لكل 1 كغ من وزن الحيوان. يمكن تكرار الجرعة كل 8–12 ساعة عند الحاجة. يجب أن يكون الحقن الوريدي بطيئًا. ولأفضل فعالية، يفضل تدفئة المحلول إلى درجة حرارة الدم وإعطاؤه فور اكتشاف حالة نقص الكالسيوم.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا بعد فتح العبوة لأول مرة.",

            sideEffects: [
                "قد تحدث نوبة قلبية عند إعطاء المستحضر عن طريق الوريد.",
                "ولتجنب ذلك يجب إعطاء الحقن الوريدي ببطء."
            ],

            interactions: [
                "السيفالوثين",
                "بريدنيزولون فوسفات",
                "التتراسيكلينات",
                "بيكربونات الصوديوم",
                "فينيل بيوتازون",
                "السلفوناميدات",
                "يعاكس المغنيسيوم التأثير المنشط للقلب الناتج عن الكالسيوم."
            ],

            withdrawal: [
                "لا توجد فترة سحب للحوم أو الحليب."
            ],

            warnings: [
                "لا يُخلط المستحضر مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م في مكان معتم وبعيدًا عن متناول الأطفال.",

            packing:
                "عبوات سعة 100 أو 500 مل."
        }

    }
},


/* =====================================================
   ADVO-JECT 2.5%
===================================================== */

{
    name: "Advo-Ject 2.5%",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Advo-ject2.5%.png",

    details: {

        en: {
            dosageForm: "I.M. or I.V. injectable solution",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle",

            composition: [
                "Danofloxacin Mesylate — 31.73 mg / mL",
                "Equivalent to Danofloxacin — 25 mg / mL"
            ],

            indications:
                "A broad-spectrum antibacterial drug used for the treatment of respiratory infections caused by Pasteurella haemolytica and Pasteurella multocida where penicillin or other non-broad-spectrum antimicrobial treatments have not given the required effect or are not applicable for other reasons. It is also indicated for the treatment of enteric infections caused by Escherichia coli in cattle.",

            contraindications:
                "Not specified in the leaflet.",

            dosage:
                "Administer by intramuscular (I.M.) or intravenous (I.V.) injection at a dose of 1.25 mg danofloxacin per kg body weight, equivalent to 1 mL per 20 kg body weight. Three treatments should be given at 24-hour intervals. Treatment may be extended for up to 2 additional days in animals that have not fully recovered after the initial 3 treatments. In animals weighing more than 400 kg, a maximum of 20 mL should be administered per intramuscular injection site.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Not specified in the leaflet."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "Slaughter: 5 days",
                "Milk: 2 days"
            ],

            warnings: [
                "Do not use in breeding bulls.",
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store at 15–30°C in a dark place.",

            packing:
                "50 or 100 mL."
        },


        ar: {
            dosageForm: "محلول للحقن العضلي أو الوريدي",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار",

            composition: [
                "دانوفلوكساسين ميسيلات — 31.73 ملغ / مل",
                "ما يعادل دانوفلوكساسين — 25 ملغ / مل"
            ],

            indications:
                "أدفو-جكت مضاد بكتيري واسع المجال، ويُستخدم لعلاج التهابات الجهاز التنفسي الناتجة عن Pasteurella haemolytica وPasteurella multocida في الحالات التي لم تعطِ فيها البنسلينات أو المضادات البكتيرية الأخرى محدودة المجال التأثير المطلوب، أو عندما لا تكون مناسبة لأسباب أخرى. كما يُستخدم لعلاج الالتهابات المعوية الناتجة عن الإشريكية القولونية (Escherichia coli) في الأبقار.",

            contraindications:
                "لم تُذكر موانع استعمال في النشرة.",

            dosage:
                "يُعطى عن طريق الحقن العضلي أو الوريدي بجرعة 1.25 ملغ دانوفلوكساسين لكل كغ من وزن الحيوان، أي ما يعادل 1 مل لكل 20 كغ من وزن الحيوان. تُعطى ثلاث جرعات بفاصل 24 ساعة بين كل جرعة والتي تليها. يمكن تمديد العلاج لمدة يومين إضافيين للحيوانات التي لم تتحسن بالكامل بعد الجرعات الثلاث الأولى. عند استخدام المستحضر لحيوانات يزيد وزنها عن 400 كغ، يجب ألا تزيد الكمية المحقونة في موضع الحقن العضلي الواحد عن 20 مل.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا بعد فتح العبوة لأول مرة.",

            sideEffects: [
                "لم تُذكر تأثيرات جانبية في النشرة."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "الذبح: 5 أيام بعد آخر علاج",
                "الحليب: يومان بعد آخر علاج"
            ],

            warnings: [
                "لا يُستخدم في الثيران المخصصة للتكاثر والتناسل.",
                "لا يُخلط المستحضر مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م في مكان معتم.",

            packing:
                "عبوات سعة 50 أو 100 مل."
        }

    }
},


/* =====================================================
   AMOXISOL 15%
===================================================== */

{
    name: "Amoxisol 15%",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Amoxisol 15%.png",

    details: {

        en: {
            dosageForm: "I.M. injectable suspension",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle, sheep, goats, cats and dogs",

            composition: [
                "Amoxicillin (as trihydrate) — 150 mg / mL"
            ],

            indications:
                "A broad-spectrum antibiotic active against a wide range of Gram-positive and Gram-negative organisms. It is indicated for pneumonia, skin and soft tissue infections, abscesses, wounds, joint infections and navel ill.",

            contraindications:
                "Do not use in animals hypersensitive to penicillins or cephalosporins, or in animals with renal impairment. Not for use in sheep producing milk for human consumption. The product is not effective against beta-lactamase-producing organisms.",

            dosage:
                "Shake well before use. Administer by intramuscular injection. The recommended dose is 7 mg/kg body weight once daily for up to 5 days. Massage the injection site after administration and use a separate injection site for each administration. Sheep and goats: 3 mL per 65 kg body weight. Cattle: 20 mL per 450 kg body weight. Cats: 0.25 mL per 5 kg body weight. Dogs: 1 mL per 20 kg body weight. If the dose volume exceeds 20 mL in cattle, divide the dose and inject at two separate sites.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Hypersensitivity reactions may occur.",
                "Minor irritation at the injection site may occur."
            ],

            interactions: [
                "Tetracyclines",
                "Macrolides",
                "Cloxacillin",
                "Aminoglycosides",
                "Phenylbutazone",
                "Salicylates",
                "Sulfonamides"
            ],

            withdrawal: [
                "Meat: 30 days",
                "Milk: 2 days"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store at 15–30°C and protect from light.",

            packing:
                "50 or 100 mL."
        },


        ar: {
            dosageForm: "معلّق للحقن العضلي",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار، الأغنام، الماعز، القطط والكلاب",

            composition: [
                "أموكسيسيلين (ثلاثي الهيدرات) — 150 ملغ / مل"
            ],

            indications:
                "أموكسيسول 15% مضاد حيوي واسع الطيف وفعال ضد نطاق واسع من الميكروبات موجبة وسالبة الغرام. يُستخدم لعلاج الالتهاب الرئوي، والتهابات الجلد والأنسجة الرخوة، والخراجات، والجروح، والتهابات المفاصل والتهابات السرة.",

            contraindications:
                "لا يُستخدم في الحيوانات التي تعاني من فرط الحساسية للبنسلينات أو السيفالوسبورينات، أو في حالات قصور وظائف الكلى. لا يُستخدم في الأغنام المنتجة للحليب المخصص للاستهلاك البشري. كما أنه غير فعال ضد الكائنات الدقيقة المنتجة لإنزيم بيتا-لاكتاماز.",

            dosage:
                "تُخض العبوة جيدًا قبل الاستخدام، ويُعطى المستحضر عن طريق الحقن العضلي. الجرعة الموصى بها هي 7 ملغ لكل كغ من وزن الحيوان مرة واحدة يوميًا لمدة تصل إلى 5 أيام. يُنصح بتدليك موضع الحقن بعد إعطاء الدواء، ويجب استخدام موضع حقن مختلف في كل مرة. الأغنام والماعز: 3 مل لكل 65 كغ من وزن الجسم. الأبقار: 20 مل لكل 450 كغ من وزن الجسم. القطط: 0.25 مل لكل 5 كغ من وزن الجسم. الكلاب: 1 مل لكل 20 كغ من وزن الجسم. إذا زادت الجرعة في الأبقار عن 20 مل، يجب تقسيمها وحقنها في موضعين مختلفين.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا بعد فتح العبوة لأول مرة.",

            sideEffects: [
                "قد تحدث تفاعلات فرط الحساسية.",
                "قد يحدث تهيج بسيط في موضع الحقن."
            ],

            interactions: [
                "التتراسيكلينات",
                "الماكروليدات",
                "كلوكساسيلين",
                "الأمينوغليكوزيدات",
                "فينيل بيوتازون",
                "الساليسيلات",
                "السلفوناميدات"
            ],

            withdrawal: [
                "اللحوم: 30 يومًا",
                "الحليب: يومان"
            ],

            warnings: [
                "لا يُخلط المستحضر مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م وبعيدًا عن الضوء.",

            packing:
                "عبوات سعة 50 أو 100 مل."
        }

    }
},

    {
    name: "Ampidex",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Ampidex.png",

    details: {

        en: {
            dosageForm: "Injectable suspension",
            pack: "100 mL",
            targetSpecies: "Cattle, sheep and horses",

            composition: [
                "Ampicillin trihydrate — 100 mg / mL",
                "Colistin (as sulphate) — 250,000 IU / mL",
                "Dexamethasone — 0.25 mg / mL"
            ],

            indications:
                "A combined anti-infective and anti-inflammatory treatment for infections caused by organisms sensitive to ampicillin and colistin. Dexamethasone helps control inflammatory reactions.",

            contraindications:
                "Do not use during the second half of pregnancy.",

            dosage:
                "Shake well before use. Administer by intramuscular (I.M.) or subcutaneous (S.C.) injection. Dose: 1 mL per 10 kg body weight every 12 hours for 3 consecutive days.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Hypersensitivity reactions",
                "Minor irritation at the injection site",
                "Renal dysfunction",
                "Neurotoxicity",
                "Neuromuscular blockade"
            ],

            interactions: [
                "Tetracyclines",
                "Erythromycin",
                "Aminoglycosides",
                "Phenylbutazone",
                "Salicylates",
                "Sulfonamides",
                "Ephedrine",
                "Rifampin",
                "Barbiturates"
            ],

            withdrawal: [
                "Meat: 21 days",
                "Milk: 4.5 days / 9 milkings"
            ],

            warnings: [
                "Do not mix with other medicinal products.",
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store below 25°C and protect from light.",

            packing:
                "100 mL amber glass vial in a carton box."
        },


        ar: {
            dosageForm: "معلّق للحقن",
            pack: "100 مل",
            targetSpecies: "الأبقار، الأغنام والخيول",

            composition: [
                "أمبيسيلين ثلاثي الهيدرات — 100 ملغ / مل",
                "كوليستين على هيئة سلفات — 250,000 وحدة دولية / مل",
                "ديكساميثازون — 0.25 ملغ / مل"
            ],

            indications:
                "يُستخدم كعلاج مركب مضاد للعدوى ومضاد للالتهاب في حالات العدوى الناتجة عن الكائنات الدقيقة الحساسة للأمبيسيلين والكوليستين، بينما يساعد الديكساميثازون في السيطرة على التفاعلات الالتهابية.",

            contraindications:
                "لا يُستخدم خلال النصف الثاني من فترة الحمل.",

            dosage:
                "يُرجّ جيدًا قبل الاستعمال. يُعطى عن طريق الحقن العضلي (I.M.) أو تحت الجلد (S.C.). الجرعة: 1 مل لكل 10 كغ من وزن الجسم، كل 12 ساعة، لمدة 3 أيام متتالية.",

            afterOpening:
                "يُستخدم خلال 28 يومًا من فتح العبوة لأول مرة.",

            sideEffects: [
                "تفاعلات فرط الحساسية",
                "تهيج بسيط في موضع الحقن",
                "اختلال وظائف الكلى",
                "السُميّة العصبية",
                "الحصر العصبي العضلي"
            ],

            interactions: [
                "التتراسيكلينات",
                "الإريثرومايسين",
                "الأمينوغليكوزيدات",
                "فينيل بيوتازون",
                "الساليسيلات",
                "السلفوناميدات",
                "الإيفيدرين",
                "الريفامبين",
                "الباربيتورات"
            ],

            withdrawal: [
                "اللحوم: 21 يومًا",
                "الحليب: 4.5 أيام / 9 حلبات"
            ],

            warnings: [
                "لا يُخلط مع مستحضرات دوائية أخرى.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م وبعيدًا عن الضوء.",

            packing:
                "قارورة زجاجية كهرمانية سعة 100 مل داخل علبة كرتونية."
        }

    }
},

  {
    name: "B-Complex + C",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Bcomplex+c.png",

    details: {

        en: {
            dosageForm: "Injectable solution",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle, horses and sheep",

            composition: [
                "Thiamine Hydrochloride (Vitamin B1) — 35 mg / mL",
                "Riboflavine Sodium Phosphate (Vitamin B2) — 0.5 mg / mL",
                "Pyridoxine Hydrochloride (Vitamin B6) — 7 mg / mL",
                "Ascorbic Acid (Vitamin C) — 70 mg / mL",
                "Nicotinamide — 23 mg / mL"
            ],

            indications:
                "Used in cases of vitamin B group deficiency and in the treatment of cerebrocortical necrosis in cattle and sheep.",

            contraindications:
                "Do not use in cases of hypersensitivity to any of the active ingredients.",

            dosage:
                "Administer by subcutaneous or deep intramuscular injection. The dose should be repeated daily as required. Horses and cattle: 20–30 mL. Calves and foals: 5–10 mL. Sheep: 5–10 mL.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Slight irritation may occur at the injection site following subcutaneous or intramuscular administration."
            ],

            interactions: [
                "Do not mix with other medicinal products for injection."
            ],

            withdrawal: [
                "No withdrawal period."
            ],

            warnings: [
                "Do not mix with other medicinal products for injection.",
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store between 2–8°C and protect from light.",

            packing:
                "50 or 100 mL amber glass vials in a carton box."
        },


        ar: {
            dosageForm: "محلول للحقن",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار، الخيول والأغنام",

            composition: [
                "ثيامين هيدروكلورايد (فيتامين ب1) — 35 ملغ / مل",
                "ريبوفلافين فوسفات الصوديوم (فيتامين ب2) — 0.5 ملغ / مل",
                "بيريدوكسين هيدروكلورايد (فيتامين ب6) — 7 ملغ / مل",
                "حمض الأسكوربيك (فيتامين سي) — 70 ملغ / مل",
                "نيكوتيناميد — 23 ملغ / مل"
            ],

            indications:
                "يُستخدم في علاج حالات النقص في مجموعة فيتامين ب، وعلاج النخر الدماغي في الأغنام.",

            contraindications:
                "لا يُستخدم في حالة فرط الحساسية لأي من المواد الفعالة.",

            dosage:
                "يُعطى عن طريق الحقن تحت الجلد أو الحقن العضلي العميق. تُكرر الجرعة يوميًا حسب الحاجة. الخيول والأبقار: 20–30 مل. العجول والأمهار: 5–10 مل. الأغنام: 5–10 مل.",

            afterOpening:
                "يُستخدم خلال 28 يومًا من تاريخ فتح العبوة لأول مرة.",

            sideEffects: [
                "قد يحدث تهيج طفيف في موضع الحقن عند إعطائه تحت الجلد أو عن طريق الحقن العضلي."
            ],

            interactions: [
                "لا يُخلط مع أدوية أخرى مخصصة للحقن."
            ],

            withdrawal: [
                "لا توجد فترة سحب."
            ],

            warnings: [
                "لا يُخلط مع أدوية أخرى مخصصة للحقن.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة من 2 إلى 8°م وبعيدًا عن الضوء.",

            packing:
                "عبوات زجاجية كهرمانية سعة 50 أو 100 مل داخل علبة كرتونية."
        }

    }
},

   {
    name: "Ceftenel RTU",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Ceftenel.png",

    details: {

        en: {
            dosageForm: "Injectable suspension",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle",

            composition: [
                "Ceftiofur (as HCl) — 50 mg / mL"
            ],

            indications:
                "For the treatment of bovine respiratory disease (fever and pneumonia), foot rot, and acute metritis occurring from 0 to 14 days post-partum.",

            contraindications:
                "Do not use in animals with hypersensitivity to ceftiofur or other β-lactam antibiotics. Do not use in cases of known resistance to other cephalosporins or β-lactam antibiotics. Do not administer intravenously. Do not use in pre-ruminating veal calves.",

            dosage:
                "Shake well before use. Administer by subcutaneous (S.C.) or intramuscular (I.M.) injection. Respiratory disease: 1 mL per 50 kg body weight once daily for 3–5 days. Foot rot: 1 mL per 50 kg body weight once daily for 5 days. Acute metritis: 2 mL per 50 kg body weight once daily for 5 days. Do not inject more than 15 mL at one injection site.",

            afterOpening:
                "Use within 28 days after withdrawing the first dose.",

            sideEffects: [
                "Intramuscular and subcutaneous injection in cattle may cause a transient local tissue reaction that may result in trim loss of edible tissue at slaughter.",
                "Swelling of the face, lips or eyes, or difficulty breathing may occur."
            ],

            interactions: [
                "Aminoglycosides",
                "Furosemides"
            ],

            withdrawal: [
                "Meat: 8 days",
                "Milk: No withdrawal period required"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection.",
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store below 25°C and protect from light.",

            packing:
                "50 or 100 mL amber glass vials."
        },


        ar: {
            dosageForm: "معلّق للحقن",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار",

            composition: [
                "سفتيوفور (على شكل هيدروكلورايد) — 50 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج أمراض الجهاز التنفسي البقري مثل الحمى والالتهاب الرئوي، وتعفن الظلف، والتهاب الرحم الحاد خلال الفترة من 0 إلى 14 يومًا بعد الولادة.",

            contraindications:
                "لا يُستخدم في الحيوانات التي تعاني من فرط الحساسية للسيفالوسبورينات أو البيتا لاكتام. ولا يُستخدم في حالات المقاومة الواضحة للسيفالوسبورينات الأخرى أو مضادات البيتا لاكتام الحيوية. لا يُستخدم عن طريق الوريد، ولا يُستخدم للعجول اللاحمة في مرحلة ما قبل الاجترار.",

            dosage:
                "يُخض المستحضر جيدًا قبل الاستعمال. يُعطى عن طريق الحقن تحت الجلد أو في العضل. أمراض الجهاز التنفسي: 1 مل لكل 50 كغ من وزن الحيوان يوميًا لمدة 3–5 أيام. تعفن الظلف: 1 مل لكل 50 كغ من وزن الحيوان يوميًا لمدة 5 أيام متتالية. التهاب الرحم الحاد: 2 مل لكل 50 كغ من وزن الحيوان يوميًا لمدة 5 أيام متتالية. لا تُحقن كمية تزيد عن 15 مل في موضع الحقن الواحد.",

            afterOpening:
                "يُستخدم الدواء خلال 28 يومًا من تاريخ سحب أول جرعة.",

            sideEffects: [
                "قد يحدث رد فعل موضعي في الأنسجة مكان الحقن العضلي أو تحت الجلد في الأبقار، مما قد يؤدي إلى فقدان جزء من الأنسجة الصالحة للأكل عند الذبح.",
                "قد يحدث تورم في الوجه أو الشفتين أو العينين، أو صعوبة في التنفس."
            ],

            interactions: [
                "الأمينوغليكوزيدات",
                "الفيوروسمايد"
            ],

            withdrawal: [
                "اللحوم: 8 أيام",
                "الحليب: لا حاجة لفترة أمان"
            ],

            warnings: [
                "لا يُخلط هذا الدواء مع أي أدوية أخرى للحقن.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م وبعيدًا عن الضوء.",

            packing:
                "عبوات حقن زجاجية بنية اللون سعة 50 أو 100 مل."
        }

    }
},

    {
        name: "Ciprotyl 2.5%",
        category: "injectables",
        categoryEn: "Injectables",
        categoryAr: "الحقن",
        image: "images/injectables/Ciprotyl 2.5%.png"
    },

   {
    name: "Cobacteen 2.5%",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Cobactieen 2.5%.png",

    details: {

        en: {
            dosageForm: "I.M. injectable suspension",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle and calves",

            composition: [
                "Cefquinome (as sulphate) — 25 mg / mL"
            ],

            indications:
                "For the treatment of bacterial infections in cattle caused by Gram-positive and Gram-negative microorganisms sensitive to cefquinome. In cattle: respiratory tract infections caused by Pasteurella spp., Mannheimia spp., Haemophilus spp., Actinobacillus pleuropneumoniae and Streptococcus suis; acute E. coli mastitis; and foot infections. In calves: E. coli septicaemia.",

            contraindications:
                "Hypersensitivity to cephalosporins is rare; however, cefquinome should not be administered to animals known to be hypersensitive to β-lactam antibiotics.",

            dosage:
                "Shake well before use. Administer by intramuscular (I.M.) injection. Cattle: 2 mL per 50 kg body weight, once for 3–5 days. Calves: 2–4 mL per 50 kg body weight, once for 3–5 days.",

            afterOpening:
                "Use within 28 days after withdrawal of the first dose.",

            sideEffects: [
                "Use of the product may result in a localized tissue reaction.",
                "Tissue lesions are repaired within 15 days after the last administration of the product."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "Cattle meat: 5 days after the last dose",
                "Cattle milk: 1 day after the last dose"
            ],

            warnings: [
                "Divide the dose so that no more than 10 mL of the product is injected at one site.",
                "Do not use the same injection site more than once during the course of treatment.",
                "Do not mix with other medicinal products.",
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store below 25°C and protect from light.",

            packing:
                "50 and 100 mL clear glass vials in a carton box."
        },


        ar: {
            dosageForm: "معلّق للحقن العضلي",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار والعجول",

            composition: [
                "سيفكينوم (على هيئة سلفات) — 25 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج الالتهابات البكتيرية في الأبقار الناتجة عن الكائنات الدقيقة موجبة وسالبة الغرام الحساسة للسيفكينوم. في الأبقار: التهابات الجهاز التنفسي الناتجة عن Pasteurella spp. وMannheimia spp. وHaemophilus spp. وActinobacillus pleuropneumoniae وStreptococcus suis، والتهاب الضرع الحاد الناتج عن الإشريكية القولونية (E. coli)، والتهابات القدم. وفي العجول: تسمم الدم الناتج عن الإشريكية القولونية (E. coli).",

            contraindications:
                "تُعد حالات فرط الحساسية للسيفالوسبورينات نادرة، ومع ذلك لا يُعطى السيفكينوم للحيوانات المعروفة بفرط حساسيتها للمضادات الحيوية من مجموعة البيتا-لاكتام.",

            dosage:
                "يُرجّ جيدًا قبل الاستعمال. يُعطى عن طريق الحقن العضلي (I.M.). الأبقار: 2 مل لكل 50 كغ من وزن الجسم، مرة واحدة لمدة 3–5 أيام. العجول: 2–4 مل لكل 50 كغ من وزن الجسم، مرة واحدة لمدة 3–5 أيام.",

            afterOpening:
                "يُستخدم خلال 28 يومًا من تاريخ سحب الجرعة الأولى.",

            sideEffects: [
                "قد يؤدي استخدام المستحضر إلى حدوث تفاعل موضعي في الأنسجة.",
                "تلتئم الآفات النسيجية خلال 15 يومًا بعد آخر جرعة من المستحضر."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "لحوم الأبقار: 5 أيام بعد آخر جرعة",
                "حليب الأبقار: يوم واحد بعد آخر جرعة"
            ],

            warnings: [
                "يُنصح بتقسيم الجرعة بحيث لا يتم حقن أكثر من 10 مل من المستحضر في موضع حقن واحد.",
                "لا يُستخدم موضع الحقن نفسه أكثر من مرة خلال فترة العلاج.",
                "لا يُخلط مع مستحضرات دوائية أخرى.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م وبعيدًا عن الضوء.",

            packing:
                "عبوات زجاجية شفافة سعة 50 و100 مل داخل علبة كرتونية."
        }

    }
},

    /* =====================================================
   DEXAJECT 0.4%
===================================================== */

{
    name: "Dexaject 0.4%",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Dexaject 0.4%.png",

    details: {

        en: {
            dosageForm: "I.M. or I.V. injectable solution",
            pack: "20, 50 or 100 mL",
            targetSpecies: "Cattle, horses, sheep, goats and small animals",

            composition: [
                "Dexamethasone phosphate (as sodium) — 4 mg / mL"
            ],

            indications:
                "For ketosis (acetonemia), stress, arthritis, bursitis, tendovaginitis, lymphangitis and laminitis. Also indicated for eczema, atypical inflammatory reactions of the skin and asthma.",

            contraindications:
                "Do not use in animals with osteoporosis, heart, kidney or liver disturbances, during the last trimester of pregnancy, or in lactating animals.",

            dosage:
                "Administer by intramuscular (I.M.) or intravenous (I.V.) injection. Cattle: 5–20 mg daily = 1.3–5.0 mL. Horses: 10–30 mg daily = 2.5–7.5 mL. Sheep and goats: 2.5–5 mg daily = 0.5–1.3 mL. Small animals: 0.125–1.0 mg daily = 0.25 mL.",

            afterOpening:
                "The product is stable for 28 days after first opening.",

            sideEffects: [
                "Decreased milk production.",
                "Prolonged use may decrease resistance to infections.",
                "Delayed wound healing may occur.",
                "Muscle atrophy, myopathy or osteoporosis may occur."
            ],

            interactions: [
                "Ephedrine",
                "Rifampin",
                "Barbiturates"
            ],

            withdrawal: [
                "Meat: 21 days",
                "Milk: 3 days"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store below 25°C.",

            packing:
                "20, 50 and 100 mL clear glass vials in a box."
        },


        ar: {
            dosageForm: "محلول للحقن العضلي أو الوريدي",
            pack: "20 أو 50 أو 100 مل",
            targetSpecies: "الأبقار، الخيول، الأغنام، الماعز والحيوانات الصغيرة",

            composition: [
                "ديكساميثازون فوسفات (على هيئة صوديوم) — 4 ملغ / مل"
            ],

            indications:
                "يُستخدم في حالات الكيتوزية (الأسيتونيميا)، والإجهاد، والتهاب المفاصل، والتهاب الأجربة، والتهاب أغمدة الأوتار، والتهاب الأوعية اللمفية، والتهاب الصفيحة الحساسة للحافر (Laminitis). كما يُستخدم في حالات الأكزيما، والتفاعلات الالتهابية غير النمطية في الجلد والربو.",

            contraindications:
                "لا يُستخدم في الحيوانات المصابة بهشاشة العظام أو اضطرابات القلب أو الكلى أو الكبد، ولا خلال الثلث الأخير من الحمل أو في الحيوانات المرضعة.",

            dosage:
                "يُعطى عن طريق الحقن العضلي (I.M.) أو الوريدي (I.V.). الأبقار: 5–20 ملغ يوميًا = 1.3–5.0 مل. الخيول: 10–30 ملغ يوميًا = 2.5–7.5 مل. الأغنام والماعز: 2.5–5 ملغ يوميًا = 0.5–1.3 مل. الحيوانات الصغيرة: 0.125–1.0 ملغ يوميًا = 0.25 مل.",

            afterOpening:
                "يبقى المستحضر ثابتًا لمدة 28 يومًا بعد فتح العبوة لأول مرة.",

            sideEffects: [
                "انخفاض إنتاج الحليب.",
                "قد يؤدي الاستخدام المطوّل إلى انخفاض مقاومة الجسم للعدوى.",
                "قد يحدث تأخر في التئام الجروح.",
                "قد يحدث ضمور عضلي أو اعتلال عضلي أو هشاشة في العظام."
            ],

            interactions: [
                "الإيفيدرين",
                "الريفامبين",
                "الباربيتورات"
            ],

            withdrawal: [
                "اللحوم: 21 يومًا",
                "الحليب: 3 أيام"
            ],

            warnings: [
                "لا يُخلط مع مستحضرات دوائية أخرى مخصصة للحقن."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م.",

            packing:
                "عبوات زجاجية شفافة سعة 20 أو 50 أو 100 مل داخل علبة."
        }

    }
},


/* =====================================================
   DIAZIM FORTE
===================================================== */

{
    name: "Diazim Forte",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Diazim.png",

    details: {

        en: {
            dosageForm: "I.M. or I.V. injectable solution",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle, sheep and goats",

            composition: [
                "Sulfadiazine sodium — 200 mg / mL",
                "Trimethoprim — 40 mg / mL"
            ],

            indications:
                "Effective against a wide range of Gram-positive and Gram-negative microorganisms and for infections caused by bacteria sensitive to sulfonamides.",

            contraindications:
                "Do not use with calcium preparations or antacids. Do not use in animals with hypersensitivity to sulfonamides, liver or renal insufficiency, newborn animals, or animals with blood dyscrasias.",

            dosage:
                "Administer by intramuscular (I.M.) or intravenous (I.V.) injection. Dose: 0.65 mL per 10 kg body weight daily.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Hypersensitivity reactions may occur, especially in the skin.",
                "Prolonged treatment may cause disorders of hematopoiesis, hepatitis and stomatitis.",
                "Arthropathy",
                "Fever",
                "Keratoconjunctivitis sicca",
                "Crystalluria",
                "Hypothyroidism",
                "Polyarthritis",
                "Vomiting",
                "Anorexia",
                "Diarrhea",
                "Polydipsia",
                "Polyuria"
            ],

            interactions: [
                "Calcium preparations",
                "Antacids",
                "Salicylates",
                "Phenylbutazone",
                "Halothane",
                "Thiazide diuretics",
                "Miconazole",
                "Procaine HCl"
            ],

            withdrawal: [
                "Meat: 18 days",
                "Milk: 7 days"
            ],

            warnings: [
                "Adequate drinking water should be available during treatment.",
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store between 15°C and 30°C and protect from light.",

            packing:
                "50 or 100 mL amber glass vials."
        },


        ar: {
            dosageForm: "محلول للحقن العضلي أو الوريدي",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار، الأغنام والماعز",

            composition: [
                "سلفاديازين صوديوم — 200 ملغ / مل",
                "تريميثوبريم — 40 ملغ / مل"
            ],

            indications:
                "فعال ضد نطاق واسع من الكائنات الدقيقة موجبة وسالبة الغرام، ويُستخدم لعلاج العدوى الناتجة عن البكتيريا الحساسة لمركبات السلفوناميد.",

            contraindications:
                "لا يُستخدم مع مستحضرات الكالسيوم أو مضادات الحموضة. ولا يُستخدم في الحيوانات التي تعاني من فرط الحساسية للسلفوناميدات، أو قصور وظائف الكبد أو الكلى، أو الحيوانات حديثة الولادة، أو الحيوانات المصابة باضطرابات دموية.",

            dosage:
                "يُعطى عن طريق الحقن العضلي (I.M.) أو الوريدي (I.V.). الجرعة: 0.65 مل لكل 10 كغ من وزن الجسم يوميًا.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من فتح العبوة لأول مرة.",

            sideEffects: [
                "قد تحدث تفاعلات فرط حساسية، وخاصة في الجلد.",
                "قد يؤدي العلاج المطوّل إلى اضطرابات في تكوّن خلايا الدم، والتهاب الكبد والتهاب الفم.",
                "اعتلال المفاصل",
                "الحمى",
                "التهاب القرنية والملتحمة الجاف",
                "وجود بلورات في البول",
                "قصور الغدة الدرقية",
                "التهاب متعدد المفاصل",
                "القيء",
                "فقدان الشهية",
                "الإسهال",
                "زيادة العطش",
                "زيادة التبول"
            ],

            interactions: [
                "مستحضرات الكالسيوم",
                "مضادات الحموضة",
                "الساليسيلات",
                "فينيل بيوتازون",
                "الهالوثان",
                "مدرات البول من نوع الثيازيد",
                "الميكونازول",
                "بروكايين هيدروكلورايد"
            ],

            withdrawal: [
                "اللحوم: 18 يومًا",
                "الحليب: 7 أيام"
            ],

            warnings: [
                "يجب توفير كمية كافية من مياه الشرب خلال فترة العلاج.",
                "لا يُخلط مع أي مستحضرات دوائية أخرى مخصصة للحقن."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م وبعيدًا عن الضوء.",

            packing:
                "عبوات زجاجية كهرمانية سعة 50 أو 100 مل."
        }

    }
},


/* =====================================================
   DICLOFAL 2.5%
===================================================== */

{
    name: "Diclofal 2.5%",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Diclofal.png",

    details: {

        en: {
            dosageForm: "Deep I.M. injectable solution",
            pack: "20, 50 or 100 mL",
            targetSpecies: "Cattle, horses, sheep, goats and small animals",

            composition: [
                "Diclofenac sodium — 25 mg / mL"
            ],

            indications:
                "Initial therapy for inflammation and rheumatic diseases, as well as painful conditions caused by inflammation of non-rheumatic origin.",

            contraindications:
                "Do not use in animals with hepatic or renal impairment or cardiac disease, in animals sensitive to the active substance, during pregnancy or lactation, or in animals producing milk for human consumption.",

            dosage:
                "Administer by deep intramuscular injection. Large animals: 1 mL per 25 kg body weight daily for 5 days. Small animals: 0.2 mL per 5 kg body weight daily for 5 days.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Gastrointestinal disorders",
                "Vomiting",
                "Skin rashes",
                "Pruritus",
                "Drowsiness",
                "Anorexia",
                "Nervousness"
            ],

            interactions: [
                "Lithium-containing preparations",
                "Digoxin",
                "Aspirin",
                "Other non-steroidal anti-inflammatory drugs"
            ],

            withdrawal: [
                "Meat: 10 days",
                "Milk: 7 days"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store between 15°C and 30°C and protect from light.",

            packing:
                "20, 50 and 100 mL amber glass vials."
        },


        ar: {
            dosageForm: "محلول للحقن العضلي العميق",
            pack: "20 أو 50 أو 100 مل",
            targetSpecies: "الأبقار، الخيول، الأغنام، الماعز والحيوانات الصغيرة",

            composition: [
                "ديكلوفيناك الصوديوم — 25 ملغ / مل"
            ],

            indications:
                "يُستخدم كعلاج أولي للالتهابات والأمراض الروماتيزمية، وكذلك للحالات المؤلمة الناتجة عن الالتهابات ذات المنشأ غير الروماتيزمي.",

            contraindications:
                "لا يُستخدم في الحيوانات التي تعاني من قصور في وظائف الكبد أو الكلى أو أمراض القلب، أو في حالات فرط الحساسية للمادة الفعالة، أو أثناء الحمل والرضاعة، أو في الحيوانات المنتجة للحليب المخصص للاستهلاك البشري.",

            dosage:
                "يُعطى عن طريق الحقن العضلي العميق. الحيوانات الكبيرة: 1 مل لكل 25 كغ من وزن الجسم يوميًا لمدة 5 أيام. الحيوانات الصغيرة: 0.2 مل لكل 5 كغ من وزن الجسم يوميًا لمدة 5 أيام.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من فتح العبوة لأول مرة.",

            sideEffects: [
                "اضطرابات الجهاز الهضمي",
                "القيء",
                "طفح جلدي",
                "الحكة",
                "الخمول",
                "فقدان الشهية",
                "التهيّج العصبي"
            ],

            interactions: [
                "المستحضرات المحتوية على الليثيوم",
                "الديجوكسين",
                "الأسبرين",
                "مضادات الالتهاب غير الستيرويدية الأخرى"
            ],

            withdrawal: [
                "اللحوم: 10 أيام",
                "الحليب: 7 أيام"
            ],

            warnings: [
                "لا يُخلط مع أي مستحضرات دوائية أخرى مخصصة للحقن."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م وبعيدًا عن الضوء.",

            packing:
                "عبوات زجاجية كهرمانية سعة 20 أو 50 أو 100 مل."
        }

    }
},

   {
    name: "Dimasol RTU",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Dimazol.png",

    details: {

        en: {
            dosageForm: "Injectable solution",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle, sheep, goats, horses and dogs",

            composition: [
                "Diminazene aceturate — 70 mg / mL",
                "Phenazone (Antipyrine) — 375 mg / mL"
            ],

            indications:
                "For the treatment and control of infections caused by blood parasites, including Trypanosoma congolense, T. vivax and T. brucei; Babesia species including B. bovis, B. bigemina, B. ovis, B. motasi and B. canis; and Theileria annulata.",

            contraindications:
                "Not specified in the leaflet.",

            dosage:
                "Administer by deep intramuscular injection. Dose: 1 mL per 20 kg body weight as a single dose. The total dose should not exceed 56 mL of solution at one time per animal, preferably divided between multiple injection sites.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Overdosage or repeated dosing may cause toxic disturbances of the central nervous system."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "Meat: 21 days",
                "Milk: 4 days"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store between 2°C and 8°C and protect from sunlight.",

            packing:
                "50 or 100 mL."
        },


        ar: {
            dosageForm: "محلول للحقن",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار، الأغنام، الخيول والكلاب",

            composition: [
                "ديمينازين أسيتورات — 70 ملغ / مل",
                "فينازون (أنتيبيرين) — 375 ملغ / مل"
            ],

            indications:
                "يُستخدم للعلاج والوقاية من الإصابة بطفيليات الدم، بما في ذلك التريبانوسوما: كونغولينس، فيفاكس وبروسي؛ والبابيزيا مثل بوفيس، بيجيمينا، أوفيس، موتاسي وكانيس وغيرها؛ وكذلك ثايليريا أنيولاتا.",

            contraindications:
                "لم تُذكر موانع استعمال في النشرة.",

            dosage:
                "يُعطى عن طريق الحقن العضلي العميق. الجرعة: 1 مل لكل 20 كغ من وزن الحيوان لمرة واحدة. يجب ألا تزيد الجرعة الكلية عن 56 مل في المرة الواحدة لكل حيوان، ويفضل توزيعها على عدة مواضع للحقن.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من فتح العبوة لأول مرة.",

            sideEffects: [
                "قد تؤدي زيادة الجرعة أو تكرارها إلى حدوث اضطرابات سُمية في الجهاز العصبي المركزي."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "اللحوم: 21 يومًا بعد آخر علاج",
                "الحليب: 4 أيام بعد آخر علاج"
            ],

            warnings: [
                "لا يُخلط مع أي مستحضرات دوائية أخرى."
            ],

            storage:
                "يُحفظ في درجة حرارة من 2 إلى 8°م وبعيدًا عن أشعة الشمس المباشرة.",

            packing:
                "عبوات سعة 50 أو 100 مل."
        }

    }
},

{
    name: "Diumide 5%",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Diumide 5%.png",

    details: {

        en: {
            dosageForm: "I.V. or I.M. injectable solution",
            pack: "20 mL",
            targetSpecies: "Cattle, horses, dogs and cats",

            composition: [
                "Furosemide — 50 mg / mL"
            ],

            indications:
                "Furosemide is used for its diuretic activity in cattle, horses, dogs and cats. It is used for the treatment of congestive cardiomyopathy and pulmonary edema, edema associated with renal dysfunction, trauma and parasitic disease. It is also recommended for edema of the teats or udder, limb edema and false pregnancy. Diuretics may be used to support forced diuresis in poisoning and for immediate removal of toxins or collection of urine samples for diagnostic purposes. It is also indicated to promote diuresis in animals with oliguria. Furosemide is also used as a bronchodilator.",

            contraindications:
                "Do not use in animals with hepatic coma, renal insufficiency accompanied by anuria, electrolyte deficiency such as hypokalemia or hyponatremia, hypovolemia or hypotonia. Do not use in animals hypersensitive to furosemide or sulfonamides.",

            dosage:
                "Cattle and horses: 1 mL per 50 kg body weight once daily, or 0.5 mL per 50 kg body weight twice daily. Dogs and cats: 2–4 mg per kg body weight once or twice daily. Duration of treatment is generally 1–3 days.",

            afterOpening:
                "Not specified in the leaflet.",

            sideEffects: [
                "Fluid and electrolyte imbalance, especially hypokalemia, hypocalcemia and hyponatremia.",
                "Continuous use may result in loss of water-soluble vitamins.",
                "Dehydration and hypochloremic alkalosis may occur.",
                "Gastrointestinal upset, anemia, leukopenia and weakness may occur.",
                "Ototoxicity may occur in cats, especially with high intravenous doses."
            ],

            interactions: [
                "Aminoglycosides",
                "Tubocurarine",
                "Theophylline",
                "Amphotericin B",
                "Cephalosporins",
                "NSAIDs",
                "Corticosteroids"
            ],

            withdrawal: [
                "Meat: 5 days",
                "Milk: 3 days"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store in a dark place at 15–30°C.",

            packing:
                "20 mL."
        },


        ar: {
            dosageForm: "محلول للحقن الوريدي أو العضلي",
            pack: "20 مل",
            targetSpecies: "الأبقار، الخيول، الكلاب والقطط",

            composition: [
                "فوروسيميد — 50 ملغ / مل"
            ],

            indications:
                "يُستخدم الفوروسيميد كمدر للبول في الأبقار والخيول والكلاب والقطط، ويُستخدم لمعالجة الاعتلال القلبي الاحتقاني والوذمة الرئوية، والوذمة المصاحبة لخلل وظائف الكلى والإصابات والأمراض الطفيلية. كما يُستخدم لمعالجة وذمة الحلمات والضرع ووذمة الأطراف والحمل الكاذب. ويمكن استخدام مدرات البول لدعم الإدرار القسري للبول في حالات التسمم والمساعدة على التخلص السريع من السموم أو للحصول على عينات بول لأغراض التشخيص. كما يُستخدم لتحفيز إدرار البول في الحيوانات التي تعاني من قلة البول، ويُستخدم الفوروسيميد أيضًا كموسع للشعب الهوائية.",

            contraindications:
                "لا يُستخدم في الحيوانات التي تعاني من غيبوبة كبدية، أو قصور كلوي مصحوب بانعدام البول، أو نقص الشوارد مثل نقص البوتاسيوم أو نقص الصوديوم، أو نقص حجم الدم أو انخفاض التوتر. كما لا يُستخدم في حالات فرط الحساسية للفوروسيميد أو السلفوناميدات.",

            dosage:
                "الأبقار والخيول: 1 مل لكل 50 كغ من وزن الحيوان مرة واحدة يوميًا، أو 0.5 مل لكل 50 كغ من وزن الحيوان مرتين يوميًا. الكلاب والقطط: 2–4 ملغ لكل كغ من وزن الحيوان مرة أو مرتين يوميًا. مدة العلاج بشكل عام من 1 إلى 3 أيام.",

            afterOpening:
                "لم تُذكر مدة الاستخدام بعد فتح العبوة في النشرة.",

            sideEffects: [
                "قد يحدث اختلال في توازن السوائل والشوارد، خاصة نقص البوتاسيوم ونقص الكالسيوم ونقص الصوديوم.",
                "قد يؤدي الاستخدام المتواصل إلى فقدان الفيتامينات الذائبة في الماء.",
                "قد يحدث الجفاف والقلاء الناتج عن نقص الكلوريد.",
                "قد تحدث اضطرابات معدية معوية، وفقر دم، ونقص كريات الدم البيضاء وضعف عام.",
                "قد تحدث سُمية أذنية في القطط، خاصة عند استخدام جرعات مرتفعة عن طريق الوريد."
            ],

            interactions: [
                "الأمينوغليكوزيدات",
                "تيوبوكورارين",
                "الثيوفيلين",
                "أمفوتيريسين B",
                "السيفالوسبورينات",
                "مضادات الالتهاب غير الستيرويدية",
                "الكورتيكوستيرويدات"
            ],

            withdrawal: [
                "اللحوم: 5 أيام",
                "الحليب: 3 أيام"
            ],

            warnings: [
                "لا يُخلط مع أي مستحضرات دوائية أخرى مخصصة للحقن."
            ],

            storage:
                "يُحفظ في مكان معتم بدرجة حرارة من 15 إلى 30°م.",

            packing:
                "عبوة سعة 20 مل."
        }

    }
},


/* =====================================================
   E-SELEN
===================================================== */

{
    name: "E-Selen",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/E-Selen.png",

    details: {

        en: {
            dosageForm: "I.M. or S.C. injectable emulsion",
            pack: "20, 50 or 100 mL",
            targetSpecies: "Calves, lambs and ewes",

            composition: [
                "Vitamin E (dl-alpha-tocopherol acetate) — 68 mg (68 IU) / mL",
                "Selenium (as sodium selenite) — 1 mg / mL"
            ],

            indications:
                "For the treatment and prevention of white muscle disease in calves, lambs and ewes. Clinical signs include stiffness and lameness, diarrhea, pulmonary distress and/or cardiac arrest.",

            contraindications:
                "Do not use in pregnant ewes. Deaths and abortions have been reported in pregnant ewes injected with this product. Do not use in lactating dairy cattle. Vitamin E/selenium products should only be used in species for which they are approved.",

            dosage:
                "Shake well before use. Administer by intramuscular (I.M.) or subcutaneous (S.C.) injection. Calves: 2.5–3.75 mL per 45 kg body weight depending on severity. Lambs 2 weeks of age and older: 1 mL per 18 kg body weight, with a minimum dose of 1 mL. Ewes: 2.5 mL per 45 kg body weight.",

            afterOpening:
                "Not specified in the leaflet.",

            sideEffects: [
                "Anaphylactoid reactions may occur, with signs including excitement, sweating, trembling, ataxia, respiratory distress and cardiac dysfunction.",
                "Intramuscular injection may be associated with transient muscle soreness.",
                "Acute respiratory distress, frothing from the nose and mouth, bloating and severe depression may occur."
            ],

            interactions: [
                "Large doses of vitamin E may delay the hematologic response to iron therapy in iron-deficiency anemia."
            ],

            withdrawal: [
                "Calves — slaughter: 30 days",
                "Lambs and ewes — slaughter: 14 days"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store at 15–25°C in a dark place.",

            packing:
                "20, 50 and 100 mL amber glass vials."
        },


        ar: {
            dosageForm: "مستحلب للحقن العضلي أو تحت الجلد",
            pack: "20 أو 50 أو 100 مل",
            targetSpecies: "العجول، الحملان والنعاج",

            composition: [
                "فيتامين هـ (dl-alpha-tocopherol acetate) — 68 ملغ (68 وحدة دولية) / مل",
                "سيلينيوم (على هيئة سيلينيت الصوديوم) — 1 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج والوقاية من مرض العضلة البيضاء في العجول والحملان والنعاج. وتشمل العلامات السريرية تيبس وكساح الأطراف، والإسهال، وضيق التنفس و/أو توقف القلب.",

            contraindications:
                "لا يُستخدم للنعاج أثناء فترة الحمل، حيث تم تسجيل حالات وفاة وإجهاض عند بعض النعاج الحوامل بعد حقنها بهذا المستحضر. كما لا يُستخدم في الأبقار الحلوب. ويجب استخدام مستحضرات فيتامين هـ والسيلينيوم فقط في الأنواع الحيوانية الموصى باستخدامها لها.",

            dosage:
                "يُخض جيدًا قبل الاستعمال. يُعطى عن طريق الحقن العضلي أو تحت الجلد. العجول: 2.5–3.75 مل لكل 45 كغ من وزن الحيوان حسب شدة الحالة. الحملان بعمر أسبوعين فأكثر: 1 مل لكل 18 كغ من وزن الحيوان، على ألا تقل الجرعة عن 1 مل. النعاج: 2.5 مل لكل 45 كغ من وزن الحيوان.",

            afterOpening:
                "لم تُذكر مدة الاستخدام بعد فتح العبوة في النشرة.",

            sideEffects: [
                "قد تحدث تفاعلات شبيهة بالحساسية المفرطة، وتشمل أعراضها التهيج، والتعرق، والارتجاف، والترنح، وضيق التنفس واضطرابات وظائف القلب.",
                "قد يؤدي الحقن العضلي إلى ألم عضلي مؤقت.",
                "قد يحدث ضيق تنفس حاد، وظهور رغوة من الأنف والفم، وانتفاخ، وهبوط شديد."
            ],

            interactions: [
                "قد تؤدي الجرعات العالية من فيتامين هـ إلى تأخير الاستجابة الدموية للعلاج بالحديد في حالات فقر الدم الناتج عن نقص الحديد."
            ],

            withdrawal: [
                "العجول — الذبح: 30 يومًا",
                "الحملان والنعاج — الذبح: 14 يومًا"
            ],

            warnings: [
                "لا يُخلط مع أي دواء آخر مخصص للحقن."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 25°م في مكان معتم.",

            packing:
                "عبوات زجاجية بنية اللون سعة 20 و50 و100 مل."
        }

    }
},

    {
    name: "Enromoxine",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Enromoxine.png",

    details: {

        en: {
            dosageForm: "Injectable suspension",
            pack: "100 mL",
            targetSpecies: "Cattle and dogs",

            composition: [
                "Enrofloxacin — 50 mg / mL",
                "Amoxicillin (as trihydrate) — 100 mg / mL"
            ],

            indications:
                "For Gram-positive and Gram-negative bacterial infections of the digestive tract, respiratory tract, urogenital tract and skin. In cattle: bronchopneumonia, dermatitis, pneumonia, respiratory infections, colibacillosis, salmonellosis and diarrheas. In dogs: respiratory infections, diarrheas and urinary tract infections.",

            contraindications:
                "Do not use in animals hypersensitive to penicillins, cephalosporins or enrofloxacin, or in animals with renal impairment or liver dysfunction. Do not use in cattle intended for dairy production or in calves intended for veal production. Do not use in young growing animals because cartilage damage may occur.",

            dosage:
                "Shake well before use. Cattle: administer by deep intramuscular injection. Dogs: administer by subcutaneous injection. Massage the injection site after administration and use a separate injection site for each administration. Cattle: 5–10 mL per 100 kg body weight once for 5 days. Dogs: 1 mL per 10 kg body weight once for 5 days. If the dose volume exceeds 20 mL in cattle, divide the dose between two injection sites.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Hypersensitivity reactions",
                "Minor irritation at the injection site may occur",
                "Crystalluria"
            ],

            interactions: [
                "Tetracyclines",
                "Macrolides",
                "Cloxacillin",
                "Lincomycin",
                "Aminoglycosides",
                "Phenylbutazone",
                "Salicylates",
                "Sulfonamides",
                "Theophylline",
                "Third-generation cephalosporins",
                "Extended-spectrum penicillins",
                "Cyclosporine",
                "Methotrexate",
                "Warfarin",
                "Iron",
                "Zinc"
            ],

            withdrawal: [
                "Meat: 30 days",
                "Milk: Do not use"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store between 15°C and 30°C in a dark place.",

            packing:
                "100 mL amber glass vial in a carton box."
        },


        ar: {
            dosageForm: "معلّق للحقن",
            pack: "100 مل",
            targetSpecies: "الأبقار والكلاب",

            composition: [
                "إنروفلوكساسين — 50 ملغ / مل",
                "أموكسيسيلين (ثلاثي الهيدرات) — 100 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج نطاق واسع من الإصابات البكتيرية موجبة وسالبة الغرام في الجهاز الهضمي والجهاز التنفسي والجهاز البولي التناسلي والأمراض الجلدية. في الأبقار: التهاب القصبات والرئة، التهاب الجلد، الالتهاب الرئوي، التهابات الجهاز التنفسي، داء العصيات القولونية، السالمونيلا والإسهال. في الكلاب: التهابات الجهاز التنفسي، الإسهال والتهابات المسالك البولية.",

            contraindications:
                "لا يُستخدم في الحيوانات التي تعاني من فرط الحساسية للبنسلينات أو السيفالوسبورينات أو الإنروفلوكساسين، ولا في حالات قصور وظائف الكلى أو اختلال وظائف الكبد. لا يُستخدم للأبقار المخصصة لإنتاج الحليب أو للعجول المخصصة لإنتاج لحم العجل. ولا يُستخدم في الحيوانات الصغيرة النامية لأنه قد يسبب أضرارًا للغضاريف والمفاصل.",

            dosage:
                "يُرجّ جيدًا قبل الاستعمال. الأبقار: يُعطى عن طريق الحقن العضلي العميق. الكلاب: يُعطى تحت الجلد. يُنصح بتدليك موضع الحقن بعد إعطاء الدواء، ويجب استخدام موضع حقن مختلف في كل مرة. الأبقار: 5–10 مل لكل 100 كغ من وزن الجسم، مرة واحدة لمدة 5 أيام. الكلاب: 1 مل لكل 10 كغ من وزن الجسم، مرة واحدة لمدة 5 أيام. إذا زادت الجرعة عن 20 مل في الأبقار، تُقسم وتُحقن في موضعين مختلفين.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا بعد فتح العبوة لأول مرة.",

            sideEffects: [
                "تفاعلات فرط الحساسية",
                "قد يحدث تهيج بسيط في موضع الحقن",
                "زيادة تكوّن البلورات في البول"
            ],

            interactions: [
                "التتراسيكلينات",
                "الماكروليدات",
                "كلوكساسيلين",
                "لينكومايسين",
                "الأمينوغليكوزيدات",
                "فينيل بيوتازون",
                "الساليسيلات",
                "السلفوناميدات",
                "الثيوفيلين",
                "الجيل الثالث من السيفالوسبورينات",
                "البنسلينات واسعة الطيف",
                "السيكلوسبورين",
                "الميثوتريكسات",
                "الوارفارين",
                "الحديد",
                "الزنك"
            ],

            withdrawal: [
                "اللحوم: 30 يومًا",
                "الحليب: لا يُستخدم"
            ],

            warnings: [
                "لا يُخلط مع أي مستحضرات دوائية أخرى مخصصة للحقن."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م في مكان معتم.",

            packing:
                "قارورة زجاجية بنية اللون سعة 100 مل داخل علبة كرتونية."
        }

    }
},
/* =====================================================
   ENROSEEL 10% - INJECTABLE
===================================================== */

{
    name: "Enroseel 10%",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Enroseel10%.png",
    

    details: {

        en: {
            dosageForm: "S.C. injectable solution",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle and sheep",

            composition: [
                "Enrofloxacin — 100 mg / mL"
            ],

            indications:
                "For the treatment of chronic respiratory disease associated with Mycoplasma, pasteurellosis, salmonellosis and E. coli infections.",

            contraindications:
                "Do not use in cattle and sheep intended for dairy production or in calves intended for veal production. Horses should not be treated with enrofloxacin. The effects of enrofloxacin during pregnancy and lactation have not been adequately determined. Do not use in young growing animals because it may cause cartilage damage.",

            dosage:
                "Administer by subcutaneous injection. Single-dose therapy: 1–2 mL per 20 kg body weight, administered once. Multiple-day therapy: 0.5–1 mL per 20 kg body weight once daily at 24-hour intervals for 3 days. Additional treatments may be given on days 4 and 5 to animals showing clinical improvement but not complete recovery.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Subcutaneous injection may cause a transient local tissue reaction.",
                "The local reaction may result in trim loss of edible tissue at slaughter."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "Meat: 28 days"
            ],

            warnings: [
                "Do not mix with other medicinal products."
            ],

            storage:
                "Store at 15–30°C in a dry and dark place.",

            packing:
                "50 or 100 mL amber glass vials."
        },


        ar: {
            dosageForm: "محلول للحقن تحت الجلد",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار والأغنام",

            composition: [
                "إنروفلوكساسين — 100 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج الالتهابات المزمنة في الجهاز التنفسي الناتجة عن المايكوبلازما، والباستوريلا، والسالمونيلا، والإشريكية القولونية (E. coli).",

            contraindications:
                "لا يُستخدم في الأبقار والأغنام المخصصة لإنتاج الحليب، ولا في العجول المخصصة لإنتاج لحم العجول. لا يُستخدم في الخيول. لم يتم تحديد تأثير الإنروفلوكساسين أثناء الحمل أو الرضاعة بشكل كافٍ. كما لا يُستخدم في الحيوانات الصغيرة النامية لأنه قد يسبب أضرارًا للغضاريف والمفاصل.",

            dosage:
                "يُعطى عن طريق الحقن تحت الجلد. العلاج بجرعة واحدة: 1–2 مل لكل 20 كغ من وزن الحيوان مرة واحدة فقط. العلاج متعدد الجرعات: 0.5–1 مل لكل 20 كغ من وزن الحيوان مرة يوميًا، وتُكرر الجرعة كل 24 ساعة لمدة 3 أيام. يمكن إعطاء جرعات إضافية في اليومين الرابع والخامس للحيوانات التي يظهر عليها تحسن سريري دون الوصول إلى الشفاء التام.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "قد يسبب الحقن تحت الجلد تفاعلًا موضعيًا عابرًا في الأنسجة.",
                "قد يؤدي التفاعل في موضع الحقن إلى فقد جزء من الأنسجة الصالحة للأكل عند الذبح."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "اللحوم: 28 يومًا"
            ],

            warnings: [
                "لا يُخلط المستحضر مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م في مكان جاف ومعتم.",

            packing:
                "عبوات زجاجية بنية اللون سعة 50 أو 100 مل."
        }

    }
},

    {
    name: "Floricol 300",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Floricol.png",

    details: {

        en: {
            dosageForm: "Neck I.M. injectable solution",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle and sheep",

            composition: [
                "Florfenicol — 300 mg / mL"
            ],

            indications:
                "Cattle: treatment of bovine respiratory disease (BRD) associated with Mannheimia haemolytica, Pasteurella multocida and Haemophilus somnus, and treatment of bovine foot rot. Sheep: treatment of respiratory tract infections caused by Mannheimia haemolytica and Pasteurella multocida.",

            contraindications:
                "Do not use in veal calves, cows or sheep producing milk for human consumption, adult bulls or rams intended for breeding purposes, sheep less than 7 weeks of age, during pregnancy or lactation, or in cases of hypersensitivity.",

            dosage:
                "Administer in the neck musculature only. Cattle: 1 mL per 15 kg body weight (20 mg/kg) by intramuscular injection, administered twice at 48-hour intervals. Do not administer more than 10 mL at each site. Sheep: 1 mL per 15 kg body weight (20 mg/kg) by intramuscular injection, once daily on three consecutive days. Do not administer more than 4 mL at each site.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Transient inappetence may occur.",
                "Decreased water consumption may occur.",
                "Transient diarrhea may occur following treatment."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "Cattle meat: 30 days",
                "Sheep meat: 39 days",
                "Milk: Do not use"
            ],

            warnings: [
                "Intramuscular injection may result in a local tissue reaction persisting beyond 28 days.",
                "This may result in trim loss of edible tissue at slaughter.",
                "Tissue reaction at injection sites other than the neck is likely to be more severe.",
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store at 15–30°C, protected from light and out of children's reach.",

            packing:
                "50 or 100 mL amber glass vials."
        },


        ar: {
            dosageForm: "محلول للحقن العضلي في عضلة الرقبة",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار والأغنام",

            composition: [
                "فلورفينيكول — 300 ملغ / مل"
            ],

            indications:
                "الأبقار: يُستخدم لعلاج أمراض الجهاز التنفسي البقري المرتبطة بمانهيميا هيموليتيكا، وباستوريلا ملتوسيدا، وهيموفيلس سومنس، كما يُستخدم لعلاج تعفن الظلف في الأبقار. الأغنام: يُستخدم لعلاج التهابات الجهاز التنفسي الناتجة عن مانهيميا هيموليتيكا وباستوريلا ملتوسيدا.",

            contraindications:
                "لا يُستخدم في عجول اللحم، أو الأبقار والأغنام المنتجة للحليب المخصص للاستهلاك البشري، أو الثيران والكباش المخصصة لأغراض التكاثر، أو الأغنام التي يقل عمرها عن 7 أسابيع، أو أثناء الحمل والرضاعة، أو في حالات فرط الحساسية للدواء.",

            dosage:
                "يُعطى عن طريق الحقن العضلي في عضلة الرقبة فقط. الأبقار: 1 مل لكل 15 كغ من وزن الجسم، بما يعادل 20 ملغ/كغ، ويُعطى مرتين بفاصل 48 ساعة. لا يُحقن أكثر من 10 مل في موضع الحقن الواحد. الأغنام: 1 مل لكل 15 كغ من وزن الجسم، بما يعادل 20 ملغ/كغ، مرة واحدة يوميًا لمدة ثلاثة أيام متتالية. لا يُحقن أكثر من 4 مل في موضع الحقن الواحد.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا بعد فتح العبوة.",

            sideEffects: [
                "قد يحدث فقدان مؤقت للشهية.",
                "قد يحدث انخفاض في استهلاك المياه.",
                "قد يحدث إسهال مؤقت بعد العلاج."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "لحوم الأبقار: 30 يومًا",
                "لحوم الأغنام: 39 يومًا",
                "الحليب: لا يُستخدم"
            ],

            warnings: [
                "قد يسبب الحقن العضلي تفاعلًا موضعيًا في الأنسجة يستمر لأكثر من 28 يومًا.",
                "قد يؤدي ذلك إلى فقد جزء من الأنسجة الصالحة للأكل عند الذبح.",
                "قد يكون التفاعل النسيجي أشد إذا تم الحقن في موضع غير عضلة الرقبة.",
                "لا يُخلط مع أي دواء آخر مخصص للحقن."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م بعيدًا عن الضوء وبعيدًا عن متناول الأطفال.",

            packing:
                "عبوات زجاجية بنية اللون سعة 50 أو 100 مل."
        }

    }
},

   {
    name: "Flunex",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Flunex.png",

    details: {

        en: {
            dosageForm: "Injectable solution",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle and horses",

            composition: [
                "Flunixin (as Flunixin Meglumine) — 50 mg / mL"
            ],

            indications:
                "Flunex is a non-narcotic non-steroidal analgesic with anti-inflammatory and antipyretic properties. In horses, it is indicated for relief of inflammation and pain associated with musculoskeletal disorders and visceral pain associated with colic, and for treatment of endotoxaemia or septic shock associated with gastric torsion and other conditions in which gastrointestinal blood circulation is compromised. In cattle, it is indicated for control of acute inflammation associated with respiratory disease and may also be used as adjunctive therapy in acute mastitis.",

            contraindications:
                "Do not use in animals suffering from cardiac, hepatic or renal disease where gastrointestinal ulceration or bleeding may occur. Do not use in dehydrated animals suffering from ileus-associated colic, animals hypersensitive to the active ingredient, dry dairy cows, veal calves or pregnant mares. Avoid intra-arterial injection in cattle and horses.",

            dosage:
                "Administer intravenously to cattle and horses. Horses - colic: 1 mL per 45 kg body weight; treatment may be repeated once or twice if colic recurs. Musculoskeletal disorders: 1 mL per 45 kg body weight once daily for up to 5 days according to clinical response. Endotoxaemia or septic shock: 1 mL per 200 kg body weight every 6–8 hours. Cattle: 2 mL per 45 kg body weight by slow intravenous administration; repeat as necessary every 24 hours for up to 5 consecutive days.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Gastrointestinal irritation",
                "Ulceration and bleeding",
                "Potential renal damage in dehydrated or hypovolaemic animals"
            ],

            interactions: [
                "NSAIDs",
                "Aspirin",
                "Cyclosporine",
                "Furosemide and other diuretics",
                "Nephrotoxic drugs",
                "Warfarin",
                "Digoxin"
            ],

            withdrawal: [
                "Meat: 14 days",
                "Milk: 2 days"
            ],

            warnings: [
                "Do not use in bulls intended for breeding.",
                "Stop administration immediately if signs of intolerance occur.",
                "Provide an adequate water supply.",
                "Use with caution in animals under 6 weeks of age and in aged animals.",
                "Avoid use in dehydrated, hypoglycaemic or hypotensive animals.",
                "Do not administer to racehorses within 8 days of racing.",
                "Do not exceed the recommended dose or duration of treatment.",
                "Do not mix with other medicinal products for injection.",
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store below 25°C and protect from light.",

            packing:
                "50 and 100 mL amber glass Type II vials in a carton box."
        },


        ar: {
            dosageForm: "محلول للحقن",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار والخيول",

            composition: [
                "فلونيكسين (على هيئة فلونيكسين ميغلومين) — 50 ملغ / مل"
            ],

            indications:
                "فلونيكس مسكن غير مخدر من مضادات الالتهاب غير الستيرويدية، وله خصائص مضادة للالتهاب وخافضة للحرارة. في الخيول: يُستخدم للتخفيف من الألم والالتهاب المصاحب لاضطرابات الجهاز العضلي الهيكلي، وللتخفيف من ألم الأحشاء المصاحب للمغص، كما يُستخدم في علاج التسمم الداخلي أو الصدمة الإنتانية المرتبطة بالتواء المعدة والحالات الأخرى التي يحدث فيها ضعف في وصول الدم إلى الجهاز الهضمي. في الأبقار: يُستخدم للسيطرة على الالتهابات الحادة المرتبطة بأمراض الجهاز التنفسي، كما يمكن استخدامه كعلاج مساعد في حالات التهاب الضرع الحاد.",

            contraindications:
                "لا يُستخدم في الحيوانات التي تعاني من أمراض القلب أو الكبد أو الكلى، خاصة عند وجود احتمال لحدوث تقرح أو نزيف في الجهاز الهضمي. لا يُستخدم في الحيوانات المصابة بالجفاف والتي تعاني من مغص مرتبط بانسداد الأمعاء، أو في حالات فرط الحساسية للمادة الفعالة، أو في الأبقار خلال فترة جفاف الضرع، أو العجول اللاحمة، أو الأفراس الحوامل. ويجب تجنب الحقن داخل الشريان في الأبقار والخيول.",

            dosage:
                "يُعطى عن طريق الحقن الوريدي للأبقار والخيول. الخيول - المغص: 1 مل لكل 45 كغ من وزن الجسم، ويمكن تكرار العلاج مرة أو مرتين إذا تكرر المغص. اضطرابات الجهاز العضلي الهيكلي: 1 مل لكل 45 كغ من وزن الجسم مرة واحدة يوميًا لمدة تصل إلى 5 أيام حسب الاستجابة السريرية. التسمم الداخلي أو الصدمة الإنتانية: 1 مل لكل 200 كغ من وزن الجسم كل 6–8 ساعات. الأبقار: 2 مل لكل 45 كغ من وزن الجسم عن طريق الحقن الوريدي البطيء، وتكرر الجرعة حسب الضرورة كل 24 ساعة لمدة أقصاها 5 أيام متتالية.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من تاريخ فتح العبوة لأول مرة.",

            sideEffects: [
                "تهيج الجهاز الهضمي",
                "تقرحات أو نزيف في الجهاز الهضمي",
                "احتمالية حدوث ضرر كلوي في الحيوانات المصابة بالجفاف أو نقص حجم الدم"
            ],

            interactions: [
                "مضادات الالتهاب غير الستيرويدية",
                "الأسبرين",
                "السيكلوسبورين",
                "الفوروسيميد ومدرات البول الأخرى",
                "الأدوية ذات السُمية الكلوية",
                "الوارفارين",
                "الديجوكسين"
            ],

            withdrawal: [
                "اللحوم: 14 يومًا",
                "الحليب: يومان"
            ],

            warnings: [
                "لا يُستخدم في الثيران المعدة لأغراض التكاثر.",
                "يجب إيقاف العلاج فورًا في حال ظهور علامات عدم التحمل.",
                "يجب توفير كمية كافية من مياه الشرب.",
                "يُستخدم بحذر في الحيوانات التي يقل عمرها عن 6 أسابيع وفي الحيوانات المسنة.",
                "يُتجنب استخدامه في الحيوانات المصابة بالجفاف أو انخفاض سكر الدم أو انخفاض ضغط الدم.",
                "لا يُعطى لخيول السباق خلال 8 أيام قبل السباق.",
                "لا تتجاوز الجرعة الموصى بها أو مدة العلاج.",
                "لا يُخلط مع أي مستحضرات دوائية أخرى مخصصة للحقن.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م وبعيدًا عن الضوء.",

            packing:
                "عبوات زجاجية بنية اللون نوع II سعة 50 و100 مل داخل علبة كرتونية."
        }

    }
},

   /* =====================================================
   GENTA-50
===================================================== */

{
    name: "Genta-50",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Genta-50.png",

    details: {

        en: {
            dosageForm: "Injectable solution",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle, horses, sheep, poultry, cats and dogs",

            composition: [
                "Gentamycin (as sulphate) — 50 mg / mL"
            ],

            indications:
                "Gentamycin is indicated for the treatment of infections caused by susceptible strains of microorganisms such as Pseudomonas aeruginosa, Escherichia coli and Staphylococcus. It is highly effective against a wide range of aerobic bacteria.",

            contraindications:
                "Do not use in animals with hypersensitivity to gentamycin or in animals with serious impairment of liver and/or renal function.",

            dosage:
                "Cattle, horses and sheep: 4 mL per 50 kg body weight. Poultry: 0.1 mL per 1 kg body weight by subcutaneous injection. Cats and dogs: 0.1 mL per 1 kg body weight. The recommended dose is 4 mg/kg. This dose may be repeated on the first day, then once daily for 3–5 days. For metritis in mares: 40–50 mL diluted with 200–500 mL saline solution, administered intrauterinely once daily for 3–5 days. For cattle, sheep and goats: 4 mL diluted with 20 mL saline solution and administered intrauterinely once only.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Hypersensitivity reactions.",
                "High and prolonged administration may result in neurotoxicity, ototoxicity or nephrotoxicity."
            ],

            interactions: [
                "Furosemide",
                "Penicillins",
                "Other aminoglycosides"
            ],

            withdrawal: [
                "Meat: 28 days",
                "Milk: 3 days"
            ],

            warnings: [
                "Do not administer during pregnancy.",
                "Do not administer to puppies or kittens.",
                "In pyometritis, the uterus should be evacuated before infusion.",
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store in a dark place at 15–30°C and keep out of reach of children.",

            packing:
                "50 or 100 mL."
        },


        ar: {
            dosageForm: "محلول للحقن",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار، الخيول، الأغنام، الدواجن، الكلاب والقطط",

            composition: [
                "جنتاميسين (على هيئة سلفات) — 50 ملغ / مل"
            ],

            indications:
                "يُستخدم الجنتاميسين لعلاج الالتهابات الناتجة عن السلالات الحساسة من الكائنات الدقيقة مثل الزائفة الزنجارية (Pseudomonas aeruginosa)، والإشريكية القولونية (Escherichia coli)، والمكورات العنقودية (Staphylococcus). كما يتميز بفعالية عالية ضد نطاق واسع من البكتيريا الهوائية.",

            contraindications:
                "لا يُستخدم في الحيوانات التي تعاني من فرط الحساسية للجنتاميسين، أو في الحيوانات التي تعاني من قصور شديد في وظائف الكبد و/أو الكلى.",

            dosage:
                "الأبقار والخيول والأغنام: 4 مل لكل 50 كغ من وزن الجسم. الدواجن: 0.1 مل لكل 1 كغ من وزن الجسم عن طريق الحقن تحت الجلد. الكلاب والقطط: 0.1 مل لكل 1 كغ من وزن الجسم. الجرعة الموصى بها هي 4 ملغ/كغ، ويمكن تكرار هذه الجرعة في اليوم الأول، ثم تعطى مرة واحدة يوميًا لمدة 3–5 أيام. في حالات التهاب الرحم عند الأفراس: 40–50 مل تُخفف باستخدام 200–500 مل من المحلول الملحي، وتُعطى داخل الرحم مرة واحدة يوميًا لمدة 3–5 أيام. في الأبقار والأغنام والماعز: 4 مل تُخفف باستخدام 20 مل من المحلول الملحي وتُعطى داخل الرحم لمرة واحدة فقط.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من فتح العبوة لأول مرة.",

            sideEffects: [
                "تفاعلات فرط الحساسية.",
                "قد يؤدي الاستخدام بجرعات مرتفعة أو لفترة طويلة إلى السُمية العصبية أو السُمية الأذنية أو السُمية الكلوية."
            ],

            interactions: [
                "الفوروسيميد",
                "البنسلينات",
                "الأمينوغليكوزيدات الأخرى"
            ],

            withdrawal: [
                "اللحوم: 28 يومًا",
                "الحليب: 3 أيام"
            ],

            warnings: [
                "لا يُعطى أثناء فترة الحمل.",
                "لا يُعطى لصغار الكلاب والقطط.",
                "في حالات التهاب الرحم القيحي، يجب تفريغ الرحم قبل إعطاء العلاج داخل الرحم.",
                "لا يُخلط مع أي مستحضرات دوائية أخرى مخصصة للحقن."
            ],

            storage:
                "يُحفظ في مكان معتم بدرجة حرارة من 15 إلى 30°م وبعيدًا عن متناول الأطفال.",

            packing:
                "عبوات سعة 50 أو 100 مل."
        }

    }
},


/* =====================================================
   GENTAMOXINE
===================================================== */

{
    name: "Gentamoxine",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/GentaMoxine.png",

    details: {

        en: {
            dosageForm: "Injectable suspension, deep I.M.",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle, horses, sheep and goats",

            composition: [
                "Amoxicillin trihydrate — 150 mg / mL",
                "Gentamycin (as sulphate) — 40 mg / mL"
            ],

            indications:
                "Cattle: pneumonia, diarrhoea, bacterial enteritis, mastitis, metritis and cutaneous abscesses. Sheep and goats: pneumonia, diarrhoea, bacterial enteritis, pasteurellosis and colibacillosis. Horses: pneumonia, diarrhoea, bacterial enteritis, genito-urinary infections, strangles, cutaneous abscesses and foot infections.",

            contraindications:
                "Do not use in animals with hypersensitivity to gentamycin, penicillins or cephalosporins, or in animals with serious impairment of liver and/or renal function. Do not use in sheep producing milk for human consumption.",

            dosage:
                "Shake well before use. Administer by deep intramuscular injection. Sheep and goats: 5–10 mL per adult animal daily and 1–5 mL per young animal daily. Cattle: 30–40 mL per adult animal daily and 10–15 mL per calf daily. Horses: 30–50 mL per adult animal daily and 5–15 mL per foal daily. General dose: 1 mL per 10 kg body weight daily for 3 days.",

            afterOpening:
                "Not specified in the leaflet.",

            sideEffects: [
                "Hypersensitivity reactions.",
                "Minor irritation at the injection site may occur.",
                "High and prolonged administration may result in neuromuscular blockade, ototoxicity or nephrotoxicity."
            ],

            interactions: [
                "Furosemide",
                "Phenylbutazone",
                "Salicylates",
                "Sulfonamides",
                "Muscle relaxants",
                "Other aminoglycosides",
                "Erythromycin",
                "Macrolides",
                "Tetracyclines",
                "Lincosamides",
                "Nephrotoxic preparations",
                "Ototoxic preparations",
                "NSAIDs",
                "Iron supplements",
                "Calcium supplements"
            ],

            withdrawal: [
                "Meat: 30 days",
                "Milk: 2 days",
                "Cow milk: 5 days"
            ],

            warnings: [
                "Do not administer during pregnancy.",
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store at 15–30°C and protect from light.",

            packing:
                "50 and 100 mL."
        },


        ar: {
            dosageForm: "معلّق للحقن العضلي العميق",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار، الخيول، الأغنام والماعز",

            composition: [
                "أموكسيسيلين ثلاثي الهيدرات — 150 ملغ / مل",
                "جنتاميسين (على هيئة سلفات) — 40 ملغ / مل"
            ],

            indications:
                "الأبقار: الالتهاب الرئوي، الإسهال، التهاب الأمعاء البكتيري، التهاب الضرع، التهاب الرحم والخراجات الجلدية. الأغنام والماعز: الالتهاب الرئوي، الإسهال، التهاب الأمعاء البكتيري، الباستريلا وداء العصيات القولونية. الخيول: الالتهاب الرئوي، الإسهال، التهاب الأمعاء البكتيري، التهابات الجهاز البولي التناسلي، خناق الخيل، الخراجات الجلدية والتهابات القدم.",

            contraindications:
                "لا يُستخدم في الحيوانات التي تعاني من فرط الحساسية للجنتاميسين أو البنسلينات أو السيفالوسبورينات، ولا في الحيوانات التي تعاني من قصور شديد في وظائف الكبد و/أو الكلى. كما لا يُستخدم في الأغنام المنتجة للحليب المخصص للاستهلاك البشري.",

            dosage:
                "يُرجّ جيدًا قبل الاستعمال ويُعطى عن طريق الحقن العضلي العميق. الأغنام والماعز: 5–10 مل للحيوان البالغ يوميًا و1–5 مل للحيوان الصغير يوميًا. الأبقار: 30–40 مل للحيوان البالغ يوميًا و10–15 مل للعجل يوميًا. الخيول: 30–50 مل للحيوان البالغ يوميًا و5–15 مل للمهر يوميًا. الجرعة العامة: 1 مل لكل 10 كغ من وزن الجسم يوميًا لمدة 3 أيام.",

            afterOpening:
                "لم تُذكر مدة الاستخدام بعد فتح العبوة في النشرة.",

            sideEffects: [
                "تفاعلات فرط الحساسية.",
                "قد يحدث تهيج بسيط في موضع الحقن.",
                "قد يؤدي الاستخدام بجرعات مرتفعة أو لفترة طويلة إلى الحصر العصبي العضلي أو السُمية الأذنية أو السُمية الكلوية."
            ],

            interactions: [
                "الفوروسيميد",
                "فينيل بيوتازون",
                "الساليسيلات",
                "السلفوناميدات",
                "مرخيات العضلات",
                "الأمينوغليكوزيدات الأخرى",
                "الإريثرومايسين",
                "الماكروليدات",
                "التتراسيكلينات",
                "اللينكوساميدات",
                "المستحضرات ذات السُمية الكلوية",
                "المستحضرات ذات السُمية الأذنية",
                "مضادات الالتهاب غير الستيرويدية",
                "مكملات الحديد",
                "مكملات الكالسيوم"
            ],

            withdrawal: [
                "اللحوم: 30 يومًا",
                "الحليب: يومان",
                "حليب الأبقار: 5 أيام"
            ],

            warnings: [
                "لا يُعطى أثناء فترة الحمل.",
                "لا يُخلط مع أي مستحضرات دوائية أخرى."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م وبعيدًا عن الضوء.",

            packing:
                "عبوات سعة 50 و100 مل."
        }

    }
},


/* =====================================================
   IVOMECTIN 1%
===================================================== */

{
    name: "Ivomectin 1%",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Ivomectin1%.png",

    details: {

        en: {
            dosageForm: "S.C. injectable solution",
            pack: "50, 100 or 500 mL",
            targetSpecies: "Cattle and sheep",

            composition: [
                "Ivermectin — 10 mg / mL"
            ],

            indications:
                "For the treatment of internal and external parasites in cattle and sheep, including harmful species of gastrointestinal roundworms, lungworms, grubs, sucking lice and mange mites.",

            contraindications:
                "Not specified in the leaflet.",

            dosage:
                "Administer only by subcutaneous injection at a dose of 200 micrograms ivermectin per kg body weight, equivalent to 1 mL per 50 kg body weight. Using a sterile needle, inject subcutaneously under the loose skin in front of or behind the shoulder in cattle, and in the neck in sheep.",

            afterOpening:
                "Use within 28 days after withdrawal of the first dose.",

            sideEffects: [
                "Transient discomfort has been observed in some cattle following subcutaneous administration.",
                "A low incidence of soft-tissue swelling at the injection site has been observed.",
                "These reactions disappear with time without treatment."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "Slaughter: 35 days",
                "Do not use in cattle or sheep producing milk for human consumption.",
                "Do not use in lactating cows or within 28 days prior to calving."
            ],

            warnings: [
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store at 15–30°C in a dark place and keep out of reach of children.",

            packing:
                "50, 100 and 500 mL."
        },


        ar: {
            dosageForm: "محلول للحقن تحت الجلد",
            pack: "50 أو 100 أو 500 مل",
            targetSpecies: "الأبقار والأغنام",

            composition: [
                "إيفرمكتين — 10 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج الطفيليات الداخلية والخارجية في الأبقار والأغنام، بما في ذلك الأنواع الضارة من الديدان المعوية المستديرة، وديدان الرئة، ويرقات الذباب، والقمل الماص للدم، وعث الجرب."
            ,

            contraindications:
                "لم تُذكر موانع استعمال في النشرة.",

            dosage:
                "يُعطى عن طريق الحقن تحت الجلد فقط بجرعة 200 ميكروغرام من الإيفرمكتين لكل كغ من وزن الحيوان، أي ما يعادل 1 مل لكل 50 كغ من وزن الجسم. باستخدام إبرة معقمة، يُحقن الدواء تحت الجلد الرخو أمام أو خلف الكتف في الأبقار، وفي منطقة الرقبة عند الأغنام.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من تاريخ سحب الجرعة الأولى.",

            sideEffects: [
                "لوحظ شعور مؤقت بعدم الارتياح لدى بعض الأبقار بعد الحقن تحت الجلد.",
                "قد يحدث في حالات قليلة تورم بسيط في الأنسجة الرخوة في موضع الحقن.",
                "تختفي هذه التفاعلات مع الوقت دون الحاجة إلى علاج."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "الذبح: 35 يومًا بعد آخر علاج",
                "لا يُستخدم في الأبقار أو الأغنام المنتجة للحليب المخصص للاستهلاك البشري.",
                "لا يُستخدم في الأبقار المرضعة أو خلال 28 يومًا قبل الولادة."
            ],

            warnings: [
                "لا يُخلط مع أي مستحضرات دوائية أخرى مخصصة للحقن."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م في مكان معتم وبعيدًا عن متناول الأطفال.",

            packing:
                "عبوات سعة 50 و100 و500 مل."
        }

    }
},

    {
        name: "Levasole",
        category: "injectables",
        categoryEn: "Injectables",
        categoryAr: "الحقن",
        image: "images/injectables/Levasole.png"
    },

    {
    name: "Marboseel 10%",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Marboseel 10%.png",

    details: {

        en: {
            dosageForm: "Injectable solution",
            pack: "50 or 100 mL",
            targetSpecies: "Calves and cattle",

            composition: [
                "Marbofloxacin — 100 mg / mL"
            ],

            indications:
                "For the treatment of respiratory infections caused by strains sensitive to marbofloxacin, including Pasteurella multocida, Pasteurella haemolytica and Mycoplasma bovis. Also indicated for treatment of acute mastitis caused by E. coli strains sensitive to marbofloxacin during lactation.",

            contraindications:
                "Do not use in bacterial infections resistant to other fluoroquinolones. Do not administer to animals previously found to be hypersensitive to marbofloxacin or other quinolones.",

            dosage:
                "Administer by intramuscular or subcutaneous injection. The first injection may be administered intravenously. Dose: 1 mL per 50 kg body weight once daily for 3–5 days.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Intramuscular administration may cause transient local reactions such as pain and swelling at the injection site.",
                "Inflammatory lesions may persist for at least 12 days after injection."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "Meat: 6 days",
                "Milk: 36 hours"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection.",
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store below 25°C, do not freeze, and protect from light.",

            packing:
                "50 and 100 mL amber glass vials."
        },


        ar: {
            dosageForm: "محلول للحقن",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار والعجول",

            composition: [
                "ماربوفلوكساسين — 100 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج التهابات الجهاز التنفسي الناتجة عن السلالات الحساسة للماربوفلوكساسين مثل باستوريلا ملتوسيدا، وباستوريلا هيموليتيكا، ومايكوبلازما بوفيس. كما يُستخدم لعلاج التهاب الضرع الحاد الناتج عن سلالات الإشريكية القولونية الحساسة للماربوفلوكساسين خلال فترة الرضاعة.",

            contraindications:
                "لا يُستخدم في الالتهابات البكتيرية المقاومة للفلوروكوينولونات الأخرى. كما لا يُعطى للحيوانات التي تعاني من فرط الحساسية للماربوفلوكساسين أو الكينولونات الأخرى.",

            dosage:
                "يُعطى عن طريق الحقن العضلي أو تحت الجلد، ويمكن إعطاء الجرعة الأولى عن طريق الوريد. الجرعة: 1 مل لكل 50 كغ من وزن الحيوان مرة واحدة يوميًا لمدة 3–5 أيام.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "قد يسبب الحقن العضلي تفاعلًا موضعيًا عابرًا مثل الألم والانتفاخ في موضع الحقن.",
                "قد تستمر الآفات الالتهابية لمدة 12 يومًا على الأقل بعد الحقن."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "اللحوم: 6 أيام",
                "الحليب: 36 ساعة"
            ],

            warnings: [
                "لا يُخلط مع أي دواء آخر مخصص للحقن.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م، ولا يُعرض للتجمد، وبعيدًا عن الضوء.",

            packing:
                "عبوات زجاجية بنية اللون سعة 50 و100 مل."
        }

    }
},

  {
    name: "Marboseel 2%",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Marboseel 2%.png",

    details: {

        en: {
            dosageForm: "Injectable solution",
            pack: "50 or 100 mL",
            targetSpecies: "Calves and cattle",

            composition: [
                "Marbofloxacin — 20 mg / mL"
            ],

            indications:
                "For the treatment of respiratory infections caused by strains sensitive to marbofloxacin, including Pasteurella multocida, Pasteurella haemolytica and Mycoplasma bovis. Also indicated for treatment of acute mastitis caused by E. coli strains sensitive to marbofloxacin during lactation.",

            contraindications:
                "Do not use in bacterial infections resistant to other fluoroquinolones. Do not administer to animals previously found to be hypersensitive to marbofloxacin or other quinolones.",

            dosage:
                "Administer by intramuscular or subcutaneous injection. The first injection may be administered intravenously. Dose: 1 mL per 10 kg body weight once daily for 3–5 days.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Intramuscular administration may cause transient local reactions such as pain and swelling at the injection site.",
                "Inflammatory lesions may persist for at least 12 days after injection."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "Meat: 6 days",
                "Milk: 36 hours"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection.",
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store below 25°C, do not freeze, and protect from light.",

            packing:
                "50 and 100 mL amber glass vials."
        },


        ar: {
            dosageForm: "محلول للحقن",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار والعجول",

            composition: [
                "ماربوفلوكساسين — 20 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج التهابات الجهاز التنفسي الناتجة عن السلالات الحساسة للماربوفلوكساسين مثل باستوريلا ملتوسيدا، وباستوريلا هيموليتيكا، ومايكوبلازما بوفيس. كما يُستخدم لعلاج التهاب الضرع الحاد الناتج عن سلالات الإشريكية القولونية الحساسة للماربوفلوكساسين خلال فترة الرضاعة.",

            contraindications:
                "لا يُستخدم في الالتهابات البكتيرية المقاومة للفلوروكوينولونات الأخرى. كما لا يُعطى للحيوانات التي تعاني من فرط الحساسية للماربوفلوكساسين أو الكينولونات الأخرى.",

            dosage:
                "يُعطى عن طريق الحقن العضلي أو تحت الجلد، ويمكن إعطاء الجرعة الأولى عن طريق الوريد. الجرعة: 1 مل لكل 10 كغ من وزن الحيوان مرة واحدة يوميًا لمدة 3–5 أيام.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "قد يسبب الحقن العضلي تفاعلًا موضعيًا عابرًا مثل الألم والانتفاخ في موضع الحقن.",
                "قد تستمر الآفات الالتهابية لمدة 12 يومًا على الأقل بعد الحقن."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "اللحوم: 6 أيام",
                "الحليب: 36 ساعة"
            ],

            warnings: [
                "لا يُخلط مع أي دواء آخر مخصص للحقن.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م، ولا يُعرض للتجمد، وبعيدًا عن الضوء.",

            packing:
                "عبوات زجاجية بنية اللون سعة 50 و100 مل."
        }

    }
},
    
{
    name: "Ogmavet",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Ogmavit.png",

    details: {

        en: {
            dosageForm: "I.M. injectable suspension",
            pack: "50 mL",
            targetSpecies: "Cattle",

            composition: [
                "Amoxicillin (as trihydrate) — 140 mg / mL",
                "Clavulanic acid (as potassium clavulanate) — 35 mg / mL"
            ],

            indications:
                "Active against a wide range of bacteria, including strains resistant to amoxicillin. Indicated for respiratory infections, soft tissue infections such as joint-ill, navel-ill and abscesses, metritis and mastitis.",

            contraindications:
                "Do not use in animals hypersensitive to penicillins or cephalosporins, or in animals with renal impairment. Do not use in sheep producing milk for human consumption. Do not administer to rabbits. Caution is advised in other small herbivores.",

            dosage:
                "Shake well before use. Massage the injection site after injection. The product is water-sensitive, therefore use a dry syringe. Administer by intramuscular injection at a dose of 1 mL per 20 kg body weight once daily for 3–5 days.",

            afterOpening:
                "Use within 28 days after withdrawal of the first dose.",

            sideEffects: [
                "Hypersensitivity reactions may occur.",
                "Minor irritation at the injection site may occur."
            ],

            interactions: [
                "Tetracyclines",
                "Macrolides",
                "Cloxacillin",
                "Aminoglycosides",
                "Phenylbutazone",
                "Salicylates",
                "Sulfonamides",
                "Weak acids",
                "Other substances of the beta-lactam group"
            ],

            withdrawal: [
                "Meat: 42 days",
                "Milk: 60 hours / 5 milkings"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store at 2–8°C and protect from light.",

            packing:
                "50 mL."
        },


        ar: {
            dosageForm: "معلّق للحقن العضلي",
            pack: "50 مل",
            targetSpecies: "الأبقار",

            composition: [
                "أموكسيسيلين (ثلاثي الهيدرات) — 140 ملغ / مل",
                "حمض الكلافولانيك (على هيئة كلافولانات البوتاسيوم) — 35 ملغ / مل"
            ],

            indications:
                "مضاد فعال ضد نطاق واسع من البكتيريا، بما فيها السلالات المقاومة للأموكسيسيلين. يُستخدم لعلاج إصابات الجهاز التنفسي، وإصابات الأنسجة الرخوة مثل التهاب المفاصل والتهاب السرة والخراجات، وكذلك التهاب الرحم والتهاب الضرع.",

            contraindications:
                "لا يُستخدم في الحيوانات التي تعاني من فرط الحساسية للبنسلينات أو السيفالوسبورينات، أو في حالات قصور وظائف الكلى. لا يُستخدم في الأغنام المنتجة للحليب المخصص للاستهلاك البشري. لا يُعطى للأرانب، ويجب توخي الحذر عند استخدامه للحيوانات العاشبة الصغيرة الأخرى.",

            dosage:
                "تُخض العبوة جيدًا قبل الاستخدام، ويُنصح بتدليك موضع الحقن بعد إعطاء الجرعة. المستحضر حساس للماء، لذلك يجب استخدام محقنة جافة. يُعطى عن طريق الحقن العضلي بجرعة 1 مل لكل 20 كغ من وزن الحيوان مرة واحدة يوميًا لمدة 3–5 أيام.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من تاريخ سحب الجرعة الأولى.",

            sideEffects: [
                "قد تحدث تفاعلات فرط الحساسية.",
                "قد يحدث تهيج بسيط في موضع الحقن."
            ],

            interactions: [
                "التتراسيكلينات",
                "الماكروليدات",
                "كلوكساسيلين",
                "الأمينوغليكوزيدات",
                "فينيل بيوتازون",
                "الساليسيلات",
                "السلفوناميدات",
                "الأحماض الضعيفة",
                "المستحضرات الأخرى من مجموعة البيتا-لاكتام"
            ],

            withdrawal: [
                "اللحوم: 42 يومًا",
                "الحليب: 60 ساعة / 5 حلبات"
            ],

            warnings: [
                "لا يُخلط المستحضر مع أي أدوية أخرى مخصصة للحقن."
            ],

            storage:
                "يُحفظ في درجة حرارة من 2 إلى 8°م وبعيدًا عن الضوء.",

            packing:
                "عبوة سعة 50 مل."
        }

    }
},


/* =====================================================
   NOVAJECT 500
===================================================== */

{
    name: "Novaject 500",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Novaject.png",

    details: {

        en: {
            dosageForm: "I.M. or slow I.V. injectable solution",
            pack: "100 mL",
            targetSpecies: "Cattle, horses and dogs",

            composition: [
                "Dipyrone — 500 mg / mL"
            ],

            indications:
                "For the treatment of pain, spasms and fever, such as in cases of colic, oesophageal obstruction and other spasm-like conditions of the abdominal organs, as well as paresis. It is also indicated for rheumatic conditions such as acute and chronic arthritis, neuritis and neuralgia.",

            contraindications:
                "Do not use in cases of hypersensitivity to the active substance, in animals producing milk for human consumption, in animals with hepatic or renal dysfunction, in pregnant or lactating animals, or in animals with blood dyscrasias.",

            dosage:
                "Administer by intramuscular or slow intravenous injection. Horses: 20–50 mL, intravenous only. Foals: 5–15 mL, intravenous only. Dogs: 1–3 mL. Cattle: 20–40 mL. If necessary, injections may be repeated on the same day at intervals of at least 8 hours.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Overdosage may cause convulsions.",
                "Prolonged use may cause leucopenia.",
                "Irritation may occur after subcutaneous administration."
            ],

            interactions: [
                "Phenylbutazone",
                "Barbiturates",
                "Chlorpromazine hydrochloride"
            ],

            withdrawal: [
                "Meat: 18 days",
                "Milk: 2.5 days / 5 milkings"
            ],

            warnings: [
                "Do not mix with other medicinal products.",
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store below 25°C and protect from light.",

            packing:
                "100 mL amber glass vial."
        },


        ar: {
            dosageForm: "محلول للحقن العضلي أو الوريدي البطيء",
            pack: "100 مل",
            targetSpecies: "الأبقار، الخيول والكلاب",

            composition: [
                "ديبيرون — 500 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج الألم والتشنجات والحمى، مثل حالات المغص وانسداد المريء والحالات التشنجية الأخرى في أعضاء البطن، وكذلك حالات الشلل الجزئي. كما يُستخدم في الحالات الروماتيزمية مثل التهاب المفاصل الحاد والمزمن، والتهاب الأعصاب والألم العصبي.",

            contraindications:
                "لا يُستخدم في حالات فرط الحساسية للمادة الفعالة، أو في الحيوانات المنتجة للحليب المخصص للاستهلاك البشري، أو الحيوانات التي تعاني من قصور في وظائف الكبد أو الكلى، أو أثناء الحمل والرضاعة، أو في الحيوانات المصابة باضطرابات دموية.",

            dosage:
                "يُعطى عن طريق الحقن العضلي أو الحقن الوريدي البطيء. الخيول: 20–50 مل عن طريق الوريد فقط. الأمهار: 5–15 مل عن طريق الوريد فقط. الكلاب: 1–3 مل. الأبقار: 20–40 مل. عند الحاجة يمكن تكرار الحقن في اليوم نفسه على أن يكون الفاصل بين الجرعات 8 ساعات على الأقل.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من فتح العبوة لأول مرة.",

            sideEffects: [
                "قد تؤدي الجرعات الزائدة إلى حدوث تشنجات.",
                "قد يؤدي الاستخدام المطوّل إلى نقص كريات الدم البيضاء.",
                "قد يحدث تهيج عند إعطاء المستحضر تحت الجلد."
            ],

            interactions: [
                "فينيل بيوتازون",
                "الباربيتورات",
                "كلوربرومازين هيدروكلورايد"
            ],

            withdrawal: [
                "اللحوم: 18 يومًا",
                "الحليب: يومان ونصف / 5 حلبات"
            ],

            warnings: [
                "لا يُخلط مع مستحضرات دوائية أخرى.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م وبعيدًا عن الضوء.",

            packing:
                "قارورة زجاجية كهرمانية سعة 100 مل."
        }

    }
},


/* =====================================================
   OXY-JECT 10%
===================================================== */

{
    name: "Oxy-Ject 10%",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Oxy-Ject 10%.png",

    details: {

        en: {
            dosageForm: "I.M. or I.V. injectable solution",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle, horses and sheep",

            composition: [
                "Oxytetracycline HCl — 100 mg / mL"
            ],

            indications:
                "For the treatment of infections caused by microorganisms susceptible to oxytetracycline, including respiratory infections, gastroenteritis, metritis, mastitis, salmonellosis, dysentery, foot rot, sinusitis, urinary tract infections, mycoplasmosis, chronic respiratory disease (CRD), blue comb, shipping fever and liver abscesses.",

            contraindications:
                "Do not use in cases of hypersensitivity to tetracyclines, liver or renal insufficiency, in combination with penicillins or cephalosporins, or in stressed horses.",

            dosage:
                "Dose: 5–10 mg/kg body weight, equivalent to 0.5–1 mL per 10 kg body weight, daily. Administer by intramuscular or slow intravenous injection in cattle and sheep. In horses, administer only by slow intravenous injection.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Severe and even fatal diarrhoea may occur in horses receiving tetracycline, especially if they are severely stressed or critically ill."
            ],

            interactions: [
                "Concomitant use with penicillins or cephalosporins is listed under contraindications in the leaflet."
            ],

            withdrawal: [
                "Meat: 20 days",
                "Milk: 4 days"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store below 25°C and protect from light.",

            packing:
                "50 or 100 mL amber glass vial."
        },


        ar: {
            dosageForm: "محلول للحقن العضلي أو الوريدي",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار، الأغنام والخيول",

            composition: [
                "أوكسي تتراسيكلين هيدروكلورايد — 100 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج الالتهابات البكتيرية الناتجة عن الكائنات الدقيقة الحساسة للأوكسي تتراسيكلين، مثل التهابات الجهاز التنفسي، والتهاب المعدة والأمعاء، والتهاب الرحم، والتهاب الضرع، والسالمونيلا، والدوسنتاريا، وتعفن الظلف، والتهاب الجيوب الأنفية، والتهابات المسالك البولية، والمايكوبلازما، والمرض التنفسي المزمن (CRD)، والعرف الأزرق، وحمى النقل وخراجات الكبد.",

            contraindications:
                "لا يُستخدم في حالات فرط الحساسية للتتراسيكلينات، أو في حالات القصور في وظائف الكبد أو الكلى، أو بالتزامن مع البنسلينات أو السيفالوسبورينات، أو في حالات الإجهاد الشديد لدى الخيول.",

            dosage:
                "الجرعة: 5–10 ملغ لكل كغ من وزن الجسم، أي ما يعادل 0.5–1 مل لكل 10 كغ من وزن الجسم يوميًا. يُعطى عن طريق الحقن العضلي أو الوريدي البطيء للأبقار والأغنام، ويُعطى للخيول عن طريق الحقن الوريدي البطيء فقط.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من فتح العبوة لأول مرة.",

            sideEffects: [
                "قد يحدث إسهال شديد وقد يكون قاتلًا في الخيول التي تتلقى التتراسيكلين، خاصة إذا كانت تحت إجهاد شديد أو في حالة مرضية حرجة."
            ],

            interactions: [
                "ورد في النشرة ضمن موانع الاستعمال عدم استخدام المستحضر بالتزامن مع البنسلينات أو السيفالوسبورينات."
            ],

            withdrawal: [
                "اللحوم: 20 يومًا",
                "الحليب: 4 أيام"
            ],

            warnings: [
                "لا يُخلط مع أي مستحضرات دوائية أخرى مخصصة للحقن."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م وبعيدًا عن الضوء.",

            packing:
                "قارورة زجاجية كهرمانية سعة 50 أو 100 مل."
        }

    }
},


/* =====================================================
   OXY-JECT LA-20%
===================================================== */

{
    name: "Oxy-Ject LA-20%",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Oxy-ject LA-20%.png",

    details: {

        en: {
            dosageForm: "I.M. injectable solution",
            pack: "100 mL",
            targetSpecies: "Cattle, sheep and goats",

            composition: [
                "Oxytetracycline (as HCl) — 200 mg / mL"
            ],

            indications:
                "In cattle: for the treatment of pneumonia, arthritis, shipping fever, keratoconjunctivitis (pinkeye), foot rot, diphtheria, bacterial enteritis (scours), wooden tongue, wound infections, mastitis and acute metritis caused by oxytetracycline-sensitive microorganisms. In sheep and goats: for the treatment of arthritis, gastrointestinal infections and respiratory infections caused by oxytetracycline-sensitive microorganisms.",

            contraindications:
                "Do not use in ewes producing milk for human consumption. Do not administer intravenously. Do not use in animals with impaired renal and/or liver function, in horses, dogs or cats, or in cases of hypersensitivity to the drug.",

            dosage:
                "Administer by deep intramuscular injection only. Dose: 20 mg/kg body weight, equivalent to 1 mL per 10 kg body weight, as a single administration. Maximum volume per injection site: cattle 20 mL; sheep and goats 5 mL.",

            afterOpening:
                "Not specified in the leaflet.",

            sideEffects: [
                "Hypersensitivity reactions may occur.",
                "A slight transient reaction may occur at the injection site."
            ],

            interactions: [
                "Penicillins",
                "Cephalosporins",
                "Aminoglycosides",
                "Methoxyflurane",
                "Preparations containing aluminium",
                "Preparations containing magnesium",
                "Preparations containing calcium",
                "Preparations containing iron",
                "Preparations containing zinc"
            ],

            withdrawal: [
                "Cow milk: 7 days",
                "Cattle meat: 28 days",
                "Sheep and goat meat: 21 days"
            ],

            warnings: [
                "Do not mix with other medicinal products.",
                "At extremely high tetracycline concentrations, healing of fractured bones may be impaired.",
                "Tetracyclines chelate calcium ions in teeth and bones."
            ],

            storage:
                "Store at 15–30°C in a dark place.",

            packing:
                "100 mL amber glass vial."
        },


        ar: {
            dosageForm: "محلول للحقن العضلي طويل المفعول",
            pack: "100 مل",
            targetSpecies: "الأبقار، الأغنام والماعز",

            composition: [
                "أوكسي تتراسيكلين (على هيئة هيدروكلورايد) — 200 ملغ / مل"
            ],

            indications:
                "في الأبقار: يُستخدم لعلاج الالتهاب الرئوي، والتهاب المفاصل، وحمى النقل، والتهاب القرنية والملتحمة (احمرار العين)، وتعفن الظلف، والدفتيريا، والتهاب الأمعاء البكتيري (الإسهال)، وتيبس اللسان، والتهابات الجروح، والتهاب الضرع والتهاب الرحم الحاد الناتجة عن الكائنات الدقيقة الحساسة للأوكسي تتراسيكلين. في الأغنام والماعز: يُستخدم لعلاج التهاب المفاصل، والتهابات الجهاز الهضمي والتهابات الجهاز التنفسي الناتجة عن الكائنات الدقيقة الحساسة للأوكسي تتراسيكلين.",

            contraindications:
                "لا يُستخدم في النعاج المنتجة للحليب المخصص للاستهلاك البشري. لا يُعطى عن طريق الوريد. لا يُستخدم في الحيوانات التي تعاني من قصور في وظائف الكلى و/أو الكبد، ولا في الخيول أو الكلاب أو القطط، ولا في حالات فرط الحساسية للدواء.",

            dosage:
                "يُعطى عن طريق الحقن العضلي العميق فقط. الجرعة: 20 ملغ لكل كغ من وزن الجسم، أي ما يعادل 1 مل لكل 10 كغ من وزن الحيوان، وتعطى كجرعة واحدة. الحد الأقصى للكمية في موضع الحقن الواحد: الأبقار 20 مل، والأغنام والماعز 5 مل.",

            afterOpening:
                "لم تُذكر مدة الاستخدام بعد فتح العبوة في النشرة.",

            sideEffects: [
                "قد تحدث تفاعلات فرط الحساسية.",
                "قد يظهر تفاعل بسيط وعابر في موضع الحقن."
            ],

            interactions: [
                "البنسلينات",
                "السيفالوسبورينات",
                "الأمينوغليكوزيدات",
                "الميثوكسي فلوران",
                "المستحضرات المحتوية على الألومنيوم",
                "المستحضرات المحتوية على المغنيسيوم",
                "المستحضرات المحتوية على الكالسيوم",
                "المستحضرات المحتوية على الحديد",
                "المستحضرات المحتوية على الزنك"
            ],

            withdrawal: [
                "حليب الأبقار: 7 أيام",
                "لحوم الأبقار: 28 يومًا",
                "لحوم الأغنام والماعز: 21 يومًا"
            ],

            warnings: [
                "لا يُخلط مع أي مستحضرات دوائية أخرى.",
                "قد تؤدي التراكيز العالية جدًا من التتراسيكلينات إلى إعاقة التئام كسور العظام.",
                "ترتبط التتراسيكلينات بأيونات الكالسيوم في الأسنان والعظام."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م في مكان معتم.",

            packing:
                "قارورة زجاجية كهرمانية سعة 100 مل."
        }

    }
},

  /* =====================================================
   PENSOL 20/20
===================================================== */

{
    name: "Pensol 20/20",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Pensole.png",

    details: {

        en: {
            dosageForm: "I.M. injectable suspension",
            pack: "50 or 100 mL",
            targetSpecies: "Cattle, horses, goats, sheep, dogs and cats",

            composition: [
                "Penicillin G procaine — 200,000 IU / mL",
                "Dihydrostreptomycin sulphate — 200 mg / mL"
            ],

            indications:
                "For the treatment of infections caused by bacteria sensitive to penicillin and streptomycin in cattle, horses, sheep, dogs and cats.",

            contraindications:
                "Do not use in animals sensitive to aminoglycosides, penicillins or cephalosporins; animals with cardiac insufficiency, shock or renal failure; rabbits, birds, bobby calves, puppies or kittens; or pregnant animals.",

            dosage:
                "Shake well before use. Administer by intramuscular injection. General dose: 1 mL per 20 kg body weight daily. Cattle and horses: 20–30 mL daily for 3–5 days. Calves, sheep and goats: 5–10 mL daily for 3–5 days. Lambs and dogs: 0.5–4 mL daily for 3–5 days. Cats: 0.5–1 mL daily for 3–5 days.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Occasional allergic reactions to penicillin may occur, but these are rare.",
                "Ototoxicity.",
                "Neuromuscular blockade.",
                "Nephrotoxicity.",
                "May decrease cardiac output and produce hypotension and bradycardia."
            ],

            interactions: [
                "Furosemide",
                "Salicylates",
                "Phenylbutazone",
                "Sulfonamides",
                "Indomethacin",
                "Erythromycin",
                "Tetracycline"
            ],

            withdrawal: [
                "Milk: 3 days",
                "Meat: 21 days"
            ],

            warnings: [
                "Not for use in lactating ewes producing milk for human consumption.",
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store in a dark place at 2–8°C.",

            packing:
                "50 or 100 mL clear glass vials in a box."
        },


        ar: {
            dosageForm: "معلّق للحقن العضلي",
            pack: "50 أو 100 مل",
            targetSpecies: "الأبقار، الخيول، الأغنام، الكلاب والقطط",

            composition: [
                "بنسلين جي بروكايين — 200,000 وحدة دولية / مل",
                "داي هيدروستربتومايسين سلفات — 200 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج الإصابات الناتجة عن البكتيريا الحساسة للبنسلين والستربتومايسين في الأبقار، الخيول، الأغنام، الكلاب والقطط.",

            contraindications:
                "لا يُستخدم في الحيوانات التي تعاني من حساسية للأمينوغليكوزيدات أو البنسلينات أو السيفالوسبورينات، أو الحيوانات التي تعاني من مشاكل قلبية أو كلوية، أو الأرانب والطيور وصغار العجول وصغار الكلاب والقطط، كما لا يُستخدم أثناء الحمل.",

            dosage:
                "يُخض جيدًا قبل الاستعمال ويُعطى عن طريق الحقن العضلي. الجرعة العامة: 1 مل لكل 20 كغ من وزن الحيوان. الأبقار والخيول: 20–30 مل يوميًا لمدة 3–5 أيام. العجول الصغيرة والأغنام والماعز: 5–10 مل يوميًا لمدة 3–5 أيام. الحملان والكلاب: 0.5–4 مل يوميًا لمدة 3–5 أيام. القطط: 0.5–1 مل يوميًا لمدة 3–5 أيام.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا بعد فتح العبوة.",

            sideEffects: [
                "قد تحدث أحيانًا تفاعلات حساسية للبنسلين.",
                "سُمية أذنية.",
                "حصر عصبي عضلي.",
                "سُمية كلوية.",
                "قد يحدث انخفاض في النتاج القلبي وضغط الدم وبطء في ضربات القلب."
            ],

            interactions: [
                "الفوروسيميد",
                "الساليسيلات",
                "فينيل بيوتازون",
                "السلفوناميدات",
                "إندوميثاسين",
                "الإريثرومايسين",
                "التتراسيكلين"
            ],

            withdrawal: [
                "الحليب: 3 أيام",
                "اللحوم: 21 يومًا"
            ],

            warnings: [
                "لا يُستخدم للنعاج المنتجة للحليب المخصص للاستهلاك البشري.",
                "لا يُخلط الدواء مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في مكان معتم على درجة حرارة 2–8°م.",

            packing:
                "عبوات زجاجية شفافة سعة 50 أو 100 مل داخل علبة."
        }

    }
},


/* =====================================================
   PREDNIJECT 2.5%
===================================================== */

{
    name: "PredniJect 2.5%",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/PredniJect 2.5%.png",

    details: {

        en: {
            dosageForm: "Injectable suspension",
            pack: "10 or 50 mL",
            targetSpecies: "Horses and ponies, cattle, sheep, goats, calves, dogs and cats",

            composition: [
                "Prednisolone acetate — 25 mg / mL"
            ],

            indications:
                "Ketosis (acetonemia) in cattle; urticaria, stress, shock and allergic reactions; inflammatory joint lesions; periarthritis, bursitis, tendinitis, tendovaginitis, lymphangitis, laminitis and total weakness.",

            contraindications:
                "Diabetes mellitus, osteoporosis, existing local or systemic viral infections, pregnancy, fungal infections, renal disease, laminitis, cardiac or hepatic insufficiency, stomach disorders and glaucoma.",

            dosage:
                "Administer by intramuscular or intra-articular injection. Intramuscularly: horses and cattle 4–8 mL; sheep and goats 0.5–3 mL; foals and calves 0.5–3 mL; dogs and cats 0.5–2 mg prednisolone acetate per kg body weight per day. For intra-articular administration, first remove from the joint a quantity of fluid equal to the volume to be injected. Large animals: 1–3 mL. Small animals: 0.1–0.8 mL. Shake well before use.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Polydipsia",
                "Polyuria",
                "Polyphagia",
                "Hypokalemia",
                "Calcinosis cutis",
                "Immune suppression",
                "Delayed wound healing",
                "Gastrointestinal ulceration",
                "Hepatomegaly",
                "Vomiting",
                "Neurotoxicity",
                "Renal dysfunction",
                "Neuromuscular blockade"
            ],

            interactions: [
                "NSAIDs",
                "Diuretics",
                "Aspirin",
                "Vaccines"
            ],

            withdrawal: [
                "Milk: 72 hours",
                "Meat: 6 days"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection.",
                "Keep out of reach of children.",
                "For veterinary use only.",
                "Prescription only medicine."
            ],

            storage:
                "Store below 25°C and protect from light.",

            packing:
                "10 and 50 mL Type II amber glass vials."
        },


        ar: {
            dosageForm: "معلّق للحقن",
            pack: "10 أو 50 مل",
            targetSpecies: "الخيول والمهور، الأبقار، الأغنام، الماعز، العجول، الكلاب والقطط",

            composition: [
                "بريدنيزولون أسيتات — 25 ملغ / مل"
            ],

            indications:
                "الكيتوزيس في الأبقار، الحكة، التوتر، الصدمة وردود الفعل التحسسية، والتهابات المفاصل، والتهاب حول المفصل، والتهاب الجراب، والتهاب الأوتار، والتهاب غمد الوتر، والتهاب الأوعية اللمفاوية، والتهاب الصفيحة والضعف العام.",

            contraindications:
                "داء السكري، هشاشة العظام، وجود عدوى فيروسية موضعية أو جهازية، الحمل، العدوى الفطرية، أمراض الكلى، التهاب الصفيحة، قصور القلب والكبد، اضطرابات المعدة والجلوكوما.",

            dosage:
                "يُعطى عن طريق الحقن العضلي أو الحقن داخل المفصل. الحقن العضلي: الخيول والأبقار 4–8 مل، الأغنام والماعز 0.5–3 مل، الأمهار والعجول 0.5–3 مل، الكلاب والقطط 0.5–2 ملغ بريدنيزولون أسيتات لكل كغ من وزن الحيوان يوميًا. عند إعطائه داخل المفصل يجب أولًا إزالة كمية من سائل المفصل تساوي حجم الجرعة المراد حقنها. الحيوانات الكبيرة: 1–3 مل. الحيوانات الصغيرة: 0.1–0.8 مل. يُخض جيدًا قبل الاستخدام.",

            afterOpening:
                "يُستخدم الدواء خلال 28 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "زيادة العطش",
                "زيادة التبول",
                "زيادة الشهية",
                "نقص بوتاسيوم الدم",
                "تكلس الجلد",
                "تثبيط المناعة",
                "تأخر التئام الجروح",
                "تقرح الجهاز الهضمي",
                "تضخم الكبد",
                "القيء",
                "السُمية العصبية",
                "اختلال وظائف الكلى",
                "الحصر العصبي العضلي"
            ],

            interactions: [
                "مضادات الالتهاب غير الستيرويدية",
                "مدرات البول",
                "الأسبرين",
                "اللقاحات"
            ],

            withdrawal: [
                "الحليب: 72 ساعة",
                "اللحوم: 6 أيام"
            ],

            warnings: [
                "لا يُخلط الدواء مع أي أدوية أخرى.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط.",
                "يُصرف بوصفة طبية."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م وبعيدًا عن الضوء.",

            packing:
                "عبوات زجاجية بنية اللون نوع II سعة 10 و50 مل."
        }

    }
},


/* =====================================================
   TYLOJECT 100 & 200
===================================================== */

{
    name: "Tyloject 100 & 200",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Tyloject.png",

    details: {

        en: {
            dosageForm: "I.M. injectable solution",
            pack: "Tyloject 100: 50 mL | Tyloject 200: 50, 100 or 500 mL",
            targetSpecies: "Cattle, sheep and goats",

            composition: [
                "Tyloject 100: Tylosin (as tartrate) — 100 mg / mL",
                "Tyloject 200: Tylosin (as tartrate) — 200 mg / mL"
            ],

            indications:
                "Tylosin is effective against Gram-positive and Gram-negative bacteria. It is indicated for infections caused by microorganisms susceptible to tylosin, such as pneumonia, foot rot, diphtheria, mastitis and metritis in cattle, and pneumonia and arthritis in sheep and goats.",

            contraindications:
                "Do not use in animals hypersensitive to tylosin or in horses. Concurrent administration with penicillins, cephalosporins, quinolones, cycloserine, lincomycin or trimethoprim is contraindicated.",

            dosage:
                "Administer by intramuscular injection. Cattle: 5–10 mg/kg body weight daily for 3–5 days. Sheep and goats: 10 mg/kg body weight daily for 3–5 days. Do not inject more than 10 mL at one injection site.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Local irritation may occur after intramuscular administration and usually disappears within a few days.",
                "Diarrhoea",
                "Anorexia",
                "Skin sensitization"
            ],

            interactions: [
                "Tylosin may increase serum digitalis levels."
            ],

            withdrawal: [
                "Meat: 28 days",
                "Milk: 4 days"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store in a dark place at 15–30°C.",

            packing:
                "Tyloject 100: 50 mL vial. Tyloject 200: 50, 100 and 500 mL vials."
        },


        ar: {
            dosageForm: "محلول سائل للحقن العضلي",
            pack: "تايلوجكت 100: 50 مل | تايلوجكت 200: 50 أو 100 أو 500 مل",
            targetSpecies: "الأبقار والأغنام",

            composition: [
                "تايلوجكت 100: تايلوزين (على شكل طرطرات) — 100 ملغ / مل",
                "تايلوجكت 200: تايلوزين (على شكل طرطرات) — 200 ملغ / مل"
            ],

            indications:
                "التايلوزين فعال ضد البكتيريا موجبة وسالبة الغرام. ويُستخدم لعلاج الإصابات الناتجة عن الميكروبات الحساسة للتايلوزين، مثل التهاب الرئة، وتعفن الظلف، والدفتيريا، والتهاب الضرع والتهاب الرحم في الأبقار، والتهاب الرئة والتهاب المفاصل في الأغنام.",

            contraindications:
                "يُمنع استخدامه للحيوانات الحساسة للتايلوزين وكذلك للخيول. كما يُمنع استخدامه بالتزامن مع البنسلينات، والسيفالوسبورينات، والكينولونات، والسيكلوسيرين، واللينكومايسين والتريميثوبريم.",

            dosage:
                "يُعطى عن طريق الحقن العضلي. الأبقار: 5–10 ملغ لكل كغ من وزن الحيوان يوميًا لمدة 3–5 أيام. الأغنام: 10 ملغ لكل كغ من وزن الحيوان يوميًا لمدة 3–5 أيام. لا تُحقن كمية تزيد عن 10 مل في موضع الحقن الواحد.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "قد يحدث تهيج موضعي بعد الحقن العضلي ويختفي عادة خلال عدة أيام.",
                "الإسهال",
                "فقدان الشهية",
                "قد تحدث حساسية جلدية"
            ],

            interactions: [
                "قد يؤدي التايلوزين إلى رفع مستوى الديجيتاليس في مصل الدم."
            ],

            withdrawal: [
                "الذبح: 28 يومًا",
                "الحليب: 4 أيام"
            ],

            warnings: [
                "لا يُخلط الدواء مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في مكان معتم على درجة حرارة من 15 إلى 30°م.",

            packing:
                "تايلوجكت 100: عبوة 50 مل. تايلوجكت 200: عبوات 50 و100 و500 مل."
        }

    }
},

    {
    name: "Spincoject",
    category: "injectables",
    categoryEn: "Injectables",
    categoryAr: "الحقن",
    image: "images/injectables/Spincoject.png",

    details: {

        en: {
            dosageForm: "Injectable solution",
            pack: "100 mL",
            targetSpecies: "Calves, sheep, dogs, cats and poultry",

            composition: [
                "Spectinomycin (as sulphate) — 100 mg / mL",
                "Lincomycin (as HCl) — 50 mg / mL"
            ],

            indications:
                "For gastrointestinal and respiratory infections caused by microorganisms sensitive to lincomycin and spectinomycin, including Campylobacter, E. coli, Mycoplasma, Salmonella, Staphylococcus, Streptococcus and Treponema spp. in calves, cats, dogs, goats, poultry, sheep and turkeys.",

            contraindications:
                "Do not use in animals hypersensitive to lincomycin and/or spectinomycin, animals with impaired renal and/or liver function, newborn animals or animals with blood disorders. Do not use in laying birds producing eggs for human consumption.",

            dosage:
                "Administer by intramuscular injection, or subcutaneous injection in poultry and turkeys. Calves: 1 mL per 10 kg body weight for 4 days. Goats and sheep: 1 mL per 10 kg body weight for 3 days. Cats and dogs: 1 mL per 5 kg body weight for 3–5 days, with a maximum treatment duration of 21 days. Poultry and turkeys: 0.5 mL per 2.5 kg body weight for 3 days.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "Hypersensitivity reactions.",
                "Shortly after injection, slight pain, itching or diarrhea may occur.",
                "Ototoxicity and nephrotoxicity may occur."
            ],

            interactions: [
                "Penicillins",
                "Cephalosporins",
                "Quinolones",
                "Erythromycin",
                "Tetracycline",
                "Cycloserine",
                "Cyclosporine"
            ],

            withdrawal: [
                "Calves, goats and sheep — meat: 14 days",
                "Calves, goats and sheep — kidney and liver: 21 days",
                "Milk: 3 days",
                "Poultry and turkeys — meat: 7 days"
            ],

            warnings: [
                "Do not mix with other medicinal products for injection."
            ],

            storage:
                "Store below 25°C and protect from light.",

            packing:
                "100 mL clear glass vial."
        },


        ar: {
            dosageForm: "محلول سائل للحقن",
            pack: "100 مل",
            targetSpecies: "العجول، الأغنام، الكلاب، القطط والدواجن",

            composition: [
                "سبكتينومايسين (على هيئة سلفات) — 100 ملغ / مل",
                "لينكومايسين (على هيئة هيدروكلورايد) — 50 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج التهابات الجهاز الهضمي والجهاز التنفسي الناتجة عن الكائنات الدقيقة الحساسة للينكومايسين والسبكتينومايسين، مثل Campylobacter وE. coli وMycoplasma وSalmonella وStaphylococcus وStreptococcus وTreponema spp. في العجول والقطط والكلاب والماعز والدواجن والأغنام والديك الرومي.",

            contraindications:
                "لا يُستخدم في الحيوانات التي تعاني من فرط الحساسية للينكومايسين و/أو السبكتينومايسين، أو الحيوانات التي تعاني من قصور في وظائف الكلى و/أو الكبد، أو الحيوانات حديثة الولادة أو المصابة باضطرابات دموية. ولا يُستخدم في الدواجن البياضة المنتجة للبيض المخصص للاستهلاك البشري.",

            dosage:
                "يُعطى عن طريق الحقن العضلي، أو تحت الجلد في الدواجن والديك الرومي. العجول: 1 مل لكل 10 كغ من وزن الحيوان يوميًا لمدة 4 أيام. الأغنام والماعز: 1 مل لكل 10 كغ من وزن الحيوان يوميًا لمدة 3 أيام. الكلاب والقطط: 1 مل لكل 5 كغ من وزن الحيوان يوميًا لمدة 3–5 أيام، وبحد أقصى لمدة علاج تبلغ 21 يومًا. الدواجن والديك الرومي: 0.5 مل لكل 2.5 كغ من وزن الحيوان يوميًا لمدة 3 أيام.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "قد تحدث تفاعلات فرط الحساسية.",
                "قد يحدث بعد الحقن بفترة قصيرة ألم خفيف أو حكة أو إسهال.",
                "قد تحدث سُمية أذنية وسُمية كلوية."
            ],

            interactions: [
                "البنسلينات",
                "السيفالوسبورينات",
                "الكوينولونات",
                "الإريثرومايسين",
                "التتراسيكلين",
                "السيكلوسيرين",
                "السيكلوسبورين"
            ],

            withdrawal: [
                "العجول والأغنام والماعز — اللحوم: 14 يومًا",
                "العجول والأغنام والماعز — الكلى والكبد: 21 يومًا",
                "الحليب: 3 أيام",
                "الدواجن والديك الرومي — اللحوم: 7 أيام"
            ],

            warnings: [
                "لا يُخلط مع أي دواء آخر مخصص للحقن."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م وبعيدًا عن الضوء.",

            packing:
                "عبوة زجاجية شفافة سعة 100 مل."
        }

    }
},
    

    {
        name: "Tyloprim",
        category: "injectables",
        categoryEn: "Injectables",
        categoryAr: "الحقن",
        image: "images/injectables/Tyloprim.png"
    },

    {
        name: "Vit B1",
        category: "injectables",
        categoryEn: "Injectables",
        categoryAr: "الحقن",
        image: "images/injectables/Vit B1.png"
    },

    {
        name: "Vitalin K3",
        category: "injectables",
        categoryEn: "Injectables",
        categoryAr: "الحقن",
        image: "images/injectables/VitalinK3.png"
    },


    /* =====================================================
       POWDERS — 9 PRODUCTS
    ===================================================== */

    {
        name: "Ampicil 100%",
        category: "powders",
        categoryEn: "Powders",
        categoryAr: "المساحيق",
        image: "images/powders/Ampicil 100%.png"
    },

   {
    name: "C-100%",
    category: "powders",
    categoryEn: "Powders",
    categoryAr: "المساحيق",
    image: "images/powders/C100%.png",

    details: {

        en: {
            dosageForm: "Powder for oral administration through drinking water",
            pack: "1000 g",
            targetSpecies: "Poultry, calves, goats, sheep and cattle",

            composition: [
                "Ascorbic acid (Vitamin C) — 1000 mg / g"
            ],

            indications:
                "For the prevention or treatment of vitamin C deficiency in farm animals. Also used for the prevention or treatment of stress caused by vaccination, disease, transport, high humidity, high temperature or extreme temperature changes.",

            contraindications:
                "Not specified in the leaflet.",

            dosage:
                "Administer orally through drinking water. Medicated water should be used within 2 hours. Poultry: 100 g per 2000 litres of drinking water for 3–5 days. Calves, goats and sheep: 1 g per 200 kg body weight for 3–5 days. Cattle: 1 g per 400 kg body weight for 3–5 days.",

            afterOpening:
                "Not specified in the leaflet.",

            sideEffects: [
                "No undesirable effects are expected when the recommended dosage regimen is followed."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "No withdrawal period."
            ],

            warnings: [
                "Do not mix with other medicinal products.",
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store at 15–30°C, protected from sunlight and out of reach of children.",

            packing:
                "100 g in an HDPE jar."
        },


        ar: {
            dosageForm: "بودرة تضاف إلى ماء الشرب",
            pack: "100 غم",
            targetSpecies: "الدواجن، العجول، الأغنام والأبقار",

            composition: [
                "حمض الأسكوربيك (فيتامين ج) — 1000 ملغ / غم"
            ],

            indications:
                "يُستخدم للوقاية أو العلاج من نقص فيتامين C في حيوانات المزرعة، كما يُستخدم للوقاية أو العلاج من حالات الإجهاد الناتجة عن التطعيم، والأمراض، والنقل، والرطوبة العالية، ودرجات الحرارة المرتفعة أو التغيرات الشديدة في درجات الحرارة.",

            contraindications:
                "لم تُذكر موانع استعمال في النشرة.",

            dosage:
                "بودرة تضاف إلى ماء الشرب، ويجب استخدام الماء المحتوي على المستحضر خلال ساعتين من تحضيره. الدواجن: 100 غم لكل 2000 لتر من ماء الشرب لمدة 3–5 أيام. العجول والماعز والأغنام: 1 غم لكل 200 كغ من وزن الحيوان لمدة 3–5 أيام. الأبقار: 1 غم لكل 400 كغ من وزن الحيوان لمدة 3–5 أيام.",

            afterOpening:
                "لم تُذكر مدة الاستخدام بعد فتح العبوة في النشرة.",

            sideEffects: [
                "لا يُتوقع حدوث تأثيرات جانبية عند استخدام المستحضر حسب الجرعة الموصى بها."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "لا توجد فترة سحب."
            ],

            warnings: [
                "لا يُخلط مع أي أدوية أخرى.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م، بعيدًا عن أشعة الشمس وبعيدًا عن متناول الأطفال.",

            packing:
                "عبوة بلاستيكية من البولي إيثيلين عالي الكثافة سعة 100 غم."
        }

    }
},


   
{
    name: "Colistate 500",
    category: "powders",
    categoryEn: "Powders",
    categoryAr: "المساحيق",
    image: "images/powders/Colistate.png",

    details: {

        en: {
            dosageForm: "Water soluble powder",
            pack: "100 g",
            targetSpecies: "Poultry, calves and lambs",

            composition: [
                "Colistin Sulfate — 5,000,000 IU / g"
            ],

            indications:
                "For the treatment of gastrointestinal infections caused by microorganisms susceptible to colistin, such as Pseudomonas aeruginosa, E. coli and Salmonella in calves, lambs and poultry.",

            contraindications:
                "Do not use in animals with renal impairment, animals hypersensitive to colistin, animals with active microbial digestion, or pregnant and lactating animals.",

            dosage:
                "Administer orally through drinking water. Calves and lambs: 1 g per 80 kg body weight twice daily for 5–10 days. Poultry: 100 g per 1200 litres of drinking water for 3–5 days. Medicated drinking water should be used within 24 hours.",

            afterOpening:
                "Not specified in the leaflet.",

            sideEffects: [
                "Renal dysfunction.",
                "Neurotoxicity.",
                "Neuromuscular blockade."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "Meat: 7 days",
                "Eggs: 7 days"
            ],

            warnings: [
                "Do not mix with other medicinal products."
            ],

            storage:
                "Store at 15–30°C in a dark and dry place and keep out of reach of children.",

            packing:
                "100 g."
        },


        ar: {
            dosageForm: "بودرة سهلة الذوبان في الماء",
            pack: "100 غم",
            targetSpecies: "الدواجن، العجول والحملان",

            composition: [
                "كوليستين سلفات — 5,000,000 وحدة دولية / غم"
            ],

            indications:
                "يُستخدم لعلاج الالتهابات المعوية والمعدية الناتجة عن البكتيريا الحساسة للكوليستين، مثل Pseudomonas aeruginosa وE. coli وSalmonella في العجول والحملان والدواجن.",

            contraindications:
                "لا يُستخدم في الحالات التي تعاني من قصور في وظائف الكلى، أو في الحيوانات التي تعاني من فرط الحساسية للكوليستين، أو الحيوانات ذات الهضم الميكروبي النشط، أو أثناء الحمل والرضاعة.",

            dosage:
                "يُعطى عن طريق ماء الشرب. العجول والحملان: 1 غم لكل 80 كغ من وزن الحيوان مرتين يوميًا لمدة 5–10 أيام. الدواجن: 100 غم لكل 1200 لتر من ماء الشرب لمدة 3–5 أيام. يجب استخدام ماء الشرب المحتوي على الدواء خلال 24 ساعة.",

            afterOpening:
                "لم تُذكر مدة الاستخدام بعد فتح العبوة في النشرة.",

            sideEffects: [
                "قصور في وظائف الكلى.",
                "سُمية عصبية.",
                "حصر عصبي عضلي."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "اللحوم: 7 أيام",
                "البيض: 7 أيام"
            ],

            warnings: [
                "لا يُخلط الدواء مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م، في مكان جاف ومعتم وبعيدًا عن متناول الأطفال.",

            packing:
                "عبوة سعة 100 غم."
        }

    }
},



   {
    name: "Doxymed 100%",
    category: "powders",
    categoryEn: "Powders",
    categoryAr: "المساحيق",
    image: "images/powders/Doxymed 100%.png",

    details: {

        en: {
            dosageForm: "Water soluble powder",
            pack: "100 g",
            targetSpecies: "Poultry",

            composition: [
                "Doxycycline HCl — 1000 mg / g"
            ],

            indications:
                "For the treatment of bacterial infections caused by organisms susceptible to doxycycline, including Bordetella avium, Haemophilus paragallinarum, Mycoplasma spp., Pasteurella multocida and Ornithobacterium rhinotracheale. Resistance against E. coli may vary.",

            contraindications:
                "Do not use in animals hypersensitive to tetracyclines, animals with severely impaired liver function, or poultry producing eggs for human consumption.",

            dosage:
                "Administer through drinking water. Doxymed 100%: 50–100 g per 1000 litres of drinking water daily for 3–5 days.",

            afterOpening:
                "Use within 90 days after first opening. Medicated water should be used within 24 hours.",

            sideEffects: [
                "Hypersensitivity reactions.",
                "Tetracyclines may chelate calcium in bones."
            ],

            interactions: [
                "Penicillins",
                "Cephalosporins",
                "Quinolones",
                "Cycloserine",
                "Antidiarrhoeal preparations containing kaolin, pectin or bismuth may reduce tetracycline absorption.",
                "Medicines containing aluminium, magnesium or zinc, as well as laxatives, minerals and supplements, may reduce absorption of orally administered drugs.",
                "Tetracyclines may interfere with the bactericidal activity of aminoglycosides."
            ],

            withdrawal: [
                "Meat: 7 days"
            ],

            warnings: [
                "Medicated water should be consumed within 24 hours.",
                "For veterinary use only.",
                "Do not mix with other medicinal products."
            ],

            storage:
                "Store at 15–30°C in a dark and dry place.",

            packing:
                "100 g jar."
        },


        ar: {
            dosageForm: "بودرة سهلة الذوبان في الماء",
            pack: "100 غم",
            targetSpecies: "الدواجن",

            composition: [
                "دوكسيسيكلين هيدروكلوريد — 1000 ملغ / غم"
            ],

            indications:
                "يُستخدم لعلاج الالتهابات البكتيرية الناتجة عن البكتيريا الحساسة للدوكسيسيكلين، ومنها Bordetella avium وHaemophilus paragallinarum وسلالات Mycoplasma وPasteurella multocida وOrnithobacterium rhinotracheale. وقد تختلف مقاومة E. coli للدوكسيسيكلين.",

            contraindications:
                "لا يُستخدم في حالات فرط الحساسية للتتراسيكلينات، أو في الحيوانات التي تعاني من اضطراب شديد في وظائف الكبد، أو في الدواجن المنتجة للبيض المخصص للاستهلاك البشري.",

            dosage:
                "يُعطى عن طريق ماء الشرب. دوكسيميد 100%: 50–100 غم لكل 1000 لتر من ماء الشرب يوميًا لمدة 3–5 أيام.",

            afterOpening:
                "يُستخدم المستحضر خلال 90 يومًا من تاريخ فتح العبوة. ويجب استهلاك الماء المحتوي على العلاج خلال 24 ساعة.",

            sideEffects: [
                "قد تحدث تفاعلات فرط الحساسية.",
                "قد ترتبط التتراسيكلينات بالكالسيوم الموجود في العظام."
            ],

            interactions: [
                "البنسلينات",
                "السيفالوسبورينات",
                "الكوينولونات",
                "السيكلوسيرين",
                "المستحضرات المضادة للإسهال المحتوية على الكاولين أو البكتين أو البزموت قد تقلل من امتصاص التتراسيكلينات.",
                "الأدوية والمستحضرات المحتوية على الألمنيوم أو المغنيسيوم أو الزنك، وكذلك الملينات والمعادن والمكملات، قد تقلل من امتصاص الأدوية الفموية.",
                "قد تتداخل التتراسيكلينات مع التأثير القاتل للبكتيريا للأمينوغليكوزيدات."
            ],

            withdrawal: [
                "اللحوم: 7 أيام"
            ],

            warnings: [
                "يجب استخدام ماء الشرب المحتوي على العلاج خلال 24 ساعة.",
                "للاستخدام البيطري فقط.",
                "لا يُخلط مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م، في مكان جاف ومعتم.",

            packing:
                "عبوة سعة 100 غم."
        }

    }
},

    
{
    name: "Doxymed-Genta",
    category: "powders",
    categoryEn: "Powders",
    categoryAr: "المساحيق",
    image: "images/powders/Doxymed-Genta.png",

    details: {

        en: {
            dosageForm: "Powder for oral administration",
            pack: "200 g",
            targetSpecies: "Poultry, calves, sheep, goats and horses",

            composition: [
                "Gentamicin sulphate — 100 mg / g",
                "Doxycycline hyclate — 100 mg / g"
            ],

            indications:
                "For the treatment of infections caused by microorganisms susceptible to gentamicin and/or doxycycline in calves, sheep, goats, poultry and horses, especially gastrointestinal infections and respiratory tract infections.",

            contraindications:
                "Do not use in animals hypersensitive to aminoglycosides and/or tetracyclines, animals with renal dysfunction, vestibular or ear dysfunction, visual dysfunction, liver dysfunction, or animals with active microbial digestion.",

            dosage:
                "For oral administration. Medicated water should be used within 24 hours. Poultry: 150 g per 200 litres of drinking water daily for 3–5 days. Calves, sheep, goats and horses: 50 mg per kg body weight once or twice daily as required for 3–5 days.",

            afterOpening:
                "Use within 90 days after first opening.",

            sideEffects: [
                "Hypersensitivity reactions.",
                "Gastrointestinal disturbances or changes in intestinal flora.",
                "Nephrotoxicity.",
                "Ototoxicity.",
                "Neurotoxicity.",
                "Doxycycline may cause yellow, brown or grey discoloration of bones and teeth."
            ],

            interactions: [
                "Furosemide",
                "Penicillins",
                "Muscle relaxants",
                "Cephalosporins",
                "Quinolones",
                "Cycloserine",
                "Other aminoglycosides",
                "Medicines containing aluminium, magnesium or zinc, laxatives and minerals may reduce absorption of orally administered drugs.",
                "Antidiarrhoeal preparations containing kaolin, pectin or bismuth may reduce tetracycline absorption."
            ],

            withdrawal: [
                "Meat: 21 days"
            ],

            warnings: [
                "Do not use in lactating animals producing milk for human consumption.",
                "Do not use in laying hens producing eggs for human consumption.",
                "Do not mix with other medicinal products.",
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store below 25°C in a dry place.",

            packing:
                "200 g in an HDPE jar."
        },


        ar: {
            dosageForm: "بودرة للإعطاء عن طريق الفم",
            pack: "200 غم",
            targetSpecies: "الدواجن، العجول، الأغنام، الجديان والخيول",

            composition: [
                "جنتاميسين سلفات — 100 ملغ / غم",
                "دوكسيسيكلين هايكلات — 100 ملغ / غم"
            ],

            indications:
                "يُستخدم لعلاج الإصابات الناتجة عن البكتيريا الحساسة للجنتاميسين و/أو الدوكسيسيكلين في العجول والأغنام والماعز والدواجن والخيول، وخاصة التهابات الجهاز الهضمي والتهابات الجهاز التنفسي.",

            contraindications:
                "لا يُستخدم في حالات فرط الحساسية للأمينوغليكوزيدات و/أو التتراسيكلينات، أو في حالات قصور وظائف الكلى، أو اضطرابات الأذن أو الجهاز الدهليزي، أو اضطرابات الرؤية، أو قصور وظائف الكبد، أو في الحيوانات التي تتميز بالهضم الميكروبي النشط.",

            dosage:
                "يُعطى عن طريق الفم. يجب استهلاك الماء المحتوي على الدواء خلال 24 ساعة. الدواجن: 150 غم لكل 200 لتر من ماء الشرب يوميًا لمدة 3–5 أيام. العجول والأغنام والماعز والخيول: 50 ملغ لكل كغ من وزن الحيوان مرة أو مرتين يوميًا حسب الحاجة لمدة 3–5 أيام.",

            afterOpening:
                "يُستخدم الدواء خلال 90 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "قد تحدث تفاعلات فرط الحساسية.",
                "اضطرابات في الجهاز الهضمي أو تغيرات في الفلورا المعوية.",
                "سُمية كلوية.",
                "سُمية أذنية.",
                "سُمية عصبية.",
                "قد يسبب الدوكسيسيكلين تلون العظام والأسنان إلى اللون الأصفر أو البني أو الرمادي."
            ],

            interactions: [
                "فوروسيميد",
                "البنسلينات",
                "مرخيات العضلات",
                "السيفالوسبورينات",
                "الكوينولونات",
                "السيكلوسيرين",
                "الأمينوغليكوزيدات الأخرى",
                "المستحضرات المحتوية على الألمنيوم أو المغنيسيوم أو الزنك، والملينات والمعادن قد تقلل من امتصاص الأدوية الفموية.",
                "مضادات الإسهال المحتوية على الكاولين أو البكتين أو البزموت قد تقلل من امتصاص التتراسيكلينات."
            ],

            withdrawal: [
                "اللحوم: 21 يومًا"
            ],

            warnings: [
                "لا يُستخدم في الحيوانات المرضعة المنتجة للحليب المخصص للاستهلاك البشري.",
                "لا يُستخدم في الدجاج البياض المنتج للبيض المخصص للاستهلاك البشري.",
                "لا يُخلط مع أي أدوية أخرى.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م وفي مكان جاف.",

            packing:
                "عبوة بلاستيكية من البولي إيثيلين سعة 200 غم."
        }

    }
},


   {
    name: "Electrosub",
    category: "vitamins",
    categoryEn: "Vitamins & Supplements",
    categoryAr: "الفيتامينات والمكملات",
    image: "images/powders/Electrosub.png",

    details: {

        en: {
            dosageForm: "Water soluble powder for oral administration",
            pack: "500 g",
            targetSpecies: "Cattle, horses, sheep, goats and poultry",

            composition: [
                "Vitamin A — 10,000,000 IU / kg",
                "Vitamin D3 — 800,000 IU / kg",
                "Vitamin E — 5,500 IU / kg",
                "Vitamin K3 — 0.5 g / kg",
                "Vitamin B1 — 0.5 g / kg",
                "Vitamin B2 — 0.6 g / kg",
                "Vitamin B6 — 1.0 g / kg",
                "Vitamin B12 — 8.0 g / kg",
                "Choline chloride — 37.5 g / kg",
                "Pantothenic acid — 0.5 g / kg",
                "Folic acid — 53 g / kg",
                "Electrolytes and amino acids — q.s. to 1000 g"
            ],

            indications:
                "For the treatment and prevention of vitamin deficiencies in animals, including weakness in newborn animals, growth disturbances, anorexia, osteoporosis, stress, fertility problems, vaccination-related stress and changes in housing. It is also used following treatment of coccidiosis, worm infections, bacterial infections or viral infections.",

            contraindications:
                "Not specified in the supplied leaflet.",

            dosage:
                "Cattle, horses, sheep, goats and poultry: through drinking water, 50 g per 100 litres of drinking water. Through feed, 500 g per 250 kg of feed.",

            afterOpening:
                "Not specified in the supplied leaflet.",

            sideEffects: [
                "Not specified in the supplied leaflet."
            ],

            interactions: [
                "Not specified in the supplied leaflet."
            ],

            withdrawal: [
                "Not specified in the supplied leaflet."
            ],

            warnings: [
                "For veterinary use only."
            ],

            storage:
                "Store in a dry place.",

            packing:
                "500 g."
        },


        ar: {
            dosageForm: "بودرة سهلة الذوبان في الماء للاستعمال عن طريق الفم",
            pack: "500 غم",
            targetSpecies: "الأبقار، الخيول، الأغنام، الماعز والدواجن",

            composition: [
                "فيتامين A — 10,000,000 وحدة دولية / كغ",
                "فيتامين D3 — 800,000 وحدة دولية / كغ",
                "فيتامين E — 5,500 وحدة دولية / كغ",
                "فيتامين K3 — 0.5 غم / كغ",
                "فيتامين B1 — 0.5 غم / كغ",
                "فيتامين B2 — 0.6 غم / كغ",
                "فيتامين B6 — 1.0 غم / كغ",
                "فيتامين B12 — 8.0 غم / كغ",
                "كلوريد الكولين — 37.5 غم / كغ",
                "حمض البانتوثينيك — 0.5 غم / كغ",
                "حمض الفوليك — 53 غم / كغ",
                "إلكتروليتات وأحماض أمينية — كمية كافية حتى 1000 غم"
            ],

            indications:
                "يُستخدم للعلاج والوقاية من نقص الفيتامينات في الحيوانات، مثل ضعف الحيوانات حديثة الولادة، واضطرابات النمو، وفقدان الشهية، وهشاشة العظام، والإجهاد، ومشاكل الخصوبة، والإجهاد المصاحب للتطعيم أو تغيير الحظائر. كما يُستخدم بعد علاج الكوكسيديا، والديدان، والالتهابات البكتيرية والعدوى الفيروسية.",

            contraindications:
                "لم تُذكر موانع استعمال في النشرة المرفقة.",

            dosage:
                "الأبقار والخيول والأغنام والماعز والدواجن: مع ماء الشرب 50 غم لكل 100 لتر من ماء الشرب. مع العلف: 500 غم لكل 250 كغ من العلف.",

            afterOpening:
                "لم تُذكر مدة الاستخدام بعد فتح العبوة في النشرة المرفقة.",

            sideEffects: [
                "لم تُذكر تأثيرات جانبية في النشرة المرفقة."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة المرفقة."
            ],

            withdrawal: [
                "لم تُذكر فترة سحب في النشرة المرفقة."
            ],

            warnings: [
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في مكان جاف.",

            packing:
                "عبوة سعة 500 غم."
        }

    }
},

    {
        name: "Erythrocin 50%",
        category: "powders",
        categoryEn: "Powders",
        categoryAr: "المساحيق",
        image: "images/powders/Erythrocin 50%.png"
    },

    {
        name: "Neomysol 100%",
        category: "powders",
        categoryEn: "Powders",
        categoryAr: "المساحيق",
        image: "images/powders/Neomysol 100%.png"
    },

   {
    name: "Tyloject 100%",
    category: "powders",
    categoryEn: "Powders",
    categoryAr: "المساحيق",
    image: "images/powders/Tyloject 100%.png",

    details: {

        en: {
            dosageForm: "Oral powder",
            pack: "500 g",
            targetSpecies: "Calves, goats, sheep and poultry",

            composition: [
                "Tylosin tartrate — 1000 mg / g"
            ],

            indications:
                "For gastrointestinal and respiratory infections caused by tylosin-sensitive microorganisms such as Campylobacter, Mycoplasma, Pasteurella, Staphylococcus, Streptococcus and Treponema spp. in calves, goats, poultry and sheep.",

            contraindications:
                "Do not use in animals hypersensitive to tylosin. Do not use concurrently with penicillins, cephalosporins, quinolones or cycloserine. Do not administer to animals with active microbial digestion. Do not use in laying hens producing eggs for human consumption or in animals producing milk for human consumption.",

            dosage:
                "For oral administration. Calves, goats and sheep: 5 g per 220–250 kg body weight twice daily for 5–7 days. Poultry: 1 kg per 1500–2000 litres of drinking water for 3–5 days. Note: for pre-ruminant calves, lambs and kids only.",

            afterOpening:
                "Not specified in the leaflet.",

            sideEffects: [
                "Anorexia.",
                "Diarrhoea.",
                "Epigastric pain.",
                "Skin sensitization."
            ],

            interactions: [
                "Penicillins",
                "Cephalosporins",
                "Quinolones",
                "Cycloserine"
            ],

            withdrawal: [
                "Meat — calves, goats, poultry and sheep: 5 days"
            ],

            warnings: [
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store at 15–30°C in a dry place.",

            packing:
                "500 g sachet."
        },


        ar: {
            dosageForm: "بودرة عن طريق الفم",
            pack: "500 غم",
            targetSpecies: "العجول، الماعز، الأغنام والدواجن",

            composition: [
                "تايلوزين طرطرات — 1000 ملغ / غم"
            ],

            indications:
                "يُستخدم لعلاج إصابات الجهاز الهضمي والجهاز التنفسي الناتجة عن الكائنات الدقيقة الحساسة للتايلوزين مثل Campylobacter وMycoplasma وPasteurella وStaphylococcus وStreptococcus وTreponema spp. في العجول والماعز والأغنام والدواجن.",

            contraindications:
                "لا يُستخدم في حالات فرط الحساسية للتايلوزين. لا يُستخدم بالتزامن مع البنسلينات أو السيفالوسبورينات أو الكوينولونات أو السيكلوسيرين. لا يُستخدم في الحيوانات ذات الهضم الميكروبي النشط. لا يُستخدم في الدواجن المنتجة للبيض المخصص للاستهلاك البشري أو في الحيوانات المنتجة للحليب المخصص للاستهلاك البشري.",

            dosage:
                "للإعطاء عن طريق الفم. العجول والماعز والأغنام: 5 غم لكل 220–250 كغ من وزن الجسم مرتين يوميًا لمدة 5–7 أيام. الدواجن: 1 كغ لكل 1500–2000 لتر من ماء الشرب لمدة 3–5 أيام. ملاحظة: للعجول والحملان والجديان في مرحلة ما قبل الاجترار فقط.",

            afterOpening:
                "لم تُذكر مدة الاستخدام بعد فتح العبوة في النشرة.",

            sideEffects: [
                "فقدان الشهية.",
                "الإسهال.",
                "ألم شرسوفي.",
                "حساسية جلدية."
            ],

            interactions: [
                "البنسلينات",
                "السيفالوسبورينات",
                "الكوينولونات",
                "السيكلوسيرين"
            ],

            withdrawal: [
                "اللحوم — العجول والماعز والدواجن والأغنام: 5 أيام"
            ],

            warnings: [
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م في مكان جاف.",

            packing:
                "كيس سعة 500 غم."
        }

    }
},
    /* =====================================================
       OINTMENTS & CREAMS — 3 PRODUCTS
    ===================================================== */

    {
    name: "Piodine 10%",
    category: "ointments",
    categoryEn: "Ointments & Creams",
    categoryAr: "المراهم والكريمات",
    image: "images/ointments/Piodine.png",

    details: {

        en: {
            dosageForm: "Antiseptic ointment for external veterinary use",
            pack: "250 g",
            targetSpecies: "Not specified in the leaflet",

            composition: [
                "Povidone Iodine — 10% w/w",
                "Equivalent to Iodine — 1% w/w"
            ],

            indications:
                "For disinfection of wounds and for the treatment of skin inflammation and contamination caused by fungi and bacteria.",

            contraindications:
                "Do not use in animals with known hypersensitivity to iodine. Do not use during pregnancy or lactation.",

            dosage:
                "Apply to the affected area 2–4 times daily using a suitable piece of gauze.",

            afterOpening:
                "Not specified in the leaflet.",

            sideEffects: [
                "Not specified in the leaflet."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "Not specified in the leaflet."
            ],

            warnings: [
                "Keep out of reach of children.",
                "For external veterinary use only.",
                "Prescription-only medicine."
            ],

            storage:
                "Store at 15–30°C and keep out of reach of children.",

            packing:
                "250 g brown plastic container."
        },


        ar: {
            dosageForm: "مرهم مطهر للاستعمال البيطري الخارجي",
            pack: "250 غم",
            targetSpecies: "لم تُحدد الأصناف المستهدفة في النشرة",

            composition: [
                "بوفيدون أيودين — 10% وزن/وزن",
                "ما يعادل أيودين — 1% وزن/وزن"
            ],

            indications:
                "يُستخدم لتطهير الجروح ولعلاج التهاب وتلوث الجلد الناتج عن الفطريات والبكتيريا.",

            contraindications:
                "يُمنع استخدام الدواء في الحالات المعروفة بالحساسية لليود، وفي حالة الحمل أو الرضاعة.",

            dosage:
                "تُدهن المنطقة المصابة من مرتين إلى أربع مرات يوميًا باستخدام قطعة مناسبة من الشاش.",

            afterOpening:
                "لم تُذكر مدة الاستخدام بعد فتح العبوة في النشرة.",

            sideEffects: [
                "لم تُذكر تأثيرات جانبية في النشرة."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "لم تُذكر فترة سحب في النشرة."
            ],

            warnings: [
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام الحيواني الخارجي فقط.",
                "دواء ملزم بوصفة طبية."
            ],

            storage:
                "يُحفظ على درجة حرارة من 15 إلى 30°م وبعيدًا عن متناول الأطفال.",

            packing:
                "عبوة بلاستيكية بنية اللون سعة 250 غم."
        }

    }
},


    {
        name: "Scabiderm",
        category: "ointments",
        categoryEn: "Ointments & Creams",
        categoryAr: "المراهم والكريمات",
        image: "images/ointments/scabiderm.png"
    },

    {
        name: "Udder-Sept",
        category: "ointments",
        categoryEn: "Ointments & Creams",
        categoryAr: "المراهم والكريمات",
        image: "images/ointments/Udder-Sept.png"
    },


    /* =====================================================
       ORAL SOLUTIONS — 15 PRODUCTS
    ===================================================== */

   {
    name: "Bactarin",
    category: "oral",
    categoryEn: "Oral Solutions",
    categoryAr: "المحاليل الفموية",
    image: "images/oral-solutions/Bactarin.png",

    details: {

        en: {
            dosageForm: "Solution for drinking water",
            pack: "500 or 1000 mL",
            targetSpecies: "Sheep, goats and poultry",

            composition: [
                "Trimethoprim — 25 mg / mL",
                "Sulfamethoxine Sodium — 133.5 mg / mL"
            ],

            indications:
                "The sulfamethoxine-trimethoprim combination is active against Gram-negative and Gram-positive organisms. Large animals: treatment of bacterial pneumonia, septicaemia, enteritis, foot rot and bacterial diarrhoea. Poultry: treatment of coryza and caecal coccidiosis.",

            contraindications:
                "Do not use in chickens over 16 weeks of age or turkeys over 24 weeks of age. Do not use with calcium preparations or antacids. Contraindicated in animals hypersensitive to sulfonamides or suffering from liver or renal insufficiency.",

            dosage:
                "Poultry: 1–2 mL per litre of drinking water for 5–7 days. Medicated drinking water should be used within 24 hours. Large animals: 0.5 mL per 10 kg body weight for 3–5 days.",

            afterOpening:
                "Use within 90 days after first opening.",

            sideEffects: [
                "Hypersensitivity reactions may occur, especially in the skin.",
                "Prolonged treatment may cause defects in hematopoiesis.",
                "Hepatitis and stomatitis may occur.",
                "Sulfonamides may decrease egg production and growth."
            ],

            interactions: [
                "Calcium preparations",
                "Antacids"
            ],

            withdrawal: [
                "Slaughter: 7 days after the last treatment"
            ],

            warnings: [
                "Do not mix with other medicinal products."
            ],

            storage:
                "Store at 15–30°C and keep out of reach of children.",

            packing:
                "500 or 1000 mL."
        },


        ar: {
            dosageForm: "شراب يضاف إلى ماء الشرب",
            pack: "500 أو 1000 مل",
            targetSpecies: "الأغنام والدواجن",

            composition: [
                "تراي ميثوبريم — 25 ملغ / مل",
                "سلفاميثوكسين صوديوم — 133.5 ملغ / مل"
            ],

            indications:
                "تركيبة التراي ميثوبريم والسلفاميثوكسين فعالة ضد البكتيريا موجبة وسالبة الغرام. الدواجن: لعلاج الرشح والكوكسيديا الأعورية. الحيوانات الكبيرة: لعلاج الالتهاب الرئوي البكتيري، وتسمم الدم، وأمراض المعدة والأمعاء، وتعفن الحافر والإسهال البكتيري.",

            contraindications:
                "لا يُستخدم للدجاج بعمر أكثر من 16 أسبوعًا أو للديك الرومي بعمر 24 أسبوعًا. لا يُستخدم مع مستحضرات الكالسيوم أو مضادات الحموضة. كما لا يُستخدم في حالات الحساسية لمركبات السلفا أو في حالات القصور في وظائف الكبد أو الكلى.",

            dosage:
                "الدواجن: 1–2 مل لكل لتر من ماء الشرب لمدة 5–7 أيام، ويجب استخدام الماء المحتوي على العلاج خلال 24 ساعة. الحيوانات الكبيرة: 0.5 مل لكل 10 كغ من وزن الحيوان لمدة 3–5 أيام.",

            afterOpening:
                "يُستخدم الدواء خلال 90 يومًا بعد فتح العبوة.",

            sideEffects: [
                "قد تحدث تفاعلات حساسية، خاصة في الجلد.",
                "قد يؤدي العلاج الطويل إلى اضطرابات في تكوين الدم.",
                "قد يحدث التهاب الكبد والتهاب الفم.",
                "قد تسبب مركبات السلفا انخفاض إنتاج البيض والنمو."
            ],

            interactions: [
                "مستحضرات الكالسيوم",
                "مضادات الحموضة"
            ],

            withdrawal: [
                "الذبح: 7 أيام بعد انتهاء العلاج"
            ],

            warnings: [
                "لا يُسمح بخلط الدواء مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م وبعيدًا عن متناول الأطفال.",

            packing:
                "عبوة سعة 500 أو 1000 مل."
        }

    }
},
    {
        name: "Bromosolv 0.5%",
        category: "oral",
        categoryEn: "Oral Solutions",
        categoryAr: "المحاليل الفموية",
        image: "images/oral-solutions/Bromosolv 0.5%.png"
    },

    {
        name: "Bromosolv Plus",
        category: "oral",
        categoryEn: "Oral Solutions",
        categoryAr: "المحاليل الفموية",
        image: "images/oral-solutions/Bromosolv Plus.png"
    },

    {
    name: "Cocci-Top",
    category: "oral",
    categoryEn: "Oral Solutions",
    categoryAr: "المحاليل الفموية",
    image: "images/oral-solutions/Cocci-Top.png",

    details: {

        en: {
            dosageForm: "Oral solution added to drinking water",
            pack: "1000 mL",
            targetSpecies: "Poultry",

            composition: [
                "Sulfaquinoxaline Sodium — 52 mg / mL",
                "Pyrimethamine — 5.2 mg / mL"
            ],

            indications:
                "The combination of pyrimethamine and sulfaquinoxaline is indicated for the treatment of coccidiosis caused by susceptible organisms in poultry.",

            contraindications:
                "Do not use in animals hypersensitive to the active ingredients, in cases of liver or renal failure, or in chickens producing eggs for human consumption.",

            dosage:
                "Administer 2–4 mL per litre of drinking water for 2–3 days. Treatment is then stopped for 3 days and repeated as necessary to control the infection. Medicated water should be used within 24 hours.",

            afterOpening:
                "Use within 90 days after first opening.",

            sideEffects: [
                "Not specified in the leaflet."
            ],

            interactions: [
                "Calcium preparations",
                "Phenylbutazone"
            ],

            withdrawal: [
                "Slaughter: 15 days after the last treatment"
            ],

            warnings: [
                "Do not mix with other medicinal products."
            ],

            storage:
                "Store at 15–30°C and keep out of reach of children.",

            packing:
                "1000 mL."
        },


        ar: {
            dosageForm: "محلول سائل يضاف إلى ماء الشرب",
            pack: "1000 مل",
            targetSpecies: "الدواجن",

            composition: [
                "سلفاكينوكسالين الصوديوم — 52 ملغ / مل",
                "بايريميثامين — 5.2 ملغ / مل"
            ],

            indications:
                "تُستخدم تركيبة السلفاكينوكسالين صوديوم والبايريميثامين لعلاج الكوكسيديا الناتجة عن الميكروبات الحساسة في الدواجن.",

            contraindications:
                "لا يُستخدم في حالات فرط الحساسية للمادة الفعالة، أو في حالات القصور في وظائف الكلى أو الكبد، أو في الدواجن المنتجة للبيض المخصص للاستهلاك البشري.",

            dosage:
                "يُعطى بجرعة 2–4 مل لكل لتر من ماء الشرب لمدة 2–3 أيام، ثم يوقف العلاج لمدة 3 أيام ويُعاد عند الضرورة للسيطرة على الإصابة. يجب استخدام الماء المحتوي على الدواء خلال 24 ساعة من تحضيره.",

            afterOpening:
                "يُستخدم الدواء خلال 90 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "لم تُذكر تأثيرات جانبية في النشرة."
            ],

            interactions: [
                "مستحضرات الكالسيوم",
                "الفينيل بيوتازون"
            ],

            withdrawal: [
                "الذبح: 15 يومًا بعد نهاية العلاج"
            ],

            warnings: [
                "لا يُسمح بخلط الدواء مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م وبعيدًا عن متناول الأطفال.",

            packing:
                "عبوة سعة 1000 مل."
        }

    }
},


   {
    name: "Colistate",
    category: "oral",
    categoryEn: "Oral Solutions",
    categoryAr: "المحاليل الفموية",
    image: "images/oral-solutions/Colistate.png",

    details: {

        en: {
            dosageForm: "Oral solution diluted in drinking water",
            pack: "500 or 1000 mL",
            targetSpecies: "Calves, goats, sheep and poultry",

            composition: [
                "Colistin Sulfate — 2,000,000 IU / mL"
            ],

            indications:
                "For the treatment of gastrointestinal infections caused by microorganisms sensitive to colistin, including E. coli, Haemophilus and Salmonella spp. in calves, goats, sheep and poultry.",

            contraindications:
                "Do not use in animals with renal impairment, animals hypersensitive to colistin, animals with active microbial digestion, pregnant or lactating animals, or laying hens.",

            dosage:
                "Administer orally after dilution in drinking water. Poultry: 100,000 IU per kg body weight per day, equivalent to 50 mL per ton of body weight per day for 3 consecutive days. The concentration in drinking water should be adjusted according to water consumption. Calves, goats and sheep: 50,000 IU per kg body weight, equivalent to 0.25 mL per 10 kg body weight in the morning and evening for 3 consecutive days, mixed with drinking water.",

            afterOpening:
                "Use within 3 months after first opening. Medicated drinking water is stable for 24 hours.",

            sideEffects: [
                "Renal dysfunction.",
                "Neurotoxicity.",
                "Neuromuscular blockade.",
                "Digestive alterations such as intestinal dysbiosis, accumulation of gases and mild diarrhea may occur."
            ],

            interactions: [
                "Aminoglycosides",
                "Levamisole",
                "Iron",
                "Calcium",
                "Magnesium",
                "Polyphosphates",
                "Chloramphenicol",
                "Beta-lactams",
                "Sulfonamides",
                "Trimethoprim"
            ],

            withdrawal: [
                "Withdrawal period: 7 days"
            ],

            warnings: [
                "Do not mix with other medicinal products.",
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store below 25°C and protect from light.",

            packing:
                "500 and 1000 mL HDPE bottles."
        },


        ar: {
            dosageForm: "محلول فموي يُخفف في ماء الشرب",
            pack: "500 أو 1000 مل",
            targetSpecies: "العجول، الماعز، الأغنام والدواجن",

            composition: [
                "كوليستين سلفات — 2,000,000 وحدة دولية / مل"
            ],

            indications:
                "يُستخدم لعلاج الالتهابات المعدية والمعوية الناتجة عن الكائنات الدقيقة الحساسة للكوليستين مثل E. coli وHaemophilus وسلالات Salmonella في العجول والماعز والأغنام والدواجن.",

            contraindications:
                "لا يُستخدم في الحيوانات التي تعاني من قصور في وظائف الكلى، أو فرط الحساسية للكوليستين، أو الحيوانات ذات الهضم الميكروبي النشط، أو أثناء الحمل والرضاعة، أو في الدجاج البياض.",

            dosage:
                "يُعطى عن طريق الفم بعد تخفيفه في ماء الشرب. الدواجن: 100,000 وحدة دولية لكل كغ من وزن الجسم يوميًا، أي ما يعادل 50 مل لكل طن من وزن الحيوانات يوميًا لمدة 3 أيام متتالية، ويُضبط تركيز الدواء في ماء الشرب حسب استهلاك الحيوانات. العجول والماعز والأغنام: 50,000 وحدة دولية لكل كغ من وزن الجسم، أي ما يعادل 0.25 مل لكل 10 كغ من وزن الحيوان صباحًا ومساءً لمدة 3 أيام متتالية، ويُخلط مع ماء الشرب.",

            afterOpening:
                "يُستخدم الدواء خلال 3 أشهر بعد فتح العبوة. ويظل المحلول بعد تخفيفه في ماء الشرب صالحًا لمدة 24 ساعة.",

            sideEffects: [
                "خلل في وظائف الكلى.",
                "سُمية عصبية.",
                "حصر عصبي عضلي.",
                "قد تظهر تغيرات هضمية مثل اختلال الفلورا المعوية، وتراكم الغازات والإسهال الخفيف."
            ],

            interactions: [
                "الأمينوغليكوزيدات",
                "ليفاميزول",
                "الحديد",
                "الكالسيوم",
                "المغنيسيوم",
                "البولي فوسفات",
                "الكلورامفينيكول",
                "البيتا-لاكتام",
                "السلفوناميدات",
                "الترايميثوبريم"
            ],

            withdrawal: [
                "فترة السحب: 7 أيام"
            ],

            warnings: [
                "لا يُسمح بخلط الدواء مع أي أدوية أخرى.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م وبعيدًا عن الضوء.",

            packing:
                "عبوات HDPE سعة 500 و1000 مل."
        }

    }
},

    
{
    name: "DiaKey",
    category: "oral",
    categoryEn: "Oral Solutions",
    categoryAr: "المحاليل الفموية",
    image: "images/oral-solutions/DiaKey.png",

    details: {

        en: {
            dosageForm: "Oral suspension",
            pack: "200, 500 or 1000 mL",
            targetSpecies: "Cattle, horses, dogs and cats",

            composition: [
                "Kaolin — 196 mg / mL",
                "Pectin — 9 mg / mL"
            ],

            indications:
                "For oral administration as an aid in the treatment of non-infectious diarrhea. Helps prevent dehydration, absorbs and helps remove bacterial toxins and poisons from the intestinal tract, and helps relax and slow the movement of inflamed intestines toward normal rates.",

            contraindications:
                "DiaKey should not replace adequate fluid and electrolyte monitoring or replacement therapy in severe or chronic diarrhea.",

            dosage:
                "Shake well before use. Administer orally after the first sign of diarrhea or as needed. Cattle and horses: 180–300 mL. Calves and foals: 90–120 mL. Dogs and cats: 15–45 mL.",

            afterOpening:
                "Use within 90 days after first opening.",

            sideEffects: [
                "Constipation may occur, especially in poorly hydrated animals."
            ],

            interactions: [
                "The absorption of lincomycin is decreased when administered concurrently with DiaKey.",
                "Administer DiaKey 2 hours before or 3–4 hours after lincomycin."
            ],

            withdrawal: [
                "No withdrawal period."
            ],

            warnings: [
                "Do not mix with other medicinal products.",
                "Keep out of reach of children.",
                "If symptoms persist for 2–3 days, consult a veterinarian.",
                "For veterinary use only."
            ],

            storage:
                "Store at 15–30°C and protect from light.",

            packing:
                "200, 500 and 1000 mL HDPE bottles."
        },


        ar: {
            dosageForm: "معلّق يعطى عن طريق الفم",
            pack: "200 أو 500 أو 1000 مل",
            targetSpecies: "الأبقار، الخيول، الكلاب والقطط",

            composition: [
                "كائولين — 196 ملغ / مل",
                "بكتين — 9 ملغ / مل"
            ],

            indications:
                "يُعطى عن طريق الفم كعامل مساعد لعلاج الإسهال غير المعدي. يساعد على منع الجفاف، وامتصاص وإزالة السموم البكتيرية والسموم من الأمعاء، كما يساعد على إرخاء وتقليل حركة الأمعاء الملتهبة إلى المعدلات الطبيعية.",

            contraindications:
                "لا يحل دياكي محل متابعة وتعويض السوائل والإلكتروليتات في حالات الإسهال الحاد أو المزمن.",

            dosage:
                "يُخض المستحضر جيدًا قبل الاستخدام، ويُعطى عن طريق الفم عند ظهور أول أعراض الإسهال أو حسب الحاجة. الأبقار والخيول: 180–300 مل. العجول والأمهار: 90–120 مل. الكلاب والقطط: 15–45 مل.",

            afterOpening:
                "يُستخدم الدواء خلال 90 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "قد يحدث إمساك، خصوصًا في الحيوانات التي تعاني من الجفاف."
            ],

            interactions: [
                "يقل امتصاص اللينكومايسين عند إعطائه بالتزامن مع دياكي.",
                "يجب إعطاء دياكي قبل اللينكومايسين بساعتين أو بعده بـ3–4 ساعات."
            ],

            withdrawal: [
                "لا توجد فترة سحب."
            ],

            warnings: [
                "لا يُخلط مع أي أدوية أخرى.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "إذا استمرت الأعراض لمدة يومين أو ثلاثة أيام يجب مراجعة الطبيب البيطري.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م وبعيدًا عن الضوء.",

            packing:
                "عبوات بلاستيكية من البولي إيثيلين سعة 200 و500 و1000 مل."
        }

    }
},


    {
        name: "Duphamin",
        category: "vitamins",
        categoryEn: "Vitamins & Supplements",
        categoryAr: "الفيتامينات والمكملات",
        image: "images/oral-solutions/Duphamin.png"
    },

    {
        name: "Enro-col",
        category: "oral",
        categoryEn: "Oral Solutions",
        categoryAr: "المحاليل الفموية",
        image: "images/oral-solutions/Enro-col.png"
    },

  {
    name: "Enroseel 10%",
    category: "oral",
    categoryEn: "Oral Solutions",
    categoryAr: "المحاليل الفموية",


    image: "images/oral-solutions/Eroseel 10%.png",

    details: {

        en: {
            dosageForm: "Oral solution added to drinking water",
            pack: "100, 500 or 1000 mL",
            targetSpecies: "Cattle, sheep, hens, chickens and turkeys",

            composition: [
                "Enrofloxacin — 100 mg / mL"
            ],

            indications:
                "Enrofloxacin is active against Gram-positive and Gram-negative bacteria. Enroseel 10% oral solution may be used in single and mixed bacterial infections and against Mycoplasma. It is particularly indicated for salmonellosis, pasteurellosis, E. coli infections and chronic respiratory disease (CRD).",

            contraindications:
                "Do not use in laying hens producing eggs for human consumption. Do not use in cattle or sheep intended for dairy production or in calves intended for veal production. Horses should not be treated with enrofloxacin. The effects of enrofloxacin during pregnancy and lactation have not been adequately determined. Do not use in young growing animals because it may cause cartilage damage.",

            dosage:
                "Administer in drinking water at 0.5 mL per litre of drinking water, equivalent to 5–10 mg per kg body weight daily. Treat for 3 consecutive days, except in acute cases such as salmonellosis where treatment should continue for 5 days.",

            afterOpening:
                "Use within 28 days after first opening.",

            sideEffects: [
                "No oral-specific side effects are stated separately in the leaflet."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "Cattle and sheep meat: 28 days",
                "Chicken and turkey meat: 7 days"
            ],

            warnings: [
                "Do not mix with other medicinal products."
            ],

            storage:
                "Store at 15–30°C in a dry and dark place.",

            packing:
                "100, 500 or 1000 mL milky plastic bottles."
        },


        ar: {
            dosageForm: "محلول فموي يضاف إلى ماء الشرب",
            pack: "100 أو 500 أو 1000 مل",
            targetSpecies: "الأبقار، الأغنام، الدجاج والديوك الرومية",

            composition: [
                "إنروفلوكساسين — 100 ملغ / مل"
            ],

            indications:
                "الإنروفلوكساسين فعال ضد البكتيريا موجبة وسالبة الغرام. يُستخدم إنروسيل 10% محلول فموي في حالات العدوى البكتيرية المفردة والمختلطة وضد المايكوبلازما، وله أهمية خاصة في حالات السالمونيلا والباستوريلا وإصابات E. coli وأمراض الجهاز التنفسي المزمنة (CRD).",

            contraindications:
                "لا يُستخدم في الدجاج البياض المنتج للبيض المخصص للاستهلاك البشري. ولا يُستخدم في الأبقار والأغنام المخصصة لإنتاج الحليب أو في العجول المخصصة لإنتاج لحم العجول. لا يُستخدم في الخيول. لم يتم تحديد تأثير الإنروفلوكساسين أثناء الحمل والرضاعة بشكل كافٍ. كما لا يُستخدم في الحيوانات الصغيرة النامية لاحتمالية تأثيره في الغضاريف.",

            dosage:
                "يُعطى مع ماء الشرب بجرعة 0.5 مل لكل لتر من ماء الشرب، أو بما يعادل 5–10 ملغ لكل كغ من وزن الحيوان يوميًا. يستمر العلاج لمدة 3 أيام متتالية، باستثناء الحالات الحادة مثل السالمونيلا حيث يستمر العلاج لمدة 5 أيام.",

            afterOpening:
                "يُستخدم المستحضر خلال 28 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "لم تذكر النشرة تأثيرات جانبية خاصة بالمحلول الفموي بشكل منفصل."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "لحوم الأبقار والأغنام: 28 يومًا",
                "لحوم الدجاج والديك الرومي: 7 أيام"
            ],

            warnings: [
                "لا يُخلط الدواء مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م في مكان جاف ومعتم.",

            packing:
                "عبوات بلاستيكية بيضاء سعة 100 و500 و1000 مل."
        }

    }
},
{
    name: "Febtal 2.5%",
    category: "oral",
    categoryEn: "Oral Solutions",
    categoryAr: "المحاليل الفموية",
    image: "images/oral-solutions/Febtal.png",

    details: {

        en: {
            dosageForm: "Oral suspension",
            pack: "100 or 500 mL",
            targetSpecies: "Cattle, sheep, goats and horses",

            composition: [
                "Fenbendazole — 25 mg / mL"
            ],

            indications:
                "For the treatment of larval and adult stages of gastrointestinal nematodes, large strongyles, ascarids, pinworms and lungworms, as well as various small strongyles in horses of all ages. In sheep and goats, it is used against lungworms and most gastrointestinal nematodes, with the exception of Trichuris and Strongyloides.",

            contraindications:
                "Do not use during pregnancy.",

            dosage:
                "Shake well before use. Administer orally using a drench gun. Cattle: 15 mL per 50 kg body weight; 15 mL for animals up to 50 kg and 30 mL for animals weighing 50–100 kg. Sheep and goats: 1 mL per 5 kg body weight; 5 mL for lambs up to 25 kg. Horses: 12 mL per 50 kg body weight. In cases of extremely severe parasite pressure or high reinfection rate, treatment should be repeated after 4–6 weeks.",

            afterOpening:
                "Use within 90 days after first opening.",

            sideEffects: [
                "Not specified in the leaflet."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "Meat: 14 days",
                "Milk: 5 days"
            ],

            warnings: [
                "Do not mix with other medicinal products."
            ],

            storage:
                "Store at 15–30°C in a dry place.",

            packing:
                "100 or 500 mL."
        },


        ar: {
            dosageForm: "معلّق فموي",
            pack: "100 أو 500 مل",
            targetSpecies: "الأبقار، الأغنام، الماعز والخيول",

            composition: [
                "فينبندازول — 25 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج الأطوار اليرقية والبالغة من الديدان المعدية والمعوية، والديدان الأسطوانية الكبيرة، والإسكارس، والديدان الدبوسية، والديدان الرئوية، إضافة إلى مختلف أنواع الديدان الأسطوانية الصغيرة في الخيول بجميع الأعمار. كما يُستخدم في الأغنام والماعز ضد الديدان الرئوية ومعظم الديدان المعدية والمعوية باستثناء Trichuris وStrongyloides.",

            contraindications:
                "لا يُستخدم أثناء فترة الحمل.",

            dosage:
                "يُخض جيدًا قبل الاستعمال، ويُعطى عن طريق الفم باستخدام محقن الجرعات. الأبقار: 15 مل لكل 50 كغ من وزن الحيوان؛ 15 مل للحيوانات حتى وزن 50 كغ، و30 مل للحيوانات من 50 إلى 100 كغ. الأغنام والماعز: 1 مل لكل 5 كغ من وزن الحيوان؛ 5 مل للحملان حتى وزن 25 كغ. الخيول: 12 مل لكل 50 كغ من وزن الحيوان. في حالات الإصابة الشديدة جدًا أو ارتفاع معدل تكرار الإصابة، يُعاد العلاج بعد 4–6 أسابيع.",

            afterOpening:
                "يُستخدم المستحضر خلال 90 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "لم تُذكر تأثيرات جانبية في النشرة."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "اللحوم: 14 يومًا",
                "الحليب: 5 أيام"
            ],

            warnings: [
                "لا يُخلط مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في مكان جاف بدرجة حرارة من 15 إلى 30°م.",

            packing:
                "عبوات سعة 100 أو 500 مل."
        }

    }
},



   {
    name: "Floricol 10%",
    category: "oral",
    categoryEn: "Oral Solutions",
    categoryAr: "المحاليل الفموية",
    image: "images/oral-solutions/Floricol 10%.png",

    details: {

        en: {
            dosageForm: "Oral solution added to drinking water",
            pack: "500 or 1000 mL",
            targetSpecies: "Poultry",

            composition: [
                "Florfenicol — 100 mg / mL"
            ],

            indications:
                "For the treatment of chlamydiosis, mycoplasmosis, chronic respiratory disease (CRD), necrotic enteritis, colibacillosis and fowl cholera in poultry.",

            contraindications:
                "Do not administer in cases of known hypersensitivity to florfenicol.",

            dosage:
                "Add to drinking water. Poultry up to 4 weeks of age: 20 mg/kg body weight, equivalent to 100 mL per 100 litres of drinking water daily for 3–5 days. Poultry older than 4 weeks: 200 mL per 100 litres of drinking water daily for 3–5 days. Medicated water should be prepared freshly each day.",

            afterOpening:
                "Use within 90 days after first opening.",

            sideEffects: [
                "Transient inappetence may occur.",
                "Transient decreased water consumption may occur.",
                "Transient diarrhoea may occur following treatment."
            ],

            interactions: [
                "Not specified in the leaflet."
            ],

            withdrawal: [
                "Meat: 7 days"
            ],

            warnings: [
                "Do not use in laying poultry producing eggs for human consumption.",
                "Do not mix with other medicinal products.",
                "Do not freeze."
            ],

            storage:
                "The leaflet states: store below 15–30°C and protect from light.",

            packing:
                "500 or 1000 mL plastic bottle."
        },


        ar: {
            dosageForm: "محلول سائل يضاف إلى ماء الشرب",
            pack: "500 أو 1000 مل",
            targetSpecies: "الدواجن",

            composition: [
                "فلورفينيكول — 100 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج الكلاميديا، والميكوبلازما، وإصابات الجهاز التنفسي المزمن، والتهاب الأمعاء الناخر، والكولاي باسيلوسس وكوليرا الطيور.",

            contraindications:
                "لا يُعطى في الحالات المعروفة بحساسيتها للفلورفينيكول.",

            dosage:
                "يُضاف إلى ماء الشرب. الدواجن حتى عمر 4 أسابيع: 20 ملغ لكل كغ من وزن الجسم، بما يعادل 100 مل لكل 100 لتر من ماء الشرب يوميًا لمدة 3–5 أيام. الدواجن الأكبر من 4 أسابيع: 200 مل لكل 100 لتر من ماء الشرب يوميًا لمدة 3–5 أيام. يجب تحضير ماء العلاج طازجًا يوميًا.",

            afterOpening:
                "يُستخدم الدواء خلال 90 يومًا بعد فتح العبوة.",

            sideEffects: [
                "قد يصاحب العلاج فقدان مؤقت للشهية.",
                "قد يحدث انخفاض مؤقت في استهلاك الماء.",
                "قد يحدث إسهال مؤقت."
            ],

            interactions: [
                "لم تُذكر تداخلات دوائية في النشرة."
            ],

            withdrawal: [
                "اللحوم: 7 أيام"
            ],

            warnings: [
                "لا يُستخدم للدواجن المنتجة للبيض المخصص للاستهلاك البشري.",
                "لا يُسمح بخلط الدواء مع أي أدوية أخرى.",
                "لا يُعرض المستحضر للتجمد."
            ],

            storage:
                "كما ورد في النشرة: يُحفظ على درجة أقل من 15–30°م وبعيدًا عن الضوء.",

            packing:
                "عبوات بلاستيكية سعة 500 أو 1000 مل."
        }

    }
},

   {
    name: "Norox 10%",
    category: "oral",
    categoryEn: "Oral Solutions",
    categoryAr: "المحاليل الفموية",
    image: "images/oral-solutions/Norox 10%.png",

    details: {

        en: {
            dosageForm: "Oral solution added to drinking water",
            pack: "500 or 1000 mL",
            targetSpecies: "Poultry",

            composition: [
                "Norfloxacin — 100 mg / mL"
            ],

            indications:
                "For the treatment of urinary tract infections, gonococcal urethritis, respiratory infections including enzootic pneumonia in poultry, fowl cholera, salmonellosis including fowl typhoid and paratyphoid, and coryza. It is also used as part of selective digestive tract decontamination in intestinal diseases.",

            contraindications:
                "Do not use in cases of hypersensitivity to the drug or in animals with serious impairment of liver and/or renal function.",

            dosage:
                "Add to drinking water. 1000 mL per 1000–2000 litres of drinking water for 3–5 days. In cases of salmonellosis, treatment may be prolonged to 5–6 days. Medicated drinking water should be prepared fresh every 24 hours.",

            afterOpening:
                "Use within 90 days after first opening.",

            sideEffects: [
                "Photosensitivity reactions.",
                "High doses may cause nephrotoxicity and crystalluria."
            ],

            interactions: [
                "Tetracyclines",
                "Macrolides",
                "Nitrofurantoin",
                "Theophylline",
                "Lincosamides",
                "Antacids",
                "Multivitamins",
                "Preparations containing divalent or trivalent cations such as iron, aluminium, magnesium, calcium and zinc"
            ],

            withdrawal: [
                "Meat: 4 days",
                "Eggs: 4 days"
            ],

            warnings: [
                "Meat and eggs should not be used for human consumption during treatment or for 4 days after treatment.",
                "Do not mix with other medicinal products."
            ],

            storage:
                "Store at 15–30°C in a dark place and keep out of reach of children.",

            packing:
                "500 and 1000 mL HDPE bottles."
        },


        ar: {
            dosageForm: "محلول سائل يضاف إلى ماء الشرب",
            pack: "500 أو 1000 مل",
            targetSpecies: "الدواجن",

            composition: [
                "نورفلوكساسين — 100 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج التهابات المسالك البولية، والتهاب الإحليل السيلاني، والتهابات الجهاز التنفسي بما فيها الالتهاب الرئوي الحيواني في الدواجن، وكوليرا الطيور، والسالمونيلا بما فيها تيفوئيد الطيور والباراتيفوئيد، والكوريزا. كما يُستخدم كجزء من تطهير الجهاز الهضمي الانتقائي في الأمراض المعوية.",

            contraindications:
                "لا يُستخدم في الحالات التي تعاني من الحساسية للدواء أو في الحيوانات التي تعاني من قصور شديد في وظائف الكبد و/أو الكلى.",

            dosage:
                "يُضاف إلى ماء الشرب. 1000 مل لكل 1000–2000 لتر من ماء الشرب لمدة 3–5 أيام. في حالات السالمونيلا يمكن تمديد فترة العلاج إلى 5–6 أيام. يجب تحضير ماء الشرب المحتوي على العلاج من جديد كل 24 ساعة.",

            afterOpening:
                "يُستخدم المستحضر خلال 90 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "قد تحدث حساسية للضوء.",
                "قد تسبب الجرعات العالية سُمية كلوية وزيادة بلورات البول."
            ],

            interactions: [
                "التتراسيكلينات",
                "الماكروليدات",
                "النيتروفورانتوين",
                "الثيوفيلين",
                "اللينكوساميدات",
                "مضادات الحموضة",
                "الفيتامينات المتعددة",
                "المستحضرات المحتوية على أيونات ثنائية أو ثلاثية التكافؤ مثل الحديد والألمنيوم والمغنيسيوم والكالسيوم والزنك"
            ],

            withdrawal: [
                "اللحوم: 4 أيام",
                "البيض: 4 أيام"
            ],

            warnings: [
                "لا تُستخدم اللحوم أو البيض للاستهلاك البشري أثناء العلاج ولمدة 4 أيام بعد انتهاء العلاج.",
                "لا يُسمح بخلط الدواء مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م في مكان معتم وبعيدًا عن متناول الأطفال.",

            packing:
                "عبوات بلاستيكية HDPE سعة 500 و1000 مل."
        }

    }
},

   {
    name: "Oxantel",
    category: "oral",
    categoryEn: "Oral Solutions",
    categoryAr: "المحاليل الفموية",
    image: "images/oral-solutions/Oxantel.png",

    details: {

        en: {
            dosageForm: "Oral suspension",
            pack: "500 or 1000 mL",
            targetSpecies: "Sheep and lambs",

            composition: [
                "Closantel — 5%",
                "Oxfendazole — 2.5%"
            ],

            indications:
                "For the treatment and control of mature and developing immature gastrointestinal roundworms, lungworms, tapeworms and fluke over 6 weeks in sheep and lambs. It is ovicidal against nematode eggs and delays egg laying in trematodes. In known fluke areas, parasite infestations are generally mixed and may involve nematodes, trematodes and occasionally cestodes; therefore treatment with the oxfendazole/closantel combination may be particularly beneficial in reducing parasite burden.",

            contraindications:
                "Do not use in sheep producing milk for human consumption.",

            dosage:
                "Shake well before use. Administer orally as a single dose of 0.2 mL per kg body weight. Dose guide: up to 7.5 kg: 1 mL; 7.5–15 kg: 2 mL; 16–20 kg: 4 mL; 21–25 kg: 5 mL; 26–30 kg: 6 mL; 31–40 kg: 8 mL; 41–50 kg: 10 mL; 51–60 kg: 12 mL; 61–70 kg: 14 mL; 71–80 kg: 16 mL.",

            afterOpening:
                "Use within 90 days after first opening.",

            sideEffects: [
                "Not specified in the leaflet."
            ],

            interactions: [
                "Dibromsalan",
                "Tribromsalan"
            ],

            withdrawal: [
                "Meat: 18 days after the last treatment"
            ],

            warnings: [
                "Do not mix with other medicinal products."
            ],

            storage:
                "Store below 25°C, protected from light and out of reach of children.",

            packing:
                "500 or 1000 mL."
        },


        ar: {
            dosageForm: "معلّق يعطى عن طريق الفم",
            pack: "500 أو 1000 مل",
            targetSpecies: "الأغنام والحملان",

            composition: [
                "كلوزانتيل — 5%",
                "أوكسفيندازول — 2.5%"
            ],

            indications:
                "يُستخدم لعلاج والسيطرة على الديدان المعدية والمعوية الناضجة والأطوار غير الناضجة منها، والديدان الرئوية، والديدان الشريطية، والديدان الكبدية التي يزيد عمرها عن 6 أسابيع في الأغنام والحملان. كما أنه فعال ضد بيض الديدان الخيطية ويؤخر وضع البيض في الديدان المثقوبة. وفي المناطق المعروفة بانتشار الديدان الكبدية تكون الإصابات غالبًا مختلطة وتشمل الديدان الخيطية والمثقوبة وأحيانًا الشريطية، لذلك قد تكون تركيبة الأوكسفيندازول والكلوزانتيل مفيدة بشكل خاص في تقليل الحمل الطفيلي.",

            contraindications:
                "لا يُستخدم في الأغنام المنتجة للحليب المخصص للاستهلاك البشري.",

            dosage:
                "يُخض جيدًا قبل الاستعمال، ويُعطى عن طريق الفم كجرعة واحدة بمعدل 0.2 مل لكل كغ من وزن الحيوان. دليل الجرعات: حتى 7.5 كغ: 1 مل؛ 7.5–15 كغ: 2 مل؛ 16–20 كغ: 4 مل؛ 21–25 كغ: 5 مل؛ 26–30 كغ: 6 مل؛ 31–40 كغ: 8 مل؛ 41–50 كغ: 10 مل؛ 51–60 كغ: 12 مل؛ 61–70 كغ: 14 مل؛ 71–80 كغ: 16 مل.",

            afterOpening:
                "يُستخدم المستحضر خلال 90 يومًا بعد فتح العبوة.",

            sideEffects: [
                "لم تُذكر تأثيرات جانبية في النشرة."
            ],

            interactions: [
                "ديبرومسالان",
                "ترايبرومسالان"
            ],

            withdrawal: [
                "اللحوم: 18 يومًا بعد انتهاء العلاج"
            ],

            warnings: [
                "لا يُخلط مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م، بعيدًا عن الضوء وبعيدًا عن متناول الأطفال.",

            packing:
                "عبوات سعة 500 أو 1000 مل."
        }

    }
},



   {
    name: "Siproseel 10%",
    category: "oral",
    categoryEn: "Oral Solutions",
    categoryAr: "المحاليل الفموية",
    image: "images/oral-solutions/Siproseel 10%.png",

    details: {

        en: {
            dosageForm: "Oral solution added to drinking water",
            pack: "1000 mL",
            targetSpecies: "Poultry",

            composition: [
                "Ciprofloxacin — 100 mg / mL"
            ],

            indications:
                "For gastrointestinal, respiratory and urinary tract infections caused by ciprofloxacin-sensitive microorganisms such as Campylobacter, E. coli, Haemophilus, Mycoplasma, Pasteurella and Salmonella spp. in poultry.",

            contraindications:
                "Do not use in animals hypersensitive to ciprofloxacin or in animals with serious impairment of liver and/or renal function.",

            dosage:
                "Dilute in drinking water. Poultry: 200 mL per 300–400 litres of drinking water for 3–5 days.",

            afterOpening:
                "Use within 90 days after first opening.",

            sideEffects: [
                "Hypersensitivity reactions.",
                "Vomiting.",
                "Diarrhea.",
                "Administration to juvenile animals may lead to arthropathy.",
                "Crystalluria and central nervous system effects such as dizziness and stimulation may occur."
            ],

            interactions: [
                "Tetracyclines",
                "Chloramphenicol",
                "Macrolides",
                "Lincosamides",
                "Nitrofurantoin",
                "Aminoglycosides",
                "Third-generation cephalosporins",
                "Extended-spectrum penicillins",
                "Antacids containing cations such as iron, aluminium, calcium, magnesium and zinc"
            ],

            withdrawal: [
                "Meat: 12 days",
                "Eggs: 4 days"
            ],

            warnings: [
                "Do not mix with other medicinal products.",
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store at 15–30°C.",

            packing:
                "1000 mL."
        },


        ar: {
            dosageForm: "محلول سائل يضاف إلى ماء الشرب",
            pack: "1000 مل",
            targetSpecies: "الدواجن",

            composition: [
                "سيبروفلوكساسين — 100 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج إصابات الجهاز الهضمي والمسالك البولية والجهاز التنفسي الناتجة عن البكتيريا الحساسة للسيبروفلوكساسين مثل Campylobacter وE. coli وHaemophilus وMycoplasma وPasteurella وSalmonella في الدواجن.",

            contraindications:
                "لا يُستخدم في الحالات التي تعاني من الحساسية للسيبروفلوكساسين، أو في الحيوانات التي تعاني من قصور شديد في وظائف الكبد و/أو الكلى.",

            dosage:
                "يُضاف إلى ماء الشرب. الدواجن: 200 مل لكل 300–400 لتر من ماء الشرب لمدة 3–5 أيام.",

            afterOpening:
                "يُستخدم الدواء خلال 90 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "تفاعلات حساسية.",
                "القيء.",
                "الإسهال.",
                "قد يؤدي إعطاء الدواء للحيوانات اليافعة إلى اعتلال المفاصل.",
                "قد تحدث بلورات في البول وتأثيرات على الجهاز العصبي المركزي مثل الدوار والتنبيه."
            ],

            interactions: [
                "التتراسيكلينات",
                "الكلورامفينيكول",
                "الماكروليدات",
                "اللينكوساميدات",
                "النيتروفورانتوين",
                "الأمينوغليكوزيدات",
                "الجيل الثالث من السيفالوسبورينات",
                "البنسلينات واسعة الطيف",
                "مضادات الحموضة المحتوية على الحديد أو الألمنيوم أو الكالسيوم أو المغنيسيوم أو الزنك"
            ],

            withdrawal: [
                "اللحوم: 12 يومًا",
                "البيض: 4 أيام"
            ],

            warnings: [
                "لا يُسمح بخلط الدواء مع أي أدوية أخرى.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة من 15 إلى 30°م.",

            packing:
                "عبوة سعة 1000 مل."
        }

    }
},



  {
    name: "Specticol",
    category: "oral",
    categoryEn: "Oral Solutions",
    categoryAr: "المحاليل الفموية",
    image: "images/oral-solutions/Spicticol.png",

    details: {

        en: {
            dosageForm: "Oral solution",
            pack: "100 mL",
            targetSpecies: "Lambs",

            composition: [
                "Colistin sulphate — 200,000 IU / mL",
                "Spectinomycin — 50 mg / mL"
            ],

            indications:
                "For the treatment of gastrointestinal infections caused by microorganisms sensitive to colistin and spectinomycin, including E. coli, Haemophilus, Mycoplasma and Salmonella spp. in lambs.",

            contraindications:
                "Do not use in animals hypersensitive to colistin and/or spectinomycin, animals with severely impaired renal function, or animals with active microbial digestion. Do not use during pregnancy or lactation. Do not administer with other neuromuscular agents, as this may cause muscular weakness, paresis or complete paralysis leading to respiratory arrest.",

            dosage:
                "Prescription-only medicine. Administer orally. Each press of the dosing pump delivers one dose of 1 mL. Lambs: one dose per 2.5–3 kg body weight twice daily for 3 days.",

            afterOpening:
                "Use within 90 days after first opening.",

            sideEffects: [
                "No undesirable effects are expected when the prescribed dosage regimen is followed.",
                "At high doses, renal dysfunction, neurotoxicity, ototoxicity and neuromuscular blockade may occur."
            ],

            interactions: [
                "Other neuromuscular agents"
            ],

            withdrawal: [
                "Meat: 7 days"
            ],

            warnings: [
                "Do not mix with other medicinal products.",
                "Keep out of reach of children.",
                "For veterinary use only."
            ],

            storage:
                "Store below 25°C and protect from light.",

            packing:
                "100 mL bottle with dosing pump."
        },


        ar: {
            dosageForm: "محلول سائل يعطى عن طريق الفم",
            pack: "100 مل",
            targetSpecies: "الحملان",

            composition: [
                "كوليستين سلفات — 200,000 وحدة دولية / مل",
                "سبكتينومايسين — 50 ملغ / مل"
            ],

            indications:
                "يُستخدم لعلاج الإصابات المعوية والمعدية الناتجة عن الكائنات الدقيقة الحساسة للكوليستين والسبكتينومايسين، مثل E. coli وHaemophilus وMycoplasma وسلالات Salmonella في الحملان.",

            contraindications:
                "لا يُستخدم في حالات فرط الحساسية للكوليستين و/أو السبكتينومايسين، أو في الحيوانات التي تعاني من قصور حاد في وظائف الكلى، أو الحيوانات ذات الهضم الميكروبي النشط. كما لا يُستخدم أثناء الحمل والرضاعة. ولا يُعطى مع العوامل العصبية العضلية الأخرى، فقد يؤدي ذلك إلى ضعف عضلي أو شلل جزئي أو شلل كامل قد يؤدي إلى توقف التنفس.",

            dosage:
                "يُصرف بوصفة طبية فقط. يُعطى عن طريق الفم. كل ضغطة على مضخة الجرعات تعطي جرعة واحدة مقدارها 1 مل. الحملان: جرعة واحدة لكل 2.5–3 كغ من وزن الحيوان مرتين يوميًا لمدة 3 أيام.",

            afterOpening:
                "يُستخدم المستحضر خلال 90 يومًا من تاريخ فتح العبوة.",

            sideEffects: [
                "لا يُتوقع حدوث تأثيرات غير مرغوبة عند الالتزام بالجرعات الموصى بها.",
                "عند الجرعات العالية قد يحدث قصور في وظائف الكلى، وسُمية عصبية، وسُمية أذنية، وحصار عصبي عضلي."
            ],

            interactions: [
                "العوامل العصبية العضلية الأخرى"
            ],

            withdrawal: [
                "اللحوم: 7 أيام"
            ],

            warnings: [
                "لا يُخلط مع أي أدوية أخرى.",
                "يُحفظ بعيدًا عن متناول الأطفال.",
                "للاستخدام البيطري فقط."
            ],

            storage:
                "يُحفظ في درجة حرارة أقل من 25°م وبعيدًا عن الضوء.",

            packing:
                "عبوة سعة 100 مل مزودة بمضخة للجرعات."
        }

    }
},
    /* =====================================================
   AEROSOL SPRAYS
===================================================== */

{
    name: "4X4 Spray",
    category: "aerosol",
    categoryEn: "Aerosol Sprays",
    categoryAr: "البخاخات",
    image: "images/aerosol-sprays/4x4.png"
},


/* =====================================================
   PESSARIES
===================================================== */

{
    name: "Oxy-Ject Pessary",
    category: "pessaries",
    categoryEn: "Pessaries",
    categoryAr: "التحاميل",
    image: "images/pessaries/Oxy-Ject pessary.png",

    details: {

        en: {
            dosageForm: "Tetracycline effervescent pessaries",
            pack: "20 pessaries",
            targetSpecies: "Not specified on the available product label",

            composition: [
                "Each pessary contains Tetracycline (as HCl) — 1 g"
            ],

            indications:
                "Not specified on the available product label.",

            contraindications:
                "Not specified on the available product label.",

            dosage:
                "Not specified on the available product label.",

            afterOpening:
                "Not specified on the available product label.",

            sideEffects: [
                "Not specified on the available product label."
            ],

            interactions: [
                "Not specified on the available product label."
            ],

            withdrawal: [
                "Not specified on the available product label."
            ],

            warnings: [
                "For veterinary use only.",
                "Keep out of reach of children."
            ],

            storage:
                "Store in a dry place and keep out of reach of children.",

            packing:
                "Container of 20 pessaries."
        },


        ar: {
            dosageForm: "تحاميل فوارة من التتراسيكلين",
            pack: "20 تحميلة",
            targetSpecies: "لم تُحدد الأصناف المستهدفة على العبوة المتوفرة",

            composition: [
                "تحتوي كل تحميلة على تتراسيكلين (على هيئة هيدروكلوريد) — 1 غم"
            ],

            indications:
                "غير مذكورة على العبوة المتوفرة.",

            contraindications:
                "غير مذكورة على العبوة المتوفرة.",

            dosage:
                "غير مذكورة على العبوة المتوفرة.",

            afterOpening:
                "غير مذكورة على العبوة المتوفرة.",

            sideEffects: [
                "غير مذكورة على العبوة المتوفرة."
            ],

            interactions: [
                "غير مذكورة على العبوة المتوفرة."
            ],

            withdrawal: [
                "غير مذكورة على العبوة المتوفرة."
            ],

            warnings: [
                "للاستعمال البيطري فقط.",
                "يُحفظ بعيدًا عن متناول الأطفال."
            ],

            storage:
                "يُحفظ في مكان جاف وبعيدًا عن متناول الأطفال.",

            packing:
                "عبوة تحتوي على 20 تحميلة."
        }

    }
},




/* =====================================================
   INTRAMAMMARY PRODUCTS
===================================================== */

{
    name: "NeoMoxine-Mast",
    category: "intramammary",
    categoryEn: "Intramammary Products",
    categoryAr: "مستحضرات الضرع",
    image: "images/intramammary/NeoMoxine-Mast.png",

    details: {

        en: {
            dosageForm: "Intramammary suspension",
            pack: "4 × 10 mL syringes",
            targetSpecies: "Cattle",

            composition: [
                "Each 10 mL syringe contains:",
                "Amoxycillin trihydrate — 1000 mg",
                "Neomycin sulphate — 500 mg"
            ],

            indications:
                "For the treatment of mastitis infections in lactating cows caused by microorganisms sensitive to amoxycillin trihydrate and neomycin sulphate, including E. coli, Staphylococcus and Streptococcus.",

            contraindications:
                "Do not administer in subtherapeutic doses or to animals with known hypersensitivity to amoxycillin trihydrate or neomycin sulphate. Do not administer together with bacteriostatic chemotherapeutics. Do not use in animals with impaired renal and/or liver function, in overdose, or in pregnant animals.",

            dosage:
                "For intramammary administration. Milk out the udder completely. Wash the udder and teats thoroughly with warm water containing a suitable dairy antiseptic, then dry thoroughly. Clean and disinfect the teat with alcohol. Shake the syringe well before use. Remove the syringe tip cover and insert the tip into the teat orifice. Express the syringe contents slowly into the affected quarter, withdraw the syringe and grasp the end of the teat firmly, then massage the medication upward into the milk cistern. Use one injector daily per affected quarter for a maximum of 3 days. Treatment may be repeated after 12 hours.",

            afterOpening:
                "Not specified in the leaflet.",

            sideEffects: [
                "Renal dysfunction.",
                "Neurotoxicity.",
                "Neuromuscular blockade."
            ],

            interactions: [
                "Lincosamides",
                "Tetracyclines",
                "Macrolides"
            ],

            withdrawal: [
                "Milk: 7 days",
                "Meat: 20 days"
            ],

            warnings: [
                "Do not mix with other medicinal products."
            ],

            storage:
                "Store at 15–30°C, protected from light and out of reach of children.",

            packing:
                "4 syringes × 10 mL per box."
        },


        ar: {
            dosageForm: "معلّق للحقن داخل الضرع",
            pack: "4 حقن × 10 مل",
            targetSpecies: "الأبقار",

            composition: [
                "تحتوي كل حقنة سعة 10 مل على:",
                "أموكسيسيلين ثلاثي الهيدرات — 1000 ملغ",
                "نيومايسين سلفات — 500 ملغ"
            ],

            indications:
                "يُستخدم نيوموكسين-ماست لعلاج إصابات التهاب الضرع في الأبقار المنتجة للحليب الناتجة عن الميكروبات الحساسة للأموكسيسيلين ثلاثي الهيدرات والنيومايسين سلفات، مثل E. coli وStaphylococcus وStreptococcus.",

            contraindications:
                "لا يُعطى بجرعة أقل من الحد المطلوب، ولا للحيوانات المعروفة بحساسيتها للأموكسيسيلين ثلاثي الهيدرات أو النيومايسين سلفات. لا يُستخدم مع العلاجات الكيميائية ذات التأثير المثبط لنمو البكتيريا. لا يُستخدم في الحيوانات التي تعاني من قصور في وظائف الكلى و/أو الكبد، أو في حالة زيادة الجرعة، أو أثناء الحمل.",

            dosage:
                "يُعطى داخل الضرع. يُفرغ الضرع بالكامل من الحليب، ثم يُغسل الضرع والحلمات جيدًا بماء دافئ يحتوي على مطهر مناسب للألبان، ويُجفف جيدًا. تُنظف الحلمة وتُعقم بالكحول. تُخض الحقنة جيدًا قبل الاستخدام. يُرفع غطاء رأس الحقنة ويُدخل رأسها في فتحة الحلمة، ثم تُفرغ محتويات الحقنة ببطء داخل ربع الضرع المصاب. بعد سحب الحقنة تُمسك نهاية الحلمة جيدًا، ثم يُدلك الدواء إلى أعلى داخل الضرع. تُستخدم حقنة واحدة يوميًا لكل ربع مصاب لمدة لا تتجاوز 3 أيام. ويمكن إعادة العلاج بعد 12 ساعة.",

            afterOpening:
                "لم تُذكر مدة الاستخدام بعد فتح العبوة في النشرة.",

            sideEffects: [
                "قصور في وظائف الكلى.",
                "سُمية عصبية.",
                "حصر عصبي عضلي."
            ],

            interactions: [
                "اللينكوساميدات",
                "التتراسيكلينات",
                "الماكروليدات"
            ],

            withdrawal: [
                "الحليب: 7 أيام",
                "اللحوم: 20 يومًا"
            ],

            warnings: [
                "لا يُسمح بخلط الدواء مع أي أدوية أخرى."
            ],

            storage:
                "يُحفظ على درجة حرارة من 15 إلى 30°م، بعيدًا عن الضوء وبعيدًا عن متناول الأطفال.",

            packing:
                "4 حقن سعة 10 مل لكل علبة."
        }

    }
},

];

/* =====================================================
   CREATE PRODUCT CARDS
===================================================== */

function renderProducts() {

    const searchText = productSearch.value
        .trim()
        .toLowerCase();

    catalogueGrid.innerHTML = "";

    let visibleCount = 0;

    const currentLanguage =
        document.documentElement.lang === "ar"
            ? "ar"
            : "en";


    products.forEach(product => {

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;


        const searchableText =
            `${product.name} ${product.categoryEn} ${product.categoryAr}`
                .toLowerCase();


        const matchesSearch =
            searchableText.includes(searchText);


        if (!matchesCategory || !matchesSearch) {
            return;
        }


        visibleCount++;


        const card = document.createElement("article");

        card.className =
            "catalogue-card real-product-card";


        /*
           encodeURI مهم بسبب وجود:
           spaces
           %
           +
           داخل أسماء بعض الصور
        */

        const imagePath =
            encodeURI(product.image);


        card.innerHTML = `

            <div class="real-product-image">

                <img
                    src="${imagePath}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>


            <div class="real-product-info">

                <span class="real-product-category">

                    ${
                        currentLanguage === "ar"
                            ? product.categoryAr
                            : product.categoryEn
                    }

                </span>


                <h2>
                    ${product.name}
                </h2>


                <button
                    class="product-details-btn"
                    type="button">

                    ${
                        currentLanguage === "ar"
                            ? "عرض التفاصيل"
                            : "View Details"
                    }

                </button>

            </div>

        `;

catalogueGrid.appendChild(card);

const detailsButton =
    card.querySelector(".product-details-btn");

detailsButton.addEventListener("click", () => {

    if (product.details) {
        openProductDetails(product);
    } else {
        showComingSoon();
    }

});

});

noResults.hidden =
    visibleCount !== 0;

}


/* =====================================================
   FILTER BUTTONS
===================================================== */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectedCategory =
            button.dataset.category;


        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        renderProducts();

    });

});


/* =====================================================
   SEARCH
===================================================== */

productSearch.addEventListener(
    "input",
    renderProducts
);


/* =====================================================
   SEARCH LANGUAGE
===================================================== */

function updateSearchLanguage() {

    const language =
        document.documentElement.lang === "ar"
            ? "ar"
            : "en";


    productSearch.placeholder =
        productSearch.getAttribute(
            language === "ar"
                ? "data-placeholder-ar"
                : "data-placeholder-en"
        );


    productSearch.setAttribute(
        "aria-label",
        productSearch.placeholder
    );

}


/* =====================================================
   LANGUAGE BUTTON
===================================================== */

document
    .getElementById("languageBtn")
    .addEventListener("click", () => {

        updateSearchLanguage();

        setTimeout(() => {

            renderProducts();

        }, 0);

    });


/* =====================================================
   CATEGORY FROM HOME PAGE
===================================================== */

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const categoryFromURL =
    urlParams.get("category");


if (categoryFromURL) {

    const matchingButton =
        document.querySelector(
            `.filter-btn[data-category="${categoryFromURL}"]`
        );


    if (matchingButton) {

        selectedCategory =
            categoryFromURL;


        filterButtons.forEach(button => {

            button.classList.remove("active");

        });


        matchingButton.classList.add("active");

    }

}


/* =====================================================
   INITIAL LOAD
===================================================== */

updateSearchLanguage();

renderProducts();
/* =====================================================
   PRODUCT DETAILS MODAL
===================================================== */

const productModal =
    document.createElement("div");

productModal.className = "product-modal";

productModal.innerHTML = `

    <div class="product-modal-overlay"></div>

    <div class="product-modal-panel">

        <button
            class="product-modal-close"
            type="button"
            aria-label="Close">
            ×
        </button>

        <div id="productModalContent"></div>

    </div>

`;

document.body.appendChild(productModal);


const productModalContent =
    document.getElementById(
        "productModalContent"
    );


function createList(items) {

    return `

        <ul class="product-detail-list">

            ${items.map(item => `
                <li>${item}</li>
            `).join("")}

        </ul>

    `;

}


function createDetailSection(
    titleEn,
    titleAr,
    content
) {

    const language =
        document.documentElement.lang === "ar"
            ? "ar"
            : "en";

    const title =
        language === "ar"
            ? titleAr
            : titleEn;

    return `

        <section class="modal-detail-section">

            <h3>${title}</h3>

            ${content}

        </section>

    `;

}


function openProductDetails(product) {

    const language =
        document.documentElement.lang === "ar"
            ? "ar"
            : "en";


    const details =
        product.details[language];


    const category =
        language === "ar"
            ? product.categoryAr
            : product.categoryEn;


    const labels =
        language === "ar"
            ? {
                dosageForm: "الشكل الصيدلاني",
                pack: "حجم العبوة",
                species: "الحيوانات المستهدفة",
                composition: "التركيب",
                indications: "دواعي الاستعمال",
                contraindications: "موانع الاستعمال",
                dosage: "الجرعة وطريقة الاستعمال",
                afterOpening: "مدة الاستخدام بعد فتح العبوة",
                sideEffects: "الآثار الجانبية",
                interactions: "التداخلات الدوائية",
                withdrawal: "فترة السحب",
                warnings: "التحذيرات",
                storage: "ظروف التخزين",
                packing: "التعبئة"
            }
            : {
                dosageForm: "Dosage Form",
                pack: "Pack Size",
                species: "Target Species",
                composition: "Composition",
                indications: "Indications",
                contraindications: "Contraindications",
                dosage: "Dosage & Administration",
                afterOpening: "After Opening",
                sideEffects: "Side Effects",
                interactions: "Drug Interactions",
                withdrawal: "Withdrawal Period",
                warnings: "Warnings",
                storage: "Storage",
                packing: "Packing"
            };


    productModalContent.innerHTML = `

        <div class="product-modal-header">

            <div class="modal-product-image">

                <img
                    src="${encodeURI(product.image)}"
                    alt="${product.name}"
                >

            </div>


            <div class="modal-product-intro">

                <span class="modal-category">
                    ${category}
                </span>

                <h2>
                    ${product.name}
                </h2>


                <div class="modal-quick-info">

                    <div>

                        <span>
                            ${labels.dosageForm}
                        </span>

                        <strong>
                            ${details.dosageForm}
                        </strong>

                    </div>


                    <div>

                        <span>
                            ${labels.pack}
                        </span>

                        <strong>
                            ${details.pack}
                        </strong>

                    </div>


                    <div>

                        <span>
                            ${labels.species}
                        </span>

                        <strong>
                            ${details.targetSpecies}
                        </strong>

                    </div>

                </div>

            </div>

        </div>


        <div class="product-modal-details">


            ${createDetailSection(
                "Composition",
                "التركيب",
                createList(
                    details.composition
                )
            )}


            ${createDetailSection(
                "Indications",
                "دواعي الاستعمال",
                `<p>${details.indications}</p>`
            )}


            ${createDetailSection(
                "Contraindications",
                "موانع الاستعمال",
                `<p>${details.contraindications}</p>`
            )}


            ${createDetailSection(
                "Dosage & Administration",
                "الجرعة وطريقة الاستعمال",
                `<p>${details.dosage}</p>`
            )}


            ${createDetailSection(
                "After Opening",
                "مدة الاستخدام بعد فتح العبوة",
                `<p>${details.afterOpening}</p>`
            )}


            ${createDetailSection(
                "Side Effects",
                "الآثار الجانبية",
                createList(
                    details.sideEffects
                )
            )}


            ${createDetailSection(
                "Drug Interactions",
                "التداخلات الدوائية",
                createList(
                    details.interactions
                )
            )}


            ${createDetailSection(
                "Withdrawal Period",
                "فترة السحب",
                createList(
                    details.withdrawal
                )
            )}


            ${createDetailSection(
                "Warnings",
                "التحذيرات",
                createList(
                    details.warnings
                )
            )}


            ${createDetailSection(
                "Storage",
                "ظروف التخزين",
                `<p>${details.storage}</p>`
            )}


            ${createDetailSection(
                "Packing",
                "التعبئة",
                `<p>${details.packing}</p>`
            )}

        </div>

    `;


    productModal.classList.add("show");

    document.body.classList.add(
        "modal-open"
    );

}


function closeProductDetails() {

    productModal.classList.remove("show");

    document.body.classList.remove(
        "modal-open"
    );

}


function showComingSoon() {

    const language =
        document.documentElement.lang === "ar"
            ? "ar"
            : "en";

    alert(
        language === "ar"
            ? "سيتم إضافة معلومات هذا المنتج قريبًا."
            : "Product details will be added soon."
    );

}


productModal
    .querySelector(".product-modal-close")
    .addEventListener(
        "click",
        closeProductDetails
    );


productModal
    .querySelector(".product-modal-overlay")
    .addEventListener(
        "click",
        closeProductDetails
    );


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProductDetails();

        }

    }
);