import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Header/>
    {/* <section>
      <Container className="py-32">
        <div className="flex justify-center items-center">
          <div className="text-center max-w-3xl">
            <p className="mb-2 text-lg font-medium">Cylare Next Blog</p>
            <h1 className="mb-4 text-5xl font-semibold leading-tight">Pusat berita dan informasi daerah bali</h1>
            <p className="text-lg leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eveniet quasi! Velit minima veritatis blanditiis architecto modi a corrupti quibusdam ipsam, voluptatem, deserunt deleniti hic magni saepe tempore iste perspiciatis?</p>
          </div>
        </div>
      </Container>
    </section> */}
    <section>
      <Container className="mt-8">
        {/* <div className="text-center lg:text-start mb-4">
          <p className="inline-block rounded-full px-6 py-1 bg-gradient-to-b from-sky-500 to-sky-600 text-white shadow-lg shadow-black/15 text-sm">Berita Trending <i className="fa fa-fw fa-sm fa-arrow-trend-up"/></p>
        </div> */}
        <div className="mb-3">
          <p className="font-medium">Berita Trending <i className="fa fa-fw fa-sm fa-arrow-trend-up"/></p>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-6 row-span-2 flex items-center">
            <Link href="/blog/cara-menjadi-keren" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-3 items-center group/new relative rounded-lg overflow-hidden xl:shadow-lg xl:shadow-black/5 mb-3 md:mb-0">
              <div>
                <div className="absolute z-20 start-0 top-0 rounded-tl rounded-br-lg bg-gradient-to-b from-sky-500 to-sky-600 text-white text-xs shadow-lg shadow-black/25 px-4 py-0.5">
                  <p>Trending <i className="fa fa-fw fa-sm fa-arrow-trend-up"/></p>
                </div>
                <div className="hidden lg:block group-hover/new:opacity-0 duration-200 absolute z-20 inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent px-4 pt-0 pb-4">
                  <h3 className="mb-2 sm:text-xl md:text-4xl line-clamp-3 max-w-xl text-white font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                  <p className="text-xs text-zinc-300"><span className="text-primary">infoCylare.id</span> - Jumat, 15 Maret 2024</p>
                </div>
                <div className="group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 hidden xl:flex justify-center items-center">
                  <div className="text-center">
                    <i className="fa fa-fw fa-eye"/>
                    <p className="text-sm">Klik untuk selengkapnya...</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <img className="group-hover/new:scale-105 duration-200 aspect-[3/2] object-cover object-center rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg" alt="Image1" />
                  <div className="xl:hidden group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 flex justify-center items-center">
                    <div className="text-center">
                      <i className="fa fa-fw fa-eye"/>
                      <p className="text-sm">Klik untuk selengkapnya...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block lg:hidden pt-4 md:pt-0">
                <h3 className="mb-2 text-2xl line-clamp-5 md:line-clamp-4 font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                <p className="mb-2 line-clamp-5 md:line-clamp-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, vel sit. Totam quos voluptatum odio nam aliquid ullam qui, ab tempora rem hic, consequatur nemo? Neque molestias commodi cumque temporibus eaque tenetur ipsa veritatis suscipit, inventore quae, illo facilis? Maxime voluptatibus sint ducimus quam illum perspiciatis omnis placeat, illo iure.</p>
                <p className="text-xs"><span className="text-primary">infoCylare.id</span> - Jumat, 15 Maret 2024</p>
              </div>
            </Link>
          </div>





          <div className="col-span-12 md:col-span-5 lg:col-span-3 md:row-span-3 lg:row-auto">
            <Link href="#" className="grid grid-cols-12 gap-3 items-center group/new relative rounded-lg overflow-hidden lg:shadow-lg lg:shadow-black/5">
              <div className="col-span-5 md:col-span-12">
                <div className="hidden md:block absolute z-20 start-0 top-0 rounded-tl rounded-br-lg bg-gradient-to-b from-sky-500 to-sky-600 text-white text-xs shadow-lg shadow-black/25 px-4 py-0.5">
                  <p>Trending <i className="fa fa-fw fa-sm fa-arrow-trend-up"/></p>
                </div>
                <div className="hidden lg:block group-hover/new:opacity-0 duration-200 absolute z-20 inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent px-4 pt-0 pb-4">
                  <h3 className="mb-2 text-base lg:text-xs xl:text-base leading-[110%] line-clamp-3 text-white">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                  <p className="text-xs text-zinc-300"><span className="text-primary">infoCylare.id</span> - Jumat, 15 Maret 2024</p>
                </div>
                <div className="group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 hidden lg:flex justify-center items-center">
                  <div className="text-center">
                    <i className="fa fa-fw fa-eye"/>
                    <p className="text-sm">Klik untuk selengkapnya...</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <img className="group-hover/new:scale-105 duration-200 aspect-[3/2] object-cover object-center rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg" alt="Image1" />
                  <div className="xl:hidden group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 flex justify-center items-center">
                    <div className="text-center">
                      <i className="fa fa-fw fa-eye"/>
                      <p className="text-sm">Klik untuk selengkapnya...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-7 md:col-span-12 block lg:hidden">
              <p className="mb-2 text-sky-500 font-medium text-xs">Trending <i className="fa fa-fw fa-sm fa-arrow-trend-up"/></p>
                <h3 className="text-sm md:text-base mb-2 line-clamp-3 font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                <div className="hidden md:block">
                  <p className="mb-2 text-sm line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, vel sit. Totam quos voluptatum odio nam aliquid ullam qui, ab tempora rem hic, consequatur nemo? Neque molestias commodi cumque temporibus eaque tenetur ipsa veritatis suscipit, inventore quae, illo facilis? Maxime voluptatibus sint ducimus quam illum perspiciatis omnis placeat, illo iure.</p>
                </div>
                <p className="text-xs"><span className="hidden md:inline"><span className="text-primary">infoCylare.id</span> -</span> Jumat, 15 Maret 2024</p>
              </div>
            </Link>
          </div>



          <div className="col-span-12 md:col-span-7 lg:col-span-3">
            <Link href="#" className="grid grid-cols-12 gap-3 items-center group/new relative rounded-lg overflow-hidden lg:shadow-lg lg:shadow-black/5">
              <div className="col-span-12 hidden lg:block absolute inset-0">
                <div className="absolute z-20 start-0 top-0 rounded-tl rounded-br-lg bg-gradient-to-b from-sky-500 to-sky-600 text-white text-xs shadow-lg shadow-black/25 px-4 py-0.5">
                  <p>Trending <i className="fa fa-fw fa-sm fa-arrow-trend-up"/></p>
                </div>
                <div className="group-hover/new:opacity-0 duration-200 absolute z-20 inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent px-4 pt-0 pb-4">
                  <h3 className="mb-2 text-base lg:text-xs xl:text-base leading-[110%] line-clamp-3 text-white">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                  <p className="text-xs text-zinc-300"><span className="text-primary">infoCylare.id</span> - Jumat, 15 Maret 2024</p>
                </div>
                <div className="group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 flex justify-center items-center">
                  <div className="text-center">
                    <i className="fa fa-fw fa-eye"/>
                    <p className="text-sm">Klik untuk selengkapnya...</p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-12 relative overflow-hidden rounded-lg">
                <img className="group-hover/new:scale-105 duration-200 aspect-[3/2] object-cover object-center rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg" alt="Image1" />
                <div className="lg:hidden group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 flex justify-center items-center">
                  <div className="text-center">
                    <i className="fa fa-fw fa-eye"/>
                    <p className="text-sm">Klik untuk selengkapnya...</p>
                  </div>
                </div>
              </div>
              <div className="col-span-7 block lg:hidden">
                <p className="mb-2 text-sky-500 font-medium text-xs">Trending <i className="fa fa-fw fa-sm fa-arrow-trend-up"/></p>
                <h3 className="mb-2 text-sm line-clamp-3 md:line-clamp-4 font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                <p className="text-xs">Jumat, 15 Maret 2024</p>
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-3">
            <Link href="#" className="grid grid-cols-12 gap-3 items-center group/new relative rounded-lg overflow-hidden lg:shadow-lg lg:shadow-black/5">
              <div className="col-span-12 hidden lg:block absolute inset-0">
                <div className="absolute z-20 start-0 top-0 rounded-tl rounded-br-lg bg-gradient-to-b from-sky-500 to-sky-600 text-white text-xs shadow-lg shadow-black/25 px-4 py-0.5">
                  <p>Trending <i className="fa fa-fw fa-sm fa-arrow-trend-up"/></p>
                </div>
                <div className="group-hover/new:opacity-0 duration-200 absolute z-20 inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent px-4 pt-0 pb-4">
                  <h3 className="mb-2 text-base lg:text-xs xl:text-base leading-[110%] line-clamp-3 text-white">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                  <p className="text-xs text-zinc-300"><span className="text-primary">infoCylare.id</span> - Jumat, 15 Maret 2024</p>
                </div>
                <div className="group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 flex justify-center items-center">
                  <div className="text-center">
                    <i className="fa fa-fw fa-eye"/>
                    <p className="text-sm">Klik untuk selengkapnya...</p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-12 relative overflow-hidden rounded-lg">
                <img className="group-hover/new:scale-105 duration-200 aspect-[3/2] object-cover object-center rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg" alt="Image1" />
                <div className="lg:hidden group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 flex justify-center items-center">
                  <div className="text-center">
                    <i className="fa fa-fw fa-eye"/>
                    <p className="text-sm">Klik untuk selengkapnya...</p>
                  </div>
                </div>
              </div>
              <div className="col-span-7 block lg:hidden">
                <p className="mb-2 text-sky-500 font-medium text-xs">Trending <i className="fa fa-fw fa-sm fa-arrow-trend-up"/></p>
                <h3 className="mb-2 text-sm line-clamp-3 md:line-clamp-4 font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                <p className="text-xs">Jumat, 15 Maret 2024</p>
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-3">
            <Link href="#" className="grid grid-cols-12 gap-3 items-center group/new relative rounded-lg overflow-hidden lg:shadow-lg lg:shadow-black/5">
              <div className="col-span-12 hidden lg:block absolute inset-0">
                <div className="absolute z-20 start-0 top-0 rounded-tl rounded-br-lg bg-gradient-to-b from-sky-500 to-sky-600 text-white text-xs shadow-lg shadow-black/25 px-4 py-0.5">
                  <p>Trending <i className="fa fa-fw fa-sm fa-arrow-trend-up"/></p>
                </div>
                <div className="group-hover/new:opacity-0 duration-200 absolute z-20 inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent px-4 pt-0 pb-4">
                  <h3 className="mb-2 text-base lg:text-xs xl:text-base leading-[110%] line-clamp-3 text-white">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                  <p className="text-xs text-zinc-300"><span className="text-primary">infoCylare.id</span> - Jumat, 15 Maret 2024</p>
                </div>
                <div className="group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 flex justify-center items-center">
                  <div className="text-center">
                    <i className="fa fa-fw fa-eye"/>
                    <p className="text-sm">Klik untuk selengkapnya...</p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-12 relative overflow-hidden rounded-lg">
                <img className="group-hover/new:scale-105 duration-200 aspect-[3/2] object-cover object-center rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg" alt="Image1" />
                <div className="lg:hidden group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 flex justify-center items-center">
                  <div className="text-center">
                    <i className="fa fa-fw fa-eye"/>
                    <p className="text-sm">Klik untuk selengkapnya...</p>
                  </div>
                </div>
              </div>
              <div className="col-span-7 block lg:hidden">
                <p className="mb-2 text-sky-500 font-medium text-xs">Trending <i className="fa fa-fw fa-sm fa-arrow-trend-up"/></p>
                <h3 className="mb-2 text-sm line-clamp-3 md:line-clamp-4 font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                <p className="text-xs">Jumat, 15 Maret 2024</p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>

    <section>
      <Container className="mt-3">
        <div className="mb-3">
          <p className="font-medium">Berita Terkini</p>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-5">
                <Link href="#" className="group/new relative block">
                  <div className="absolute z-20 start-0 top-0 rounded-tl rounded-br-lg bg-gradient-to-b from-yellow-500 to-yellow-600 text-white text-xs shadow-lg shadow-black/25 px-4 py-0.5">
                    <p>Terkini</p>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <img className="group-hover/new:scale-105 duration-200 aspect-[3/2] object-cover object-center rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg" alt="Image1" />
                    <div className="group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 flex justify-center items-center">
                      <div className="text-center">
                        <i className="fa fa-fw fa-eye"/>
                        <p className="text-sm">Klik untuk selengkapnya...</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="mb-2 text-2xl line-clamp-5 font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                    <p className="mb-2 line-clamp-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, vel sit. Totam quos voluptatum odio nam aliquid ullam qui, ab tempora rem hic, consequatur nemo? Neque molestias commodi cumque temporibus eaque tenetur ipsa veritatis suscipit, inventore quae, illo facilis? Maxime voluptatibus sint ducimus quam illum perspiciatis omnis placeat, illo iure.</p>
                    <p className="text-xs"><span className="text-primary">infoCylare.id</span> - Jumat, 15 Maret 2024</p>
                  </div>
                </Link>
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="grid grid-cols-1 gap-3">
                  <Link href="#" className="group/new grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-5 lg:col-span-4">
                      <div className="relative overflow-hidden rounded-lg">
                        <img className="group-hover/new:scale-105 duration-200 aspect-[3/2] object-cover object-center rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg" alt="Image1" />
                        <div className="group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 flex justify-center items-center">
                          <div className="text-center">
                            <i className="fa fa-fw fa-eye"/>
                            <p className="text-xs">selengkapnya...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7 lg:col-span-8">
                      <p className="mb-2 text-yellow-500 font-medium text-xs">Terkini</p>
                      <h3 className="mb-2 text-sm line-clamp-4 md:line-clamp-3 font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                      <p className="text-xs">Jumat, 15 Maret 2024</p>
                    </div>
                  </Link>
                  <Link href="#" className="group/new grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-5 lg:col-span-4">
                      <div className="relative overflow-hidden rounded-lg">
                        <img className="group-hover/new:scale-105 duration-200 aspect-[3/2] object-cover object-center rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg" alt="Image1" />
                        <div className="group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 flex justify-center items-center">
                          <div className="text-center">
                            <i className="fa fa-fw fa-eye"/>
                            <p className="text-xs">selengkapnya...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7 lg:col-span-8">
                      <p className="mb-2 text-yellow-500 font-medium text-xs">Terkini</p>
                      <h3 className="mb-2 text-sm line-clamp-4 md:line-clamp-3 font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                      <p className="text-xs">Jumat, 15 Maret 2024</p>
                    </div>
                  </Link>
                  <Link href="#" className="group/new grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-5 lg:col-span-4">
                      <div className="relative overflow-hidden rounded-lg">
                        <img className="group-hover/new:scale-105 duration-200 aspect-[3/2] object-cover object-center rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg" alt="Image1" />
                        <div className="group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 flex justify-center items-center">
                          <div className="text-center">
                            <i className="fa fa-fw fa-eye"/>
                            <p className="text-xs">selengkapnya...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7 lg:col-span-8">
                      <p className="mb-2 text-yellow-500 font-medium text-xs">Terkini</p>
                      <h3 className="mb-2 text-sm line-clamp-4 md:line-clamp-3 font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                      <p className="text-xs">Jumat, 15 Maret 2024</p>
                    </div>
                  </Link>
                  <Link href="#" className="group/new grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-5 lg:col-span-4">
                      <div className="relative overflow-hidden rounded-lg">
                        <img className="group-hover/new:scale-105 duration-200 aspect-[3/2] object-cover object-center rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg" alt="Image1" />
                        <div className="group-hover/new:opacity-100 opacity-0 duration-200 bg-black/25 text-white z-10 absolute inset-0 flex justify-center items-center">
                          <div className="text-center">
                            <i className="fa fa-fw fa-eye"/>
                            <p className="text-xs">selengkapnya...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7 lg:col-span-8">
                      <p className="mb-2 text-yellow-500 font-medium text-xs">Terkini</p>
                      <h3 className="mb-2 text-sm line-clamp-4 md:line-clamp-3 font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                      <p className="text-xs">Jumat, 15 Maret 2024</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="sticky top-24">
              <h6 className="mb-2 font-medium">Static Menu</h6>
              <ul className="ps-8 list-disc">
                <li className="list-item"><Link href="#" className="link-primary block font-medium text-sm">Lihat semua berita <span className="ms-1 px-2 rounded bg-red-700 text-white text-xs align-middle">12.465</span></Link></li>
                <li className="list-item"><Link href="#" className="link-primary block font-medium text-sm">Lihat berita trending <span className="ms-1 px-2 rounded bg-red-700 text-white text-xs align-middle">2.869</span></Link></li>
                <li className="list-item"><Link href="#" className="link-primary block font-medium text-sm">Lihat berita terkini <span className="ms-1 px-2 rounded bg-red-700 text-white text-xs align-middle">3.574</span></Link></li>
                <li className="list-item"><Link href="#" className="link-primary block font-medium text-sm">Lihat berita Denpasar <span className="ms-1 px-2 rounded bg-red-700 text-white text-xs align-middle">4.214</span></Link></li>
                <li className="list-item"><Link href="#" className="link-primary block font-medium text-sm">Lihat berita Badung <span className="ms-1 px-2 rounded bg-red-700 text-white text-xs align-middle">1.023</span></Link></li>
                <li className="list-item"><Link href="#" className="link-primary block font-medium text-sm">Lihat berita Tabanan <span className="ms-1 px-2 rounded bg-red-700 text-white text-xs align-middle">923</span></Link></li>
                <li className="list-item"><Link href="#" className="link-primary block font-medium text-sm">Lihat berita Karangasem <span className="ms-1 px-2 rounded bg-red-700 text-white text-xs align-middle">1.465</span></Link></li>
                <li className="list-item"><Link href="#" className="link-primary block font-medium text-sm">Lihat berita Gianyar <span className="ms-1 px-2 rounded bg-red-700 text-white text-xs align-middle">2.465</span></Link></li>
              </ul>
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
