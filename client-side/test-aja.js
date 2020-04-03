
// Promise dan Callback.
// buat 2 fungsi yang mempilkan namakalian dengan delay 2 detik.

// Ini Promisenya
function ThisPromise(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // masuk ke then
      resolve('hilmi')
      // masuk ke catch
      // reject 
    }, 2000)
  })
}
// Untuk exekusinya.
ThisPromise()
  .then((res) => {
    console.log(res);
  })
  .catch(() => {})