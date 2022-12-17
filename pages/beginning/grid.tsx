export default function grid() {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-10 border md:col-span-2 md:row-span-2 border-blue-600 bg-blue-100">Item 1</div>
            <div className="p-10 border border-blue-600 bg-blue-100">Item 2</div>
            <div className="p-10 border border-blue-600 bg-blue-100">Item 3</div>
            <div className="p-10 border border-blue-600 bg-blue-100">Item 4</div>
            <div className="p-10 border border-blue-600 bg-blue-100">Item 5</div>
            <div className="p-10 border border-blue-600 bg-blue-100">Item 6</div>
            <div className="p-10 border md:col-span-2 border-blue-600 bg-blue-100">Item 7</div>
            <div className="p-10 border border-blue-600 bg-blue-100">Item 8</div>
            <div className="p-10 border md:col-span-3 border-blue-600 bg-blue-100">Item 9</div>
        </div>





    </div>
  )
}