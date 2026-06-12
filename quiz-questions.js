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
                    { q: "Mi a különbség a P és az NP osztály között?", a: ["P: determinisztikus TG polinom időben eldönti; NP: nemdeterminisztikus TG polinom időben eldönti", "P: determinisztikus TG polinom időben eldönti; NP: determinisztikus TG exponenciális időben eldönti", "P ⊆ NP, és ez bizonyítottan egyenlőség (P = NP)", "P: véges automatával eldönthető; NP: veremautomatával eldönthető"], correct: 0 },
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
                name: "1. Karakterek és betűreprezentáció. Nyelvstatisztika. N-gramok.",
                questions: [
                    { q: "Mit jelent a fonéma a tételleírás szerint?", a: ["A hangok elvont egysége: különböző hangok, amelyek megkülönböztetik a szavak jelentését (pl. géz/kéz/méz/néz/réz)", "Egy konkrét, fizikailag mérhető hang", "Egy betű neve a fonetikus ábécében", "A magánhangzók összefoglaló neve"], correct: 0 },
                    { q: "Mi a különbség a betű és a karakter fogalma között?", a: ["A betű lingvisztikai egység (fonémát képvisel), a karakter informatikai egység (kódponthoz rendelt jel)", "Nincs különbség köztük", "A karakter mindig látható, a betű nem", "A betű kódszámmal rendelkezik, a karakter nem"], correct: 0 },
                    { q: "Mit jelent a karakterkód, és mi a különbség a karakterkészlet és a kódlap között?", a: ["A karakterkód egy karakter sorszáma; a karakterkészlet az összes kódolt jel halmaza; a kódlap a kódok és bitkombinációk konkrét megfeleltetése", "A karakterkód és a kódlap ugyanaz", "A kódlap csak a kis- és nagybetűket tartalmazza", "A karakterkészlet mindig pontosan 256 elemet tartalmaz"], correct: 0 },
                    { q: "Mi jellemzi az UTF-8 kódolást?", a: ["Változó hosszúságú (1–6 bájt / karakter), teljesen ASCII-kompatibilis, a legszélesebb körben használt Unicode-kódolás", "Mindig 2 bájtot használ karakterenként", "Csak az ASCII karakterkészletet kódolja", "Nem kompatibilis az ASCII-val"], correct: 0 },
                    { q: "Mit jelent az n-gram a tételleírásban?", a: ["N egymást követő (szöveg)egység – betű, szó vagy más token – sorozata", "N darab különböző szó egy dokumentumban", "N szóból álló mondat", "Egy szó N-edik előfordulása a szövegben"], correct: 0 },
                    { q: "Hogyan írható fel a Zipf-törvény matematikailag?", a: ["Az i-edik legelőfordulóbb szó relatív gyakorisága: F_i ≈ 1 / i^α (hatványfüggvény, α ≈ 1)", "A szókészlet mérete: V ≈ K · N^β (Heaps-törvény)", "A karakterek eloszlása: minden betű azonos valószínűséggel fordul elő", "A szavak hossza logaritmikusan nő a korpusz méretével"], correct: 0 },
                    { q: "Mit mond a Heaps-törvény a szókészlet növekedéséről, és miért nagyobb a β értéke a magyarban, mint az angolban?", a: ["V ≈ K · N^β (0 < β < 1, szublineáris növekedés); a magyarban β magasabb (~0,6–0,7), mert az agglutináló toldalékrendszer sok új szóalakot generál", "V ≈ K · N^β és a β értéke azonos minden nyelvben (~0,5)", "A szókészlet lineárisan nő a korpusz méretével (β = 1)", "A magyarban β kisebb, mert kevesebb szót használunk"], correct: 0 },
                    { q: "Mit mond Mandelbrot-törvény a szavak hosszáról és gyakoriságáról?", a: ["A rövidebb szavak általában gyakoribbak; a legelső szavak (a legősibbek) 2–3 fonémásak", "A hosszabb szavak a leggyakoribbak, mert több jelentést hordoznak", "A szavak hossza és gyakorisága közt nincs összefüggés", "A 4–5 szótagos szavak a leggyakoribbak"], correct: 0 },
                    { q: "Mi az n-gramok egyik fő alkalmazása a helyesírás-ellenőrzésen kívül?", a: ["Hibatűrő (fuzzy) keresés és a szöveg nyelvének automatikus azonosítása, mivel az n-gram profil nyelvfüggetlen", "Képek tömörítése", "Morse-kód generálása", "Mondathatárok meghatározása kizárólag szabályok alapján"], correct: 0 }
                ]
            },

            /* ---------- 2. Téma ---------- */
            {
                name: "2. Reguláris kifejezések, FSA, FST, RTN, ATN",
                questions: [
                    { q: "Hogyan definiálható formálisan a véges automata (FSA)?", a: ["Ötös: A = (S, Σ, s, F, T), ahol S = állapotok, Σ = bemeneti ábécé, s = kezdőállapot, F = elfogadó állapotok, T = átmeneti függvény", "Hatos: T = (S, Σ, Γ, s, F, δ), ahol Γ a kimeneti ábécé", "Négyes: (N, T, P, S) – nem-terminálisok, terminálisok, szabályok, mondat-szimbólum", "Kettes: (állapotok halmaza, ábécé)"], correct: 0 },
                    { q: "Mi az FSA kimenete felismeréskor?", a: ["Bináris: elfogadja vagy nem fogadja el a bemeneti sorozatot (igen/nem)", "A bemenet tükörképe", "Egy sring, amely a lexikális elemzés eredménye", "Az összes érintett állapot listája"], correct: 0 },
                    { q: "Milyen három alapműveletből épülnek fel a reguláris kifejezések?", a: ["Konkatenáció (egymás után írás), unió (|), iteráció (Kleene-csillag *)", "Szorzás, összeadás, hatványozás", "AND, OR, NOT", "Metszet, különbség, komplementer"], correct: 0 },
                    { q: "Miben tér el az FST (véges transzducer) az FSA-tól formálisan?", a: ["Az FST hatos: T = (S, Σ, Γ, s, F, δ) – van kimeneti ábécé Γ is; kimenetként stringet produkál, nem csak igent/nemet", "Az FST csak négy elemből áll, az FSA ötből", "Az FST nem véges, hanem végtelen számú állapotot tartalmaz", "Az FST-ben nincsenek elfogadó állapotok"], correct: 0 },
                    { q: "Mi az FST kimenete, és mi ennek a morfológiában a szerepe?", a: ["String: pl. a 'házban' felszíni alakból előállítja a 'ház+ban' lexikális elemzést (vagy fordítva, generál)", "Egy boolean érték, mint az FSA-nál", "Egy XML-fa", "Hangsúlyozási minta"], correct: 0 },
                    { q: "Mit nevez a tételleírás lexikális szintnek, és mit felszíni szintnek?", a: ["Lexikális szint: morfémák sorozata (pl. ház+ak); felszíni szint: a tényleges szóalak (pl. házak)", "Lexikális szint: a mondatban betöltött szintaktikai szerep; felszíni szint: a morfológia", "A két szint megegyezik, csak elnevezésben különböznek", "Lexikális szint: a szó hangtana; felszíni szint: a szó helyesírása"], correct: 0 },
                    { q: "Milyen műveletek végezhetők FST-ken, amelyekre az FSA nem képes?", a: ["Kompozíció (két FST láncba kötése) és metszet; ezek FSA-nál nem alkalmazhatók FST-ként", "Unió és konkatenáció – ezek csak FST-nél érhetők el", "Az FSA és FST ugyanazokat a műveleteket végzi", "Csak az iteráció érhető el FST-nél"], correct: 0 },
                    { q: "Mi volt Johnson 1972-es felismerése a fonológiai szabályokról?", a: ["A fonológiai szabályok reguláris relációkat valósítanak meg (soha nem alkalmazzák saját kimenetükre), ezért FST-vel implementálhatók", "A fonológiai szabályok környezetfüggők, ezért CF-grammatikával kell leírni őket", "A fonológiai szabályok véges számú kivétel nélkül leírhatók listák segítségével", "A fonológiai szabályok csak determinisztikus automatákkal írhatók le"], correct: 0 },
                    { q: "Mi az RTN (Recursive Transition Network), és milyen ereje van a Chomsky-hierarchiában?", a: ["Egymást kölcsönösen hívó FSA-k hálózata; veremmel rendelkezik → CF-erejű (2-es típusú)", "Egyetlen kiterjesztett FSA, amely reguláris (3-as típusú) erővel bír", "Olyan automata, amelynek nincsenek véges állapotai", "Teljesen általános (0-as típusú) számítási modell"], correct: 0 },
                    { q: "Mi az ATN (Augmented Transition Network), és mi teszi erősebbé az RTN-nél?", a: ["Regiszterekkel, tesztekkel és akciókkal bővített RTN → transzformációs-generatív (TG) erejű, azaz minden CF-nyelvet le tud írni és azon túl is terjed", "Az ATN kizárólag morfológiai elemzésre használható", "Az ATN azonos erejű az RTN-nel, csak más jelölésmódot használ", "Az ATN-nek nincsenek állapotai, csak szabályai"], correct: 0 },
                    { q: "Hogyan rendeződnek el a Chomsky-hierarchia típusai az automaták ereje szerint?", a: ["Reguláris (3.) ⊂ Környezetfüggetlen (2.) ⊂ Környezetfüggő (1.) ⊂ Rekurzívan felsorolható (0.); az erő fentről lefelé nő", "0 < 1 < 2 < 3 erősorrendben, ahol a 0-ás a legerősebb és a 3-as a leggyengébb", "Mind a négy típus azonos erejű, csak a szabályok alakjában térnek el", "A 2-es típus erősebb a 0-ásnál"], correct: 0 },
                    { q: "Melyik szintet nevezzük reguláris nyelvnek az FSA kontextusában?", a: ["Az FSA által elfogadott (felismert) nyelvek összessége – ezek pontosan a reguláris nyelvek", "Minden természetes nyelv reguláris, mert az emberek véges memóriával rendelkeznek", "Csak a mesterséges (programozási) nyelvek regulárisak", "A reguláris nyelvek azonosak a CF-nyelvekkel"], correct: 0 }
                ]
            },

            /* ---------- 3. Téma ---------- */
            {
                name: "3. Kétszintes és unifikációs morfológia. Alkalmazások.",
                questions: [
                    { q: "Mi a négy kétszintes szabályoperátor, és mit jelentenek?", a: ["⇒ (ha L szintű, akkor F szintű előfordulás kötelező), ⇐ (F szintű csak ebből lehet), ⇔ (mindkét irányban szükséges), ⇍ (a megfeleltetés tiltott ebben a környezetben)", "AND, OR, NOT, XOR logikai operátorok", "Unió, metszet, komplementer, differencia halmazoperátorok", "Bal-jobbra, jobb-balra, kétirányú és blokkoló megfeleltetés"], correct: 0 },
                    { q: "Mit jelöl a dzsókerszimbólum (@) a kétszintes morfológiában?", a: ["Bármely olyan szimbólum-pár, amelyet egyetlen más szabály sem érint (egyébként nem specifikált megfeleltetés)", "A szó határát jelöli", "A nullszimbólumot, azaz egy elhagyható elemet", "Egy opcionális toldalékot"], correct: 0 },
                    { q: "Mit jelöl a 0 (null/ε) szimbólum a kétszintes morfológiában?", a: ["Az egyik szinten megjelenő elemet, amelynek a másik szinten nincs megfelelője (törlés vagy beillesztés)", "A szó végét jelző határjelet", "A teljes szó elhagyását", "Egy kötelező magánhangzót"], correct: 0 },
                    { q: "Miért NEM morfológiai művelet az unifikáció a tételleírás szerint?", a: ["Mert az unifikáció DAG-okon (irányított körmentes gráfokon) értelmezett jegyszerkezeti művelet, nem morfémák összeillesztése", "Mert az unifikáció kizárólag szintaktikai szintű művelet", "Mert az unifikáció csak mondatokra alkalmazható", "Mert morfológiában nincs szükség unifikációra"], correct: 0 },
                    { q: "Mi a DAG (irányított körmentes gráf), és hogyan kapcsolódik a jegyszerkezetekhez?", a: ["DAG = Directed Acyclic Graph; a jegyszerkezetet DAG-ként ábrázoljuk: az élek jegyek (pl. SZÁM), a csúcsok értékek (pl. PL) vagy újabb jegyszerkezetek", "DAG = egy lineáris lista, amelybe a morfémákat soroljuk", "DAG = a mondatfa szinonimája", "DAG = egy véges automata speciális esete"], correct: 0 },
                    { q: "Mikor hiúsul meg az unifikáció két jegyszerkezet között?", a: ["Ha ugyanahhoz a jegynek eltérő atomi értéke van mindkét szerkezetben (pl. [SZÁM: SG] ∪ [SZÁM: PL] → fail)", "Ha az egyik jegyszerkezet üres", "Ha a két szerkezet azonos értékeket tartalmaz", "Ha a jegyszerkezet több mint 10 jegyet tartalmaz"], correct: 0 },
                    { q: "Mit jelent a HuMor, és mi az alapelve?", a: ["High-speed Unification Morphology – a tő és a toldalék jegyszerkezeteinek unifikálhatósága dönti el, hogy az összeillesztés grammatikus-e", "Hungarian Morphology Recognizer – szabályalapú morfológiai elemző", "Human Morpheme Organizer – kézi szótárszerkesztő eszköz", "Hybrid Unification Model – SMT és szabályalapú rendszer kombinációja"], correct: 0 },
                    { q: "Hogyan működik a HuMor bináris jegyrendszere? Adj konkrét példát!", a: ["Bináris (igen/nem) jegyekkel kódolja a tő és toldalék tulajdonságait (pl. [MÉLYHANGRENDŰ+/-], [AJAKEREKÍTÉSES+/-]); ház [MÉLYHANGRENDŰ+] + -ban [MÉLYHANGRENDŰ+] → ✓, főnök [MÉLYHANGRENDŰ−] + -ban [MÉLYHANGRENDŰ+] → fail", "Minden szóalakot 8 bites bináris számként tárol a szótárban", "Csak magánhangzók és mássalhangzók megkülönböztetésére használja a bináris jegyeket", "A bináris jegyrendszer azonos a Chomsky-jegyekkel"], correct: 0 },
                    { q: "Mit csinál a HuMor guesser modulja?", a: ["Ismeretlen (szótárban nem szereplő) szóalakoknál levonja a lehetséges toldalékokat, és a maradék tövet toldalékosztályok alapján becsüli", "Jósolja a következő szót a szövegben (következő-szó predikció)", "Automatikusan korrigálja a gépelési hibákat", "A mondatfa lehetséges elemzéseit sorolja fel"], correct: 0 },
                    { q: "Milyen alkalmazásokban hasznosítja az előadás a morfológiai elemzőket?", a: ["Helyesírás-ellenőrzés (HuMor → Microsoft Office magyarba kerülése), elválasztás, tezaurusz keresés", "Kizárólag gépi fordítás és beszédfelismerés", "Csak akadémiai kutatásban, ipari alkalmazása nincs", "Képfelismerés és OCR"], correct: 0 },
                    { q: "Mi a különbség a spell checker és a grammar checker között a tételleírás kontextusában?", a: ["A spell checker azt ellenőrzi, hogy egy szóalak létezhet-e (morfológiailag helyes-e); a grammar checker azt, hogy a szóalakok adott sorrendben alkotnak-e grammatikus mondatot", "A spell checker mondatokat, a grammar checker szavakat ellenőriz", "Mindkettő ugyanazt a feladatot látja el, csak a neve különböző", "A grammar checker csak a névelőket ellenőrzi"], correct: 0 },
                    { q: "Mi a Kaplan–Kay-féle soros kompozíció (cascade) célja a morfológiában?", a: ["Több kétszintes FST-t egymás után láncolva összetett morfológiai és fonológiai szabályrendszert valósít meg anélkül, hogy az egyes szabályok zavarják egymást", "Párhuzamosan hajtja végre az összes morfológiai szabályt", "Meghatározza a szó hangsúlyos szótagját", "Véletlenszerűen választ a lehetséges elemzések közül"], correct: 0 },
                    { q: "Melyik fogalompár írja le a morfológiai elemzés és generálás irányát az FST-nél?", a: ["Az elemzés a felszíni alakból állítja elő a lexikális sorozatot; a generálás a lexikális sorozatból állítja elő a felszíni alakot – az FST mindkét irányban futtatható", "Az elemzés top-down, a generálás bottom-up irányt jelent", "Az elemzés és a generálás kizárólag heurisztikus módszerrel valósítható meg", "A generálás csak véges állapotú automatával lehetséges, az elemzés nem"], correct: 0 }
                ]
            },

            /* ---------- 4. Téma ---------- */
            {
                name: "4. Mondatreprezentáció, jegyszerkezetek, elemzési módszerek",
                questions: [
                    { q: "Milyen két viszonyt kódol egyszerre a mondatszerkezet fája?", a: ["Dominancia (hierarchia: ki kinek van alárendelve) és előzés/sorrend (a testvércsomópontok lineáris elrendezése)", "Morfémák és toldalékok egymás utáni sorrendje", "A szavak szótagszáma és hangsúlyszerkezete", "A mondat szemantikai és pragmatikai szintje"], correct: 0 },
                    { q: "Mit jelent, hogy egy fa projektív?", a: ["Az élek nem keresztezik egymást: az összetevőcsoportok egymásba ágyazottak vagy diszjunktak, soha nem átfedők", "A fa gyökere mindig az ige", "A fa minden csomópontjának pontosan két gyermeke van (bináris fa)", "A fa levelei csak terminális szimbólumok lehetnek"], correct: 0 },
                    { q: "Mi a Chomsky-féle közvetlen összetevős elemzés alapelve (S → NP VP)?", a: ["A mondat (S) közvetlenül főnévi (NP) és igei (VP) csoportra bontható; a testvércsomópontok mellérendelten állnak egymás mellett a fában", "A mondat mindig az igéből indul ki, és minden más csomópont alá van rendelve", "A mondatot kizárólag morfémák sorozataként ábrázolja", "A mondat és a szó azonos szintű egységek a fában"], correct: 0 },
                    { q: "Mi az összetevős elemzés erőssége és gyengesége?", a: ["Erőssége: csoportoknak nevet ad (NP, VP, PP…), így a részfára hivatkozhatunk; gyengesége: a szintaktikai viszony neve (alany, tárgy) nem explicit – csak a fában elfoglalt hely hordozza", "Erőssége: explicit relációcímkék az éleken; gyengesége: nem nevez meg csoportokat", "Erőssége: morfológiailag gazdag nyelveken is projektív fa adódik; gyengesége: csak igéket ábrázol", "Nincs gyengesége, minden szintaktikai jelenséget le tud írni"], correct: 0 },
                    { q: "Miért problémás a közvetlen összetevős elemzés morfológiailag gazdag nyelvekre (pl. magyar)?", a: ["Mert a szabad szórend miatt az összetevőcsoportok szétesnek – a grammatikai viszonyt az esetrag hordozza (nem a pozíció), így az összetevős fa kevés információt hordoz", "Mert a magyar igéknek nincs vonzatkeretük", "Mert a magyar mondatok mindig SOV sorrendűek, ami megakadályozza a rekurzív elemzést", "Mert a magyar ábécéje nem latin betűs"], correct: 0 },
                    { q: "Mi a Tesnière-féle dependencia-elemzés alapelve?", a: ["Az ige a mondat centruma; minden más elem közvetlenül rajta vagy egymáson lóg; az éleken megjelenik a szintaktikai viszony neve (subject, object, adjunct…)", "A mondat főnévi csoportokból és igei csoportokból épül fel rekurzívan", "A dependencia-elemzés azonos a közvetlen összetevős elemzéssel", "Az elemek nem kapcsolódnak egymáshoz élekkel, csak helyzetük fejezi ki a viszonyt"], correct: 0 },
                    { q: "Mi az X-vonás elmélet három szintje (X, X′, XP), és mi az adjunkt szerepe?", a: ["X = lexikai fej; X′ = fej + komplement (pl. tárgy, kötelező bővítmény); XP = X′ + specifikátor (pl. alany); az adjunkt (opcionális kiegészítő) NEM emeli a vonásszámot", "X = NP, X′ = VP, XP = mondat (S)", "X = morféma, X′ = szó, XP = szószerkezet", "Az adjunkt mindig egy vonásszinttel emeli a fejét"], correct: 0 },
                    { q: "Mi a különbség az endocentrikus és az egzocentrikus szerkezet között? Adj példát!", a: ["Endocentrikus: van egyértelmű fej, amely átviszi a kategóriát (pl. VP fejének az ige számít); egzocentrikus: nincs igazi fej – koordináció (pl. Jancsi és Juliska: sem Jancsi, sem Juliska, sem 'és' nem hozza önmagában a főnéviséget)", "Endocentrikus = összetevős, egzocentrikus = dependencia", "Endocentrikus = projektivitást megőrző, egzocentrikus = nem projektív fa", "Az endocentrikus csak igékre, az egzocentrikus csak főnevekre vonatkozik"], correct: 0 },
                    { q: "Miért a környezetfüggetlen (CF) szint terjedt el a mondatszintaxisban a reguláris és környezetfüggő helyett?", a: ["A reguláris túl gyenge (nem tud beágyazást kezelni), a CF O(n³) komplexitással leírja a legtöbb jelenséget; a környezetfüggő feleslegesen drága", "Mert a CF-szabályok olvashatóbbak, mint a reguláris kifejezések", "Mert a CF-grammatika automatikusan megoldja a szójelentés-egyértelműsítést", "Mert a CF szint csak természetes nyelvekre alkalmazható, mesterségesekre nem"], correct: 0 },
                    { q: "Mi a PCFG (valószínűségi CF-grammatika) alapötlete?", a: ["A CF-szabályokhoz tanítókorpuszból (pl. Penn Treebank) mért valószínűségeket rendelünk; az elemző a leggyakoribb (legnagyobb valószínűségű) szabályt veszi elő először, csökkentve a visszalépések számát", "Minden szabályhoz véletlenszerű valószínűséget rendel", "A PCFG mondatonként újratanulja a valószínűségeket", "A PCFG kizárólag statisztikai adatokra épül, szótár nélkül"], correct: 0 },
                    { q: "Mi a balsarok-elemzés (left-corner parsing) ötlete?", a: ["A grammatikából előre kiszámítjuk, hogy melyik szimbólum lehet egy adott kategória balsarka (bal széle); elemzéskor rögtön tudható, melyik szabályba illeszthető az aktuális szó", "Az elemzés mindig a mondat bal sarkától a jobb sarokig halad balról jobbra, szabályos sorrendben", "A balsarok-elemzés csak reguláris grammatikákra alkalmazható", "A mondatot mindig jobbról balra elemzi"], correct: 0 },
                    { q: "Mi az Earley / chart elemzés alapelve, és miért hatékony?", a: ["Dinamikus programozás: az egyszer megtalált részszerkezeteket táblázatban (chart) tárolja; visszalépskor nem elemzi újra – az exponenciális kombinatorika polinomiálissá redukálódik", "Alulról felfelé elemez, és minden lehetséges fát legenerálja egyszerre", "A chart elemző véletlenszerűen választ az elemzési lehetőségek közül", "Csak véges és kis mondatokra alkalmazható, hosszabb mondatoknál megakad"], correct: 0 },
                    { q: "Hogyan használják a jegyszerkezeteket az alany–állítmány egyeztetés ellenőrzésére?", a: ["Az alanyhoz és az igéhez is jegyszerkezetet rendelünk; unifikáláskor a SZÁM és SZEMÉLY jegynek egyeznie kell – ha eltér (pl. fiú [SG] + futnak [PL]), az unifikáció meghiúsul, az elemzés elvetve", "Az egyeztetést csak szabályok rögzítik, unifikáció nem szükséges", "A jegyszerkezetek csak morfológiában, szintaxisban nem alkalmazhatók", "Az alany jegyei sosem unifikálhatók az ige jegyeivel"], correct: 0 }
                ]
            },

            /* ---------- 5. Téma ---------- */
            {
                name: "5. Szintaktikai szerepek, esetek, WSD, WordNet, Ontológiák",
                questions: [
                    { q: "Mi a különbség a felszíni eset és a mélyeset (tematikus szerep) között?", a: ["A felszíni eset morfológiailag jelenik meg (alany, tárgy stb.); a mélyeset szemantikai szerep (ágens, páciens, instrument), amely független a felszíni alaktól", "A felszíni eset és a mélyeset mindig megegyezik", "A mélyeset csak morfológiailag gazdag nyelvekben létezik", "A felszíni eset a szó hangtani tulajdonságát írja le"], correct: 0 },
                    { q: "A Pistike–labda–ablak példa alapján: miért nem ágens a labda, még ha alanyként is áll?", a: ["Mert az ágens szándékos cselekvő; a labdának nincs szándéka – mélyesetben instrument (eszköz) marad, még ha szintaktikailag alanyként is jelenik meg", "Mert a labda főnév, az ágens pedig csak személyes névmás lehet", "Mert a labda accusativusban áll a mondatban", "Mert az alany mindig páciens, ha nem személy"], correct: 0 },
                    { q: "Az experiencer tematikus szerep miért eltérő szintaktikai pozícióban jelenik meg az angolban és a magyarban?", a: ["Angolban alany (Jones likes the film), magyarban és németben részeshatározó (Jonesnak tetszik / Jones gefällt) – ugyanaz a mélyeset, más felszíni eset", "Az experiencer mindkét nyelvben azonos alany-pozícióban áll", "Az experiencer kizárólag szenvedő szerkezetekben fordul elő", "Az experiencer az angolban tárgyként, a magyarban alanyként jelenik meg"], correct: 0 },
                    { q: "Mi a WSD (Word Sense Disambiguation) feladata?", a: ["Kontextus alapján kiválasztani a helyes jelentést (sense-t) egy olyan szó esetén, amelynek több különböző értelmezése lehet (pl. bank: pénzintézet vagy partszakasz)", "Meghatározni, hogy egy szó igei vagy főnévi funkciót tölt be", "Azonosítani a szó kiejtési variánsait", "Megállapítani egy szó morphológiai tövét"], correct: 0 },
                    { q: "Hogyan működik a Lesk-algoritmus a WSD-ben?", a: ["A célszó szótári definíciójának és a környező szavak definíciójának átfedését méri; amelyik sense-hez a legtöbb átfedés van, azt választja", "A célszó legtöbbször előforduló jelentését választja a tanítókorpuszból", "Kizárólag szintaktikai elemzésre támaszkodik, szótár nélkül", "Statisztikai gépi tanuláson alapul, nem használ szótárt"], correct: 0 },
                    { q: "Hogyan oldja meg a BERT a WSD-t külön WSD-lépés nélkül?", a: ["Mert a BERT kontextuális szóvektort állít elő: ugyanaz a szó más mondatban más vektort kap, így a 'bank' pénzintézet-értelmű és partszakasz-értelmű előfordulásainak vektorai automatikusan eltávolodnak egymástól", "A BERT minden egyes szónak egy rögzített, egységes vektort rendel", "A BERT csak mondathatár-detektálásra képes, WSD-re nem", "A BERT az összes lehetséges sense vektorát összátlagolja"], correct: 0 },
                    { q: "Ki hozta létre a WordNetet, és mi volt az alapelve?", a: ["George A. Miller csapata a Princeton Egyetemen; a szavakat nem ábécérendben, hanem jelentés szerinti hálózatba szervezi", "Mikolov Tamás; a szavakat vektortérbe helyezi el koszinusz-hasonlóság alapján", "Fillmore; az igék tematikus szerepeit írja le keretelmélettel", "Lesk; a szótári definíciók átfedésén alapuló WSD-rendszer"], correct: 0 },
                    { q: "Mi a WordNet alapegysége, a synset?", a: ["Azonos értelmű (szinonim) szavak halmaza, amely egyetlen fogalmat reprezentál; egy szó több synsetbe is tartozhat (poliszémia)", "Egy szó összes lehetséges kiejtési változatának gyűjteménye", "Egy szópár és köztük lévő szemantikus reláció", "A szó morfológiai paradigmájának táblázata"], correct: 0 },
                    { q: "Mi a hipernima–hiponima és a holonima–meronima reláció a WordNetben?", a: ["Hipernima ↔ hiponima: fajta-fogalom reláció (állat → kutya → szuka); holonima ↔ meronima: rész-egész reláció (épület ↔ ablak)", "Hipernima = antonima; meronima = troponima", "Mindkét reláció csak igéknél fordul elő a WordNetben", "A holonima ↔ meronima a szavak hangalakjának viszonyát írja le"], correct: 0 },
                    { q: "Mit jelent az igei troponima reláció a WordNetben?", a: ["Egy ige speciális megvalósítása: pl. 'megy → őgyeleg, andalog, csoszog' – mindhárom a menés egy sajátos módja", "Az ige tagadása: futni ↔ nem futni", "Az ige tárgyának típusa: villával eszik → 'eszik' troponimája a 'villával' eszközhatározó", "Két ige oksági viszonyát írja le: leütni → esni"], correct: 0 },
                    { q: "Mit jelent az entailment (rákövetkezési) reláció igéknél a WordNetben?", a: ["Logikai következés: ha az X ige igaz, akkor Y ige is igaz (pl. horkol → alszik, de alszik ↛ horkol)", "Két ige azonos jelentésű: alvás = szundikálás", "Kauzális reláció: a horkolás okozza az alvást", "Ige és főnév közötti vonzatviszonyt ír le"], correct: 0 },
                    { q: "Mi az ontológia a számítógépes nyelvészetben?", a: ["Fogalmak és köztük lévő relációk formális leírása, amely mind világismereti, mind nyelvészeti tudást rögzít", "Kizárólag a biológiai taxonómiák számítógépes változata", "Egy programozási keretrendszer természetes nyelvi adatok feldolgozásához", "A szótár betűrendes szavainak és definícióinak adatbázisa"], correct: 0 },
                    { q: "Mi az SUMO, és mi a felső ontológia célja?", a: ["SUMO = Suggested Upper Merged Ontology; a felső ontológia felülről lefelé épített hierarchia a legabsztraktabb kategóriáktól (actuality, szerep, ágens) a mindennapi fogalmakig – a tartományi ontológiák erre illeszkednek és öröklik tulajdonságait", "SUMO = Statistical Unified Morpheme Ontology; morfémák osztályozása", "A felső ontológia csak az orvosi szakterület fogalmait tartalmazza", "A SUMO egy kézi szótárszerkesztő program a WordNet bővítéséhez"], correct: 0 },
                    { q: "Miért mosódik össze a nyelvi jelentés és az enciklopédikus tudás a számítógépes nyelvészetben?", a: ["Mert pl. a 'Péter megvette az Ember tragédiáját' mondat értelmezéséhez tudni kell, hogy nem a művet, hanem egy példányát vette meg – a szó szerinti szemantika és a világismeret nem választható szét", "Mert a számítógépes rendszerek nem képesek a kettőt elkülöníteni elvből", "Mert a természetes nyelv kizárólag enciklopédikus tudást fejez ki, nem szeman tikát", "Mert a WordNet és az ontológiák mindig ugyanazt a tudást tartalmazzák"], correct: 0 }
                ]
            },

            /* ---------- 6. Téma ---------- */
            {
                name: "6. Korpuszok, szóbeágyazás, fordítómemóriák, gépi fordítás",
                questions: [
                    { q: "Hogyan definiálja a tételleírás a korpuszt?", a: ["Elektronikus, géppel kereshető, reprezentatív szöveggyűjtemény – a reprezentativitás különböző műfajok, regiszterek és időszakok arányos jelenlétét jelenti", "Minden digitálisan tárolt szöveg, amelyet egy kutatóintézet gyűjtött össze", "Kizárólag az irodalmi szövegekből álló adatbázis", "Egy egy-egy szóból álló lista és azok előfordulási számai"], correct: 0 },
                    { q: "Mi a különbség a corpus-based és a corpus-driven megközelítés között?", a: ["Corpus-based: előzetes hipotézist tesztel a korpuszon; corpus-driven: az adatból bontakozik ki az elmélet (serendipity principle – véletlenszerű felfedezés)", "Corpus-based automatikusan annot ál; corpus-driven kézi annotálást igényel", "A corpus-based nem használ statisztikát, a corpus-driven igen", "Mindkettő azonos – csak eltérő elnevezések ugyanarra a módszerre"], correct: 0 },
                    { q: "Miért tokenben és nem type-ban adják meg a korpusz méretét?", a: ["Mert a tokenek (whitespace-elhatárolt előfordulások) megszámlálása azonnal elvégezhető; a type-ok (különböző szóalakok) számlálásához morfológiai elemzés kellene", "Mert a type-szám mindig nagyobb, ezért pontosabb", "Mert a tokenszám és a type-szám mindig azonos nagy korpuszban", "Mert a tokenek tartalmazzák az írásjeleket, a type-ok nem"], correct: 0 },
                    { q: "Miért a mondatszint a szövegszinkronizáció optimális szintje, és mi nehezíti?", a: ["A mondatszint elég finom a fordítástudományi elemzéshez; de az arány nem mindig 1:1 – lehetséges 1:2, 2:1, sőt 1:0 (kihagyás/betoldás) is", "A mondatszint a legegyszerűbb szint, mert minden mondatnak pontosan egy fordítása van", "A mondatszint sosem megfelelő – csak szószintű szinkronizáció pontos", "A szinkronizáció könnyű: minden mondat azonos hosszúságú a fordításban"], correct: 0 },
                    { q: "Miért nem megbízható önmagában a pont a mondatszegmentálásban?", a: ["Rövidítések (U.S., Smith Corp.), e-mail-cím/URL belső pontjai, tizedes pont (3.14) és idézőjeles közbevetés is tartalmaznak pontot – ezek nem mondathatárok", "Mert a pont csak a felkiáltó és kérdő mondatokat zárja le", "Mert a digitaliz ált szövegekben a pont mindig hiányzik", "Mert a pont kizárólag mondatvégét jelöli, ezért más esetekben sosem szerepel"], correct: 0 },
                    { q: "Mi a Gale–Church-féle hosszalapú szövegszinkronizáció alapelve?", a: ["A fordítás mondatainak hossza erősen korrelál az eredeti hosszával; dinamikus programozással globálisan optimális párba állítást keres az egész szövegre", "Kétnyelvű szótárból keresi az egymással megfelelő szavakat, majd azok alapján alkotja meg a mondatpárokat", "Csak az 1:1 arányú mondatpárokat veszi fel", "Horgonypontokat (URL, szám) használ rögzítési pontként"], correct: 0 },
                    { q: "Mi az előnye a horgony (anchor) alapú szinkronizációnak, és mi a hátránya?", a: ["Előny: közel 100%-os pontosság (URL, szám, tulajdonnév szinte mindig egyezik); hátrány: csak részleges szinkronizáció – kevés horgony van egy szövegben", "Előny: teljes szinkronizációt ad; hátrány: külső szótárt igényel", "Előny: szótár nélkül is működik; hátrány: csak 1:1 arányú párokat talál meg", "Előny: gyors; hátrány: csak mondatszintű, szószintre nem alkalmazható"], correct: 0 },
                    { q: "Mi a fordítómemória (TM), és miben különbözik a gépi fordítástól?", a: ["A TM korábbi emberi fordítások forrás–cél szegmenspárjait tárolja és ajánlja fel hasonló új mondatoknál; NEM fordít, csak egyező/hasonló korábbi fordítást keres elő", "A TM és a gépi fordítás azonos: mindkettő automatikusan fordít", "A TM kizárólag szótárakat tartalmaz, nem teljes mondatokat", "A TM gépi fordítást végez, de csak rövid (max. 5 szavas) mondatokon"], correct: 0 },
                    { q: "Mi a Vauquois-háromszög, és melyek az alapstratégiái?", a: ["A szabályalapú MT három szintje alulról felfele: Direct (szó-szó, minimális átrendezés) → Transfer (forrásnyelvről reprezentációra, majd célnyelvre) → Interlingua (nyelvfüggetlen közvetítő repr.; az Esperanto-kísérlet kudarcot vallott)", "A három statisztikai fordítási modell: szóalapú, frázisalapú és mondatalapú SMT", "A neurális fordítás három rétege: bemenet, rejtett réteg, kimenet", "Három értékelési módszer: BLEU, METEOR, TER"], correct: 0 },
                    { q: "Mi az SMT (statisztikai gépi fordítás) Bayes-képlete, és mit jelent a fordítási modell vs. a nyelvi modell?", a: ["argmax_e P(e|f) ∝ P(f|e)·P(e); fordítási modell P(f|e): párhuzamos korpuszból tanult szó- és frázispárok valószínűsége; nyelvi modell P(e): a célnyelv n-gram valószínűségei (természetes célnyelvi szöveg biztosítása)", "P(e|f) = P(e)/P(f); nincsenek részmodellek", "A fordítási modell az EM-algoritmussal tanul a célnyelvi korpuszból; a nyelvi modell a forrásnyelv szabályait kódolja", "Az SMT csak szóalapú, frázisok és n-gramok nem szerepelnek a modellben"], correct: 0 },
                    { q: "Mi a sparse data problem az SMT-ben, és hogyan kezelik?", a: ["A tanítókorpuszban nem látott n-gramok valószínűsége 0 lenne; simítással (Laplace, Good-Turing, Kneser–Ney) adnak kis valószínűséget a nem látott eseményeknek", "A tanítókorpusz túl nagy, és nem fér el a memóriában", "Az SMT nem tud kezelni ritka szavakat, ezért azokat törlik a szótárból", "A sparse data problem az NMT-nél lép fel, az SMT-nél nem"], correct: 0 },
                    { q: "Mi a szóbeágyazás (word embedding) alapelve, és ki fejlesztette a word2vec-et?", a: ["A hasonló kontextusban előforduló szavak közel kerülnek egymáshoz egy sűrű vektortérben (Firth-elv számszerűsítve); a word2vec-et Mikolov Tamás fejlesztette 2013-ban", "A szóbeágyazás szótári definíciókat kódol bináris vektorokba", "A word2vec-et Frederick Jelinek fejlesztette az IBM-nél a 90-es években", "A szóbeágyazás véletlenszerű vektorokat rendel minden szóhoz"], correct: 0 },
                    { q: "Mi a különbség a CBOW és a Skip-gram tanítási módszer között a word2vec-ben?", a: ["CBOW: a környezetből találjuk ki az eldugott célszót; Skip-gram: a célszóból találjuk ki a kontextus szavait", "CBOW balról jobbra haladva jósolja a következő szót; Skip-gram jobbról balra", "A CBOW csak morfológiai egyezéseket tanul; a Skip-gram szintaktikait", "Mindkettő azonos: a szó és kontextusának koszinusz-hasonlóságát maximalizálja"], correct: 0 },
                    { q: "Hogyan demonstrálja a vektoranalógia a szóbeágyazás 'varázserejét'?", a: ["Moszkva − Oroszország + Kína ≈ Peking; király − férfi + nő ≈ királynő – vektoros összeadás és kivonás analógia-relációkat ad vissza", "A szóvektorok összege mindig az összes szó átlagos jelentését adja", "A szóvektorok közötti szög mindig 0°, ha két szó szinonimája egymásnak", "A vektoranalógia csak angol–kínai szópárokra működik"], correct: 0 },
                    { q: "Mi az NMT (neurális gépi fordítás) alapja a tételleírás szerint?", a: ["Encoder-decoder architektúra (eleinte LSTM, ma Transformer), amely végponttól-végpontig tanul párhuzamos korpuszból; az attention mechanizmus tette lehetővé a hosszabb kontextus kezelését", "Kézzel megírt lexikai transzferszabályok neurális hálóval kombinálva", "Kizárólag statisztikai n-gram modellek mély hálóba szervezve", "Az NMT azonos az SMT-vel, csak a neve változott 2014 után"], correct: 0 }
                ]
            },

            /* ---------- 7. Különbségek ---------- */
            {
                name: "★ Különbségek és fogalmi elhatárolások",
                questions: [
                    { q: "Mi a különbség a Zipf-törvény és a Heaps-törvény között?", a: ["Zipf a szógyakoriság rang szerinti eloszlásáról szól (F_i ≈ 1/i^α); Heaps a szókészlet korpuszmérettel való szublineáris növekedéséről (V ≈ K·N^β)", "Zipf a szókészlet méretét, Heaps a betűgyakoriságot írja le", "Mindkettő azonos jelenséget ír le más matematikai formával", "A Heaps-törvény az n-gramokra vonatkozik, a Zipf a mondatokra"], correct: 0 },
                    { q: "Mi a különbség az FSA és az FST között?", a: ["Az FSA bináris kimenetet ad (elfogad/nem); az FST stringet produkál, mert kimeneti ábécével is rendelkezik", "Az FSA hat komponensből, az FST ötből áll", "Az FST reguláris, az FSA CF-erejű", "Csak névbeli különbség van köztük"], correct: 0 },
                    { q: "Mi a különbség az RTN és az ATN között?", a: ["Az RTN egymást hívó FSA-k veremkezelő hálózata (CF-erejű); az ATN regiszterekkel, tesztekkel és akciókkal bővíti az RTN-t (TG-erejű)", "Az RTN erősebb az ATN-nél", "Az ATN és az RTN egyaránt csak reguláris nyelveket ismernek fel", "Az ATN kizárólag morfológiai, az RTN szintaktikai elemzésre való"], correct: 0 },
                    { q: "Mi a különbség a kétszintes morfológia és az unifikációs morfológia (HuMor) között?", a: ["A kétszintes modell FST-párokat és kétszintes szabályokat (⇒⇐⇔⇍) alkalmaz; a HuMor DAG-alapú jegyszerkezetek unifikálhatóságán dönti el az összeillesztést", "Mindkettő azonos: mindkettő bináris jegyrendszert és DAG-ot használ", "A HuMor FSA-kat, a kétszintes modell neurális hálókat alkalmaz", "A kétszintes modell a szótőre, a HuMor a toldalékra összpontosít"], correct: 0 },
                    { q: "Mi a különbség a közvetlen összetevős (Chomsky) és a dependencia (Tesnière) elemzés között?", a: ["Az összetevős frázisokba szervez (csoportoknak nevet ad, relációk implicit); a dependencia az ige köré szervez, az éleken explicit relációcímkékkel, de nincs csoportnév", "Mindkettő azonos: csoportokat hoz létre explicit relációnevekkel", "Az összetevős az igét, a dependencia a főnevet tekinti centrumnak", "A dependencia csak morfológiailag szegény, az összetevős csak gazdag nyelvekre alkalmazható"], correct: 0 },
                    { q: "Mi a különbség a felszíni eset és a mélyeset (tematikus szerep) között?", a: ["A felszíni eset morfológiailag jelenik meg (alany, tárgy); a mélyeset szemantikai szerep (ágens, páciens, instrument), amely független a felszíni alaktól", "Mindkettő morfológiailag kódolt", "A mélyeset mindig egybeesik a felszíni esettel", "A felszíni eset csak a magyarban létezik"], correct: 0 },
                    { q: "Mi a különbség a hipernima–hiponima és a holonima–meronima reláció között?", a: ["Hipernima–hiponima: fajta-fogalom (állat → kutya); holonima–meronima: rész-egész (épület ↔ ablak)", "Mindkettő fajta-fogalom relációt jelöl", "Holonima–meronima csak igéknél, hipernima–hiponima csak főneveknél fordul elő a WordNetben", "A két reláció azonos, csak a névben különböznek"], correct: 0 },
                    { q: "Mi a különbség a troponima és az entailment reláció között a WordNetben?", a: ["A troponima egy ige speciális megvalósítása (megy → andalog); az entailment logikai következés (horkol → alszik)", "A troponima logikai következés, az entailment speciális megvalósítás", "Mindkettő kizárólag főneveknél fordul elő", "A troponima antonima, az entailment szinonima"], correct: 0 },
                    { q: "Mi a különbség a fordítómemória (TM) és a gépi fordítás (MT) között?", a: ["A TM korábbi emberi fordításokat tárol és ajánl fel; NEM fordít. Az MT automatikusan állít elő fordítást (szabályalapú, statisztikai vagy neurális úton)", "Mindkettő automatikusan fordít, csak az algoritmus különbözik", "A TM gépi fordítást végez, de csak rövid mondatokon", "A TM és az MT szinonimák a fordítástámogató iparban"], correct: 0 },
                    { q: "Mi a különbség az SMT és az NMT között?", a: ["Az SMT statisztikai részmodelleket kombinál (fordítási + nyelvi modell, Bayes-formula); az NMT végponttól végpontig egy neurális háló (Transformer, encoder-decoder)", "Az SMT neurális, az NMT statisztikai", "Mindkettő azonos architektúrán alapul, csak az adatok különböznek", "Az NMT kézi szabályokat is alkalmaz, az SMT nem"], correct: 0 },
                    { q: "Mi a különbség a szóbeágyazás és a WordNet között mint szemantikai erőforrás?", a: ["A WordNet emberek által felépített, explicit relációkat (hipernima, meronima, troponima stb.) definiál; a szóbeágyazás a gép által tanult sűrű vektoros reprezentáció, amelynek szemantikai tartalma az ember által 'belemagyarázott'", "A WordNet vektorokat, a szóbeágyazás gráfokat használ", "Mindkettő teljesen automatikusan épül fel emberi beavatkozás nélkül", "A WordNet statisztikai, a szóbeágyazás szabályalapú"], correct: 0 },
                ]
            }
        ]
    }
};
