const paragraf = [
    'Di suatu pagi yang cerah, seorang pria berjalan santai di tepi danau yang tenang. Angin sepoi-sepoi membelai wajahnya, membawa aroma tanah basah setelah hujan semalam. Burung-burung berkicau riang di antara dahan pohon, seakan menyambut hari yang baru. Di kejauhan, seorang nelayan sedang menebarkan jala ke permukaan air, berharap mendapatkan tangkapan terbaiknya hari ini. Riak kecil muncul saat seekor ikan melompat ke udara, lalu kembali menyelam ke dalam kedalaman danau yang misterius.',
    'Kota kecil itu memiliki pesona tersendiri di malam hari. Lampu jalan berpendar lembut, menerangi trotoar yang masih basah akibat gerimis sore tadi. Aroma kopi dari kedai di sudut jalan menguar ke udara, menggoda setiap pejalan kaki yang melintas. Sepasang kekasih duduk di bangku taman, berbincang dengan suara lirih di bawah naungan pohon rindang. Sementara itu, seorang pengamen memetik gitarnya dengan lembut, menyanyikan lagu yang menggugah kenangan bagi siapa saja yang mendengarnya.',
    'Hujan deras mengguyur kota tanpa ampun, membasahi jalan-jalan yang sepi. Orang-orang berlindung di bawah payung mereka, bergegas mencari tempat berteduh di sepanjang trotoar. Genangan air mulai terbentuk di beberapa sudut, memantulkan cahaya lampu kendaraan yang melintas. Di dalam sebuah kedai kecil, seorang barista dengan cekatan menyeduh secangkir kopi hangat untuk pelanggan yang duduk termenung di dekat jendela. Uap dari minuman itu naik perlahan, seolah menari mengikuti irama hujan di luar sana.',
    'Sebuah kapal layar besar mengarungi samudra luas, membelah ombak dengan gagah berani. Angin bertiup kencang, mengisi layar putihnya yang berkibar dengan megah. Para awak kapal bekerja sama dengan sigap, menarik tali dan mengatur layar agar kapal tetap stabil di tengah lautan yang bergelombang. Di kejauhan, burung camar berputar-putar di langit, mengawasi pergerakan kapal yang melaju menuju cakrawala. Lautan biru membentang tanpa batas, menyatu dengan langit yang berwarna jingga saat matahari mulai tenggelam.',
    'Di dalam perpustakaan tua yang sunyi, seorang wanita muda duduk dengan tenang di antara deretan rak buku. Jemarinya dengan lembut membalik halaman demi halaman, menyerap setiap kata yang tertulis di dalamnya. Lampu temaram menerangi meja kayu tempatnya duduk, menciptakan bayangan samar di sekelilingnya. Aroma kertas lama bercampur dengan bau kopi yang tersisa di cangkir di sebelahnya. Di luar jendela, hujan turun perlahan, mengiringi keheningan yang hanya dipecahkan oleh suara lembut lembaran buku yang bergeser.',
    'Pagi itu, matahari bersinar dengan cerah di langit biru tanpa awan. Para petani mulai turun ke sawah mereka, membawa cangkul dan peralatan lainnya. Burung-burung beterbangan rendah di atas hamparan hijau yang luas, mencari serangga di antara batang padi yang mulai menguning. Di sudut desa, seorang kakek duduk di bawah pohon rindang, mengamati cucunya yang berlarian dengan riang di halaman rumah. Angin bertiup lembut, membawa aroma tanah yang baru saja dibajak, tanda bahwa musim panen semakin dekat.',
    'Di atas panggung yang megah, seorang pianis muda bersiap memainkan konser pertamanya. Jari-jarinya melayang di atas tuts piano, menunggu isyarat dari konduktor yang berdiri di hadapannya. Saat musik mulai mengalun, seluruh ruangan menjadi hening, seolah tersihir oleh melodi yang mengalir dari instrumen itu. Nada demi nada dimainkan dengan penuh emosi, menciptakan harmoni yang menggugah hati para penonton. Ketika nada terakhir bergema, tepuk tangan riuh memenuhi ruangan, memberikan penghargaan atas penampilan yang luar biasa.',
    'Di suatu desa terpencil, seorang bocah lelaki berlari di sepanjang jalan tanah yang berdebu. Tangannya menggenggam erat layang-layang warna-warni yang terbang tinggi di langit biru. Angin bertiup kencang, membuat layang-layang itu menari dengan lincah di antara awan-awan putih. Di kejauhan, suara tawa anak-anak lain menggema, ikut bermain dengan kegembiraan yang sama. Senja perlahan datang, mewarnai langit dengan gradasi jingga keemasan, menutup hari dengan keindahan yang sederhana.',
    'Sebuah lonceng gereja berdentang nyaring di tengah kota tua yang bersejarah. Jalanan berbatu yang berusia ratusan tahun masih kokoh menopang langkah para pejalan kaki. Di sepanjang trotoar, toko-toko kecil dengan jendela kaca besar menampilkan barang-barang antik yang menggoda mata. Seorang pelukis jalanan dengan cekatan menggoreskan kuasnya di atas kanvas, menciptakan potret bangunan klasik yang berdiri megah di depan matanya. Sinar matahari sore menyelinap di antara celah gedung-gedung tua, menambah pesona kota yang kaya akan cerita masa lalu.',
    'Malam telah larut, namun seorang penulis masih duduk di depan meja kayunya, ditemani secangkir teh hangat. Cahaya lampu kecil menerangi kertas-kertas berserakan yang dipenuhi coretan ide dan sketsa karakter. Jari-jarinya mengetik dengan cepat di atas keyboard, mengikuti alur cerita yang mengalir di dalam pikirannya. Di luar, bulan purnama bersinar terang, menyaksikan perjalanan seorang kreator yang sedang merangkai dunia baru dengan kata-kata. Detik demi detik berlalu, namun inspirasi seakan tidak mengenal waktu.'   
]

let charIndex = salah = 0

const textDisplay = document.querySelector('.text-display p')
const startParagraf = document.querySelector('.start-btn')
const resetParagraf = document.querySelector('.reset-btn')
const typingInput = document.querySelector('#typing-input')
const salahValue = document.querySelector('.salah-value')

const randomParagraf = () => {
    const randomIndex = Math.floor(Math.random() * paragraf.length)
    console.log(paragraf[randomIndex])

    paragraf[randomIndex].split("").forEach(huruf => {
        let spanText = `<span>${huruf}</span>`
        textDisplay.innerHTML += spanText
        // console.log(spanText)
        
        document.addEventListener('keydown', typingInput.focus())
        textDisplay.addEventListener('click', typingInput.focus())
    })
}

const typingInit = () => {
    const charSpan = textDisplay.querySelectorAll('span')
    // console.log(charSpan)
    let typedChar = typingInput.value.split('')[charIndex]
    console.log(typedChar)

    if(typedChar == null){
        charIndex--
        if(charSpan[charIndex].classList.contains('salah')){
            salah--;
        }
        charSpan[charIndex].classList.remove('benar', 'salah')
    } else {
        if(charSpan[charIndex].innerText === typedChar){
            console.log('Benar')
            charSpan[charIndex].classList.add('benar')
        } else {
            console.log('Salah')
            charSpan[charIndex].classList.add('salah')
            salah++
            console.log(salah)
        }
        charIndex++
    }

    charSpan.forEach(span => span.classList.remove('aktif'))
    charSpan[charIndex].classList.add('aktif')
    salahValue.innerText = salah
}

randomParagraf()
typingInput.addEventListener('input', typingInit)