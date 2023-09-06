const countries =  [
     {
         name: "Afghanistan",
         value: "+93",
         src: "af.svg",
         mask: "99-999-9999"
     },
     {
         name: "Albania",
         value: "+355",
         src: "al.svg",
         mask: "(999)999-999"
     },
     {
         name: "Andorra",
         value: "+376",
         src: "ad.svg",
         mask: "999-999"
     },
     {
         name: "Armenia",
         value: "+374",
         src: "am.svg",
         mask: "99-999-999"
     },
     {
         name: "Austria",
         value: "+43",
         src: "at.svg",
         mask: "(999)999-9999"
     },
     {
         name: "Azerbaijan",
         value: "+994",
         src: "az.svg",
         mask: "99-999-99-99"
     },
     {
         name: "Bahrain",
         value: "+973",
         src: "bh.svg",
         mask: "9999-9999"
     },
     {
         name: "Bangladesh",
         value: "+880",
         src: "bd.svg",
         mask: "9999-999999"
     },
     {
         name: "Belarus",
         value: "+375",
         src: "by.svg",
         mask: "(99)999-99-99"
     },
     {
         name: "Belgium",
         value: "+32",
         src: "be.svg",
         mask: "(999)999-999"
     },
     {
         name: "Bosnia and Herzegovina",
         value: "+387",
         src: "ba.svg",
         mask: "99-9999[9]"
     },
     {
         name: "Brunei Darussalam",
         value: "+673",
         src: "bn.svg",
         mask: "999-9999"
     },
     {
         name: "Bulgaria",
         value: "+359",
         src: "bg.svg",
         mask: "(999)999-999"
     },
     {
         name: "China",
         value: "+86",
         src: "cn.svg",
         mask: "(999)9999-999[9]"
     },
     {
         name: "Croatia",
         value: "+385",
         src: "hr.svg",
         mask: "99-999-999"
     },
     {
         name: "Cyprus",
         value: "+357",
         src: "cy.svg",
         mask: "99-999-999"
     },
     {
         name: "Czech Republic",
         value: "+420",
         src: "cz.svg",
         mask: "(999)999-999"
     },
     {
         name: "Denmark",
         value: "+45",
         src: "dk.svg",
         mask: "99-99-99-99"
     },
     {
         name: "Egypt",
         value: "+20",
         src: "eg.svg",
         mask: "(999)999-9999"
     },
     {
         name: "Equatorial Guinea",
         value: "+240",
         src: "gq.svg",
         mask: "99-999-9999"
     },
     {
         name: "Eritrea",
         value: "+291",
         src: "er.svg",
         mask: "9-999-999"
     },
     {
         name: "Estonia",
         value: "+372",
         src: "ee.svg",
         mask: "999[9]-9999"
     },
     {
         name: "Eswatini",
         value: "+268",
         src: "sz.svg",
         mask: "99-99-9999"
     },
     {
         name: "Ethiopia",
         value: "+251",
         src: "et.svg",
         mask: "99-999-9999"
     },
     {
         name: "Finland",
         value: "+358",
         src: "fi.svg",
         mask: "(999)999-99-99"
     },
     {
         name: "France",
         value: "+33",
         src: "fr.svg",
         mask: "(999)999-999"
     },
     {
         name: "Gabon",
         value: "+241",
         src: "ga.svg",
         mask: "9-99-99-99"
     },
     {
         name: "Gambia",
         value: "+220",
         src: "gm.svg",
         mask: "(999)99-99"
     },
     {
         name: "Georgia",
         value: "+995",
         src: "ge.svg",
         mask: "(999)999-999"
     },
     {
         name: "Germany",
         value: "+49",
         src: "de.svg",
         mask: "[9][9][9][9] 99[9]-999[9]"
     },
     {
         name: "Ghana",
         value: "+233",
         src: "gh.svg",
         mask: "(999)999-999"
     },
     {
         name: "Greece",
         value: "+30",
         src: "gr.svg",
         mask: "(999)999-9999"
     },
     {
         name: "Guinea",
         value: "+224",
         src: "gn.svg",
         mask: "99-999-999"
     },
     {
         name: "Guinea-Bissau",
         value: "+245",
         src: "gw.svg",
         mask: "9-999999"
     },
     {
         name: "Hong Kong",
         value: "+852",
         src: "hk.svg",
         mask: "9999-9999"
     },
     {
         name: "Hungary",
         value: "+36",
         src: "hu.svg",
         mask: "(999)999-999"
     },
     {
         name: "Iceland",
         value: "+354",
         src: "is.svg",
         mask: "999-9999"
     },
     {
         name: "India",
         value: "+91",
         src: "in.svg",
         mask: "(9999)999-999"
     },
     {
         name: "Indonesia",
         value: "+62",
         src: "id.svg",
         mask: '99-999-9999'
     },
     {
         name: "Iran",
         value: "+98",
         src: "ir.svg",
         mask: "(999)999-9999"
     },
     {
         name: "Iraq",
         value: "+924",
         src: "iq.svg",
         mask: "(999)999-9999"
     },
     {
         name: "Ireland",
         value: "+353",
         src: "ie.svg",
         mask: "(999)999-999"
     },
     {
         name: "Israel",
         value: "+972",
         src: "il.svg",
         mask: "[9]9-999-9999"
     },
     {
         name: "Italy",
         value: "+39",
         src: "it.svg",
         mask: "(999)9999-999"
     },
     {
         name: "Japan",
         value: "+81",
         src: "jp.svg",
         mask: "99-9999-9999"
     },
     {
         name: "Jordan",
         value: "+962",
         src: "jo.svg",
         mask: "9-9999-9999"
     },
     {
         name: "Kazakhstan",
         value: "+77",
         src: "kz.svg",
         mask: "(999)999-99-99"
     },
     {
         name: "Kenya",
         value: "+254",
         src: "ke.svg",
         mask: "999-999999"
     },
     {
         name: "Kuwait",
         value: "+965",
         src: "kw.svg",
         mask: "9999-9999"
     },
     {
         name: "Kyrgyzstan",
         value: "+996",
         src: "kg.svg",
         mask: "(999)999-999"
     },
     {
         name: "Latvia",
         value: "+371",
         src: "lv.svg",
         mask: "99-999-999"
     },
     {
         name: "Lebanon",
         value: "+961",
         src: "lb.svg",
         mask: "[9]9-999-999"
     },
     {
         name: "Lesotho",
         value: "+266",
         src: "ls.svg",
         mask: "9-999-9999"
     },
     {
         name: "Liberia",
         value: "+231",
         src: "lr.svg",
         mask: "99-999-999"
     },
     {
         name: "Libya",
         value: "+218",
         src: "ly.svg",
         mask: "99-999-999[9]"
     },
     {
         name: "Liechtenstein",
         value: "+423",
         src: "li.svg",
         mask: "(999)999-9999"
     },
     {
         name: "Lithuania",
         value: "+370",
         src: "lt.svg",
         mask: "(999)99-999"
     },
     {
         name: "Luxembourg",
         value: "+352",
         src: "lu.svg",
         mask: "(999)999-999"
     },
     {
         name: "Macau",
         value: "+853",
         src: "mo.svg",
         mask: "9999-9999"
     },
     {
         name: "Madagascar",
         value: "+261",
         src: "mg.svg",
         mask: "99-99-99999"
     },
     {
         name: "Malaysia",
         value: "+60",
         src: "my.svg",
         mask: "99-999-999[9]"
     },
     {
         name: "Maldives",
         value: "+960",
         src: "mv.svg",
         mask: "999-9999"
     },
     {
         name: "Mali",
         value: "+223",
         src: "ml.svg",
         mask: "99-99-9999"
     },
     {
         name: "Malta",
         value: "+356",
         src: "mt.svg",
         mask: "9999-9999"
     },
     {
         name: "Mauritania",
         value: "+222",
         src: "mr.svg",
         mask: "99-99-9999"
     },
     {
         name: "Mauritius",
         value: "+230",
         src: "mu.svg",
         mask: "999-9999"
     },
     {
         name: "Moldova",
         value: "+373",
         src: "md.svg",
         mask: "9999-9999"
     },
     {
         name: "Monaco",
         value: "+377",
         src: "mc.svg",
         mask: '99-999-999'
     },
     {
         name: "Mongolia",
         value: "+976",
         src: "mn.svg",
         mask: "99-99-9999"
     },
     {
         name: "Montenegro",
         value: "+382",
         src: "me.svg",
         mask: "99-999-999"
     },
     {
         name: "Namibia",
         value: "+224",
         src: "na.svg",
         mask: "99-999-9999"
     },
     {
         name: "Nepal",
         value: "+977",
         src: "np.svg",
         mask: "99-999-999"
     },
     {
         name: "Netherlands",
         value: "+31",
         src: "nl.svg",
         mask: "99-999-9999"
     },
     {
         name: "Norway",
         value: "+47",
         src: "no.svg",
         mask: "(999)99-999"
     },
     {
         name: "Oman",
         value: "+968",
         src: "om.svg",
         mask: "99-999-999"
     },
     {
         name: "Pakistan",
         value: "+92",
         src: "pk.svg",
         mask: "(999)999-9999"
     },
     {
         name: "Palestine",
         value: "+970",
         src: "ps.svg",
         mask: "99-999-9999"
     },
     {
         name: "Philippines",
         value: "+63",
         src: "ph.svg",
         mask: "(999)999-9999"
     },
     {
         name: "Poland",
         value: "+48",
         src: "pl.svg",
         mask: "(999)999-999"
     },
     {
         name: "Portugal",
         value: "+351",
         src: "pt.svg",
         mask: "99-999-9999"
     },
     {
         name: "Qatar",
         value: "+974",
         src: "qa.svg",
         mask: "9999-9999"
     },
     {
         name: "Romania",
         value: "+40",
         src: "ro.svg",
         mask: "99-999-9999"
     },
     {
         name: "Russia",
         value: "+7",
         src: "ru.svg",
         mask: "(999)999-99-99"
     },
     {
         name: "San Marino",
         value: "+378",
         src: "sm.svg",
         mask: "9999-999999"
     },
     {
         name: "Saudi Arabia",
         value: "+966",
         src: "sa.svg",
         mask: "9[9]-999[9]-9999"
     },
     {
         name: "Senegal",
         value: "+221",
         src: "sn.svg",
         mask: "99-999-9999"
     },
     {
         name: "Serbia",
         value: "+381",
         src: "rs.svg",
         mask: "99-999-9999"
     },
     {
         name: "Seychelles",
         value: "+248",
         src: "sc.svg",
         mask: "9-999-999"
     },
     {
         name: "Sierra Leone",
         value: "+232",
         src: "sl.svg",
         mask: "99-999999"
     },
     {
         name: "Singapore",
         value: "+65",
         src: "sg.svg",
         mask: "9999-9999"
     },
     {
         name: "Slovakia",
         value: "+421",
         src: "sk.svg",
         mask: "(999)999-999"
     },
     {
         name: "Slovenia",
         value: "+386",
         src: "si.svg",
         mask: "99-999-999"
     },
     {
         name: "Spain",
         value: "+34",
         src: "es.svg",
         mask: "(999)999-999"
     },
     {
         name: "Sweden",
         value: "+46",
         src: "se.svg",
         mask: "99-999-9999"
     },
     {
         name: "Switzerland",
         value: "+41",
         src: "ch.svg",
         mask: "99-999-9999"
     },
     {
         name: "Tanzania",
         value: "+255",
         src: "tz.svg",
         mask: "99-999-9999"
     },
     {
         name: "Thailand",
         value: "+66",
         src: "th.svg",
         mask: "99-999-999[9]"
     },
     {
         name: "Togo",
         value: "+228",
         src: "tg.svg",
         mask: "99-999-999"
     },
     {
         name: "Tunisia",
         value: "+216",
         src: "tn.svg",
         mask: "99-999-999"
     },
     {
         name: "Turkey",
         value: "+90",
         src: "tr.svg",
         mask: "(999)999-9999"
     },
     {
         name: "Turkmenistan",
         value: "+993",
         src: "tm.svg",
         mask: "9-999-9999"
     },
     {
         name: "Uganda",
         value: "+256",
         src: "ug.svg",
         mask: "(999)999-999"
     },
     {
         name: "Ukraine",
         value: "+380",
         src: "ua.svg",
         mask: "(99)999-99-99"
     },
     {
         name: "United Arab Emirates",
         value: "+971",
         src: "ae.svg",
         mask: "9[9]-999-9999"
     },
     {
         name: "United Kingdom",
         value: "+44",
         src: "gb.svg",
         mask: "99-9999-9999"
     },
     {
         name: "Uzbekistan",
         value: "+998",
         src: "uz.svg",
         mask: "99-999-9999"
     },
     {
         name: "Yemen",
         value: "+967",
         src: "ye.svg",
         mask: "9[9][9]-999-999"
     },
     {
         name: "Zambia",
         value: "+260",
         src: "zm.svg",
         mask: "99-999-9999"
     },
     {
         name: "Zimbabwe",
         value: "+263",
         src: "zw.svg",
         mask: "9-999999"
     }
 ]

export default countries
