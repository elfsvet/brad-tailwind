export default function interactivity() {
  return (
    <div className="">
      <button className='bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-orange-500 hover:first-letter:text-white'>
        Submit
      </button>
      <button className='bg-black text-white py-3 px-5 rounded-lg m-3 focus:bg-green-500 focus:first-letter:text-white'>
        Submit
      </button>
      <button className='bg-black text-white py-3 px-5 rounded-lg m-3 active:bg-yellow-500 active:first-letter:text-white'>
        Submit
      </button>

      <a
        href=''
        className='group block max-w-xs mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-500'
      >
        <h3 className='group-hover:text-white'>Card Title</h3>
        <p className='group-hover:text-white'>This is the card text</p>
      </a>

      {/* pseudo classes */}
      <ul>
        <li className='first:bg-red-200 even:bg-green-500 odd:bg-orange-500'>
          Item 1
        </li>
        <li className='first:bg-red-200  even:bg-green-500 odd:bg-orange-500'>
          Item 2
        </li>
        <li className='first:bg-red-200  even:bg-green-500 odd:bg-orange-500'>
          Item 3
        </li>
        <li className='first:bg-red-200  even:bg-green-500 odd:bg-orange-500'>
          Item 4
        </li>
        <li className='first:bg-red-200  even:bg-green-500 odd:bg-orange-500'>
          Item 5
        </li>
        <li className='first:bg-red-200  even:bg-green-500 odd:bg-orange-500'>
          Item 6
        </li>
      </ul>

      {/* appearance none */}
      <select className='appearance-none'>
        <option value='yes'>Yes</option>
        <option value='no'>No</option>
      </select>
      <br />
      {/* cursor */}
      <button className='bg-black cursor-crosshair text-white py-3 px-5 rounded-lg m-3'>
        Submit
      </button>

      <p className="cursor-pointer">Hello</p>

      {/* user select */}
      <div className="select-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, animi?</div>
      <div className="select-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, animi?</div>
      <div className="select-all">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, animi?</div>
      <div className="select-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, animi?</div>

      {/* smooth scrolling */}
      {/* className="scroll-smooth" add in html class */}
      <a href="#item" className="block my-6">Go to Item</a>



      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem, assumenda iste dolores odio quibusdam eum perferendis commodi nostrum quia at pariatur velit cupiditate in neque. Odio saepe molestiae, iste nihil expedita incidunt, maxime amet, corrupti est obcaecati commodi. Cum laborum nihil voluptatibus rem corporis voluptatem sed aut, perspiciatis architecto, ipsum illum facilis non commodi. Ducimus laboriosam necessitatibus quos corporis? Quasi eum repudiandae ullam esse, tenetur sed quo illo explicabo cumque neque hic soluta tempora eos vel quisquam reprehenderit nam accusamus debitis pariatur? Eveniet sint alias in libero adipisci minima fugiat ducimus officiis nemo nihil hic quidem et iusto eaque voluptatum fuga quasi sapiente cum dolorum, mollitia eos laudantium ratione! A id esse aliquam, optio iusto ducimus ex nisi deserunt omnis expedita, doloribus pariatur cum neque! Voluptatum hic libero, error distinctio harum placeat ipsa voluptatibus! Non libero amet harum quam voluptates dicta in culpa, nobis molestias consequuntur deserunt recusandae ipsam cumque facere delectus tenetur eaque? Atque provident aperiam reprehenderit corrupti fugit dolore vero itaque optio aspernatur amet ipsum sapiente quidem aliquid delectus, ipsa, rem laudantium, est totam doloremque. Non nam dolores tempora voluptatibus veniam incidunt quisquam officiis optio ad accusamus quo explicabo cumque aperiam veritatis minima recusandae ut consectetur, nisi quae, quaerat repudiandae consequatur illo officia. Vero maiores consequuntur deleniti labore eaque. Facilis consequuntur repellat maxime. Nihil consequatur, praesentium perferendis id quam, excepturi itaque commodi maxime repellat illo provident! Repellat delectus dicta harum voluptas quis maxime minima eos tempora non, distinctio velit, quam recusandae vero ea temporibus! Sapiente quidem, excepturi laudantium in laborum, voluptate quas corporis consectetur ex sunt, iste autem repellendus? Autem fuga libero eligendi adipisci rerum praesentium. Reiciendis, accusamus reprehenderit vero, tempora odit officia magnam mollitia obcaecati hic, porro quibusdam eveniet cumque optio. Necessitatibus, perferendis quod! Eos asperiores odio pariatur possimus vel atque. Tempore repellendus at, quo doloremque, iusto odio dolore perspiciatis praesentium sit quos est quam minus nam molestiae temporibus odit id qui labore dolorum. Maiores velit voluptatibus aliquid cupiditate quasi assumenda similique aspernatur eum ex! Doloribus provident odio placeat temporibus, possimus similique deserunt dignissimos consequuntur qui debitis suscipit a eum dolorum, modi atque alias beatae aspernatur molestiae, impedit ducimus ratione perferendis obcaecati! Voluptas exercitationem, doloremque veritatis quibusdam accusamus natus tempore maxime quo at dignissimos facilis officiis sequi quisquam <span id="item">vitae</span> pariatur itaque repudiandae soluta minima deserunt illum, adipisci temporibus hic. Asperiores ipsum, voluptas facere qui atque iusto. Autem assumenda rerum qui commodi aut ipsa impedit adipisci  eligendi.</p>




    </div>
  );
}
