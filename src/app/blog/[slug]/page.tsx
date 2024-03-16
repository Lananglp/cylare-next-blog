import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Page() {
  return (
    <>
    <Header/>
    <section>
      <Container className="mt-8">
        <div>
          <div className="mb-6">
            <ul className="flex justify-center items-center text-sm">
              <li className="capitalize"><i className="fa fa-fw fa-xs fa-house me-1"/> <Link href="/">home</Link></li>
              <li className="capitalize"><i className="mx-2 block align-middle fa fa-fw fa-xs fa-chevron-right"/></li>
              <li className="capitalize"> <Link href="/blog">blog</Link></li>
              <li className="capitalize"><i className="mx-2 block align-middle fa fa-fw fa-xs fa-chevron-right"/></li>
              <li className="capitalize">cara-menjadi-keren</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="max-w-4xl">
              {/* kategori blog */}
              <div className="flex items-center gap-2 mb-4">
                <div className="inline-block rounded-lg bg-gradient-to-b from-sky-500 to-sky-600 text-white text-xs shadow-lg shadow-black/25 px-4 py-0.5">
                  <p>Trending <i className="fa fa-fw fa-sm fa-arrow-trend-up"/></p>
                </div>
                <div className="inline-block rounded-lg bg-gradient-to-b from-zinc-600 to-zinc-700 text-white text-xs shadow-lg shadow-black/25 px-4 py-0.5">
                  <p>Denpasar</p>
                </div>
              </div>

              {/* judul blog */}
              <h1 className="mb-4 font-semibold text-5xl">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h1>
              {/* pembuat blog + tanggal */}
              <p className="mb-8">Oleh <span className="text-primary">infoCylare.id</span> - Jumat, 15 Maret 2024</p>

              {/* gambar */}
              <div>
                <img className="h-full w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg" alt="Image1" />
                <p className="mb-8 mt-2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eaque perspiciatis esse nesciunt amet quia ipsum consequuntur possimus? Eum eveniet vel hic, corrupti iste ipsam illo ratione deserunt reiciendis quae?</p>
              </div>

              {/* looping paragraf */}
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam saepe pariatur, fugiat dolorem sapiente sunt atque vel mollitia dolorum! Voluptate ea, nobis voluptates dolorem provident asperiores iste accusantium veritatis eligendi aperiam amet vel sit a illo, sint voluptatum et reprehenderit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum atque quaerat libero quo aliquid natus aliquam est fugit dolorem, cum blanditiis sapiente explicabo accusamus ut sint expedita doloremque sequi laborum deleniti, quidem reiciendis sed, veniam iure provident. Repellat debitis rem asperiores, commodi quibusdam eveniet illum culpa? Hic a ex explicabo vero! Eum laborum molestias dolorem, accusamus ipsum nobis at perferendis.</p>

            </div>
          </div>
        </div>
      </Container>
    </section>
    <br />
    <br />
    <br />
    <Footer/>
    </>
  );
}