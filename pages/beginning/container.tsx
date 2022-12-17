export default function container() {
  return (
    <div className="container mx-auto">
      <article>
        <h3>Article One</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem laboriosam libero molestiae recusandae accusantium
          voluptates? Expedita dignissimos amet eveniet dolore nobis odio a
          sunt, maiores quasi. Modi amet quos dolores!
        </p>
      </article>
{/* margin */}
      <div className="bg-slate-100 m-2">Hello World</div>
      <div className="bg-slate-100 ml-4">Hello World</div>
      <div className="bg-slate-100 mr-4">Hello World</div>
      <div className="bg-slate-100 mt-4">Hello World</div>
      <div className="bg-slate-100 mb-4">Hello World</div>
      <div className="bg-slate-100 mt-[20px]">Hello World</div>
 {/* padding */}
 <div className="bg-slate-100 p-2">Hello World</div>
      <div className="bg-slate-100 pl-4">Hello World</div>
      <div className="bg-slate-100 pr-4">Hello World</div>
      <div className="bg-slate-100 pt-4">Hello World</div>
      <div className="bg-slate-100 pb-4">Hello World</div>
      <div className="bg-slate-100 pt-[20px]">Hello World</div>
      {/* space between x*/}
      <div className="flex mt-24 space-x-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
      </div>
      {/* space between y*/}
      <div className="flex flex-col mt-24 space-y-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
      </div>

    </div>
  );
}
