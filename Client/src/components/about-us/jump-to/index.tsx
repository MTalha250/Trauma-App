const JumpTo = () => {
  return (
    <div className='px-4 w-full my-5'>
         <div className="p-4 bg-white rounded-lg shadow-sm">
         <form className="w-full flex flex-col gap-3 lg:flex-row justify-between items-center space-x-2">
            <div className="flex-grow flex justify-between items-center gap-2">
                <label className="inline min-w-[100px]">Jump To:</label>
              <select className="w-full p-3 pr-10 border rounded-lg font-light bg-white  focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">
                  Our Vision
                </option>
                <option value="">Why Choose us?</option>
                <option value="">Our Team</option>
              </select>
            </div>
          </form>
         </div>
        </div>
    
  );
};

export default JumpTo;
