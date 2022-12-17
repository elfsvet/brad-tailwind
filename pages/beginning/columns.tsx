import Image from "next/image";

export default function columns() {
  return (
    <div>
      <div className='columns-4 gap-2'>
        <Image className="w-full"
          src='/images/profile.jpg'
         width={100}
         height={100}
          alt='stepan'
        />
        <Image className="w-full"
          src='/images/profile.jpg'
         width={100}
         height={100}
          alt='stepan'
        />
        <Image className="w-full"
          src='/images/profile.jpg'
         width={100}
         height={100}
          alt='stepan'
        />
        <Image className="w-full"
          src='/images/profile.jpg'
         width={100}
         height={100}
          alt='stepan'
        />
      </div>
      <div className='columns-xs'>
        <Image className="w-full"
          src='/images/profile.jpg'
         width={100}
         height={100}
          alt='stepan'
        />
        <Image className="w-full"
          src='/images/profile.jpg'
         width={100}
         height={100}
          alt='stepan'
        />
        <Image className="w-full"
          src='/images/profile.jpg'
         width={100}
         height={100}
          alt='stepan'
        />
        <Image className="w-full"
          src='/images/profile.jpg'
         width={100}
         height={100}
          alt='stepan'
        />
      </div>
      <div className='columns-4'>
        <Image className="aspect-video w-full"
          src='/images/profile.jpg'
         width={100}
         height={100}
          alt='stepan'
        />
        <Image className="w-full aspect-square"
          src='/images/profile.jpg'
         width={100}
         height={100}
          alt='stepan'
        />
        <Image className="w-full"
          src='/images/profile.jpg'
         width={100}
         height={100}
          alt='stepan'
        />
        <Image className="w-full"
          src='/images/profile.jpg'
         width={100}
         height={100}
          alt='stepan'
        />
      </div>
    </div>
  );
}
