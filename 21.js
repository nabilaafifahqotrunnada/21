//Inheritance

//parent class Balok
class PersegiPanjang{
    constructor(p,l){
        //atribut objek didefinisikan dalam method constructor
        this.panjang = p
        this.lebar = l
    }

    //fungsi luas PersegiPanjang
    luas = () => {
        return this.panjang * this.lebar
    }

    //fungsi keliling PersegiPanjang
    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}

//class balok dapat menggunakan atribut maupun method class PersegiPanjang
class Balok extends PersegiPanjang{
    constructor(p,l,t){
        //memanggil atribut method constructor PersegiPanjang
        super(p,l)
        //mendeklarasikan atribut class balok sendiri
        this.tinggi = t
    }

    //fungsi luas Balok
    luas = () => {
        return (2 * this.panjang * this.lebar) + 
        (2 * this.panjang * this.tinggi) + 
        (2 * this.tinggi * this.lebar) 
    }

    //fungsi volume Balok
    volume = () => {
        return this.panjang * this.lebar * this.tinggi
    }
}

//membuat objek balok baru
/*karena konstruktor balok p,l,t
maka lemari memiliki p = 10, l = 5 dan t = 2*/
let lemari = new Balok(10, 5, 2)

//menampilkan luas lemari dengan menggunakan fungsi pada class balok 
console.log("Luas Lemari = " + lemari.luas());
//menampilkan volume lemari dengan menggunakan fungsi pada class balok 
console.log("Volume Lemari = " + lemari.volume());