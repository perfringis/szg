export default function PreLoad() {
  return (
    <>
    <div id="pre-load-page" className="flex flex-col h-screen bg-[#050505]">
      <div
        id="menu"
        className="flex flex-row px-12 justify-between items-center bg-[#171717] h-20"
      >
        <div id="left-menu" className="flex flex-row items-center gap-12">
          <div id="brand" className="flex flex-row items-center gap-2">
            <div id="logo" className="h-5 w-4 bg-[#E16657] rounded-md"></div>
            <div id="name" className="h-3 w-14 bg-white rounded-md"></div>
          </div>
          <div className="h-3 w-14 bg-[#1F1F1F] rounded-md"></div>
          <div className="h-3 w-14 bg-[#1F1F1F] rounded-md"></div>
        </div>
        <div id="right-menu" className="flex flex-row items-center gap-8">
          <div className="h-5 w-5 bg-[#1F1F1F] rounded-md"></div>
          <div className="h-3 w-4 bg-[#1F1F1F] rounded-md"></div>
        </div>
      </div>
      <div id="main" className="flex flex-col bg-[#050505] items-center gap-6 py-60">
        <div id="brand" className="flex flex-row items-center gap-6">
          <div id="logo" className="h-16 w-14 bg-[#E16657] rounded-md"></div>
          <div id="name" className="h-8 w-44 bg-white rounded-md"></div>
        </div>
        <div id="search" className="h-16 w-px-704 bg-[#181818] rounded-md"></div>
      </div>
    </div>
    </>
  );
}
