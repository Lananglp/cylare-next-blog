'use client'
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  author: string;
  publishedAt: Date;
  blocks: {
    id: number;
    body: {
      type: string;
      level: number;
      format: string;
      children: {
        type: string;
        text: string;
        underline: boolean;
        bold: boolean;
        code: boolean;
        children: {
          type: string;
          text: string;
        }[];
      }[];
    }[];
  }[];
}

export default function Page() {

  const [blog, setBlog] = useState<Blog[]>([]);
  
  const fetchdata = async () => {
    try {
      const res = await fetch('http://10.10.243.105:1337/api/pub/articles');
      const data = await res.json();
      setBlog(data.results);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
    <Header/>
    {blog.slice(0,1).map((blog, index) => {
      console.log(blog)
      return (
        <section key={index}>
          <Container className="mt-8">
            <div>
              <div className="mb-6">
                <ul className="flex justify-center items-center text-sm">
                  <li className="capitalize font-medium text-zinc-500 text-nowrap"><i className="fa fa-fw fa-xs fa-house me-1"/> <Link href="/">home</Link></li>
                  <li className="capitalize font-medium text-zinc-500 text-nowrap"><i className="mx-2 block align-middle fa fa-fw fa-xs fa-chevron-right"/></li>
                  <li className="capitalize font-medium text-zinc-500 text-nowrap"> <Link href="/blog">blog</Link></li>
                  <li className="capitalize font-medium text-zinc-500 text-nowrap"><i className="mx-2 block align-middle fa fa-fw fa-xs fa-chevron-right"/></li>
                  <li className="capitalize font-medium text-zinc-500 line-clamp-1">wwwwwwwwwwwwwwwwwwwwwww</li>
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
                  <h1 className="mb-4 font-semibold text-2xl md:text-4xl lg:text-5xl">{blog.title}</h1>
                  {/* pembuat blog + tanggal */}
                  <div className="flex flex-wrap justify-between items-center gap-1 mb-8">
                    <p className="text-sm md:text-base">Oleh <span className="text-primary">{blog.author ? blog.author : 'unkown'}</span> - {blog.publishedAt ? 'Jumat, 15 Maret 2024' : 'Jumat, 15 Maret 2024'}</p>
                    <div className="flex items-center gap-4">
                      <p><i className="fa fa-fw fa-sm fa-heart text-red-500"/> 1.285</p>
                      <p><i className="fa fa-fw fa-sm fa-comment"/> 538</p>
                    </div>
                  </div>

                  {/* gambar */}
                  <div>
                    <img className="h-full w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg" alt="Image1" />
                    <p className="mb-8 mt-2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eaque perspiciatis esse nesciunt amet quia ipsum consequuntur possimus? Eum eveniet vel hic, corrupti iste ipsam illo ratione deserunt reiciendis quae?</p>
                  </div>

                  {/* looping paragraf */}

                  {blog && blog.blocks.map((block, index) => {
                    return (
                      <div key={index}>
                        {Array.isArray(block.body) && 
                          block.body.map((body, index) => {
                            return (
                              <p key={index}>
                                {body.type === "paragraph" &&
                                  body.children.map((children, index) => {
                                    return (
                                      <React.Fragment key={index}>
                                        {children.text !== "" ? <p className={`${children.bold && "font-semibold"} ${children.underline && "underline underline-offset-2"}`}>{children.text}</p> : <br />}
                                      </React.Fragment>
                                    )
                                  })
                                }
                                {body.type === "heading" &&
                                  body.level === 1 &&
                                  body.children.map((children, index) => {
                                    return (
                                      <React.Fragment key={index}>
                                        {children.text !== "" ? <h2 className={`${children.bold ? "font-semibold" : "font-medium"} ${children.underline && "underline underline-offset-1"} text-4xl`}>{children.text}</h2> : <br />}
                                      </React.Fragment>
                                    )
                                  })
                                }
                                {body.type === "heading" &&
                                  body.level === 2 &&
                                  body.children.map((children, index) => {
                                    return (
                                      <React.Fragment key={index}>
                                        {children.text !== "" ? <h3 className={`${children.bold ? "font-semibold" : "font-medium"} ${children.underline && "underline underline-offset-1"} text-3xl`}>{children.text}</h3> : <br />}
                                      </React.Fragment>
                                    )
                                  })
                                }
                                {body.type === "heading" &&
                                  body.level === 3 &&
                                  body.children.map((children, index) => {
                                    return (
                                      <React.Fragment key={index}>
                                        {children.text !== "" ? <h4 className={`${children.bold ? "font-semibold" : "font-medium"} ${children.underline && "underline underline-offset-1"} text-2xl`}>{children.text}</h4> : <br />}
                                      </React.Fragment>
                                    )
                                  })
                                }
                                {body.type === "heading" &&
                                  body.level === 4 &&
                                  body.children.map((children, index) => {
                                    return (
                                      <React.Fragment key={index}>
                                        {children.text !== "" ? <h5 className={`${children.bold ? "font-semibold" : "font-medium"} ${children.underline && "underline underline-offset-1"} text-xl`}>{children.text}</h5> : <br />}
                                      </React.Fragment>
                                    )
                                  })
                                }
                                {body.type === "heading" &&
                                  body.level === 5 &&
                                  body.children.map((children, index) => {
                                    return (
                                      <React.Fragment key={index}>
                                        {children.text !== "" ? <h6 className={`${children.bold ? "font-semibold" : "font-medium"} ${children.underline && "underline underline-offset-1"} text-lg`}>{children.text}</h6> : <br />}
                                      </React.Fragment>
                                    )
                                  })
                                }
                                {body.type === "heading" &&
                                  body.level === 6 &&
                                  body.children.map((children, index) => {
                                    return (
                                      <React.Fragment key={index}>
                                        {children.text !== "" ? <p className={`${children.bold ? "font-semibold" : "font-medium"} ${children.underline && "underline underline-offset-1"}`}>{children.text}</p> : <br />}
                                      </React.Fragment>
                                    )
                                  })
                                }
                                {body.type === "list" &&
                                  body.format === "unordered" &&
                                  body.children.map((listParent, index) => {
                                    return (
                                      // <React.Fragment key={index}>
                                      //   {children.text !== "" ? <p>{children.text}</p> : <br />}
                                      // </React.Fragment>
                                      <ul key={index} className="list-disc ps-8">
                                        {listParent.type === "list-item" &&
                                          listParent.children.map((listChild, index) => {
                                            return (
                                              <React.Fragment key={index}>
                                                {listChild.type === "text" && listChild.text !== "" ? <li>{listChild.text}</li> : <br />}
                                              </React.Fragment>
                                            )
                                          })
                                        }
                                      </ul>
                                    )
                                  })
                                }
                              </p>
                            )
                        })}
                      </div>
                    )
                  })}

                  {/* <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam saepe pariatur, fugiat dolorem sapiente sunt atque vel mollitia dolorum! Voluptate ea, nobis voluptates dolorem provident asperiores iste accusantium veritatis eligendi aperiam amet vel sit a illo, sint voluptatum et reprehenderit.</p>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum atque quaerat libero quo aliquid natus aliquam est fugit dolorem, cum blanditiis sapiente explicabo accusamus ut sint expedita doloremque sequi laborum deleniti, quidem reiciendis sed, veniam iure provident. Repellat debitis rem asperiores, commodi quibusdam eveniet illum culpa? Hic a ex explicabo vero! Eum laborum molestias dolorem, accusamus ipsum nobis at perferendis.</p>
                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus pariatur amet temporibus officiis velit quas eveniet nobis, porro, ea cum maiores. Quis dignissimos consectetur dolores praesentium commodi nemo alias cum odio. Eum fuga veritatis fugit ea nulla veniam odit ab.</p>

                  <div>
                    <img className="h-full w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg" alt="Image1" />
                    <p className="mb-8 mt-2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eaque perspiciatis esse nesciunt amet quia ipsum consequuntur possimus? Eum eveniet vel hic, corrupti iste ipsam illo ratione deserunt reiciendis quae?</p>
                  </div>

                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam saepe pariatur, fugiat dolorem sapiente sunt atque vel mollitia dolorum! Voluptate ea, nobis voluptates dolorem provident asperiores iste accusantium veritatis eligendi aperiam amet vel sit a illo, sint voluptatum et reprehenderit.</p>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum atque quaerat libero quo aliquid natus aliquam est fugit dolorem, cum blanditiis sapiente explicabo accusamus ut sint expedita doloremque sequi laborum deleniti, quidem reiciendis sed, veniam iure provident. Repellat debitis rem asperiores, commodi quibusdam eveniet illum culpa? Hic a ex explicabo vero! Eum laborum molestias dolorem, accusamus ipsum nobis at perferendis.</p>
                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus pariatur amet temporibus officiis velit quas eveniet nobis, porro, ea cum maiores. Quis dignissimos consectetur dolores praesentium commodi nemo alias cum odio. Eum fuga veritatis fugit ea nulla veniam odit ab.</p>

                  <h2 className="mb-4 font-medium text-4xl">Lorem ipsum dolor sit.</h2>
                  <h3 className="mb-4 font-medium text-3xl">Lorem ipsum dolor sit.</h3>
                  <h4 className="mb-4 font-medium text-2xl">Lorem ipsum dolor sit.</h4>
                  <h5 className="mb-4 font-medium text-xl">Lorem ipsum dolor sit.</h5>
                  <h6 className="mb-4 font-medium text-lg">Lorem ipsum dolor sit.</h6> */}

                  {/* list looping */}
                  {/* <ul className="list-disc ps-8 mb-4">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione doloremque nobis provident libero sequi laborum!</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, pariatur.</li>
                  </ul>

                  <h6 className="mb-4 font-medium text-lg">Lorem ipsum dolor sit.</h6>

                  <ul className="list-decimal ps-8 mb-4">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione doloremque nobis provident libero sequi laborum!</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, pariatur.</li>
                  </ul>

                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum atque quaerat libero quo aliquid natus aliquam est fugit dolorem, cum blanditiis sapiente explicabo accusamus ut sint expedita doloremque sequi laborum deleniti, quidem reiciendis sed, veniam iure provident. Repellat debitis rem asperiores, commodi quibusdam eveniet illum culpa? Hic a ex explicabo vero! Eum laborum molestias dolorem, accusamus ipsum nobis at perferendis.</p>
                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, atque id pariatur quas quasi voluptas quod? Tempora ad non nulla deleniti fugit officia iure architecto minus sed sequi unde esse et, quidem maiores optio totam hic nemo illum nobis beatae! Sit architecto vero facilis odit quidem, fugiat ullam nemo nostrum eius aliquid inventore, ut rerum! Voluptatem exercitationem recusandae numquam ab veritatis vitae magni deleniti nihil fuga odio, enim, asperiores debitis.</p> */}

                  <div className="mt-8">
                    <p className="text-2xl font-semibold">Suka dengan postingan ini?</p>
                    <p className="mb-4">klik tombol dibawah untuk menyukai postingan ini.</p>
                    <button type="button" className="px-4 py-1 text-sm bg-gradient-to-b from-red-500 to-red-600 rounded-lg shadow-lg shadow-black/5 text-white"><i className="fa fa-fw fa-sm fa-heart text-white"/> Sukai</button>
                    {/* <button type="button" className="px-4 py-1 text-sm bg-gradient-to-b from-red-500 to-red-600 rounded-lg shadow-lg shadow-black/5 text-white"><i className="fa fa-fw fa-sm fa-check text-white"/> Disukai</button> */}
                  </div>

                  <div className="border-t border-zinc-400 pt-8 mt-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <p className="text-xs px-4 py-1 rounded-lg shadow-lg shadow-black/5 bg-gradient-to-b from-zinc-600 to-zinc-700 text-white"><i className="fa fa-fw fa-sm fa-tag"/> Tags</p>
                      <Link href="#" className="text-xs px-4 py-1 rounded-lg shadow-lg shadow-black/5 bg-gradient-to-b from-blue-500 to-blue-600 text-white">infoDenpasar</Link>
                      <Link href="#" className="text-xs px-4 py-1 rounded-lg shadow-lg shadow-black/5 bg-gradient-to-b from-blue-500 to-blue-600 text-white">denpasar</Link>
                      <Link href="#" className="text-xs px-4 py-1 rounded-lg shadow-lg shadow-black/5 bg-gradient-to-b from-blue-500 to-blue-600 text-white">liburan</Link>
                      <Link href="#" className="text-xs px-4 py-1 rounded-lg shadow-lg shadow-black/5 bg-gradient-to-b from-blue-500 to-blue-600 text-white">wisata</Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3 my-8">
                      <Link href="#" className="group/new block border-s border-zinc-400 p-4">
                        <p className="mb-2">Postingan sebelumnya</p>
                        <p className="font-medium group-hover/new:text-blue-500 line-clamp-3 duration-200">Cara menggunakan ChatGPT terbaru yang akan rilis pada bulan maret ini</p>
                      </Link>
                      <Link href="#" className="group/new block border-s border-zinc-400 p-4">
                        <p className="mb-2">Postingan selanjutnya</p>
                        <p className="font-medium group-hover/new:text-blue-500 line-clamp-3 duration-200">berikut merupakan cara terbaru untuk cepat mendapatkan savage di mobile legends</p>
                      </Link>
                    </div>

                    <p className="mb-3">Berita terkini</p>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
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
                            <h3 className="mb-2 line-clamp-5 font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                            <p className="lg:text-[0.8vw]"><span className="text-primary">infoCylare.id</span> - Jumat, 15 Maret 2024</p>
                          </div>
                        </Link>
                      </div>
                      <div>
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
                            <h3 className="mb-2 line-clamp-5 font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                            <p className="lg:text-[0.8vw]"><span className="text-primary">infoCylare.id</span> - Jumat, 15 Maret 2024</p>
                          </div>
                        </Link>
                      </div>
                      <div>
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
                            <h3 className="mb-2 line-clamp-5 font-medium">Bali merupakan tempat berwisata terbaik yang sudah terkenal diseluruh dunia</h3>
                            <p className="lg:text-[0.8vw]"><span className="text-primary">infoCylare.id</span> - Jumat, 15 Maret 2024</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-8">
                      <form className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <input type="text" id="namaLengkap" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-zinc-200 rounded-lg border border-zinc-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                          <label htmlFor="namaLengkap" className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-zinc-200 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Nama lengkap</label>
                        </div>
                        <div className="relative">
                          <input type="text" id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-zinc-200 rounded-lg border border-zinc-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                          <label htmlFor="email" className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-zinc-200 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                        </div>
                        <div className="col-span-2 relative">
                          <textarea id="komentar" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-zinc-200 rounded-lg border border-zinc-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                          <label htmlFor="komentar" className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-zinc-200 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Ketik komentar anda disini...</label>
                        </div>
                      </form>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Container>
        </section>
      )
    })}
    <br />
    <br />
    <br />
    <Footer/>
    </>
  );
}