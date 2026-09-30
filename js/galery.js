// ==========================================
// 1. KÉPLISTÁK ÉS FELIRATOK SZÉTVÁLASZTÁSA
// ==========================================

// --- UTCAFRONTI HÁZ ÉS KERT GALÉRIÁJA ---
const utcafrontiKepek = [
    "kert/muholdaskep.jpg", "nagyhaz/nhalarajzmeretnelkul.jpg", "nagyhaz/nhalarajzmeret.jpg", "kert/utcafrontj.jpg", "kert/utcafrontb.jpg", "kert/nhkiskapu.jpg", 
    "kert/fedettterasz.jpg", "kert/parkolo.jpg", "kert/kukatarolo.jpg", "kert/kukatarolokerttol.jpg", 
    "kert/kukataroloutcarol.jpg", "kert/elokertb.jpg", "kert/elokertb1.jpg", "kert/teraszhkiskerth.jpg", 
    "kert/teraszkiskerte.jpg",  "nagyhaz/nhaparkolof.jpg",  "nagyhaz/nheloszoba.jpg", "nagyhaz/nheloszobabejarat.jpg",      
	"nagyhaz/nhnappalib.jpg", "nagyhaz/nhnappalibejarat.jpg", "nagyhaz/nhnappalij.jpg", "nagyhaz/nhszobab.jpg", "nagyhaz/nhszobabo.jpg", "nagyhaz/nhszobaj.jpg", "nagyhaz/nhszobajo.jpg", "nagyhaz/nhszobasz.jpg", "nagyhaz/nhkisszoba.jpg", "nagyhaz/nhkisszobabejarat.jpg", "nagyhaz/nhfurdoszoba.jpg", "nagyhaz/nhnfurdoszobab.jpg", "nagyhaz/nhnfurdoszwc.jpg", "nagyhaz/nhnfurdozuhany.jpg", "nagyhaz/nhkonyha.jpg",
	"nagyhaz/nhkonyhabo.jpg", "nagyhaz/nhkonyhaj.jpg", "nagyhaz/nhkonyhajo.jpg", "nagyhaz/nhgepeszeti.jpg", "nagyhaz/nhkfurdo.jpg", "nagyhaz/nhkfurdojo.jpg", "nagyhaz/nhkisfurdobo.jpg", "nagyhaz/nhkisfurdoj.jpg", 
	"nagyhaz/nhkisterasz.jpg", "nagyhaz/nhkisteraszlepcsohf.jpg",
];

const utcafrontiFeliratok = [
    "Műholdas felvétel a telekről", "Ucafronti ház alaprajza méretek nélkül", "Ucafronti ház alaprajza méretekkel", "Utcafronti nézet jobb oldal", "Utcafronti nézet bal oldal", "Kiskapu", 
    "Fedett terasz részlet", "Kialakított parkoló", "Kukatároló", "Kukatároló a kert felől", "Kukatároló az utca felől", "Előkert bal oldali nézet",
    "Előkert bal oldali nézet részlet", "Terasz melletti kiskert hátulról", "Terasz melletti kiskert elölről", "Ucafronti ház autóparkoló felőli nézet",  "Ucafronti ház előszoba",
    "Ucafronti ház előszoba bejárat", "Ucafronti ház nappali", "Ucafronti ház nappali bejárat", "Ucafronti ház nappali jobb oldal", "Ucafronti ház hálószoba",
	"Ucafronti ház hálószoba baloldal","Ucafronti ház hálószoba jobboldal", "Ucafronti ház hálószoba jobboldal1", "Ucafronti ház hálószoba ablak", "Kisszoba gardrob szekrénye",
	"Kisszoba bejárat", "Nagy fürdőszoba", "Nagy fürdőszoba mosdó", "Nagy fürdőszoba WC", "Nagy fürdőszoba zuhanyzó", "Nagy ház konyha", "Nagy ház konyha baloldal", "Nagy ház konyha jobboldal", "Nagy ház konyha jobboldal1",
	"Nagy ház gépészeti helyiség", "Kisebbik fürdőszoba zuhanykabin",  "Kisebbik fürdőszoba mosdó", "Kisebbik fürdőszoba tisztítóanyag és eszköz tároló sarok",  "Kisebbik fürdőszoba WC sarok", "Nagy ház kis fedett terasz", 
	"Teraszlépcső kert felé", "Teraszlépcső utca felé",
];

// --- MÁSODIK (KIS) HÁZ GALÉRIÁJA ---
const masodikHazKepek = [
    "kishaz/khalaprajz.jpg", "kishaz/khfront.jpg", "kishaz/kheloszoba.jpg", "kishaz/kheloszobaj.jpg", "kishaz/khelszekr.jpg", 
    "kishaz/khelszekrb.jpg", "kishaz/khelszekrj.jpg", "kishaz/khkfurdo.jpg", "kishaz/khkfurdob.jpg", "kishaz/khkfurdoh.jpg",
    "kishaz/khnappalibejarat.jpg", "kishaz/khnappalikonyha.jpg", "kishaz/khnappalikonyhaablakf.jpg", "kishaz/khnappalikonyhab.jpg", "kishaz/khnappalikonyhab1.jpg", "kishaz/khnappalikonyhaj.jpg", "kishaz/khnfurdomosdo1.jpg", "kishaz/khnfurdob.jpg", "kishaz/khnfurdoj.jpg", 
	"kishaz/khszoba.jpg", "kishaz/khszobaabejarattol.jpg",  "kishaz/khszobabejarat.jpg",  "kishaz/khszobabo.jpg", 
	"kishaz/khszoba2b.jpg", "kishaz/khszoba2h.jpg", "kishaz/khszoba2szekreny.jpg", "kishaz/khszoba2szekrenyny.jpg",   
];


const masodikHazFeliratok = [
    "Kis ház alaprajz", "Kis ház front", "Kis ház előszoba", "Kis ház előszoba jobb oldal", "Kis ház előszoba szekrény", 
    "Kis ház előszoba szekrény baloldal", "Kis ház előszoba szekrény jobb oldala", "Kis ház kis fürdőszoba", "Kis ház kis fürdőszoba baloldal",     
    "Kis ház kis fürdőszoba hátolda", "Kis ház nappali bejárat", "Kis ház nappali konyha", "Kis ház nappali konyha ablak", "Kis ház nappali konyha baloldal",
	"Kis ház nappali konyha baloldal1", "Kis ház nappali konyha jobb oldala", "Kis ház nagy fürdőszoba",
	"Kis ház nagy fürdőszoba baloldal",  "Kis ház nagy fürdőszoba zuhanyzók", "Kis ház szoba", "Kis ház szoba baloldal", "Kis ház szoba bejárat", 
	"Kis ház hálószoba ablak felé", "Kis ház hálószoba1 baloldal", "Kis ház hálószoba1 hátoldal", "Kis ház hálószoba1 beépített szekrény",
	"Kis ház hálószoba1 beépített szekrény nyitott állapotban",
];

// Indexek nyomon követése külön a két galériához
let slideIndex1 = 1;
let slideIndex2 = 1;

// ==========================================
// 2. DINAMIKUS GENERÁLÁS INDÍTÁSA
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    // 1. galéria felépítése
    generalGaleria("utcafrontiContainer", utcafrontiKepek, utcafrontiFeliratok, "utcafronti-slide");
    showSlidesGeneric("utcafronti-slide", slideIndex1);

    // 2. galéria felépítése
    generalGaleria("masodikContainer", masodikHazKepek, masodikHazFeliratok, "masodik-slide");
    showSlidesGeneric("masodik-slide", slideIndex2);
});

// Segédfüggvény a HTML legenerálásához
function generalGaleria(containerId, kepek, feliratok, egyediOsztaly) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let htmlContent = "";
    kepek.forEach((image, index) => {
        let caption = feliratok[index] || "";
        htmlContent += `
            <div class="gallery-slides ${egyediOsztaly}">
                <img src="img/${image}" alt="${caption}" loading="lazy">
                <div class="caption-container">${caption}</div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

// ==========================================
// 3. FÜGGETLEN LAPOZÓ FUNKCIÓK
// ==========================================

function changeSlide1(n) {
    let slides = document.getElementsByClassName("utcafronti-slide");
    slideIndex1 += n;
    if (slideIndex1 > slides.length) { slideIndex1 = 1; }
    if (slideIndex1 < 1) { slideIndex1 = slides.length; }
    showSlidesGeneric("utcafronti-slide", slideIndex1);
}

function changeSlide2(n) {
    let slides = document.getElementsByClassName("masodik-slide");
    slideIndex2 += n;
    if (slideIndex2 > slides.length) { slideIndex2 = 1; }
    if (slideIndex2 < 1) { slideIndex2 = slides.length; }
    showSlidesGeneric("masodik-slide", slideIndex2);
}

function showSlidesGeneric(osztalyNev, aktualisIndex) {
    let slides = document.getElementsByClassName(osztalyNev);
    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[aktualisIndex - 1].style.display = "block";
}

