/* ============================================================
   Kérdés-adatbázis a szigorlati kvízhez.
   Struktúra:
     QUIZ_DATA[subject] = {
        title: "...",
        topics: [
           { name: "Tétel neve", questions: [ {q, a:[A,B,C,D], correct:<0..3>}, ... ] },
           ...
        ]
     }
   Minden körben minden tételből 3 véletlen kérdés kerül kiválasztásra.
   ============================================================ */

const QUIZ_DATA = {

    /* ===================================================================
       A DIGITÁLIS SZÁMÍTÁS ELMÉLETE
       =================================================================== */
    digszam: {
        title: "A Digitális Számítás Elmélete",
        icon: "🖥️",
        topics: [

            /* ---------- 1. Téma ---------- */
            {
                name: "1. Formális nyelvek, grammatika, Chomsky-osztályok",
                questions: [
                    { q: "Mi egy formális nyelv (L) definíciója egy Σ ábécé felett?", a: ["L ⊆ Σ*", "L = Σ*", "L egy véges automata", "L ⊆ Σ"], correct: 0 },
                    { q: "Mit jelöl Σ* ?", a: ["Az ábécé feletti összes véges szó halmaza", "Csak a véges nyelveket", "Az ábécé elemeit", "Az üres nyelvet"], correct: 0 },
                    { q: "Egy generatív grammatika G = (V, Σ, R, S) négyesében mi az S?", a: ["A kezdő- (mondat)szimbólum", "A terminálisok halmaza", "A szabályok halmaza", "A nemterminálisok halmaza"], correct: 0 },
                    { q: "A Chomsky-hierarchiában melyik a helyes tartalmazási sorrend?", a: ["Reguláris ⊂ CF ⊂ Környezetfüggő ⊂ Rekurzíve felsorolható", "CF ⊂ Reguláris ⊂ Környezetfüggő ⊂ RE", "Reguláris ⊂ Környezetfüggő ⊂ CF ⊂ RE", "RE ⊂ CF ⊂ Reguláris"], correct: 0 },
                    { q: "Melyik automata ismeri fel a 0. típusú (rekurzíve felsorolható) nyelveket?", a: ["Turing-gép", "Véges automata", "Veremautomata", "Lineárisan korlátozott automata"], correct: 0 },
                    { q: "A 2. típusú (környezetfüggetlen) grammatika szabályainak bal oldalán mi áll?", a: ["Egyetlen nemterminális", "Tetszőleges szósorozat", "Egyetlen terminális", "Legalább két nemterminális"], correct: 0 },
                    { q: "Melyik nyelv CF, de nem reguláris?", a: ["{aⁿbⁿ | n ≥ 0}", "{aⁿbⁿcⁿ | n ≥ 0}", "{a* }", "minden véges nyelv"], correct: 0 },
                    { q: "Az 1. típusú (környezetfüggő) szabályok jellemzője:", a: ["|α| ≤ |β| (nem csökkenő szóhossz)", "α mindig egyetlen nemterminális", "β mindig üres", "nincs megkötés"], correct: 0 },
                    { q: "Mi az ε (epszilon) jelentése a formális nyelvekben?", a: ["Az üres szó (0 hosszúságú)", "Az üres nyelv", "Egy terminális", "A kezdőszimbólum"], correct: 0 },
                    { q: "Mi a különbség a Σ* és a Σ⁺ között?", a: ["Σ⁺ nem tartalmazza az üres szót, Σ* igen", "Σ* nem tartalmazza az üres szót", "Nincs különbség", "Σ⁺ csak az ábécé elemei"], correct: 0 },
                    { q: "Egy grammatika G=(V,Σ,R,S) négyesében mi a V?", a: ["A nemterminálisok (változók) halmaza", "A terminálisok halmaza", "A szabályok halmaza", "A kezdőszimbólum"], correct: 0 },
                    { q: "Mit jelöl a ⇒ (közvetlen levezetés) reláció?", a: ["Egy szabály egyszeri alkalmazását egy szóra", "A nyelv komplementerét", "Két nyelv unióját", "Az ábécé bővítését"], correct: 0 },
                    { q: "Hogyan kapjuk a grammatika által generált L(G) nyelvet?", a: ["L(G) = { w ∈ Σ* | S ⇒* w }", "Az összes nemterminális", "A szabályok száma", "Σ* önmaga"], correct: 0 },
                    { q: "A 3. típusú (reguláris) szabályok alakja:", a: ["A → aB vagy A → a (jobblineáris)", "A → BC", "α → β tetszőleges", "A → β ∈ (V∪Σ)*"], correct: 0 },
                    { q: "Melyik automata ismeri fel a reguláris (3. típusú) nyelveket?", a: ["Véges automata", "Veremautomata", "Turing-gép", "Lineárisan korlátozott automata"], correct: 0 },
                    { q: "Melyik automata ismeri fel a környezetfüggő (1. típusú) nyelveket?", a: ["Lineárisan korlátozott automata", "Véges automata", "Veremautomata", "Mealy-gép"], correct: 0 },
                    { q: "Mit jelent, hogy egy grammatika generatív?", a: ["Szabályok ismételt alkalmazásával állít elő (generál) szavakat", "Felismeri a szavakat", "Minimalizál egy automatát", "Tömöríti a nyelvet"], correct: 0 },
                    { q: "A {aⁿbⁿcⁿ | n ≥ 0} nyelv melyik osztályba tartozik?", a: ["Környezetfüggő, de nem CF", "Reguláris", "CF, de nem reguláris", "Nem rekurzíve felsorolható"], correct: 0 },
                    { q: "Mi a terminális szimbólum?", a: ["Az ábécé eleme, amely a végső szóban megjelenhet", "Egy levezetés közbenső szimbóluma", "A kezdőszimbólum", "Egy szabály bal oldala"], correct: 0 },
                    { q: "Mi a nemterminális szimbólum szerepe?", a: ["Levezetés közbeni segédszimbólum, a végső szóban nem szerepel", "Az ábécé eleme", "Az üres szó jele", "A nyelv komplementere"], correct: 0 },
                    { q: "Hány Chomsky-osztály (típus) van?", a: ["4 (0., 1., 2., 3. típus)", "3", "5", "2"], correct: 0 },
                    { q: "A Chomsky-hierarchiában a 0. típus mit jelent?", a: ["Tetszőleges (frázisstruktúra) grammatika, nincs megkötés a szabályokra", "Reguláris grammatika", "Környezetfüggetlen", "Környezetfüggő"], correct: 0 },
                    { q: "Mit jelöl a ⇒* reláció?", a: ["A ⇒ reláció reflexív-tranzitív lezártja (0 vagy több lépés)", "Pontosan egy levezetési lépés", "A nyelv csillagozása", "Az ábécé"], correct: 0 },
                    { q: "A reguláris nyelvek melyik nagyobb osztálynak valódi részhalmaza?", a: ["A környezetfüggetlen (CF) nyelveknek", "Csak önmaguknak", "Az üres nyelvnek", "Egyiknek sem"], correct: 0 }
                ]
            },

            /* ---------- 2. Téma ---------- */
            {
                name: "2. Reguláris kifejezések, véges automaták, minimalizálás",
                questions: [
                    { q: "Egy nyelv akkor reguláris, ha...", a: ["definiálható reguláris kifejezéssel", "csak Turing-géppel ismerhető fel", "végtelen sok ekvivalenciaosztálya van", "nem ismerhető fel automatával"], correct: 0 },
                    { q: "Mi a DFA átmenetfüggvényének (δ) alakja?", a: ["δ: Q × Σ → Q", "δ: Q × Σ → P(Q)", "δ: Q → Σ", "δ: Σ → Q"], correct: 0 },
                    { q: "Miben különbözik az NFA a DFA-tól?", a: ["Egy állapot–jel párhoz több átmenet is tartozhat (δ: Q×Σε → P(Q))", "Nincs kezdőállapota", "Nem lehet végállapota", "Csak véges nyelveket ismer fel"], correct: 0 },
                    { q: "Milyen kapcsolat van az L_R, L_N és L_D nyelvosztályok között?", a: ["L_R = L_N = L_D (megegyeznek)", "L_D ⊂ L_N ⊂ L_R valódi tartalmazással", "Nincs köztük kapcsolat", "L_R ⊂ L_D ⊂ L_N"], correct: 0 },
                    { q: "Hány állapota van a minimális DFA-nak egy L reguláris nyelvre?", a: ["Ahány ekvivalenciaosztálya van a ≈_L relációnak", "Mindig 2", "A szavak száma", "Végtelen"], correct: 0 },
                    { q: "Myhill–Nerode szerint L pontosan akkor reguláris, ha...", a: ["a ≈_L reláció ekvivalenciaosztályainak száma véges", "L végtelen", "L-nek van nyelvtana", "L zárt a komplementerre"], correct: 0 },
                    { q: "Az ℒ (DFA-val felismerhető nyelvek) osztálya mire zárt?", a: ["Unió, konkatenáció, Kleene-csillag (reguláris operátorok)", "Csak unióra", "Semmire", "Csak metszetre"], correct: 0 },
                    { q: "Hogyan kapható egy NFA-ból ekvivalens DFA?", a: ["Részhalmaz-konstrukcióval (hatványhalmaz)", "Az állapotok törlésével", "A nyelv komplementálásával", "Nem lehetséges"], correct: 0 },
                    { q: "Egy DFA M=(Q,Σ,δ,q₀,F) ötösében mi az F?", a: ["A végállapotok (elfogadó állapotok) halmaza", "Az átmenetfüggvény", "A kezdőállapot", "Az ábécé"], correct: 0 },
                    { q: "Mi a Kleene-csillag (L*) jelentése?", a: ["L szavainak tetszőleges (0 is) számú konkatenációja", "L komplementere", "L megfordítása", "L metszete önmagával"], correct: 0 },
                    { q: "Melyik NEM reguláris művelet?", a: ["Tetszőleges (kontextusfüggő) átírás", "Unió", "Konkatenáció", "Kleene-csillag"], correct: 0 },
                    { q: "Mire jó az ε-átmenet az NFA-ban?", a: ["Bemenet olvasása nélküli állapotváltásra", "A gép leállítására", "Karakter törlésére", "A verem kezelésére"], correct: 0 },
                    { q: "Egy reguláris kifejezés '|' operátora mit jelent?", a: ["Uniót (alternáció)", "Konkatenációt", "Ismétlést", "Komplementert"], correct: 0 },
                    { q: "A reguláris nyelvek osztálya zárt-e a komplementerre?", a: ["Igen", "Nem", "Csak véges nyelvekre", "Csak unióra zárt"], correct: 0 },
                    { q: "A reguláris nyelvek osztálya zárt-e a metszetre?", a: ["Igen", "Nem", "Csak az üres nyelvre", "Csak NFA esetén"], correct: 0 },
                    { q: "Mit ad meg a Kleene-tétel?", a: ["A reguláris kifejezések és a véges automaták ugyanazt a nyelvosztályt definiálják", "Hogy P=NP", "A pumpáló lemmát", "A CF nyelveket"], correct: 0 },
                    { q: "Hogyan minimalizálható egy DFA?", a: ["Az ekvivalens állapotok összevonásával (állapotpartícionálás)", "Új állapotok hozzáadásával", "A nyelv komplementálásával", "Az ábécé bővítésével"], correct: 0 },
                    { q: "Két állapot ekvivalens egy DFA-ban, ha...", a: ["Ugyanazokra a szavakra fogadnak el / utasítanak el (megkülönböztethetetlenek)", "Ugyanaz a nevük", "Mindkettő végállapot", "Szomszédosak"], correct: 0 },
                    { q: "A minimális DFA egy nyelvhez...", a: ["Az állapotok átnevezésétől eltekintve egyértelmű", "Sosem létezik", "Mindig 1 állapotú", "Több is lehet, nem egyértelmű"], correct: 0 },
                    { q: "Mit jelöl az x ≈_L y reláció?", a: ["Minden z-re xz ∈ L ⇔ yz ∈ L (jobb-kongruencia)", "x = y", "x rövidebb mint y", "x és y nem L-ben van"], correct: 0 },
                    { q: "Egy NFA n állapotból a részhalmaz-konstrukció után a DFA-nak legfeljebb hány állapota lehet?", a: ["2ⁿ", "n", "n²", "2n"], correct: 0 },
                    { q: "A ∅ (üres halmaz) reguláris kifejezés melyik nyelvet jelöli?", a: ["Az üres nyelvet (egyetlen szó sincs benne)", "Az üres szót tartalmazó nyelvet", "Σ*-ot", "Minden nyelvet"], correct: 0 },
                    { q: "Az ε reguláris kifejezés melyik nyelvet jelöli?", a: ["Az {ε} nyelvet (csak az üres szó)", "Az üres nyelvet", "Σ*-ot", "Az ábécét"], correct: 0 },
                    { q: "Egy reguláris kifejezésben az r⁺ mit jelent?", a: ["rr* — egy vagy több ismétlés", "Nulla vagy több ismétlés", "Pontosan egy r", "r komplementere"], correct: 0 }
                ]
            },

            /* ---------- 3. Téma ---------- */
            {
                name: "3. Pumpáló lemmák (reguláris és CF)",
                questions: [
                    { q: "A reguláris pumpáló lemmában milyen alakra bontható egy elég hosszú szó?", a: ["s = xyz, ahol |y|>0 és |xy|≤p", "s = uvxyz", "s = xy", "s = uvwxyz"], correct: 0 },
                    { q: "A reguláris pumpáló lemma melyik feltétele igaz?", a: ["xyⁱz ∈ L minden i ≥ 0 esetén", "xyⁱz ∉ L minden i-re", "|y| = 0", "|xy| > p"], correct: 0 },
                    { q: "A CF pumpáló lemmában a szó felbontása:", a: ["s = uvxyz, ahol |vy|>0 és |vxy|≤p", "s = xyz", "s = xy", "s = uvw"], correct: 0 },
                    { q: "Mire használható a pumpáló lemma?", a: ["Annak bizonyítására, hogy egy nyelv NEM reguláris / nem CF", "Annak bizonyítására, hogy egy nyelv reguláris", "Automata minimalizálására", "Nyelvtan generálására"], correct: 0 },
                    { q: "A pumpáló lemma milyen jellegű feltétel?", a: ["Szükséges, de nem elégséges", "Elégséges, de nem szükséges", "Szükséges és elégséges", "Sem nem szükséges, sem nem elégséges"], correct: 0 },
                    { q: "Melyik nyelvvel mutatható meg, hogy nem CF?", a: ["{aⁿbⁿcⁿ | n ≥ 0}", "{aⁿbⁿ | n ≥ 0}", "{aⁿ | n ≥ 0}", "üres nyelv"], correct: 0 },
                    { q: "A CF pumpáló lemmában a |vxy| ≤ p feltétel mit fejez ki?", a: ["A pumpálható rész egy korlátos hosszú ablakon belül van", "A teljes szó hossza legfeljebb p", "y üres", "az x a szó végén van"], correct: 0 },
                    { q: "Mi a 'p' (pumpáló konstans) a reguláris pumpáló lemmában?", a: ["Egy küszöbhossz; minden ennél hosszabb L-beli szó pumpálható", "A nyelv mérete", "Az ábécé mérete", "Az automata végállapotainak száma"], correct: 0 },
                    { q: "Honnan ered a reguláris pumpáló lemma 'p' értéke?", a: ["A nyelvet felismerő DFA állapotainak számából", "A szavak számából", "Az ábécé betűiből", "Véletlenszerűen"], correct: 0 },
                    { q: "A pumpáló lemma melyik bizonyítási elven alapul?", a: ["Skatulyaelv (galambdúc-elv): hosszú szónál ismétlődik egy állapot", "Indukció a nyelven", "Diagonalizáció", "Visszavezetés SAT-ra"], correct: 0 },
                    { q: "Ha egy nyelvre teljesül a pumpáló lemma, az bizonyítja, hogy reguláris?", a: ["Nem, mert a feltétel csak szükséges, nem elégséges", "Igen, mindig", "Csak véges nyelvekre", "Csak ha p=1"], correct: 0 },
                    { q: "Hogyan használjuk a pumpáló lemmát nem-regularitás bizonyítására?", a: ["Indirekt: feltesszük reguláris, választunk szót, pumpálással L-en kívülre jutunk", "Direkt automatát építünk", "Megszámoljuk a szavakat", "Nyelvtant adunk meg"], correct: 0 },
                    { q: "Az {aⁿbⁿ | n≥0} nyelv miért nem reguláris (pumpáló lemma)?", a: ["A pumpált rész csak a-kból állna, így felborulna az a-k és b-k egyenlősége", "Mert véges", "Mert üres", "Mert CF"], correct: 0 },
                    { q: "A CF pumpáló lemmában hány részt pumpálunk egyszerre?", a: ["Kettőt (v és y) egyszerre, azonos kitevővel", "Egyet (y)", "Hármat", "Egyet sem"], correct: 0 },
                    { q: "A CF pumpáló lemma feltétele uvⁱxyⁱz esetén:", a: ["uvⁱxyⁱz ∈ L minden i ≥ 0 esetén", "csak i=2-re igaz", "sosem L-ben", "|v|=|y|"], correct: 0 },
                    { q: "Honnan ered a CF pumpáló lemma konstansa?", a: ["A grammatika méretéből (a levezetési fa magasságából / Ogden)", "Az automata végállapotaiból", "A szavak hosszából", "Az ábécéből"], correct: 0 },
                    { q: "Mire jó az Ogden-lemma a CF pumpáló lemmához képest?", a: ["Megjelölhetünk pozíciókat, amelyek közül pumpálni kell — erősebb eszköz", "Gyengébb, mint a pumpáló lemma", "Csak reguláris nyelvekre", "Automatát minimalizál"], correct: 0 },
                    { q: "A {ww | w ∈ {a,b}*} nyelv...", a: ["Nem CF (pumpáló lemmával igazolható)", "Reguláris", "CF", "Véges"], correct: 0 },
                    { q: "A pumpáló lemma alkalmazásakor ki választja a szót, és ki a felbontást?", a: ["A szót mi választjuk, a felbontást a lemma adja (rögzített p mellett)", "Mindkettőt mi", "Mindkettőt a lemma", "A felbontást mi, a szót a lemma"], correct: 0 },
                    { q: "Miért kell a pumpáló lemmánál 'elég hosszú' szót venni?", a: ["Csak a p-nél hosszabb szavakra garantált a felbontás létezése", "A rövid szavak nem L-ben vannak", "Hogy gyorsabb legyen", "Nincs ilyen feltétel"], correct: 0 },
                    { q: "A reguláris pumpáló lemmában a |y| > 0 feltétel miért fontos?", a: ["Hogy a pumpálás ténylegesen változtasson a szón", "Hogy y a szó végén legyen", "Hogy x üres legyen", "Nincs jelentősége"], correct: 0 },
                    { q: "A reguláris és CF nyelvek közül melyikre van pumpáló lemma?", a: ["Mindkettőre, külön változatban", "Csak a regulárisra", "Csak a CF-re", "Egyikre sem"], correct: 0 }
                ]
            },

            /* ---------- 4. Téma ---------- */
            {
                name: "4. CF grammatikák, normálalak, BNF, veremautomata",
                questions: [
                    { q: "Egy CF grammatika szabályainak alakja:", a: ["A → β, ahol A nemterminális, β ∈ (V∪Σ)*", "α → β, |α|≤|β|", "A → aB vagy A → a", "α → β tetszőleges"], correct: 0 },
                    { q: "Mikor többértelmű (ambiguus) egy CF nyelvtan?", a: ["Ha van olyan szava, amelynek több baloldali levezetése van", "Ha véges", "Ha reguláris", "Ha üres a nyelve"], correct: 0 },
                    { q: "Milyen alakúak a Chomsky-féle normálalak (CNF) szabályai?", a: ["A → BC, A → a, (S → ε)", "A → aB", "A → BCD", "α → β tetszőleges"], correct: 0 },
                    { q: "Melyik automata ismeri fel a CF nyelveket?", a: ["Veremautomata (PDA)", "Véges automata", "Turing-gép kötelezően", "Lineárisan korlátozott automata"], correct: 0 },
                    { q: "A CF nyelvek osztálya zárt-e a metszetre?", a: ["Nem zárt a metszetre és a komplementerre sem", "Igen, mindkettőre zárt", "Csak a metszetre zárt", "Csak a komplementerre zárt"], correct: 0 },
                    { q: "Ha A₁ CF nyelv és A₂ reguláris, akkor A₁ ∩ A₂ ...", a: ["CF nyelv", "mindig reguláris", "nem nyelv", "üres"], correct: 0 },
                    { q: "Mire szolgál a BNF (Backus–Naur Form)?", a: ["Programozási nyelvek szintaxisának (CF) leírására", "Automaták minimalizálására", "Turing-gép kódolására", "Reguláris kifejezések tömörítésére"], correct: 0 },
                    { q: "A veremautomata melyik adatszerkezetet használja?", a: ["Vermet (LIFO)", "Sort (FIFO)", "Hash-táblát", "Bináris fát"], correct: 0 },
                    { q: "Mi a levezetési (szintaxis) fa?", a: ["A CF levezetés fa-alakú ábrázolása, levelei a terminálisok", "Egy automata állapotgráfja", "A nyelv komplementere", "Egy reguláris kifejezés"], correct: 0 },
                    { q: "Mi a baloldali levezetés?", a: ["Minden lépésben a legbaloldalibb nemterminálist helyettesítjük", "A szabályok jobbról balra alkalmazása", "A fa jobb oldali bejárása", "A szó megfordítása"], correct: 0 },
                    { q: "A Greibach-féle normálalak (GNF) szabályainak alakja:", a: ["A → aα, ahol a terminális, α nemterminálisok sorozata", "A → BC vagy A → a", "A → ε", "α → β tetszőleges"], correct: 0 },
                    { q: "Veremautomatánál mi a kétféle elfogadási mód?", a: ["Végállapottal, illetve üres veremmel", "Bal- és jobboldali", "Determinisztikus és lineáris", "Felső és alsó"], correct: 0 },
                    { q: "A determinisztikus CF nyelvek (DCFL) viszonya a CF nyelvekhez:", a: ["DCFL a CF valódi részhalmaza", "DCFL = CF", "CF ⊂ DCFL", "Nincs kapcsolat"], correct: 0 },
                    { q: "A CF nyelvek osztálya zárt-e az unióra?", a: ["Igen", "Nem", "Csak véges nyelvekre", "Csak a metszetre zárt"], correct: 0 },
                    { q: "A CF nyelvek osztálya zárt-e a konkatenációra?", a: ["Igen", "Nem", "Csak determinisztikus esetben", "Csak az üres nyelvre"], correct: 0 },
                    { q: "Melyik algoritmus dönti el polinom időben egy szó CF nyelvbeli tagságát?", a: ["CYK-algoritmus (CNF-en, O(n³))", "Részhalmaz-konstrukció", "Dijkstra", "Pumpáló lemma"], correct: 0 },
                    { q: "Egy ε-mentes CNF szabályban hány nemterminális állhat a jobb oldalon?", a: ["Pontosan kettő (A → BC), vagy egy terminális (A → a)", "Akárhány", "Legalább három", "Nulla"], correct: 0 },
                    { q: "Mit jelent, hogy egy CF nyelv inherensen többértelmű?", a: ["Nincs hozzá egyértelmű (nem ambiguus) grammatika", "Minden nyelvtana véges", "Reguláris is egyben", "Üres a nyelve"], correct: 0 },
                    { q: "A BNF-ben a '::=' szimbólum mit jelöl?", a: ["Egy szabály definícióját ('helyettesíthető erre')", "Konkatenációt", "A nyelv komplementerét", "Egy terminálist"], correct: 0 },
                    { q: "Az EBNF mivel bővíti a BNF-et?", a: ["Opció [], ismétlés {}, csoportosítás () jelölésekkel", "Csak terminálisokkal", "Veremmel", "Időkorláttal"], correct: 0 },
                    { q: "Egy DPDA (determinisztikus veremautomata) minden lépésben...", a: ["Legfeljebb egy lehetséges átmenettel rendelkezik", "Több átmenetet is választhat", "Nem használ vermet", "Mindig elfogad"], correct: 0 },
                    { q: "Mit távolít el a CNF-re alakítás során a tisztítás?", a: ["Haszontalan (elérhetetlen/terméketlen) szimbólumokat és ε-, lánc-szabályokat", "A terminálisokat", "A kezdőszimbólumot", "A teljes nyelvtant"], correct: 0 },
                    { q: "A programozási nyelvek szintaxisát jellemzően milyen grammatikával írjuk le?", a: ["Környezetfüggetlen (CF) grammatikával", "Reguláris grammatikával", "0. típusúval", "Környezetfüggővel"], correct: 0 },
                    { q: "A veremautomata a verem tetejére mit tehet egy lépésben?", a: ["Egy vermi szimbólumot kicserélhet 0 vagy több szimbólumra", "Csak törölhet", "Csak olvashat, nem írhat", "A teljes vermet kiüríti"], correct: 0 }
                ]
            },

            /* ---------- 5. Téma ---------- */
            {
                name: "5. Turing-gép, rekurzív és rekurzíve felsorolható nyelvek",
                questions: [
                    { q: "Mikor rekurzíve felsorolható (Turing-felismerhető) egy L nyelv?", a: ["Ha van M TG, melyre L(M) = L (de nem feltétlen áll meg minden szóra)", "Ha minden szóra megáll a gép", "Ha véges", "Ha reguláris"], correct: 0 },
                    { q: "Mikor rekurzív (Turing-eldönthető) egy L nyelv?", a: ["Ha van M TG, melyre L(M)=L ÉS M minden bemenetre megáll", "Ha van őt felismerő TG", "Ha végtelen", "Ha CF"], correct: 0 },
                    { q: "Melyik állítás igaz?", a: ["Minden rekurzív nyelv rekurzíve felsorolható is", "Minden RE nyelv rekurzív is", "A két osztály megegyezik", "Egyik sem RE"], correct: 0 },
                    { q: "Ha L rekurzív, akkor a komplementere (Lᶜ) ...", a: ["szintén rekurzív", "nem rekurzív", "nem nyelv", "biztosan véges"], correct: 0 },
                    { q: "Miért van olyan nyelv, amit egyetlen TG sem ismer fel?", a: ["A TG-ek megszámlálhatóan sokan, a nyelvek nem-megszámlálhatóan sokan vannak", "Mert minden nyelv reguláris", "Mert a TG-ek végtelen sokan vannak", "Nincs ilyen nyelv"], correct: 0 },
                    { q: "A diagonális nyelv (L_d) milyen?", a: ["Nem rekurzíve felsorolható", "Reguláris", "Rekurzív", "CF"], correct: 0 },
                    { q: "A nyelvtannal generálható nyelvek osztálya megegyezik...", a: ["a rekurzíve felsorolható nyelvek osztályával", "a reguláris nyelvekkel", "a rekurzív nyelvekkel", "a CF nyelvekkel"], correct: 0 },
                    { q: "A környezetfüggő (CS) nyelvek mely automatával ismerhetők fel?", a: ["Lineárisan korlátozott TG", "Véges automata", "Veremautomata", "Egyszerű DFA"], correct: 0 },
                    { q: "Egy Turing-gép szalagja milyen?", a: ["Mindkét irányban végtelen, cellákra osztott", "Véges és fix", "Csak olvasható", "Kör alakú"], correct: 0 },
                    { q: "Mit csinál a Turing-gép író-olvasó feje?", a: ["Olvas, ír, és balra/jobbra lép", "Csak olvas", "Csak ír", "Csak áll"], correct: 0 },
                    { q: "Mit jelent, hogy egy TG megáll (halál)?", a: ["Elér egy elfogadó vagy elutasító állapotot és beáll", "Végtelen ciklusba kerül", "Törli a szalagot", "Úraindul"], correct: 0 },
                    { q: "A rekurzíve felsorolható nyelvek zártak-e a komplementerre?", a: ["Nem (különben minden RE nyelv rekurzív lenne)", "Igen", "Csak végesekre", "Csak CF-ekre"], correct: 0 },
                    { q: "Ha L és Lᶜ is rekurzíve felsorolható, akkor L...", a: ["rekurzív (eldönthető)", "nem nyelv", "biztosan véges", "nem RE"], correct: 0 },
                    { q: "Mi a többszalagos TG viszonya az egyszalagoshoz?", a: ["Ugyanazokat a nyelveket ismeri fel (legfeljebb polinom lassítás)", "Több nyelvet ismer fel", "Gyengébb", "Nem szimulálható"], correct: 0 },
                    { q: "A nemdeterminisztikus TG viszonya a determinisztikushoz (felismerőerő):", a: ["Ugyanazokat a nyelveket ismeri fel", "Több nyelvet ismer fel", "Kevesebbet", "Nem szimulálható"], correct: 0 },
                    { q: "Mi a Turing-gép konfigurációja?", a: ["A szalagtartalom, a fej helye és az aktuális állapot együtt", "Csak az állapot", "Csak a bemenet", "A szabályok száma"], correct: 0 },
                    { q: "Miért nem-megszámlálható az összes nyelv halmaza Σ* felett?", a: ["Σ* részhalmazainak halmaza kontinuum számosságú", "Mert véges", "Mert megszámlálható", "Mert minden nyelv reguláris"], correct: 0 },
                    { q: "Hány Turing-gép van (számosság)?", a: ["Megszámlálhatóan végtelen (véges szóval kódolhatók)", "Nem-megszámlálható", "Véges", "Kontinuum"], correct: 0 },
                    { q: "A rekurzív nyelvek a rekurzíve felsorolhatókhoz képest:", a: ["Valódi részhalmazt alkotnak", "Megegyeznek", "Bővebbek", "Diszjunktak"], correct: 0 },
                    { q: "Melyik nyelvosztály esik egybe a 0. típusú grammatikákkal?", a: ["A rekurzíve felsorolható nyelvek", "A rekurzív nyelvek", "A CF nyelvek", "A reguláris nyelvek"], correct: 0 },
                    { q: "Mit jelent a 'dönti el' (decide) egy TG esetén?", a: ["Minden bemenetre megáll és helyes igen/nem választ ad", "Csak az igen szavakra áll meg", "Nem áll meg soha", "Véletlenszerűen válaszol"], correct: 0 },
                    { q: "A lineárisan korlátozott automata (LBA) mit korlátoz?", a: ["A felhasználható szalag a bemenet hosszával arányos", "Az időt polinomra", "Az állapotok számát", "Az ábécét"], correct: 0 },
                    { q: "Mit jelent, hogy a TG kiment a végtelen ciklusba?", a: ["Sosem áll meg — emiatt RE nyelvnél a nem-tagság nem felismerhető", "Elfogadja a szót", "Elutasítja a szót", "Törli a szalagot"], correct: 0 }
                ]
            },

            /* ---------- 6. Téma ---------- */
            {
                name: "6. Church–Turing tézis, eldönthetetlenség, univerzális TG",
                questions: [
                    { q: "Mit mond a Church–Turing tézis?", a: ["Ami algoritmussal kiszámítható/eldönthető, az Turing-kiszámítható/eldönthető", "Minden nyelv reguláris", "Minden probléma eldönthető", "A TG erősebb minden algoritmusnál"], correct: 0 },
                    { q: "Mi az univerzális nyelv (L_u)?", a: ["{ w#s | M_w létezik és s ∈ L(M_w) }", "{ w | M_w megáll }", "az üres nyelv", "minden reguláris nyelv"], correct: 0 },
                    { q: "Milyen tulajdonságú az univerzális nyelv (L_u)?", a: ["Rekurzíve felsorolható, de NEM rekurzív", "Rekurzív", "Reguláris", "Nem rekurzíve felsorolható"], correct: 0 },
                    { q: "Mit állít Hilbert 10. problémájáról Matijaszevics tétele?", a: ["Nincs algoritmus a diofantikus egyenletek megoldhatóságának eldöntésére (nem rekurzív)", "Van rá polinomiális algoritmus", "Reguláris probléma", "Eldönthető"], correct: 0 },
                    { q: "Mi az univerzális Turing-gép (U)?", a: ["Olyan TG, amely a w#s bemeneten szimulálja M_w futását az s szón", "Egy gép, amely minden nyelvet eldönt", "Egy véges automata", "Egy gép memória nélkül"], correct: 0 },
                    { q: "Milyen a megállási probléma (L_h) nyelve?", a: ["Rekurzíve felsorolható, de nem rekurzív", "Rekurzív", "Reguláris", "Nem RE"], correct: 0 },
                    { q: "Mit jelöl M_w?", a: ["A w ∈ {0,1}* szóval kódolt Turing-gépet", "Egy reguláris kifejezést", "Egy véges automatát", "A w szó hosszát"], correct: 0 },
                    { q: "Az L_u nem rekurzív tételét ki és mikor bizonyította?", a: ["Turing, 1936", "Cook, 1971", "Gödel, 1931", "Church, 1950"], correct: 0 },
                    { q: "Mi a megállási probléma (halting problem)?", a: ["Eldönteni, hogy M_w megáll-e az s bemeneten", "Eldönteni, hogy egy nyelv üres-e", "Megszámolni az állapotokat", "Minimalizálni egy DFA-t"], correct: 0 },
                    { q: "A megállási probléma...", a: ["Algoritmikusan eldönthetetlen", "Polinom időben eldönthető", "Reguláris", "NP-teljes, de eldönthető"], correct: 0 },
                    { q: "Milyen bizonyítási módszerrel látjuk be a megállási probléma eldönthetetlenségét?", a: ["Diagonalizáció (önhivatkozás, ellentmondás)", "Pumpáló lemma", "Részhalmaz-konstrukció", "Indukció"], correct: 0 },
                    { q: "Mit állít Rice tétele?", a: ["A TG által felismert nyelv minden nemtriviális tulajdonsága eldönthetetlen", "Minden tulajdonság eldönthető", "P=NP", "Minden nyelv reguláris"], correct: 0 },
                    { q: "Mit jelent a visszavezetés (redukció) eldönthetetlenség bizonyításában?", a: ["Egy ismert eldönthetetlen problémát vezetünk vissza az újra", "Új automatát építünk", "Pumpálunk", "Minimalizálunk"], correct: 0 },
                    { q: "A Church–Turing tézis bizonyítható-e formálisan?", a: ["Nem, ez tézis (intuitív 'algoritmus' fogalmat köt össze a TG-vel)", "Igen, Turing bizonyította", "Igen, Gödel", "Cáfolták"], correct: 0 },
                    { q: "A lambda-kalkulus és a Turing-gép kifejezőereje...", a: ["Megegyezik (mindkettő Turing-teljes)", "A lambda erősebb", "A TG erősebb", "Nincs kapcsolatuk"], correct: 0 },
                    { q: "Mit jelent, hogy egy modell Turing-teljes?", a: ["Képes szimulálni bármely Turing-gépet", "Minden bemenetre megáll", "Csak reguláris nyelveket ismer", "Véges állapotú"], correct: 0 },
                    { q: "A Post-megfeleltetési probléma (PCP)...", a: ["Eldönthetetlen", "Polinom időben eldönthető", "Reguláris", "NP-teljes"], correct: 0 },
                    { q: "Mi az univerzális gép (U) bemenete?", a: ["Egy gép kódja (w) és egy szó (s), például w#s", "Csak egy szó", "Csak egy gépkód", "Egy reguláris kifejezés"], correct: 0 },
                    { q: "Miért fontos az univerzális TG létezése?", a: ["Megmutatja, hogy egyetlen gép (számítógép) program szerint bármit kiszámíthat", "Hogy minden nyelv véges", "Hogy P=NP", "Hogy nincs eldönthetetlen probléma"], correct: 0 },
                    { q: "Az eldönthető és a felismerhető (RE) problémák viszonya:", a: ["Minden eldönthető felismerhető, de fordítva nem", "Megegyeznek", "Diszjunktak", "A felismerhető szűkebb"], correct: 0 },
                    { q: "Az üresség-probléma (L(M)=∅?) TG-kre...", a: ["Eldönthetetlen", "Eldönthető", "Reguláris", "Véges"], correct: 0 },
                    { q: "A diagonális nyelv (L_d) szerepe a bizonyításban:", a: ["Példa olyan nyelvre, amely nem is rekurzíve felsorolható", "Példa reguláris nyelvre", "Példa CF nyelvre", "Az üres nyelv"], correct: 0 },
                    { q: "Mit jelent az önhivatkozás (self-reference) a diagonalizációban?", a: ["Egy gépet a saját kódján futtatunk (M_w a w bemeneten)", "Két külön nyelv uniója", "A nyelv megfordítása", "Egy reguláris kifejezés"], correct: 0 }
                ]
            },

            /* ---------- 7. Téma ---------- */
            {
                name: "7. Időbonyolultság, P, NP, PSPACE, EXPTIME",
                questions: [
                    { q: "Mit jelent f(n) = O(g(n))?", a: ["∃ c, n₀ > 0, hogy f(n) ≤ c·g(n) minden n ≥ n₀ esetén", "f(n) = g(n) mindenhol", "f gyorsabban nő mint g", "f(n) ≥ g(n) mindig"], correct: 0 },
                    { q: "Mi a P osztály definíciója?", a: ["P = ∪ₖ TIME(nᵏ) — polinom időben eldönthető nyelvek", "P = SPACE(n)", "P = az összes rekurzív nyelv", "P = NTIME(nᵏ)"], correct: 0 },
                    { q: "Mi az NP osztály?", a: ["NP = ∪ₖ NTIME(nᵏ) — nemdeterminisztikus polinom időben felismerhető nyelvek", "NP = nem polinomiális nyelvek", "NP = SPACE(2ⁿ)", "NP = az eldönthetetlen nyelvek"], correct: 0 },
                    { q: "Melyik tartalmazási lánc helyes?", a: ["P ⊆ NP ⊆ PSPACE ⊆ EXPTIME", "EXPTIME ⊆ P", "NP ⊆ P mindig", "PSPACE ⊆ P"], correct: 0 },
                    { q: "A tár-idő szimulációs tétel szerint egy k-szalagos f(n) idejű TG szimulálható egyszalagossal...", a: ["O(f(n)²) időben", "O(f(n)) időben", "exponenciális időben", "nem szimulálható"], correct: 0 },
                    { q: "Mi a PSPACE definíciója?", a: ["PSPACE = ∪ₖ SPACE(nᵏ) — polinom tárban felismerhető nyelvek", "PSPACE = TIME(nᵏ)", "PSPACE = EXPTIME", "PSPACE = NP"], correct: 0 },
                    { q: "A lineáris gyorsítási tétel következménye:", a: ["Az időigény definíciójában eltekinthetünk a konstans szorzótól", "Minden algoritmus lineáris", "P = NP", "A tár nem számít"], correct: 0 },
                    { q: "Igaz-e, hogy TIME(t(n)) = coTIME(t(n))?", a: ["Igen, a determinisztikus időosztályok zártak a komplementerre", "Nem", "Csak NP-re igaz", "Csak PSPACE-re"], correct: 0 },
                    { q: "Mit jelent f(n) = Ω(g(n))?", a: ["∃ c,n₀>0: f(n) ≥ c·g(n) minden n ≥ n₀ (alsó korlát)", "f(n) ≤ c·g(n)", "f=g", "f gyorsabban csökken"], correct: 0 },
                    { q: "Mit jelent f(n) = Θ(g(n))?", a: ["f egyszerre O(g) és Ω(g) — azonos nagyságrend", "f kisebb mint g", "f nagyobb mint g", "f konstans"], correct: 0 },
                    { q: "A P osztály nyelveit jellemzően milyennek tekintjük?", a: ["Hatékonyan (gyakorlatban kezelhetően) megoldhatónak", "Megoldhatatlannak", "Eldönthetetlennek", "Exponenciálisnak"], correct: 0 },
                    { q: "P ⊆ NP értésszerű, mert...", a: ["Ha polinom időben el lehet dönteni, akkor ellenőrizni is lehet", "Minden NP nyelv véges", "NP ⊆ P bizonyított", "P=NP bizonyított"], correct: 0 },
                    { q: "A P =? NP kérdés jelenlegi állása:", a: ["Nyitott (eldöntetlen) probléma", "Bizonyított, hogy P=NP", "Bizonyított, hogy P≠NP", "Értelmetlen kérdés"], correct: 0 },
                    { q: "Mit jelöl a coNP osztály?", a: ["Azok a nyelvek, amelyek komplementere NP-ben van", "NP ∩ P", "A nem polinomiális nyelvek", "PSPACE komplementere"], correct: 0 },
                    { q: "A SPACE(s(n)) osztály mit korlátoz?", a: ["A felhasznált szalagcellák (tár) számát s(n)-re", "Az időt", "Az állapotokat", "Az ábécét"], correct: 0 },
                    { q: "Mit állít Savitch tétele?", a: ["NSPACE(s(n)) ⊆ SPACE(s(n)²) — nemdet. tár négyzetes áron determinizálható", "P=NP", "NP=PSPACE", "TIME=SPACE"], correct: 0 },
                    { q: "Savitch tételének következménye PSPACE-re:", a: ["PSPACE = NPSPACE", "P = PSPACE", "PSPACE = EXPTIME", "PSPACE = NP"], correct: 0 },
                    { q: "Az idő- és tárhierarchia-tételek mit garantálnak?", a: ["Több erőforrással szigorúan több nyelv dönthető el", "P=NP-t", "Hogy minden osztály egyenlő", "Hogy nincs hierarchia"], correct: 0 },
                    { q: "P ⊆ PSPACE igaz, mert...", a: ["Polinom idő alatt legfeljebb polinom sok cellát használhatunk", "PSPACE ⊆ P", "Minden P nyelv véges", "Nem igaz"], correct: 0 },
                    { q: "Az EXPTIME osztály definíciója:", a: ["∪ₖ TIME(2^(n^k)) — exponenciális időben eldönthető nyelvek", "SPACE(n)", "NTIME(n)", "P komplementere"], correct: 0 },
                    { q: "A lineáris gyorsítási tétel mit enged meg?", a: ["Az időigényt konstans szorzóval csökkenteni (ábécé-bővítéssel)", "P=NP-t", "A tár elhagyását", "Végtelen gyorsítást"], correct: 0 },
                    { q: "P ≠ EXPTIME ismert-e?", a: ["Igen, az időhierarchia-tételből következik, hogy P ⊂ EXPTIME valódi", "Nem, nyitott", "Hamis", "P=EXPTIME"], correct: 0 },
                    { q: "Mi az NP nyelvek 'tanú' (certificate) alapú jellemzése?", a: ["Létezik polinom méretű tanú, amit polinom időben ellenőrizhetünk", "Nincs tanú", "A tanú exponenciális", "A tanú eldönthetetlen"], correct: 0 }
                ]
            },

            /* ---------- 8. Téma ---------- */
            {
                name: "8. NP-teljesség, Cook–Levin, NP-teljes problémák",
                questions: [
                    { q: "Mikor polinomiálisan bizonyítható egy L nyelv?", a: ["Van V polinom idejű algoritmus, hogy L = {w | ∃c: V elfogadja ⟨w,c⟩-t}", "Ha véges", "Ha reguláris", "Ha eldönthetetlen"], correct: 0 },
                    { q: "Mi a c szerepe a polinomiális bizonyíthatóságban?", a: ["A tanú (bizonyíték), hogy w ∈ L", "A nyelv komplementere", "Az automata állapota", "Az ábécé"], correct: 0 },
                    { q: "Az NP osztály a polinomiálisan bizonyítható nyelvek osztálya. Ez ekvivalens azzal, hogy...", a: ["NP = nemdeterminisztikus TG-vel polinom időben felismerhető nyelvek", "NP = P", "NP = reguláris nyelvek", "NP = eldönthetetlen nyelvek"], correct: 0 },
                    { q: "Mikor NP-teljes egy L nyelv?", a: ["L ∈ NP, és minden A ∈ NP esetén A ≤_P L", "L ∈ P", "L reguláris", "L eldönthetetlen"], correct: 0 },
                    { q: "Mit jelent A ≤_P B?", a: ["A polinom időben visszavezethető B-re", "A részhalmaza B-nek", "A és B megegyezik", "A komplementere B"], correct: 0 },
                    { q: "Mit állít a Cook–Levin-tétel?", a: ["A SAT probléma NP-teljes", "P = NP", "SAT ∈ P", "SAT eldönthetetlen"], correct: 0 },
                    { q: "Ha egy L NP-teljes nyelvről kiderülne, hogy L ∈ P, abból mi következne?", a: ["P = NP", "P ≠ NP", "NP = PSPACE", "semmi"], correct: 0 },
                    { q: "Hogyan bizonyítjuk egy új C nyelvről, hogy NP-teljes?", a: ["C ∈ NP, és egy ismert NP-teljes B-t visszavezetünk C-re (B ≤_P C)", "Megmutatjuk, hogy C ∈ P", "Megmutatjuk, hogy C véges", "Megmutatjuk, hogy C reguláris"], correct: 0 },
                    { q: "Mi a SAT probléma?", a: ["Egy Boole-formula kielégíthetőségének eldöntése", "Két gráf izomorfizmusa", "Egy szám prímtesztje", "Egy nyelv üressége"], correct: 0 },
                    { q: "A 3-SAT probléma...", a: ["NP-teljes (minden klauzúla pontosan 3 literált tartalmaz)", "P-beli", "Eldönthetetlen", "Csak coNP"], correct: 0 },
                    { q: "Mit jelöl az NP-nehéz (NP-hard) fogalom?", a: ["Minden NP-beli probléma visszavezethető rá, de nem feltétlen NP-beli", "NP-beli és NP-teljes", "P-beli", "Eldönthetetlen mindig"], correct: 0 },
                    { q: "Az NP-teljes = ?", a: ["NP-beli ÉS NP-nehéz", "Csak NP-nehéz", "Csak NP-beli", "P-beli"], correct: 0 },
                    { q: "A polinomiális visszavezetés (≤_P) tranzitív-e?", a: ["Igen: ha A ≤_P B és B ≤_P C, akkor A ≤_P C", "Nem", "Csak P-ben", "Csak SAT-ra"], correct: 0 },
                    { q: "Melyik ismert NP-teljes probléma?", a: ["Hamilton-kör / utazóügynök (döntési változat)", "Legrövidebb út (Dijkstra)", "Minimális feszítőfa", "Rendezés"], correct: 0 },
                    { q: "Melyik NEM ismert NP-teljes probléma?", a: ["Minimális feszítőfa (MST)", "3-SAT", "Csúcsfedés (Vertex Cover)", "Klikk (Clique)"], correct: 0 },
                    { q: "A Cook–Levin-tétel jelentősége:", a: ["Az első bizonyított NP-teljes probléma (SAT), erre vezetünk vissza másokat", "P=NP bizonyítása", "A pumpáló lemma", "A megállási probléma"], correct: 0 },
                    { q: "Ha B ≤_P C és C ∈ P, akkor B...", a: ["∈ P", "NP-teljes", "eldönthetetlen", "nem nyelv"], correct: 0 },
                    { q: "Mit jelent, hogy az NP-teljes problémák 'egyenrangúak'?", a: ["Bármelyik polinom megoldása az összes NP-t megoldaná", "Mind véges", "Mind P-beli", "Mind eldönthetetlen"], correct: 0 },
                    { q: "A csúcsfedés (Vertex Cover) döntési probléma...", a: ["NP-teljes", "P-beli", "Eldönthetetlen", "Reguláris"], correct: 0 },
                    { q: "A tanú (certificate) mérete NP-teljes problémánál:", a: ["Polinomiális a bemenet méretében", "Exponenciális", "Konstans", "Végtelen"], correct: 0 },
                    { q: "Ha P ≠ NP, akkor egy NP-teljes problémára...", a: ["Nincs polinom idejű algoritmus", "Van polinom algoritmus", "Eldönthetetlen", "Véges sok megoldás"], correct: 0 },
                    { q: "Mit jelöl a Karp-redukció?", a: ["Sok-egy polinomiális visszavezetést (≤_P)", "Egy approximációs eljárást", "A pumpáló lemmát", "Egy randomizált algoritmust"], correct: 0 },
                    { q: "A klóz (klauzúla) a SAT-ban mi?", a: ["Literálok diszjunkciója (VAGY-kapcsolata)", "Literálok konjunkciója", "Egy változó", "Egy gráf csúcsa"], correct: 0 }
                ]
            },

            /* ---------- Különbségek téma ---------- */
            {
                name: "★ Különbségek és fogalmi elhatárolások",
                questions: [
                    { q: "Mi a fő különbség a DFA és az NFA között?", a: ["DFA-ban minden állapot–jel párhoz pontosan egy átmenet van, NFA-ban több (vagy ε) is lehet", "DFA-nak nincs kezdőállapota", "NFA több nyelvet ismer fel, mint a DFA", "Nincs különbség"], correct: 0 },
                    { q: "Mi a különbség a reguláris és a környezetfüggetlen (CF) nyelv között?", a: ["A CF nyelvek bővebb osztály; pl. {aⁿbⁿ} CF, de nem reguláris", "A reguláris bővebb, mint a CF", "Megegyeznek", "A CF véges, a reguláris végtelen"], correct: 0 },
                    { q: "Mi a különbség a véges automata és a veremautomata között?", a: ["A veremautomatának van verem (memória), így CF nyelveket is felismer", "A véges automatának van verme", "Csak a nevükben", "A veremautomata kevesebbet ismer fel"], correct: 0 },
                    { q: "Mi a különbség a veremautomata és a Turing-gép között?", a: ["A TG szalagja kétirányban írható/olvasható; a verem csak LIFO — a TG erősebb", "A veremautomata erősebb", "Megegyeznek", "A TG-nek nincs memóriája"], correct: 0 },
                    { q: "Mi a különbség a rekurzív (eldönthető) és a rekurzíve felsorolható nyelv között?", a: ["Eldönthetőnél a TG mindig megáll (igen/nem); felsorolhatónál csak az 'igen' eseten garantált a megállás", "Nincs különbség", "A felsorolható szűkebb", "Az eldönthető nem létezik"], correct: 0 },
                    { q: "Mi a különbség a Moore- és a Mealy-gép között?", a: ["Moore: a kimenet az állapottól függ; Mealy: az állapottól ÉS a bemenettől", "Mealy kimenete csak az állapottól függ", "Moore-nak nincs kimenete", "Megegyeznek"], correct: 0 },
                    { q: "Mi a különbség a P és az NP osztály között?", a: ["P: polinom időben megoldható; NP: polinom időben ellenőrizhető (tanúval)", "NP ⊂ P bizonyítottan", "P nyelvek végesek", "Nincs különbség"], correct: 0 },
                    { q: "Mi a különbség az NP és az NP-teljes problémák között?", a: ["NP-teljes az NP 'legnehezebb' problémái, amelyekre minden NP-beli visszavezethető", "NP-teljes könnyebb, mint NP", "Az NP-teljes P-beli", "Megegyeznek"], correct: 0 },
                    { q: "Mi a különbség a determinisztikus és nemdeterminisztikus Turing-gép között?", a: ["A nemdeterminisztikusnál egy konfigurációból több lépés is lehet; nyelvfelismerésben ugyanazt tudják", "A determinisztikus erősebb nyelvosztályt ismer fel", "A nemdeterminisztikus nem áll meg soha", "Nincs különbség az átmenetfüggvényben"], correct: 0 },
                    { q: "Mi a különbség a környezetfüggő (1.) és a környezetfüggetlen (2.) grammatika között?", a: ["CF-ben a szabály bal oldalán egyetlen nemterminális; környezetfüggőnél környezet is állhat (|α|≤|β|)", "A CF bal oldalán több szimbólum áll", "Megegyeznek", "A környezetfüggő reguláris"], correct: 0 },
                    { q: "Mi a különbség a grammatika (generál) és az automata (felismer) szerepe között?", a: ["A grammatika előállítja a nyelv szavait, az automata eldönti egy szóról, hogy a nyelvben van-e", "Mindkettő generál", "Mindkettő felismer", "Az automata generál, a grammatika felismer"], correct: 0 },
                    { q: "Mi a különbség az üres szó (ε) és az üres nyelv (∅) között?", a: ["ε egy 0 hosszú szó; ∅ egy nyelv, amelyben egyetlen szó sincs", "Megegyeznek", "ε egy nyelv, ∅ egy szó", "Mindkettő ugyanaz a halmaz"], correct: 0 },
                    { q: "Mi a különbség a Σ* és a Σ⁺ között?", a: ["Σ⁺ = Σ* \\ {ε}, azaz Σ⁺ nem tartalmazza az üres szót", "Σ* nem tartalmazza ε-t", "Megegyeznek", "Σ⁺ csak egybetűs szavakat tartalmaz"], correct: 0 },
                    { q: "Mi a különbség a reguláris és a CF pumpáló lemma között?", a: ["Reguláris: 1 részt (y) pumpálunk (xyz); CF: 2 részt (v,y) egyszerre (uvxyz)", "A CF csak 1 részt pumpál", "Megegyeznek", "A reguláris 3 részt pumpál"], correct: 0 },
                    { q: "Mi a különbség a Karp- (sok-egy) és a Turing-redukció között?", a: ["Karp: egyetlen transzformáció a bemeneten; Turing: az orákulum többször is hívható", "A Karp erősebb és többször hív", "Megegyeznek", "A Turing-redukció csak P-ben működik"], correct: 0 },
                    { q: "Mi a különbség a P és a PSPACE osztály között?", a: ["P a polinom idejű, PSPACE a polinom tárú nyelvek; P ⊆ PSPACE", "PSPACE ⊆ P bizonyítottan", "Megegyeznek", "A PSPACE véges nyelvek"], correct: 0 },
                    { q: "Mi a különbség az idő- és a tárbonyolultság között?", a: ["Időbonyolultság a lépésszámot, tárbonyolultság a felhasznált memóriacellákat méri", "Mindkettő a memóriát méri", "Mindkettő a lépésszámot méri", "Nincs különbség"], correct: 0 },
                    { q: "Mi a különbség az O, Ω és Θ jelölés között?", a: ["O felső, Ω alsó, Θ szoros (alsó és felső) korlátot ad a növekedésre", "Mindhárom felső korlát", "Θ csak alsó korlát", "O alsó korlát"], correct: 0 },
                    { q: "Mi a különbség a unió és a konkatenáció művelete között?", a: ["Unió: a két nyelv szavainak egyesítése; konkatenáció: az egyik nyelv szavai után a másikéi fűzve", "Megegyeznek", "Az unió szavakat fűz össze", "A konkatenáció halmazegyesítés"], correct: 0 },
                    { q: "Mi a különbség az L* (Kleene-csillag) és az L⁺ között?", a: ["L* az üres szót is tartalmazza (0 ismétlés), L⁺ legalább 1 ismétlést jelent", "L⁺ tartalmazza ε-t, L* nem", "Megegyeznek", "L* legalább 1 ismétlés"], correct: 0 },
                    { q: "Mi a különbség az eldönthetetlen és a kezelhetetlen (intractable) probléma között?", a: ["Eldönthetetlenre nincs algoritmus; kezelhetetlenre van, de nem hatékony (pl. exponenciális)", "Megegyeznek", "A kezelhetetlennek nincs algoritmusa", "Az eldönthetetlen polinom idejű"], correct: 0 },
                    { q: "Mi a különbség a nyelv felismerése és eldöntése között (Turing-gép)?", a: ["Eldöntésnél a gép minden bemeneten megáll; felismerésnél elég, ha az L-belieken megáll elfogadva", "Megegyeznek", "Felismerésnél mindig megáll", "Eldöntésnél sosem áll meg"], correct: 0 },
                    { q: "Mi a különbség a SAT és a 3-SAT között?", a: ["3-SAT a SAT speciális esete: minden klóz pontosan 3 literált tartalmaz; mindkettő NP-teljes", "A 3-SAT P-beli", "A SAT könnyebb, mint a 3-SAT", "Nincs köztük kapcsolat"], correct: 0 },
                    { q: "Mi a különbség a determinisztikus és a nemdeterminisztikus veremautomata között?", a: ["A nemdeterminisztikus PDA bővebb nyelvosztályt (az összes CF) ismer fel, mint a determinisztikus", "A determinisztikus erősebb", "Megegyeznek a felismert nyelvek", "A determinisztikus minden CF-et felismer"], correct: 0 },
                    { q: "Mi a különbség a reguláris kifejezés és a véges automata között (kifejezőerő)?", a: ["Ekvivalensek: ugyanazt a nyelvosztályt (reguláris) definiálják (Kleene-tétel)", "A reguláris kifejezés erősebb", "Az automata erősebb", "Nincs köztük kapcsolat"], correct: 0 }
                ]
            }
        ]
    },

    /* ===================================================================
       NYELVTECHNOLÓGIA ALAPJAI
       =================================================================== */
    nyelvtech: {
        title: "Nyelvtechnológia alapjai",
        icon: "🔤",
        topics: [

            /* ---------- 1. Téma ---------- */
            {
                name: "1. Karakterek, nyelvstatisztika, n-gramok",
                questions: [
                    { q: "Mi a különbség a betű és a karakter között?", a: ["A betű lingvisztikai egység (fonémát jelöl), a karakter informatikai egység (kódponthoz rendelt jel)", "Nincs különbség", "A karakter mindig betű", "A betű mindig számjegy"], correct: 0 },
                    { q: "Mi a fonéma?", a: ["A hangok elemi, elvont, jelentés-megkülönböztető egysége", "Egy leírt betű", "Egy karakterkód", "Egy szótő"], correct: 0 },
                    { q: "Mi az UTF-8 jellemzője?", a: ["Változó hosszúságú kódolás; 1 bájtos kódjai megegyeznek az ASCII-val", "Mindig 4 bájtos", "Csak magyar betűket kódol", "Fix 2 bájtos"], correct: 0 },
                    { q: "Mit mond ki a Zipf-törvény?", a: ["A rang szerint rendezett szavak gyakorisága ~ 1/iᵅ (hatványfüggvény, α≈1)", "Minden szó egyformán gyakori", "A szókészlet lineárisan nő", "A betűk egyenletesen oszlanak el"], correct: 0 },
                    { q: "Mit ír le a Heaps-törvény?", a: ["A szókészlet mérete V ≈ K·Nᵝ (szublineáris növekedés a korpusz méretével)", "A szavak hosszát", "A betűgyakoriságot", "A mondatok számát"], correct: 0 },
                    { q: "Mi az n-gram?", a: ["n egymás után következő karakter (vagy szó) sorozata", "n betűs ábécé", "n állapotú automata", "n szabályú nyelvtan"], correct: 0 },
                    { q: "Miért magasabb a magyar Heaps-féle β kitevője az angolnál?", a: ["A magyar agglutináló jellege miatt sok toldalékolt alak külön szóként jelenik meg", "Mert a magyar ábécé hosszabb", "Mert kevesebb a magyar szöveg", "Mert nincs benne ékezet"], correct: 0 },
                    { q: "A Unicode szabvány célja:", a: ["Minden nyelv karaktereinek egységes, egyedi kódolása", "Csak a latin betűk kódolása", "A szövegek tömörítése", "Csak ASCII karakterek"], correct: 0 },
                    { q: "Mi a kódpont (code point) a Unicode-ban?", a: ["Egy karakterhez rendelt egyedi szám (pl. U+0041)", "Egy bájt", "Egy betűkép (glif)", "Egy bitminta"], correct: 0 },
                    { q: "Mi a glif (glyph)?", a: ["Egy karakter konkrét vizuális megjelenése (betűkép)", "A karakter kódpontja", "Egy bájt", "Egy fonéma"], correct: 0 },
                    { q: "Hány bites az ASCII alapkódolás?", a: ["7 bites (128 karakter)", "8 bites", "16 bites", "32 bites"], correct: 0 },
                    { q: "A Zipf-törvény szerint a leggyakoribb szó a második leggyakoribbhoz képest...", a: ["Körülbelül kétszer olyan gyakori", "Ugyanolyan gyakori", "Tizszer gyakoribb", "Ritkább"], correct: 0 },
                    { q: "Mi a karakter-n-gram haszna?", a: ["Nyelvfelismerés, helyesírás-ellenőrzés, statisztikai modellezés", "Hangszintézis", "Képtömörítés", "Automata-minimalizálás"], correct: 0 },
                    { q: "Mi a bigram?", a: ["Két egymás utáni egység (karakter vagy szó)", "Két mondat", "Két nyelv", "Két ábécé"], correct: 0 },
                    { q: "Mi a trigram?", a: ["Három egymás utáni egység", "Három mondat", "Három betűs szó", "Három nyelv"], correct: 0 },
                    { q: "Miért fontos a nyelvstatisztika a nyelvtechnológiában?", a: ["A valószínűségi modellek (pl. nyelvi modellek) alapja", "Csak helyesíráshoz", "Nincs jelentősége", "Csak hangokhoz"], correct: 0 },
                    { q: "A Heaps-törvény β kitevője jellemzően milyen értékű?", a: ["0 és 1 közötti (szublinearitás)", "Pontosan 1", "1-nél nagyobb", "Negatív"], correct: 0 },
                    { q: "Az UTF-8-ban az ASCII karakterek hány bájton tárolódnak?", a: ["1 bájton", "2 bájton", "4 bájton", "Mindig 3 bájton"], correct: 0 },
                    { q: "Mit jelent, hogy a magyar agglutináló nyelv?", a: ["A szótövekhez sok toldák tapad, sok szóalak keletkezik", "Nincsenek toldákai", "Csak összetételekkel dolgozik", "Fix szórendű"], correct: 0 },
                    { q: "A token és a type fogalma a nyelvstatisztikában:", a: ["A token az összes előfordulás, a type a különböző szóalakok száma", "Megegyeznek", "A type több mint a token", "A token a betű, a type a hang"], correct: 0 },
                    { q: "A type/token arány (TTR) mit mér?", a: ["A szókincs gazdagságát/változatosságát egy szövegben", "A mondatok hosszát", "A karakterkódolást", "A hangok számát"], correct: 0 },
                    { q: "Miért növekszik szublinenárisan a szókészlet a korpusz méretével?", a: ["Egyre ritkábban bukkan fel új szóalak (a gyakoriak hamar előkerülnek)", "Mert véges a szöveg", "Mert minden szó egyszer fordul elő", "Mert lineárisan nő"], correct: 0 },
                    { q: "A nagybetű–kisbetű megkülönböztetése számolásnál (case folding) miért fontos?", a: ["Befolyásolja, hogy az 'A' és 'a' egy type-nak számít-e", "Nincs hatása", "Csak hangoknál számít", "Csak számoknál"], correct: 0 }
                ]
            },

            /* ---------- 2. Téma ---------- */
            {
                name: "2. Reguláris kifejezések, FSA, FST, RTN, ATN",
                questions: [
                    { q: "Mi az FSA (véges állapotú automata) kimenete?", a: ["Bináris: elfogadom / nem fogadom el (igen/nem)", "Egy string", "Egy szófaji elemzés", "Egy fa"], correct: 0 },
                    { q: "Miben különbözik az FST az FSA-tól?", a: ["Az FST-nek kimenő ábécéje is van, így stringet ad ki (nem csak bool-t)", "Az FST gyorsabb", "Az FST nem fogad el nyelvet", "Az FST-nek nincs állapota"], correct: 0 },
                    { q: "Melyik Chomsky-osztályt ragadja meg a reguláris kifejezés / FSA?", a: ["3-as típus (reguláris), O(n) felismeréssel", "2-es típus (CF)", "1-es típus (CS)", "0-s típus (RE)"], correct: 0 },
                    { q: "Mi az RTN (Recursive Transition Network)?", a: ["Egymást hívó FSA-k hálózata; valójában veremautomata (CF nyelvekre)", "Egy egyszerű DFA", "Egy Turing-gép", "Egy reguláris kifejezés"], correct: 0 },
                    { q: "Mi jellemzi az ATN-t (Augmented Transition Network)?", a: ["Regisztereket, teszteket, akciókat használ; erejében egy TG-nek felel meg", "Csak bináris kimenet", "Nincs memóriája", "Csak reguláris nyelveket kezel"], correct: 0 },
                    { q: "Mit mond ki Johnson (1972) felismerése a fonológiai szabályokról?", a: ["Reguláris relációval (FST-vel) leírhatók, így csak reguláris nyelveket generálnak", "Környezetfüggő nyelveket generálnak", "Turing-erejűek", "Nem automatizálhatók"], correct: 0 },
                    { q: "Mit jelöl a két szint a kétszintes leírásban?", a: ["Lexikális szint (belső alak) és felszíni szint (kiejtett/leírt alak)", "Bemenet és kimenet bitben", "Két különböző nyelv", "Két automata"], correct: 0 },
                    { q: "Milyen műveletek végezhetők FST-kkel?", a: ["Konkatenáció, unió, iteráció, metszet, kompozíció", "Csak unió", "Csak rendezés", "Semmilyen"], correct: 0 },
                    { q: "Mi az FST (véges állapotú transzdjuser) formális lényege?", a: ["Két szalag (be- és kimenet) közötti reguláris reláció", "Egy egyszerű elfogadó automata", "Egy veremautomata", "Egy Turing-gép"], correct: 0 },
                    { q: "Mi az FSA állapotgráfjának éle?", a: ["Egy bemeneti szimbólummal címkézett átmenet két állapot között", "Egy kimeneti szó", "Egy verem-művelet", "Egy regiszter"], correct: 0 },
                    { q: "Miért előnyös az FST a morfológiában?", a: ["Kétirányú: elemzésre és generálásra is használható", "Csak generál", "Csak elemez", "Nem használható morfológiára"], correct: 0 },
                    { q: "A reguláris kifejezések és az FSA viszonya:", a: ["Ekvivalensek (ugyanazt a nyelvosztályt írják le)", "A reg.kif. erősebb", "Az FSA erősebb", "Nincs kapcsolatuk"], correct: 0 },
                    { q: "Mi az FST kompozíció (∘) jelentése?", a: ["Két reláció egymás utáni alkalmazása egyetlen FST-be összevonva", "Két nyelv uniója", "A megfordítás", "Az állapotok törlése"], correct: 0 },
                    { q: "Miért nem elég a reg.kif. a mondatszintaxishoz?", a: ["A beágyazott szerkezetek (zárójelezés) nem regulárisak", "Túl erős", "Lassú", "Nem létezik"], correct: 0 },
                    { q: "Az RTN ekvivalens erőben...", a: ["A veremautomatával (CF nyelvek)", "A véges automatával", "A Turing-géppel", "A reguláris kifejezéssel"], correct: 0 },
                    { q: "Az ATN ereje...", a: ["Turing-gépnek felel meg (regiszterek, tesztek, akciók miatt)", "Véges automata", "Veremautomata", "Reguláris"], correct: 0 },
                    { q: "Mit jelent a fonológiai szabályok 'reguláris' természete (Johnson)?", a: ["FST-vel modellezhetők, nem növelik a generálóerőt a reguláris szint fölé", "Turing-erősűek", "Környezetfüggők", "Eldönthetetlenek"], correct: 0 },
                    { q: "A kétszintes morfológiában a lexikális és felszíni szintet mi köti össze?", a: ["Párhuzamos (kétszalagos) FST-k / szabályok", "Egy veremautomata", "Egy reguláris kifejezés csak", "Egy ATN"], correct: 0 },
                    { q: "Mit jelöl a Kleene-csillag a reguláris kifejezésben?", a: ["Nulla vagy több ismétlést", "Pontosan egy előfordulást", "Uniót", "Komplementert"], correct: 0 },
                    { q: "Az FST megfordítása (inverse) mit ad?", a: ["A be- és kimeneti szalagot felcseréli (generálás ↔ elemzés)", "Törli az állapotokat", "Minimalizál", "Uniót képez"], correct: 0 },
                    { q: "Miért hatékony az FSA-alapú felismerés?", a: ["Lineáris, O(n) idejű a bemenet hosszában", "Exponenciális", "Köbös", "Eldönthetetlen"], correct: 0 },
                    { q: "Az ATN regiszterei mire szolgálnak?", a: ["Részeredmények/jegyek tárolására az elemzés során", "A bemenet törlésére", "Az ábécé bővítésére", "Semmire"], correct: 0 },
                    { q: "A determinisztikus és nemdeterminisztikus FSA felismerőereje:", a: ["Megegyezik (ugyanazok a reguláris nyelvek)", "Az NFA erősebb", "A DFA erősebb", "Nincs kapcsolat"], correct: 0 }
                ]
            },

            /* ---------- 3. Téma ---------- */
            {
                name: "3. Kétszintes és unifikációs morfológia, egyértelműsítés",
                questions: [
                    { q: "Ki fejlesztette a kétszintes morfológia modelljét?", a: ["Kimmo Koskenniemi", "Noam Chomsky", "George Miller", "Alan Turing"], correct: 0 },
                    { q: "Mi a DAG az unifikációban?", a: ["Irányított körmentes gráf — jegyszerkezetek ábrázolására", "Determinisztikus automata", "Egy szótár", "Egy reguláris kifejezés"], correct: 0 },
                    { q: "Mi a jegyszerkezet?", a: ["Jegy–érték párok strukturált leírása (pl. [NUMBER SG])", "Egy karaktertábla", "Egy automata állapota", "Egy hangminta"], correct: 0 },
                    { q: "Mikor sikertelen (fail) az unifikáció?", a: ["Ha ugyanazon ösvényen egymásnak ellentmondó atomi értékek állnak (pl. SG ∪ PL)", "Mindig sikeres", "Ha a két szerkezet diszjunkt", "Ha üres az egyik"], correct: 0 },
                    { q: "Mit jelent a HuMor rövidítés?", a: ["High-speed Unification Morphology", "Hungarian Morphology", "Human Morphology", "Hierarchical Morphology"], correct: 0 },
                    { q: "Miért hibás a *főnökban alak a HuMor szerint?", a: ["A főnök [MÉLYHANGRENDŰ −] és a -ban [MÉLYHANGRENDŰ +] jegyei nem unifikálhatók", "A főnök nem létező szó", "A -ban nem rag", "Túl hosszú"], correct: 0 },
                    { q: "Az unifikáció a morfológia része?", a: ["Nem — DAG-okon értelmezett absztrakt művelet, máshol is használják", "Igen, kizárólag morfológiai művelet", "Csak szintaxisban használják", "Csak fonológiában"], correct: 0 },
                    { q: "Mire való a guesser modul?", a: ["Szótárban nem szereplő (ismeretlen) tövek elemzésének becslésére", "Helyesírás-javításra", "Szövegtömörítésre", "Fordításra"], correct: 0 },
                    { q: "Mit jelent a magyar magas-/mélyhangrendűség (vokálharmónia)?", a: ["A toldák magánhangzója igazodik a szótő hangrendjéhez", "Minden szó ugyanazt a toldákot kapja", "A mássalhangzók harmóniája", "A hangsúly szabálya"], correct: 0 },
                    { q: "Mit jelent a jegy (feature) a jegyszerkezetben?", a: ["Egy tulajdonság neve, amelyhez érték tartozik (pl. SZÁM)", "Egy karakter", "Egy automataállapot", "Egy hang"], correct: 0 },
                    { q: "Az unifikáció eredménye sikeres esetben:", a: ["A két jegyszerkezet legkisebb közös kiterjesztése (egyesítése)", "Az üres halmaz", "A két szerkezet metszete csak", "Mindig hiba"], correct: 0 },
                    { q: "Mitől 'kétszintes' a Koskenniemi-modell?", a: ["Közvetlen megfeleltetés a lexikális és a felszíni szint között, köztes alak nélkül", "Két nyelvet kezel", "Két automatát használ sorban", "Két szótára van"], correct: 0 },
                    { q: "A kétszintes szabályok mit írnak le?", a: ["A lexikális és felszíni karakterek megfeleltetéseit kontextusban", "A mondatszintaxist", "A szemantikát", "A hangmagósodot"], correct: 0 },
                    { q: "Mit jelent a tőváltakozás (pl. 'ló' → 'lovak')?", a: ["A szótő alakja toldákoláskor megváltozik", "Új szó keletkezik", "A toldák eltűnik", "Nincs ilyen jelenség"], correct: 0 },
                    { q: "Az unifikációs morfológia előnye a szabály-alapúhoz képest:", a: ["Jegyszerkezetekkel rugalmasan kezeli az egyeztetési megszorításokat", "Gyorsabb mindig", "Nem kell szótár", "Nincs előnye"], correct: 0 },
                    { q: "Mit jelent az egyértelműsítés (disambiguation) a morfológiában?", a: ["A több lehetséges elemzés közül a kontextusban helyes kiválasztása", "Új szó generálása", "Helyesírás-javítás", "Tömörítés"], correct: 0 },
                    { q: "Miért szükséges a morfológiai egyértelműsítés?", a: ["Sok szóalaknak több lehetséges elemzése van (homonímia)", "Mert minden szó egyértelmű", "Csak hangoknál", "Nem szükséges"], correct: 0 },
                    { q: "A DAG-ban (irányított körmentes gráf) mit jelent az ösvény (path)?", a: ["Jegyek egymásba ágyazásának útja egy konkrét értékhez", "Egy automata-állapot", "Egy karakterkód", "Egy mondat"], correct: 0 },
                    { q: "Mit jelent, hogy az unifikáció monoton?", a: ["Az egyesített szerkezet legalább annyi információt hordoz, mint a részei", "Információt veszt", "Mindig üres", "Véletlenszerű"], correct: 0 },
                    { q: "A HuMor-ban a szótár mit tartalmaz?", a: ["Töveket és toldákokat a hozzájuk tartozó jegyekkel", "Csak teljes szóalakokat", "Csak mondatokat", "Hangmintákat"], correct: 0 },
                    { q: "Az unifikáció sikertelensége (fail) mit jelez a *főnökban példában?", a: ["A helytelen alak nem állítható elő (jegyek ütköznek)", "Az alak helyes", "A szó nem létezik a szótárban", "A toldák hibás"], correct: 0 },
                    { q: "Mit modellez a felszíni szint a kétszintes morfológiában?", a: ["A ténylegesen leírt/kiejtett szóalakot", "A szótári (absztrakt) alakot", "A mondat jelentését", "A hangsúlyt"], correct: 0 },
                    { q: "A morfológiai elemzés kimenete jellemzően:", a: ["A szótő + a toldákok/jegyek (pl. tö, eset, szám)", "Egy mondatfa", "Egy szinonímahalmaz", "Egy hangminta"], correct: 0 }
                ]
            },

            /* ---------- 4. Téma ---------- */
            {
                name: "4. Mondatreprezentáció, jegyszerkezetek, elemzés",
                questions: [
                    { q: "A közvetlen összetevős (Chomsky) elemzésben az S mire bomlik?", a: ["Főnévi (NP) és igei (VP) csoportra", "Csak igére", "Alanyra és tárgyra", "Morfémákra"], correct: 0 },
                    { q: "Mi a függőségi (dependencia, Tesnière) szerkezet központja?", a: ["Az ige (finitum)", "Az alany", "A tárgy", "A névelő"], correct: 0 },
                    { q: "Mi az összetevős szerkezet gyengesége?", a: ["A relációk jellege (alany, tárgy) nem jelenik meg explicit címkékkel", "Nem ad nevet csoportoknak", "Nem kezel beágyazást", "Nem ábrázolható fával"], correct: 0 },
                    { q: "Az X-vonás elméletben mi az XP (maximális projekció)?", a: ["X′ + specifier (pl. alany)", "Csak a fej", "Csak az adjunkt", "A tárgy önmagában"], correct: 0 },
                    { q: "Melyik nyelvtani szintet használják leginkább a mondatszintaxishoz?", a: ["Környezetfüggetlen (CF) — a reguláris túl gyenge, a CS túl drága", "Reguláris", "Környezetfüggő", "0-s típus"], correct: 0 },
                    { q: "Mi a chart parser (Earley) lényege?", a: ["Dinamikus programozással tárolja a részeredményeket, így kerüli az újraelemzést", "Csak top-down halad", "Csak véges nyelvekre jó", "Nem tárol semmit"], correct: 0 },
                    { q: "A PCFG (valószínűségi CF nyelvtan) mit rendel a szabályokhoz?", a: ["Gyakoriságot / valószínűséget, a leggyakoribbat veszi elő először", "Állapotokat", "Karakterkódokat", "Semmit"], correct: 0 },
                    { q: "Hogyan ellenőrizhető az alany–állítmány egyeztetés jegyszerkezetekkel?", a: ["A szám és személy jegyek unifikációjával", "Karakterek összehasonlításával", "A szavak hosszával", "Véletlenszerűen"], correct: 0 },
                    { q: "Mi a fej (head) egy összetevőben?", a: ["A csoport tulajdonságait meghatározó központi elem (pl. NP-ben a főnév)", "A legészébb szó", "Az első szó mindig", "A névelő"], correct: 0 },
                    { q: "Mi a top-down (fent-ről-le) elemzés iránya?", a: ["A kezdőszimbólumból indul és a terminálisok felé halad", "A szavakból épít felfelé", "Jobbról balra", "Véletlenszerű"], correct: 0 },
                    { q: "Mi a bottom-up (lentről-fel) elemzés iránya?", a: ["A bemeneti szavakból építi fel a fa nagyobb egységeit a gyökérig", "A kezdőszimbólumból indul", "Csak balról jobbra", "Nem használ fát"], correct: 0 },
                    { q: "Mi a backtracking (visszalépés) szerepe az elemzésben?", a: ["Zsákutca esetén visszatérés és másik szabály kipróbálása", "A fa törlése", "A bemenet megfordítása", "Az automata minimalizálása"], correct: 0 },
                    { q: "Mi az Earley-elemző időbonyolultsága általános CF nyelvtanra?", a: ["O(n³)", "O(n)", "O(2ⁿ)", "O(n!)"], correct: 0 },
                    { q: "Mi a dependencia–összetevős elemzés fő különbsége?", a: ["A dependencia szók közti relációkat ad, az összetevős csoportokat (frázisokat)", "Nincs különbség", "Mindkettő csak igekkel dolgozik", "A dependencia reguláris"], correct: 0 },
                    { q: "A dependencia-elemzésben a függőségi él mit köt össze?", a: ["Egy fej (governor) és egy függő (dependent) szót", "Két mondatot", "Két frázist", "Két nyelvet"], correct: 0 },
                    { q: "Mi a vonzatkeret (alkatégorizáció) az igéknél?", a: ["Az ige által megkövetelt bővítmények (pl. alany, tárgy) lisája", "Az ige hossza", "Az ige hangrendje", "Az ige gyakorisága"], correct: 0 },
                    { q: "A PCFG valószínűségeit honnan nyerjük?", a: ["Annotált korpuszból (treebank) tanulva", "Véletlenszerűen", "A szótárból", "Az ábécéből"], correct: 0 },
                    { q: "Mit jelent a treebank?", a: ["Mondatokhoz társított elemzési fák annotált gyűjteménye", "Egy bináris keresőfa", "Egy szótár", "Egy automata"], correct: 0 },
                    { q: "A többértelmű (ambiguus) mondatnál a PCFG mit ad vissza?", a: ["A legnagyobb valószínűségű elemzési fát", "Az összes fát egyformán", "Mindig hibát", "Az első véletlen fát"], correct: 0 },
                    { q: "Az X-vonás elméletben az X' (X-vonás) szint mit tartalmaz?", a: ["A fejet és a komplementum(ai)t", "Csak az alanyt", "Csak a névelőt", "A teljes mondatot"], correct: 0 },
                    { q: "Mi a beágyazás (recursion) jelentősége a mondatszerkezetben?", a: ["Mondat mondatba épülhet (pl. mellékmondat), ezért kell CF erő", "Nincs jelentősége", "Csak hangoknál", "Csak morfológiában"], correct: 0 },
                    { q: "Mi a chart (tábla) az Earley/CYK elemzőben?", a: ["Részelemzéseket tároló adatszerkezet az újraszámolás elkerülésére", "A mondat szótára", "Egy automataállapot", "A bemenet megfordítottja"], correct: 0 },
                    { q: "A Tesnière-féle függőségi modellben a verbum (ige) szerepe:", a: ["A mondat szervező központja, amelyhez az aktánsok kapcsolódnak", "Mellékes elem", "Csak a tárgyat határozza meg", "Nincs szerepe"], correct: 0 }
                ]
            },

            /* ---------- 5. Téma ---------- */
            {
                name: "5. Szintaktikai szerepek, esetek, WSD, WordNet, ontológiák",
                questions: [
                    { q: "Mi a különbség a felszíni eset és a mélyeset között?", a: ["A felszíni eset morfológiailag jelenik meg; a mélyeset szemantikai szerep (független a felszíni alaktól)", "Nincs különbség", "A mélyeset mindig az alany", "A felszíni eset szemantikai"], correct: 0 },
                    { q: "Melyik Fillmore-féle mélyeset a szándékos cselekvő?", a: ["Ágens", "Páciens", "Instrument", "Location"], correct: 0 },
                    { q: "Mi a WSD (Word Sense Disambiguation) feladata?", a: ["A kontextus alapján a szó helyes jelentésének kiválasztása", "Szóalakok generálása", "Mondatok fordítása", "Helyesírás-ellenőrzés"], correct: 0 },
                    { q: "Mi a WordNet alapegysége?", a: ["A synset (synonym set) — azonos jelentésű szavak halmaza", "A betű", "A token", "A mondat"], correct: 0 },
                    { q: "Főnevek között milyen WordNet-reláció a hipernima–hiponima?", a: ["Fölérendelt–alárendelt fogalom (állat → kutya)", "Rész–egész", "Ellentét", "Logikai következés"], correct: 0 },
                    { q: "Mi az ontológia a számítógépes nyelvészetben?", a: ["Fogalmak és relációik formális leírása (világismeret + nyelvi tudás)", "Egy szótár ábécé-rendben", "Egy automata", "Egy korpusz"], correct: 0 },
                    { q: "Igéknél milyen WordNet-reláció a troponima?", a: ["Egy ige speciális megvalósítása (megy → csoszog)", "Rész–egész", "Fölé-rendeltség", "Ellentét"], correct: 0 },
                    { q: "Mit biztosít az EuroWordNet nyelvei közti kapcsolatot?", a: ["Az Inter-Lingual Index (ILI)", "A Unicode", "A SUMO", "A Brown korpusz"], correct: 0 },
                    { q: "Melyik Fillmore-féle mélyeset a cselekvés elszenvedője?", a: ["Páciens", "Ágens", "Instrument", "Lokatívusz"], correct: 0 },
                    { q: "Melyik mélyeset az eszköz, amellyel a cselekvés történik?", a: ["Instrument", "Ágens", "Páciens", "Goal"], correct: 0 },
                    { q: "Mit jelent a szelekciós megszorítás?", a: ["Egy ige szemantikai feltételeket szab a vonzatainak (pl. ágens élő)", "A szó hosszát korlátozza", "A hangrendet", "A kódolást"], correct: 0 },
                    { q: "A WSD fő megközelítései közül melyik használ címkézett adatot?", a: ["Felügyelt (supervised) tanulás", "Szótár nélküli", "Csak szabály-alapú", "Véletlen"], correct: 0 },
                    { q: "A Lesk-algoritmus a WSD-ben mit használ?", a: ["A szótári definíciók (gloss) szóátfedését a kontextussal", "Neurális hálót", "Hangmintát", "Az ábécét"], correct: 0 },
                    { q: "A WordNet-ben a meronímia reláció mit fejez ki?", a: ["Rész–egész viszonyt (kerék → autó)", "Fölé-/alárendeltséget", "Ellentétet", "Szinonimitást"], correct: 0 },
                    { q: "A WordNet-ben az antonima reláció mit jelent?", a: ["Ellentétes jelentésű szavak kapcsolata", "Rész–egész", "Fölérendeltség", "Azonosság"], correct: 0 },
                    { q: "Mi a poliszémia?", a: ["Egy szó több, egymással rokon jelentése", "Két külön szó azonos alakja véletlenül", "Két szó azonos jelentése", "Egy szó egyetlen jelentése"], correct: 0 },
                    { q: "Mi a homonímia?", a: ["Azonos alakú, de eltérő (nem rokon) jelentésű szavak", "Egy szó több rokon jelentése", "Szinonimák", "Ellentétek"], correct: 0 },
                    { q: "Mit jelent az ontológiában a taxonómia?", a: ["Fogalmak hierarchikus (alá-/fölérendelt) osztályozása", "Véletlen lista", "Egy automata", "Egy korpusz"], correct: 0 },
                    { q: "A SUMO mi?", a: ["Egy felső szintű (top-level) ontológia", "Egy korpusz", "Egy karakterkódolás", "Egy elemző algoritmus"], correct: 0 },
                    { q: "A theta-szerepek (θ-roles) mit jelölnek?", a: ["Szemantikai szerepeket, amelyeket az ige a résztvevőknek oszt", "Esetragokat", "Hangokat", "Karakterkódokat"], correct: 0 },
                    { q: "A felszíni eset (pl. magyar -t tárgyrag) és a mélyeset viszonya:", a: ["Ugyanaz a mélyeset (pl. páciens) többféle felszíni esettel jelölhető", "Mindig egy-az-egyben megfelelnek", "Nincs köztük kapcsolat", "A mélyeset morfológiai"], correct: 0 },
                    { q: "A WordNet-ben az 'is-a' reláció megfelelője főneveknél:", a: ["A hipernima–hiponima reláció", "A meronímia", "Az antonima", "A szinonímia"], correct: 0 },
                    { q: "Mit jelent a szemantikai keret (frame, FrameNet)?", a: ["Egy esemény/szituáció típusos szereplőinek strukturált leírása", "Egy automataállapot", "Egy karakterkészlet", "Egy n-gram"], correct: 0 }
                ]
            },

            /* ---------- 6. Téma ---------- */
            {
                name: "6. Korpuszok, gépi tanulás, szóbeágyazás, gépi fordítás",
                questions: [
                    { q: "Mi a korpusz?", a: ["Elektronikus, géppel kereshető, reprezentatív szöveggyűjtemény", "Egy szótár", "Egy nyelvtani szabálykészlet", "Egy automata"], correct: 0 },
                    { q: "Mi a különbség a token és a type között?", a: ["A token az összes (whitespace-szel elhatárolt) előfordulás, a type a különböző szóalakok", "A token a betű, a type a szó", "Nincs különbség", "A type mindig kevesebb karakter"], correct: 0 },
                    { q: "Mi a korpuszvezérelt (corpus-driven) megközelítés?", a: ["Az adatok nézegetése közben fedezünk fel mintát, abból születik az elmélet", "Előzetes hipotézist igazolunk a korpuszon", "Csak nyers szöveget használunk", "Csak szótárat építünk"], correct: 0 },
                    { q: "Mi a párhuzamos korpusz?", a: ["Két (vagy több) nyelvű, egymásnak megfeleltetett szöveggyűjtemény", "Egynyelvű nagy szöveg", "Egy annotált fa", "Egy synset"], correct: 0 },
                    { q: "Mi a szövegszinkronizáció (alignment)?", a: ["Párhuzamos szövegek megfelelő egységeinek összekapcsolása (pl. mondatszinten)", "Szöveg tömörítése", "Helyesírás-javítás", "Hangfelismerés"], correct: 0 },
                    { q: "Miért nem megbízható a pont a mondatszegmentálásban?", a: ["Rövidítésekben, számokban is előfordul, nem csak mondatvégen", "Mert mindig mondatvégi", "Mert nem létezik pont", "Mert csak angolban van"], correct: 0 },
                    { q: "Melyik volt az első igazi (1 millió szavas) korpusz?", a: ["A Brown korpusz (1961)", "A Magyar Nemzeti Szövegtár", "A Penn Treebank", "A WordNet"], correct: 0 },
                    { q: "Mi a fordítómemória / párhuzamos korpusz egyik fő haszna?", a: ["SMT/NMT gépi fordító rendszerek tanítóadatának építése", "Hangszintézis", "Karakterkódolás", "Automata-minimalizálás"], correct: 0 },
                    { q: "Mit jelent az annotált korpusz?", a: ["Nyelvi címkékkel (pl. szófaj, elemzés) ellátott szöveggyűjtemény", "Csak nyers szöveg", "Egy szótár", "Egy hangfelvétel"], correct: 0 },
                    { q: "Mi a POS-tagging (szófajcímkézés)?", a: ["Minden szóhoz a megfelelő szófaji címke hozzárendelése", "Mondatok fordítása", "Szótárépítés", "Hangfelismerés"], correct: 0 },
                    { q: "Milyen modellt használnak gyakran POS-taggingre?", a: ["Rejtett Markov-modellt (HMM) vagy neurális hálót", "Veremautomatát", "Reguláris kifejezést csak", "Bináris keresőfát"], correct: 0 },
                    { q: "Mi a szóbeágyazás (word embedding) lényege?", a: ["Szavak sűrű vektorai, ahol a közelség szemantikai hasonlóságot jelez", "Szótári definíciók", "Karakterkódok", "Hangminták"], correct: 0 },
                    { q: "Melyik a klasszikus szóbeágyazó módszer?", a: ["Word2Vec", "PageRank", "Dijkstra", "CYK"], correct: 0 },
                    { q: "A szóbeágyazások elve (disztribúciós hipotézis):", a: ["Hasonló kontextusban előforduló szavak jelentése hasonló", "Minden szó egyedi", "A szó hossza számít", "A betűk döntenek"], correct: 0 },
                    { q: "Mi a felügyelt (supervised) gépi tanulás?", a: ["Címkézett (bemenet–kimenet) példákból tanul", "Címke nélküli adatból", "Csak szabályokból", "Véletlenszerűen"], correct: 0 },
                    { q: "Mi a felügyelet nélküli (unsupervised) tanulás?", a: ["Címke nélküli adatban keres mintázatot (pl. klaszterezés)", "Címkézett példákból", "Csak emberi szabályokból", "Mindig hiba"], correct: 0 },
                    { q: "Mi a tanító- és teszthalmaz szétválasztásának célja?", a: ["A modell általánosítóképességének (nem memórizálás) mérése", "Az adat tömörítése", "A szótár bővítése", "Nincs célja"], correct: 0 },
                    { q: "Mit mér a precision (pontosság)?", a: ["A találatok közül mennyi valóban helyes", "Mennyit talált meg az összes helyesből", "A sebességet", "A memóriahasználatot"], correct: 0 },
                    { q: "Mit mér a recall (fedés)?", a: ["Az összes helyes közül mennyit talált meg a rendszer", "A találatok pontosságát", "A sebességet", "A type/token arányt"], correct: 0 },
                    { q: "Mi az F-mérték (F1)?", a: ["A precision és recall harmonikus közepe", "A precision és recall összege", "A pontosság négyzete", "A token-szám"], correct: 0 },
                    { q: "Mi a szabályalapú (RBMT) gépi fordítás?", a: ["Nyelvészeti szabályok és szótárak alapján fordít", "Csak statisztikából", "Csak neurális hálóból", "Véletlenszerűen"], correct: 0 },
                    { q: "Mi a neurális gépi fordítás (NMT) alapja?", a: ["Végponttól-végpontig tanított neurális háló (pl. encoder–decoder, Transformer)", "Kézi szabályok", "Szótári keresés", "FST-k"], correct: 0 },
                    { q: "Mit mér a BLEU pontszám a gépi fordításban?", a: ["A gépi fordítás és referencia fordítás(ok) n-gram-átfedését", "A fordítás sebességét", "A korpusz méretét", "A karakterkódolást"], correct: 0 }
                ]
            },

            /* ---------- Különbségek téma ---------- */
            {
                name: "★ Különbségek és fogalmi elhatárolások",
                questions: [
                    { q: "Mi a különbség a betű és a karakter között?", a: ["A betű lingvisztikai egység (fonémát jelöl), a karakter informatikai egység (kódponthoz rendelt jel)", "Nincs különbség", "A karakter mindig betű", "A betű mindig számjegy"], correct: 0 },
                    { q: "Mi a különbség a fonéma és a graféma között?", a: ["A fonéma a hang elvont egysége, a graféma az írott jel elemi egysége", "Megegyeznek", "A graféma hang, a fonéma betű", "Mindkettő hangzó egység"], correct: 0 },
                    { q: "Mi a különbség a kódpont és a glif között?", a: ["A kódpont egy karakter absztrakt száma (pl. U+0041), a glif a konkrét vizuális megjelenése", "Megegyeznek", "A glif egy szám, a kódpont egy kép", "A kódpont egy bájt"], correct: 0 },
                    { q: "Mi a különbség az ASCII és a Unicode között?", a: ["Az ASCII 7 bites, csak ~128 jelet kódol; a Unicode minden nyelv karaktereit egységesíti", "A Unicode csak latin betűket kódol", "Megegyeznek", "Az ASCII több karaktert kódol"], correct: 0 },
                    { q: "Mi a különbség a token és a type között?", a: ["A token az összes előfordulás, a type a különböző szóalakok száma", "Megegyeznek", "A type mindig több", "A token a betű, a type a hang"], correct: 0 },
                    { q: "Mi a különbség a Zipf- és a Heaps-törvény között?", a: ["A Zipf a szógyakoriság rang szerinti eloszlását, a Heaps a szókészlet növekedését írja le", "Megegyeznek", "A Zipf a szókészlet méretéről szól", "A Heaps a betűgyakoriságról szól"], correct: 0 },
                    { q: "Mi a különbség a homonímia és a poliszémia között?", a: ["Homonímia: azonos alak, nem rokon jelentések; poliszémia: egy szó több rokon jelentése", "Megegyeznek", "A poliszémia nem rokon jelentések", "A homonímia szinonimákról szól"], correct: 0 },
                    { q: "Mi a különbség a homonímia és a szinonímia között?", a: ["Homonímia: azonos alak – más jelentés; szinonímia: más alak – azonos/hasonló jelentés", "Megegyeznek", "A szinonímia azonos alak", "A homonímia hasonló jelentés"], correct: 0 },
                    { q: "Mi a különbség a morféma és a morf (allomorf) között?", a: ["A morféma absztrakt legkisebb jelentéses egység; a morf annak konkrét hangalakú megvalósulása", "Megegyeznek", "A morf absztrakt, a morféma konkrét", "A morféma hangalak"], correct: 0 },
                    { q: "Mi a különbség a tő és a toldalék között?", a: ["A tő a szó jelentésmagja, a toldalék grammatikai/képzői információt ad hozzá", "Megegyeznek", "A toldalék a jelentésmag", "A tő mindig rag"], correct: 0 },
                    { q: "Mi a különbség a képzés (deriváció) és a ragozás (inflexió) között?", a: ["A képzés új szót/szófajt hoz létre; a ragozás ugyanazon szó nyelvtani alakjait adja", "Megegyeznek", "A ragozás új szót hoz létre", "A képzés csak a szótövet változtatja meg"], correct: 0 },
                    { q: "Mi a különbség a lemma (szótári tő) és a szóalak között?", a: ["A lemma a szótári alapalak; a szóalak a toldalékolt, szövegben megjelenő forma", "Megegyeznek", "A lemma a toldalékolt alak", "A szóalak mindig az alapalak"], correct: 0 },
                    { q: "Mi a különbség a morfológiai elemzés és generálás között?", a: ["Elemzés: szóalakból tő+jegyek; generálás: tő+jegyekből szóalak (egymás inverze)", "Megegyeznek", "Az elemzés állít elő szóalakot", "A generálás bontja szét a szót"], correct: 0 },
                    { q: "Mi a különbség az FSA és az FST között?", a: ["Az FSA felismer/elfogad; az FST transzducer, be- és kimenetet képez le (pl. szóalak↔tő)", "Megegyeznek", "Az FSA képez le párokat", "Az FST csak elfogad"], correct: 0 },
                    { q: "Mi a különbség a felszíni eset és a mélyeset között?", a: ["A felszíni eset morfológiailag jelenik meg; a mélyeset szemantikai szerep (a felszíni alaktól független)", "Megegyeznek", "A mélyeset morfológiai", "A felszíni eset szemantikai szerep"], correct: 0 },
                    { q: "Mi a különbség a dependencia- és az összetevős (konstituens) elemzés között?", a: ["A dependencia szavak közti relációkat ad, az összetevős frázisokba (csoportokba) szervez", "Megegyeznek", "Mindkettő csak frázisokkal dolgozik", "A dependencia reguláris"], correct: 0 },
                    { q: "Mi a különbség a szintaxis és a szemantika között?", a: ["A szintaxis a mondat szerkezetével, a szemantika a jelentésével foglalkozik", "Megegyeznek", "A szintaxis a jelentés", "A szemantika a szórend"], correct: 0 },
                    { q: "Mi a különbség a precision és a recall között?", a: ["Precision: a találatok közül mennyi helyes; recall: az összes helyesből mennyit talált meg", "Megegyeznek", "A recall a találatok pontossága", "A precision a fedés"], correct: 0 },
                    { q: "Mi a különbség a felügyelt és a felügyelet nélküli tanulás között?", a: ["A felügyelt címkézett (bemenet–kimenet) példákból tanul; a felügyelet nélküli címke nélküli adatban keres mintát", "Megegyeznek", "A felügyelt nem használ címkéket", "A felügyelet nélküli címkékkel dolgozik"], correct: 0 },
                    { q: "Mi a különbség a tanító- és a teszthalmaz között?", a: ["A tanítón tanul a modell, a teszten a (korábban nem látott) általánosítóképességét mérjük", "Megegyeznek", "A teszten tanul a modell", "A tanítón mérünk teljesítményt"], correct: 0 },
                    { q: "Mi a különbség a szabályalapú (RBMT) és a statisztikai (SMT) gépi fordítás között?", a: ["Az RBMT nyelvészeti szabályokra/szótárakra épül; az SMT párhuzamos korpusz statisztikájából tanul", "Megegyeznek", "Az SMT kézi szabályokat használ", "Az RBMT korpuszból tanul"], correct: 0 },
                    { q: "Mi a különbség az SMT és az NMT (neurális) gépi fordítás között?", a: ["Az SMT statisztikai részmodelleket kombinál; az NMT végponttól-végpontig egy neurális háló (pl. Transformer)", "Megegyeznek", "Az NMT kézi szabályokra épül", "Az SMT egyetlen neurális háló"], correct: 0 },
                    { q: "Mi a különbség a corpus-based és a corpus-driven megközelítés között?", a: ["A corpus-based előzetes hipotézist igazol a korpuszon; a corpus-driven az adatból bontakoztatja ki az elméletet", "Megegyeznek", "A corpus-driven hipotézist igazol", "A corpus-based nem használ korpuszt"], correct: 0 },
                    { q: "Mi a különbség az egynyelvű és a párhuzamos korpusz között?", a: ["Az egynyelvű egy nyelv szövegeit tartalmazza; a párhuzamos két+ nyelv egymásnak megfeleltetett szövegeit", "Megegyeznek", "A párhuzamos egynyelvű", "Az egynyelvű két nyelvet tartalmaz"], correct: 0 },
                    { q: "Mi a különbség a nyers és az annotált korpusz között?", a: ["A nyers csak szöveg; az annotált nyelvi címkékkel (pl. szófaj, elemzés) van ellátva", "Megegyeznek", "A nyers tartalmaz címkéket", "Az annotált címke nélküli"], correct: 0 }
                ]
            }
        ]
    }
};
