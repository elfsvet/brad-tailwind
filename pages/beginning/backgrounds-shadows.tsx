export default function backgroundsShadows() {
  return (
    <div>
      {/* background classes */}
      <div
        className='w-72 bg-cover bg-center  bg-no-repeat h-64'
        style={{ backgroundImage: `url('/images/profile.jpg'` }}
      ></div>

      {/* gradients */}
      <div className='h-24 bg-gradient-to-l from-cyan-500 to-blue-500'></div>
      {/* shadows */}
      <div className='w-96 mt-6 ml-4 p-3 shadow'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        facere iusto dolor, iste suscipit obcaecati aut non voluptas nam enim
        molestiae facilis exercitationem repellat labore quas ut illum molestias
        libero.
      </div>
      <div className='w-96 mt-6 ml-4 p-3 shadow-md'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        facere iusto dolor, iste suscipit obcaecati aut non voluptas nam enim
        molestiae facilis exercitationem repellat labore quas ut illum molestias
        libero.
      </div>
      <div className='w-96 mt-6 ml-4 p-3 shadow-lg'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        facere iusto dolor, iste suscipit obcaecati aut non voluptas nam enim
        molestiae facilis exercitationem repellat labore quas ut illum molestias
        libero.
      </div>
      <div className='w-96 mt-6 ml-4 p-3 shadow-xl'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        facere iusto dolor, iste suscipit obcaecati aut non voluptas nam enim
        molestiae facilis exercitationem repellat labore quas ut illum molestias
        libero.
      </div>
      <div className='w-96 mt-6 ml-4 p-3 shadow-2xl'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        facere iusto dolor, iste suscipit obcaecati aut non voluptas nam enim
        molestiae facilis exercitationem repellat labore quas ut illum molestias
        libero.
      </div>
      <div className='w-96 mt-6 ml-4 p-3 shadow-inner'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        facere iusto dolor, iste suscipit obcaecati aut non voluptas nam enim
        molestiae facilis exercitationem repellat labore quas ut illum molestias
        libero.
      </div>
      <div className='w-96 mt-6 ml-4 p-3 shadow-md shadow-blue-500/50'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        facere iusto dolor, iste suscipit obcaecati aut non voluptas nam enim
        molestiae facilis exercitationem repellat labore quas ut illum molestias
        libero.
      </div>
      <div className='w-96 my-6 ml-4 p-3 shadow-xl shadow-red-500'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        facere iusto dolor, iste suscipit obcaecati aut non voluptas nam enim
        molestiae facilis exercitationem repellat labore quas ut illum molestias
        libero.
      </div>

      {/* mix blend */}
      <div className='flex justify-center -space-x-24'>
        <div className='bg-blue-400 mix-blend-multiply'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          tenetur a cupiditate maxime veniam quo facere recusandae harum
          perspiciatis vero?
        </div>
        <div className='bg-pink-400 mix-blend-multiply'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          tenetur a cupiditate maxime veniam quo facere recusandae harum
          perspiciatis vero?
        </div>
      </div>
    </div>
  );
}
