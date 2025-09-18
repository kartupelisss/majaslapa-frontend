// lib/clientsData.ts
export type ClientItem = {
  slug: string;
  title: string;
  short: string;   // īsais apraksts kartītēm / teaser
  long: string;    // garais apraksts detalizētajai lapai
};

export const clientsData: ClientItem[] = [
  {
    slug: "uznemumi",
    title: "Uzņēmumi",
    short: `Strādājam gan ar vietējiem, gan starptautiskiem uzņēmumiem, palīdzot tiem orientēties sarežģītā nodokļu un juridiskajā vidē. 
Mēs sniedzam atbalstu ikdienas nodokļu jautājumos, transfertcenu dokumentācijā, darījumu strukturēšanā un M&A procesos, kā arī uzņēmumu un nemateriālo aktīvu vērtēšanā. Palīdzam ieviest darbinieku motivācijas programmas, nodrošinām starptautisko mobilitāti un risinām strīdus ar VID. 
Mūsu pieeja apvieno nodokļu, juridisko un finanšu ekspertīzi, lai radītu praktiskus risinājumus, kas samazina riskus un veicina uzņēmumu izaugsmi.`,
    long: `Uzņēmumi – neatkarīgi no to lieluma, nozares vai darbības– ir viena no galvenajām mērķa klientu grupām mūsu praksē. Šajā segmentā ietilpst uzņēmumi, kas darbojas vienā tirgū un nodarbina dažus darbiniekus, gan vidēja lieluma uzņēmumi ar plašu darbības spektru, kā arī starptautiskas uzņēmumu grupas, kuras organizē kompleksus darījumus un veic darbību vairākās valstīs. Katrs no šiem uzņēmumiem saskaras ar līdzīgām, taču reizē atšķirīgām problēmām: nodokļu un juridiskā vide, darījumu strukturēšana, risku pārvaldība, kapitāla piesaiste, darbinieku motivācija, intelektuālā īpašuma aizsardzība, kā arī biznesa paplašināšana jaunos tirgos.
Mūsu pievienotā vērtība šiem uzņēmumiem slēpjas spējā apvienot nodokļu, juridiskās, transfertcenu, vērtēšanas un biznesa konsultāciju zināšanas, lai radītu praktiskus un efektīvus risinājumus. Mēs kļūstam par stratēģisku partneri, kas palīdz ne tikai ikdienas darījumos, bet arī ilgtermiņa izaugsmes un ilgtspējīgas darbības nodrošināšanā.

Uzņēmumu vajadzības un izaicinājumi
1. Strauji mainīga regulatīvā vide
Uzņēmumi saskaras ar biežām izmaiņām nodokļu likumdošanā, grāmatvedības standartiem un darba tiesību regulējumos. Latvijā un Eiropas Savienībā šīs izmaiņas nereti tiek ieviestas īsā laikā, kas rada ievērojamu administratīvo slogu. Mazāki uzņēmumi bieži nespēj sekot līdzi visām prasībām, savukārt lielākiem uzņēmumiem nepieciešami strukturēti risinājumi, lai saglabātu atbilstību starptautiskā mērogā.
2. Nodokļu un finanšu plānošana
Efektīva nodokļu plānošana ir būtiska jebkuram uzņēmumam – sākot no darbības uzsākšanas līdz starptautisku investīciju piesaistei. Ne tikai peļņas nodoklis (UIN), bet arī PVN, IIN, muitas un akcīzes nodokļi var būtiski ietekmēt uzņēmuma naudas plūsmas un konkurētspēju.
3. Darījumu strukturēšana un paplašināšanās
Uzņēmumi aug, veic pārrobežu darījumus, apvienošanas un pārņemšanas (M&A) projektus. Šādos gadījumos nepieciešama profesionāla palīdzība darījumu plānošanā, risku analīzē, un darījumu īstenošanā.
4. Cilvēkresursu un mobilitātes jautājumi
Globalizācija un attālinātais darbs nozīmē, ka uzņēmumiem jāspēj nodrošināt darbinieku mobilitāti starp valstīm, izstrādāt motivācijas programmas (akciju opcijas, daļu piešķiršana), vienlaikus ievērojot nodokļu prasības un darba tiesību regulējumu.
5. Intelektuālais īpašums un inovācijas
Daudzi uzņēmumi rada vai izmanto nemateriālos aktīvus – preču zīmes, programmatūru, tehnoloģiskos risinājumus. Šo aktīvu strukturēšana, aizsardzība un licencēšana ir būtiska gan no nodokļu, gan no biznesa stratēģijas skatpunkta.

Kā mēs palīdzam uzņēmumiem?
Nodokļu konsultācijas un plānošana
• Ikdienas nodokļu konsultācijas – konsultējam par korektu nodokļu piemērošanu visu veidu darījumiem.
• Nodokļu risku izvērtēšana – analīze par iespējamiem nodokļu riskiem, VID pārbaužu riskiem, preventīvi pasākumi un dokumentācijas izstrāde.
• Starptautiskā nodokļu plānošana – struktūru veidošana pārrobežu darījumiem, investīciju ienākumu plūsmas optimizācija.
• Ģimenes uzņēmumu un privātpersonu nodokļu plānošana – palīdzam sakārtot mantiskās un nodokļu attiecības.
Transfertcenas un starptautiskās prasības
• Transfertcenu dokumentācijas sagatavošana (vietējā un globālā).
• Politikas izstrāde un adaptācija grupas ietvaros.
• Darījumu tirgus vērtības noteikšana – preču, pakalpojumu, finanšu darījumiem un intelektuālajam īpašumam.
• Strīdu risināšana ar VID transfertcenu jautājumos.
Juridiskie un korporatīvie pakalpojumi
• Uzņēmumu reģistrācija, izmaiņas, likvidācija.
• Dažādu veidu līgumu un dokumentu sagatavošana.
• M&A projekti – darījumu strukturēšana, juridiskais un nodokļu due diligence, līgumu sagatavošana.
• Pārstāvība tiesās un strīdos ar VID – gan administratīvajā, gan tiesvedības procesā.
Vērtēšana un biznesa konsultācijas
• Biznesa vērtēšana – uzņēmuma vai atsevišķu tā daļu vērtība M&A, restrukturizācijas vai investīciju procesiem.
• Nemateriālo aktīvu vērtēšana – preču zīmes, licences, programmatūras, patenti u.c.
• Finanšu modelēšana un prognozes – naudas plūsmas modeļi, DCF aprēķini, scenāriju analīze.
• Stratēģiskās konsultācijas – biznesa attīstības virzienu izvērtēšana.
Global Workforce & Mobility
• Darbinieku mobilitātes risinājumi – komandējumi, darba attiecības vairākās valstīs, nodokļu režīmu izvērtēšana.
• Motivācijas programmas – opcijas, daļu piešķiršana, efektīvas bonusu struktūras.
• Atbilstība darba tiesībām un nodokļu prasībām.
Inovāciju un tehnoloģiju ieviešana nodokļu jomā
• LegalTech risinājumi – procesu digitalizācija, automatizēti rīki nodokļu un juridisko risku pārvaldībai.
• Atbilstības sistēmu ieviešana – nodokļu un grāmatvedības procesu pārskatāmība un caurskatāmība.

Mūsu darba pieeja
Mēs ticam, ka veiksmīgākās sadarbības ar uzņēmumiem balstās uz ilgtermiņa attiecībām, kurās mūsu loma ir nevis tikai “ārējs konsultants”, bet gan stratēģiskais partneris. Praktiski tas nozīmē:
• padziļinātu klienta biznesa izpratni,
• elastīgu risinājumu izstrādi atbilstoši konkrētām vajadzībām,
• proaktīvu risku identificēšanu un mazināšanu,
• caurskatāmu cenu politiku un uzticamu komunikāciju.

Kāpēc uzņēmumi izvēlas mūs?
1. Praktiska pieeja – mēs piedāvājam ne tikai teorētiskus risinājumus, bet arī īstenojamus soļus, kas reāli darbojas.
2. Starptautiskā pieredze – esam strādājuši ar dažādu nozaru uzņēmumiem Latvijā un ārpus tās.
3. Daudznozaru kompetence – nodokļi, tiesības, transfertcenas, vērtēšana, biznesa stratēģija – viss vienuviet.
4. Fokuss uz rezultātu – mūsu mērķis ir uzņēmuma izaugsme un droša darbība, mazinot riskus un izmaksas.

Uzņēmumi ir ļoti daudzveidīgi, taču viņus visus vieno viena nepieciešamība – uzticams partneris, kas palīdz orientēties sarežģītā juridiskā un nodokļu vidē, saglabāt konkurētspēju un nodrošināt ilgtspējīgu izaugsmi. Tieši to mēs arī piedāvājam – zināšanas, pieredzi un individuāli pielāgotus risinājumus, kas palīdz uzņēmumiem augt un attīstīties.`,
  },

  {
    slug: "gimenes",
    title: "Ģimenes biznesi un privātpersonas",
    short: `Ģimenes uzņēmumiem un privātpersonām svarīgi ir skaidri un droši risinājumi gan ikdienas nodokļu un juridiskajos jautājumos, gan ilgtermiņa nākotnes plānošanā. 
Mēs palīdzam optimizēt nodokļus, veidot efektīvas īpašumstruktūras, sagatavoties biznesa nodošanai vai pārdošanai, kā arī aizsargāt ģimenes mantu un aktīvus. Privātpersonām piedāvājam atbalstu ienākumu un investīciju plānošanā, mantojuma un dāvinājumu jautājumos, starptautiskās mobilitātes risinājumos un komunikācijā ar nodokļu iestādēm. 
Apvienojot konfidencialitāti, starptautisku pieredzi un integrētu skatījumu, nodrošinām stabilitāti un pārliecību gan šodien, gan nākamajām paaudzēm.`,
    long: `Ģimenes uzņēmumi un privātpersonas veido nozīmīgu Latvijas un arī pasaules ekonomikas daļu. Daudzas no veiksmīgākajām un ilgtspējīgākajām kompānijām ir sākotnēji veidotas tieši kā ģimenes biznesi – sākot no nelielām vietējām kompānijām līdz starptautiskiem uzņēmumiem, kas joprojām saglabā ģimenes īpašnieku kontroli. 
Vienlaikus privātpersonām, īpaši uzņēmīgām un finansiāli aktīvām, ir nepieciešams atbalsts nodokļu, tiesību, mantisko un finanšu jautājumu kārtošanā, lai nodrošinātu ne tikai ikdienas atbilstību prasībām, bet arī ilgtermiņa drošību, mantas aizsardzību un efektīvu turpmāku attīstību.
Mūsu komanda saprot, ka ģimenes biznesi un privātpersonas nereti darbojas citā vidē nekā lielās uzņēmumu grupasi. Šeit lēmumus bieži vien ietekmē ne tikai finanšu un biznesa loģika, bet arī ģimenes locekļu savstarpējās attiecības, nākotnes redzējums vairākās paaudzēs. Tāpēc mūsu pieeja šiem klientiem ir īpaši individuāla, ar izpratni par to, ka profesionāli risinājumi jāpiemēro katrai unikālajai situācijai.

Kā mēs varam palīdzēt ģimenes biznesiem?
1. Nodokļu plānošanā un strukturēšanā
• Ģimenes uzņēmumiem bieži ir vairāki īpašnieki no vienas ģimenes. Nodokļu jautājumi īpaši svarīgi, ja peļņa tiek izmaksāta dividendēs, norisinās darījumu ģimenes locekļu starpā.
• Mēs palīdzam izstrādāt efektīvas nodokļu struktūras, kas ļauj izmantot starptautiskos līgumus un vienlaikus nodrošina drošu nodokļu optimizāciju.
• Atbalstām arī UIN, PVN, IIN un citu nodokļu jautājumu risināšanā ikdienas darījumos.
2. Ģimenes uzņēmumu pārvaldības un mantošanas struktūras
• Viens no biežākajiem izaicinājumiem ģimenes uzņēmumiem ir īpašumtiesību nodošana nākamajām paaudzēm. Neplānota mantošana var novest pie strīdiem, neskaidrībām un pat biznesa zaudēšanas.
• Mēs palīdzam izveidot juridiski skaidras un praktiski funkcionējošas mantošanas un īpašumtiesību struktūras.
3. Darījumu strukturēšana un kapitāla piesaiste
• Ģimenes uzņēmumi nereti vēlas paplašināties, piesaistot investorus vai sadarbojoties ar bankām.
• Mēs palīdzam sagatavot biznesu investoru ienākšanai – veicam juridisko un nodokļu due diligence, izstrādājam optimālu īpašumtiesību un finanšu struktūru, konsultējam par kapitāla piesaistes un dalības noteikumiem.
4. Uzņēmuma pārdošana vai apvienošana (M&A)
• Ja tiek izlemts pārdot biznesu vai apvienoties ar citu uzņēmumu mēs nodrošinām pilnu juridisko un nodokļu atbalstu – sākot no uzņēmuma vērtēšanas un due diligence līdz darījuma līgumu sagatavošanai un reģistrēšanai.
5. Īpašuma un aktīvu aizsardzība
• Ģimenes uzņēmumiem bieži ir vērtīgi aktīvi – nekustamais īpašums, intelektuālais īpašums, iekārtas, zīmoli.
• Mēs palīdzam izveidot juridiskas struktūras, kas pasargā šos aktīvus no iespējamām saistībām vai ārējiem riskiem.

Kā mēs varam palīdzēt privātpersonām?
1. Nodokļu konsultācijas un deklarāciju sagatavošana
• Palīdzam optimāli strukturēt ienākumus no darba, kapitāla pieauguma, dividendēm vai īpašuma izīrēšanas.
• Nodrošinām atbalstu gada ienākuma deklarāciju sagatavošanā.
• Sniedzam konsultācijas par starptautiskajiem nodokļiem, piemēram, dzīvojot vienā valstī, bet strādājot vai investējot citā.
2. Investīciju un īpašuma struktūru plānošana
• Konsultējam, kā ieguldījumus (nekustamajos īpašumos, vērtspapīros, uzņēmumos) organizēt juridiski un nodokļu ziņā efektīvā veidā.
• Palīdzam izveidot struktūras, kas nodrošina ne tikai nodokļu optimizāciju, bet arī mantas aizsardzību.
3. Mantojuma un dāvinājuma plānošana
• Sagatavojam mantojuma līgumus, testamentus, dāvinājuma līgumus un citus dokumentus, kas ļauj nodrošināt paredzamu un taisnīgu mantas pārdali nākotnē.
• Konsultējam par mantojuma nodokļiem un to samazināšanas iespējām, kā arī par starptautiskiem aspektiem, ja ģimenei ir īpašumi vairākās valstīs.
4. Strīdu risināšana ar VID un citām iestādēm
• Ja rodas neskaidrības ar nodokļu administrāciju, palīdzam sagatavot uzziņu pieprasījumus, pieteikumus, sūdzības vai pārsūdzības.
• Nodrošinām interešu aizstāvību tiesvedībā, ja nodokļu strīds nonāk līdz tiesai.
5. Starptautiskie mobilitātes un dzīvesvietas jautājumi
• Daudziem klientiem ir darījumi un dzīvesvieta vairākās valstīs. Mēs konsultējam par rezidences statusu, dubulto aplikšanu, sociālo nodrošinājumu un pārcelšanās nodokļu aspektiem.

Mūsu pievienotā vērtība
1. Konfidencialitāte — mēs garantējam, ka visa klientu informācija tiek pilnībā aizsargāta.
2. Individuāli risinājumi — katrs klients ir unikāls, tāpēc piedāvājam individuāli pielāgotus risinājumus.
3. Praktiska pieeja — piedāvājam ne tikai teorētiskus risinājumus, bet arī tos īstenojam un ieviešam.
4. Starptautiskā pieredze — esam strādājuši ar dažādu nozaru uzņēmumiem Latvijā un ārpus tās.
5. Integrēts skatījums — apvienojam juridisko, nodokļu un finanšu ekspertīzi, lai atrastu klientam vislabāko risinājumu.
6. Fokuss uz rezultātu — mūsu prioritāte ir klienta biznesa izaugsme un stabila darbība, vienlaikus samazinot riskus un optimizējot izmaksas.

Noslēgumā
Ģimenes uzņēmumi un privātpersonas ir mūsu praksei ļoti būtisks klientu segments. Tieši šiem klientiem visbiežāk nepieciešams visaptverošs skatījums, kas ietver gan nodokļu, gan tiesību, gan finanšu aspektus. Mēs palīdzam ne tikai ikdienas jautājumos, bet arī stratēģiskos lēmumos, kas nosaka uzņēmuma vai ģimenes mantas nākotni vairākām paaudzēm.
Mūsu mērķis – būt uzticamam partnerim, kas sniedz drošību un pārliecību gan biznesa, gan privātajos jautājumos.`,
  },

  {
    slug: "starptautiskas-grupas",
    title: "Starptautiskas uzņēmumu grupas",
    short: `Starptautiskas uzņēmumu grupas darbojas sarežģītā vidē, kur jāievēro dažādu valstu nodokļu un juridiskās prasības. 
Mēs palīdzam šos izaicinājumus pārvērst risinājumos, nodrošinot atbilstību vietējām un starptautiskajām prasībām, sagatavojot transfertcenu dokumentāciju un plānojot nodokļu struktūru. Atbalstām restrukturizācijas un darījumos, nodrošinām vērtēšanu iekšgrupas darījumiem un risinām mobilitātes jautājumus. 
Apvienojot starptautisku skatījumu ar dziļām lokālajām zināšanām, ļaujam grupām droši un efektīvi attīstīties Baltijā.`,
    long: `Starptautiskas uzņēmumu grupas ir viens no mūsu galvenajiem klientu segmentiem. Šo uzņēmumu darbība aptver vairākas valstis un tirgus, kas nozīmē ne tikai plašas izaugsmes iespējas, bet arī sarežģītu normatīvās vides, nodokļu un uzņēmējdarbības prasību un risku kopumu. Katras grupas izaicinājums ir spēt sabalansēt globālo stratēģiju ar lokālo likumdošanu.
Mēs palīdzam starptautiskām uzņēmumu grupām orientēties šajā kompleksajā vidē, piedāvājot visaptverošu nodokļu, juridisko un finanšu konsultāciju klāstu. Mūsu mērķis ir nodrošināt efektīvu un drošu darbību Latvijā un Baltijā, vienlaikus integrējot to ar globālās grupas prasībām.

Starptautisku uzņēmumu grupu vajadzības
1. Komplekss normatīvais regulējums — katra valsts nosaka savus nodokļu, grāmatvedības un juridiskos noteikumus.
2. Transfertcenu politika un dokumentācija — Local/Master File, OECD, vietējās prasības.
3. Nodokļu plānošana un optimizācija — dubultās aplikšanas novēršana, holdinga/IP struktūras.
4. Investīciju un uzņēmumu restrukturizācija — M&A, reorganizācijas.
5. Starptautiskie darījumu riski — valūtas, tiesību atšķirības, risku sadale.
6. Vērtēšana — taisnīgā vērtība aktīviem, IP un uzņēmumiem.
7. Darbinieku mobilitāte — nodokļi un sociālās iemaksas vairākās valstīs.

Kā mēs palīdzam
1) Transfertcenas
• Politikas izstrāde, Local/Master File.
• Risku izvērtēšana, benchmark pētījumi.
• Peļņas sadales modeļi.
2) Nodokļu konsultācijas un plānošana
• Grupas struktūras analīze, PVN/muitas jautājumi, holdinga un IP struktūras.
3) Juridiskie pakalpojumi
• Reģistrācija, restrukturizācija, apvienošana/sadalīšana, due diligence, līgumi, ikdienas atbalsts.
4) Vērtēšana un finanšu konsultācijas
• Biznesa un IP vērtēšana, taisnīgā vērtība IFRS/IAS, darījumu atbalsts, finanšu modeļi.
5) Darbinieku mobilitāte
• Rezidence, sociālās iemaksas, dubultā aplikšana, motivācijas programmas.
6) Strīdi un pārstāvība
• VID auditi, transfertcenu/PVN/CIT strīdi, pārsūdzības un arbitrāža.

Mūsu pievienotā vērtība
• Lokālās un starptautiskās ekspertīzes kombinācija.
• Praktiska pieredze dažādās nozarēs.
• Elastīga, grupas specifikai pielāgota pieeja.
• Ilgtspējīgs, ne tikai īstermiņa skatījums.

Kāpēc mūs izvēlas
1. Konfidencialitāte
2. Individuāli risinājumi
3. Praktiska ieviešana
4. Starptautiska pieredze
5. Integrēts skatījums
6. Fokuss uz rezultātu

Noslēgumā
Palīdzam starptautiskām grupām droši un efektīvi darboties Latvijā, nodrošinot atbilstību un integrāciju ar globālajām prasībām.`,
  },

  {
    slug: "jaunuznemumi",
    title: "Jaunuzņēmumi",
    short: `Jaunuzņēmumi ir strauji augoši un inovatīvi uzņēmumi ar specifiskiem juridiskiem, nodokļu un finanšu jautājumiem. 
REMPE sniedz pilnvērtīgu atbalstu — no struktūras un investoru dokumentiem līdz IP aizsardzībai, nodokļu risinājumiem un uzņēmuma vērtēšanai. Palīdzam piesaistīt finansējumu, izveidot motivācijas programmas, sagatavot transfertcenu dokumentāciju. 
Mūsu integrētā pieeja ļauj dibinātājiem fokusēties uz produktu un tirgu, kamēr mēs nodrošinām stabilu pamatu izaugsmei.`,
    long: `Jaunuzņēmumi (start-up uzņēmumi) ir dinamiskas, inovatīvas organizācijas, kuras sākotnēji strādā apstākļos ar augstu nenoteiktību un strauju attīstības tempu. Tiem raksturīga fokusēšanās uz jaunu tehnoloģiju, biznesa modeļu vai pakalpojumu izstrādi, ar mērķi īsā laikā sasniegt augstus rezultātus.
Jaunuzņēmumu vide atšķiras no tradicionāliem uzņēmumiem ar:
• Strauju ideju attīstības ciklu;
• Nepieciešamību pēc ārējā finansējuma (business angels, VC, granti, ES atbalsts);
• Augstām īpašnieku un investoru prasībām;
• Talantu piesaisti caur opcijām/daļām;
• Augstu risku līmeni (t.sk. nodokļu un juridiskās struktūras);
• Agrīnu starptautiskumu (VAT, PE, transfertcenas).

Galvenie izaicinājumi
2.1. Juridiskās struktūras izvēle un pārvaldība — SIA vs. citi, daļu kategorijas, akcionāru līgumi, IP strukturēšana.
2.2. Nodokļu un finanšu risku vadība — režīmi, atlaides, kļūdu novēršana.
2.3. Finansējuma piesaiste — due diligence gatavība.
2.4. Intelektuālais īpašums — kam pieder IP, licences.
2.5. Talantu piesaiste — opciju plāni.
2.6. Starptautiska paplašināšanās — VAT, PE, TP.

REMPE atbalsts
3.1. Juridiskie pakalpojumi — reģistrācija, akcionāru līgumi, IP aizsardzība/struktūras, darba līgumi.
3.2. Nodokļi — jaunuzņēmumu režīms, PVN/VAT, UIN, riska izvērtējumi, holdinga/IP struktūras.
3.3. Transfertcenas — dokumentācija, funkcionālā analīze, PE riski, licences/honorāri.
3.4. Finansējums — DD sagatavošana, finanšu modeļi, akciju/opciju emisijas, ES atbalsts.
3.5. Motivācijas programmas — opcijas, līdzdalība, nodokļu efektivitāte.
3.6. Vērtēšana/biznesa konsultācijas — IP un uzņēmuma vērtēšana, izaugsmes stratēģijas.

Kāpēc mūs izvēlas
1. Konfidencialitāte
2. Individuāli risinājumi
3. Praktiska ieviešana
4. Starptautiska pieredze
5. Integrēts skatījums
6. Fokuss uz rezultātu

Secinājums
REMPE kļūst par stratēģisko partneri, sakārtojot nodokļus, tiesības un finanses, lai dibinātāji var fokusēties uz produktu/tirgu un mērogošanu.`,
  },

  {
    slug: "fondi",
    title: "Investīciju un ieguldījumu fondi",
    short: `Investīciju un ieguldījumu darbību raksturo kompleksi darījumi, starptautiskas struktūras un stingras regulatīvās prasības. 
Palīdzam fondiem visos posmos — no strukturēšanas, licencēšanas un atbilstības līdz vērtēšanai, M&A atbalstam un transfertcenām. 
Apvienojot starptautisku pieredzi un integrētu skatījumu, nodrošinām, ka fonda darbība ir efektīva, droša un investoriem pievilcīga.`,
    long: `Fonu pārvaldnieki, privātā kapitāla fondi, riska kapitāla fondi, nekustamā īpašuma fondi un citi alternatīvie ieguldījumu veidi darbojas sarežģītā un regulētā vidē.
Kā mēs palīdzam fondiem
1) Nodokļu plānošana un strukturēšana
• Starptautiska nodokļu plānošana un jurisdikciju izvēle (Luksemburga, Īrija, Malta, Baltija).
• Strukturēšanas modeļi — holdingi, SPV, īpašumtiesību slāņošana.
• Investoru nodokļu atbilstība.
2) Juridiskais atbalsts un regulatīvā atbilstība
• Licencēšana un atļaujas (AIFMD, UCITS, AML/CTF).
• Ikdienas atbilstība un atskaites.
• Darījumu dokumentācija (ieguldījumu/akcionāru/pārvaldības/aizdevuma līgumi).
3) Transfertcenas un iekšgrupas darījumi
• Dokumentācija atbilstoši OECD un LV prasībām, politikas izstrāde, strīdu risināšana.
4) M&A atbalsts
• Darījumu struktūras, due diligence, izejas darījumi.
5) Vērtēšana
• Uzņēmumi, IP, finanšu instrumenti; IFRS/IVS/LVS401.
6) Ikdienas atbalsts
• Grāmatvedība, nodokļi, personāla motivācija, strīdi.

Tipiskie klienti
• Privātā kapitāla, riska kapitāla, nekustamā īpašuma, infrastruktūras, UCITS fondi.

Kāpēc mūs izvēlēties
1. Konfidencialitāte
2. Individuāli risinājumi
3. Praktiska ieviešana
4. Starptautiska pieredze
5. Integrēts skatījums
6. Fokuss uz rezultātu

Noslēgums
Mēs nodrošinām visaptverošu atbalstu fondiem visos to darbības posmos — no struktūras un nodokļiem līdz darījumiem un strīdiem.`,
  },

  {
    slug: "kripto",
    title: "Kripto",
    short: `Kripto nozare attīstās strauji un rada gan iespējas, gan riskus. Palīdzam uzņēmumiem un privātpersonām orientēties nodokļu un juridiskajos jautājumos, strukturēt darījumus un nodrošināt atbilstību. 
Atbalstām licencēšanā, AML procedūrās, darījumu strukturēšanā, transfertcenās un kripto aktīvu vērtēšanā. 
Apvienojam nodokļu, juridisko un finanšu ekspertīzi, lai sniegtu praktiskus un drošus risinājumus.`,
    long: `Kriptovalūtu un blokķēžu industrija piedzīvo strauju izaugsmi un globālu mērogu. Klientu grupa: kripto uzņēmumi, biržas, maksājumu sniedzēji, investori un fondi.
Nozares iezīmes
• Augsts inovāciju temps.
• Regulējuma atšķirības un biežas izmaiņas.
• Augsti riski/peļņa, globāla dimensija.

Kā palīdzam
1) Nodokļi
• Darījumu (crypto-crypto, crypto-fiat, tirdzniecība, staking, lending, mining, NFT, DeFi) uzskaite un aplikšana Latvijā un ārvalstīs; PVN/UIN.
2) Juridiskā struktūra un licencēšana
• Uzņēmumu/fondu struktūras, licencēšanās (VASP, maksājumu iestādes), AML/KYC procedūras, token sale/whitepaper/līgumi.
3) Transfertcenas un starptautiskā struktūra
• TP politikas un dokumentācija OECD/LV ietvaros.
4) Vērtēšana
• IP, programmatūras, tokenu un biznesa vērtēšana.
5) Strīdi
• Pārstāvība VID, FKTK un tiesās.

Tipiskie kripto klienti
• Biržas un brokeri; maksājumu sniedzēji; investori un fondi; privātpersonas ar kripto ienākumiem.

Priekšrocības
1. Konfidencialitāte
2. Individuāli risinājumi
3. Praktiska ieviešana
4. Starptautiska pieredze
5. Integrēts skatījums
6. Fokuss uz rezultātu

Secinājums
Mūsu mērķis — būt uzticamam partnerim kripto uzņēmumiem un investoriem, nodrošinot strukturētu, drošu un atbilstošu darbību.`,
  },
];
