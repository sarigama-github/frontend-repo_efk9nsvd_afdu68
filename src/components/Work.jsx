export default function Work() {
  const videos = [
    { id: 1, title: 'Beauty Brand Product Drop', src: 'https://images.unsplash.com/photo-1610207928705-0ecd72bd4b6e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCZWF1dHklMjBCcmFuZCUyMFByb2R1Y3QlMjBEcm9wfGVufDB8MHx8fDE3NjI5NjE1MDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { id: 2, title: 'Gym Apparel Hype Reel', src: 'https://images.unsplash.com/photo-1610207928705-0ecd72bd4b6e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCZWF1dHklMjBCcmFuZCUyMFByb2R1Y3QlMjBEcm9wfGVufDB8MHx8fDE3NjI5NjE1MDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { id: 3, title: 'Cafe Launch Teaser', src: 'https://images.unsplash.com/photo-1610207928705-0ecd72bd4b6e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCZWF1dHklMjBCcmFuZCUyMFByb2R1Y3QlMjBEcm9wfGVufDB8MHx8fDE3NjI5NjE1MDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { id: 4, title: 'Tech Gadget Unboxing', src: 'https://videos.pexels.com/video-files/7964898/7964898-uhd_2560_1440_25fps.mp4' },
  ]

  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Featured reels</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">A few examples of our scroll-stopping edits across niches.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(v => (
            <div key={v.id} className="rounded-2xl overflow-hidden border bg-white/70 backdrop-blur">
              <video className="w-full aspect-[9/16] object-cover" controls preload="metadata" src={v.src} />
              <div className="p-4">
                <h3 className="font-semibold">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
