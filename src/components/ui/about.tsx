const About = () => {
  return (
    <section className="py-20 w-[95%] lg:w-full lg:max-w-3/4 mx-auto">
      <h2 id="about" className="bg-slate-800 text-slate-200 py-2 px-3 rounded-md shadow inline-block">
        About
      </h2>
      <section className="p-4 shadow rounded-md bg-slate-800 mt-2">
        <h1 className="font-bold text-slate-100 text-xl">Apa itu CSS?</h1>
        <p className="text-slate-300 text-sm mt-3">
          Dalam rangka Dies Natalis Jurusan, kami ingin mengadakan serangkaian
          acara besar yang bersifat pengembangan keilmuan sebagai refleksi dari
          Visi dan Misi FMIPA yang menuntut kami untuk selalu menjujung tinggi
          tentang penelitian. Dies Natalis Jurusan Ilmu Komputer ini juga
          merupakan momentum untuk memberikan kesempatan kepada para pelajar dan
          umum di luar sana. 
        </p>
        <p className="text-slate-300 text-sm mt-2">
          Maka melalui acara ini kami berupaya untuk
          mengoptimalkan kehidupan saintis dengan kreatifitas yang kaya akan
          imajinasi dalam memberikan terobosan - terobosan baru bagi
          perkembangan ilmu pengetahuan dan teknologi. Acara ini juga sebagai
          ajang motivasi bagi kami untuk menjadi lebih baik, dengan adanya tekad
          untuk maju dan terus memberikan manfaat bagi civitas akademik Jurusan
          Ilmu Komputer khususnya dan civitas FMIPA Universitas Lampung.
        </p>
        <h1 className="font-bold text-slate-100 text-xl mt-6">Keuntungan yang didapatkan?</h1>
        <section className="flex items-center gap-2 mt-2 flex-wrap">
            <p className="bg-slate-700 text-slate-200 py-2 px-3 rounded-md shadow inline-block text-sm hover:bg-slate-900 transition">Sertifikat</p>
            <p className="bg-slate-700 text-slate-200 py-2 px-3 rounded-md shadow inline-block text-sm hover:bg-slate-900 transition">Menambah pengalaman di CV</p>
            <p className="bg-slate-700 text-slate-200 py-2 px-3 rounded-md shadow inline-block text-sm hover:bg-slate-900 transition">Relasi & Skill</p>
            <p className="bg-slate-700 text-slate-200 py-2 px-3 rounded-md shadow inline-block text-sm hover:bg-slate-900 transition">Uang tunai  </p>
        </section>
      </section>
    </section>
  );
};

export default About;
