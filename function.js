$(document).ready(function () {
    // set produk
    var jumlahProduk = [
      {
        namaproduk: "Jet Tempur",
        jumlah: 10,
      },
      {
        namaproduk: "Nuklir Hiroshima",
        jumlah: 2,
      },
      {
        namaproduk: "Infinity Stone",
        jumlah: 5,
      },
      {
        namaproduk: "Burj Khalifa",
        jumlah: 5,
      },
      {
        namaproduk: "Rudal Hipersonik",
        jumlah: 10,
      },
    ];
    
    var produk = [
      "Jet Tempur",
      "Nuklir Hiroshima",
      "Infinity Stone",
      "Burj Khalifa",
      "Rudal Hipersonik",
    ];
  
    var n = 1;
    $("#tambah-barang").hide();
    $("#barang-" + n).change(function () {
        $("#tambah-barang").show();
    });
  
    //show product when pesan produk clicked
    let tampilPesanan = "";
    $("#pesan").click(function () {
      for (let i = 1; i <= n; i++) {
        let jumlah_idx = jumlahProduk.findIndex(
          (data) => data.namaproduk === $("#barang-" + i).val()
        );
        if ($("#jumlah-" + i).val() <= jumlahProduk[jumlah_idx].jumlah) {
          //Pengurangan jumlah stok barang
          jumlahProduk[jumlah_idx].jumlah -= $("#jumlah-" + i).val();
          //output message
          tampilPesanan += "<ul>"
          tampilPesanan +=
            "<li>" +
            $("#barang-" + i).val() +
            " (" +
            $("#jumlah-" + i).val() +
            ")</li>";
          tampilPesanan += "</ul>"
          $("#list-produk").html(`${tampilPesanan}`);
        } else {
          alert(
            `Produk ${jumlahProduk[jumlah_idx].namaproduk}. Jumlah Stok ${jumlahProduk[jumlah_idx].jumlah}`
          );
        }
      }
      let nama = $("#nama").html(`${$("#pemesan").val()}`);
      $("#nama").show() = nama;
    });
  
    $("#tambah-barang").click(function () {
      console.log(n)
      let jumlah_idx = jumlahProduk.findIndex(
        (data) => data.namaproduk === $("#barang-" + n).val()
      );
      n += 1;
      let pesanan = `<div class="form-produk"><div class="left" id="id-${n}"><label for="produk-${n}">Produk</label><br><select id="barang-${n}" required><option value="" hidden selected>Pilih produk</option>`;
      //mapping produk ke select
      produk.map((data) => {
        pesanan += `<option value="${data}">${data}</option>`;
      });
      // create input jumlah
      pesanan += `</select><br></div><div class="left cont-3"><label for="jumlah-${n}" style="padding-left: 5px;">Jumlah</label><br><input type="number" id="jumlah-${n}" class="jumlah" required><br></div>`;
      //create button hapus
      pesanan += `<div id='button-delete' class="left pd-top"><button id="hapus-${n}" class="hapus"><div>X</div></button></div><br>`;
      $(this).before(pesanan);
  
      $("#hapus-" + n).click(function () {
        $("#id-" + n).nextAll();
        $(this).parent().parent().remove();
        $("#id-" + n).closest("div");
        $(this).parent().parent().remove();
      });

      if(n>=5){
        $("#tambah-barang").hide();
      }
    });
  });