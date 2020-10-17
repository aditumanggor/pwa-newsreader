if("serviceWorker" in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then(() => {
                console.log("pendaftaran serviceWorker berhasil");
            })
            .catch(() => {
                console.log("pendaftaran serviceWorker gagal");;
            })
    })
} else {
    console.log("serviceWorker belum didukung browser ini");
}